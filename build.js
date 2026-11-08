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
const ASSET_V = require("crypto").createHash("md5").update(["fonts.css","style.css","data.js","data-candy.js","data-spicy.js","i18n.js","i18n-pages.js","i18n-tags.js","i18n-tagpage.js","i18n-extra.js","app.js"].map(f => fs.readFileSync(path.join(__dirname, "src", f), "utf8")).join("")).digest("hex").slice(0, 8);
const CLIENT = ["data.js", "data-candy.js", "data-spicy.js", "i18n.js", "i18n-pages.js", "i18n-tags.js", "i18n-tagpage.js", "i18n-extra.js", "app.js"];

/* Load the client scripts in a sandbox for one language */
{ const src = readRaw("data.js"); IMG_OK = [...new Set([...src.matchAll(/"(images\/[^"]+)"/g)].map(m => m[1]))].filter(imgExists); }
function context(lang) {
  const ctx = { PAGE_LANG: lang, console, Date, URLSearchParams };
  vm.createContext(ctx);
  vm.runInContext(CLIENT.map(read).join("\n;\n") +
    "\n;this.X={SITE,PLATFORMS,PLATFORM_DATA,PROFILES,PROMO,OFFER,offerBar,offerBox,NEW_DAYS,LANGS,ui,tr,esc,slug,isNew,newCount,tagCount,ALL_PROFILE_TAGS,TAG_GROUPS,ALL_TAGS,profileCard,pickCard,platformCard,visual,ctaLink,girlUrl,tagUrl,inBase,byNew,bioOf,linkFor,withAge,topList,bySel,pagerHtml,PER_PAGE,girlId,plUrl,pfKey,gridHtml,filterBarHtml,thumb,get LANG(){return LANG}};", ctx);
  ctx.X._ctx = ctx;
  return ctx.X;
}
const base = context("en");
const { SITE, LANGS } = base;
for (const p of base.PROFILES) for (const t of p.tags)
  if (!base.ALL_TAGS.includes(t)) console.warn(`⚠️  Profile "${p.name}": tag "${t}" is not in TAG_GROUPS (data.js)`);
for (const l of Object.keys(LANGS)) if (l !== "en") { const X = context(l);
  const miss = base.ALL_TAGS.filter(t => X.tr(t) === t && /[a-z]/.test(t) && l === "hi"); if (miss.length) console.warn(`ℹ️  hi: ${miss.length} tags shown in English`); }
/* Legal pages: fields still marked [TO FILL] are hidden until the owner fills them in data.js. */
const LEGAL = (() => {
  const Z = "\u0000", S = Object.assign({}, SITE);
  for (const k of Object.keys(S)) if (typeof S[k] === "string" && S[k].includes("TO FILL")) S[k] = Z;
  const L = Object.assign(require("./src/legal.js")(S), require("./src/legal-more.js")(S));
  const clean = h => h
    .replace(new RegExp(Z + ", " + Z + "\\. ", "g"), "")                       /* "owner, address. Contact:" → "Contact:" */
    .replace(new RegExp("<h2>[^<]*</h2>\\s*<p>" + Z + "</p>", "g"), "")          /* empty section (publication director) */
    .replace(new RegExp("(?:<br>)?[^<>]*" + Z + "[^<>]*(?=<br>|</p>)", "g"), "") /* "SIRET: …", "VAT: …" lines */
    .replace(/<p><br>/g, "<p>").replace(new RegExp(Z, "g"), "");
  for (const l in L) for (const k in L[l]) if (typeof L[l][k] === "string") L[l][k] = clean(L[l][k]);
  return L;
})();
const LANG_LIST = Object.keys(LANGS);
const prefix = l => (l === "en" ? "" : l + "/");
const OG_LOCALE = { en:"en_US", fr:"fr_FR", es:"es_ES", de:"de_DE", pt:"pt_BR", hi:"hi_IN" };
const ogImage = img => !img ? SITE.url + "/images/og-default.jpg" : /^https?:/.test(img) ? img : SITE.url + "/" + img.replace(/^\.?\//, "");
const fmtDate = (d, l) => { try { return new Intl.DateTimeFormat(l === "hi" ? "hi-IN" : l, {day:"numeric", month:"long", year:"numeric"}).format(new Date(d + "T12:00:00Z")); } catch (err) { return d; } };
/* "By Nicholas Simpson, editor and tester" with a link to the author page; rel = path back to the language root */
const byline = (X, rel) => { const parts = X.ui("by_author_r", {author: "\u0001", role: X.ui("author_role")}).split("\u0001");
  return X.esc(parts[0]) + `<a href="${rel}author.html">${X.esc(SITE.author)}</a>` + X.esc(parts[1] || ""); };
/* tag × platform pages exist when the platform has ≥3 bots in the tag AND the other platforms have ≥3 too */
const TPF_MIN = 3;
const TPF_SKIP = ["Female", "Male", "Realistic", "Anime", "Image generation", "Voice", "Video"];   /* too broad: same as the platform page */
const tpfOk = (X, t, k) => { if (TPF_SKIP.includes(t)) return false; const all = X.PROFILES.filter(p => p.tags.includes(t)), n = all.filter(p => p.platform === k).length;
  return !!X.PLATFORMS[k].url && n >= TPF_MIN && all.length - n >= TPF_MIN; };   /* otherwise it would duplicate the tag page */
/* BreadcrumbList JSON-LD: items = [[name, file-relative-to-language-root], …] */
const bcLd = (X, lang, items) => ({ "@context":"https://schema.org", "@type":"BreadcrumbList", "itemListElement": items.map(([name, f], i) =>
  ({ "@type":"ListItem", "position": i + 1, "name": name, "item": absUrl(lang, f) })) });
const ldTag = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
/* "13,99 €/mois · 3,99 €/mois (abonnement long)" from PLATFORM_DATA */
const priceTxt = (X, d) => { if (!d || d.priceMo == null) return null;
  const f = x => new Intl.NumberFormat(X.LANG === "hi" ? "en-IN" : X.LANG, {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(x) + " " + (d.cur || "$");
  return X.ui("px_mo", {x: f(d.priceMo)}) + (d.priceBest != null && d.priceBest !== d.priceMo ? " · " + X.ui("px_best", {x: f(d.priceBest)}) : ""); };
const absUrl = (l, file) => SITE.url + "/" + (prefix(l) + file).replace(/index\.html$/, "").replace(/\.html$/, "");
const LEGAL_PAGES = [["terms","legal_terms"],["cookies","legal_cookies"],["dmca","legal_dmca"],["privacy","legal_privacy"],["ai-disclosure","legal_ai"],["legal-notice","legal_notice"]];
const LEGAL_KEY = { "terms":"terms","cookies":"cookies","dmca":"dmca","privacy":"privacy","ai-disclosure":"ai","legal-notice":"notice" };
const LEGAL_LANGS = ["en", "fr", "es", "de", "pt", "hi"];

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
<script>try{var a=localStorage.getItem("age_ok");if(a&&Date.now()-+a<2592e6)document.documentElement.className+=" age-ok"}catch(e){}</script>
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
<meta property="og:type" content="${o.ogType || "website"}">
<meta property="og:site_name" content="${SITE.domain}">
<meta property="og:locale" content="${OG_LOCALE[lang] || "en_US"}">
<meta property="og:image" content="${e(ogImage(o.image))}">
${o.image ? "" : '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">'}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${e(o.title)}">
<meta name="twitter:description" content="${e(o.desc || "")}">
<meta name="twitter:image" content="${e(ogImage(o.image))}">
<meta name="RATING" content="RTA-5042-1996-1400-1577-RTA">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0b0a12">
<link rel="preload" href="${root}assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${root}assets/fonts/space-grotesk-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${root}assets/style.css?v=${ASSET_V}">
</head>
<body>

<div id="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
  <div class="box">
    <h2 id="gate-title">${e(u("gate_title"))}</h2>
    <p>${e(u("gate_text"))}</p>
    <p>${e(u("gate_text2"))}</p>
    <div class="row">
      <button class="btn btn-main" id="enter">${e(u("gate_enter"))}</button>
      <a class="btn btn-ghost" href="https://www.google.com" rel="nofollow">${e(u("gate_leave"))}</a>
    </div>
    <p class="gate-small">${e(u("gate_parents"))}</p>
    <p class="gate-small">${e(u("gate_accept", {terms: "\u0001", privacy: "\u0002"})).replace("\u0001", `<a href="${L("legal/terms.html")}">${e(u("legal_terms"))}</a>`).replace("\u0002", `<a href="${L("legal/privacy.html")}">${e(u("legal_privacy"))}</a>`)}</p>
  </div>
</div>

${o.page === "legal" ? "" : X.offerBar()}
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
${o.body.replace(' loading="lazy"', ' fetchpriority="high"')}
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
    <div><h2 class="fh">${e(u("ft_explore"))}</h2>
      <a href="${L("index.html")}">${e(u("nav_all"))}</a><a href="${L("women.html")}">${e(u("nav_women"))}</a><a href="${L("men.html")}">${e(u("nav_men"))}</a><a href="${L("anime.html")}">${e(u("nav_anime"))}</a><a href="${L("platforms.html")}">${e(u("nav_platforms"))}</a>
      <a href="${L("tags.html")}">${e(u("nav_tags"))}</a><a href="${L("index.html#new")}">${e(u("nav_new"))}</a></div>
    <div><h2 class="fh">${e(u("ft_site"))}</h2>
      <a href="${L("how-we-rate.html")}">${e(u("nav_how"))}</a><a href="${L("data.html")}">${e(u("nav_data"))}</a>
      <a href="${L("sitemap.html")}">${e(u("nav_sitemap"))}</a><a href="${L("contact.html")}">${e(u("nav_contact"))}</a></div>
    <div><h2 class="fh">${e(u("ft_legal"))}</h2>${legalLinks}</div>
    <div><h2 class="fh">${e(u("ft_lang"))}</h2>${LANG_LIST.map(l =>
      `<a href="${root + prefix(l) + (altLangs.includes(l) ? file : "index.html")}" hreflang="${l}" lang="${l}">${LANGS[l]}</a>`).join("")}</div>
  </div>
  <div class="wrap copy">© ${new Date().getFullYear()} ${SITE.domain}</div>
</footer>

<script>var PAGE_LANG="${lang}",ROOT="${root}",LROOT="${lr}"${o.base ? `,PAGE_BASE="${o.base}"` : ""};</script>
<script defer src="${root}assets/bundle.js?v=${ASSET_V}"></script>
<script>document.addEventListener("DOMContentLoaded",function(){boot("${o.page}")});</script>
</body>
</html>`;
}

/* ---------- page bodies ---------- */
const pages = [];   // {file, build(X, lang) -> layout options, altLangs?}

for (const [file, base] of [["index.html",""],["women.html","women"],["men.html","men"],["anime.html","anime"]]) pages.push({ file, build: (X) => {
  const u = X.ui, e = X.esc, k = base ? "_" + base : "";
  const list = [...X.PROFILES].filter(p => X.inBase(base, p)).sort(X.bySel);
  const cnt = t => list.filter(p => p.tags.includes(t)).length;
  const popular = [...X.ALL_PROFILE_TAGS].filter(t => !["Female","Male","Realistic","Image generation","Voice","Video"].includes(t) && cnt(t) >= 3)
    .sort((a,b) => cnt(b) - cnt(a)).slice(0, 24);
  const pages = Math.max(1, Math.ceil(list.length / X.PER_PAGE));
  const top = X.topList().filter(p => X.inBase(base, p)).slice(0, 10);
  const recent = [...list].sort((a,b) => b.added.localeCompare(a.added) || (!!b.img - !!a.img)).slice(0, 12);
  const v = { site: SITE.domain, n: X.PROFILES.length, k: new Set(X.PROFILES.map(p => p.platform)).size, c: X.ALL_TAGS.length };
  const faq = base ? [] : [1,2,3,4,5,6].map(i => [u("hq" + i, v), u("ha" + i, v)]);
  const thumb = p => `<a class="rc" href="${X.girlUrl(p)}"><span class="rc-img">${X.visual(X.thumb(p.img), X.PLATFORMS[p.platform].color, p.name[0], p.name)}</span>
      <span class="rc-t"><b>${e(p.name)}</b><small>${e(X.PLATFORMS[p.platform].name)}</small></span></a>`;
  return { page:"home", nav: base || "home", base, modal:true, title:u("meta_home_t" + k), desc:u("meta_home_d" + k), body: `
  <section class="hero">
    <h1>${u("hero_title" + k)}</h1>
    <p>${e(u(base ? "hero_sub_b" : "hero_sub", {n: list.length}))}</p>
    <div class="search"><input id="q" type="search" placeholder="${e(u("search"))}" aria-label="Search"></div>
  </section>
  ${top.length >= 3 ? `<section class="top10"><div class="sec-head"><h2>${e(u("top_t"))}</h2><p>${e(u("top_sub"))}</p></div>
    <div class="t10-wrap"><button class="t10-arr prev" type="button" aria-label="‹" hidden>‹</button>
    <ol class="t10" id="t10">${top.map((p, i) => `<li><span class="t10-n">${i + 1}</span>${thumb(p)}</li>`).join("")}</ol>
    <button class="t10-arr next" type="button" aria-label="›">›</button></div></section>` : ""}
  <div class="tags" id="tags">${X.filterBarHtml(list)}</div>
  <p class="all-tags"><a href="tags.html">${e(u("all_tags_link"))}</a></p>
  <div class="toolbar">
    <span class="count" id="count"><b>${list.length}</b> ${e(u("count", {n:""}).trim())}</span>
    <div class="stabs" id="sort" role="tablist">${[["sel","sort_sel"],["new","sort_new_t"],["name","sort_az"]].map(([s2, key], i) =>
      `<button type="button" role="tab" aria-selected="${i ? "false" : "true"}" data-s="${s2}" class="${i ? "" : "on"}">${e(u(key))}</button>`).join("")}</div>
  </div>
  <div class="pgrid" id="grid">${X.gridHtml(list.slice(0, X.PER_PAGE))}</div>
  <nav class="pager" id="pager" aria-label="Pagination">${pages > 1 ? X.pagerHtml(1, pages) : ""}</nav>
  <section class="info"><h2>${e(u("recent_t"))}</h2>
    <div class="recent">${recent.map(thumb).join("")}</div>
    <p class="hero-links" style="text-align:left"><a href="index.html#new">${e(u("recent_all"))} →</a></p></section>
  <section class="info"><h2>${e(u("popcat_t"))}</h2>
    <div class="tags" style="justify-content:flex-start">${popular.map(t => `<a class="tag" href="${X.tagUrl(t)}">${e(X.tr(t))}<small>${cnt(t)}</small></a>`).join("")}</div>
    <p class="hero-links" style="text-align:left"><a href="tags.html">${e(u("all_tags_link"))}</a></p></section>
  <section class="info">
    <h2>${e(u("how_title"))}</h2>
    <ul><li>${u("how_1")}</li><li>${u("how_2")}</li><li>${u("how_3")}</li></ul>
  </section>
  ${base ? "" : `<section class="info"><h2>${e(u("about_t", v))}</h2><p>${e(u("about_1", v))}</p><p>${e(u("about_2", v))}</p>
    <p class="hero-links" style="text-align:left"><a href="how-we-rate.html">${e(u("nav_how"))} →</a> · <a href="data.html">${e(u("nav_data"))} →</a> · <a href="platforms.html">${e(u("nav_platforms"))} →</a></p></section>
  <section class="info"><h2>${e(u("hfaq_t"))}</h2>
    <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>`}
  <section class="info" id="disclosure"><h2>${e(u("disc_title"))}</h2><p>${e(u("disc_home"))}</p></section>
  ${base ? "" : `<script type="application/ld+json">${JSON.stringify([
    {"@context":"https://schema.org","@type":"WebSite","name":SITE.domain,"url":SITE.url + "/"},
    {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}]).replace(/</g,"\\u003c")}</script>`}` };
}});

pages.push({ file: "platforms.html", build: (X) => {
  const u = X.ui, e = X.esc, LIST = Object.values(X.PLATFORMS);
  return { page:"platforms", nav:"platforms", title:u("meta_pl_t"), desc:u("meta_pl_d"), body: `
  <section class="hero"><h1>${u("pl_title")}</h1><p>${e(u("pl_sub"))}</p>
    <p class="hero-links"><a href="how-we-rate.html">${e(u("nav_how"))} →</a> · <a href="data.html">${e(u("nav_data"))} →</a></p></section>
  <h2 class="section-title">${e(u("top_picks"))}</h2>
  <div class="picks">${LIST.filter(p => p.top).sort((a,b) => b.rank - a.rank).map(X.pickCard).join("")}</div>
  <h2 class="section-title">${e(u("all_pl"))}</h2>
  <div class="tags" id="ptags" style="justify-content:flex-start"></div>
  <div class="grid" id="pgrid">${[...LIST].sort((a,b) => b.rank - a.rank).map(X.platformCard).join("")}</div>
  <section class="info"><h2>${e(u("guide_title"))}</h2><ul>${[1,2,3,4,5].map(i => `<li>${u("g" + i)}</li>`).join("")}</ul></section>
  <section class="info"><h2>${e(u("faq_title"))}</h2>${[1,2,3].map(i => `<details><summary>${e(u("q" + i))}</summary><p>${e(u("a" + i))}</p></details>`).join("")}</section>
  <section class="info" id="disclosure"><h2>${e(u("disc_title"))}</h2><p>${e(u("disc_pl"))}</p></section>` };
}});

const GRP_COLORS = [["#ff3d8b","#ff8a5c"],["#8b5cf6","#ec4899"],["#ff5a36","#ffb03a"],["#06b6d4","#8b5cf6"],["#f59e0b","#ef4444"],["#a855f7","#f472b6"],
  ["#e11d48","#9333ea"],["#f43f5e","#fb7185"],["#7c3aed","#06b6d4"],["#ec4899","#8b5cf6"],["#be123c","#7c3aed"],["#2ee6a0","#06b6d4"]];
const groupOf = t => Object.keys(base.TAG_GROUPS).find(g => base.TAG_GROUPS[g].includes(t));

pages.push({ file: "tags.html", build: (X) => {
  const u = X.ui, e = X.esc, groups = Object.entries(X.TAG_GROUPS).filter(([, t]) => t.length);
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

/* one page per tag: profiles + article (empty ones are noindex and left out of sitemap.xml) */
const listFmt = (arr, lang) => { try { return new Intl.ListFormat(lang, {type:"conjunction"}).format(arr); } catch (e) { return arr.join(", "); } };
for (const t of base.ALL_TAGS) pages.push({ file: "tag/" + base.slug(t) + ".html", build: (X, lang) => {
  const u = X.ui, e = X.esc, list = X.PROFILES.filter(p => p.tags.includes(t)).sort(X.byNew);
  const name = X.tr(t), g = groupOf(t), grp = X.TAG_GROUPS[g], n = list.length;
  const alts = grp.filter(x => x !== t && X.tagCount(x) > 0).sort((a,b) => X.tagCount(b) - X.tagCount(a)).slice(0, 24);
  const co = {}; list.forEach(p => p.tags.forEach(x => { if (x !== t && !["Female","Realistic"].includes(x)) co[x] = (co[x] || 0) + 1; }));
  const related = Object.entries(co).sort((a,b) => b[1] - a[1]).slice(0, 18).map(x => x[0]);
  const crumb = `<p class="crumb"><a href="../tags.html">${e(u("tag_all"))}</a> · <a href="../tags.html#g-${g}">${e(u("grp_" + g))}</a></p>`;
  const meta = { page:"tag", nav:"tags", modal:true, noindex: n === 0, title:u("tag_t2", {tag:name, n}), desc:u("tag_d2", {tag:name, n}) };
  if (!n) return { ...meta, body: `${crumb}
  <section class="hero"><h1>${u("tag_h1", {tag: e(name)})}</h1><p>${e(u("tag_empty"))}</p></section>
  <p class="hero-links"><a href="../index.html">${e(u("back_all"))}</a></p>
  <h2 class="section-title">${e(u("tp_alt_t", {g: u("grp_" + g)}))}</h2>
  <div class="tags" style="justify-content:flex-start">${alts.map(x => `<a class="tag" href="${X.slug(x)}.html">${e(X.tr(x))}<small>${X.tagCount(x)}</small></a>`).join("")}</div>` };
  /* platform stats */
  const byPf = {}; list.forEach(p => byPf[p.platform] = (byPf[p.platform] || 0) + 1);
  const pfs = Object.entries(byPf).sort((a,b) => b[1] - a[1]);
  const pfNames = pfs.map(([k]) => X.PLATFORMS[k].name);
  const imgPf = pfs.filter(([k]) => (X.PLATFORM_DATA[k] || {}).images).map(([k]) => X.PLATFORMS[k].name);
  const v = { tag: name, n, k: pfs.length, d: SITE.updated, pls: listFmt(pfNames, lang), top: pfNames[0], topn: pfs[0][1], site: SITE.domain,
              img: listFmt(imgPf.length ? imgPf : pfNames, lang), g: u("grp_" + g) };
  v.grp = u("gi_" + g, v);
  const faq = [1,2,3,4,5,6,7,8].map(i => [u("tq" + i, v), u("ta" + i, v)]);
  return { ...meta, body: `${crumb}
  <section class="hero tp-hero"><h1>${u("tag_h1", {tag: e(name)})}</h1>
    <p class="tp-by">${e(u("tp_by", v))} · ${byline(X, "../")}</p>
    <p class="tp-intro">${e(u("tp_intro", v))}</p></section>
  <div class="pgrid" id="grid">${X.gridHtml(list)}</div>
  <p class="tp-note">${e(u("tp_order"))}</p>
  <article class="tp-article">
    <section class="info"><h2>${e(u("tp_check_t"))}</h2><ol class="steps">${[1,2,3,4,5].map(i => `<li>${u("tp_c" + i)}</li>`).join("")}</ol></section>
    <section class="info"><h2>${e(u("tp_expect_t", v))}</h2>
      <div class="tp-grid">${[1,2,3,4].map(i => `<div><h3>${e(u("tp_e" + i + "_t"))}</h3><p>${e(u("tp_e" + i, v))}</p></div>`).join("")}</div>
      <p class="hero-links" style="text-align:left"><a href="../data.html">${e(u("nav_data"))} →</a> · <a href="../how-we-rate.html">${e(u("nav_how"))} →</a></p></section>
    <section class="info"><h2>${e(u("tp_pl_t", v))}</h2>
      <div class="tablewrap"><table class="data" style="min-width:0"><thead><tr><th>${e(u("col_platform"))}</th><th>${e(u("tp_col_n", v))}</th><th>${e(u("col_score"))}</th><th><span class="vh">${e(u("tp_go"))}</span></th></tr></thead><tbody>
      ${pfs.map(([k, c]) => { const P = X.PLATFORMS[k]; return `<tr><td><strong>${tpfOk(X, t, k) ? `<a href="${X.slug(t)}/${k}.html">${e(P.name)}</a>` : P.url ? `<a href="../platform/${k}.html">${e(P.name)}</a>` : e(P.name)}</strong></td><td>${c}</td><td>★ ${P.rating}</td><td>${X.ctaLink(P, e(u("tp_go")) + " →", "tbl-link")}</td></tr>`; }).join("")}
      </tbody></table></div>
      <p class="hero-links" style="text-align:left"><a href="../platforms.html">${e(u("m_see_pl"))}</a></p></section>
    ${related.length ? `<section class="info"><h2>${e(u("tp_rel_t", v))}</h2><div class="tags" style="justify-content:flex-start">${related.map(x => `<a class="tag" href="${X.slug(x)}.html">${e(X.tr(x))}<small>${co[x]}</small></a>`).join("")}</div></section>` : ""}
    ${alts.length ? `<section class="info"><h2>${e(u("tp_alt_t", v))}</h2><div class="tags" style="justify-content:flex-start">${alts.map(x => `<a class="tag" href="${X.slug(x)}.html">${e(X.tr(x))}<small>${X.tagCount(x)}</small></a>`).join("")}</div></section>` : ""}
    <section class="info"><h2>${e(u("tp_faq_t", v))}</h2>
      <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>
    <p class="tp-note">${e(u("tp_aff"))} <a href="../legal/terms.html">${e(u("legal_terms"))}</a></p>
  </article>
  <p class="all-tags"><a href="../tags.html">${e(u("all_tags_link"))}</a></p>
  ${ldTag([bcLd(X, lang, [[u("bc_home"), "index.html"], [u("nav_tags"), "tags.html"], [name, "tag/" + X.slug(t) + ".html"]]),
    {"@context":"https://schema.org","@type":"ItemList","name":u("tag_t2", {tag:name, n}),"numberOfItems":n,
     "itemListElement":list.slice(0, 50).map((p, i) => ({"@type":"ListItem","position":i + 1,"url":absUrl(lang, "model/" + X.girlId(p) + ".html"),"name":p.name}))}])}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}).replace(/</g,"\\u003c")}</script>` };
}});

/* one page per model: /model/<id> */
const GLANCE = ["gender","style","origin","hair","body","personality","role","relationship","fantasy"];
for (const g0 of base.PROFILES) pages.push({ file: "model/" + (g0.id || base.slug(g0.name)) + ".html", build: (X, lang) => {
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
  const rows = [[u("m_platform"), `<a href="../${P.url ? "platform/" + g.platform : "platforms"}.html">${e(P.name)}</a> · ★ ${P.rating}`],
    [u("grp_age"), g.age ? e(String(g.age)) : e(u("m_not_set"))],
    ...GLANCE.map(k => [u("grp_" + k), g.tags.filter(t => groupOf(t) === k).map(t => `<a href="../tag/${X.slug(t)}.html">${e(X.tr(t))}</a>`).join(", ")]).filter(r => r[1]),
    [u("m_features", {p: P.name}), `${e(u("col_images"))} : ${e(yn(D.images))} · ${e(u("col_voice"))} : ${e(yn(D.voice))} · ${e(u("col_video"))} : ${e(yn(D.video))}`],
    [u("col_free"), e(yn(D.free))],
    [u("m_checked"), e(fmtDate(SITE.updated, X.LANG))]];
  /* "Our take": pros/cons built only from verified data (platform features, profile data) */
  const nTags = g.tags.filter(t => !["Female","Male","Image generation","Voice","Video"].includes(t)).length;
  const pros = [D.images && "pro_img", D.voice && "pro_voice", D.video && "pro_video", D.free && "pro_free", g.creator && "pro_creator",
    nTags >= 6 && "pro_tags", (g.bio && (typeof g.bio === "string" || g.bio.fr || g.bio.en)) && !g.creator && "pro_bio"].filter(Boolean);
  const cons = [g.platform === "candy" && "con_paid", g.platform !== "candy" && (D.images || D.voice || D.video) && "con_paid",
    g.platform === "spicychat" && "con_comm", !g.img && "con_noimg", !g.age && !g.creator && "con_noage"].filter(Boolean);
  const keyTags = g.tags.filter(t => !["Female","Male","Realistic","Anime","Image generation","Voice","Video","Sexting","Creator Twin"].includes(t)).slice(0, 4).map(X.tr);
  const rv = { ...v, site: SITE.domain, author: SITE.author, d: fmtDate(SITE.updated, X.LANG), x: nTags, tags: keyTags.join(", ") || X.tr(main),
    style: u(g.tags.includes("Anime") ? "rv_anime" : "rv_real") };
  const cmpRows = [g, ...similar].map(p => [p, p.tags.filter(t => g.tags.includes(t) && !["Female","Male","Realistic","Image generation","Voice","Video"].includes(t))]);
  const faq = [1,2,3,4,5,6].map(i => [u("fq" + i, v), u("fa" + i + (i === 1 ? gen : i === 6 && g.creator ? "_c" : ""), {...v, img: yn(D.images).toLowerCase(), voice: yn(D.voice).toLowerCase()})]);
  return { page:"model", nav:"home", image: g.img || "", ogType: "profile", title:u("model_t", {name:g.name, p:P.name, agep: g.age ? u("age_sfx", {age: g.age}) : ""}), lastmod: g.added > SITE.updated ? g.added : SITE.updated,
    desc:u("girl_meta_d", {name:g.name, age:g.age || "18+", p:P.name, bio:X.bioOf(g)}).slice(0, 300), body: `
  <nav class="crumb"><a href="../index.html">${e(u("nav_girls"))}</a> › ${P.url ? `<a href="../platform/${g.platform}.html">${e(P.name)}</a>` : e(P.name)} › <a href="../tag/${X.slug(main)}.html">${e(X.tr(main))}</a> › <span>${e(g.name)}</span></nav>
  <section class="girl">
    <div class="g-visual">${X.visual(g.img, P.color, g.name[0], g.name)}${g.video ? `<video autoplay muted loop playsinline preload="metadata"${g.img ? ` poster="${e(g.img)}"` : ""} src="${e(g.video)}"></video>` : ""}${X.isNew(g) ? `<span class="new">${e(u("new_badge"))}</span>` : ""}</div>
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

  <section class="info review"><h2>${e(u("rv_t"))}</h2>
    <p class="rv-by">${byline(X, "../")} · ${e(u("rv_checked", rv))}</p>
    <p>${e(u("rv_sum", rv))}</p>
    <div class="tp-grid"><div><h3 class="pro-h">${e(u("rv_pros"))}</h3><ul class="pros">${pros.map(k => `<li>${e(u(k, rv))}</li>`).join("")}</ul></div>
      ${cons.length ? `<div><h3 class="con-h">${e(u("rv_cons"))}</h3><ul class="cons">${cons.map(k => `<li>${e(u(k, rv))}</li>`).join("")}</ul></div>` : ""}</div></section>

  <section class="info"><h2>${e(u("cmp_t", v))}</h2>
    <div class="tablewrap"><table class="data cmp" style="min-width:0"><thead><tr><th>${e(u("cmp_name"))}</th><th>${e(u("col_platform"))}</th><th>${e(u("grp_age"))}</th><th>${e(u("cmp_common"))}</th><th><span class="vh">${e(u("tp_go"))}</span></th></tr></thead><tbody>
    ${cmpRows.map(([p, common], i) => `<tr${i ? "" : ' class="me"'}><td>${i ? `<a href="${X.girlUrl(p)}"><strong>${e(p.name)}</strong></a>` : `<strong>${e(p.name)}</strong> <small>(${e(u("cmp_this"))})</small>`}</td>
      <td>${e(X.PLATFORMS[p.platform].name)}</td><td>${p.age ? e(String(p.age)) : "–"}</td>
      <td>${i ? `${common.length} <small>${e(common.slice(0, 3).map(X.tr).join(", "))}</small>` : "–"}</td>
      <td>${X.ctaLink(X.linkFor(p), e(u("tp_go")) + " →", "tbl-link")}</td></tr>`).join("")}
    </tbody></table></div></section>

  <section class="info"><h2>${e(u("m_faq_t", v))}</h2>
    <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>

  <h2 class="section-title">${e(u("similar"))}</h2>
  <div class="pgrid sim4" id="grid">${similar.map(X.profileCard).join("")}</div>
  <p class="all-tags"><a href="../tag/${X.slug(main)}.html">${e(u("m_more_tag", {tag: X.tr(main)}))}</a></p>

  <div class="mbar"><span class="mb-img">${X.visual(X.thumb(g.img), P.color, g.name[0], g.name)}</span>
    <span class="mb-txt"><b>${e(g.name)}</b><small>${e(P.name)}</small></span>${cta("btn btn-main")}</div>
  ${ldTag([bcLd(X, lang, [[u("bc_home"), "index.html"], ...(P.url ? [[P.name, "platform/" + g.platform + ".html"]] : []), [X.tr(main), "tag/" + X.slug(main) + ".html"], [g.name, "model/" + X.girlId(g) + ".html"]]),
    {"@context":"https://schema.org","@type":"Article","headline":u("model_t", {name:g.name, p:P.name, agep: g.age ? u("age_sfx", {age: g.age}) : ""}),"description":X.bioOf(g).slice(0, 300),
     ...(g.img ? {"image": /^https?:/.test(g.img) ? g.img : SITE.url + "/" + g.img} : {}),"datePublished":g.added,"dateModified":g.added > SITE.updated ? g.added : SITE.updated,"inLanguage":lang,
     "author":{"@type":"Person","name":SITE.author,"url":absUrl(lang, "author.html")},"publisher":{"@type":"Organization","name":SITE.domain,"url":SITE.url}},
    ...(g.video ? [{"@context":"https://schema.org","@type":"VideoObject","name":g.name + " – " + P.name,"description":X.bioOf(g).slice(0, 300),"thumbnailUrl":g.img || "","contentUrl":g.video,"uploadDate":g.added}] : [])])}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}).replace(/</g,"\\u003c")}</script>` };
}});

/* one page per platform with an affiliate link: review, features, characters, FAQ */
for (const key of Object.keys(base.PLATFORMS).filter(k => base.PLATFORMS[k].url)) pages.push({ file: "platform/" + key + ".html", build: (X, lang) => {
  const u = X.ui, e = X.esc, P = X.PLATFORMS[key], D = X.PLATFORM_DATA[key] || {};
  const list = X.PROFILES.filter(p => p.platform === key).sort(X.bySel), n = list.length;
  const yn = val => val === true ? `<span class="yes">${e(u("yes"))}</span>` : val === false ? `<span class="no">${e(u("no"))}</span>` : `<span class="pend">${e(u("pending"))}</span>`;
  const feats = [D.images && u("col_images"), D.voice && u("col_voice"), D.video && u("col_video")].filter(Boolean);
  const v = { p: P.name, r: P.rating, n, site: SITE.domain, author: SITE.author, d: fmtDate(D.checked || SITE.updated, X.LANG), desc: X.tr(P.desc),
              feats: listFmt([...P.feats.map(X.tr), ...feats.map(x => x.toLowerCase())], lang) };
  const pros = [...P.feats.filter(f => !((D.images && /image|photo/i.test(f)) || (D.voice && /voice/i.test(f)) || (D.video && /video/i.test(f)))).map(f => X.tr(f)), D.images && u("pro_img"), D.voice && u("pro_voice"), D.video && u("pro_video"), D.free && u("pro_free")].filter(Boolean);
  const cons = [(D.images || D.voice || D.video) && u("con_paid"), P.tags.includes("Community characters") && u("pl_con_comm"), D.priceMo == null && u("pl_con_unv")].filter(Boolean);
  const cnt = {}; list.forEach(p => p.tags.forEach(t => { if (!["Female","Male","Realistic","Image generation","Voice","Video"].includes(t) && X.ALL_TAGS.includes(t)) cnt[t] = (cnt[t] || 0) + 1; }));
  const cats = Object.entries(cnt).sort((a,b) => b[1] - a[1]).slice(0, 18);
  const px = priceTxt(X, D);
  const rows = [[u("col_total"), `<strong>★ ${P.rating}</strong> <small><a href="../how-we-rate.html">${e(u("nav_how"))}</a></small>`],
    [u("col_free"), D.unlimited ? `<span class="yes">${e(u("px_unl"))}</span>` : yn(D.free)], [u("col_price"), px ? e(px) : yn(null)],
    [u("col_images"), yn(D.images)], [u("col_voice"), yn(D.voice)], [u("col_calls"), yn(D.calls)], [u("col_video"), yn(D.video)], [u("col_group"), yn(D.group)], [u("col_app"), yn(D.app)],
    [u("col_discreet"), yn(D.discreet)], [u("col_crypto"), yn(D.crypto)],
    [u("col_checked"), D.checked ? e(fmtDate(D.checked, X.LANG)) : yn(null)]];
  const faq = [[u("pq1", v), u(D.free ? "pa1_yes" : "pa1_unk", v)], [u("pq2", v), u("pa2", v)], ...(n ? [[u("pq3", v), u("pa3", v)]] : []), [u("pq4", v), u("pa4", v)], [u("pq5", v), u("pa5", v)]];
  const cta = cls => X.ctaLink(P, e(u("try", {p: P.name})) + " →", cls);
  return { page:"platform", nav:"platforms", modal:true, title: u("pl_h1", v) + " – " + SITE.domain, desc: (u("pl_sum", v)).slice(0, 300), body: `
  <nav class="crumb"><a href="../platforms.html">${e(u("pl_back"))}</a> › <span>${e(P.name)}</span></nav>
  <section class="hero tp-hero"><div class="pl-mono" style="background:linear-gradient(135deg,${P.color[0]},${P.color[1]})">${e(P.name[0])}</div>
    <h1>${e(u("pl_h1", v))}</h1>
    <p class="tp-by">★ ${P.rating}/5 · ${byline(X, "../")} · ${e(u("rv_checked", v))}</p>
    <p class="tp-intro">${e(X.tr(P.desc))}</p>
    <p>${cta("btn btn-main btn-xl")}</p></section>
  ${X.OFFER.platform === key ? X.offerBox() : ""}
  <div class="mgrid">
    <section class="info review"><h2>${e(u("rv_t"))}</h2>
      <p>${e(u("pl_sum", v))}</p>
      <h3 class="pro-h">${e(u("rv_pros"))}</h3><ul class="pros">${pros.map(x => `<li>${e(x)}</li>`).join("")}</ul>
      ${cons.length ? `<h3 class="con-h">${e(u("rv_cons"))}</h3><ul class="cons">${cons.map(x => `<li>${e(x)}</li>`).join("")}</ul>` : ""}</section>
    <section class="info"><h2>${e(u("pl_feat_t", v))}</h2>
      <table class="glance">${rows.map(r => `<tr><th>${e(r[0])}</th><td>${r[1]}</td></tr>`).join("")}</table>
      <p class="hero-links" style="text-align:left"><a href="../data.html">${e(u("nav_data"))} →</a> · <a href="../how-we-rate.html">${e(u("nav_how"))} →</a></p></section>
  </div>
  <h2 class="section-title">${e(u("pl_chars_t", v))} <small>${n}</small></h2>
  ${n ? `<div class="pgrid" id="grid">${X.gridHtml(list.slice(0, 24))}</div>
  ${n > 24 ? `<p class="all-tags"><a class="btn btn-main" href="../index.html?app=${key}">${e(u("pl_all", v))} →</a></p>` : ""}` : `<p class="tp-note">${e(u("pl_none", v))}</p>`}
  ${cats.length ? `<section class="info"><h2>${e(u("pl_cats_t", v))}</h2><div class="tags" style="justify-content:flex-start">${cats.map(([t, c]) =>
    `<a class="tag" href="../tag/${X.slug(t)}.html">${e(X.tr(t))}<small>${c}</small></a>`).join("")}</div></section>` : ""}
  <section class="info"><h2>${e(u("faq_title"))}</h2>
    <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>
  <p class="tp-note">${e(u("tp_aff"))} <a href="../legal/terms.html">${e(u("legal_terms"))}</a></p>
  ${ldTag(bcLd(X, lang, [[u("bc_home"), "index.html"], [u("nav_platforms"), "platforms.html"], [P.name, "platform/" + key + ".html"]]))}
  <script type="application/ld+json">${JSON.stringify([
    {"@context":"https://schema.org","@type":"Review","itemReviewed":{"@type":"SoftwareApplication","name":P.name,"applicationCategory":"EntertainmentApplication","operatingSystem":"Web"},
     "author":{"@type":"Person","name":SITE.author},"datePublished":D.checked || SITE.updated,"reviewRating":{"@type":"Rating","ratingValue":P.rating,"bestRating":5,"worstRating":1},
     "publisher":{"@type":"Organization","name":SITE.domain}},
    {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}]).replace(/</g,"\\u003c")}</script>` };
}});

/* tag × platform pages: /tag/<slug>/<platform>.html */
for (const t of base.ALL_TAGS) for (const k of Object.keys(base.PLATFORMS)) if (tpfOk(base, t, k)) pages.push({ file: "tag/" + base.slug(t) + "/" + k + ".html", build: (X, lang) => {
  const u = X.ui, e = X.esc, P = X.PLATFORMS[k], D = X.PLATFORM_DATA[k] || {};
  const list = X.PROFILES.filter(p => p.tags.includes(t) && p.platform === k).sort(X.bySel);
  const v = { tag: X.tr(t), p: P.name, n: list.length, total: X.tagCount(t), site: SITE.domain, pdesc: X.tr(P.desc) };
  const faq = [[u("tpp_q1", v), u("tpp_a1", v)], [u("pq1", v), u(D.free ? "pa1_yes" : "pa1_unk", v)], [u("tpp_q2", v), u("tpp_a2", v)]];
  return { page:"tag", nav:"tags", modal:true, title: u("tpp_h1", v) + " – " + SITE.domain, desc: u("tpp_intro", v).slice(0, 300), body: `
  <nav class="crumb"><a href="../../tags.html">${e(u("tag_all"))}</a> › <a href="../${X.slug(t)}.html">${e(X.tr(t))}</a> › <span>${e(P.name)}</span></nav>
  <section class="hero tp-hero"><h1>${e(u("tpp_h1", v))}</h1>
    <p class="tp-by">${byline(X, "../../")} · ${e(u("rv_checked", {d: fmtDate(SITE.updated, X.LANG)}))}</p>
    <p class="tp-intro">${e(u("tpp_intro", v))}</p></section>
  <div class="pgrid" id="grid">${X.gridHtml(list)}</div>
  <p class="hero-links"><a href="../${X.slug(t)}.html">${e(u("tpp_back", v))} →</a> · <a href="../../platform/${k}.html">${e(u("tpp_rev", v))} →</a></p>
  <section class="info"><h2>${e(u("faq_title"))}</h2>
    <div class="mfaq">${faq.map(([q, a]) => `<div class="mq"><h3>${e(q)}</h3><p>${e(a)}</p></div>`).join("")}</div></section>
  <p class="tp-note">${e(u("tp_aff"))} <a href="../../legal/terms.html">${e(u("legal_terms"))}</a></p>
  ${ldTag(bcLd(X, lang, [[u("bc_home"), "index.html"], [u("nav_tags"), "tags.html"], [X.tr(t), "tag/" + X.slug(t) + ".html"], [P.name, "tag/" + X.slug(t) + "/" + k + ".html"]]))}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a]) => ({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}).replace(/</g,"\\u003c")}</script>` };
}});

/* author page */
pages.push({ file: "author.html", build: (X, lang) => {
  const u = X.ui, e = X.esc, v = { author: SITE.author, site: SITE.domain };
  const revs = Object.entries(X.PLATFORMS).filter(([, P]) => P.url).sort((a,b) => b[1].rank - a[1].rank);
  return { page:"author", title: SITE.author + " – " + SITE.domain, desc: u("au_meta_d", v), ogType: "profile", body: `
  <section class="hero tp-hero"><div class="pl-mono" style="background:linear-gradient(135deg,var(--accent),var(--accent2))">${e(SITE.author[0])}</div>
    <h1>${e(SITE.author)}</h1><p class="tp-by">${e(u("author_role").replace(/^./, c => c.toUpperCase()))} · ${e(SITE.domain)}</p>
    <p class="tp-intro">${e(u("au_intro", v))}</p></section>
  <section class="info"><p>${e(u("au_p1", v))}</p><p>${e(u("au_p2", v))}</p>
    <p class="hero-links" style="text-align:left"><a href="how-we-rate.html">${e(u("nav_how"))} →</a> · <a href="data.html">${e(u("nav_data"))} →</a></p></section>
  <section class="info"><h2>${e(u("au_reviews"))}</h2>
    <ul class="feat">${revs.map(([k, P]) => `<li><a href="platform/${k}.html">${e(u("pl_h1", {p: P.name}))}</a> · ★ ${P.rating}</li>`).join("")}</ul></section>
  <p class="tp-note">${e(u("au_contact"))} <a href="contact.html">${e(u("nav_contact"))}</a></p>
  ${ldTag(bcLd(X, lang, [[u("bc_home"), "index.html"], [SITE.author, "author.html"]]))}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Person","name":SITE.author,"jobTitle":X.ui("author_role"),"worksFor":{"@type":"Organization","name":SITE.domain,"url":SITE.url}}).replace(/</g,"\\u003c")}</script>` };
}});

