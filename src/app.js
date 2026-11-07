/* Client code shared by all pages (also used by build.js to pre-render the HTML).
   Globals set by each page: PAGE_LANG, ROOT (path to site root), LROOT (path to the language root). */
const HAS_DOM = typeof document !== "undefined";
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pf = key => PLATFORMS[key] || {};
const linkOf = p => p.url || p.fallback || "";
const grad = c => `linear-gradient(135deg,${c[0]},${c[1]})`;
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const DAY = 864e5;
const isNew = pr => (Date.now() - new Date(pr.added + "T00:00:00").getTime()) < NEW_DAYS * DAY;
const newCount = () => PROFILES.filter(isNew).length;
/* ---------- SCORES: computed from PLATFORM_DATA only (method on the "How we rate" page) ----------
   Free access 20% · Price 25% · Features 35% · Privacy & payments 20%. Each part is out of 10, unverified facts count half.
   Final score out of 5 = weighted average / 2, rounded to one decimal. Platforms cannot pay to change it. */
const SCORE_W = { free: 0.20, price: 0.25, feat: 0.35, priv: 0.20 };
const FEATS = ["images", "voice", "calls", "video", "group", "app"];
const half = v => v === true ? 1 : v === false ? 0 : 0.5;
const priceScore = x => x == null ? 5 : Math.max(2, Math.min(10, 10 - 0.35 * (x - 4)));
function scoreOf(d) {
  d = d || {};
  const free = d.unlimited ? 10 : d.free === true ? 7 : d.free === false ? 2 : 5;
  const price = (priceScore(d.priceMo) + priceScore(d.priceBest != null ? d.priceBest : d.priceMo)) / 2;
  const feat = 2 + 8 * FEATS.reduce((a, f) => a + half(d[f]), 0) / FEATS.length;
  const priv = 2 + 4 * half(d.discreet) + 2 * half(d.crypto) + 1 * half(d.wallet) + 1 * half(d.paypal);
  const total = free * SCORE_W.free + price * SCORE_W.price + feat * SCORE_W.feat + priv * SCORE_W.priv;
  const r1 = x => Math.round(x * 10) / 10;
  return { free: r1(free), price: r1(price), feat: r1(feat), priv: r1(priv), total: r1(total), rating: r1(total / 2) };
}
for (const k in PLATFORMS) { const d = PLATFORM_DATA[k] || {}; PLATFORMS[k].score = scoreOf(d); PLATFORMS[k].rating = PLATFORMS[k].score.rating;
  PLATFORMS[k].rank = PLATFORMS[k].rating * 1000 - (d.priceMo != null ? d.priceMo : 99); }   /* ties: lower price first */

/* A category is only published once it has at least MIN_TAG bots. Smaller ones stay in the data
   (data.js / data-candy.js) and show up automatically as soon as they reach the minimum. */
const MIN_TAG = 3;
{ const c = {}; PROFILES.forEach(p => p.tags.forEach(t => c[t] = (c[t] || 0) + 1));
  const ok = t => (c[t] || 0) >= MIN_TAG;
  for (const g of Object.keys(TAG_GROUPS)) TAG_GROUPS[g] = TAG_GROUPS[g].filter(ok);
  ALL_TAGS.splice(0, ALL_TAGS.length, ...ALL_TAGS.filter(ok));
  PROFILES.forEach(p => { p.tags = p.tags.filter(ok); }); }
const ALL_PROFILE_TAGS = [...new Set(PROFILES.flatMap(p => p.tags))];
const tagCount = t => PROFILES.filter(p => p.tags.includes(t)).length;
const R = () => (typeof ROOT !== "undefined" ? ROOT : "");
const LR = () => (typeof LROOT !== "undefined" ? LROOT : "");
const tagUrl = t => LR() + "tag/" + slug(t) + ".html";
const autoBio = p => p.creator ? ui("creator_bio", { name: p.name, p: pf(p.platform).name }) : ui("auto_bio", { name: p.name, age: p.age ? ", " + p.age : "", p: pf(p.platform).name,
  tags: p.tags.filter(t => t !== "Female" && t !== "Realistic").slice(0, 3).map(tr).join(", ") || tr("Realistic") });
