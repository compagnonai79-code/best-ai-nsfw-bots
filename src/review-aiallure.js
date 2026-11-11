/* AIAllure review page (review/aiallure.html), 6 languages.
   Based on the hands-on test published by Roméo on virtualaipartner.com (26 Aug 2026), plus our own checks on aiallure.com
   (builder, Live Rooms, official price guide in the help center) on 2026-11-11. We do not claim our own test. */
const SRC = '<a href="https://www.virtualaipartner.com/ai-allure-review/" target="_blank" rel="noopener">virtualaipartner.com</a>';
module.exports = {
date: "2026-11-11", file: "review/aiallure.html", dir: "avis-aiallure", cover: "accueil", site: "https://www.aiallure.com",
img: { "accueil": [640, 560], "creation-style": [720, 790], "creation-apparence": [720, 660], "live-rooms": [720, 906], "prix": [720, 444] },

fr: {
  meta_t: "Avis AIAllure 2026 : Live Rooms, création, images, vidéos et prix",
  meta_d: "Notre avis sur AIAllure : appels en Live Room, créateur de personnage très poussé, studio images et vidéos, vérification d'âge et tous les prix (essai 24 h, Starter, Pro, Power).",
  crumb: "Avis", h1: "Avis AIAllure : Live Rooms, images, vidéos et prix",
  intro: "AIAllure ne se contente pas d'un chat : la plateforme mise sur les appels en « Live Room », un créateur de personnage très détaillé et un studio d'images et de vidéos. Voici ce qu'il faut savoir avant de s'inscrire, avec tous les prix.",
  based: `Cet avis s'appuie sur le test complet publié par Roméo sur ${SRC} (août 2026), complété par nos propres vérifications sur aiallure.com le 11 novembre 2026 (création de personnage, Live Rooms et grille de prix officielle).`,
  box_t: "En bref",
  box: "L'une des plateformes les plus complètes pour les images, les vidéos et la personnalisation, avec des appels en Live Room qui la distinguent vraiment. En contrepartie : une vérification d'âge par caméra avant certains contenus +18, des abonnements plutôt chers au mois, et un essai à 1,99 $ qui se transforme en abonnement si on oublie de l'annuler.",
  scores: [["Version gratuite", "Oui (création, chat, quelques images)"], ["Prix d'entrée", "19,90 $/mois"], ["Images et vidéos", "Illimitées en payant"], ["Appels", "Live Rooms"]],
  site_score: "Note de la plateforme (notre méthode)",
  pros_t: "Points forts", cons_t: "Points faibles",
  pros: ["Live Rooms : appels voix et vidéo avec le personnage",
    "Créateur de personnage très poussé, ludique et simple",
    "Studio d'images et de vidéos très complet, même en mode facile",
    "Qualité d'image saluée par le test",
    "Compte gratuit : création, chat et quelques images",
    "Chat, images, vidéos et Live Rooms illimités sur les offres payantes"],
  cons: ["Vérification d'âge par caméra avant certains contenus +18",
    "Pas de vidéo en version gratuite",
    "Pro à 39,90 $/mois : cher si on veut seulement discuter",
    "L'essai de 24 h devient un abonnement mensuel s'il n'est pas annulé",
    "« Illimité » avec files d'attente, délais et options payantes en AllureCoins",
    "Les invitations d'appel peuvent sembler envahissantes"],
  cta: "Essayer AIAllure", cta_note: "Lien affilié · 18+",
  toc_t: "Sommaire",
  sections: [
  { id: "live", h2: "1. Live Rooms : le vrai point fort", body: `
<p>Sur AIAllure, le bouton principal d'un profil n'est pas « Discuter » mais <strong>« Appeler »</strong>. Dans une Live Room, le visage du personnage occupe la moitié de l'écran, avec la conversation à côté : on peut activer le son, écrire ou parler au micro. La plateforme affiche aussi les appels manqués et propose de reprendre une conversation déjà commencée.</p>
[[img:live-rooms]]
<p>Le testeur a trouvé l'idée originale, mais l'impression d'être « appelé » par un personnage fictif un peu envahissante. Pour qui cherche plus de présence qu'une simple bulle de chat, c'est en revanche une vraie différence avec la concurrence. La mémoire sur plusieurs jours n'a pas été évaluée dans ce test.</p>` },
  { id: "creation", h2: "2. Création du personnage : presque un jeu", body: `
<p>On choisit une femme ou un homme, puis le style <strong>réaliste</strong> ou <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Ensuite, deux chemins : <strong>Express</strong>, où l'IA crée un look complet, ou <strong>Personnaliser</strong>. Dans ce mode, on règle l'âge (18-24, 25-34, 35-44, 45+), la couleur de peau, la coiffure (longue, courte, ondulée, bouclée, tresses, chignon) et la couleur des cheveux, puis chaque détail peut être modifié après l'aperçu (visage, yeux, nez, lèvres, silhouette…). On termine par le nom et la personnalité.</p>
[[img:creation-apparence]]
<p><strong>Notre avis :</strong> avec ses cartes et sa barre de progression, la création ressemble à un petit jeu mobile, sans jamais devenir confuse. AIAllure promet de garder le même visage d'un outil à l'autre (chat, images, vidéos, Live Rooms) ; le test confirme que le personnage suit bien partout, même si le rendu varie selon la pose et l'éclairage.</p>` },
  { id: "images", h2: "3. Images et vidéos : l'un des studios les plus complets", body: `
<p>Le studio propose un mode <strong>Facile</strong> et un mode <strong>Avancé</strong>. Même sans écrire de prompt, on choisit la scène, la pose, la coiffure, la couleur des cheveux et des actions précises (boire un café, danser, faire du yoga, envoyer un baiser…), le tout avec de grands boutons clairs.</p>
<ul>
<li>✅ <strong>Qualité d'image excellente</strong> selon le test, notamment sur le visage et les cheveux, y compris avec un compte gratuit.</li>
<li>❌ Sur ordinateur, l'image générée s'affichait beaucoup trop grande, mal cadrée : un souci d'affichage plutôt que de qualité.</li>
<li>ℹ️ <strong>Vidéo :</strong> pas incluse en version gratuite (sauf promotion). Les offres payantes incluent une file vidéo standard ; les options instantanées, HD, audio ou avancées peuvent coûter des AllureCoins.</li>
</ul>` },
  { id: "age", h2: "4. Contenus +18 et vérification d'âge", body: `
<p>Avant certains contenus +18, AIAllure demande une <strong>vérification d'âge par caméra</strong> : centrer son visage, cligner des yeux, ouvrir la bouche et tourner la tête. C'est déroutant au début et ça freine la découverte, mais c'est rassurant : d'après ses conditions, l'image est analysée en temps réel pour estimer l'âge puis supprimée, sans conserver d'empreinte biométrique.</p>
<p>Les règles publiées sont strictes : uniquement des personnages adultes fictifs, interdiction des personnages à l'apparence juvénile, des contenus non consentis et de l'image de personnes réelles sans autorisation. Si tu veux du contenu +18 gratuit en deux clics, AIAllure n'est pas fait pour ça : certaines options avancées sont réservées aux offres payantes.</p>` },
  { id: "prix", h2: "5. Prix : essai 24 h, Starter, Pro et Power", body: `
<p>Prix relevés dans le centre d'aide officiel le 11 novembre 2026 (en dollars ; la devise et le montant exacts s'affichent au paiement selon le pays) :</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Durée</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>Essai 24 h</td><td>1,99 $</td><td>3,99 $</td><td>5,99 $</td></tr>
<tr><td><strong>1 mois</strong></td><td><strong>19,90 $</strong></td><td>39,90 $</td><td>59,90 $</td></tr>
<tr><td>3 mois</td><td>44,70 $ (14,90 $/mois)</td><td>89,70 $</td><td>134,70 $</td></tr>
<tr><td>6 mois</td><td>77,40 $ (12,90 $/mois)</td><td>149,40 $</td><td>221,40 $</td></tr>
<tr><td>12 mois</td><td>118,80 $ (9,90 $/mois)</td><td>238,80 $</td><td>358,80 $</td></tr>
<tr><td>À vie</td><td>199 $</td><td>399 $</td><td>599 $</td></tr>
</tbody></table></div>
<p>Les trois offres incluent chat, images, vidéos et Live Rooms illimités. Les plus chères augmentent le nombre d'images par lot (2, 4 ou 8), les vidéos en parallèle (1, 3 ou 5), le nombre de personnages (3 pour Starter, illimité ensuite) et la priorité. « Illimité » n'efface pas les files d'attente, les délais entre deux générations ni les options payantes en AllureCoins.</p>
<p class="avis-note"><strong>Attention à l'essai à 1,99 $ :</strong> il dure 24 h puis devient automatiquement l'abonnement mensuel correspondant (19,90 $ pour Starter) s'il n'est pas annulé avant. Les formules de plusieurs mois sont payées en une fois. Résiliation dans Paramètres puis Gérer l'abonnement.</p>
<p>Paiement par Visa, Mastercard, Apple Pay ou Google Pay. AIAllure est édité par Novera Group s.r.o. (Prague, République tchèque).</p>` },
  { id: "verdict", h2: "Verdict", body: `
[[img:accueil]]
<p>AIAllure est l'un des choix les plus complets si tu veux un personnage très personnalisé, beaucoup d'images et de vidéos, et des appels en Live Room. Ce n'est pas le plus économique si tu veux seulement discuter, ni le plus rapide pour accéder au contenu +18. Le mieux : créer ton personnage et générer une image gratuitement avant de choisir une offre.</p>
<p>Pour une alternative centrée sur la conversation et les images, lis <a href="candy-ai.html">notre avis Candy AI</a>. Fonctions en détail et note : <a href="../platform/aiallure.html">notre fiche AIAllure</a>.</p>` }
  ],
  faq_t: "Questions fréquentes",
  faq: [
    ["AIAllure est-il gratuit ?", "Oui, un compte gratuit permet de créer un personnage, de discuter et de générer quelques images. La vidéo n'est pas incluse en gratuit, sauf promotion."],
    ["Combien coûte AIAllure ?", "Le 11 novembre 2026 : 19,90 $/mois pour Starter, 39,90 $ pour Pro et 59,90 $ pour Power. Sur 12 mois, Starter revient à 9,90 $/mois (118,80 $ payés en une fois). Des formules à vie existent aussi (à partir de 199 $)."],
    ["L'essai à 1,99 $ dure-t-il seulement 24 heures ?", "Oui. Il devient ensuite l'abonnement mensuel correspondant (19,90 $ pour Starter) s'il n'est pas annulé avant la fin des 24 heures."],
    ["Pourquoi AIAllure demande-t-il une vérification par caméra ?", "C'est une vérification d'âge avant certains contenus +18. D'après AIAllure, l'image est analysée en temps réel puis supprimée, sans garder d'empreinte biométrique."],
    ["Que sont les Live Rooms ?", "Des appels avec le personnage : son visage s'affiche en grand à côté du chat, et on peut écrire ou parler au micro."],
    ["Les images et vidéos sont-elles vraiment illimitées ?", "Sur les offres payantes, il n'y a pas de plafond quotidien ou mensuel, mais il reste des files d'attente, des délais et des limites par lot. Certaines options (HD, instantané, audio) coûtent des AllureCoins."]
  ],
  end_t: "Envie de l'essayer ?", end: "Crée ton personnage et génère une première image gratuitement.",
  pl_link: "Lire notre avis complet",
  cap: { "live-rooms": "Les Live Rooms : des personnages disponibles pour un appel voix ou vidéo.",
    "creation-style": "Étape 1 : une femme ou un homme, en style réaliste ou anime.",
    "creation-apparence": "Le mode Personnaliser : âge, couleur de peau, coiffure, couleur des cheveux…",
    "prix": "La grille de prix officielle (centre d'aide AIAllure, 11 novembre 2026).",
    "accueil": "L'accueil d'AIAllure, centré sur les appels en direct." },
  src: "Captures : aiallure.com, 11 novembre 2026 · Source du test : virtualaipartner.com"
},

en: {
  meta_t: "AIAllure Review 2026: Live Rooms, Character Builder, Images, Videos and Pricing",
  meta_d: "Our AIAllure review: Live Room calls, a very deep character builder, an image and video studio, age verification and every price (24-hour trial, Starter, Pro, Power).",
  crumb: "Review", h1: "AIAllure Review: Live Rooms, Images, Videos and Pricing",
  intro: "AIAllure is more than a chat app: it bets on “Live Room” calls, a very detailed character builder and an image and video studio. Here is what you should know before signing up, with every price.",
  based: `This review is based on the full hands-on test published by Roméo on ${SRC} (August 2026), plus our own checks on aiallure.com on 11 November 2026 (character builder, Live Rooms and the official price guide).`,
  box_t: "In short",
  box: "One of the most complete platforms for images, videos and customisation, with Live Room calls that really set it apart. The downsides: a camera age check before some 18+ content, fairly expensive monthly plans, and a $1.99 trial that becomes a subscription if you forget to cancel.",
  scores: [["Free version", "Yes (builder, chat, a few images)"], ["Starting price", "$19.90/month"], ["Images and videos", "Unlimited on paid plans"], ["Calls", "Live Rooms"]],
  site_score: "Platform rating (our method)",
  pros_t: "Strengths", cons_t: "Weaknesses",
  pros: ["Live Rooms: voice and video calls with your companion",
    "Very deep, playful and easy character builder",
    "Very complete image and video studio, even in easy mode",
    "Image quality praised in the test",
    "Free account: builder, chat and a few images",
    "Unlimited chat, images, videos and Live Rooms on paid plans"],
  cons: ["Camera age check before some 18+ content",
    "No video on the free version",
    "Pro at $39.90/month is pricey if you only want to chat",
    "The 24-hour trial becomes a monthly plan unless cancelled",
    "“Unlimited” still has queues, cooldowns and paid AllureCoin extras",
    "Call invitations can feel intrusive"],
  cta: "Try AIAllure", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "live", h2: "1. Live Rooms: the real highlight", body: `
<p>On AIAllure, the main button on a profile is not “Chat” but <strong>“Call”</strong>. In a Live Room, the companion's face fills half the screen with the conversation beside it: you can turn on sound, type or speak into the microphone. The platform also shows missed calls and offers to resume a room you already started.</p>
[[img:live-rooms]]
<p>The tester found the idea original, but the feeling of being “called” by a fictional character a little intrusive. For anyone who wants more presence than a chat bubble, though, it is a real difference from competitors. Multi-day memory was not assessed in this test.</p>` },
  { id: "creation", h2: "2. Character creation: almost a game", body: `
<p>You pick a woman or a man, then the <strong>realistic</strong> or <strong>anime</strong> style.</p>
[[img:creation-style]]
<p>Then there are two paths: <strong>Express</strong>, where the AI designs a complete look, or <strong>Customize</strong>. There you set the age (18–24, 25–34, 35–44, 45+), skin tone, hairstyle (long, short, wavy, curly, braids, updo) and hair colour, and every detail can be edited after the preview (face, eyes, nose, lips, figure…). You finish with the name and personality.</p>
[[img:creation-apparence]]
<p><strong>Our take:</strong> with its cards and progress bar, creation feels like a small mobile game, without ever getting confusing. AIAllure promises to keep the same face across tools (chat, images, videos, Live Rooms); the test confirms the companion follows you everywhere, although results vary with pose and lighting.</p>` },
  { id: "images", h2: "3. Images and videos: one of the most complete studios", body: `
<p>The studio has an <strong>Easy</strong> and an <strong>Advanced</strong> mode. Even without writing a prompt, you choose the scene, pose, hairstyle, hair colour and specific actions (drinking coffee, dancing, yoga, blowing a kiss…), all with large, clear buttons.</p>
<ul>
<li>✅ <strong>Excellent image quality</strong> according to the test, especially faces and hair, even on a free account.</li>
<li>❌ On a computer, the generated image was displayed far too large and badly cropped: a display issue rather than a quality one.</li>
<li>ℹ️ <strong>Video:</strong> not included for free (unless there is a promotion). Paid plans include a standard video queue; instant, HD, audio or advanced options may cost AllureCoins.</li>
</ul>` },
  { id: "age", h2: "4. 18+ content and age verification", body: `
<p>Before some 18+ content, AIAllure asks for a <strong>camera age check</strong>: centre your face, blink, open your mouth and turn your head. It is surprising at first and slows exploration, but it is reassuring: according to its terms, the image is analysed in real time to estimate age and then discarded, without keeping a biometric template.</p>
<p>The published rules are strict: fictional adult characters only, no young-looking characters, no non-consensual content and no real person's likeness without permission. If you want free 18+ content in two clicks, AIAllure is not built for that: some advanced options are reserved for paid plans.</p>` },
  { id: "prix", h2: "5. Pricing: 24-hour trial, Starter, Pro and Power", body: `
<p>Prices from the official help centre on 11 November 2026 (in dollars; the exact currency and amount are shown at checkout depending on your country):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Length</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>24-hour trial</td><td>$1.99</td><td>$3.99</td><td>$5.99</td></tr>
<tr><td><strong>1 month</strong></td><td><strong>$19.90</strong></td><td>$39.90</td><td>$59.90</td></tr>
<tr><td>3 months</td><td>$44.70 ($14.90/month)</td><td>$89.70</td><td>$134.70</td></tr>
<tr><td>6 months</td><td>$77.40 ($12.90/month)</td><td>$149.40</td><td>$221.40</td></tr>
<tr><td>12 months</td><td>$118.80 ($9.90/month)</td><td>$238.80</td><td>$358.80</td></tr>
<tr><td>Lifetime</td><td>$199</td><td>$399</td><td>$599</td></tr>
</tbody></table></div>
<p>All three plans include unlimited chat, images, videos and Live Rooms. Higher tiers raise images per batch (2, 4 or 8), parallel videos (1, 3 or 5), companions (3 on Starter, unlimited above) and priority. “Unlimited” does not remove queues, cooldowns or paid AllureCoin options.</p>
<p class="avis-note"><strong>Watch out for the $1.99 trial:</strong> it lasts 24 hours and then automatically becomes the matching monthly plan ($19.90 for Starter) unless cancelled before. Multi-month plans are paid upfront. Cancel under Settings, then Manage Subscription.</p>
<p>Payment by Visa, Mastercard, Apple Pay or Google Pay. AIAllure is run by Novera Group s.r.o. (Prague, Czech Republic).</p>` },
  { id: "verdict", h2: "Verdict", body: `
[[img:accueil]]
<p>AIAllure is one of the most complete choices if you want a highly customised companion, lots of images and videos, and Live Room calls. It is not the cheapest if you only want to chat, nor the fastest route to 18+ content. Best move: create your companion and generate an image for free before choosing a plan.</p>
<p>For an alternative focused on chat and images, read <a href="candy-ai.html">our Candy AI review</a>. Features in detail and rating: <a href="../platform/aiallure.html">our AIAllure page</a>.</p>` }
  ],
  faq_t: "Frequently asked questions",
  faq: [
    ["Is AIAllure free?", "Yes, a free account lets you create a companion, chat and generate a few images. Video is not included for free, unless there is a promotion."],
    ["How much does AIAllure cost?", "On 11 November 2026: $19.90/month for Starter, $39.90 for Pro and $59.90 for Power. Over 12 months, Starter works out at $9.90/month ($118.80 paid upfront). Lifetime plans also exist (from $199)."],
    ["Does the $1.99 trial only last 24 hours?", "Yes. It then becomes the matching monthly plan ($19.90 for Starter) unless cancelled before the 24 hours end."],
    ["Why does AIAllure ask for a camera check?", "It is an age check before some 18+ content. According to AIAllure, the image is analysed in real time and then discarded, without keeping a biometric template."],
    ["What are Live Rooms?", "Calls with your companion: her face is shown large next to the chat, and you can type or speak into the microphone."],
    ["Are images and videos really unlimited?", "On paid plans there is no daily or monthly cap, but queues, cooldowns and batch limits remain. Some options (HD, instant, audio) cost AllureCoins."]
  ],
  end_t: "Want to try it?", end: "Create your companion and generate a first image for free.",
  pl_link: "Read our full review",
  cap: { "live-rooms": "Live Rooms: companions available for a voice or video call.",
    "creation-style": "Step 1: a woman or a man, in realistic or anime style.",
    "creation-apparence": "Customize mode: age, skin tone, hairstyle, hair colour…",
    "prix": "The official price guide (AIAllure help centre, 11 November 2026).",
    "accueil": "AIAllure's home page, built around live calls." },
  src: "Screenshots: aiallure.com, 11 November 2026 · Test source: virtualaipartner.com"
},

