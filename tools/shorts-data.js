/* Builds src/data-shorts.js from the Candy Shorts scrape (see tools/UPDATE_SHORTS.md).
   Usage: node tools/shorts-data.js [tools/shorts-scrape.tsv] [YYYY-MM-DD]
   One series per line, tab-separated:
   candy slug · title ("TR:" = translated by us from Candy's French page) · synopsis · token cost per episode (run-length, e.g. "0x2,12x3")
   · cast slugs (comma) · cast names (comma) · subtitles ("a" = en,fr,de,es,it,pt · "b" = a + ja) · poster key on cdn.candy.ai · categories · new (1/0) */
const fs = require("fs"), path = require("path");
const [file = path.join(__dirname, "shorts-scrape.tsv"), checked = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
const excluded = JSON.parse(fs.readFileSync(path.join(__dirname, "excluded.json"), "utf8"));
const HOLD = excluded.shorts || {};   /* series held back on purpose (slug → reason), listed in excluded.json */
/* US search demand seen in Semrush (Nov 2026) → shown first on the hub */
const DEMAND = { "our-host-is-riley-reid": 1140, "11": 380, "153": 340, "sworn-to-the-queen": 260, "mona-s-obsession": 120, "26": 110,
  "my-girlfriends-mom": 70, "9": 70, "lp-series-diana-demont": 50, "76": 50, "forgive-me-father": 50, "riley-first-regina-next": 40 };
const SUBS = { a: ["en","fr","de","es","it","pt"], b: ["en","fr","de","es","it","pt","ja"] };
const cat = l => l === "MILF" ? "MILF" : l.charAt(0) + l.slice(1).toLowerCase();
const slugify = t => t.toLowerCase().replace(/['’]/g, "").replace(/&/g, " and ").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const unRL = s => s.split(",").flatMap(x => { const [v, n] = x.split("x"); return Array(+(n || 1)).fill(+v); });
/* English posters (the scrape's posters come from the French page and carry French titles) */
const enPosterF = path.join(__dirname, "shorts-posters-en.tsv");
const EN_POSTER = fs.existsSync(enPosterF) ? Object.fromEntries(fs.readFileSync(enPosterF, "utf8").split("\n").filter(Boolean).map(l => l.split("\t"))) : {};
const used = new Set(), out = [], skipped = [];
for (const line of fs.readFileSync(file, "utf8").split("\n").filter(Boolean)) {
  const [candy, title0, desc, costs, cast, names, subs, poster, cats, isNew] = line.split("\t");
  const tr = title0.startsWith("TR:"), title = title0.replace(/^TR:/, "").trim();
  const castL = cast ? cast.split(",") : [];
  if (HOLD[candy]) { skipped.push(candy + " (held: " + HOLD[candy] + ")"); continue; }
  if (castL.some(c => excluded.ids.includes(c))) { skipped.push(candy + " (excluded cast)"); continue; }
  let slug = slugify(title), i = 2; while (used.has(slug)) slug = slugify(title) + "-" + i++; used.add(slug);
  out.push({ slug, candy, title, desc: desc.trim(), ...(tr ? { tr: true } : {}), cats: cats ? [...new Set(cats.split(",").map(cat))] : [],
    isNew: isNew === "1", costs: unRL(costs), poster: (EN_POSTER[candy] || poster) ? "https://cdn.candy.ai/" + (EN_POSTER[candy] || poster) : "", cast: castL, castNames: names ? names.split(",") : [],
    subs: SUBS[subs] || (subs ? subs.split(",") : []), rank: DEMAND[candy] || 0 });
}
fs.writeFileSync(path.join(__dirname, "../src/data-shorts.js"), `/* Candy Shorts series, scraped from candy.ai/candy-shorts on ${checked} (tools/shorts-scrape.tsv → tools/shorts-data.js).
   Do not edit by hand: update the scrape (tools/UPDATE_SHORTS.md). rank = US search demand (Semrush), orders the hub.
   tr = title and synopsis translated by us from Candy's French page (the English page was not public). */
module.exports = { checked: ${JSON.stringify(checked)}, series: [
${out.map(o => JSON.stringify(o)).join(",\n")}
] };
`);
console.log(out.length + " series written" + (skipped.length ? "\nskipped: " + skipped.join("\n  ") : ""));
