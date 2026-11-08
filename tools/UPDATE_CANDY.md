# Adding new Candy AI characters (procedure)

Used by the recurring "new characters" task. Goal: every Candy AI character that is not on the site yet gets added, with its official data, as long as it passes the content rules below.

## 0. Where things run
- Candy pages can only be read from the **built-in browser on the owner's computer** (`mcp__remote-devices__Claude_Browser__*` tools). The cloud shell cannot reach candy.ai or cdn.candy.ai.
- Open a tab on `https://candy.ai/fr/ai-girlfriend` (preview_start), then run `fetch()` calls from that tab with `javascript_tool`.
- Candy rate-limits (HTTP 429 + `retry-after`). Wait at least 2.5 s between requests and honour `retry-after` (+5 s). Never hammer the site.

## 1. List the full catalogue
Paginate until a page adds no new id:
- `/home/profiles?filter=female&locale=fr&page=N`
- `/home/profiles?filter=anime&locale=fr&page=N`
- `/home/profiles?filter=male&locale=fr&page=N`
- `/home/featured_characters?category=all&locale=fr&page=N`
- `/candy-creators?locale=fr` and `/fr/ai-girlfriend` (landing)

Ids = the slug in links matching `/ai-(girlfriend|boyfriend|anime)/<slug>`.

## 2. Find the new ones
Compare with the `"id"` values in `src/data-candy.js`, and ignore:
- `live-action` (a section, not a character);
- the excluded ids in `tools/excluded.json`;
- aliases: a slug that is an existing id without its `-2`/`-3` suffix (e.g. `lila-crazy` = `lila-crazy-2`). Confirm by comparing descriptions.

## 3. Read each new character's official sheet
`fetch('/conversations/<slug>/profile_panel', {headers:{Accept:'text/vnd.turbo-stream.html, text/html'}})`
Strip `<template>` tags, parse with DOMParser, take `body.innerText`:
- the line just before `À propos de moi` = description (French) → `bio.fr`;
- after it: `Âge`, `Morphologie`, `Ethnicité`, `Relation`, `Profession`, `Loisirs`, `Personnalité`.
- Image: the `https://cdn.candy.ai/<key>-788x966-webp90` URL in the raw HTML → use `<key>-600x900-webp90`. Check it loads (new Image()). `sfw` = key starts with `sfw-profile`.
- Video preview: in the same raw HTML, the first URL matching `https://cdn.candy.ai/…profile-video…-h264` → `"video"` field (leave it out if there is none). If there is no profile video, a `live-action-…-h264` preview from the "live" row of `/home/profiles` cards for the same character may be used. Never use `cams-show` clips.
- The display name is the first name shown in the card; the page URL is `https://candy.ai/fr/ai-girlfriend/<slug>` (`ai-boyfriend` for men).

## 4. Content rules (mandatory)
**Do not add**, and list in the report instead:
- any character whose age is under 18 or not clearly adult;
- any character presented as a minor or in a school setting in a sexual context (schoolgirl, high school, uniform + school, "student" of a lycée/collège, childlike framing, "teen" emphasis);
- anything you are unsure about → leave it out and flag it for the owner.
Never add a "Teen", "Young", "Schoolgirl" or similar youth-focused tag.

## 4b. Never remove an existing profile
Never delete a profile that is already on the site, and never drop it from a category, without the owner's explicit approval. If something looks wrong, leave it as is and list it in the report.

## 5. Tags (only what the official sheet or description supports)
Use only tag names that exist in `TAG_GROUPS` (`src/data.js`). Always: `Female`/`Male`, `Realistic` or `Anime`, plus `Image generation`, `Voice`, `Video` (Candy offers these on every character). Then, only when explicit:
- body from Morphologie (Mince→Slim, Pulpeuse/Voluptueuse→Curvy, poitrine généreuse→Big Boobs, Athlétique→Athletic, Tonique/En forme→Fit, Menue/Petite→Petite, Ronde→Chubby, sablier→Hourglass, musclé→Muscular);
- origin from Ethnicité (Japonaise→Japanese+Asian, Libanaise→Middle Eastern+Arab, Mexicaine→Mexican+Latina, Française→French+European, …);
- role from Profession (Barista, Waitress, Nurse, Teacher, Model, Streamer, CEO, Maid, …; "Barmaid" is NOT Maid; "étudiante en médecine" is NOT Doctor);
- relationship only when the **character** is that relation to the user ("Ta demi-sœur" → Stepsister; "la sœur de ta femme" → NOT Wife);
- personality from Personnalité (Timide→Shy, Soumise→Submissive, Joueuse→Playful, Dominante→Dominant, …).
Hair colour only if the description says it (Blonde, Brunette, Redhead).

## 6. Add to `src/data-candy.js`
Insert a JSON object at the top of the girlfriend block (before the first existing girlfriend), same shape as the others:
`{"id","name","platform":"candy","added":"YYYY-MM-DD","img","sfw","url","tags":[…],"bio":{"fr":"…"},"age":N,"video":"…-h264"}`
(`creator: true` for creators.) `added` = today, so the profile shows as "New".
Also write the description in English, Spanish, German and Portuguese: `"bio":{"fr":"…","en":"…","es":"…","de":"…","pt":"…"}` (Hindi pages use the English text). Keep the meaning, the emojis and the tone; do not add details.

## 6b. Refresh the Top 10 (every run, even if no character was added)
Edit `TOP_PICKS` in `src/data.js` (10 profile ids, in order). It is labelled on the site as the editor's selection, so pick a varied, appealing mix:
- about 5 realistic women (include at least one character added in the last 14 days if any, and at least one with a `video`),
- 2 anime characters, 1 Creator Twin, 1 man, 1 SpicyChat profile with a photo;
- change at least 4 entries compared with last week; never use an excluded id.
Only use ids that exist in the data (check with a quick `node -e` load of the data files).

## 6c. Re-check the current offer (every run)
`OFFER` in `src/data.js` drives the "-70 %" banner and the offer box on the Candy page. From the candy.ai tab:
- `fetch('/fr/promotions/modal')` → read the discount ("Jusqu'à 70% de réduction…"), and open `/fr/premium` (or the subscription page) for the 12-month price per month and the month-to-month price.
- Offer still there → update `pct`, `price`, `regular` if they changed, and set `checked` to today.
- No offer any more → set `active: false`.
Never invent a code or a discount. Without a fresh check the banner hides itself 30 days after `checked`.

## 7. Build, check, publish
```
node build.js
node tools/check-links.js      # must say 0 broken
git add -A
git -c user.name="compagnonai79-code" -c user.email="compagnonai79-code@users.noreply.github.com" commit -m "Weekly update: N new Candy characters, Top 10 refreshed"
git push
```
Commit message ends with the attribution lines required by the session.
If no character is new, still commit and push the Top 10 refresh.