pages.push({ file: "how-we-rate.html", build: (X) => {
  const u = X.ui, e = X.esc;
  const parts = [["free", 20], ["price", 25], ["feat", 35], ["priv", 20]];
  const rows = Object.entries(X.PLATFORMS).sort((a,b) => b[1].rank - a[1].rank);
  return { page:"how", title:u("meta_how_t"), desc:u("meta_how_d"), body: `
  <section class="hero"><h1>${u("how_h1")}</h1><p>${e(u("sc_intro"))}</p>
    <p class="tp-by">${byline(X, "")} · ${e(u("rv_checked", {d: fmtDate(SITE.updated, X.LANG)}))}</p></section>
  <section class="info"><h2>${e(u("crit_title"))}</h2>
    <div class="crit">${parts.map(([k, w]) => `<div class="crit-row"><div class="crit-w">${w}%</div>
      <div><h3>${e(u("sc_" + k + "_t"))}</h3><p>${e(u("sc_" + k))}</p></div></div>`).join("")}</div>
    <p>${e(u("sc_half"))}</p><p>${e(u("sc_aff"))}</p></section>
  <section class="info"><h2>${e(u("sc_table_t"))}</h2>
    <div class="tablewrap"><table class="data" style="min-width:0"><thead><tr><th>${e(u("col_platform"))}</th>${parts.map(([k]) => `<th>${e(u("col_" + k + "_s"))}</th>`).join("")}<th>${e(u("col_total"))}</th></tr></thead><tbody>
    ${rows.map(([k, P]) => `<tr><td><strong>${P.url ? `<a href="platform/${k}.html">${e(P.name)}</a>` : e(P.name)}</strong></td>${parts.map(([q]) => `<td>${P.score[q]}</td>`).join("")}<td><strong>★ ${P.rating}</strong></td></tr>`).join("")}
    </tbody></table></div>
    <p class="hero-links" style="text-align:left"><a href="data.html">${e(u("how_data_link"))}</a></p></section>
  <section class="info"><h2>${e(u("sc_chat_t"))}</h2><p>${e(u("sc_chat"))}</p></section>
  <section class="info"><h2>${e(u("how_ind_t"))}</h2><p>${e(u("how_ind"))}</p></section>
  <section class="info"><h2>${e(u("how_upd_t"))}</h2><p>${e(u("how_upd"))}</p>
    <p>${u("how_report", {contact: `<a href="contact.html">${e(u("contact_link"))}</a>`})}</p></section>` };
}});