es: {
  meta_t: "Opinión de AIAllure 2026: Live Rooms, creación, imágenes, vídeos y precios",
  meta_d: "Nuestra opinión sobre AIAllure: llamadas en Live Room, creador de personajes muy completo, estudio de imágenes y vídeos, verificación de edad y todos los precios (prueba de 24 h, Starter, Pro, Power).",
  crumb: "Opinión", h1: "Opinión de AIAllure: Live Rooms, imágenes, vídeos y precios",
  intro: "AIAllure no se queda en un chat: apuesta por las llamadas en «Live Room», un creador de personajes muy detallado y un estudio de imágenes y vídeos. Esto es lo que debes saber antes de registrarte, con todos los precios.",
  based: `Esta opinión se basa en la prueba completa publicada por Roméo en ${SRC} (agosto de 2026), completada con nuestras propias comprobaciones en aiallure.com el 11 de noviembre de 2026 (creador de personajes, Live Rooms y tabla oficial de precios).`,
  box_t: "En resumen",
  box: "Una de las plataformas más completas para imágenes, vídeos y personalización, con llamadas en Live Room que la diferencian de verdad. A cambio: verificación de edad por cámara antes de ciertos contenidos +18, planes mensuales bastante caros y una prueba de 1,99 $ que se convierte en suscripción si olvidas cancelarla.",
  scores: [["Versión gratuita", "Sí (creación, chat, algunas imágenes)"], ["Precio de entrada", "19,90 $/mes"], ["Imágenes y vídeos", "Ilimitados con pago"], ["Llamadas", "Live Rooms"]],
  site_score: "Nota de la plataforma (nuestro método)",
  pros_t: "Puntos fuertes", cons_t: "Puntos débiles",
  pros: ["Live Rooms: llamadas de voz y vídeo con el personaje",
    "Creador de personajes muy completo, divertido y sencillo",
    "Estudio de imágenes y vídeos muy completo, incluso en modo fácil",
    "Calidad de imagen elogiada en la prueba",
    "Cuenta gratuita: creación, chat y algunas imágenes",
    "Chat, imágenes, vídeos y Live Rooms ilimitados en los planes de pago"],
  cons: ["Verificación de edad por cámara antes de ciertos contenidos +18",
    "Sin vídeo en la versión gratuita",
    "Pro a 39,90 $/mes: caro si solo quieres chatear",
    "La prueba de 24 h se convierte en plan mensual si no se cancela",
    "«Ilimitado» con colas, esperas y extras de pago en AllureCoins",
    "Las invitaciones de llamada pueden resultar invasivas"],
  cta: "Probar AIAllure", cta_note: "Enlace de afiliado · 18+",
  toc_t: "Índice",
  sections: [
  { id: "live", h2: "1. Live Rooms: su verdadero punto fuerte", body: `
<p>En AIAllure, el botón principal de un perfil no es «Chatear» sino <strong>«Llamar»</strong>. En una Live Room, la cara del personaje ocupa media pantalla con la conversación al lado: puedes activar el sonido, escribir o hablar por el micrófono. La plataforma también muestra las llamadas perdidas y propone retomar una conversación ya empezada.</p>
[[img:live-rooms]]
<p>Al probador la idea le pareció original, aunque la sensación de que un personaje ficticio te «llama» resulta algo invasiva. Para quien busca más presencia que una burbuja de chat, es una diferencia real frente a la competencia. La memoria a lo largo de varios días no se evaluó en esta prueba.</p>` },
  { id: "creation", h2: "2. Creación del personaje: casi un juego", body: `
<p>Eliges mujer u hombre y luego el estilo <strong>realista</strong> o <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Después hay dos caminos: <strong>Express</strong>, donde la IA diseña un look completo, o <strong>Personalizar</strong>. Ahí eliges la edad (18-24, 25-34, 35-44, 45+), el tono de piel, el peinado (largo, corto, ondulado, rizado, trenzas, recogido) y el color de pelo, y cada detalle se puede modificar tras la vista previa (cara, ojos, nariz, labios, figura…). Terminas con el nombre y la personalidad.</p>
[[img:creation-apparence]]
<p><strong>Nuestra opinión:</strong> con sus tarjetas y su barra de progreso, la creación parece un pequeño juego móvil, sin volverse nunca confusa. AIAllure promete mantener la misma cara en todas sus herramientas (chat, imágenes, vídeos, Live Rooms); la prueba confirma que el personaje te sigue a todas partes, aunque el resultado varía según la pose y la luz.</p>` },
  { id: "images", h2: "3. Imágenes y vídeos: uno de los estudios más completos", body: `
<p>El estudio tiene un modo <strong>Fácil</strong> y un modo <strong>Avanzado</strong>. Sin escribir ningún prompt, eliges la escena, la pose, el peinado, el color de pelo y acciones concretas (tomar un café, bailar, hacer yoga, lanzar un beso…), todo con botones grandes y claros.</p>
<ul>
<li>✅ <strong>Calidad de imagen excelente</strong> según la prueba, sobre todo en la cara y el pelo, incluso con una cuenta gratuita.</li>
<li>❌ En ordenador, la imagen generada se mostraba demasiado grande y mal encuadrada: un problema de visualización más que de calidad.</li>
<li>ℹ️ <strong>Vídeo:</strong> no incluido en la versión gratuita (salvo promoción). Los planes de pago incluyen una cola de vídeo estándar; las opciones instantáneas, HD, audio o avanzadas pueden costar AllureCoins.</li>
</ul>` },
  { id: "age", h2: "4. Contenido +18 y verificación de edad", body: `
<p>Antes de ciertos contenidos +18, AIAllure pide una <strong>verificación de edad por cámara</strong>: centrar la cara, parpadear, abrir la boca y girar la cabeza. Desconcierta al principio y frena la exploración, pero tranquiliza: según sus condiciones, la imagen se analiza en tiempo real para estimar la edad y luego se elimina, sin guardar ninguna huella biométrica.</p>
<p>Las normas publicadas son estrictas: solo personajes adultos ficticios, prohibidos los personajes de aspecto juvenil, el contenido no consentido y la imagen de personas reales sin autorización. Si quieres contenido +18 gratis en dos clics, AIAllure no está hecho para eso: algunas opciones avanzadas son solo para planes de pago.</p>` },
  { id: "prix", h2: "5. Precios: prueba de 24 h, Starter, Pro y Power", body: `
<p>Precios consultados en el centro de ayuda oficial el 11 de noviembre de 2026 (en dólares; la moneda y el importe exactos se muestran al pagar según el país):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Duración</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>Prueba 24 h</td><td>1,99 $</td><td>3,99 $</td><td>5,99 $</td></tr>
<tr><td><strong>1 mes</strong></td><td><strong>19,90 $</strong></td><td>39,90 $</td><td>59,90 $</td></tr>
<tr><td>3 meses</td><td>44,70 $ (14,90 $/mes)</td><td>89,70 $</td><td>134,70 $</td></tr>
<tr><td>6 meses</td><td>77,40 $ (12,90 $/mes)</td><td>149,40 $</td><td>221,40 $</td></tr>
<tr><td>12 meses</td><td>118,80 $ (9,90 $/mes)</td><td>238,80 $</td><td>358,80 $</td></tr>
<tr><td>De por vida</td><td>199 $</td><td>399 $</td><td>599 $</td></tr>
</tbody></table></div>
<p>Los tres planes incluyen chat, imágenes, vídeos y Live Rooms ilimitados. Los más caros aumentan las imágenes por lote (2, 4 u 8), los vídeos en paralelo (1, 3 o 5), los personajes (3 en Starter, ilimitados después) y la prioridad. «Ilimitado» no elimina las colas, las esperas ni las opciones de pago en AllureCoins.</p>
<p class="avis-note"><strong>Cuidado con la prueba de 1,99 $:</strong> dura 24 horas y luego se convierte automáticamente en el plan mensual correspondiente (19,90 $ para Starter) si no se cancela antes. Los planes de varios meses se pagan de una vez. Cancelación en Ajustes y luego Gestionar suscripción.</p>
<p>Pago con Visa, Mastercard, Apple Pay o Google Pay. AIAllure pertenece a Novera Group s.r.o. (Praga, República Checa).</p>` },
  { id: "verdict", h2: "Veredicto", body: `
[[img:accueil]]
<p>AIAllure es una de las opciones más completas si quieres un personaje muy personalizado, muchas imágenes y vídeos, y llamadas en Live Room. No es la más barata si solo quieres chatear, ni la vía más rápida al contenido +18. Lo mejor: crear tu personaje y generar una imagen gratis antes de elegir un plan.</p>
<p>Como alternativa centrada en la conversación y las imágenes, lee <a href="candy-ai.html">nuestra opinión de Candy AI</a>. Funciones en detalle y nota: <a href="../platform/aiallure.html">nuestra ficha de AIAllure</a>.</p>` }
  ],
  faq_t: "Preguntas frecuentes",
  faq: [
    ["¿AIAllure es gratis?", "Sí, una cuenta gratuita permite crear un personaje, chatear y generar algunas imágenes. El vídeo no está incluido gratis, salvo promoción."],
    ["¿Cuánto cuesta AIAllure?", "El 11 de noviembre de 2026: 19,90 $/mes Starter, 39,90 $ Pro y 59,90 $ Power. A 12 meses, Starter sale a 9,90 $/mes (118,80 $ pagados de una vez). También hay planes de por vida (desde 199 $)."],
    ["¿La prueba de 1,99 $ dura solo 24 horas?", "Sí. Después se convierte en el plan mensual correspondiente (19,90 $ para Starter) si no se cancela antes de que terminen las 24 horas."],
    ["¿Por qué AIAllure pide una verificación con cámara?", "Es una verificación de edad antes de ciertos contenidos +18. Según AIAllure, la imagen se analiza en tiempo real y luego se elimina, sin guardar ninguna huella biométrica."],
    ["¿Qué son las Live Rooms?", "Llamadas con el personaje: su cara se muestra en grande junto al chat, y puedes escribir o hablar por el micrófono."],
    ["¿Las imágenes y los vídeos son de verdad ilimitados?", "En los planes de pago no hay límite diario ni mensual, pero quedan colas, esperas y límites por lote. Algunas opciones (HD, instantáneo, audio) cuestan AllureCoins."]
  ],
  end_t: "¿Quieres probarlo?", end: "Crea tu personaje y genera una primera imagen gratis.",
  pl_link: "Leer nuestra opinión completa",
  cap: { "live-rooms": "Las Live Rooms: personajes disponibles para una llamada de voz o vídeo.",
    "creation-style": "Paso 1: mujer u hombre, en estilo realista o anime.",
    "creation-apparence": "El modo Personalizar: edad, tono de piel, peinado, color de pelo…",
    "prix": "La tabla oficial de precios (centro de ayuda de AIAllure, 11 de noviembre de 2026).",
    "accueil": "La página de inicio de AIAllure, centrada en las llamadas en directo." },
  src: "Capturas: aiallure.com, 11 de noviembre de 2026 · Fuente de la prueba: virtualaipartner.com"
},