const bioOf = p => typeof p.bio === "string" ? tr(p.bio) : ((p.bio && (p.bio[LANG] || p.bio.en)) || autoBio(p));
const linkFor = p => ({ url: p.link || pf(p.platform).url, fallback: pf(p.platform).fallback });   // character deep link, else platform link
const withAge = p => esc(p.name) + (p.age ? ", " + p.age : "");
const byNew = (a,b) => (!!b.img - !!a.img) || b.added.localeCompare(a.added);   // profiles with a photo first
const girlId = p => p.id || slug(p.name);
/* editor's picks (TOP_PICKS in data.js) and the default "Selection" order: picks first, then newest */
const pickRank = p => { const i = (typeof TOP_PICKS !== "undefined" ? TOP_PICKS : []).indexOf(girlId(p)); return i < 0 ? 1e9 : i; };
const topList = () => (typeof TOP_PICKS !== "undefined" ? TOP_PICKS : []).map(id => PROFILES.find(p => girlId(p) === id)).filter(Boolean);
const bySel = (a, b) => (pickRank(a) - pickRank(b)) || byNew(a, b);
const PER_PAGE = 36;
const girlUrl = p => LR() + "model/" + girlId(p) + ".html";

function ctaLink(p, label, cls = "btn btn-main") {
  const href = linkOf(p);
  return href
    ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="sponsored nofollow noopener">${label}</a>`
    : `<a class="${cls}" aria-disabled="true">${esc(ui("soon"))}</a>`;
}
function visual(img, color, letter, alt = "") {
  return `<div class="ph" style="background:${grad(color)}">${esc(letter)}</div>` +
    (img ? `<img src="${esc(/^https?:/.test(img) ? img : R() + img)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : "");
}

/* ---------- cards ---------- */
function profileCard(p) {
  const P = pf(p.platform), i = PROFILES.indexOf(p);
  return `<article class="pcard" data-i="${i}">
    ${visual(p.img, P.color, p.name[0], p.name)}
    ${p.video ? `<video class="pvid" muted loop playsinline preload="none" data-src="${esc(p.video)}" aria-hidden="true"></video>` : ""}
    <a class="pcover" href="${girlUrl(p)}" aria-label="${esc(p.name)}"></a>
    ${isNew(p) ? `<span class="new">${esc(ui("new_badge"))}</span>` : ""}${p.video ? `<span class="vbadge">▶ ${esc(ui("video_badge"))}</span>` : `<span class="online"></span>`}
    <div class="shade"></div>
    <div class="meta"><h3><a class="plink" href="${girlUrl(p)}">${esc(p.name)}</a>${p.age ? `<span>${p.age}</span>` : ""}</h3>
      <div class="on-pf">${esc(ui("on", {p: P.name}))}</div>
      <div class="chips">${p.tags.slice(0,3).map(t => `<span>${esc(tr(t))}</span>`).join("")}</div>
      ${ctaLink(linkFor(p), "💬 " + esc(ui(p.tags.includes("Male") && !p.tags.includes("Female") ? "card_btn_m" : "card_btn")), "pchat")}
    </div>
  </article>`;
}
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const mono = p => `<div class="mono" style="background:${grad(p.color)}">${esc(p.name[0])}</div>`;
function pickCard(p, i) {
  return `<div class="pick"><span class="rank">#${i+1}</span>${mono(p)}
    <h3>${esc(p.name)}</h3><div class="stars">${stars(p.rating)}<b>${p.rating}</b></div>
    <p>${esc(tr(p.desc))}</p>${ctaLink(p, esc(ui("try", {p: p.name})) + " →")}</div>`;
}
const pfKey = p => Object.keys(PLATFORMS).find(k => PLATFORMS[k] === p);
const plUrl = p => p.url ? LR() + "platform/" + pfKey(p) + ".html" : "";
function platformCard(p) {
  return `<article class="card">
    <div class="card-top">${mono(p)}<div><h3>${esc(p.name)}</h3><div class="stars">${stars(p.rating)}<b>${p.rating}</b></div></div></div>
    <p>${esc(tr(p.desc))}</p>
    <ul class="feat">${p.feats.map(f => `<li>${esc(tr(f))}</li>`).join("")}</ul>
    <div class="mini">${p.tags.map(t => `<span>${esc(tr(t))}</span>`).join("")}</div>
    ${ctaLink(p, esc(ui("visit")) + " →")}
    ${plUrl(p) ? `<a class="pl-rev" href="${plUrl(p)}">${esc(ui("pl_read"))} →</a>` : ""}
  </article>`;
}