pages.push({ file: "data.html", build: (X) => {
  const u = X.ui, e = X.esc;
  const yn = v => v === true ? `<span class="yes">${e(u("yes"))}</span>` : v === false ? `<span class="no">${e(u("no"))}</span>` : `<span class="pend">${e(u("pending"))}</span>`;
  const rows = Object.entries(X.PLATFORMS).sort((a,b) => b[1].rank - a[1].rank).map(([k, p]) => {
    const d = X.PLATFORM_DATA[k] || {}, px = priceTxt(X, d);
    return `<tr><td><strong>${p.url ? `<a href="platform/${k}.html">${e(p.name)}</a>` : e(p.name)}</strong></td><td>${p.rating}</td>
      <td>${d.unlimited ? `<span class="yes">${e(u("px_unl"))}</span>` : yn(d.free)}</td><td>${px ? e(px) : `<span class="pend">${e(u("pending"))}</span>`}</td>
      ${["images","voice","calls","video","group","app","discreet","crypto"].map(f => `<td>${yn(d[f])}</td>`).join("")}
      <td>${d.checked ? e(fmtDate(d.checked, X.LANG)) : `<span class="pend">${e(u("pending"))}</span>`}</td>
      <td>${X.ctaLink(p, e(u("visit")) + " →", "tbl-link")}</td></tr>`; }).join("");
  const cols = ["col_platform","col_score","col_free","col_price","col_images","col_voice","col_calls","col_video","col_group","col_app","col_discreet","col_crypto","col_checked"];
  return { page:"data", title:u("meta_data_t"), desc:u("meta_data_d"), body: `
  <section class="hero"><h1>${u("data_h1")}</h1><p>${e(u("data_sub"))}</p></section>
  <div class="tablewrap"><table class="data"><thead><tr>${cols.map(c => `<th>${e(u(c))}</th>`).join("")}<th><span class="vh">${e(u("tp_go"))}</span></th></tr></thead><tbody>${rows}</tbody></table></div>
  <p class="data-note">${e(u("data_note"))}</p>
  <p class="hero-links"><a href="ROOT_PLACEHOLDERdata.csv" download>⬇ ${e(u("data_csv"))}</a> · <a href="how-we-rate.html">${e(u("data_how"))}</a></p>` };
}});

