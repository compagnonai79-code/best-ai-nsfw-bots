/* =====================================================================
   Static site generator — run:  node build.js
   Reads src/ and writes the whole site (6 languages) into public/.
   English at the root, other languages in /fr/, /es/, /de/, /pt/, /hi/.
   ===================================================================== */
const fs = require("fs"), path = require("path"), vm = require("vm");
const SRC = path.join(__dirname, "src"), OUT = path.join(__dirname, "public");
const imgExists = f => !!f && fs.existsSync(path.join(__dirname, f));
const NOIMG = "\n;/* images not uploaded yet → placeholder */\nfor (const p of PROFILES) if (p.img && p.img.startsWith(\"images/\") && !IMG_OK.includes(p.img)) p.img = \"\";\nif (PROMO.img.startsWith(\"images/\") && !IMG_OK.includes(PROMO.img)) PROMO.img = \"\";\n";
const readRaw = f => fs.readFileSync(path.join(SRC, f), "utf8");
let IMG_OK = [];
const read = f => f === "data.js" ? readRaw(f) + `\n;const IMG_OK = ${JSON.stringify(IMG_OK)};` + NOIMG : readRaw(f);
const CLIENT = ["data.js", "data-candy.js", "i18n.js", "i18n-pages.js", "i18n-tags.js", "app.js"];

