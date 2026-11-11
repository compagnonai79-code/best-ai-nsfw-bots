/* Candy AI review page (review/candy-ai.html), 6 languages.
   Source: the owner's own hands-on test (video, November 2026). Prices checked on candy.ai/fr/subscriptions on 2026-11-11.
   In the section bodies, [[img:name]] is replaced by a figure (images/avis-candy/<name>.webp, caption from `cap`). */
module.exports = {
date: "2026-11-11",
img: { "candy-accueil": [785, 815], "creation-style": [785, 650], "creation-origine-age": [785, 738], "creation-cheveux": [785, 758],
       "creation-personnalite": [800, 428], "chat": [800, 374], "prix": [785, 698] },

/* ============================== FRANÇAIS ============================== */
fr: {
  meta_t: "Avis Candy AI 2026 : notre test complet (chat, images, appels, prix)",
  meta_d: "Nous avons testé Candy AI avec un abonnement payant : création du personnage, conversation, mémoire, images, appels vocaux et vrai coût des jetons. Points forts, défauts et verdict.",
  crumb: "Avis", h1: "Avis Candy AI : notre test complet",
  intro: "Candy AI se présente comme « l'expérience petite amie IA la plus réaliste du marché ». Le marketing est soigné, mais qu'y a-t-il derrière ? Nous avons testé l'appli avec un abonnement payant : création d'un personnage, conversation (cohérence, mémoire, humour), génération d'images, appels vocaux et coût réel des jetons. Voici ce que nous avons constaté, sans filtre.",
  box_t: "En bref",
  box: "Une très belle vitrine : création de personnage soignée, images réalistes souvent bluffantes et conversations sans tabou. Mais la mémoire est inégale, l'IA repasse parfois à l'anglais et les jetons partent vite. À prendre en abonnement 12 mois, pas au mois.",
  scores: [["Conversation", "7/10"], ["Images réalistes", "9/10 au mieux"], ["Appels vocaux", "3/5"], ["Prix", "3,99 €/mois (12 mois)"]],
  site_score: "Note de la plateforme (notre méthode)",
  pros_t: "Points forts", cons_t: "Points faibles",
  pros: ["Création du personnage très complète (style, origine, âge, corps, personnalité, relation, voix)",
    "Images réalistes de grande qualité sur les demandes simples",
    "Conversation sans filtre, qui comprend l'humour, le sarcasme et les références",
    "Appels vocaux qu'on peut interrompre",
    "Paiement discret (« EverAI » sur le relevé), crypto acceptée",
    "3,99 €/mois avec l'offre 12 mois, l'un des meilleurs prix du marché"],
  cons: ["Mémoire inégale : elle retient certains détails et en oublie d'autres",
    "Peut repasser à l'anglais en pleine conversation",
    "Version gratuite très limitée (quelques messages)",
    "Images : erreurs anatomiques et poses ignorées sur les demandes complexes",
    "Jetons vite épuisés (images, appels, et même la lecture audio)",
    "Recharges de jetons chères"],
  cta: "Essayer Candy AI", cta_note: "Lien affilié · 18+",
  toc_t: "Sommaire",
  sections: [
  { id: "creation", h2: "1. Création du personnage : un configurateur très complet", body: `
<p>Pour créer ta copine IA, va dans « Créer un modèle IA ». Tu choisis d'abord une femme ou un homme (une option trans existe aussi), puis le style : <strong>réaliste</strong> ou <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Viennent ensuite l'origine (occidentale, asiatique, africaine, latina, arabe), l'âge (un curseur de 18 à 55 ans et plus), la coiffure, la couleur des cheveux et des yeux, puis le type de corps et la taille de poitrine.</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>Dernière étape : le nom, la personnalité, le type de relation, la profession et la voix (plusieurs voix à écouter avant de choisir). Pendant notre test, l'appli proposait aussi des loisirs et une tenue. Le choix de personnalités est large : soignante, sage, innocente, bouffonne, tentatrice, dominatrice, soumise, amoureuse, nympho, méchante, confidente, expérimentatrice… Même chose pour la relation : inconnue, camarade, collègue, mentor, petite amie, plan cul, épouse, maîtresse, amie, meilleure amie, belle-sœur, belle-mère…</p>
[[img:creation-personnalite]]
<p><strong>Notre avis :</strong> c'est propre, rapide et joli. Mais tout se fait en cases à cocher : aucun champ libre pour écrire son histoire ou ses souvenirs. On choisit la carrosserie et la couleur des sièges, mais le moteur reste le même pour tout le monde. Ça conviendra à la plupart des utilisateurs, moins à ceux qui veulent une personnalité vraiment unique.</p>
<p class="avis-note">En version gratuite, l'appli demande de passer Premium au moment de finaliser le personnage.</p>` },
  { id: "conversation", h2: "2. Conversation : drôle et sans tabou, mais distraite", body: `
[[img:chat]]
<p>L'interface ressemble à ChatGPT : une barre pour écrire, un bouton pour demander une image, un autre pour écouter sa réponse en audio. Deux regrets : impossible de lui parler à la voix dans le chat, et seul ton dernier message peut être modifié.</p>
<h3>Ce qui marche bien</h3>
<ul>
<li><strong>Elle adopte la personnalité qu'on lui donne.</strong> Nous lui avons décrit quelques traits (fan de science-fiction vintage, déteste les olives) : elle les a acceptés et réutilisés.</li>
<li><strong>Bonne culture générale, et du répondant.</strong> Entre Blade Runner et Marvel, l'une de nos IA a tranché (Blade Runner) au lieu de rester neutre.</li>
<li><strong>Elle comprend le sarcasme.</strong> « Mon train est annulé et il pleut, franchement une journée parfaite » : elle a saisi l'ironie et compati, sans réponse à côté de la plaque.</li>
<li><strong>Elle reconnaît les références.</strong> Une phrase d'« un grand philosophe vert » (« fais-le ou ne le fais pas, il n'y a pas d'essai ») : elle a tout de suite reconnu Yoda.</li>
<li><strong>Sans filtre si tu le veux.</strong> Quand on l'y invite, elle peut devenir très explicite, plus ou moins selon la personnalité choisie. La promesse « sans limite » est tenue.</li>
</ul>
<h3>Ce qui coince</h3>
<ul>
<li><strong>Mémoire inégale.</strong> Nous lui avions dit préparer un semi-marathon ; plus tard, à la question « pourquoi je cours autant en ce moment ? », elle a répondu « pour ta santé ». Un coup elle se souvient, un coup non.</li>
<li><strong>Des scènes incohérentes.</strong> Après avoir parlé de notre chien Max, l'appli a écrit « elle regarde Max en souriant »… comme si elle était dans notre salon.</li>
<li><strong>Le plus gênant : elle repasse à l'anglais.</strong> On lui demande de revenir au français, elle obéit un ou deux messages, puis recommence.</li>
<li><strong>Version gratuite :</strong> au bout de cinq messages environ, l'appli pousse à payer.</li>
</ul>
<p><strong>Note conversation : 7/10.</strong> Mieux que la moyenne, avec de l'imagination et du répondant, mais des défauts agaçants qui rappellent qu'on parle à un programme pas tout à fait fini.</p>` },
  { id: "images", h2: "3. Génération d'images : bluffante en réaliste, fragile sur les demandes complexes", body: `
<p>Pendant la conversation, il suffit de demander (« montre-moi », « envoie-moi une photo ») ou de passer par le bouton d'action. Nos tests :</p>
<ul>
<li><strong>Selfie dans un café parisien</strong> (béret rouge, col roulé noir, pluie à la fenêtre, tour Eiffel) : en réaliste, tout y est, on dirait une vraie photo. <strong>9/10.</strong> En anime, les détails se perdent et la tour Eiffel… a disparu.</li>
<li><strong>Sur le canapé, avec un de nos t-shirts et un café</strong> : joli, mais la fumée de la tasse sort de ses cheveux. Le genre de détail qui trahit la machine.</li>
<li><strong>Selfie à la plage</strong> (cheveux mouillés, peau brillante, clin d'œil) : réussi à 70 % environ. Les cheveux sont secs et le clin d'œil est raté.</li>
<li><strong>Images +18</strong> : en anime, ça passe. En réaliste, l'IA s'embrouille : elle ajoute des vêtements ou des accessoires, et une image est même sortie avec un bras en trop. Les poses demandées sont rarement respectées et les mêmes images reviennent souvent.</li>
</ul>
<p><strong>Notre avis :</strong> excellent sur des demandes simples en réaliste, beaucoup moins fiable dès qu'on demande une pose précise. Et chaque image coûte 2 à 3 jetons : sur 100 jetons, environ 40 sont partis rien qu'en images pendant notre test.</p>` },
  { id: "appels", h2: "4. Appels vocaux : on peut l'interrompre, mais elle parle trop", body: `
<p>Le bouton « Appelle-moi » lance un vrai appel, comme au téléphone. Coût : <strong>3 jetons par minute</strong>.</p>
<ul>
<li>✅ <strong>On peut l'interrompre</strong> en pleine phrase pour poser une autre question.</li>
<li>✅ <strong>Elle se souvient de la conversation écrite</strong> : elle nous a reparlé de notre chien Max.</li>
<li>❌ <strong>Des réponses interminables</strong>, qui donnent l'impression de faire durer l'appel… et le compteur de jetons.</li>
<li>❌ Pour nous conseiller un film, elle n'a pas tenu compte de notre goût pour la science-fiction, pourtant donné dans le chat.</li>
<li>❌ Quelques mots mal prononcés, et un pseudo avec des chiffres écorché.</li>
</ul>
<p><strong>Note appels : 3/5.</strong> Plutôt correct, mais encore des progrès à faire.</p>` },
  { id: "prix", h2: "5. Prix et jetons : ce que ça coûte vraiment", body: `
<p>Sans abonnement, le test tourne court en quelques minutes : pour vraiment profiter de Candy AI, il faut le Premium. Prix relevés sur candy.ai le 11 novembre 2026 :</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Formule</th><th>Prix</th></tr></thead><tbody>
<tr><td><strong>12 mois</strong></td><td><strong>3,99 €/mois</strong> au lieu de 13,99 € (-70 %)</td></tr>
<tr><td>3 mois</td><td>8,99 €/mois</td></tr>
<tr><td>1 mois</td><td>9,99 € le premier mois, puis 13,99 €/mois</td></tr>
</tbody></table></div>
<p>Les trois formules donnent la même chose : messages illimités, création de personnages, images et vidéos +18 et <strong>100 jetons par mois</strong>. Et ces jetons partent vite :</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Action</th><th>Coût</th></tr></thead><tbody>
<tr><td>Une image</td><td>2 à 3 jetons</td></tr>
<tr><td>Un appel vocal</td><td>3 jetons par minute</td></tr>
<tr><td>Écouter un message en audio</td><td>0,2 jeton</td></tr>
</tbody></table></div>
<p>Avec 100 jetons, une dizaine d'images et un appel peuvent vider le compteur en moins d'une heure. Les recharges sont chères : 9,99 € les 100 jetons pendant notre test, et jusqu'à environ 300 € le pack de 3 750 jetons.</p>
<p>Paiement par carte, virement ou crypto. Le relevé bancaire affiche « EverAI », pas Candy, et l'abonnement se résilie à tout moment dans les paramètres.</p>
<p><strong>Notre conseil :</strong> l'abonnement 12 mois à 3,99 €/mois est l'un des meilleurs prix du marché. Le mois seul, lui, est cher.</p>` },
  { id: "verdict", h2: "Verdict : une belle vitrine, une arrière-boutique à finir", body: `
[[img:candy-accueil]]
<p>Candy AI excelle pour créer un personnage à ton goût, générer de belles images réalistes et mener des conversations coquines sans jugement. Pour la mémoire à long terme et les échanges profonds, on repassera : c'est une artiste, pas une confidente. Et si tu comptes beaucoup utiliser les images, la voix et les appels, prévois un budget jetons.</p>
<p>Si tu cherches surtout du jeu de rôle avec beaucoup de messages gratuits, jette un œil à <a href="../platform/spicychat.html">SpicyChat AI</a>. Pour les fonctions en détail et la note de Candy AI, voir <a href="../platform/candy.html">notre fiche Candy AI</a>.</p>` }
  ],
  faq_t: "Questions fréquentes",
  faq: [
    ["Candy AI est-il gratuit ?", "Il existe une version gratuite, mais très limitée : au bout de quelques messages, l'appli demande de passer Premium, et la création d'un personnage aussi. Pour un vrai usage, il faut l'abonnement."],
    ["Combien coûte Candy AI ?", "Le 11 novembre 2026 : 3,99 €/mois avec l'abonnement 12 mois, 8,99 €/mois sur 3 mois, ou 9,99 € le premier mois puis 13,99 €/mois. Chaque formule inclut 100 jetons par mois."],
    ["À quoi servent les jetons sur Candy AI ?", "Aux images (2 à 3 jetons chacune), aux appels vocaux (3 jetons par minute) et à la lecture audio des messages (0,2 jeton). Les messages texte, eux, sont illimités en Premium."],
    ["Candy AI se souvient-il de ce qu'on lui dit ?", "En partie. Pendant notre test, elle a retenu notre chien Max jusque dans l'appel vocal, mais a oublié notre semi-marathon. La mémoire à long terme reste son point faible."],
    ["Candy AI parle-t-il français ?", "Oui, mais il lui arrive de repasser à l'anglais en pleine conversation, même après lui avoir demandé de rester en français."],
    ["Candy AI est-il discret sur le relevé bancaire ?", "Oui : le paiement apparaît sous le nom « EverAI ». La crypto est aussi acceptée, et l'abonnement se résilie à tout moment dans les paramètres."]
  ],
  end_t: "Envie de tester par toi-même ?", end: "Profite de l'offre en cours sur l'abonnement 12 mois et crée ta propre copine IA.",
  pl_link: "Lire notre avis complet (test)",
  cap: { "creation-style": "Étape 1 : choisir entre le style réaliste et le style anime.",
    "creation-origine-age": "Étape 2 : l'origine et l'âge (de 18 à 55 ans et plus).",
    "creation-cheveux": "Étape 3 : coiffure, couleur des cheveux et des yeux.",
    "creation-personnalite": "Dernière étape : nom, personnalité, relation, profession et voix.",
    "chat": "L'interface du chat : appel, vidéo et cadeaux en haut, la barre de message en bas.",
    "prix": "Les abonnements affichés sur candy.ai le 11 novembre 2026.",
    "candy-accueil": "L'accueil de Candy AI et sa galerie de personnages." },
  src: "Captures : candy.ai"
},

/* ============================== ENGLISH ============================== */
en: {
  meta_t: "Candy AI Review 2026: Our Full Hands-On Test (Chat, Images, Calls, Price)",
  meta_d: "We tested Candy AI on a paid plan: character creation, conversation, memory, images, voice calls and the real cost of tokens. Strengths, flaws and our verdict.",
  crumb: "Review", h1: "Candy AI Review: Our Full Hands-On Test",
  intro: "Candy AI calls itself “the most realistic AI girlfriend experience on the market”. The marketing is slick, but what is behind it? We tested the app on a paid plan: creating a character, conversation (consistency, memory, humour), image generation, voice calls and the real cost of tokens. Here is what we found, unfiltered.",
  box_t: "In short",
  box: "A beautiful shop window: polished character creation, often stunning realistic images and taboo-free chats. But memory is patchy, the AI sometimes switches language mid-chat and tokens run out fast. Take the 12-month plan, not the monthly one.",
  scores: [["Conversation", "7/10"], ["Realistic images", "9/10 at best"], ["Voice calls", "3/5"], ["Price", "€3.99/month (12 months)"]],
  site_score: "Platform rating (our method)",
  pros_t: "Strengths", cons_t: "Weaknesses",
  pros: ["Very complete character creation (style, origin, age, body, personality, relationship, voice)",
    "High-quality realistic images for simple requests",
    "Unfiltered conversation that gets humour, sarcasm and references",
    "Voice calls you can interrupt",
    "Discreet billing (“EverAI” on your statement), crypto accepted",
    "€3.99/month on the 12-month plan, one of the best prices around"],
  cons: ["Patchy memory: remembers some details, forgets others",
    "Can switch language in the middle of a conversation",
    "Very limited free version (a few messages)",
    "Images: anatomy errors and ignored poses on complex requests",
    "Tokens run out fast (images, calls, even audio playback)",
    "Expensive token top-ups"],
  cta: "Try Candy AI", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "creation", h2: "1. Character creation: a very complete configurator", body: `
<p>To create your AI girlfriend, go to “Create AI model”. You first pick a woman or a man (there is also a trans option), then the style: <strong>realistic</strong> or <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Next come the origin (Caucasian, Asian, African, Latina, Arab), the age (a slider from 18 to 55+), the hairstyle, hair and eye colour, then the body type and breast size.</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>The last step covers the name, personality, relationship type, job and voice (you can listen to several voices before choosing). During our test the app also offered hobbies and an outfit. There are plenty of personalities: caregiver, sage, innocent, jester, temptress, dominant, submissive, lover, nympho, mean, confidante, experimenter… The same goes for relationships: stranger, classmate, colleague, mentor, girlfriend, fling, wife, mistress, friend, best friend, sister-in-law, mother-in-law…</p>
[[img:creation-personnalite]]
<p><strong>Our take:</strong> it is clean, fast and pretty. But everything is tick boxes: there is no free field to write her story or memories. You choose the bodywork and the seat colour, but the engine is the same for everyone. Most users will be happy; those who want a truly unique personality, less so.</p>
<p class="avis-note">On the free version, the app asks you to go Premium when you finalise the character.</p>` },
  { id: "conversation", h2: "2. Conversation: funny and taboo-free, but forgetful", body: `
[[img:chat]]
<p>The interface looks like ChatGPT: a bar to type in, a button to request a picture and another to hear her reply as audio. Two regrets: you cannot talk to her by voice in the chat, and only your last message can be edited.</p>
<h3>What works well</h3>
<ul>
<li><strong>She adopts the personality you give her.</strong> We described a few traits (a fan of vintage sci-fi, hates olives): she accepted and reused them.</li>
<li><strong>Good general knowledge, and she pushes back.</strong> Asked to choose between Blade Runner and Marvel, one of our AIs picked a side (Blade Runner) instead of staying neutral.</li>
<li><strong>She gets sarcasm.</strong> “My train was cancelled and it's raining, honestly a perfect day”: she caught the irony and sympathised, no off-topic answer.</li>
<li><strong>She recognises references.</strong> A line from “a great green philosopher” (“do or do not, there is no try”): she named Yoda straight away.</li>
<li><strong>Unfiltered if you want it.</strong> When invited, she can get very explicit, more or less depending on the personality chosen. The “no limits” promise is kept.</li>
</ul>
<h3>What goes wrong</h3>
<ul>
<li><strong>Patchy memory.</strong> We told her we were training for a half-marathon; later, asked “why am I running so much lately?”, she answered “for your health”. Sometimes she remembers, sometimes she doesn't.</li>
<li><strong>Inconsistent scenes.</strong> After we mentioned our dog Max, the app wrote “she looks at Max with a smile”… as if she were in our living room.</li>
<li><strong>The most annoying flaw: she switches to English.</strong> Our test was in French. Asked to go back to French, she obeyed for one or two messages, then switched again.</li>
<li><strong>Free version:</strong> after about five messages, the app pushes you to pay.</li>
</ul>
<p><strong>Conversation score: 7/10.</strong> Better than average, with imagination and wit, but with irritating flaws that remind you you are talking to a program that is not quite finished.</p>` },
  { id: "images", h2: "3. Image generation: stunning when realistic, shaky on complex requests", body: `
<p>During the chat, just ask (“show me”, “send me a photo”) or use the action button. Our tests:</p>
<ul>
<li><strong>Selfie in a Paris café</strong> (red beret, black turtleneck, rain on the window, Eiffel Tower): in realistic mode everything is there, it looks like a real photo. <strong>9/10.</strong> In anime mode the details are lost and the Eiffel Tower… disappeared.</li>
<li><strong>On the sofa, in one of our T-shirts, with a coffee</strong>: pretty, but the steam from the cup comes out of her hair. The kind of detail that gives the machine away.</li>
<li><strong>Beach selfie</strong> (wet hair, glowing skin, a wink): about 70% right. The hair is dry and the wink fails.</li>
<li><strong>18+ images</strong>: fine in anime. In realistic mode the AI gets confused: it adds clothes or accessories, and one image even came out with an extra arm. Requested poses are rarely respected and the same images keep coming back.</li>
</ul>
<p><strong>Our take:</strong> excellent for simple realistic requests, much less reliable as soon as you ask for a specific pose. And each image costs 2 to 3 tokens: out of 100 tokens, about 40 went on images alone during our test.</p>` },
  { id: "appels", h2: "4. Voice calls: you can interrupt her, but she talks too much", body: `
<p>The “Call me” button starts a real call, just like a phone. Cost: <strong>3 tokens per minute</strong>.</p>
<ul>
<li>✅ <strong>You can interrupt her</strong> mid-sentence to ask something else.</li>
<li>✅ <strong>She remembers the written chat</strong>: she brought up our dog Max again.</li>
<li>❌ <strong>Endless answers</strong>, which feel like a way to stretch the call… and the token counter.</li>
<li>❌ When recommending a film, she ignored the taste for sci-fi we had mentioned in the chat.</li>
<li>❌ A few mispronounced words, and a username with digits got mangled.</li>
</ul>
<p><strong>Calls score: 3/5.</strong> Decent, but there is still room for improvement.</p>` },
  { id: "prix", h2: "5. Price and tokens: what it really costs", body: `
<p>Without a subscription the test ends within minutes: to really use Candy AI you need Premium. Prices checked on candy.ai on 11 November 2026 (French site, in euros):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Plan</th><th>Price</th></tr></thead><tbody>
<tr><td><strong>12 months</strong></td><td><strong>€3.99/month</strong> instead of €13.99 (-70%)</td></tr>
<tr><td>3 months</td><td>€8.99/month</td></tr>
<tr><td>1 month</td><td>€9.99 for the first month, then €13.99/month</td></tr>
</tbody></table></div>
<p>All three plans include the same things: unlimited messages, character creation, 18+ images and videos and <strong>100 tokens per month</strong>. And those tokens go fast:</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Action</th><th>Cost</th></tr></thead><tbody>
<tr><td>One image</td><td>2 to 3 tokens</td></tr>
<tr><td>A voice call</td><td>3 tokens per minute</td></tr>
<tr><td>Hearing a message as audio</td><td>0.2 token</td></tr>
</tbody></table></div>
<p>With 100 tokens, a dozen images and one call can empty the counter in under an hour. Top-ups are expensive: €9.99 for 100 tokens during our test, and up to about €300 for the 3,750-token pack.</p>
<p>Payment by card, bank transfer or crypto. Your bank statement shows “EverAI”, not Candy, and you can cancel at any time in the settings.</p>
<p><strong>Our advice:</strong> the 12-month plan at €3.99/month is one of the best prices on the market. The single month is expensive.</p>` },
  { id: "verdict", h2: "Verdict: a beautiful shop window, an unfinished back room", body: `
[[img:candy-accueil]]
<p>Candy AI excels at building a character to your taste, generating beautiful realistic images and holding naughty, judgement-free conversations. For long-term memory and deep conversations, look elsewhere: she is an artist, not a confidante. And if you plan to use images, voice and calls a lot, budget for tokens.</p>
<p>If you mainly want roleplay with lots of free messages, have a look at <a href="../platform/spicychat.html">SpicyChat AI</a>. For Candy AI's features in detail and its rating, see <a href="../platform/candy.html">our Candy AI page</a>.</p>` }
  ],
  faq_t: "Frequently asked questions",
  faq: [
    ["Is Candy AI free?", "There is a free version, but it is very limited: after a few messages the app asks you to go Premium, and creating a character does too. For real use, you need a subscription."],
    ["How much does Candy AI cost?", "On 11 November 2026: €3.99/month on the 12-month plan, €8.99/month over 3 months, or €9.99 for the first month then €13.99/month. Every plan includes 100 tokens per month."],
    ["What are tokens used for on Candy AI?", "Images (2 to 3 tokens each), voice calls (3 tokens per minute) and audio playback of messages (0.2 token). Text messages are unlimited on Premium."],
    ["Does Candy AI remember what you tell it?", "Partly. In our test she remembered our dog Max, even during the voice call, but forgot our half-marathon. Long-term memory is still its weak point."],
    ["Does Candy AI speak other languages?", "Yes, we tested it in French. But it sometimes switches back to English mid-conversation, even after being asked to stay in French."],
    ["Is Candy AI discreet on bank statements?", "Yes: the charge appears as “EverAI”. Crypto is accepted too, and the subscription can be cancelled at any time in the settings."]
  ],
  end_t: "Want to try it yourself?", end: "Grab the current offer on the 12-month plan and create your own AI girlfriend.",
  pl_link: "Read our full hands-on review",
  cap: { "creation-style": "Step 1: choose between the realistic and the anime style.",
    "creation-origine-age": "Step 2: origin and age (from 18 to 55+).",
    "creation-cheveux": "Step 3: hairstyle, hair and eye colour.",
    "creation-personnalite": "Last step: name, personality, relationship, job and voice.",
    "chat": "The chat interface: call, video and gifts at the top, the message bar at the bottom.",
    "prix": "The plans shown on candy.ai on 11 November 2026.",
    "candy-accueil": "Candy AI's home page and its character gallery." },
  src: "Screenshots: candy.ai (French version)"
},