pages.push({ file: "contact.html", build: (X) => {
  const u = X.ui, e = X.esc;
  return { page:"contact", title:u("meta_contact_t") + " – " + SITE.domain, desc:u("meta_contact_d"), body: `
  <section class="hero"><h1>${u("contact_title")}</h1><p>${e(u("contact_sub"))}</p></section>
  <section class="info ct-card"><h2>${e(u("ct_mail_t"))}</h2>
    <p class="ct-mail"><a href="mailto:${SITE.email}">${SITE.email}</a></p>
    <p><a class="btn btn-main" href="mailto:${SITE.email}">✉ ${e(u("ct_btn"))}</a></p>
    <p>${e(u("ct_about"))}</p><ul class="feat">${[1,2,3,4].map(i => `<li>${e(u("c_s" + i))}</li>`).join("")}</ul>
    <p class="tp-note" style="text-align:left">${e(u("ct_reply"))}</p></section>
  <section class="info"><p>${e(u("ct_not", {site: SITE.domain}))}</p>
    <p>${u("c_note", {dmca: `<a href="legal/dmca.html">${e(u("legal_dmca"))}</a>`})}</p></section>` };
}});

pages.push({ file: "sitemap.html", build: (X) => {
  const u = X.ui, e = X.esc, a = (h, t) => `<a href="${h}">${e(t)}</a>`;
  const tags = X.ALL_TAGS.filter(t => X.tagCount(t) > 0).sort((x,y) => X.tr(x).localeCompare(X.tr(y), X.LANG));
  const girls = [...X.PROFILES].sort((x,y) => x.name.localeCompare(y.name));
  return { page:"sitemap", title:u("meta_sitemap_t") + " – " + SITE.domain, desc:u("meta_home_d"), body: `
  <section class="hero"><h1>${e(u("sitemap_title"))}</h1></section>
  <div class="smap">
    <section><h2>${e(u("sm_pages"))}</h2>${a("index.html", u("nav_girls"))}${a("platforms.html", u("nav_platforms"))}${Object.entries(X.PLATFORMS).filter(([, P]) => P.url).map(([k, P]) => a("platform/" + k + ".html", P.name)).join("")}${a("tags.html", u("nav_tags"))}
      ${a("how-we-rate.html", u("nav_how"))}${a("author.html", SITE.author)}${a("data.html", u("nav_data"))}${a("contact.html", u("nav_contact"))}</section>
    <section><h2>${e(u("sm_tags"))}</h2>${tags.map(t => a("tag/" + X.slug(t) + ".html", X.tr(t))).join("")}</section>
    <section><h2>${e(u("sm_profiles"))}</h2>${girls.map(g => a("model/" + (g.id || X.slug(g.name)) + ".html", g.name)).join("")}</section>
    <section><h2>${e(u("sm_legal"))}</h2>${LEGAL_PAGES.map(([f, k]) => a("legal/" + f + ".html", u(k))).join("")}</section>
  </div>` };
}});