/* sponsored cards inserted in profile grids (after the 6th and 18th card); clearly labelled "Sponsored" */
const AD_SLOTS = [5, 17];
function adCard(k) {
  const P = pf(PROMO.platform); if (!linkOf(P)) return "";
  const img = k === 0 && PROMO.img ? `<img src="${esc(/^https?:/.test(PROMO.img) ? PROMO.img : R() + PROMO.img)}" alt="" loading="lazy" onerror="this.remove()">` : "";
  return `<aside class="adcard ad${k}"><span class="ad-lbl">${esc(ui("sponsored"))}</span>${img}
    <div class="ad-body"><div class="ad-ic">${k ? "✨" : "💬"}</div><h3>${esc(ui("ad" + (k + 1) + "_t", {p: P.name}))}</h3><p>${esc(ui("ad" + (k + 1) + "_d", {p: P.name}))}</p>
    ${ctaLink(P, esc(ui("ad" + (k + 1) + "_btn", {p: P.name})) + " →", "btn btn-main")}<small>${esc(ui("promo_note"))}</small></div></aside>`;
}
const gridHtml = list => list.map((p, i) => profileCard(p) + (AD_SLOTS.includes(i) && i < list.length - 1 ? adCard(AD_SLOTS.indexOf(i)) : "")).join("");

/* ---------- browser only ---------- */
let ageOk = false;
if (HAS_DOM) {
  try { const v = localStorage.getItem("age_ok"); ageOk = !!v && Date.now() - +v < 30 * DAY; } catch (e) {}
  document.addEventListener("keydown", e => { if (e.key === "Escape") document.querySelectorAll(".overlay.show").forEach(o => o.classList.remove("show")); });
}
function passGate() {
  ageOk = true;
  try { localStorage.setItem("age_ok", Date.now()); } catch (e) {}
  $("#gate")?.remove();
  armPromo();
}