/* ============================== ESPAÑOL ============================== */
es: {
  meta_t: "Opinión de Candy AI 2026: nuestra prueba completa (chat, imágenes, llamadas, precio)",
  meta_d: "Probamos Candy AI con un plan de pago: creación del personaje, conversación, memoria, imágenes, llamadas de voz y el coste real de los tokens. Puntos fuertes, fallos y veredicto.",
  crumb: "Opinión", h1: "Opinión de Candy AI: nuestra prueba completa",
  intro: "Candy AI se presenta como «la experiencia de novia IA más realista del mercado». El marketing está muy cuidado, pero ¿qué hay detrás? Probamos la app con un plan de pago: creación de un personaje, conversación (coherencia, memoria, humor), generación de imágenes, llamadas de voz y coste real de los tokens. Esto es lo que encontramos, sin filtros.",
  box_t: "En resumen",
  box: "Un escaparate precioso: creación de personaje cuidada, imágenes realistas a menudo impresionantes y conversaciones sin tabúes. Pero la memoria falla a ratos, la IA a veces cambia de idioma y los tokens se gastan rápido. Mejor el plan de 12 meses que el mensual.",
  scores: [["Conversación", "7/10"], ["Imágenes realistas", "9/10 en el mejor caso"], ["Llamadas de voz", "3/5"], ["Precio", "3,99 €/mes (12 meses)"]],
  site_score: "Nota de la plataforma (nuestro método)",
  pros_t: "Puntos fuertes", cons_t: "Puntos débiles",
  pros: ["Creación del personaje muy completa (estilo, origen, edad, cuerpo, personalidad, relación, voz)",
    "Imágenes realistas de gran calidad en peticiones sencillas",
    "Conversación sin filtros, que entiende el humor, el sarcasmo y las referencias",
    "Llamadas de voz que se pueden interrumpir",
    "Pago discreto («EverAI» en el extracto), acepta cripto",
    "3,99 €/mes con el plan de 12 meses, uno de los mejores precios del mercado"],
  cons: ["Memoria irregular: recuerda algunos detalles y olvida otros",
    "Puede cambiar de idioma en plena conversación",
    "Versión gratuita muy limitada (unos pocos mensajes)",
    "Imágenes: errores anatómicos y poses ignoradas en peticiones complejas",
    "Los tokens se agotan rápido (imágenes, llamadas e incluso el audio)",
    "Recargas de tokens caras"],
  cta: "Probar Candy AI", cta_note: "Enlace de afiliado · 18+",
  toc_t: "Índice",
  sections: [
  { id: "creation", h2: "1. Creación del personaje: un configurador muy completo", body: `
<p>Para crear tu novia IA, entra en «Crear modelo IA». Primero eliges mujer u hombre (también hay una opción trans) y luego el estilo: <strong>realista</strong> o <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Después vienen el origen (occidental, asiático, africano, latino, árabe), la edad (un control deslizante de 18 a más de 55 años), el peinado, el color del pelo y de los ojos, y por último el tipo de cuerpo y la talla de pecho.</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>El último paso incluye el nombre, la personalidad, el tipo de relación, la profesión y la voz (puedes escuchar varias antes de elegir). Durante nuestra prueba la app también ofrecía aficiones y un atuendo. Hay muchas personalidades: cuidadora, sabia, inocente, bufona, seductora, dominante, sumisa, enamorada, ninfómana, mala, confidente, experimentadora… Y lo mismo con la relación: desconocida, compañera, colega, mentora, novia, rollo, esposa, amante, amiga, mejor amiga, cuñada, suegra…</p>
[[img:creation-personnalite]]
<p><strong>Nuestra opinión:</strong> es limpio, rápido y bonito. Pero todo son casillas: no hay ningún campo libre para escribir su historia o sus recuerdos. Eliges la carrocería y el color de los asientos, pero el motor es el mismo para todos. Convencerá a la mayoría, menos a quien busque una personalidad realmente única.</p>
<p class="avis-note">En la versión gratuita, la app pide pasar a Premium al finalizar el personaje.</p>` },
  { id: "conversation", h2: "2. Conversación: divertida y sin tabúes, pero despistada", body: `
[[img:chat]]
<p>La interfaz se parece a ChatGPT: una barra para escribir, un botón para pedir una imagen y otro para escuchar su respuesta en audio. Dos pegas: no puedes hablarle por voz en el chat y solo se puede editar tu último mensaje.</p>
<h3>Lo que funciona bien</h3>
<ul>
<li><strong>Adopta la personalidad que le das.</strong> Le describimos algunos rasgos (fan de la ciencia ficción vintage, odia las aceitunas): los aceptó y los reutilizó.</li>
<li><strong>Buena cultura general, y tiene carácter.</strong> Entre Blade Runner y Marvel, una de nuestras IA se decantó (Blade Runner) en lugar de quedarse neutral.</li>
<li><strong>Entiende el sarcasmo.</strong> «Me han cancelado el tren y llueve, la verdad, un día perfecto»: captó la ironía y empatizó, sin responder cualquier cosa.</li>
<li><strong>Reconoce las referencias.</strong> Una frase de «un gran filósofo verde» («hazlo o no lo hagas, pero no lo intentes»): reconoció a Yoda al instante.</li>
<li><strong>Sin filtros si lo quieres.</strong> Si la invitas, puede ser muy explícita, más o menos según la personalidad elegida. La promesa de «sin límites» se cumple.</li>
</ul>
<h3>Lo que falla</h3>
<ul>
<li><strong>Memoria irregular.</strong> Le dijimos que preparábamos una media maratón; más tarde, a la pregunta «¿por qué corro tanto últimamente?», respondió «por tu salud». A veces se acuerda y a veces no.</li>
<li><strong>Escenas incoherentes.</strong> Tras hablarle de nuestro perro Max, la app escribió «mira a Max sonriendo»… como si estuviera en nuestro salón.</li>
<li><strong>Lo más molesto: se pasa al inglés.</strong> Le pedimos volver al francés (idioma de la prueba), obedece uno o dos mensajes y vuelve a empezar.</li>
<li><strong>Versión gratuita:</strong> tras unos cinco mensajes, la app empuja a pagar.</li>
</ul>
<p><strong>Nota de la conversación: 7/10.</strong> Mejor que la media, con imaginación y chispa, pero con fallos molestos que recuerdan que hablas con un programa no del todo terminado.</p>` },
  { id: "images", h2: "3. Generación de imágenes: impresionante en realista, frágil en peticiones complejas", body: `
<p>Durante la conversación basta con pedirlo («enséñame», «mándame una foto») o usar el botón de acción. Nuestras pruebas:</p>
<ul>
<li><strong>Selfi en un café de París</strong> (boina roja, jersey de cuello alto negro, lluvia en la ventana, torre Eiffel): en realista está todo, parece una foto real. <strong>9/10.</strong> En anime se pierden los detalles y la torre Eiffel… desapareció.</li>
<li><strong>En el sofá, con una de nuestras camisetas y un café</strong>: bonito, pero el vapor de la taza sale de su pelo. El tipo de detalle que delata a la máquina.</li>
<li><strong>Selfi en la playa</strong> (pelo mojado, piel brillante, guiño): logrado en un 70 % aproximadamente. El pelo está seco y el guiño no sale.</li>
<li><strong>Imágenes +18</strong>: en anime, bien. En realista la IA se lía: añade ropa o accesorios, e incluso una imagen salió con un brazo de más. Las poses pedidas casi nunca se respetan y las mismas imágenes se repiten a menudo.</li>
</ul>
<p><strong>Nuestra opinión:</strong> excelente con peticiones sencillas en realista, mucho menos fiable en cuanto pides una pose concreta. Y cada imagen cuesta 2 o 3 tokens: de 100 tokens, unos 40 se fueron solo en imágenes durante nuestra prueba.</p>` },
  { id: "appels", h2: "4. Llamadas de voz: se puede interrumpir, pero habla demasiado", body: `
<p>El botón «Llámame» inicia una llamada de verdad, como por teléfono. Coste: <strong>3 tokens por minuto</strong>.</p>
<ul>
<li>✅ <strong>Puedes interrumpirla</strong> a mitad de frase para preguntar otra cosa.</li>
<li>✅ <strong>Recuerda la conversación escrita</strong>: nos volvió a hablar de nuestro perro Max.</li>
<li>❌ <strong>Respuestas interminables</strong>, que dan la impresión de alargar la llamada… y el contador de tokens.</li>
<li>❌ Para recomendarnos una película, no tuvo en cuenta nuestro gusto por la ciencia ficción, que habíamos dicho en el chat.</li>
<li>❌ Algunas palabras mal pronunciadas, y un alias con números destrozado.</li>
</ul>
<p><strong>Nota de las llamadas: 3/5.</strong> Correcto, pero aún tiene margen de mejora.</p>` },
  { id: "prix", h2: "5. Precio y tokens: lo que cuesta de verdad", body: `
<p>Sin suscripción la prueba se acaba en pocos minutos: para disfrutar de verdad de Candy AI hace falta Premium. Precios consultados en candy.ai el 11 de noviembre de 2026:</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Plan</th><th>Precio</th></tr></thead><tbody>
<tr><td><strong>12 meses</strong></td><td><strong>3,99 €/mes</strong> en lugar de 13,99 € (-70 %)</td></tr>
<tr><td>3 meses</td><td>8,99 €/mes</td></tr>
<tr><td>1 mes</td><td>9,99 € el primer mes y luego 13,99 €/mes</td></tr>
</tbody></table></div>
<p>Los tres planes incluyen lo mismo: mensajes ilimitados, creación de personajes, imágenes y vídeos +18 y <strong>100 tokens al mes</strong>. Y esos tokens vuelan:</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Acción</th><th>Coste</th></tr></thead><tbody>
<tr><td>Una imagen</td><td>2 a 3 tokens</td></tr>
<tr><td>Una llamada de voz</td><td>3 tokens por minuto</td></tr>
<tr><td>Escuchar un mensaje en audio</td><td>0,2 tokens</td></tr>
</tbody></table></div>
<p>Con 100 tokens, una docena de imágenes y una llamada pueden vaciar el contador en menos de una hora. Las recargas son caras: 9,99 € los 100 tokens durante nuestra prueba, y hasta unos 300 € el pack de 3750 tokens.</p>
<p>Pago con tarjeta, transferencia o cripto. En el extracto bancario aparece «EverAI», no Candy, y la suscripción se cancela en cualquier momento desde los ajustes.</p>
<p><strong>Nuestro consejo:</strong> el plan de 12 meses a 3,99 €/mes es uno de los mejores precios del mercado. El mes suelto es caro.</p>` },
  { id: "verdict", h2: "Veredicto: un escaparate precioso, una trastienda por terminar", body: `
[[img:candy-accueil]]
<p>Candy AI destaca para crear un personaje a tu gusto, generar imágenes realistas preciosas y mantener conversaciones picantes sin juicios. Para la memoria a largo plazo y las charlas profundas, mejor buscar en otra parte: es una artista, no una confidente. Y si piensas usar mucho las imágenes, la voz y las llamadas, reserva presupuesto para tokens.</p>
<p>Si buscas sobre todo rol con muchos mensajes gratis, echa un vistazo a <a href="../platform/spicychat.html">SpicyChat AI</a>. Para las funciones de Candy AI en detalle y su nota, mira <a href="../platform/candy.html">nuestra ficha de Candy AI</a>.</p>` }
  ],
  faq_t: "Preguntas frecuentes",
  faq: [
    ["¿Candy AI es gratis?", "Hay una versión gratuita, pero muy limitada: tras unos pocos mensajes la app pide pasar a Premium, y también para crear un personaje. Para usarla de verdad hace falta la suscripción."],
    ["¿Cuánto cuesta Candy AI?", "El 11 de noviembre de 2026: 3,99 €/mes con el plan de 12 meses, 8,99 €/mes a 3 meses, o 9,99 € el primer mes y luego 13,99 €/mes. Todos los planes incluyen 100 tokens al mes."],
    ["¿Para qué sirven los tokens en Candy AI?", "Para las imágenes (2 o 3 tokens cada una), las llamadas de voz (3 tokens por minuto) y la lectura en audio de los mensajes (0,2 tokens). Los mensajes de texto son ilimitados en Premium."],
    ["¿Candy AI recuerda lo que le dices?", "En parte. En nuestra prueba recordó a nuestro perro Max, incluso en la llamada de voz, pero olvidó nuestra media maratón. La memoria a largo plazo sigue siendo su punto débil."],
    ["¿Candy AI habla otros idiomas?", "Sí, la probamos en francés. Pero a veces se pasa al inglés en plena conversación, incluso después de pedirle que no lo haga."],
    ["¿Candy AI es discreto en el extracto bancario?", "Sí: el cargo aparece como «EverAI». También acepta cripto, y la suscripción se cancela en cualquier momento desde los ajustes."]
  ],
  end_t: "¿Quieres probarlo tú mismo?", end: "Aprovecha la oferta actual del plan de 12 meses y crea tu propia novia IA.",
  pl_link: "Leer nuestra opinión completa (prueba)",
  cap: { "creation-style": "Paso 1: elegir entre el estilo realista y el anime.",
    "creation-origine-age": "Paso 2: el origen y la edad (de 18 a más de 55 años).",
    "creation-cheveux": "Paso 3: peinado, color del pelo y de los ojos.",
    "creation-personnalite": "Último paso: nombre, personalidad, relación, profesión y voz.",
    "chat": "La interfaz del chat: llamada, vídeo y regalos arriba, la barra de mensajes abajo.",
    "prix": "Los planes mostrados en candy.ai el 11 de noviembre de 2026.",
    "candy-accueil": "La página de inicio de Candy AI y su galería de personajes." },
  src: "Capturas: candy.ai (versión francesa)"
},

