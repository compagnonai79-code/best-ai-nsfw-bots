# best-ai-nsfw-bots.com

Independent directory of AI girlfriend characters and companion platforms (18+).

## Pages
- `index.html` – home: grid of AI girlfriend profiles, tag filters, "New" counter, profile pop-up, Candy AI promo pop-up
- `platforms.html` – ranking of the platforms (top picks + all platforms)

## Editing
Everything is in `data.js`:
- `PLATFORMS` – affiliate links (`url`)
- `PROMO` – promo pop-up text, image, delay
- `PROFILES` – character profiles (name, age 18+, tags, platform, image, date added)

Put pictures in `images/` (portrait 3:4) and set `img: "images/name.jpg"`.
Profiles added in the last `NEW_DAYS` days count as "New".