function buildPromo() {
  const p = pf(PROMO.platform); if (!p.name) return;
  const el = document.createElement("div"); el.className = "overlay"; el.id = "promo";
  el.innerHTML = `
    <div class="modal promo" role="dialog" aria-modal="true" aria-label="${esc(ui("promo_title"))}">
      <button class="x" aria-label="Close">×</button>
      <div class="visual">${visual(PROMO.img, p.color, p.name[0])}</div>
      <div class="body">
        <span class="sponsored">${esc(ui("sponsored"))}</span>
        <h2>${esc(ui("promo_title"))}</h2>
        <p>${esc(ui("promo_text"))}</p>
        <ul>${p.feats.map(f => `<li>${esc(tr(f))}</li>`).join("")}</ul>
        ${ctaLink(p, esc(ui("promo_btn", {p: p.name})) + " →")}
        <div class="note">${esc(ui("promo_note"))}</div>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener("click", e => {
    if (e.target === el || e.target.classList.contains("x") || e.target.closest(".btn-main")) el.classList.remove("show");
  });
}
let promoArmed = false;
function showPromo() {
  const el = $("#promo"); if (!el || !ageOk) return;
  try { if (sessionStorage.getItem("promo_seen")) return; sessionStorage.setItem("promo_seen", "1"); } catch (e) {}
  if (document.querySelector(".overlay.show")) return;
  el.classList.add("show");
}
function armPromo() {
  if (promoArmed || !$("#promo")) return; promoArmed = true;
  setTimeout(showPromo, PROMO.delaySeconds * 1000);
  if (PROMO.showOnExit) document.addEventListener("mouseout", e => { if (!e.relatedTarget && e.clientY <= 0) showPromo(); });
}

/* Profile modal */
function openProfile(i) {
  const p = PROFILES[i], P = pf(p.platform);
  $("#pv").innerHTML = visual(p.img, P.color, p.name[0], p.name);
  $("#pb").innerHTML = `
    <h2>${withAge(p)}</h2>
    <div class="sub">${esc(ui("char_on", {p: P.name}))}${isNew(p) ? " · 🆕 " + esc(ui("nav_new")) : ""}</div>
    <p>${esc(bioOf(p))}</p>
    <div class="chips">${p.tags.map(t => `<a href="${tagUrl(t)}">${esc(tr(t))}</a>`).join("")}</div>
    ${ctaLink(linkFor(p), "💬 " + esc(ui("chat_with", {name: p.name})) + " →")}
    <div class="note">${esc(ui("opens", {p: P.name}))} · <a href="${girlUrl(p)}">${esc(ui("full_profile"))}</a></div>`;
  $("#profile").classList.add("show");
}
/* video previews: play on hover (mouse only), loaded only when first hovered */
function wireVideos() {
  if (!window.matchMedia || !matchMedia("(hover: hover)").matches) return;
  document.addEventListener("mouseover", e => { const c = e.target.closest && e.target.closest(".pcard"); const v = c && c.querySelector("video.pvid"); if (!v || c.dataset.playing) return;
    c.dataset.playing = "1"; if (!v.src) v.src = v.dataset.src; v.play().then(() => c.classList.add("vplay")).catch(() => {}); });
  document.addEventListener("mouseout", e => { const c = e.target.closest && e.target.closest(".pcard"); if (!c || (e.relatedTarget && c.contains(e.relatedTarget))) return;
    const v = c.querySelector("video.pvid"); delete c.dataset.playing; c.classList.remove("vplay"); if (v) v.pause(); });
}
/* Top 10 row: arrow buttons instead of a visible scrollbar */
function wireTop10() {
  const r = $("#t10"); if (!r) return; const prev = $(".t10-arr.prev"), next = $(".t10-arr.next");
  const upd = () => { prev.hidden = r.scrollLeft < 8; next.hidden = r.scrollLeft + r.clientWidth >= r.scrollWidth - 8; };
  prev.addEventListener("click", () => r.scrollBy({left: -r.clientWidth * 0.8}));
  next.addEventListener("click", () => r.scrollBy({left: r.clientWidth * 0.8}));
  r.addEventListener("scroll", upd, {passive: true}); window.addEventListener("resize", upd); upd();
}
function wireProfileGrid() {
  wireVideos(); wireTop10();
  const g = $("#grid"); if (!g) return;
  /* photo/name = link to /model/<id>, "Chat" button = affiliate link: nothing to intercept */
  $("#profile")?.addEventListener("click", e => { if (e.target.id === "profile" || e.target.classList.contains("x")) $("#profile").classList.remove("show"); });
}

/* Home page: search, tag filter, sort, "New" */
const BASES = {
  women: p => p.tags.includes("Female") && !p.tags.includes("Anime"),
  men:   p => p.tags.includes("Male"),
  anime: p => p.tags.includes("Anime")
};
const pagerHtml = (p, n) => {
  const nums = [...new Set([1, p - 1, p, p + 1, n])].filter(x => x >= 1 && x <= n).sort((a, b) => a - b);
  let out = "", last = 0;
  for (const x of nums) { if (x - last > 1) out += `<span class="pg-gap">…</span>`; out += `<a href="#grid" data-p="${x}" class="pg-n${x === p ? " on" : ""}"${x === p ? ' aria-current="page"' : ""}>${x}</a>`; last = x; }
  return `${p > 1 ? `<a href="#grid" data-p="${p - 1}" class="pg-btn">${esc(ui("pg_prev"))}</a>` : ""}${out}
    ${p < n ? `<a href="#grid" data-p="${p + 1}" class="pg-btn">${esc(ui("pg_next"))}</a>` : ""}<span class="pg-info">${esc(ui("pg", {p, n}))}</span>`;
};
const inBase = (b, p) => !b || !BASES[b] || BASES[b](p);
function initHome() {
  const BASE_KEY = typeof PAGE_BASE !== "undefined" ? PAGE_BASE : "";
  const LIST = PROFILES.filter(p => inBase(BASE_KEY, p));
  const tagCount = t => LIST.filter(p => p.tags.includes(t)).length;
  /* ---- dropdown filters: OR inside a group, AND between groups ---- */
  const AGE_RANGES = [["18-21",18,21],["22-25",22,25],["26-30",26,30],["31-40",31,40],["41+",41,1e9]];
  const MAIN = ["gender","style","age","origin","hair","body","app"];
  const MORE = ["personality","vibe","role","relationship","fantasy","kink","features"];
  const sel = {}; [...MAIN, ...MORE].forEach(g => sel[g] = new Set());
  const groupOf = t => Object.keys(TAG_GROUPS).find(g => TAG_GROUPS[g].includes(t));
  const qp = new URLSearchParams(location.search).get("tag");
  const pre = ALL_PROFILE_TAGS.find(t => slug(t) === qp); if (pre && sel[groupOf(pre)]) sel[groupOf(pre)].add(pre);
  const qa = new URLSearchParams(location.search).get("app"); if (qa && PLATFORMS[qa]) sel.app.add(qa);
  let onlyNew = location.hash === "#new", openG = null, showMore = false, sortMode = onlyNew ? "new" : "sel", page = 1;

  const inAge = (p, k) => { const r = AGE_RANGES.find(x => x[0] === k); return p.age && p.age >= r[1] && p.age <= r[2]; };
  const matchGroup = (p, g) => !sel[g].size || [...sel[g]].some(v =>
    g === "age" ? inAge(p, v) : g === "app" ? p.platform === v : p.tags.includes(v));
  const options = g => {
    if (g === "age") return AGE_RANGES.map(r => [r[0], r[0], LIST.filter(p => inAge(p, r[0])).length]);
    if (g === "app") return Object.keys(PLATFORMS).map(k => [k, PLATFORMS[k].name, LIST.filter(p => p.platform === k).length]);
    return TAG_GROUPS[g].map(t => [t, tr(t), tagCount(t)]).sort((a, b) => a[1].localeCompare(b[1], LANG));
  };
  const label = g => ui("grp_" + g);
  const dropdown = g => {
    const n = sel[g].size, opts = options(g).filter(o => o[2] > 0 || sel[g].has(o[0]));
    if (!opts.length) return "";
    return `<div class="fdrop${openG === g ? " open" : ""}${n ? " has" : ""}" data-g="${g}">
      <button class="fbtn" type="button" aria-expanded="${openG === g}">${esc(label(g))}${n ? ` <b>${n}</b>` : ""} <span class="car">▾</span></button>
      <div class="fpanel">${opts.map(o => `<label class="fopt"><input type="checkbox" data-v="${esc(o[0])}" ${sel[g].has(o[0]) ? "checked" : ""}>
        <span>${esc(o[1])}</span><small>${o[2]}</small></label>`).join("")}</div></div>`;
  };
  const renderTags = () => {
    const chips = Object.entries(sel).flatMap(([g, set]) => [...set].map(v => [g, v,
      g === "app" ? PLATFORMS[v].name : g === "age" ? ui("grp_age") + " " + v : tr(v)]));
    $("#tags").innerHTML = `<div class="filters">${MAIN.map(dropdown).join("")}
        <button class="fmore${showMore ? " on" : ""}" type="button" id="fmore">${esc(ui(showMore ? "f_less" : "f_more"))}</button></div>
      ${showMore ? `<div class="filters more">${MORE.map(dropdown).join("")}</div>` : ""}
      ${chips.length ? `<div class="fchips">${chips.map(([g, v, l]) => `<button class="fchip" data-g="${g}" data-v="${esc(v)}">${esc(l)} ×</button>`).join("")}
        <button class="clear" id="freset">${esc(ui("clear"))}</button></div>` : ""}`;
  };
  const renderGrid = () => {
    const q = $("#q").value.trim().toLowerCase();
    let list = LIST.filter(p =>
      (!onlyNew || isNew(p)) && Object.keys(sel).every(g => matchGroup(p, g)) &&
      (!q || [p.name, bioOf(p), pf(p.platform).name, ...p.tags, ...p.tags.map(tr)].join(" ").toLowerCase().includes(q)));
    list.sort(sortMode === "name" ? (a,b) => a.name.localeCompare(b.name) : sortMode === "new" ? byNew : bySel);
    const pages = Math.max(1, Math.ceil(list.length / PER_PAGE)); if (page > pages) page = pages;
    const shown = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    const filtered = onlyNew || Object.values(sel).some(s => s.size) || q;
    $("#count").innerHTML = `<b>${list.length}</b> ` + esc(ui(onlyNew ? "count_new" : "count", {n:""}).trim()) +
      (filtered ? `<button class="clear" id="clear">${esc(ui("clear"))}</button>` : "");
    $("#new-btn")?.classList.toggle("on", onlyNew);
    $("#grid").innerHTML = list.length ? gridHtml(shown) : `<div class="empty">${esc(ui("empty"))}</div>`;
    document.querySelectorAll("#sort [data-s]").forEach(b => b.classList.toggle("on", b.dataset.s === sortMode));
    $("#pager").innerHTML = pages > 1 ? pagerHtml(page, pages) : "";
  };
  const resetAll = () => { onlyNew = false; page = 1; Object.values(sel).forEach(s => s.clear()); $("#q").value = ""; history.replaceState(null, "", location.pathname); renderTags(); renderGrid(); };
  $("#tags").addEventListener("click", e => {
    const btn = e.target.closest(".fbtn");
    if (btn) { const g = btn.parentElement.dataset.g; openG = openG === g ? null : g; renderTags(); return; }
    if (e.target.id === "fmore") { showMore = !showMore; openG = null; renderTags(); return; }
    if (e.target.id === "freset") { resetAll(); return; }
    const chip = e.target.closest(".fchip");
    if (chip) { sel[chip.dataset.g].delete(chip.dataset.v); page = 1; renderTags(); renderGrid(); }
  });
  $("#tags").addEventListener("change", e => {
    const cb = e.target.closest("input[type=checkbox]"); if (!cb) return;
    const g = cb.closest(".fdrop").dataset.g; cb.checked ? sel[g].add(cb.dataset.v) : sel[g].delete(cb.dataset.v);
    page = 1; renderTags(); renderGrid();
  });
  document.addEventListener("click", e => { if (openG && !e.target.closest(".fdrop")) { openG = null; renderTags(); } });
  const toList = () => window.scrollTo({top: $("#count").getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth"});
  $("#new-btn")?.addEventListener("click", () => { onlyNew = !onlyNew; sortMode = "new"; page = 1; renderGrid(); toList(); });
  window.addEventListener("hashchange", () => { onlyNew = location.hash === "#new"; if (onlyNew) sortMode = "new"; page = 1; renderGrid(); });
  $("#count").addEventListener("click", e => { if (e.target.id === "clear") resetAll(); });
  $("#q").addEventListener("input", () => { page = 1; renderGrid(); });
  $("#sort").addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (!b) return; sortMode = b.dataset.s; page = 1; renderGrid(); });
  $("#pager").addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (!b) return; e.preventDefault(); page = +b.dataset.p; renderGrid(); toList(); });
  renderTags(); renderGrid();
}

/* Platforms page: tag filter */
function initPlatforms() {
  const LIST = Object.values(PLATFORMS);
  const TAGS = [...new Set(LIST.flatMap(p => p.tags))];
  const active = new Set();
  const render = () => {
    $("#ptags").innerHTML = [...TAGS].sort((a,b) => tr(a).localeCompare(tr(b), LANG))
      .map(t => `<span class="tag ${active.has(t)?"on":""}" data-t="${esc(t)}">${esc(tr(t))}</span>`).join("");
    const list = LIST.filter(p => [...active].every(t => p.tags.includes(t))).sort((a,b) => b.rank - a.rank);
    $("#pgrid").innerHTML = list.length ? list.map(platformCard).join("") : `<div class="empty">${esc(ui("empty_pl"))}</div>`;
  };
  $("#ptags").addEventListener("click", e => { const t = e.target.dataset.t; if (!t) return; active.has(t) ? active.delete(t) : active.add(t); render(); });
  render();
}

/* Boot (every page) */
function boot(page) {
  if (ageOk) $("#gate")?.remove();
  $("#enter")?.addEventListener("click", passGate);
  $("#lang")?.addEventListener("change", e => { location.href = e.target.value; });
  if (page !== "legal") buildPromo();
  wireProfileGrid();
  if (page === "home") initHome();
  if (page === "platforms") initPlatforms();
  if (page === "tags") $("#tq")?.addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".tagtile").forEach(a => { a.style.display = !q || a.dataset.n.includes(q) ? "" : "none"; });
    document.querySelectorAll(".tgroup").forEach(g => { g.style.display = [...g.querySelectorAll(".tagtile")].some(a => a.style.display !== "none") ? "" : "none"; });
  });
  if (ageOk) armPromo();
}