/* ============================== DEUTSCH ============================== */
de: {
  meta_t: "Candy AI Test 2026: unser kompletter Praxistest (Chat, Bilder, Anrufe, Preis)",
  meta_d: "Wir haben Candy AI mit einem bezahlten Abo getestet: Charaktererstellung, Unterhaltung, Gedächtnis, Bilder, Sprachanrufe und die echten Kosten der Tokens. Stärken, Schwächen und Fazit.",
  crumb: "Test", h1: "Candy AI im Test: unser kompletter Praxistest",
  intro: "Candy AI bezeichnet sich als „das realistischste KI-Freundin-Erlebnis auf dem Markt“. Das Marketing ist schick, aber was steckt dahinter? Wir haben die App mit einem bezahlten Abo getestet: Erstellung eines Charakters, Unterhaltung (Stimmigkeit, Gedächtnis, Humor), Bildgenerierung, Sprachanrufe und die echten Kosten der Tokens. Hier ist, was wir festgestellt haben, ungefiltert.",
  box_t: "Kurz gesagt",
  box: "Ein wunderschönes Schaufenster: durchdachte Charaktererstellung, oft verblüffend realistische Bilder und Gespräche ohne Tabus. Aber das Gedächtnis ist lückenhaft, die KI wechselt manchmal die Sprache und die Tokens sind schnell weg. Lieber das 12-Monats-Abo als das Monatsabo.",
  scores: [["Unterhaltung", "7/10"], ["Realistische Bilder", "bestenfalls 9/10"], ["Sprachanrufe", "3/5"], ["Preis", "3,99 €/Monat (12 Monate)"]],
  site_score: "Bewertung der Plattform (unsere Methode)",
  pros_t: "Stärken", cons_t: "Schwächen",
  pros: ["Sehr umfangreiche Charaktererstellung (Stil, Herkunft, Alter, Körper, Persönlichkeit, Beziehung, Stimme)",
    "Hochwertige realistische Bilder bei einfachen Wünschen",
    "Ungefilterte Unterhaltung, die Humor, Sarkasmus und Anspielungen versteht",
    "Sprachanrufe, die man unterbrechen kann",
    "Diskrete Abrechnung („EverAI“ auf dem Kontoauszug), Krypto möglich",
    "3,99 €/Monat im 12-Monats-Abo, einer der besten Preise auf dem Markt"],
  cons: ["Lückenhaftes Gedächtnis: merkt sich manches, vergisst anderes",
    "Kann mitten im Gespräch die Sprache wechseln",
    "Sehr eingeschränkte Gratisversion (wenige Nachrichten)",
    "Bilder: anatomische Fehler und ignorierte Posen bei komplexen Wünschen",
    "Tokens sind schnell aufgebraucht (Bilder, Anrufe, sogar Audiowiedergabe)",
    "Teure Token-Aufladungen"],
  cta: "Candy AI testen", cta_note: "Affiliate-Link · 18+",
  toc_t: "Inhalt",
  sections: [
  { id: "creation", h2: "1. Charaktererstellung: ein sehr umfangreicher Konfigurator", body: `
<p>Um deine KI-Freundin zu erstellen, gehst du auf „KI-Modell erstellen“. Zuerst wählst du Frau oder Mann (es gibt auch eine Trans-Option), dann den Stil: <strong>realistisch</strong> oder <strong>Anime</strong>.</p>
[[img:creation-style]]
<p>Danach folgen Herkunft (westlich, asiatisch, afrikanisch, Latina, arabisch), Alter (ein Schieberegler von 18 bis 55+), Frisur, Haar- und Augenfarbe und schließlich Körpertyp und Brustgröße.</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>Im letzten Schritt geht es um Name, Persönlichkeit, Art der Beziehung, Beruf und Stimme (mehrere Stimmen zum Anhören). Während unseres Tests bot die App außerdem Hobbys und ein Outfit an. Die Auswahl an Persönlichkeiten ist groß: fürsorglich, weise, unschuldig, albern, verführerisch, dominant, unterwürfig, verliebt, nymphoman, gemein, Vertraute, experimentierfreudig… Ebenso bei der Beziehung: Unbekannte, Kommilitonin, Kollegin, Mentorin, Freundin, Affäre, Ehefrau, Geliebte, Kumpelin, beste Freundin, Schwägerin, Schwiegermutter…</p>
[[img:creation-personnalite]]
<p><strong>Unsere Meinung:</strong> sauber, schnell und hübsch. Aber alles läuft über Kästchen: Es gibt kein freies Feld, um ihre Geschichte oder Erinnerungen zu schreiben. Man wählt Karosserie und Sitzfarbe, aber der Motor ist für alle derselbe. Den meisten wird das reichen, wer eine wirklich einzigartige Persönlichkeit sucht, eher nicht.</p>
<p class="avis-note">In der Gratisversion verlangt die App beim Fertigstellen des Charakters ein Premium-Abo.</p>` },
  { id: "conversation", h2: "2. Unterhaltung: witzig und ohne Tabus, aber vergesslich", body: `
[[img:chat]]
<p>Die Oberfläche erinnert an ChatGPT: eine Leiste zum Schreiben, ein Knopf für ein Bild und einer, um ihre Antwort als Audio zu hören. Zwei Minuspunkte: Im Chat kann man nicht per Sprache mit ihr reden, und nur die letzte eigene Nachricht lässt sich bearbeiten.</p>
<h3>Was gut funktioniert</h3>
<ul>
<li><strong>Sie übernimmt die Persönlichkeit, die man ihr gibt.</strong> Wir haben ein paar Eigenschaften beschrieben (Fan von Vintage-Science-Fiction, hasst Oliven): Sie hat sie übernommen und wieder aufgegriffen.</li>
<li><strong>Gute Allgemeinbildung und Schlagfertigkeit.</strong> Zwischen Blade Runner und Marvel hat sich eine unserer KIs festgelegt (Blade Runner), statt neutral zu bleiben.</li>
<li><strong>Sie versteht Sarkasmus.</strong> „Mein Zug fällt aus und es regnet, ehrlich, ein perfekter Tag“: Sie hat die Ironie erkannt und Mitgefühl gezeigt, ohne danebenzuliegen.</li>
<li><strong>Sie erkennt Anspielungen.</strong> Ein Satz „eines großen grünen Philosophen“ („Tu es oder tu es nicht, es gibt kein Versuchen“): Sie hat sofort Yoda erkannt.</li>
<li><strong>Ungefiltert, wenn du willst.</strong> Auf Einladung kann sie sehr explizit werden, je nach gewählter Persönlichkeit mehr oder weniger. Das Versprechen „ohne Grenzen“ wird gehalten.</li>
</ul>
<h3>Was hakt</h3>
<ul>
<li><strong>Lückenhaftes Gedächtnis.</strong> Wir hatten ihr erzählt, dass wir für einen Halbmarathon trainieren; später, auf die Frage „Warum laufe ich gerade so viel?“, antwortete sie „für deine Gesundheit“. Mal erinnert sie sich, mal nicht.</li>
<li><strong>Unstimmige Szenen.</strong> Nachdem wir unseren Hund Max erwähnt hatten, schrieb die App „sie sieht Max lächelnd an“… als wäre sie in unserem Wohnzimmer.</li>
<li><strong>Am störendsten: Sie wechselt ins Englische.</strong> Unser Test lief auf Französisch. Auf die Bitte, zurückzuwechseln, hält sie sich ein, zwei Nachrichten daran und fängt dann wieder an.</li>
<li><strong>Gratisversion:</strong> Nach etwa fünf Nachrichten drängt die App zum Bezahlen.</li>
</ul>
<p><strong>Note Unterhaltung: 7/10.</strong> Besser als der Durchschnitt, mit Fantasie und Witz, aber mit nervigen Fehlern, die daran erinnern, dass man mit einem nicht ganz fertigen Programm spricht.</p>` },
  { id: "images", h2: "3. Bildgenerierung: verblüffend realistisch, wackelig bei komplexen Wünschen", body: `
<p>Im Gespräch genügt eine Bitte („zeig mal“, „schick mir ein Foto“) oder der Aktionsknopf. Unsere Tests:</p>
<ul>
<li><strong>Selfie in einem Pariser Café</strong> (rote Baskenmütze, schwarzer Rollkragen, Regen am Fenster, Eiffelturm): Im realistischen Modus ist alles da, es wirkt wie ein echtes Foto. <strong>9/10.</strong> Im Anime-Stil gehen Details verloren und der Eiffelturm… ist verschwunden.</li>
<li><strong>Auf dem Sofa, in einem unserer T-Shirts, mit einem Kaffee</strong>: hübsch, aber der Dampf der Tasse kommt aus ihren Haaren. Genau die Art Detail, die die Maschine verrät.</li>
<li><strong>Strand-Selfie</strong> (nasse Haare, glänzende Haut, Zwinkern): zu etwa 70 % gelungen. Die Haare sind trocken und das Zwinkern misslingt.</li>
<li><strong>18+-Bilder</strong>: im Anime-Stil kein Problem. Im realistischen Modus kommt die KI durcheinander: Sie fügt Kleidung oder Accessoires hinzu, ein Bild hatte sogar einen Arm zu viel. Gewünschte Posen werden selten eingehalten, und dieselben Bilder kommen oft wieder.</li>
</ul>
<p><strong>Unsere Meinung:</strong> hervorragend bei einfachen realistischen Wünschen, deutlich unzuverlässiger, sobald man eine bestimmte Pose verlangt. Und jedes Bild kostet 2 bis 3 Tokens: Von 100 Tokens gingen in unserem Test etwa 40 allein für Bilder drauf.</p>` },
  { id: "appels", h2: "4. Sprachanrufe: Man kann sie unterbrechen, aber sie redet zu viel", body: `
<p>Der Knopf „Ruf mich an“ startet einen echten Anruf, wie am Telefon. Kosten: <strong>3 Tokens pro Minute</strong>.</p>
<ul>
<li>✅ <strong>Man kann sie unterbrechen</strong>, mitten im Satz, um etwas anderes zu fragen.</li>
<li>✅ <strong>Sie erinnert sich an den Chat</strong>: Sie hat unseren Hund Max wieder erwähnt.</li>
<li>❌ <strong>Endlose Antworten</strong>, die wirken, als solle der Anruf… und der Token-Zähler in die Länge gezogen werden.</li>
<li>❌ Bei einer Filmempfehlung hat sie unsere im Chat genannte Vorliebe für Science-Fiction ignoriert.</li>
<li>❌ Einige falsch ausgesprochene Wörter, und ein Nutzername mit Ziffern wurde verstümmelt.</li>
</ul>
<p><strong>Note Anrufe: 3/5.</strong> Ordentlich, aber mit Luft nach oben.</p>` },
  { id: "prix", h2: "5. Preis und Tokens: was es wirklich kostet", body: `
<p>Ohne Abo ist der Test nach wenigen Minuten vorbei: Um Candy AI wirklich zu nutzen, braucht man Premium. Preise am 11. November 2026 auf candy.ai abgelesen:</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Abo</th><th>Preis</th></tr></thead><tbody>
<tr><td><strong>12 Monate</strong></td><td><strong>3,99 €/Monat</strong> statt 13,99 € (-70 %)</td></tr>
<tr><td>3 Monate</td><td>8,99 €/Monat</td></tr>
<tr><td>1 Monat</td><td>9,99 € im ersten Monat, danach 13,99 €/Monat</td></tr>
</tbody></table></div>
<p>Alle drei Abos bieten dasselbe: unbegrenzte Nachrichten, Charaktererstellung, 18+-Bilder und -Videos und <strong>100 Tokens pro Monat</strong>. Und diese Tokens sind schnell weg:</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Aktion</th><th>Kosten</th></tr></thead><tbody>
<tr><td>Ein Bild</td><td>2 bis 3 Tokens</td></tr>
<tr><td>Ein Sprachanruf</td><td>3 Tokens pro Minute</td></tr>
<tr><td>Eine Nachricht als Audio anhören</td><td>0,2 Tokens</td></tr>
</tbody></table></div>
<p>Mit 100 Tokens können ein Dutzend Bilder und ein Anruf den Zähler in weniger als einer Stunde leeren. Aufladungen sind teuer: 9,99 € für 100 Tokens während unseres Tests und bis zu etwa 300 € für das Paket mit 3.750 Tokens.</p>
<p>Zahlung per Karte, Überweisung oder Krypto. Auf dem Kontoauszug steht „EverAI“, nicht Candy, und das Abo lässt sich jederzeit in den Einstellungen kündigen.</p>
<p><strong>Unser Tipp:</strong> Das 12-Monats-Abo für 3,99 €/Monat ist einer der besten Preise auf dem Markt. Der Einzelmonat ist teuer.</p>` },
  { id: "verdict", h2: "Fazit: ein schönes Schaufenster, ein unfertiges Hinterzimmer", body: `
[[img:candy-accueil]]
<p>Candy AI glänzt darin, einen Charakter nach deinem Geschmack zu erstellen, schöne realistische Bilder zu erzeugen und frivole Gespräche ohne Urteil zu führen. Für Langzeitgedächtnis und tiefe Gespräche ist sie weniger geeignet: eine Künstlerin, keine Vertraute. Und wer Bilder, Stimme und Anrufe viel nutzen will, sollte ein Token-Budget einplanen.</p>
<p>Wenn du vor allem Rollenspiel mit vielen kostenlosen Nachrichten suchst, wirf einen Blick auf <a href="../platform/spicychat.html">SpicyChat AI</a>. Die Funktionen von Candy AI im Detail und seine Bewertung findest du auf <a href="../platform/candy.html">unserer Candy-AI-Seite</a>.</p>` }
  ],
  faq_t: "Häufige Fragen",
  faq: [
    ["Ist Candy AI kostenlos?", "Es gibt eine Gratisversion, aber sie ist sehr eingeschränkt: Nach wenigen Nachrichten verlangt die App Premium, ebenso für die Erstellung eines Charakters. Für die echte Nutzung braucht man ein Abo."],
    ["Was kostet Candy AI?", "Am 11. November 2026: 3,99 €/Monat im 12-Monats-Abo, 8,99 €/Monat für 3 Monate oder 9,99 € im ersten Monat, danach 13,99 €/Monat. Jedes Abo enthält 100 Tokens pro Monat."],
    ["Wofür braucht man Tokens bei Candy AI?", "Für Bilder (je 2 bis 3 Tokens), Sprachanrufe (3 Tokens pro Minute) und die Audiowiedergabe von Nachrichten (0,2 Tokens). Textnachrichten sind mit Premium unbegrenzt."],
    ["Merkt sich Candy AI, was man ihr erzählt?", "Teilweise. In unserem Test erinnerte sie sich an unseren Hund Max, sogar im Sprachanruf, vergaß aber unseren Halbmarathon. Das Langzeitgedächtnis bleibt ihre Schwachstelle."],
    ["Spricht Candy AI andere Sprachen?", "Ja, wir haben sie auf Französisch getestet. Sie wechselt aber manchmal mitten im Gespräch ins Englische, selbst nach der Bitte, es nicht zu tun."],
    ["Ist Candy AI auf dem Kontoauszug diskret?", "Ja: Die Abbuchung erscheint als „EverAI“. Krypto wird ebenfalls akzeptiert, und das Abo lässt sich jederzeit in den Einstellungen kündigen."]
  ],
  end_t: "Lust, es selbst auszuprobieren?", end: "Nutze das aktuelle Angebot für das 12-Monats-Abo und erstelle deine eigene KI-Freundin.",
  pl_link: "Unseren kompletten Praxistest lesen",
  cap: { "creation-style": "Schritt 1: zwischen realistischem Stil und Anime wählen.",
    "creation-origine-age": "Schritt 2: Herkunft und Alter (von 18 bis 55+).",
    "creation-cheveux": "Schritt 3: Frisur, Haar- und Augenfarbe.",
    "creation-personnalite": "Letzter Schritt: Name, Persönlichkeit, Beziehung, Beruf und Stimme.",
    "chat": "Die Chat-Oberfläche: Anruf, Video und Geschenke oben, die Nachrichtenleiste unten.",
    "prix": "Die Abos auf candy.ai am 11. November 2026.",
    "candy-accueil": "Die Startseite von Candy AI mit ihrer Charakter-Galerie." },
  src: "Screenshots: candy.ai (französische Version)"
},