de: {
  meta_t: "AIAllure Test 2026: Live Rooms, Charakter-Editor, Bilder, Videos und Preise",
  meta_d: "Unsere Meinung zu AIAllure: Live-Room-Anrufe, ein sehr umfangreicher Charakter-Editor, Bild- und Videostudio, Altersprüfung und alle Preise (24-Stunden-Test, Starter, Pro, Power).",
  crumb: "Test", h1: "AIAllure im Test: Live Rooms, Bilder, Videos und Preise",
  intro: "AIAllure ist mehr als ein Chat: Die Plattform setzt auf Anrufe im „Live Room“, einen sehr detaillierten Charakter-Editor und ein Studio für Bilder und Videos. Das solltest du vor der Anmeldung wissen, mit allen Preisen.",
  based: `Dieser Test stützt sich auf den ausführlichen Praxistest von Roméo auf ${SRC} (August 2026), ergänzt durch unsere eigenen Prüfungen auf aiallure.com am 11. November 2026 (Charakter-Editor, Live Rooms und offizielle Preisübersicht).`,
  box_t: "Kurz gesagt",
  box: "Eine der umfangreichsten Plattformen für Bilder, Videos und Personalisierung, mit Live-Room-Anrufen, die sie wirklich abheben. Dafür: eine Altersprüfung per Kamera vor manchen 18+-Inhalten, eher teure Monatsabos und ein Test für 1,99 $, der zum Abo wird, wenn man ihn nicht kündigt.",
  scores: [["Gratisversion", "Ja (Editor, Chat, einige Bilder)"], ["Einstiegspreis", "19,90 $/Monat"], ["Bilder und Videos", "Unbegrenzt im Abo"], ["Anrufe", "Live Rooms"]],
  site_score: "Bewertung der Plattform (unsere Methode)",
  pros_t: "Stärken", cons_t: "Schwächen",
  pros: ["Live Rooms: Sprach- und Videoanrufe mit dem Charakter",
    "Sehr umfangreicher, spielerischer und einfacher Charakter-Editor",
    "Sehr vollständiges Bild- und Videostudio, auch im einfachen Modus",
    "Im Test gelobte Bildqualität",
    "Gratiskonto: Editor, Chat und einige Bilder",
    "Unbegrenzter Chat, Bilder, Videos und Live Rooms in den Abos"],
  cons: ["Altersprüfung per Kamera vor manchen 18+-Inhalten",
    "Kein Video in der Gratisversion",
    "Pro für 39,90 $/Monat ist teuer, wenn man nur chatten will",
    "Der 24-Stunden-Test wird ohne Kündigung zum Monatsabo",
    "„Unbegrenzt“ mit Warteschlangen, Pausen und kostenpflichtigen AllureCoin-Extras",
    "Anrufeinladungen können aufdringlich wirken"],
  cta: "AIAllure testen", cta_note: "Affiliate-Link · 18+",
  toc_t: "Inhalt",
  sections: [
  { id: "live", h2: "1. Live Rooms: die eigentliche Stärke", body: `
<p>Bei AIAllure heißt der Hauptknopf eines Profils nicht „Chatten“, sondern <strong>„Anrufen“</strong>. In einem Live Room füllt das Gesicht des Charakters die halbe Seite, daneben läuft der Chat: Man kann den Ton einschalten, schreiben oder ins Mikrofon sprechen. Die Plattform zeigt auch verpasste Anrufe und bietet an, ein begonnenes Gespräch fortzusetzen.</p>
[[img:live-rooms]]
<p>Der Tester fand die Idee originell, das Gefühl, von einer fiktiven Figur „angerufen“ zu werden, aber etwas aufdringlich. Wer mehr Präsenz als eine Chatblase sucht, findet hier einen echten Unterschied zur Konkurrenz. Das Gedächtnis über mehrere Tage wurde in diesem Test nicht bewertet.</p>` },
  { id: "creation", h2: "2. Charaktererstellung: fast ein Spiel", body: `
<p>Man wählt Frau oder Mann und dann den <strong>realistischen</strong> oder den <strong>Anime</strong>-Stil.</p>
[[img:creation-style]]
<p>Danach gibt es zwei Wege: <strong>Express</strong>, bei dem die KI einen kompletten Look entwirft, oder <strong>Anpassen</strong>. Dort stellt man Alter (18–24, 25–34, 35–44, 45+), Hautton, Frisur (lang, kurz, wellig, lockig, Zöpfe, Hochsteckfrisur) und Haarfarbe ein; nach der Vorschau lässt sich jedes Detail ändern (Gesicht, Augen, Nase, Lippen, Figur…). Zum Schluss kommen Name und Persönlichkeit.</p>
[[img:creation-apparence]]
<p><strong>Unsere Meinung:</strong> Mit Karten und Fortschrittsbalken wirkt die Erstellung wie ein kleines Handyspiel, ohne je unübersichtlich zu werden. AIAllure verspricht, in allen Werkzeugen (Chat, Bilder, Videos, Live Rooms) dasselbe Gesicht beizubehalten; der Test bestätigt, dass einen der Charakter überallhin begleitet, auch wenn das Ergebnis je nach Pose und Licht variiert.</p>` },
  { id: "images", h2: "3. Bilder und Videos: eines der vollständigsten Studios", body: `
<p>Das Studio hat einen <strong>einfachen</strong> und einen <strong>erweiterten</strong> Modus. Ohne einen Prompt zu schreiben, wählt man Szene, Pose, Frisur, Haarfarbe und konkrete Aktionen (Kaffee trinken, tanzen, Yoga, Kusshand…), alles über große, klare Knöpfe.</p>
<ul>
<li>✅ <strong>Hervorragende Bildqualität</strong> laut Test, vor allem bei Gesicht und Haaren, sogar mit einem Gratiskonto.</li>
<li>❌ Am Computer wurde das erzeugte Bild viel zu groß und schlecht zugeschnitten angezeigt: eher ein Anzeige- als ein Qualitätsproblem.</li>
<li>ℹ️ <strong>Video:</strong> in der Gratisversion nicht enthalten (außer bei Aktionen). Die Abos enthalten eine normale Video-Warteschlange; Sofort-, HD-, Audio- oder erweiterte Optionen können AllureCoins kosten.</li>
</ul>` },
  { id: "age", h2: "4. 18+-Inhalte und Altersprüfung", body: `
<p>Vor manchen 18+-Inhalten verlangt AIAllure eine <strong>Altersprüfung per Kamera</strong>: Gesicht zentrieren, blinzeln, Mund öffnen und den Kopf drehen. Das irritiert anfangs und bremst das Ausprobieren, wirkt aber vertrauenswürdig: Laut den Bedingungen wird das Bild in Echtzeit zur Altersschätzung ausgewertet und dann gelöscht, ohne biometrisches Muster zu speichern.</p>
<p>Die veröffentlichten Regeln sind streng: nur fiktive erwachsene Charaktere, keine jung wirkenden Figuren, keine Inhalte ohne Einwilligung und kein Abbild realer Personen ohne Erlaubnis. Wer gratis 18+-Inhalte mit zwei Klicks will, ist bei AIAllure falsch: Manche erweiterten Optionen sind den Abos vorbehalten.</p>` },
  { id: "prix", h2: "5. Preise: 24-Stunden-Test, Starter, Pro und Power", body: `
<p>Preise aus dem offiziellen Hilfecenter am 11. November 2026 (in Dollar; Währung und genauer Betrag werden je nach Land an der Kasse angezeigt):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Laufzeit</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>24-Stunden-Test</td><td>1,99 $</td><td>3,99 $</td><td>5,99 $</td></tr>
<tr><td><strong>1 Monat</strong></td><td><strong>19,90 $</strong></td><td>39,90 $</td><td>59,90 $</td></tr>
<tr><td>3 Monate</td><td>44,70 $ (14,90 $/Monat)</td><td>89,70 $</td><td>134,70 $</td></tr>
<tr><td>6 Monate</td><td>77,40 $ (12,90 $/Monat)</td><td>149,40 $</td><td>221,40 $</td></tr>
<tr><td>12 Monate</td><td>118,80 $ (9,90 $/Monat)</td><td>238,80 $</td><td>358,80 $</td></tr>
<tr><td>Lebenslang</td><td>199 $</td><td>399 $</td><td>599 $</td></tr>
</tbody></table></div>
<p>Alle drei Abos enthalten unbegrenzten Chat, Bilder, Videos und Live Rooms. Die teureren erhöhen die Bilder pro Durchgang (2, 4 oder 8), parallele Videos (1, 3 oder 5), die Zahl der Charaktere (3 bei Starter, danach unbegrenzt) und die Priorität. „Unbegrenzt“ heißt nicht ohne Warteschlangen, Pausen oder kostenpflichtige AllureCoin-Optionen.</p>
<p class="avis-note"><strong>Vorsicht beim Test für 1,99 $:</strong> Er dauert 24 Stunden und wird dann automatisch zum passenden Monatsabo (19,90 $ bei Starter), wenn man ihn nicht vorher kündigt. Mehrmonatsabos werden im Voraus bezahlt. Kündigung unter Einstellungen, dann Abo verwalten.</p>
<p>Zahlung per Visa, Mastercard, Apple Pay oder Google Pay. Betreiber von AIAllure ist die Novera Group s.r.o. (Prag, Tschechien).</p>` },
  { id: "verdict", h2: "Fazit", body: `
[[img:accueil]]
<p>AIAllure gehört zu den vollständigsten Angeboten, wenn du einen stark personalisierten Charakter, viele Bilder und Videos sowie Live-Room-Anrufe willst. Am günstigsten ist es nicht, wenn du nur chatten möchtest, und auch nicht der schnellste Weg zu 18+-Inhalten. Am besten: Charakter erstellen und gratis ein Bild erzeugen, bevor du ein Abo wählst.</p>
<p>Als Alternative mit Fokus auf Chat und Bilder: <a href="candy-ai.html">unser Candy-AI-Test</a>. Funktionen im Detail und Bewertung: <a href="../platform/aiallure.html">unsere AIAllure-Seite</a>.</p>` }
  ],
  faq_t: "Häufige Fragen",
  faq: [
    ["Ist AIAllure kostenlos?", "Ja, mit einem Gratiskonto kann man einen Charakter erstellen, chatten und einige Bilder erzeugen. Video ist gratis nicht enthalten, außer bei Aktionen."],
    ["Was kostet AIAllure?", "Am 11. November 2026: 19,90 $/Monat für Starter, 39,90 $ für Pro und 59,90 $ für Power. Über 12 Monate kostet Starter 9,90 $/Monat (118,80 $ im Voraus). Es gibt auch lebenslange Pakete (ab 199 $)."],
    ["Dauert der Test für 1,99 $ nur 24 Stunden?", "Ja. Danach wird er zum passenden Monatsabo (19,90 $ bei Starter), wenn er nicht vor Ablauf der 24 Stunden gekündigt wird."],
    ["Warum verlangt AIAllure eine Kameraprüfung?", "Es ist eine Altersprüfung vor manchen 18+-Inhalten. Laut AIAllure wird das Bild in Echtzeit ausgewertet und dann gelöscht, ohne biometrisches Muster zu speichern."],
    ["Was sind Live Rooms?", "Anrufe mit dem Charakter: Sein Gesicht wird groß neben dem Chat angezeigt, und man kann schreiben oder ins Mikrofon sprechen."],
    ["Sind Bilder und Videos wirklich unbegrenzt?", "In den Abos gibt es kein Tages- oder Monatslimit, aber Warteschlangen, Pausen und Grenzen pro Durchgang bleiben. Manche Optionen (HD, sofort, Audio) kosten AllureCoins."]
  ],
  end_t: "Lust, es auszuprobieren?", end: "Erstelle deinen Charakter und erzeuge gratis ein erstes Bild.",
  pl_link: "Unseren kompletten Test lesen",
  cap: { "live-rooms": "Die Live Rooms: Charaktere, die für einen Sprach- oder Videoanruf bereitstehen.",
    "creation-style": "Schritt 1: Frau oder Mann, im realistischen oder Anime-Stil.",
    "creation-apparence": "Der Modus Anpassen: Alter, Hautton, Frisur, Haarfarbe…",
    "prix": "Die offizielle Preisübersicht (AIAllure-Hilfecenter, 11. November 2026).",
    "accueil": "Die Startseite von AIAllure, ganz auf Live-Anrufe ausgerichtet." },
  src: "Screenshots: aiallure.com, 11. November 2026 · Quelle des Tests: virtualaipartner.com"
},