for (const [f, k] of LEGAL_PAGES) pages.push({ file: "legal/" + f + ".html", legal: true, build: (X, lang) => {
  const u = X.ui, e = X.esc, tl = LEGAL_LANGS.includes(lang) ? lang : "en";
  return { page:"legal", noindex: true, title:u(k) + " – " + SITE.domain, desc:u(k) + " – " + SITE.domain, altLangs: LEGAL_LANGS,
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
    if (!o.canonical && !o.noindex) urls.push({ lang, loc: absUrl(lang, pg.file), lastmod: o.lastmod || SITE.updated, alts: altLangs.map(l => [l, absUrl(l, pg.file)]) });
  }
}
/* 404 page (served by Cloudflare Pages / Netlify for any unknown URL): absolute links, noindex */
{ const X = context("en"); X._ctx.ROOT = "/"; X._ctx.LROOT = "/"; const u = X.ui, e = X.esc;
  const top = X.ALL_TAGS.filter(t => !["Female","Male","Realistic","Image generation","Voice","Video"].includes(t)).sort((a,b) => X.tagCount(b) - X.tagCount(a)).slice(0, 12);
  const o = { page:"404", noindex:true, title: u("nf_t") + " – " + SITE.domain, desc: u("nf_d"), body: `
  <section class="nf"><h1>404</h1><h2>${e(u("nf_t"))}</h2><p class="tp-intro">${e(u("nf_d"))}</p>
    <p><a class="btn btn-main" href="index.html">${e(u("nf_home"))} →</a></p>
    <div class="tags">${top.map(t => `<a class="tag" href="tag/${X.slug(t)}.html">${e(X.tr(t))}</a>`).join("")}<a class="tag" href="tags.html">${e(u("nav_tags"))}</a><a class="tag" href="platforms.html">${e(u("nav_platforms"))}</a></div>
    <p class="hero-links">${LANG_LIST.filter(l => l !== "en").map(l => `<a href="${prefix(l)}index.html">${LANGS[l]}</a>`).join(" · ")}</p></section>` };
  const html = layout(X, "en", "404.html", o).replace(/(href|src)="(?!https?:|#|\/|mailto:|data:)/g, '$1="/');
  write("404.html", html.replace(/"\/(?:([a-z]{2})\/)?404\.html"/g, (m, l) => `"/${l ? l + "/" : ""}index.html"`).replace(/<link rel="canonical"[^>]*>\n?/, "").replace(/<link rel="alternate"[^>]*>\n?/g, "")); }
/* assets */
for (const f of CLIENT) write("assets/" + f, read(f));
write("assets/bundle.js", CLIENT.map(read).join("\n;\n"));   /* one deferred request instead of 9 blocking ones */
write("assets/style.css", read("fonts.css") + "\n" + read("style.css"));   /* self-hosted fonts first (GDPR: no Google Fonts request) */
fs.cpSync(path.join(__dirname, "fonts"), path.join(OUT, "assets", "fonts"), { recursive: true });
/* Cloudflare Pages cache rules (assets are versioned with ?v=) */
write("_headers", `/assets/*
  Cache-Control: public, max-age=31536000, immutable
/favicon.ico
  Cache-Control: public, max-age=604800
/apple-touch-icon.png
  Cache-Control: public, max-age=604800
/icon-*
  Cache-Control: public, max-age=604800
/images/*
  Cache-Control: public, max-age=604800
`);
/* favicon & app icons (icons/) → site root */
fs.cpSync(path.join(__dirname, "icons"), OUT, { recursive: true });
if (fs.existsSync(path.join(__dirname, "images"))) fs.cpSync(path.join(__dirname, "images"), path.join(OUT, "images"), { recursive: true });
/* sitemap.xml + robots.txt */
/* one sitemap per language + an index (sitemap.xml) */
for (const lang of LANG_LIST) write("sitemaps/" + lang + ".xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.filter(x => x.lang === lang).map(x => `  <url><loc>${x.loc}</loc><lastmod>${x.lastmod}</lastmod>
${x.alts.map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${h}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${(x.alts.find(([l]) => l === "en") || x.alts[0])[1]}"/>
  </url>`).join("\n")}
</urlset>
`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${LANG_LIST.map(l => `  <sitemap><loc>${SITE.url}/sitemaps/${l}.xml</loc><lastmod>${urls.filter(x => x.lang === l).map(x => x.lastmod).sort().pop()}</lastmod></sitemap>`).join("\n")}
</sitemapindex>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
/* data.csv */
const csvq = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
write("data.csv", ["platform,score,free_start,unlimited_free,price_month,price_best_month,currency,images,voice,calls,video,group_chat,mobile_app,discreet_billing,crypto,apple_google_pay,paypal,checked,source",
  ...Object.entries(base.PLATFORMS).map(([k, p]) => { const d = base.PLATFORM_DATA[k] || {};
    return [p.name, p.rating, d.free, d.unlimited, d.priceMo, d.priceBest, d.cur, d.images, d.voice, d.calls, d.video, d.group, d.app, d.discreet, d.crypto, d.wallet, d.paypal, d.checked, d.src].map(csvq).join(","); })].join("\n") + "\n");
console.log(`Built ${urls.length} indexable URLs, ${pages.length * LANG_LIST.length} pages in ${LANG_LIST.length} languages → public/`);