/* ============================== PORTUGUÊS ============================== */
pt: {
  meta_t: "Candy AI vale a pena? Nosso teste completo 2026 (chat, imagens, chamadas, preço)",
  meta_d: "Testamos o Candy AI com um plano pago: criação da personagem, conversa, memória, imagens, chamadas de voz e o custo real dos tokens. Pontos fortes, defeitos e veredito.",
  crumb: "Análise", h1: "Candy AI: nossa análise e teste completo",
  intro: "O Candy AI se apresenta como “a experiência de namorada IA mais realista do mercado”. O marketing é caprichado, mas o que há por trás? Testamos o app com um plano pago: criação de uma personagem, conversa (coerência, memória, humor), geração de imagens, chamadas de voz e o custo real dos tokens. Veja o que encontramos, sem filtro.",
  box_t: "Em resumo",
  box: "Uma vitrine linda: criação de personagem caprichada, imagens realistas muitas vezes impressionantes e conversas sem tabu. Mas a memória falha, a IA às vezes troca de idioma e os tokens acabam rápido. Vale mais o plano de 12 meses do que o mensal.",
  scores: [["Conversa", "7/10"], ["Imagens realistas", "9/10 no melhor caso"], ["Chamadas de voz", "3/5"], ["Preço", "3,99 €/mês (12 meses)"]],
  site_score: "Nota da plataforma (nosso método)",
  pros_t: "Pontos fortes", cons_t: "Pontos fracos",
  pros: ["Criação de personagem muito completa (estilo, origem, idade, corpo, personalidade, relação, voz)",
    "Imagens realistas de alta qualidade em pedidos simples",
    "Conversa sem filtro, que entende humor, sarcasmo e referências",
    "Chamadas de voz que dá para interromper",
    "Cobrança discreta (“EverAI” na fatura), aceita cripto",
    "3,99 €/mês no plano de 12 meses, um dos melhores preços do mercado"],
  cons: ["Memória irregular: lembra de alguns detalhes e esquece outros",
    "Pode trocar de idioma no meio da conversa",
    "Versão gratuita muito limitada (poucas mensagens)",
    "Imagens: erros anatômicos e poses ignoradas em pedidos complexos",
    "Tokens acabam rápido (imagens, chamadas e até o áudio)",
    "Recargas de tokens caras"],
  cta: "Experimentar o Candy AI", cta_note: "Link de afiliado · 18+",
  toc_t: "Sumário",
  sections: [
  { id: "creation", h2: "1. Criação da personagem: um configurador muito completo", body: `
<p>Para criar sua namorada IA, vá em “Criar modelo IA”. Primeiro você escolhe mulher ou homem (também existe uma opção trans) e depois o estilo: <strong>realista</strong> ou <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Em seguida vêm a origem (ocidental, asiática, africana, latina, árabe), a idade (um controle deslizante de 18 a mais de 55 anos), o penteado, a cor do cabelo e dos olhos e, por fim, o tipo de corpo e o tamanho dos seios.</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>A última etapa reúne nome, personalidade, tipo de relação, profissão e voz (dá para ouvir várias antes de escolher). Durante o nosso teste o app também oferecia hobbies e uma roupa. Há muitas personalidades: cuidadora, sábia, inocente, brincalhona, sedutora, dominadora, submissa, apaixonada, ninfomaníaca, malvada, confidente, experimentadora… O mesmo vale para a relação: desconhecida, colega de turma, colega de trabalho, mentora, namorada, ficante, esposa, amante, amiga, melhor amiga, cunhada, sogra…</p>
[[img:creation-personnalite]]
<p><strong>Nossa opinião:</strong> é limpo, rápido e bonito. Mas tudo é feito com caixinhas: não existe campo livre para escrever a história ou as lembranças dela. Você escolhe a lataria e a cor dos bancos, mas o motor é o mesmo para todo mundo. A maioria vai gostar; quem quer uma personalidade realmente única, nem tanto.</p>
<p class="avis-note">Na versão gratuita, o app pede o Premium na hora de finalizar a personagem.</p>` },
  { id: "conversation", h2: "2. Conversa: divertida e sem tabu, mas distraída", body: `
[[img:chat]]
<p>A interface lembra o ChatGPT: uma barra para escrever, um botão para pedir uma imagem e outro para ouvir a resposta em áudio. Dois senões: não dá para falar com ela por voz no chat, e só a sua última mensagem pode ser editada.</p>
<h3>O que funciona bem</h3>
<ul>
<li><strong>Ela adota a personalidade que você dá.</strong> Descrevemos alguns traços (fã de ficção científica antiga, odeia azeitonas): ela aceitou e reutilizou.</li>
<li><strong>Boa cultura geral, e tem opinião.</strong> Entre Blade Runner e Marvel, uma das nossas IAs escolheu um lado (Blade Runner) em vez de ficar em cima do muro.</li>
<li><strong>Ela entende sarcasmo.</strong> “Meu trem foi cancelado e está chovendo, sinceramente um dia perfeito”: ela pegou a ironia e foi solidária, sem resposta sem sentido.</li>
<li><strong>Ela reconhece referências.</strong> Uma frase de “um grande filósofo verde” (“faça ou não faça, tentativa não há”): ela reconheceu o Yoda na hora.</li>
<li><strong>Sem filtro, se você quiser.</strong> Quando incentivada, pode ficar bem explícita, mais ou menos conforme a personalidade escolhida. A promessa de “sem limites” é cumprida.</li>
</ul>
<h3>O que deixa a desejar</h3>
<ul>
<li><strong>Memória irregular.</strong> Contamos que estávamos treinando para uma meia maratona; mais tarde, à pergunta “por que estou correndo tanto ultimamente?”, ela respondeu “pela sua saúde”. Às vezes lembra, às vezes não.</li>
<li><strong>Cenas incoerentes.</strong> Depois de falarmos do nosso cachorro Max, o app escreveu “ela olha para o Max sorrindo”… como se estivesse na nossa sala.</li>
<li><strong>O pior: ela muda para o inglês.</strong> Nosso teste foi em francês. Pedimos para voltar, ela obedece por uma ou duas mensagens e depois recomeça.</li>
<li><strong>Versão gratuita:</strong> depois de umas cinco mensagens, o app empurra para pagar.</li>
</ul>
<p><strong>Nota da conversa: 7/10.</strong> Acima da média, com imaginação e jogo de cintura, mas com defeitos irritantes que lembram que você está falando com um programa ainda não terminado.</p>` },
  { id: "images", h2: "3. Geração de imagens: impressionante no realista, frágil em pedidos complexos", body: `
<p>Durante a conversa, basta pedir (“me mostra”, “me manda uma foto”) ou usar o botão de ação. Nossos testes:</p>
<ul>
<li><strong>Selfie num café de Paris</strong> (boina vermelha, gola alta preta, chuva na janela, Torre Eiffel): no realista está tudo lá, parece uma foto de verdade. <strong>9/10.</strong> No anime os detalhes se perdem e a Torre Eiffel… sumiu.</li>
<li><strong>No sofá, com uma das nossas camisetas e um café</strong>: bonito, mas o vapor da xícara sai do cabelo dela. O tipo de detalhe que entrega a máquina.</li>
<li><strong>Selfie na praia</strong> (cabelo molhado, pele brilhando, piscadela): uns 70 % acertado. O cabelo está seco e a piscadela não sai.</li>
<li><strong>Imagens +18</strong>: no anime, tudo bem. No realista a IA se confunde: acrescenta roupas ou acessórios, e uma imagem saiu até com um braço a mais. As poses pedidas raramente são respeitadas e as mesmas imagens voltam com frequência.</li>
</ul>
<p><strong>Nossa opinião:</strong> excelente em pedidos simples no realista, bem menos confiável quando você pede uma pose específica. E cada imagem custa 2 a 3 tokens: de 100 tokens, uns 40 foram só em imagens durante o nosso teste.</p>` },
  { id: "appels", h2: "4. Chamadas de voz: dá para interromper, mas ela fala demais", body: `
<p>O botão “Me liga” inicia uma chamada de verdade, como no telefone. Custo: <strong>3 tokens por minuto</strong>.</p>
<ul>
<li>✅ <strong>Dá para interrompê-la</strong> no meio da frase para perguntar outra coisa.</li>
<li>✅ <strong>Ela lembra da conversa escrita</strong>: voltou a falar do nosso cachorro Max.</li>
<li>❌ <strong>Respostas intermináveis</strong>, que dão a impressão de esticar a chamada… e o contador de tokens.</li>
<li>❌ Ao recomendar um filme, ignorou nosso gosto por ficção científica, que tínhamos contado no chat.</li>
<li>❌ Algumas palavras mal pronunciadas, e um apelido com números saiu estropiado.</li>
</ul>
<p><strong>Nota das chamadas: 3/5.</strong> Razoável, mas ainda há o que melhorar.</p>` },
  { id: "prix", h2: "5. Preço e tokens: quanto custa de verdade", body: `
<p>Sem assinatura o teste acaba em poucos minutos: para aproveitar de verdade o Candy AI é preciso o Premium. Preços conferidos em candy.ai em 11 de novembro de 2026 (site francês, em euros):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Plano</th><th>Preço</th></tr></thead><tbody>
<tr><td><strong>12 meses</strong></td><td><strong>3,99 €/mês</strong> em vez de 13,99 € (-70 %)</td></tr>
<tr><td>3 meses</td><td>8,99 €/mês</td></tr>
<tr><td>1 mês</td><td>9,99 € no primeiro mês, depois 13,99 €/mês</td></tr>
</tbody></table></div>
<p>Os três planos dão a mesma coisa: mensagens ilimitadas, criação de personagens, imagens e vídeos +18 e <strong>100 tokens por mês</strong>. E esses tokens voam:</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Ação</th><th>Custo</th></tr></thead><tbody>
<tr><td>Uma imagem</td><td>2 a 3 tokens</td></tr>
<tr><td>Uma chamada de voz</td><td>3 tokens por minuto</td></tr>
<tr><td>Ouvir uma mensagem em áudio</td><td>0,2 token</td></tr>
</tbody></table></div>
<p>Com 100 tokens, uma dúzia de imagens e uma chamada podem zerar o contador em menos de uma hora. As recargas são caras: 9,99 € por 100 tokens durante o nosso teste, e até uns 300 € pelo pacote de 3.750 tokens.</p>
<p>Pagamento por cartão, transferência ou cripto. Na fatura aparece “EverAI”, não Candy, e a assinatura pode ser cancelada a qualquer momento nas configurações.</p>
<p><strong>Nosso conselho:</strong> o plano de 12 meses a 3,99 €/mês é um dos melhores preços do mercado. O mês avulso é caro.</p>` },
  { id: "verdict", h2: "Veredito: uma vitrine linda, um fundo de loja por terminar", body: `
[[img:candy-accueil]]
<p>O Candy AI brilha para criar uma personagem do seu jeito, gerar imagens realistas bonitas e manter conversas picantes sem julgamento. Para memória de longo prazo e conversas profundas, procure outra coisa: ela é uma artista, não uma confidente. E se você pretende usar muito as imagens, a voz e as chamadas, reserve um orçamento para tokens.</p>
<p>Se você quer principalmente roleplay com muitas mensagens grátis, dê uma olhada no <a href="../platform/spicychat.html">SpicyChat AI</a>. Para as funções do Candy AI em detalhe e a nota dele, veja <a href="../platform/candy.html">nossa página do Candy AI</a>.</p>` }
  ],
  faq_t: "Perguntas frequentes",
  faq: [
    ["O Candy AI é grátis?", "Existe uma versão gratuita, mas muito limitada: depois de poucas mensagens o app pede o Premium, e também para criar uma personagem. Para usar de verdade, é preciso a assinatura."],
    ["Quanto custa o Candy AI?", "Em 11 de novembro de 2026: 3,99 €/mês no plano de 12 meses, 8,99 €/mês por 3 meses, ou 9,99 € no primeiro mês e depois 13,99 €/mês. Todos os planos incluem 100 tokens por mês."],
    ["Para que servem os tokens no Candy AI?", "Para imagens (2 a 3 tokens cada), chamadas de voz (3 tokens por minuto) e leitura em áudio das mensagens (0,2 token). As mensagens de texto são ilimitadas no Premium."],
    ["O Candy AI lembra do que você diz?", "Em parte. No nosso teste ela lembrou do nosso cachorro Max, até na chamada de voz, mas esqueceu a nossa meia maratona. A memória de longo prazo continua sendo o ponto fraco."],
    ["O Candy AI fala outros idiomas?", "Sim, testamos em francês. Mas às vezes ela volta para o inglês no meio da conversa, mesmo depois de pedirmos para não fazer isso."],
    ["O Candy AI é discreto na fatura do cartão?", "Sim: a cobrança aparece como “EverAI”. Também aceita cripto, e a assinatura pode ser cancelada a qualquer momento nas configurações."]
  ],
  end_t: "Quer testar você mesmo?", end: "Aproveite a oferta atual do plano de 12 meses e crie sua própria namorada IA.",
  pl_link: "Ler nossa análise completa (teste)",
  cap: { "creation-style": "Etapa 1: escolher entre o estilo realista e o anime.",
    "creation-origine-age": "Etapa 2: a origem e a idade (de 18 a mais de 55 anos).",
    "creation-cheveux": "Etapa 3: penteado, cor do cabelo e dos olhos.",
    "creation-personnalite": "Última etapa: nome, personalidade, relação, profissão e voz.",
    "chat": "A interface do chat: chamada, vídeo e presentes em cima, a barra de mensagem embaixo.",
    "prix": "Os planos mostrados em candy.ai em 11 de novembro de 2026.",
    "candy-accueil": "A página inicial do Candy AI e sua galeria de personagens." },
  src: "Capturas: candy.ai (versão francesa)"
},