pt: {
  meta_t: "AIAllure vale a pena? Análise 2026: Live Rooms, criação, imagens, vídeos e preços",
  meta_d: "Nossa análise do AIAllure: chamadas em Live Room, criador de personagens muito completo, estúdio de imagens e vídeos, verificação de idade e todos os preços (teste de 24 h, Starter, Pro, Power).",
  crumb: "Análise", h1: "AIAllure: análise de Live Rooms, imagens, vídeos e preços",
  intro: "O AIAllure vai além do chat: aposta em chamadas na “Live Room”, num criador de personagens muito detalhado e num estúdio de imagens e vídeos. Veja o que saber antes de se cadastrar, com todos os preços.",
  based: `Esta análise se baseia no teste completo publicado por Roméo em ${SRC} (agosto de 2026), complementado pelas nossas próprias verificações em aiallure.com em 11 de novembro de 2026 (criador de personagens, Live Rooms e tabela oficial de preços).`,
  box_t: "Em resumo",
  box: "Uma das plataformas mais completas para imagens, vídeos e personalização, com chamadas em Live Room que realmente a diferenciam. Em troca: verificação de idade pela câmera antes de alguns conteúdos +18, planos mensais bem caros e um teste de 1,99 $ que vira assinatura se você esquecer de cancelar.",
  scores: [["Versão gratuita", "Sim (criação, chat, algumas imagens)"], ["Preço de entrada", "19,90 $/mês"], ["Imagens e vídeos", "Ilimitados nos planos pagos"], ["Chamadas", "Live Rooms"]],
  site_score: "Nota da plataforma (nosso método)",
  pros_t: "Pontos fortes", cons_t: "Pontos fracos",
  pros: ["Live Rooms: chamadas de voz e vídeo com a personagem",
    "Criador de personagens muito completo, divertido e simples",
    "Estúdio de imagens e vídeos muito completo, mesmo no modo fácil",
    "Qualidade de imagem elogiada no teste",
    "Conta gratuita: criação, chat e algumas imagens",
    "Chat, imagens, vídeos e Live Rooms ilimitados nos planos pagos"],
  cons: ["Verificação de idade pela câmera antes de alguns conteúdos +18",
    "Sem vídeo na versão gratuita",
    "Pro a 39,90 $/mês: caro se você só quer conversar",
    "O teste de 24 h vira plano mensal se não for cancelado",
    "“Ilimitado” com filas, esperas e extras pagos em AllureCoins",
    "Os convites de chamada podem parecer invasivos"],
  cta: "Experimentar o AIAllure", cta_note: "Link de afiliado · 18+",
  toc_t: "Sumário",
  sections: [
  { id: "live", h2: "1. Live Rooms: o verdadeiro ponto forte", body: `
<p>No AIAllure, o botão principal de um perfil não é “Conversar”, e sim <strong>“Ligar”</strong>. Numa Live Room, o rosto da personagem ocupa metade da tela, com a conversa ao lado: dá para ativar o som, escrever ou falar pelo microfone. A plataforma também mostra chamadas perdidas e propõe retomar uma conversa já começada.</p>
[[img:live-rooms]]
<p>O testador achou a ideia original, mas a sensação de ser “chamado” por uma personagem fictícia um pouco invasiva. Para quem quer mais presença do que uma bolha de chat, é uma diferença real em relação à concorrência. A memória ao longo de vários dias não foi avaliada neste teste.</p>` },
  { id: "creation", h2: "2. Criação da personagem: quase um jogo", body: `
<p>Você escolhe mulher ou homem e depois o estilo <strong>realista</strong> ou <strong>anime</strong>.</p>
[[img:creation-style]]
<p>Depois há dois caminhos: <strong>Express</strong>, em que a IA cria um visual completo, ou <strong>Personalizar</strong>. Ali você define a idade (18-24, 25-34, 35-44, 45+), o tom de pele, o penteado (longo, curto, ondulado, cacheado, tranças, coque) e a cor do cabelo, e cada detalhe pode ser alterado depois da prévia (rosto, olhos, nariz, lábios, silhueta…). Para terminar, o nome e a personalidade.</p>
[[img:creation-apparence]]
<p><strong>Nossa opinião:</strong> com cartões e barra de progresso, a criação parece um joguinho de celular, sem nunca ficar confusa. O AIAllure promete manter o mesmo rosto em todas as ferramentas (chat, imagens, vídeos, Live Rooms); o teste confirma que a personagem acompanha você em todo lugar, embora o resultado varie com a pose e a luz.</p>` },
  { id: "images", h2: "3. Imagens e vídeos: um dos estúdios mais completos", body: `
<p>O estúdio tem um modo <strong>Fácil</strong> e um modo <strong>Avançado</strong>. Sem escrever nenhum prompt, você escolhe a cena, a pose, o penteado, a cor do cabelo e ações específicas (tomar café, dançar, fazer yoga, mandar um beijo…), tudo com botões grandes e claros.</p>
<ul>
<li>✅ <strong>Qualidade de imagem excelente</strong> segundo o teste, sobretudo no rosto e no cabelo, mesmo com uma conta gratuita.</li>
<li>❌ No computador, a imagem gerada aparecia grande demais e mal enquadrada: um problema de exibição mais do que de qualidade.</li>
<li>ℹ️ <strong>Vídeo:</strong> não incluído na versão gratuita (salvo promoção). Os planos pagos incluem uma fila de vídeo padrão; as opções instantâneas, HD, áudio ou avançadas podem custar AllureCoins.</li>
</ul>` },
  { id: "age", h2: "4. Conteúdo +18 e verificação de idade", body: `
<p>Antes de alguns conteúdos +18, o AIAllure pede uma <strong>verificação de idade pela câmera</strong>: centralizar o rosto, piscar, abrir a boca e virar a cabeça. Surpreende no começo e freia a exploração, mas transmite segurança: segundo os termos, a imagem é analisada em tempo real para estimar a idade e depois apagada, sem guardar nenhum modelo biométrico.</p>
<p>As regras publicadas são rígidas: somente personagens adultas fictícias, proibidas as personagens de aparência jovem, o conteúdo sem consentimento e a imagem de pessoas reais sem autorização. Se você quer conteúdo +18 grátis em dois cliques, o AIAllure não foi feito para isso: algumas opções avançadas são exclusivas dos planos pagos.</p>` },
  { id: "prix", h2: "5. Preços: teste de 24 h, Starter, Pro e Power", body: `
<p>Preços conferidos na central de ajuda oficial em 11 de novembro de 2026 (em dólares; a moeda e o valor exatos aparecem no pagamento conforme o país):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>Duração</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>Teste de 24 h</td><td>1,99 $</td><td>3,99 $</td><td>5,99 $</td></tr>
<tr><td><strong>1 mês</strong></td><td><strong>19,90 $</strong></td><td>39,90 $</td><td>59,90 $</td></tr>
<tr><td>3 meses</td><td>44,70 $ (14,90 $/mês)</td><td>89,70 $</td><td>134,70 $</td></tr>
<tr><td>6 meses</td><td>77,40 $ (12,90 $/mês)</td><td>149,40 $</td><td>221,40 $</td></tr>
<tr><td>12 meses</td><td>118,80 $ (9,90 $/mês)</td><td>238,80 $</td><td>358,80 $</td></tr>
<tr><td>Vitalício</td><td>199 $</td><td>399 $</td><td>599 $</td></tr>
</tbody></table></div>
<p>Os três planos incluem chat, imagens, vídeos e Live Rooms ilimitados. Os mais caros aumentam as imagens por lote (2, 4 ou 8), os vídeos em paralelo (1, 3 ou 5), o número de personagens (3 no Starter, ilimitado depois) e a prioridade. “Ilimitado” não elimina filas, esperas nem as opções pagas em AllureCoins.</p>
<p class="avis-note"><strong>Atenção ao teste de 1,99 $:</strong> ele dura 24 horas e depois vira automaticamente o plano mensal correspondente (19,90 $ no Starter) se não for cancelado antes. Os planos de vários meses são pagos de uma vez. Cancelamento em Configurações e depois Gerenciar assinatura.</p>
<p>Pagamento com Visa, Mastercard, Apple Pay ou Google Pay. O AIAllure pertence à Novera Group s.r.o. (Praga, República Tcheca).</p>` },
  { id: "verdict", h2: "Veredito", body: `
[[img:accueil]]
<p>O AIAllure é uma das opções mais completas se você quer uma personagem muito personalizada, muitas imagens e vídeos e chamadas em Live Room. Não é o mais barato se você só quer conversar, nem o caminho mais rápido para o conteúdo +18. O melhor: criar sua personagem e gerar uma imagem grátis antes de escolher um plano.</p>
<p>Como alternativa focada em conversa e imagens, leia <a href="candy-ai.html">nossa análise do Candy AI</a>. Funções em detalhe e nota: <a href="../platform/aiallure.html">nossa página do AIAllure</a>.</p>` }
  ],
  faq_t: "Perguntas frequentes",
  faq: [
    ["O AIAllure é grátis?", "Sim, uma conta gratuita permite criar uma personagem, conversar e gerar algumas imagens. O vídeo não está incluído no plano grátis, salvo promoção."],
    ["Quanto custa o AIAllure?", "Em 11 de novembro de 2026: 19,90 $/mês no Starter, 39,90 $ no Pro e 59,90 $ no Power. Em 12 meses, o Starter sai por 9,90 $/mês (118,80 $ pagos de uma vez). Também existem planos vitalícios (a partir de 199 $)."],
    ["O teste de 1,99 $ dura só 24 horas?", "Sim. Depois ele vira o plano mensal correspondente (19,90 $ no Starter) se não for cancelado antes do fim das 24 horas."],
    ["Por que o AIAllure pede uma verificação pela câmera?", "É uma verificação de idade antes de alguns conteúdos +18. Segundo o AIAllure, a imagem é analisada em tempo real e depois apagada, sem guardar nenhum modelo biométrico."],
    ["O que são as Live Rooms?", "Chamadas com a personagem: o rosto dela aparece grande ao lado do chat, e você pode escrever ou falar pelo microfone."],
    ["As imagens e os vídeos são mesmo ilimitados?", "Nos planos pagos não há limite diário nem mensal, mas continuam existindo filas, esperas e limites por lote. Algumas opções (HD, instantâneo, áudio) custam AllureCoins."]
  ],
  end_t: "Quer experimentar?", end: "Crie sua personagem e gere uma primeira imagem de graça.",
  pl_link: "Ler nossa análise completa",
  cap: { "live-rooms": "As Live Rooms: personagens disponíveis para uma chamada de voz ou vídeo.",
    "creation-style": "Etapa 1: mulher ou homem, no estilo realista ou anime.",
    "creation-apparence": "O modo Personalizar: idade, tom de pele, penteado, cor do cabelo…",
    "prix": "A tabela oficial de preços (central de ajuda do AIAllure, 11 de novembro de 2026).",
    "accueil": "A página inicial do AIAllure, focada nas chamadas ao vivo." },
  src: "Capturas: aiallure.com, 11 de novembro de 2026 · Fonte do teste: virtualaipartner.com"
},

