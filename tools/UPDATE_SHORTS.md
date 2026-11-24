# Updating Candy Shorts (src/data-shorts.js)

The workspace cannot reach candy.ai: run the scrape in the browser pane on https://candy.ai/candy-shorts/categories/all (logged in).

1. **Series list + categories** (logged in, the page is French): scroll to the bottom until the number of
   `a[href*="/candy-shorts/series/"]` stops growing, then collect for each card `{slug, labels (card innerText lines), img}`
   into `window.__series`.
2. **Series details** (logged out, in English): for each slug, `fetch('/candy-shorts/series/<slug>', {credentials:'omit',
   headers:{'Accept-Language':'en-US'}})`, ~1.2 s apart, and read:
   - `og:title` (minus " | CandyShorts") and `og:description` → title, synopsis
   - `button[data-shorts--player-target="episode"]` → `data-number`, `data-token-cost`, `data-poster-url`
   - `a[href^="/conversations/"]` → cast slugs and names
   - `button[data-subtitle-tracks]` → subtitle locales
3. Save both as JSON, then: `node tools/shorts-data.js scrape.json grid.json YYYY-MM-DD`
   (series whose cast includes an id from `tools/excluded.json` are skipped and listed).
4. `node build.js && node tools/check-links.js` → must say 0 broken and 0 without affiliate code.

Access rules seen on 2026-11-24: episode 1 free without account, episode 2 free with a free account (lock "signup"),
episode 3+ Premium + tokens (usually 12, 30 on some series).