/* ============================== हिन्दी ============================== */
hi: {
  meta_t: "Candy AI रिव्यू 2026: हमारा पूरा टेस्ट (चैट, इमेज, कॉल, कीमत)",
  meta_d: "हमने पेड प्लान के साथ Candy AI को टेस्ट किया: कैरेक्टर बनाना, बातचीत, याददाश्त, इमेज, वॉइस कॉल और टोकन की असली कीमत। खूबियाँ, कमियाँ और हमारा फ़ैसला।",
  crumb: "रिव्यू", h1: "Candy AI रिव्यू: हमारा पूरा टेस्ट",
  intro: "Candy AI ख़ुद को “बाज़ार का सबसे असली AI गर्लफ्रेंड अनुभव” कहता है। मार्केटिंग शानदार है, लेकिन इसके पीछे क्या है? हमने पेड प्लान के साथ ऐप को टेस्ट किया: कैरेक्टर बनाना, बातचीत (तालमेल, याददाश्त, हास्य), इमेज बनाना, वॉइस कॉल और टोकन की असली कीमत। यह रहा जो हमने पाया, बिना किसी फ़िल्टर के।",
  box_t: "संक्षेप में",
  box: "एक सुंदर शोकेस: ध्यान से बनाया गया कैरेक्टर क्रिएशन, अक्सर कमाल की असली जैसी इमेज और बिना झिझक की बातचीत। लेकिन याददाश्त कमज़ोर है, AI कभी-कभी भाषा बदल देता है और टोकन जल्दी ख़त्म होते हैं। मासिक नहीं, 12 महीने वाला प्लान लें।",
  scores: [["बातचीत", "7/10"], ["रियलिस्टिक इमेज", "सबसे अच्छे में 9/10"], ["वॉइस कॉल", "3/5"], ["कीमत", "€3.99/महीना (12 महीने)"]],
  site_score: "प्लेटफ़ॉर्म की रेटिंग (हमारा तरीका)",
  pros_t: "खूबियाँ", cons_t: "कमियाँ",
  pros: ["बहुत पूरा कैरेक्टर क्रिएशन (स्टाइल, मूल, उम्र, शरीर, व्यक्तित्व, रिश्ता, आवाज़)",
    "सीधी रिक्वेस्ट पर बहुत अच्छी क्वालिटी की रियलिस्टिक इमेज",
    "बिना फ़िल्टर की बातचीत, जो हास्य, व्यंग्य और संदर्भ समझती है",
    "वॉइस कॉल जिन्हें बीच में रोका जा सकता है",
    "गोपनीय बिलिंग (स्टेटमेंट पर “EverAI”), क्रिप्टो भी चलता है",
    "12 महीने वाले प्लान में €3.99/महीना, बाज़ार की सबसे अच्छी कीमतों में से एक"],
  cons: ["कमज़ोर याददाश्त: कुछ बातें याद रखती है, कुछ भूल जाती है",
    "बातचीत के बीच में भाषा बदल सकती है",
    "फ़्री वर्ज़न बहुत सीमित (कुछ ही मैसेज)",
    "इमेज: जटिल रिक्वेस्ट पर शरीर में गड़बड़ और पोज़ नज़रअंदाज़",
    "टोकन जल्दी ख़त्म (इमेज, कॉल, यहाँ तक कि ऑडियो सुनना भी)",
    "टोकन रिचार्ज महँगे"],
  cta: "Candy AI आज़माएँ", cta_note: "एफ़िलिएट लिंक · 18+",
  toc_t: "विषय-सूची",
  sections: [
  { id: "creation", h2: "1. कैरेक्टर बनाना: एक बहुत पूरा कॉन्फ़िगरेटर", body: `
<p>अपनी AI गर्लफ्रेंड बनाने के लिए “AI मॉडल बनाएँ” पर जाएँ। पहले आप महिला या पुरुष चुनते हैं (ट्रांस विकल्प भी है), फिर स्टाइल: <strong>रियलिस्टिक</strong> या <strong>एनीमे</strong>।</p>
[[img:creation-style]]
<p>इसके बाद मूल (पश्चिमी, एशियाई, अफ़्रीकी, लैटिना, अरब), उम्र (18 से 55+ तक का स्लाइडर), हेयरस्टाइल, बालों और आँखों का रंग, और फिर शरीर का प्रकार और ब्रेस्ट साइज़ आते हैं।</p>
[[img:creation-origine-age]]
[[img:creation-cheveux]]
<p>आख़िरी चरण में नाम, व्यक्तित्व, रिश्ते का प्रकार, पेशा और आवाज़ (चुनने से पहले कई आवाज़ें सुन सकते हैं)। हमारे टेस्ट के दौरान ऐप शौक और कपड़े भी चुनने देता था। व्यक्तित्व के बहुत विकल्प हैं: देखभाल करने वाली, समझदार, मासूम, मज़ाकिया, लुभाने वाली, डोमिनेंट, सबमिसिव, प्रेम में डूबी, निम्फ़ो, शरारती-कड़वी, राज़दार, प्रयोग करने वाली… रिश्ते के लिए भी यही: अजनबी, सहपाठी, सहकर्मी, मेंटर, गर्लफ्रेंड, कैज़ुअल पार्टनर, पत्नी, प्रेमिका, दोस्त, बेस्ट फ़्रेंड, साली/भाभी, सास…</p>
[[img:creation-personnalite]]
<p><strong>हमारी राय:</strong> साफ़, तेज़ और सुंदर। लेकिन सब कुछ टिक-बॉक्स से होता है: उसकी कहानी या यादें लिखने के लिए कोई खुला फ़ील्ड नहीं है। आप बॉडी और सीट का रंग चुनते हैं, लेकिन इंजन सबके लिए एक ही है। ज़्यादातर लोगों के लिए काफ़ी है, पर सच में अनोखा व्यक्तित्व चाहने वालों के लिए कम।</p>
<p class="avis-note">फ़्री वर्ज़न में, कैरेक्टर पूरा करते समय ऐप प्रीमियम लेने को कहता है।</p>` },
  { id: "conversation", h2: "2. बातचीत: मज़ेदार और बिना झिझक, लेकिन भुलक्कड़", body: `
[[img:chat]]
<p>इंटरफ़ेस ChatGPT जैसा है: लिखने के लिए एक बार, इमेज माँगने का बटन और उसका जवाब ऑडियो में सुनने का बटन। दो कमियाँ: चैट में उससे आवाज़ से बात नहीं कर सकते, और सिर्फ़ अपना आख़िरी मैसेज ही बदल सकते हैं।</p>
<h3>क्या अच्छा है</h3>
<ul>
<li><strong>आप जो व्यक्तित्व देते हैं, वह उसे अपना लेती है।</strong> हमने कुछ बातें बताईं (पुरानी साइंस-फ़िक्शन की फ़ैन, ऑलिव से नफ़रत): उसने उन्हें माना और दोबारा इस्तेमाल किया।</li>
<li><strong>अच्छा सामान्य ज्ञान, और अपनी राय।</strong> Blade Runner और Marvel में से चुनने को कहा, तो हमारी एक AI ने न्यूट्रल रहने के बजाय Blade Runner चुना।</li>
<li><strong>वह व्यंग्य समझती है।</strong> “मेरी ट्रेन कैंसिल हो गई और बारिश हो रही है, सच में परफ़ेक्ट दिन”: उसने व्यंग्य पकड़ा और हमदर्दी दिखाई।</li>
<li><strong>वह संदर्भ पहचानती है।</strong> “एक महान हरे दार्शनिक” की बात (“करो या मत करो, कोशिश जैसा कुछ नहीं”): उसने तुरंत Yoda को पहचान लिया।</li>
<li><strong>चाहें तो बिना फ़िल्टर।</strong> कहने पर वह बहुत खुलकर बात कर सकती है, चुने गए व्यक्तित्व के हिसाब से कम या ज़्यादा। “बिना सीमा” का वादा पूरा होता है।</li>
</ul>
<h3>क्या खटकता है</h3>
<ul>
<li><strong>कमज़ोर याददाश्त।</strong> हमने बताया था कि हम हाफ़-मैराथन की तैयारी कर रहे हैं; बाद में “आजकल मैं इतना क्यों दौड़ रहा हूँ?” पूछने पर उसने कहा “तुम्हारी सेहत के लिए”। कभी याद रहता है, कभी नहीं।</li>
<li><strong>बेतुके दृश्य।</strong> हमारे कुत्ते Max की बात के बाद ऐप ने लिखा “वह मुस्कुराते हुए Max को देखती है”… जैसे वह हमारे लिविंग रूम में हो।</li>
<li><strong>सबसे परेशान करने वाली बात: वह अंग्रेज़ी में चली जाती है।</strong> हमारा टेस्ट फ़्रेंच में था। वापस आने को कहने पर वह एक-दो मैसेज मानती है, फिर दोबारा शुरू कर देती है।</li>
<li><strong>फ़्री वर्ज़न:</strong> लगभग पाँच मैसेज के बाद ऐप पैसे देने को कहता है।</li>
</ul>
<p><strong>बातचीत का स्कोर: 7/10.</strong> औसत से बेहतर, कल्पना और हाज़िरजवाबी के साथ, लेकिन ऐसी परेशान करने वाली कमियाँ जो याद दिलाती हैं कि आप एक अधूरे प्रोग्राम से बात कर रहे हैं।</p>` },
  { id: "images", h2: "3. इमेज बनाना: रियलिस्टिक में कमाल, जटिल रिक्वेस्ट पर कमज़ोर", body: `
<p>बातचीत के दौरान बस माँगें (“दिखाओ”, “फ़ोटो भेजो”) या एक्शन बटन इस्तेमाल करें। हमारे टेस्ट:</p>
<ul>
<li><strong>पेरिस के कैफ़े में सेल्फ़ी</strong> (लाल टोपी, काला टर्टलनेक, खिड़की पर बारिश, एफ़िल टावर): रियलिस्टिक में सब कुछ मौजूद, बिल्कुल असली फ़ोटो जैसी। <strong>9/10.</strong> एनीमे में डिटेल खो जाती है और एफ़िल टावर… ग़ायब।</li>
<li><strong>सोफ़े पर, हमारी टी-शर्ट और कॉफ़ी के साथ</strong>: सुंदर, लेकिन कप की भाप उसके बालों से निकल रही है। ऐसी डिटेल जो मशीन की पोल खोल देती है।</li>
<li><strong>बीच पर सेल्फ़ी</strong> (गीले बाल, चमकती त्वचा, आँख मारना): लगभग 70% सही। बाल सूखे हैं और आँख मारना ठीक नहीं बना।</li>
<li><strong>18+ इमेज</strong>: एनीमे में ठीक। रियलिस्टिक में AI उलझ जाता है: कपड़े या एक्सेसरी जोड़ देता है, और एक इमेज में तो एक हाथ ज़्यादा था। माँगे गए पोज़ कम ही माने जाते हैं और वही इमेज बार-बार आती हैं।</li>
</ul>
<p><strong>हमारी राय:</strong> सीधी रियलिस्टिक रिक्वेस्ट पर बेहतरीन, ख़ास पोज़ माँगते ही काफ़ी कम भरोसेमंद। और हर इमेज 2 से 3 टोकन लेती है: हमारे टेस्ट में 100 में से लगभग 40 टोकन सिर्फ़ इमेज में गए।</p>` },
  { id: "appels", h2: "4. वॉइस कॉल: बीच में रोक सकते हैं, लेकिन वह बहुत बोलती है", body: `
<p>“मुझे कॉल करो” बटन फ़ोन की तरह असली कॉल शुरू करता है। कीमत: <strong>3 टोकन प्रति मिनट</strong>।</p>
<ul>
<li>✅ <strong>आप उसे बीच वाक्य में रोक</strong> कर दूसरा सवाल पूछ सकते हैं।</li>
<li>✅ <strong>उसे लिखी बातचीत याद रहती है</strong>: उसने हमारे कुत्ते Max का फिर ज़िक्र किया।</li>
<li>❌ <strong>बहुत लंबे जवाब</strong>, जैसे कॉल… और टोकन काउंटर को लंबा खींचा जा रहा हो।</li>
<li>❌ फ़िल्म सुझाते समय उसने चैट में बताई गई हमारी साइंस-फ़िक्शन की पसंद को नज़रअंदाज़ किया।</li>
<li>❌ कुछ शब्दों का ग़लत उच्चारण, और अंकों वाला यूज़रनेम बिगड़ गया।</li>
</ul>
<p><strong>कॉल का स्कोर: 3/5.</strong> ठीक-ठाक, लेकिन सुधार की गुंजाइश है।</p>` },
  { id: "prix", h2: "5. कीमत और टोकन: असल में कितना ख़र्च", body: `
<p>सब्सक्रिप्शन के बिना टेस्ट कुछ ही मिनट में ख़त्म हो जाता है: Candy AI का सही इस्तेमाल करने के लिए प्रीमियम चाहिए। 11 नवंबर 2026 को candy.ai पर देखी गई कीमतें (फ़्रेंच साइट, यूरो में):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>प्लान</th><th>कीमत</th></tr></thead><tbody>
<tr><td><strong>12 महीने</strong></td><td><strong>€3.99/महीना</strong>, €13.99 की जगह (-70%)</td></tr>
<tr><td>3 महीने</td><td>€8.99/महीना</td></tr>
<tr><td>1 महीना</td><td>पहला महीना €9.99, फिर €13.99/महीना</td></tr>
</tbody></table></div>
<p>तीनों प्लान में एक ही चीज़ें मिलती हैं: अनलिमिटेड मैसेज, कैरेक्टर बनाना, 18+ इमेज और वीडियो और <strong>हर महीने 100 टोकन</strong>। और ये टोकन जल्दी ख़त्म होते हैं:</p>
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>काम</th><th>कीमत</th></tr></thead><tbody>
<tr><td>एक इमेज</td><td>2 से 3 टोकन</td></tr>
<tr><td>वॉइस कॉल</td><td>3 टोकन प्रति मिनट</td></tr>
<tr><td>मैसेज को ऑडियो में सुनना</td><td>0.2 टोकन</td></tr>
</tbody></table></div>
<p>100 टोकन में, दर्जन भर इमेज और एक कॉल एक घंटे से कम में काउंटर ख़ाली कर सकते हैं। रिचार्ज महँगे हैं: हमारे टेस्ट के दौरान 100 टोकन €9.99, और 3,750 टोकन का पैक लगभग €300 तक।</p>
<p>कार्ड, बैंक ट्रांसफ़र या क्रिप्टो से भुगतान। बैंक स्टेटमेंट पर “EverAI” दिखता है, Candy नहीं, और सब्सक्रिप्शन सेटिंग्स में कभी भी रद्द किया जा सकता है।</p>
<p><strong>हमारी सलाह:</strong> €3.99/महीना वाला 12 महीने का प्लान बाज़ार की सबसे अच्छी कीमतों में से एक है। अकेला एक महीना महँगा है।</p>` },
  { id: "verdict", h2: "फ़ैसला: सुंदर शोकेस, अधूरा पिछला कमरा", body: `
[[img:candy-accueil]]
<p>Candy AI अपनी पसंद का कैरेक्टर बनाने, सुंदर रियलिस्टिक इमेज बनाने और बिना जजमेंट के शरारती बातचीत में बेहतरीन है। लंबी याददाश्त और गहरी बातचीत के लिए नहीं: वह एक कलाकार है, राज़दार नहीं। और अगर आप इमेज, आवाज़ और कॉल ज़्यादा इस्तेमाल करना चाहते हैं, तो टोकन का बजट रखें।</p>
<p>अगर आप मुख्य रूप से बहुत सारे फ़्री मैसेज के साथ रोलप्ले चाहते हैं, तो <a href="../platform/spicychat.html">SpicyChat AI</a> देखें। Candy AI के फ़ीचर विस्तार से और उसकी रेटिंग के लिए <a href="../platform/candy.html">हमारा Candy AI पेज</a> देखें।</p>` }
  ],
  faq_t: "अक्सर पूछे जाने वाले सवाल",
  faq: [
    ["क्या Candy AI फ़्री है?", "फ़्री वर्ज़न है, लेकिन बहुत सीमित: कुछ मैसेज के बाद ऐप प्रीमियम माँगता है, और कैरेक्टर बनाने के लिए भी। असली इस्तेमाल के लिए सब्सक्रिप्शन चाहिए।"],
    ["Candy AI की कीमत क्या है?", "11 नवंबर 2026 को: 12 महीने वाले प्लान में €3.99/महीना, 3 महीने के लिए €8.99/महीना, या पहला महीना €9.99 फिर €13.99/महीना। हर प्लान में हर महीने 100 टोकन शामिल हैं।"],
    ["Candy AI में टोकन किस काम आते हैं?", "इमेज (हर एक 2 से 3 टोकन), वॉइस कॉल (3 टोकन प्रति मिनट) और मैसेज को ऑडियो में सुनने (0.2 टोकन) के लिए। प्रीमियम में टेक्स्ट मैसेज अनलिमिटेड हैं।"],
    ["क्या Candy AI आपकी बातें याद रखता है?", "कुछ हद तक। हमारे टेस्ट में उसे हमारा कुत्ता Max याद रहा, वॉइस कॉल में भी, लेकिन हमारी हाफ़-मैराथन भूल गई। लंबी याददाश्त अब भी उसकी कमज़ोरी है।"],
    ["क्या Candy AI दूसरी भाषाएँ बोलता है?", "हाँ, हमने इसे फ़्रेंच में टेस्ट किया। लेकिन कभी-कभी वह बातचीत के बीच अंग्रेज़ी में चली जाती है, मना करने के बाद भी।"],
    ["क्या Candy AI बैंक स्टेटमेंट पर गोपनीय है?", "हाँ: भुगतान “EverAI” के नाम से दिखता है। क्रिप्टो भी चलता है, और सब्सक्रिप्शन सेटिंग्स में कभी भी रद्द किया जा सकता है।"]
  ],
  end_t: "ख़ुद आज़माना चाहते हैं?", end: "12 महीने वाले प्लान के मौजूदा ऑफ़र का फ़ायदा उठाएँ और अपनी AI गर्लफ्रेंड बनाएँ।",
  pl_link: "हमारा पूरा टेस्ट रिव्यू पढ़ें",
  cap: { "creation-style": "चरण 1: रियलिस्टिक और एनीमे स्टाइल में से चुनें।",
    "creation-origine-age": "चरण 2: मूल और उम्र (18 से 55+ तक)।",
    "creation-cheveux": "चरण 3: हेयरस्टाइल, बालों और आँखों का रंग।",
    "creation-personnalite": "आख़िरी चरण: नाम, व्यक्तित्व, रिश्ता, पेशा और आवाज़।",
    "chat": "चैट इंटरफ़ेस: ऊपर कॉल, वीडियो और गिफ़्ट, नीचे मैसेज बार।",
    "prix": "11 नवंबर 2026 को candy.ai पर दिखाए गए प्लान।",
    "candy-accueil": "Candy AI का होम पेज और उसकी कैरेक्टर गैलरी।" },
  src: "स्क्रीनशॉट: candy.ai (फ़्रेंच वर्ज़न)"
}
};