/* Load the client scripts in a sandbox for one language */
{ const src = readRaw("data.js"); IMG_OK = [...new Set([...src.matchAll(/"(images\/[^"]+)"/g)].map(m => m[1]))].filter(imgExists); }
function context(lang) {
  const ctx = { PAGE_LANG: lang, console, Date, URLSearchParams };
  vm.createContext(ctx);
  vm.runInContext(CLIENT.map(read).join("\n;\n") +
    "\n;this.X={SITE,PLATFORMS,PLATFORM_DATA,PROFILES,PROMO,NEW_DAYS,LANGS,ui,tr,esc,slug,isNew,newCount,tagCount,ALL_PROFILE_TAGS,TAG_GROUPS,ALL_TAGS,profileCard,pickCard,platformCard,visual,ctaLink,girlUrl,tagUrl,inBase,byNew,bioOf,linkFor,withAge,get LANG(){return LANG}};", ctx);
  ctx.X._ctx = ctx;
  return ctx.X;
}
const base = context("en");
const { SITE, LANGS } = base;
for (const p of base.PROFILES) for (const t of p.tags)
  if (!base.ALL_TAGS.includes(t)) console.warn(`⚠️  Profile "${p.name}": tag "${t}" is not in TAG_GROUPS (data.js)`);
for (const l of Object.keys(LANGS)) if (l !== "en") { const X = context(l);
  const miss = base.ALL_TAGS.filter(t => X.tr(t) === t && /[a-z]/.test(t) && l === "hi"); if (miss.length) console.warn(`ℹ️  hi: ${miss.length} tags shown in English`); }
const LEGAL = require("./src/legal.js")(SITE);
const LANG_LIST = Object.keys(LANGS);
const prefix = l => (l === "en" ? "" : l + "/");
const absUrl = (l, file) => SITE.url + "/" + (prefix(l) + file).replace(/index\.html$/, "").replace(/\.html$/, "");
const LEGAL_PAGES = [["terms","legal_terms"],["cookies","legal_cookies"],["dmca","legal_dmca"],["privacy","legal_privacy"],["ai-disclosure","legal_ai"],["legal-notice","legal_notice"]];
const LEGAL_KEY = { "terms":"terms","cookies":"cookies","dmca":"dmca","privacy":"privacy","ai-disclosure":"ai","legal-notice":"notice" };
const LEGAL_LANGS = ["en", "fr"];

/* ---------- layout ---------- */
function layout(X, lang, file, o) {
  const depth = (prefix(lang) + file).split("/").length - 1;
  const root = "../".repeat(depth), lr = root + prefix(lang);
  const u = X.ui, e = X.esc, L = f => lr + f;
  const altLangs = o.altLangs || LANG_LIST;
  const alternates = altLangs.map(l => `<link rel="alternate" hreflang="${l}" href="${absUrl(l, file)}">`).join("\n") +
    `\n<link rel="alternate" hreflang="x-default" href="${absUrl("en", file)}">`;
  const canonical = o.canonical || absUrl(lang, file);
  const langOptions = LANG_LIST.map(l => {
    const target = altLangs.includes(l) ? file : "index.html";
    return `<option value="${root + prefix(l) + target}" ${l === lang ? "selected" : ""}>${LANGS[l]}</option>`;
  }).join("");
  const cur = id => (o.nav === id ? ' class="cur hide-m"' : ' class="hide-m"');
  const newBtn = o.page === "home"
    ? `<button class="new-pill" id="new-btn"><span class="dot"></span>${e(u("nav_new"))} <b>${X.newCount()}</b></button>`
    : `<a class="new-pill" href="${L("index.html#new")}"><span class="dot"></span>${e(u("nav_new"))} <b>${X.newCount()}</b></a>`;
  const legalLinks = LEGAL_PAGES.map(([f, k]) => `<a href="${L("legal/" + f + ".html")}">${e(u(k))}</a>`).join("");

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(o.title)}</title>
<meta name="description" content="${e(o.desc || "")}">
<meta name="rating" content="adult">
${o.noindex ? '<meta name="robots" content="noindex, follow">' : ""}
<link rel="canonical" href="${canonical}">
${alternates}
<meta property="og:title" content="${e(o.title)}">
<meta property="og:description" content="${e(o.desc || "")}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700${lang === "hi" ? "&family=Noto+Sans+Devanagari:wght@400;600;700" : ""}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/style.css">
</head>
<body>

<div id="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
  <div class="box">
    <h2 id="gate-title">${e(u("gate_title"))}</h2>
    <p>${e(u("gate_text"))}</p>
    <div class="row">
      <button class="btn btn-main" id="enter">${e(u("gate_enter"))}</button>
      <a class="btn btn-ghost" href="https://www.google.com">${e(u("gate_leave"))}</a>
    </div>
  </div>
</div>

<header>
  <div class="wrap">
    <a class="logo" href="${L("index.html")}">best-ai-<span class="grad">nsfw-bots</span></a>
    <nav>
      <a href="${L("index.html")}"${cur("home")}>${e(u("nav_all"))}</a>
      <a href="${L("women.html")}"${cur("women")}>${e(u("nav_women"))}</a>
      <a href="${L("men.html")}"${cur("men")}>${e(u("nav_men"))}</a>
      <a href="${L("anime.html")}"${cur("anime")}>${e(u("nav_anime"))}</a>
      <a href="${L("platforms.html")}"${cur("platforms")}>${e(u("nav_platforms"))}</a>
      <a href="${L("tags.html")}"${cur("tags")}>${e(u("nav_tags"))}</a>
      ${newBtn}
      <select class="lang" id="lang" aria-label="Language">${langOptions}</select>
    </nav>
  </div>
</header>

<main class="wrap">
${o.body}
</main>

${o.modal ? `<div class="overlay" id="profile">
  <div class="modal" role="dialog" aria-modal="true">
    <button class="x" aria-label="Close">×</button>
    <div class="visual" id="pv"></div>
    <div class="body" id="pb"></div>
  </div>
</div>` : ""}

<footer>
  <div class="wrap cols">
    <div><a class="logo" href="${L("index.html")}">best-ai-<span class="grad">nsfw-bots</span></a>
      <p class="fdesc">${e(u("footer"))}</p></div>
    <div><h4>${e(u("ft_explore"))}</h4>
      <a href="${L("index.html")}">${e(u("nav_all"))}</a><a href="${L("women.html")}">${e(u("nav_women"))}</a><a href="${L("men.html")}">${e(u("nav_men"))}</a><a href="${L("anime.html")}">${e(u("nav_anime"))}</a><a href="${L("platforms.html")}">${e(u("nav_platforms"))}</a>
      <a href="${L("tags.html")}">${e(u("nav_tags"))}</a><a href="${L("index.html#new")}">${e(u("nav_new"))}</a></div>
    <div><h4>${e(u("ft_site"))}</h4>
      <a href="${L("how-we-rate.html")}">${e(u("nav_how"))}</a><a href="${L("data.html")}">${e(u("nav_data"))}</a>
      <a href="${L("sitemap.html")}">${e(u("nav_sitemap"))}</a><a href="${L("contact.html")}">${e(u("nav_contact"))}</a></div>
    <div><h4>${e(u("ft_legal"))}</h4>${legalLinks}</div>
    <div><h4>${e(u("ft_lang"))}</h4>${LANG_LIST.map(l =>
      `<a href="${root + prefix(l) + (altLangs.includes(l) ? file : "index.html")}" hreflang="${l}" lang="${l}">${LANGS[l]}</a>`).join("")}</div>
  </div>
  <div class="wrap copy">© ${new Date().getFullYear()} ${SITE.domain}</div>
</footer>

<script>var PAGE_LANG="${lang}",ROOT="${root}",LROOT="${lr}"${o.base ? `,PAGE_BASE="${o.base}"` : ""};</script>
${CLIENT.map(f => `<script src="${root}assets/${f}"></script>`).join("\n")}
<script>boot("${o.page}");</script>
</body>
</html>`;
}

/* ---------- page bodies ---------- */
const pages = [];   // {file, build(X, lang) -> layout options, altLangs?}

for (const [file, base] of [["index.html",""],["women.html","women"],["men.html","men"],["anime.html","anime"]]) pages.push({ file, build: (X) => {
  const u = X.ui, e = X.esc, k = base ? "_" + base : "";
  const list = [...X.PROFILES].filter(p => X.inBase(base, p)).sort(X.byNew);
  const sorted = [...X.ALL_PROFILE_TAGS].filter(t => list.some(p => p.tags.includes(t))).sort((a,b) => X.tr(a).localeCompare(X.tr(b), X.LANG));
  return { page:"home", nav: base || "home", base, modal:true, title:u("meta_home_t" + k), desc:u("meta_home_d" + k), body: `
  <section class="hero">
    <h1>${u("hero_title" + k)}</h1>
    <p>${e(u(base ? "hero_sub_b" : "hero_sub", {n: list.length}))}</p>
    <div class="search"><input id="q" type="search" placeholder="${e(u("search"))}" aria-label="Search"></div>
  </section>
  <div class="tags" id="tags">${sorted.map(t => `<a class="tag" href="${X.tagUrl(t)}">${e(X.tr(t))}<small>${X.tagCount(t)}</small></a>`).join("")}</div>
  <p class="all-tags"><a href="tags.html">${e(u("all_tags_link"))}</a></p>
  <div class="toolbar">
    <span class="count" id="count"><b>${list.length}</b> ${e(u("count", {n:""}).trim())}</span>
    <select id="sort" aria-label="Sort"><option value="new">${e(u("sort_new"))}</option><option value="name">${e(u("sort_name"))}</option></select>
  </div>
  <div class="pgrid" id="grid">${list.map(X.profileCard).join("")}</div>
  <section class="info">
    <h2>${e(u("how_title"))}</h2>
    <ul><li>${u("how_1")}</li><li>${u("how_2")}</li><li>${u("how_3")}</li></ul>
  </section>
  <section class="info" id="disclosure"><h2>${e(u("disc_title"))}</h2><p>${e(u("disc_home"))}</p></section>` };
}});

pages.push({ file: "platforms.html", build: (X) => {
  const u = X.ui, e = X.esc, LIST = Object.values(X.PLATFORMS);
  return { page:"platforms", nav:"platforms", title:u("meta_pl_t"), desc:u("meta_pl_d"), body: `
  <section class="hero"><h1>${u("pl_title")}</h1><p>${e(u("pl_sub"))}</p>
    <p class="hero-links"><a href="how-we-rate.html">${e(u("nav_how"))} →</a> · <a href="data.html">${e(u("nav_data"))} →</a></p></section>
  <h2 class="section-title">${e(u("top_picks"))}</h2>
  <div class="picks">${LIST.filter(p => p.top).sort((a,b) => b.rating - a.rating).map(X.pickCard).join("")}</div>
  <h2 class="section-title">${e(u("all_pl"))}</h2>
  <div class="tags" id="ptags" style="justify-content:flex-start"></div>
  <div class="grid" id="pgrid">${[...LIST].sort((a,b) => b.rating - a.rating).map(X.platformCard).join("")}</div>
  <section class="info"><h2>${e(u("guide_title"))}</h2><ul>${[1,2,3,4,5].map(i => `<li>${u("g" + i)}</li>`).join("")}</ul></section>
  <section class="info"><h2>${e(u("faq_title"))}</h2>${[1,2,3].map(i => `<details><summary>${e(u("q" + i))}</summary><p>${e(u("a" + i))}</p></details>`).join("")}</section>
  <section class="info" id="disclosure"><h2>${e(u("disc_title"))}</h2><p>${e(u("disc_pl"))}</p></section>` };
}});

const GRP_COLORS = [["#ff3d8b","#ff8a5c"],["#8b5cf6","#ec4899"],["#ff5a36","#ffb03a"],["#06b6d4","#8b5cf6"],["#f59e0b","#ef4444"],["#a855f7","#f472b6"],
  ["#e11d48","#9333ea"],["#f43f5e","#fb7185"],["#7c3aed","#06b6d4"],["#ec4899","#8b5cf6"],["#be123c","#7c3aed"],["#2ee6a0","#06b6d4"]];
const groupOf = t => Object.keys(base.TAG_GROUPS).find(g => base.TAG_GROUPS[g].includes(t));

pages.push({ file: "tags.html", build: (X) => {
  const u = X.ui, e = X.esc, groups = Object.entries(X.TAG_GROUPS);
  const filled = X.ALL_TAGS.filter(t => X.tagCount(t) > 0).length;
  return { page:"tags", nav:"tags", title:u("meta_tags_t"), desc:u("meta_tags_d"), body: `
  <section class="hero"><h1>${u("tags_title")}</h1><p>${e(u("tags_sub", {n: X.ALL_TAGS.length}))}</p>
    <div class="search"><input id="tq" type="search" placeholder="${e(u("search"))}" aria-label="Search"></div></section>
  <nav class="grpnav">${groups.map(([g]) => `<a href="#g-${g}">${e(u("grp_" + g))}</a>`).join("")}</nav>
  ${groups.map(([g, tags], gi) => {
    const sorted = [...tags].sort((a,b) => (X.tagCount(b) > 0) - (X.tagCount(a) > 0) || X.tr(a).localeCompare(X.tr(b), X.LANG));
    const c = GRP_COLORS[gi % GRP_COLORS.length];
    return `<section class="tgroup" id="g-${g}"><h2>${e(u("grp_" + g))} <small>${tags.length}</small></h2>
    <div class="tagtiles">${sorted.map(t => { const n = X.tagCount(t);
      return `<a class="tagtile${n ? "" : " zero"}" href="${X.tagUrl(t)}" data-n="${e((t + " " + X.tr(t)).toLowerCase())}"><span class="tt-dot" style="background:linear-gradient(135deg,${c[0]},${c[1]})"></span>
      <span class="tt-name">${e(X.tr(t))}</span><span class="tt-n">${n}</span></a>`; }).join("")}</div></section>`; }).join("")}` };
}});

/* one page per tag (all categories; empty ones are noindex and left out of sitemap.xml) */
for (const t of base.ALL_TAGS) pages.push({ file: "tag/" + base.slug(t) + ".html", build: (X) => {
  const u = X.ui, e = X.esc, list = X.PROFILES.filter(p => p.tags.includes(t)).sort(X.byNew);
  const name = X.tr(t), grp = X.TAG_GROUPS[groupOf(t)];
  const related = grp.filter(x => x !== t && X.tagCount(x) > 0).concat(X.ALL_PROFILE_TAGS.filter(x => x !== t && !grp.includes(x)))
    .filter((x, i, a) => a.indexOf(x) === i).slice(0, 30);
  return { page:"tag", nav:"tags", modal:true, noindex: list.length === 0,
    title:u("meta_tag_t", {tag:name, n:list.length}), desc:u("meta_tag_d", {tag:name, n:list.length}), body: `
  <p class="crumb"><a href="../tags.html">${e(u("tag_all"))}</a> · <a href="../tags.html#g-${groupOf(t)}">${e(u("grp_" + groupOf(t)))}</a></p>
  <section class="hero"><h1>${u("tag_h1", {tag: e(name)})}</h1><p>${e(list.length ? u("tag_sub", {n:list.length, tag:name}) : u("tag_empty"))}</p></section>
  ${list.length ? `<div class="pgrid" id="grid">${list.map(X.profileCard).join("")}</div>` : `<p class="hero-links"><a href="../index.html">${e(u("back_all"))}</a></p>`}
  <h2 class="section-title">${e(u("tags_title").replace(/<[^>]+>/g, ""))}</h2>
  <div class="tags" style="justify-content:flex-start">${related.map(x => `<a class="tag" href="${X.slug(x)}.html">${e(X.tr(x))}<small>${X.tagCount(x)}</small></a>`).join("")}</div>
  <p class="all-tags"><a href="../tags.html">${e(u("all_tags_link"))}</a></p>` };
}});

/* one page per model: /model/<id> */
const GLANCE = ["gender","style","origin","hair","body","personality","role","relationship","fantasy"];
for (const g0 of base.PROFILES) pages.push({ file: "model/" + (g0.id || base.slug(g0.name)) + ".html", build: (X) => {
  const g = X.PROFILES.find(p => (p.id || p.name) === (g0.id || g0.name));
  const u = X.ui, e = X.esc, P = X.PLATFORMS[g.platform], D = X.PLATFORM_DATA[g.platform] || {};
  const v = { name: g.name, p: P.name };
  const groupOf = t => Object.keys(X.TAG_GROUPS).find(k => X.TAG_GROUPS[k].includes(t));
  const main = g.tags.find(t => !["Female","Male","Realistic"].includes(t)) || g.tags[0];
  const gen = g.tags.includes("Male") && !g.tags.includes("Female") ? "_m" : "";
  const score = p => p.tags.filter(t => g.tags.includes(t)).length * 2 + (p.platform === g.platform ? 1 : 0)
    + (["Anime","Realistic","Male","Female"].every(t => p.tags.includes(t) === g.tags.includes(t)) ? 3 : 0);
  const similar = X.PROFILES.filter(p => p !== g).map(p => [p, score(p)]).sort((a,b) => b[1] - a[1]).slice(0, 4).map(x => x[0]);
  const yn = val => val === true ? u("yes") : val === false ? u("no") : u("pending");
  const cta = (cls) => X.ctaLink(X.linkFor(g), "💬 " + e(u("chat_with", {name: g.name})) + " →", cls);
  const rows = [[u("m_platform"), `<a href="../platforms.html">${e(P.name)}</a> · ★ ${P.rating}`],
    [u("grp_age"), g.age ? e(String(g.age)) : e(u("m_not_set"))],
    ...GLANCE.map(k => [u("grp_" + k), g.tags.filter(t => groupOf(t) === k).map(t => `<a href="../tag/${X.slug(t)}.html">${e(X.tr(t))}</a>`).join(", ")]).filter(r => r[1]),
    [u("m_features", {p: P.name}), `${e(u("col_images"))} : ${e(yn(D.images))} · ${e(u("col_voice"))} : ${e(yn(D.voice))} · ${e(u("col_video"))} : ${e(yn(D.video))}`],
    [u("col_free"), e(yn(D.free))]];
  const faq = [1,2,3,4].map(i => [u("fq" + i, v), u("fa" + i + (i === 1 ? gen : ""), {...v, img: yn(D.images).toLowerCase(), voice: yn(D.voice).toLowerCase()})]);
  return { page:"model", nav:"home", title:u("girl_meta_t", {name:g.name, age:g.age || "", p:P.name}).replace(/, –/, " –").replace(/ ,/, ""),
    desc:u("girl_meta_d", {name:g.name, age:g.age || "18+", p:P.name, bio:X.bioOf(g)}).slice(0, 300), body: `
  <nav class="crumb"><a href="../index.html">${e(u("nav_girls"))}</a> › <a href="../tag/${X.slug(main)}.html">${e(X.tr(main))}</a> › <span>${e(g.name)}</span></nav>
  <section class="girl">
    <div class="g-visual">${X.visual(g.img, P.color, g.name[0], g.name)}${X.isNew(g) ? `<span class="new">${e(u("new_badge"))}</span>` : ""}</div>
    <div class="g-body">
      <div class="g-pf"><span class="mono-s" style="background:linear-gradient(135deg,${P.color[0]},${P.color[1]})">${e(P.name[0])}</span>${e(P.name)} <span class="stars">★ ${P.rating}</span></div>
      <h1>${X.withAge(g)}</h1>
      <div class="tags" style="justify-content:flex-start">${g.tags.map(t => `<a class="tag" href="../tag/${X.slug(t)}.html">${e(X.tr(t))}</a>`).join("")}</div>
      <p class="g-bio">${e(X.bioOf(g))}</p>
      ${cta("btn btn-main btn-xl")}
      <div class="note">${e(u("m_fiction"))}</div>
    </div>
  </section>

  <div class="mgrid">
    <section class="info"><h2>${e(u("m_glance"))}</h2>
      <table class="glance">${rows.map(r => `<tr><th>${e(r[0])}</th><td>${r[1]}</td></tr>`).join("")}</table></section>
    <section class="info"><h2>${e(u("m_start_t", v))}</h2>
      <ol class="steps">${[1,2,3].map(i => `<li>${e(u("m_s" + i, v))}</li>`).join("")}</ol>
      ${cta("btn btn-main")}</section>
  </div>

  <section class="info"><h2>${e(u("m_about", v))}</h2>
    <p>${e(X.tr(P.desc))}</p>
    <ul class="feat">${P.feats.map(f => `<li>${e(X.tr(f))}</li>`).join("")}</ul>
    <p class="hero-links" style="text-align:left"><a href="../platforms.html">${e(u("m_see_pl"))}</a> · <a href="../data.html">${e(u("nav_data"))} →</a> · <a href="../how-we-rate.html">${e(u("nav_how"))} →</a></p></section>

  <section class="info"><h2>${e(u("m_faq_t", v))}</h2>
    <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>

  <h2 class="section-title">${e(u("similar"))}</h2>
  <div class="pgrid sim4" id="grid">${similar.map(X.profileCard).join("")}</div>
  <p class="all-tags"><a href="../tag/${X.slug(main)}.html">${e(u("m_more_tag", {tag: X.tr(main)}))}</a></p>

  <div class="mbar"><span class="mb-img">${X.visual(g.img, P.color, g.name[0], g.name)}</span>
    <span class="mb-txt"><b>${e(g.name)}</b><small>${e(P.name)}</small></span>${cta("btn btn-main")}</div>
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}).replace(/</g,"\\u003c")}</script>` };
}});

pages.push({ file: "how-we-rate.html", build: (X) => {
  const u = X.ui, e = X.esc, W = [30, 25, 20, 15, 10];
  return { page:"how", title:u("meta_how_t"), desc:u("meta_how_d"), body: `
  <section class="hero"><h1>${u("how_h1")}</h1><p>${e(u("how_intro"))}</p></section>
  <section class="info"><h2>${e(u("crit_title"))}</h2>
    <div class="crit">${[1,2,3,4,5].map((i, k) => `<div class="crit-row"><div class="crit-w">${W[k]}%</div>
      <div><h3>${e(u("c" + i + "_t"))}</h3><p>${e(u("c" + i))}</p></div></div>`).join("")}</div></section>
  <section class="info"><h2>${e(u("how_ind_t"))}</h2><p>${e(u("how_ind"))}</p></section>
  <section class="info"><h2>${e(u("how_upd_t"))}</h2><p>${e(u("how_upd"))}</p>
    <p><a class="btn btn-main" href="data.html">${e(u("how_data_link"))}</a></p>
    <p>${u("how_report", {contact: `<a href="contact.html">${e(u("contact_link"))}</a>`})}</p></section>` };
}});

pages.push({ file: "data.html", build: (X) => {
  const u = X.ui, e = X.esc;
  const yn = v => v === true ? `<span class="yes">${e(u("yes"))}</span>` : v === false ? `<span class="no">${e(u("no"))}</span>` : `<span class="pend">${e(u("pending"))}</span>`;
  const rows = Object.entries(X.PLATFORMS).sort((a,b) => b[1].rating - a[1].rating).map(([k, p]) => {
    const d = X.PLATFORM_DATA[k] || {};
    return `<tr><td><strong>${e(p.name)}</strong></td><td>${p.rating}</td><td>${yn(d.free)}</td>
      <td>${d.price ? e(d.price) : `<span class="pend">${e(u("pending"))}</span>`}</td>
      <td>${yn(d.images)}</td><td>${yn(d.voice)}</td><td>${yn(d.video)}</td><td>${yn(d.app)}</td>
      <td>${d.checked ? e(d.checked) : `<span class="pend">${e(u("pending"))}</span>`}</td>
      <td>${X.ctaLink(p, e(u("visit")) + " →", "tbl-link")}</td></tr>`; }).join("");
  const cols = ["col_platform","col_score","col_free","col_price","col_images","col_voice","col_video","col_app","col_checked"];
  return { page:"data", title:u("meta_data_t"), desc:u("meta_data_d"), body: `
  <section class="hero"><h1>${u("data_h1")}</h1><p>${e(u("data_sub"))}</p></section>
  <div class="tablewrap"><table class="data"><thead><tr>${cols.map(c => `<th>${e(u(c))}</th>`).join("")}<th></th></tr></thead><tbody>${rows}</tbody></table></div>
  <p class="data-note">${e(u("data_note"))}</p>
  <p class="hero-links"><a href="ROOT_PLACEHOLDERdata.csv" download>⬇ ${e(u("data_csv"))}</a> · <a href="how-we-rate.html">${e(u("data_how"))}</a></p>` };
}});

pages.push({ file: "contact.html", build: (X) => {
  const u = X.ui, e = X.esc;
  return { page:"contact", title:u("meta_contact_t") + " – " + SITE.domain, desc:u("meta_contact_d"), body: `
  <section class="hero"><h1>${u("contact_title")}</h1><p>${e(u("contact_sub"))}</p></section>
  <form class="contact" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="contact.html?sent=1">
    <input type="hidden" name="form-name" value="contact">
    <p class="hp"><label>Leave empty <input name="bot-field"></label></p>
    <label>${e(u("c_name"))}<input name="name" required></label>
    <label>${e(u("c_mail"))}<input name="email" type="email" required></label>
    <label>${e(u("c_subject"))}<select name="subject">${[1,2,3,4].map(i => `<option>${e(u("c_s" + i))}</option>`).join("")}</select></label>
    <label>${e(u("c_msg"))}<textarea name="message" rows="6" required></textarea></label>
    <button class="btn btn-main" type="submit">${e(u("c_send"))}</button>
  </form>
  <section class="info"><p>${e(u("c_or"))} <a href="mailto:${SITE.email}">${SITE.email}</a></p>
    <p>${u("c_note", {dmca: `<a href="legal/dmca.html">${e(u("legal_dmca"))}</a>`})}</p></section>` };
}});

pages.push({ file: "sitemap.html", build: (X) => {
  const u = X.ui, e = X.esc, a = (h, t) => `<a href="${h}">${e(t)}</a>`;
  const tags = X.ALL_TAGS.filter(t => X.tagCount(t) > 0).sort((x,y) => X.tr(x).localeCompare(X.tr(y), X.LANG));
  const girls = [...X.PROFILES].sort((x,y) => x.name.localeCompare(y.name));
  return { page:"sitemap", title:u("meta_sitemap_t") + " – " + SITE.domain, desc:u("meta_home_d"), body: `
  <section class="hero"><h1>${e(u("sitemap_title"))}</h1></section>
  <div class="smap">
    <section><h2>${e(u("sm_pages"))}</h2>${a("index.html", u("nav_girls"))}${a("platforms.html", u("nav_platforms"))}${a("tags.html", u("nav_tags"))}
      ${a("how-we-rate.html", u("nav_how"))}${a("data.html", u("nav_data"))}${a("contact.html", u("nav_contact"))}</section>
    <section><h2>${e(u("sm_tags"))}</h2>${tags.map(t => a("tag/" + X.slug(t) + ".html", X.tr(t))).join("")}</section>
    <section><h2>${e(u("sm_profiles"))}</h2>${girls.map(g => a("model/" + (g.id || X.slug(g.name)) + ".html", g.name)).join("")}</section>
    <section><h2>${e(u("sm_legal"))}</h2>${LEGAL_PAGES.map(([f, k]) => a("legal/" + f + ".html", u(k))).join("")}</section>
  </div>` };
}});

for (const [f, k] of LEGAL_PAGES) pages.push({ file: "legal/" + f + ".html", legal: true, build: (X, lang) => {
  const u = X.ui, e = X.esc, tl = LEGAL_LANGS.includes(lang) ? lang : "en";
  return { page:"legal", title:u(k) + " – " + SITE.domain, desc:u(k) + " – " + SITE.domain, altLangs: LEGAL_LANGS,
    canonical: tl !== lang ? absUrl("en", "legal/" + f + ".html") : null, body: `
  <article class="legal">
    <h1>${e(u(k))}</h1>
    <p class="updated">${e(u("legal_updated", {d: SITE.updated}))}</p>
    ${tl !== lang ? `<p class="lnote">${e(u("legal_en_only"))}</p>` : ""}
    ${LEGAL[tl][LEGAL_KEY[f]]}
    <nav class="legal-nav">${LEGAL_PAGES.map(([f2, k2]) => `<a href="${f2}.html"${f2 === f ? ' class="cur"' : ""}>${e(u(k2))}</a>`).join("")}</nav>
  </article>` };
}});

/* ---------- write everything ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
const write = (rel, content) => { const p = path.join(OUT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, content); };
const urls = [];
for (const lang of LANG_LIST) {
  const X = context(lang);
  for (const pg of pages) {
    const depth = (prefix(lang) + pg.file).split("/").length - 1;
    X._ctx.ROOT = "../".repeat(depth); X._ctx.LROOT = "../".repeat(depth) + prefix(lang);
    const o = pg.build(X, lang);
    let html = layout(X, lang, pg.file, o).replace(/ROOT_PLACEHOLDER/g, "../".repeat(depth));
    write(prefix(lang) + pg.file, html);
    const altLangs = o.altLangs || LANG_LIST;
    if (!o.canonical && !o.noindex) urls.push({ loc: absUrl(lang, pg.file), alts: altLangs.map(l => [l, absUrl(l, pg.file)]) });
  }
}
/* assets */
for (const f of [...CLIENT, "style.css"]) write("assets/" + f, read(f));
if (fs.existsSync(path.join(__dirname, "images"))) fs.cpSync(path.join(__dirname, "images"), path.join(OUT, "images"), { recursive: true });
/* sitemap.xml + robots.txt */
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(x => `  <url><loc>${x.loc}</loc><lastmod>${SITE.updated}</lastmod>
${x.alts.map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${h}"/>`).join("\n")}
  </url>`).join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
/* data.csv */
const csvq = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
write("data.csv", ["platform,score,free_tier,paid_from,images,voice,video,mobile_app,checked",
  ...Object.entries(base.PLATFORMS).map(([k, p]) => { const d = base.PLATFORM_DATA[k] || {};
    return [p.name, p.rating, d.free, d.price, d.images, d.voice, d.video, d.app, d.checked].map(csvq).join(","); })].join("\n") + "\n");
console.log(`Built ${urls.length} indexable URLs, ${pages.length * LANG_LIST.length} pages in ${LANG_LIST.length} languages → public/`);