hi: {
  meta_t: "AIAllure रिव्यू 2026: Live Rooms, कैरेक्टर क्रिएटर, इमेज, वीडियो और कीमतें",
  meta_d: "AIAllure पर हमारी राय: Live Room कॉल, बहुत विस्तृत कैरेक्टर क्रिएटर, इमेज और वीडियो स्टूडियो, उम्र की जाँच और सभी कीमतें (24 घंटे का ट्रायल, Starter, Pro, Power)।",
  crumb: "रिव्यू", h1: "AIAllure रिव्यू: Live Rooms, इमेज, वीडियो और कीमतें",
  intro: "AIAllure सिर्फ़ चैट ऐप नहीं है: यह “Live Room” कॉल, बहुत विस्तृत कैरेक्टर क्रिएटर और इमेज व वीडियो स्टूडियो पर ज़ोर देता है। साइन अप करने से पहले क्या जानना चाहिए, सभी कीमतों के साथ।",
  based: `यह रिव्यू ${SRC} पर Roméo के प्रकाशित पूरे टेस्ट (अगस्त 2026) पर आधारित है, साथ में 11 नवंबर 2026 को aiallure.com पर हमारी अपनी जाँच (कैरेक्टर क्रिएटर, Live Rooms और आधिकारिक कीमत सूची)।`,
  box_t: "संक्षेप में",
  box: "इमेज, वीडियो और कस्टमाइज़ेशन के लिए सबसे पूरे प्लेटफ़ॉर्म में से एक, Live Room कॉल के साथ जो इसे सच में अलग बनाते हैं। बदले में: कुछ 18+ कंटेंट से पहले कैमरे से उम्र की जाँच, महँगे मासिक प्लान और $1.99 का ट्रायल जो रद्द करना भूलने पर सब्सक्रिप्शन बन जाता है।",
  scores: [["फ़्री वर्ज़न", "हाँ (क्रिएटर, चैट, कुछ इमेज)"], ["शुरुआती कीमत", "$19.90/महीना"], ["इमेज और वीडियो", "पेड प्लान में अनलिमिटेड"], ["कॉल", "Live Rooms"]],
  site_score: "प्लेटफ़ॉर्म की रेटिंग (हमारा तरीका)",
  pros_t: "खूबियाँ", cons_t: "कमियाँ",
  pros: ["Live Rooms: कैरेक्टर के साथ वॉइस और वीडियो कॉल",
    "बहुत विस्तृत, मज़ेदार और आसान कैरेक्टर क्रिएटर",
    "बहुत पूरा इमेज और वीडियो स्टूडियो, आसान मोड में भी",
    "टेस्ट में इमेज क्वालिटी की तारीफ़",
    "फ़्री अकाउंट: क्रिएटर, चैट और कुछ इमेज",
    "पेड प्लान में अनलिमिटेड चैट, इमेज, वीडियो और Live Rooms"],
  cons: ["कुछ 18+ कंटेंट से पहले कैमरे से उम्र की जाँच",
    "फ़्री वर्ज़न में वीडियो नहीं",
    "सिर्फ़ चैट के लिए $39.90/महीना का Pro महँगा है",
    "24 घंटे का ट्रायल रद्द न करने पर मासिक प्लान बन जाता है",
    "“अनलिमिटेड” में भी कतारें, इंतज़ार और AllureCoins वाले पेड एक्स्ट्रा",
    "कॉल के निमंत्रण परेशान कर सकते हैं"],
  cta: "AIAllure आज़माएँ", cta_note: "एफ़िलिएट लिंक · 18+",
  toc_t: "विषय-सूची",
  sections: [
  { id: "live", h2: "1. Live Rooms: असली ख़ासियत", body: `
<p>AIAllure पर प्रोफ़ाइल का मुख्य बटन “चैट” नहीं बल्कि <strong>“कॉल”</strong> है। Live Room में कैरेक्टर का चेहरा आधी स्क्रीन पर होता है और बगल में बातचीत: आप आवाज़ चालू कर सकते हैं, लिख सकते हैं या माइक में बोल सकते हैं। प्लेटफ़ॉर्म मिस्ड कॉल भी दिखाता है और शुरू की गई बातचीत फिर से जारी करने का विकल्प देता है।</p>
[[img:live-rooms]]
<p>टेस्टर को आइडिया नया लगा, लेकिन एक काल्पनिक कैरेक्टर का “कॉल करना” थोड़ा दख़ल देने वाला लगा। जो चैट बबल से ज़्यादा मौजूदगी चाहते हैं, उनके लिए यह प्रतिस्पर्धियों से सच्चा फ़र्क है। इस टेस्ट में कई दिनों की याददाश्त नहीं जाँची गई।</p>` },
  { id: "creation", h2: "2. कैरेक्टर बनाना: लगभग एक गेम", body: `
<p>आप महिला या पुरुष चुनते हैं, फिर <strong>रियलिस्टिक</strong> या <strong>एनीमे</strong> स्टाइल।</p>
[[img:creation-style]]
<p>इसके बाद दो रास्ते हैं: <strong>Express</strong>, जिसमें AI पूरा लुक बनाता है, या <strong>Customize</strong>। इसमें आप उम्र (18–24, 25–34, 35–44, 45+), त्वचा का रंग, हेयरस्टाइल (लंबे, छोटे, लहराते, घुंघराले, चोटी, जूड़ा) और बालों का रंग चुनते हैं, और प्रीव्यू के बाद हर डिटेल बदली जा सकती है (चेहरा, आँखें, नाक, होंठ, शरीर…)। आख़िर में नाम और व्यक्तित्व।</p>
[[img:creation-apparence]]
<p><strong>हमारी राय:</strong> कार्ड और प्रोग्रेस बार के साथ, कैरेक्टर बनाना एक छोटे मोबाइल गेम जैसा लगता है, कभी उलझाऊ नहीं होता। AIAllure हर टूल (चैट, इमेज, वीडियो, Live Rooms) में एक ही चेहरा रखने का वादा करता है; टेस्ट पुष्टि करता है कि कैरेक्टर हर जगह साथ रहता है, हालाँकि पोज़ और रोशनी के हिसाब से नतीजा बदलता है।</p>` },
  { id: "images", h2: "3. इमेज और वीडियो: सबसे पूरे स्टूडियो में से एक", body: `
<p>स्टूडियो में <strong>Easy</strong> और <strong>Advanced</strong> मोड हैं। बिना प्रॉम्प्ट लिखे आप सीन, पोज़, हेयरस्टाइल, बालों का रंग और ख़ास एक्शन (कॉफ़ी पीना, नाचना, योग, किस भेजना…) चुन सकते हैं, सब बड़े और साफ़ बटनों से।</p>
<ul>
<li>✅ टेस्ट के अनुसार <strong>बेहतरीन इमेज क्वालिटी</strong>, ख़ासकर चेहरे और बालों में, फ़्री अकाउंट पर भी।</li>
<li>❌ कंप्यूटर पर बनी इमेज बहुत बड़ी और ग़लत क्रॉप में दिखी: क्वालिटी की नहीं, डिस्प्ले की समस्या।</li>
<li>ℹ️ <strong>वीडियो:</strong> फ़्री वर्ज़न में शामिल नहीं (प्रमोशन को छोड़कर)। पेड प्लान में सामान्य वीडियो कतार शामिल है; इंस्टेंट, HD, ऑडियो या एडवांस्ड विकल्पों के लिए AllureCoins लग सकते हैं।</li>
</ul>` },
  { id: "age", h2: "4. 18+ कंटेंट और उम्र की जाँच", body: `
<p>कुछ 18+ कंटेंट से पहले AIAllure <strong>कैमरे से उम्र की जाँच</strong> माँगता है: चेहरा बीच में रखें, पलक झपकाएँ, मुँह खोलें और सिर घुमाएँ। शुरू में अजीब लगता है और खोजबीन धीमी करता है, लेकिन भरोसा देता है: इसकी शर्तों के अनुसार इमेज को रियल-टाइम में उम्र के अनुमान के लिए जाँचा जाता है और फिर हटा दिया जाता है, कोई बायोमेट्रिक टेम्पलेट नहीं रखा जाता।</p>
<p>प्रकाशित नियम सख़्त हैं: सिर्फ़ काल्पनिक वयस्क कैरेक्टर, कम उम्र जैसे दिखने वाले कैरेक्टर, बिना सहमति का कंटेंट और बिना अनुमति असली लोगों की छवि पर रोक। अगर आप दो क्लिक में फ़्री 18+ कंटेंट चाहते हैं, तो AIAllure उसके लिए नहीं है: कुछ एडवांस्ड विकल्प पेड प्लान के लिए हैं।</p>` },
  { id: "prix", h2: "5. कीमतें: 24 घंटे का ट्रायल, Starter, Pro और Power", body: `
<p>11 नवंबर 2026 को आधिकारिक हेल्प सेंटर में देखी गई कीमतें (डॉलर में; देश के हिसाब से सही मुद्रा और राशि भुगतान के समय दिखती है):</p>
[[img:prix]]
<div class="tablewrap"><table class="data avis-t"><thead><tr><th>अवधि</th><th>Starter</th><th>Pro</th><th>Power</th></tr></thead><tbody>
<tr><td>24 घंटे का ट्रायल</td><td>$1.99</td><td>$3.99</td><td>$5.99</td></tr>
<tr><td><strong>1 महीना</strong></td><td><strong>$19.90</strong></td><td>$39.90</td><td>$59.90</td></tr>
<tr><td>3 महीने</td><td>$44.70 ($14.90/महीना)</td><td>$89.70</td><td>$134.70</td></tr>
<tr><td>6 महीने</td><td>$77.40 ($12.90/महीना)</td><td>$149.40</td><td>$221.40</td></tr>
<tr><td>12 महीने</td><td>$118.80 ($9.90/महीना)</td><td>$238.80</td><td>$358.80</td></tr>
<tr><td>लाइफ़टाइम</td><td>$199</td><td>$399</td><td>$599</td></tr>
</tbody></table></div>
<p>तीनों प्लान में अनलिमिटेड चैट, इमेज, वीडियो और Live Rooms शामिल हैं। महँगे प्लान में एक बार में ज़्यादा इमेज (2, 4 या 8), एक साथ ज़्यादा वीडियो (1, 3 या 5), ज़्यादा कैरेक्टर (Starter में 3, बाक़ी में अनलिमिटेड) और ज़्यादा प्राथमिकता मिलती है। “अनलिमिटेड” का मतलब कतारों, इंतज़ार और AllureCoins वाले पेड विकल्पों का ख़त्म होना नहीं है।</p>
<p class="avis-note"><strong>$1.99 वाले ट्रायल से सावधान:</strong> यह 24 घंटे चलता है और फिर अपने आप उससे जुड़ा मासिक प्लान (Starter के लिए $19.90) बन जाता है, अगर पहले रद्द न किया जाए। कई महीनों वाले प्लान का पूरा भुगतान एक साथ होता है। रद्द करने के लिए: Settings, फिर Manage Subscription।</p>
<p>Visa, Mastercard, Apple Pay या Google Pay से भुगतान। AIAllure को Novera Group s.r.o. (प्राग, चेक गणराज्य) चलाता है।</p>` },
  { id: "verdict", h2: "फ़ैसला", body: `
[[img:accueil]]
<p>अगर आप बहुत पर्सनलाइज़्ड कैरेक्टर, ढेर सारी इमेज और वीडियो, और Live Room कॉल चाहते हैं, तो AIAllure सबसे पूरे विकल्पों में से एक है। सिर्फ़ चैट के लिए यह सबसे सस्ता नहीं, और 18+ कंटेंट तक सबसे तेज़ रास्ता भी नहीं। सबसे अच्छा: प्लान चुनने से पहले अपना कैरेक्टर बनाएँ और एक इमेज फ़्री में बनाएँ।</p>
<p>चैट और इमेज पर केंद्रित विकल्प के लिए <a href="candy-ai.html">हमारा Candy AI रिव्यू</a> पढ़ें। फ़ीचर विस्तार से और रेटिंग: <a href="../platform/aiallure.html">हमारा AIAllure पेज</a>।</p>` }
  ],
  faq_t: "अक्सर पूछे जाने वाले सवाल",
  faq: [
    ["क्या AIAllure फ़्री है?", "हाँ, फ़्री अकाउंट से कैरेक्टर बना सकते हैं, चैट कर सकते हैं और कुछ इमेज बना सकते हैं। वीडियो फ़्री में शामिल नहीं, प्रमोशन को छोड़कर।"],
    ["AIAllure की कीमत क्या है?", "11 नवंबर 2026 को: Starter $19.90/महीना, Pro $39.90 और Power $59.90। 12 महीने में Starter $9.90/महीना पड़ता है ($118.80 एक साथ)। लाइफ़टाइम प्लान भी हैं ($199 से)।"],
    ["क्या $1.99 का ट्रायल सिर्फ़ 24 घंटे का है?", "हाँ। उसके बाद, अगर 24 घंटे ख़त्म होने से पहले रद्द न किया जाए, तो यह मासिक प्लान (Starter के लिए $19.90) बन जाता है।"],
    ["AIAllure कैमरे से जाँच क्यों माँगता है?", "यह कुछ 18+ कंटेंट से पहले उम्र की जाँच है। AIAllure के अनुसार इमेज रियल-टाइम में जाँची जाती है और फिर हटा दी जाती है, कोई बायोमेट्रिक टेम्पलेट नहीं रखा जाता।"],
    ["Live Rooms क्या हैं?", "कैरेक्टर के साथ कॉल: उसका चेहरा चैट के बगल में बड़ा दिखता है, और आप लिख सकते हैं या माइक में बोल सकते हैं।"],
    ["क्या इमेज और वीडियो सच में अनलिमिटेड हैं?", "पेड प्लान में कोई दैनिक या मासिक सीमा नहीं, लेकिन कतारें, इंतज़ार और एक बार की सीमाएँ रहती हैं। कुछ विकल्प (HD, इंस्टेंट, ऑडियो) के लिए AllureCoins लगते हैं।"]
  ],
  end_t: "आज़माना चाहते हैं?", end: "अपना कैरेक्टर बनाएँ और पहली इमेज फ़्री में बनाएँ।",
  pl_link: "हमारा पूरा रिव्यू पढ़ें",
  cap: { "live-rooms": "Live Rooms: वॉइस या वीडियो कॉल के लिए उपलब्ध कैरेक्टर।",
    "creation-style": "चरण 1: महिला या पुरुष, रियलिस्टिक या एनीमे स्टाइल में।",
    "creation-apparence": "Customize मोड: उम्र, त्वचा का रंग, हेयरस्टाइल, बालों का रंग…",
    "prix": "आधिकारिक कीमत सूची (AIAllure हेल्प सेंटर, 11 नवंबर 2026)।",
    "accueil": "AIAllure का होम पेज, लाइव कॉल पर केंद्रित।" },
  src: "स्क्रीनशॉट: aiallure.com, 11 नवंबर 2026 · टेस्ट का स्रोत: virtualaipartner.com"
}
};
