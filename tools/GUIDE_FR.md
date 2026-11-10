# Guide : modifier le site à la main

Toutes les modifications se font dans le dossier `src/`, puis on publie (étape 10). Ouvre les fichiers avec un éditeur de code (VS Code conseillé : il signale les virgules oubliées).

| Fichier | Contenu |
|---|---|
| `src/data.js` | Réglages du site, plateformes, Top 10, offre Candy, pop-up, **liste des catégories** (`TAG_GROUPS`), anciens personnages SpicyChat |
| `src/data-candy.js` | Tous les personnages Candy |
| `src/data-spicy.js` | Les personnages SpicyChat ajoutés depuis novembre 2026 |
| `src/i18n-tags.js` | Traductions des noms de catégories (fr, es, de, pt, hi) |
| `src/app.js` | Seuil d'affichage des catégories (`MIN_TAG`) |

---

## 0. Avant de commencer (à chaque fois)
```
cd best-ai-nsfw-bots
git pull
```
`git pull` récupère les dernières modifications (y compris celles de la mise à jour automatique du mercredi). Sans ça, tu risques un conflit au moment de publier.

---

## 1. Mettre un personnage dans une catégorie existante
1. Cherche le personnage (Ctrl+F sur son nom ou son `id`) dans `src/data-candy.js` ou `src/data-spicy.js` (ou `src/data.js` pour les tout premiers SpicyChat).
2. Ajoute le nom exact de la catégorie dans sa liste `tags`.

Candy (format JSON, un tag par ligne) :
```
"tags": [
"Female",
"Realistic",
"Old"
],
```
SpicyChat (sur une ligne) :
```
tags:["Female","Granny","Old","Realistic"],
```
Règles :
- Le nom doit être **exactement** celui de `TAG_GROUPS` (majuscules comprises : `"Very Old"`, pas `"very old"`).
- Chaque tag entre guillemets droits `"`, séparés par des virgules, **pas de virgule après le dernier**.

## 2. Créer une nouvelle catégorie
1. Dans `src/data.js`, trouve `const TAG_GROUPS = {` et ajoute le nom anglais dans le bon groupe (`body`, `hair`, `origin`, `role`, `relationship`, `fantasy`, `kink`…) :
   ```
   relationship:["Best Friend", … ,"Old", … ,"Very Old","Wife"],
   ```
2. Dans `src/i18n-tags.js`, ajoute la traduction en tête de chaque langue :
   ```
   fr: {
     "Old":"Âgé(e)s","Very Old":"Très âgé(e)s",
   ```
   Fais pareil pour `es: {`, `de: {`, `pt: {`, `hi: {`. L'anglais n'a pas besoin de traduction (le nom sert de libellé).
3. Mets la catégorie sur au moins un personnage (étape 1). La page `tag/<nom>.html` est créée automatiquement dans les 6 langues, avec son texte, sa FAQ et le sitemap.

> Le nom de l'URL vient du nom anglais : `Very Old` → `tag/very-old.html`. Choisis-le bien dès le départ, le changer plus tard casse les liens déjà indexés.

## 2b. Mettre une catégorie dans le filtre « Âge »
Le filtre « Âge » de la page d'accueil montre les tranches d'âge (18-21, 22-25…) **plus** les catégories listées dans `age` de `TAG_GROUPS`.
Pour y mettre une catégorie : dans `src/data.js`, **coupe** son nom de son groupe actuel et **colle-le** dans `age` :
```
  age:         ["Old","Very Old"],
  …
  relationship:["Best Friend", … ,"Neighbor","One Night Stand", …],
```
Une catégorie ne doit être que dans **un seul** groupe. Sa page et son URL ne changent pas ; sur la page « Catégories », elle apparaît dans la section « Âge ».

## 3. Ajouter un personnage SpicyChat
Dans `src/data-spicy.js`, copie un bloc existant juste avant `];` d'une des deux listes, et adapte :
```
  { name:"Prénom Nom", id:"prenom-nom", img:SCI("xxxxxxxx.jpg"), c:"identifiant-du-chat",
    tags:["Female","Old","Realistic"],
    bio:{ en:"Phrase en anglais.",
          fr:"Phrase en français.",
          es:"…", de:"…", pt:"…" } },
```
- `c` : l'identifiant dans l'adresse du chat, par ex. `https://spicychat.ai/chat/`**`3709abb4-a53d-40b0-8762-f18a6b0e475a`**. Ton lien affilié est ajouté automatiquement.
- `img` : clic droit sur l'avatar → « Copier l'adresse de l'image ». Si l'adresse commence par `https://cdn.nd-api.com/avatars/`, mets seulement la fin dans `SCI("…")` (sans `?class=…`). Sinon mets l'adresse complète entre guillemets : `img:"https://…"`.
- `id` : unique, en minuscules avec des tirets (c'est l'adresse de sa page `model/<id>.html`).
- Écris toi-même la description (ne copie pas le texte du créateur).

## 4. Ajouter un personnage Candy
Le plus simple : laisse la mise à jour automatique du mercredi le faire (elle lit la fiche officielle). Pour le faire à la main, copie un bloc de `src/data-candy.js` (de `{` à `},`) en haut de la liste et adapte `id`, `name`, `added` (date du jour, pour l'étiquette « Nouveau »), `img`, `url`, `tags`, `bio`, `age`.

## 5. Modifier un personnage
Dans son bloc : `bio` (description par langue), `tags`, `img` (photo), `age`, `name`. Ne change pas l'`id` d'un personnage déjà en ligne (son URL changerait).

## 6. Retirer un personnage
- Candy : supprime son bloc dans `src/data-candy.js` **et** ajoute son `id` dans `tools/excluded.json`, sinon la mise à jour du mercredi le rajoute.
- SpicyChat : supprime son bloc.

## 7. Changer le Top 10
`src/data.js` → `const TOP_PICKS = [ … ]` : 10 `id` dans l'ordre. La mise à jour du mercredi n'y touche plus : c'est toi qui le choisis.

## 8. Offre Candy, pop-up
`src/data.js` → `const OFFER = { … }` : `active: false` pour enlever le bandeau ; `pct`, `price`, `regular`, `checked` pour les chiffres. Le pop-up : `const PROMO`.

## 9. Seuil d'affichage des catégories
`src/app.js` → `const MIN_TAG = 1;` (une catégorie est publiée dès qu'elle a 1 personnage).

## 10. Publier
```
node build.js
node tools/check-links.js
git add -A
git commit -m "Ce que j'ai changé"
git push
```
- `node build.js` doit finir par `Built … pages`. Un message `⚠️ … tag "…" is not in TAG_GROUPS` = un tag mal orthographié ou absent de `TAG_GROUPS`. (Le message `hi: 1 tags shown in English` est normal : c'est « OnlyFans ».)
- `check-links` doit afficher `0 broken`.
- Pour vérifier avant de publier : ouvre `public/fr/index.html` dans ton navigateur.

## Erreurs fréquentes
| Message | Cause probable |
|---|---|
| `SyntaxError: Unexpected token` | virgule oubliée ou en trop, guillemet ou accolade non fermé (VS Code souligne la ligne) |
| `is not in TAG_GROUPS` | nom de catégorie différent de `TAG_GROUPS` |
| `rejected` au `git push` | fais `git pull` puis recommence `git push` |
| Photo vide sur le site | adresse d'image incorrecte ou image supprimée par la plateforme |
