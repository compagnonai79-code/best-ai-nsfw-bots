# best-ai-nsfw-bots.com

Independent 18+ directory of AI girlfriend characters and companion platforms, in 6 languages
(English at `/`, then `/fr/`, `/es/`, `/de/`, `/pt/`, `/hi/`).

## How it works
- **Edit** the files in `src/`
- **Build**: `node build.js` → generates the whole site into `public/` (≈280 pages)
- **Open locally**: double-click `public/index.html`
- **Publish**: deploy the `public/` folder (Netlify / Cloudflare Pages). `netlify.toml` already sets this up.

## What to edit
| File | Content |
|---|---|
| `src/data.js` | `SITE` (legal info — fill the `[TO FILL]` values!), `PLATFORMS` (affiliate links), `PLATFORM_DATA` (prices/features for the Data page), `PROMO`, `PROFILES` |
| `src/i18n.js` | Translations of the interface, tags, bios and descriptions |
| `src/i18n-pages.js` | Translations of Categories, Data, How we rate, Contact, Sitemap, Legal, profile pages |
| `src/legal.js` | Legal page texts (English + French) |
| `src/style.css` | Design |
| `images/` | Character pictures (portrait 3:4). Set `img: "images/name.jpg"` on a profile |

## Pages generated (per language)
Home · Top platforms · Categories · one page per category (`tag/…`) · one page per profile (`girl/…`) ·
How we rate · Data (+ `data.csv`) · Contact (Netlify form) · Sitemap · 6 legal pages ·
plus `sitemap.xml` (with hreflang) and `robots.txt`.

Legal pages exist in English and French; other languages show the English text with a canonical to the English page.
