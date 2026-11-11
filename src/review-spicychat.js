/* SpicyChat AI review page (review/spicychat-ai.html), 6 languages.
   Based on a partner's video review (transcript sent by the owner, November 2026) plus our own checks on spicychat.ai on
   2026-11-11 (official plans and prices, feature table, catalogue size). The video's prices were outdated: we use the
   official ones. We do not claim our own test. */
const T3 = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-11", file: "review/spicychat-ai.html", dir: "avis-spicychat", cover: "accueil", site: "https://spicychat.ai",
img: { "accueil": [800, 800], "prix": [800, 710] },

fr: {
  meta_t: "Avis SpicyChat AI 2026 : jeu de rôle sans filtre, mémoire, version gratuite et prix",
  meta_d: "Notre avis sur SpicyChat AI : jeux de rôle adultes sans refus automatiques, plus de 385 000 personnages, lorebooks et mémoire, images et voix, version gratuite et prix des offres (5,95 €, 19,95 €, 29,95 €).",
  crumb: "Avis", h1: "Avis SpicyChat AI : le roi du jeu de rôle sans filtre",
  intro: "Tu as déjà passé une heure à construire une histoire avec une IA pour tomber sur « Je ne peux pas répondre à cette demande » ? SpicyChat est conçu pour éviter ça : une plateforme de jeu de rôle pour adultes, avec une énorme bibliothèque de personnages créés par la communauté. Voici ce qu'elle vaut, gratuite comme payante.",
  based: "Cet avis s'appuie sur la vidéo de test d'un partenaire, complétée par nos propres vérifications sur spicychat.ai le 11 novembre 2026. Les prix cités dans la vidéo n'étant plus à jour, nous indiquons ceux du site officiel.",
  box_t: "En bref",
  box: "La meilleure option pour le jeu de rôle et la conversation : peu de refus automatiques, une bibliothèque gigantesque, des lorebooks et une version gratuite réellement utilisable. En revanche, la mémoire dépend beaucoup de l'offre, les images et la voix sont réservées aux abonnements les plus chers, et le générateur d'images est moins précis que celui d'outils spécialisés.",
  scores: [["Version gratuite", "Oui, messages illimités"], ["Prix d'entrée", "5,95 €/mois"], ["Mémoire", "4K à 32K selon l'offre"], ["Personnages", "385 000+"]],
  site_score: "Note de la plateforme (notre méthode)",
  pros_t: "Points forts", cons_t: "Points faibles",
  pros: ["Jeu de rôle adulte sans refus automatiques à chaque scène",
    "Plus de 385 000 personnages créés par la communauté",
    "Version gratuite avec messages illimités",
    "Lorebooks pour fixer un univers, des lieux et des personnages secondaires",
    "Mémoire sémantique 2.0 et contexte jusqu'à 32K",
    "Offre d'entrée à 5,95 €/mois, -17 % en paiement annuel"],
  cons: ["Gratuit : publicités, files d'attente aux heures de pointe, mémoire courte",
    "Images dans le chat seulement à partir de True Supporter (19,95 €)",
    "Voix (TTS) seulement avec I'm All In (29,95 €)",
    "Générateur d'images moins précis sur l'anatomie",
    "C'est à toi de fixer tes limites : l'IA ne t'arrêtera pas",
    "Qualité inégale d'un personnage communautaire à l'autre"],
  cta: "Essayer SpicyChat", cta_note: "Lien affilié · 18+",
  toc_t: "Sommaire",
  sections: [
  { id: "quoi", h2: "1. SpicyChat, c'est quoi ?", body: `
<p>SpicyChat est une plateforme de <strong>jeu de rôle et de conversation pour adultes</strong>. Elle s'appuie sur ses propres modèles d'IA, pensés pour la narration adulte, plutôt que sur un modèle grand public bridé : l'IA suit le scénario que tu lances, romance, fantasy sombre ou histoire très intime, sans te faire la morale. Les règles communautaires de la plateforme restent bien sûr en vigueur.</p>
[[img:accueil]]
<p>Le point fort, c'est la <strong>bibliothèque</strong> : plus de 385 000 personnages créés par la communauté le jour de notre visite, filtrables par thème (romance, scénario, anime, homme, femme…), avec un interrupteur NSFW. Tu peux aussi créer tes propres personnages, tes « personas » (le rôle que tu joues), des groupes et des lorebooks.</p>
<p class="avis-note">Revers de la médaille : sans garde-fou automatique, c'est à toi de fixer tes limites et de diriger l'histoire.</p>` },
  { id: "memoire", h2: "2. Mémoire et lorebooks : la fin de la mémoire de poisson rouge", body: `
<p>Le défaut le plus courant des compagnons IA, c'est d'oublier ton prénom ou un détail important au bout de dix messages. SpicyChat s'y attaque de deux façons :</p>
<ul>
<li><strong>Mémoire sémantique 2.0</strong> (à partir de True Supporter) : la conversation est résumée et archivée, et l'IA s'y réfère avant de répondre. Ton personnage se souvient de vos rendez-vous, de vos blagues et de votre relation.</li>
<li><strong>Lorebooks</strong> : tu y inscris des lieux, des personnages secondaires et des règles d'univers que l'IA respecte des heures plus tard. Idéal pour un jeu de rôle au long cours.</li>
<li><strong>Contexte</strong> : 4K de mémoire immédiate avec Get a Taste, 8K avec True Supporter et 32K avec I'm All In.</li>
</ul>
<p>En version gratuite, la mémoire « se réinitialise » beaucoup plus vite : c'est la principale différence avec les offres payantes.</p>` },
  { id: "medias", h2: "3. Images, vision et voix", body: `
<ul>
<li><strong>Images dans le chat :</strong> demande un selfie ou une illustration de la scène en pleine conversation, et le générateur crée une image qui colle à l'histoire. Illimité à partir de True Supporter.</li>
<li><strong>Vision :</strong> d'après la vidéo, tu peux aussi envoyer une image (un lieu, une tenue) et l'IA réagit à ce qu'elle voit.</li>
<li><strong>Voix :</strong> la synthèse vocale lit les réponses avec une voix cohérente, uniquement avec I'm All In.</li>
</ul>
<p>Limite à connaître : la plateforme privilégie le texte, et son générateur d'images produit parfois des détails anatomiques incohérents, moins précis que des outils dédiés comme <a href="seduced-ai.html">Seduced AI</a> ou <a href="candy-ai.html">Candy AI</a>.</p>` },
  { id: "prix", h2: "4. Version gratuite et prix", body: `
<p>La version gratuite offre des <strong>messages illimités</strong> : ce n'est pas un piège qui bloque au bout de cinq messages. En contrepartie : publicités, files d'attente aux heures de pointe et mémoire courte. Prix relevés sur spicychat.ai le 11 novembre 2026 :</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["Mensuel", "5,95 €/mois", "<strong>19,95 €/mois</strong>", "29,95 €/mois"],
  ["Annuel (-17 %)", "60 €/an", "199,95 €/an", "299,95 €/an"],
  ["Sans pub ni file d'attente", "✅", "✅", "✅"],
  ["Contexte (mémoire)", "4K", "8K", "32K"],
  ["Mémoire sémantique 2.0", "—", "✅", "✅"],
  ["Images dans le chat", "—", "✅ illimitées", "✅ + chatbots privés"],
  ["Modèles avancés (SpicyXL…)", "—", "modèles en plus", "✅ les meilleurs"],
  ["Voix (TTS)", "—", "—", "✅"],
  ["Personas", "10", "50", "100"]])}
<p><strong>Notre conseil :</strong> pour jouer sans attente et garder une mémoire correcte, <strong>True Supporter</strong> est le meilleur rapport qualité-prix. I'm All In vise les gros utilisateurs qui veulent les meilleurs modèles, 32K de mémoire et la voix.</p>
<p>SpicyChat est exploité par NextDay AI (Montréal, Delaware et Limassol).</p>` },
  { id: "verdict", h2: "Verdict : face à la concurrence", body: `
<p>Face à Character.ai, dont les filtres rendent le jeu de rôle adulte impossible, SpicyChat gagne haut la main sur la liberté. Face à <a href="candy-ai.html">Candy AI</a>, plus fort sur les images et les visuels, SpicyChat l'emporte sur la profondeur du jeu de rôle, le nombre de personnages et la version gratuite.</p>
<p>En résumé : pour une histoire longue et libre, SpicyChat est le choix numéro un. Pour de belles images et des appels, regarde plutôt Candy AI ou <a href="aiallure.html">AIAllure</a>. Fonctions en détail et note : <a href="../platform/spicychat.html">notre fiche SpicyChat AI</a>.</p>` }
  ],
  faq_t: "Questions fréquentes",
  faq: [
    ["SpicyChat est-il gratuit ?", "Oui. La version gratuite offre des messages illimités, avec des publicités, des files d'attente aux heures de pointe et une mémoire plus courte."],
    ["Combien coûte SpicyChat ?", "Le 11 novembre 2026 : Get a Taste à 5,95 €/mois, True Supporter à 19,95 €/mois et I'm All In à 29,95 €/mois, ou 60 €, 199,95 € et 299,95 € par an (-17 %)."],
    ["SpicyChat a-t-il des filtres ?", "Il est conçu pour le jeu de rôle adulte sans refus automatiques à chaque scène, mais les règles communautaires de la plateforme s'appliquent."],
    ["SpicyChat se souvient-il des conversations ?", "Oui, surtout avec les offres payantes : mémoire sémantique 2.0 à partir de True Supporter, lorebooks pour fixer un univers, et jusqu'à 32K de contexte avec I'm All In."],
    ["Peut-on générer des images sur SpicyChat ?", "Oui, en pleine conversation, de façon illimitée à partir de True Supporter. Le rendu est parfois moins précis qu'un générateur d'images dédié."],
    ["SpicyChat a-t-il une voix ?", "Oui, la synthèse vocale lit les réponses de l'IA, uniquement avec l'offre I'm All In."]
  ],
  end_t: "Envie de lancer ta première histoire ?", end: "Commence gratuitement avec un des 385 000 personnages, puis passe à True Supporter si tu veux plus de mémoire.",
  pl_link: "Lire notre avis complet",
  cap: { "accueil": "L'accueil de SpicyChat : plus de 385 000 personnages, avec un interrupteur NSFW.",
    "prix": "Les offres sur spicychat.ai (11 novembre 2026)." },
  src: "Captures : spicychat.ai, 11 novembre 2026 · Source du test : vidéo d'un partenaire"
},

en: {
  meta_t: "SpicyChat AI Review 2026: Unfiltered Roleplay, Memory, Free Tier and Pricing",
  meta_d: "Our SpicyChat AI review: adult roleplay without automatic refusals, 385,000+ characters, lorebooks and memory, images and voice, the free tier and plan prices (€5.95, €19.95, €29.95).",
  crumb: "Review", h1: "SpicyChat AI Review: the King of Unfiltered Roleplay",
  intro: "Ever spent an hour building a story with an AI only to hit “I can't fulfil this request”? SpicyChat is built to avoid that: an adult roleplay platform with a huge library of community-made characters. Here is what it is worth, free or paid.",
  based: "This review is based on a partner's video review, plus our own checks on spicychat.ai on 11 November 2026. The prices in the video were out of date, so we show the ones from the official site.",
  box_t: "In short",
  box: "The best option for roleplay and conversation: few automatic refusals, a giant library, lorebooks and a genuinely usable free tier. On the other hand, memory depends heavily on the plan, images and voice are reserved for the pricier plans, and the image generator is less precise than dedicated tools.",
  scores: [["Free version", "Yes, unlimited messages"], ["Starting price", "€5.95/month"], ["Memory", "4K to 32K depending on plan"], ["Characters", "385,000+"]],
  site_score: "Platform rating (our method)",
  pros_t: "Strengths", cons_t: "Weaknesses",
  pros: ["Adult roleplay without automatic refusals at every scene",
    "385,000+ community-made characters",
    "Free tier with unlimited messages",
    "Lorebooks to set a world, places and side characters",
    "Semantic Memory 2.0 and up to 32K context",
    "Entry plan at €5.95/month, 17% off with annual billing"],
  cons: ["Free: ads, queues at peak times, short memory",
    "Chat images only from True Supporter (€19.95)",
    "Voice (TTS) only with I'm All In (€29.95)",
    "Image generator less precise on anatomy",
    "You set your own limits: the AI will not stop you",
    "Quality varies from one community character to another"],
  cta: "Try SpicyChat", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "quoi", h2: "1. What is SpicyChat?", body: `
<p>SpicyChat is an <strong>adult roleplay and conversation platform</strong>. It runs its own AI models, built for adult storytelling, instead of a restricted mainstream model: the AI follows whatever scenario you start, romance, dark fantasy or a very intimate story, without lecturing you. The platform's community rules still apply, of course.</p>
[[img:accueil]]
<p>Its big strength is the <strong>library</strong>: over 385,000 community characters on the day we visited, filterable by theme (romance, scenario, anime, male, female…), with an NSFW toggle. You can also create your own characters, your “personas” (the role you play), groups and lorebooks.</p>
<p class="avis-note">The flip side: with no automatic guardrails, it is up to you to set your limits and steer the story.</p>` },
  { id: "memoire", h2: "2. Memory and lorebooks: the end of goldfish memory", body: `
<p>The most common flaw of AI companions is forgetting your name or a key detail after ten messages. SpicyChat tackles it in two ways:</p>
<ul>
<li><strong>Semantic Memory 2.0</strong> (from True Supporter): the conversation is summarised and archived, and the AI checks it before replying. Your companion remembers your dates, your jokes and your relationship.</li>
<li><strong>Lorebooks</strong>: you record places, side characters and world rules that the AI respects hours later. Ideal for long campaigns.</li>
<li><strong>Context</strong>: 4K of immediate memory with Get a Taste, 8K with True Supporter and 32K with I'm All In.</li>
</ul>
<p>On the free tier, memory “resets” much faster: that is the main difference from the paid plans.</p>` },
  { id: "medias", h2: "3. Images, vision and voice", body: `
<ul>
<li><strong>Chat images:</strong> ask for a selfie or a scene illustration mid-conversation, and the generator creates a picture that matches the story. Unlimited from True Supporter.</li>
<li><strong>Vision:</strong> according to the video, you can also send an image (a place, an outfit) and the AI reacts to what it sees.</li>
<li><strong>Voice:</strong> text-to-speech reads replies in a consistent voice, only with I'm All In.</li>
</ul>
<p>One limit to know: the platform puts text first, and its image generator sometimes produces inconsistent anatomy, less precise than dedicated tools such as <a href="seduced-ai.html">Seduced AI</a> or <a href="candy-ai.html">Candy AI</a>.</p>` },
  { id: "prix", h2: "4. Free tier and pricing", body: `
<p>The free tier gives you <strong>unlimited messages</strong>: it is not a trap that locks you out after five messages. The trade-offs: ads, queues at peak times and short memory. Prices checked on spicychat.ai on 11 November 2026 (French site, in euros):</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["Monthly", "€5.95/month", "<strong>€19.95/month</strong>", "€29.95/month"],
  ["Annual (-17%)", "€60/year", "€199.95/year", "€299.95/year"],
  ["No ads, no queues", "✅", "✅", "✅"],
  ["Context (memory)", "4K", "8K", "32K"],
  ["Semantic Memory 2.0", "—", "✅", "✅"],
  ["Chat images", "—", "✅ unlimited", "✅ + private chatbots"],
  ["Advanced models (SpicyXL…)", "—", "extra models", "✅ the best ones"],
  ["Voice (TTS)", "—", "—", "✅"],
  ["Personas", "10", "50", "100"]])}
<p><strong>Our advice:</strong> to play without waiting and keep decent memory, <strong>True Supporter</strong> is the best value. I'm All In targets heavy users who want the best models, 32K memory and voice.</p>
<p>SpicyChat is run by NextDay AI (Montreal, Delaware and Limassol).</p>` },
  { id: "verdict", h2: "Verdict: against the competition", body: `
<p>Against Character.ai, whose filters make adult roleplay impossible, SpicyChat wins hands down on freedom. Against <a href="candy-ai.html">Candy AI</a>, stronger on images and visuals, SpicyChat wins on roleplay depth, the number of characters and the free tier.</p>
<p>In short: for a long, free-form story, SpicyChat is the number one choice. For beautiful images and calls, look at Candy AI or <a href="aiallure.html">AIAllure</a> instead. Features in detail and rating: <a href="../platform/spicychat.html">our SpicyChat AI page</a>.</p>` }
  ],
  faq_t: "Frequently asked questions",
  faq: [
    ["Is SpicyChat free?", "Yes. The free tier gives unlimited messages, with ads, queues at peak times and shorter memory."],
    ["How much does SpicyChat cost?", "On 11 November 2026: Get a Taste at €5.95/month, True Supporter at €19.95/month and I'm All In at €29.95/month, or €60, €199.95 and €299.95 per year (-17%)."],
    ["Does SpicyChat have filters?", "It is designed for adult roleplay without automatic refusals at every scene, but the platform's community rules apply."],
    ["Does SpicyChat remember conversations?", "Yes, especially on paid plans: Semantic Memory 2.0 from True Supporter, lorebooks to set a world, and up to 32K of context with I'm All In."],
    ["Can you generate images on SpicyChat?", "Yes, mid-conversation, unlimited from True Supporter. The result is sometimes less precise than a dedicated image generator."],
    ["Does SpicyChat have a voice?", "Yes, text-to-speech reads the AI's replies, only on the I'm All In plan."]
  ],
  end_t: "Ready to start your first story?", end: "Start free with one of the 385,000 characters, then move to True Supporter if you want more memory.",
  pl_link: "Read our full review",
  cap: { "accueil": "SpicyChat's home page: 385,000+ characters, with an NSFW toggle.",
    "prix": "The plans on spicychat.ai (11 November 2026)." },
  src: "Screenshots: spicychat.ai, 11 November 2026 · Test source: a partner's video"
},

es: {
  meta_t: "Opinión de SpicyChat AI 2026: rol sin filtros, memoria, versión gratis y precios",
  meta_d: "Nuestra opinión sobre SpicyChat AI: rol para adultos sin rechazos automáticos, más de 385 000 personajes, lorebooks y memoria, imágenes y voz, versión gratis y precios (5,95 €, 19,95 €, 29,95 €).",
  crumb: "Opinión", h1: "Opinión de SpicyChat AI: el rey del rol sin filtros",
  intro: "¿Alguna vez has pasado una hora creando una historia con una IA para acabar leyendo «No puedo responder a esta solicitud»? SpicyChat está pensado para evitarlo: una plataforma de rol para adultos con una enorme biblioteca de personajes creados por la comunidad. Esto es lo que vale, gratis o de pago.",
  based: "Esta opinión se basa en la prueba en vídeo de un socio, completada con nuestras propias comprobaciones en spicychat.ai el 11 de noviembre de 2026. Los precios del vídeo estaban desfasados, así que indicamos los de la web oficial.",
  box_t: "En resumen",
  box: "La mejor opción para el rol y la conversación: pocos rechazos automáticos, una biblioteca gigantesca, lorebooks y una versión gratis de verdad usable. En cambio, la memoria depende mucho del plan, las imágenes y la voz son de los planes más caros, y el generador de imágenes es menos preciso que las herramientas especializadas.",
  scores: [["Versión gratuita", "Sí, mensajes ilimitados"], ["Precio de entrada", "5,95 €/mes"], ["Memoria", "de 4K a 32K según el plan"], ["Personajes", "385 000+"]],
  site_score: "Nota de la plataforma (nuestro método)",
  pros_t: "Puntos fuertes", cons_t: "Puntos débiles",
  pros: ["Rol para adultos sin rechazos automáticos en cada escena",
    "Más de 385 000 personajes creados por la comunidad",
    "Versión gratis con mensajes ilimitados",
    "Lorebooks para fijar un mundo, lugares y personajes secundarios",
    "Memoria semántica 2.0 y contexto de hasta 32K",
    "Plan de entrada a 5,95 €/mes, -17 % pagando al año"],
  cons: ["Gratis: anuncios, colas en horas punta y memoria corta",
    "Imágenes en el chat solo desde True Supporter (19,95 €)",
    "Voz (TTS) solo con I'm All In (29,95 €)",
    "Generador de imágenes menos preciso en la anatomía",
    "Los límites los pones tú: la IA no te frenará",
    "Calidad desigual entre personajes de la comunidad"],
  cta: "Probar SpicyChat", cta_note: "Enlace de afiliado · 18+",
  toc_t: "Índice",
  sections: [
  { id: "quoi", h2: "1. ¿Qué es SpicyChat?", body: `
<p>SpicyChat es una plataforma de <strong>rol y conversación para adultos</strong>. Usa sus propios modelos de IA, pensados para la narración adulta, en lugar de un modelo generalista limitado: la IA sigue el escenario que propongas, romance, fantasía oscura o una historia muy íntima, sin sermones. Las normas de la comunidad de la plataforma siguen vigentes, claro.</p>
[[img:accueil]]
<p>Su gran baza es la <strong>biblioteca</strong>: más de 385 000 personajes de la comunidad el día de nuestra visita, filtrables por tema (romance, escenario, anime, hombre, mujer…), con un interruptor NSFW. También puedes crear tus propios personajes, tus «personas» (el papel que interpretas), grupos y lorebooks.</p>
<p class="avis-note">La otra cara: sin barreras automáticas, te toca a ti poner tus límites y dirigir la historia.</p>` },
  { id: "memoire", h2: "2. Memoria y lorebooks: adiós a la memoria de pez", body: `
<p>El fallo más común de los compañeros IA es olvidar tu nombre o un detalle clave a los diez mensajes. SpicyChat lo ataca de dos formas:</p>
<ul>
<li><strong>Memoria semántica 2.0</strong> (desde True Supporter): la conversación se resume y se archiva, y la IA la consulta antes de responder. Tu personaje recuerda vuestras citas, vuestras bromas y vuestra relación.</li>
<li><strong>Lorebooks</strong>: apuntas lugares, personajes secundarios y reglas del mundo que la IA respeta horas después. Ideal para partidas largas.</li>
<li><strong>Contexto</strong>: 4K de memoria inmediata con Get a Taste, 8K con True Supporter y 32K con I'm All In.</li>
</ul>
<p>En la versión gratis, la memoria «se reinicia» mucho antes: es la principal diferencia con los planes de pago.</p>` },
  { id: "medias", h2: "3. Imágenes, visión y voz", body: `
<ul>
<li><strong>Imágenes en el chat:</strong> pide un selfi o una ilustración de la escena en plena conversación, y el generador crea una imagen acorde con la historia. Ilimitadas desde True Supporter.</li>
<li><strong>Visión:</strong> según el vídeo, también puedes enviar una imagen (un lugar, un atuendo) y la IA reacciona a lo que ve.</li>
<li><strong>Voz:</strong> la síntesis de voz lee las respuestas con una voz coherente, solo con I'm All In.</li>
</ul>
<p>Un límite a tener en cuenta: la plataforma prioriza el texto, y su generador de imágenes a veces produce detalles anatómicos incoherentes, menos precisos que herramientas dedicadas como <a href="seduced-ai.html">Seduced AI</a> o <a href="candy-ai.html">Candy AI</a>.</p>` },
  { id: "prix", h2: "4. Versión gratis y precios", body: `
<p>La versión gratis ofrece <strong>mensajes ilimitados</strong>: no es una trampa que te bloquea a los cinco mensajes. A cambio: anuncios, colas en horas punta y memoria corta. Precios consultados en spicychat.ai el 11 de noviembre de 2026:</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["Mensual", "5,95 €/mes", "<strong>19,95 €/mes</strong>", "29,95 €/mes"],
  ["Anual (-17 %)", "60 €/año", "199,95 €/año", "299,95 €/año"],
  ["Sin anuncios ni colas", "✅", "✅", "✅"],
  ["Contexto (memoria)", "4K", "8K", "32K"],
  ["Memoria semántica 2.0", "—", "✅", "✅"],
  ["Imágenes en el chat", "—", "✅ ilimitadas", "✅ + chatbots privados"],
  ["Modelos avanzados (SpicyXL…)", "—", "modelos extra", "✅ los mejores"],
  ["Voz (TTS)", "—", "—", "✅"],
  ["Personas", "10", "50", "100"]])}
<p><strong>Nuestro consejo:</strong> para jugar sin esperas y con una memoria decente, <strong>True Supporter</strong> es la mejor relación calidad-precio. I'm All In es para usuarios intensivos que quieren los mejores modelos, 32K de memoria y la voz.</p>
<p>SpicyChat pertenece a NextDay AI (Montreal, Delaware y Limasol).</p>` },
  { id: "verdict", h2: "Veredicto: frente a la competencia", body: `
<p>Frente a Character.ai, cuyos filtros hacen imposible el rol para adultos, SpicyChat gana de calle en libertad. Frente a <a href="candy-ai.html">Candy AI</a>, más fuerte en imágenes y visuales, SpicyChat gana en profundidad de rol, número de personajes y versión gratis.</p>
<p>En resumen: para una historia larga y libre, SpicyChat es la primera opción. Para imágenes bonitas y llamadas, mira mejor Candy AI o <a href="aiallure.html">AIAllure</a>. Funciones en detalle y nota: <a href="../platform/spicychat.html">nuestra ficha de SpicyChat AI</a>.</p>` }
  ],
  faq_t: "Preguntas frecuentes",
  faq: [
    ["¿SpicyChat es gratis?", "Sí. La versión gratis ofrece mensajes ilimitados, con anuncios, colas en horas punta y una memoria más corta."],
    ["¿Cuánto cuesta SpicyChat?", "El 11 de noviembre de 2026: Get a Taste a 5,95 €/mes, True Supporter a 19,95 €/mes e I'm All In a 29,95 €/mes, o 60 €, 199,95 € y 299,95 € al año (-17 %)."],
    ["¿SpicyChat tiene filtros?", "Está pensado para el rol adulto sin rechazos automáticos en cada escena, pero se aplican las normas de la comunidad de la plataforma."],
    ["¿SpicyChat recuerda las conversaciones?", "Sí, sobre todo en los planes de pago: memoria semántica 2.0 desde True Supporter, lorebooks para fijar un mundo y hasta 32K de contexto con I'm All In."],
    ["¿Se pueden generar imágenes en SpicyChat?", "Sí, en plena conversación, de forma ilimitada desde True Supporter. El resultado a veces es menos preciso que un generador de imágenes dedicado."],
    ["¿SpicyChat tiene voz?", "Sí, la síntesis de voz lee las respuestas de la IA, solo con el plan I'm All In."]
  ],
  end_t: "¿Listo para tu primera historia?", end: "Empieza gratis con uno de los 385 000 personajes y pasa a True Supporter si quieres más memoria.",
  pl_link: "Leer nuestra opinión completa",
  cap: { "accueil": "La página de inicio de SpicyChat: más de 385 000 personajes, con un interruptor NSFW.",
    "prix": "Los planes en spicychat.ai (11 de noviembre de 2026)." },
  src: "Capturas: spicychat.ai, 11 de noviembre de 2026 · Fuente de la prueba: vídeo de un socio"
},

de: {
  meta_t: "SpicyChat AI Test 2026: Rollenspiel ohne Filter, Gedächtnis, Gratisversion und Preise",
  meta_d: "Unsere Meinung zu SpicyChat AI: Rollenspiel für Erwachsene ohne automatische Ablehnungen, über 385.000 Charaktere, Lorebooks und Gedächtnis, Bilder und Stimme, Gratisversion und Preise (5,95 €, 19,95 €, 29,95 €).",
  crumb: "Test", h1: "SpicyChat AI im Test: der König des ungefilterten Rollenspiels",
  intro: "Schon mal eine Stunde an einer Geschichte mit einer KI gebaut und dann „Ich kann diese Anfrage nicht erfüllen“ gelesen? SpicyChat soll genau das verhindern: eine Rollenspiel-Plattform für Erwachsene mit einer riesigen Bibliothek von Community-Charakteren. Hier steht, was sie taugt, gratis wie bezahlt.",
  based: "Dieser Test stützt sich auf das Testvideo eines Partners, ergänzt durch unsere eigenen Prüfungen auf spicychat.ai am 11. November 2026. Die Preise im Video waren veraltet, daher nennen wir die der offiziellen Seite.",
  box_t: "Kurz gesagt",
  box: "Die beste Wahl für Rollenspiel und Unterhaltung: wenige automatische Ablehnungen, eine gigantische Bibliothek, Lorebooks und eine wirklich nutzbare Gratisversion. Dafür hängt das Gedächtnis stark vom Abo ab, Bilder und Stimme gibt es nur in den teureren Abos, und der Bildgenerator ist ungenauer als spezialisierte Werkzeuge.",
  scores: [["Gratisversion", "Ja, unbegrenzte Nachrichten"], ["Einstiegspreis", "5,95 €/Monat"], ["Gedächtnis", "4K bis 32K je nach Abo"], ["Charaktere", "385.000+"]],
  site_score: "Bewertung der Plattform (unsere Methode)",
  pros_t: "Stärken", cons_t: "Schwächen",
  pros: ["Rollenspiel für Erwachsene ohne automatische Ablehnung bei jeder Szene",
    "Über 385.000 Charaktere aus der Community",
    "Gratisversion mit unbegrenzten Nachrichten",
    "Lorebooks für Welt, Orte und Nebenfiguren",
    "Semantisches Gedächtnis 2.0 und bis zu 32K Kontext",
    "Einstiegsabo für 5,95 €/Monat, -17 % bei jährlicher Zahlung"],
  cons: ["Gratis: Werbung, Warteschlangen zu Stoßzeiten, kurzes Gedächtnis",
    "Bilder im Chat erst ab True Supporter (19,95 €)",
    "Stimme (TTS) nur mit I'm All In (29,95 €)",
    "Bildgenerator ungenauer bei der Anatomie",
    "Grenzen setzt du selbst: Die KI hält dich nicht auf",
    "Qualität schwankt von Community-Charakter zu Community-Charakter"],
  cta: "SpicyChat testen", cta_note: "Affiliate-Link · 18+",
  toc_t: "Inhalt",
  sections: [
  { id: "quoi", h2: "1. Was ist SpicyChat?", body: `
<p>SpicyChat ist eine Plattform für <strong>Rollenspiel und Unterhaltung für Erwachsene</strong>. Sie nutzt eigene KI-Modelle, gemacht für erwachsenes Erzählen, statt eines eingeschränkten Mainstream-Modells: Die KI folgt jedem Szenario, das du startest, ob Romanze, düstere Fantasy oder eine sehr intime Geschichte, ohne Belehrungen. Die Community-Regeln der Plattform gelten natürlich weiterhin.</p>
[[img:accueil]]
<p>Die große Stärke ist die <strong>Bibliothek</strong>: am Tag unseres Besuchs über 385.000 Community-Charaktere, filterbar nach Thema (Romanze, Szenario, Anime, Mann, Frau…), mit NSFW-Schalter. Du kannst auch eigene Charaktere, „Personas“ (die Rolle, die du spielst), Gruppen und Lorebooks erstellen.</p>
<p class="avis-note">Die Kehrseite: Ohne automatische Schranken musst du selbst Grenzen setzen und die Geschichte lenken.</p>` },
  { id: "memoire", h2: "2. Gedächtnis und Lorebooks: Schluss mit dem Goldfisch-Gedächtnis", body: `
<p>Der häufigste Fehler von KI-Begleitern: Nach zehn Nachrichten ist dein Name oder ein wichtiges Detail vergessen. SpicyChat geht das auf zwei Wegen an:</p>
<ul>
<li><strong>Semantisches Gedächtnis 2.0</strong> (ab True Supporter): Das Gespräch wird zusammengefasst und archiviert, und die KI greift vor jeder Antwort darauf zurück. Dein Charakter erinnert sich an eure Dates, Insider-Witze und eure Beziehung.</li>
<li><strong>Lorebooks</strong>: Hier hältst du Orte, Nebenfiguren und Weltregeln fest, die die KI noch Stunden später einhält. Ideal für lange Kampagnen.</li>
<li><strong>Kontext</strong>: 4K Sofortgedächtnis mit Get a Taste, 8K mit True Supporter und 32K mit I'm All In.</li>
</ul>
<p>In der Gratisversion „setzt“ sich das Gedächtnis viel schneller zurück: der Hauptunterschied zu den Abos.</p>` },
  { id: "medias", h2: "3. Bilder, Bilderkennung und Stimme", body: `
<ul>
<li><strong>Bilder im Chat:</strong> Bitte mitten im Gespräch um ein Selfie oder eine Szenenillustration, und der Generator erstellt ein passendes Bild. Unbegrenzt ab True Supporter.</li>
<li><strong>Bilderkennung:</strong> Laut Video kannst du auch ein Bild schicken (einen Ort, ein Outfit), und die KI reagiert darauf.</li>
<li><strong>Stimme:</strong> Die Sprachausgabe liest Antworten mit gleichbleibender Stimme vor, nur mit I'm All In.</li>
</ul>
<p>Eine Grenze: Die Plattform setzt auf Text, und ihr Bildgenerator liefert manchmal unstimmige Anatomie, ungenauer als spezialisierte Werkzeuge wie <a href="seduced-ai.html">Seduced AI</a> oder <a href="candy-ai.html">Candy AI</a>.</p>` },
  { id: "prix", h2: "4. Gratisversion und Preise", body: `
<p>Die Gratisversion bietet <strong>unbegrenzte Nachrichten</strong>: keine Falle, die nach fünf Nachrichten sperrt. Dafür gibt es Werbung, Warteschlangen zu Stoßzeiten und ein kurzes Gedächtnis. Preise am 11. November 2026 auf spicychat.ai abgelesen:</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["Monatlich", "5,95 €/Monat", "<strong>19,95 €/Monat</strong>", "29,95 €/Monat"],
  ["Jährlich (-17 %)", "60 €/Jahr", "199,95 €/Jahr", "299,95 €/Jahr"],
  ["Ohne Werbung und Warteschlange", "✅", "✅", "✅"],
  ["Kontext (Gedächtnis)", "4K", "8K", "32K"],
  ["Semantisches Gedächtnis 2.0", "—", "✅", "✅"],
  ["Bilder im Chat", "—", "✅ unbegrenzt", "✅ + private Chatbots"],
  ["Erweiterte Modelle (SpicyXL…)", "—", "zusätzliche Modelle", "✅ die besten"],
  ["Stimme (TTS)", "—", "—", "✅"],
  ["Personas", "10", "50", "100"]])}
<p><strong>Unser Tipp:</strong> Um ohne Warten zu spielen und ein ordentliches Gedächtnis zu haben, bietet <strong>True Supporter</strong> das beste Preis-Leistungs-Verhältnis. I'm All In richtet sich an Vielnutzer, die die besten Modelle, 32K Gedächtnis und die Stimme wollen.</p>
<p>Betreiber von SpicyChat ist NextDay AI (Montreal, Delaware und Limassol).</p>` },
  { id: "verdict", h2: "Fazit: im Vergleich zur Konkurrenz", body: `
<p>Gegen Character.ai, dessen Filter Rollenspiel für Erwachsene unmöglich machen, gewinnt SpicyChat bei der Freiheit klar. Gegen <a href="candy-ai.html">Candy AI</a>, das bei Bildern und Optik stärker ist, punktet SpicyChat bei der Tiefe des Rollenspiels, der Zahl der Charaktere und der Gratisversion.</p>
<p>Kurz: Für eine lange, freie Geschichte ist SpicyChat die Nummer eins. Für schöne Bilder und Anrufe eher Candy AI oder <a href="aiallure.html">AIAllure</a>. Funktionen im Detail und Bewertung: <a href="../platform/spicychat.html">unsere SpicyChat-AI-Seite</a>.</p>` }
  ],
  faq_t: "Häufige Fragen",
  faq: [
    ["Ist SpicyChat kostenlos?", "Ja. Die Gratisversion bietet unbegrenzte Nachrichten, mit Werbung, Warteschlangen zu Stoßzeiten und kürzerem Gedächtnis."],
    ["Was kostet SpicyChat?", "Am 11. November 2026: Get a Taste 5,95 €/Monat, True Supporter 19,95 €/Monat und I'm All In 29,95 €/Monat, oder 60 €, 199,95 € und 299,95 € pro Jahr (-17 %)."],
    ["Hat SpicyChat Filter?", "Es ist für Rollenspiel für Erwachsene ohne automatische Ablehnung bei jeder Szene gemacht, aber die Community-Regeln der Plattform gelten."],
    ["Erinnert sich SpicyChat an Gespräche?", "Ja, vor allem in den Abos: semantisches Gedächtnis 2.0 ab True Supporter, Lorebooks für eine feste Welt und bis zu 32K Kontext mit I'm All In."],
    ["Kann man bei SpicyChat Bilder erzeugen?", "Ja, mitten im Gespräch, unbegrenzt ab True Supporter. Das Ergebnis ist manchmal ungenauer als bei einem spezialisierten Bildgenerator."],
    ["Hat SpicyChat eine Stimme?", "Ja, die Sprachausgabe liest die Antworten der KI vor, nur im Abo I'm All In."]
  ],
  end_t: "Bereit für deine erste Geschichte?", end: "Starte gratis mit einem der 385.000 Charaktere und wechsle zu True Supporter, wenn du mehr Gedächtnis willst.",
  pl_link: "Unseren kompletten Test lesen",
  cap: { "accueil": "Die Startseite von SpicyChat: über 385.000 Charaktere, mit NSFW-Schalter.",
    "prix": "Die Abos auf spicychat.ai (11. November 2026)." },
  src: "Screenshots: spicychat.ai, 11. November 2026 · Quelle des Tests: Video eines Partners"
},

pt: {
  meta_t: "SpicyChat AI vale a pena? Análise 2026: roleplay sem filtro, memória, versão grátis e preços",
  meta_d: "Nossa análise do SpicyChat AI: roleplay adulto sem recusas automáticas, mais de 385.000 personagens, lorebooks e memória, imagens e voz, versão grátis e preços (5,95 €, 19,95 €, 29,95 €).",
  crumb: "Análise", h1: "SpicyChat AI: análise do rei do roleplay sem filtro",
  intro: "Já passou uma hora construindo uma história com uma IA só para ler “Não posso atender a este pedido”? O SpicyChat foi feito para evitar isso: uma plataforma de roleplay adulto com uma biblioteca enorme de personagens criados pela comunidade. Veja quanto ele vale, grátis ou pago.",
  based: "Esta análise se baseia no vídeo de teste de um parceiro, complementado pelas nossas próprias verificações em spicychat.ai em 11 de novembro de 2026. Os preços do vídeo estavam desatualizados, então indicamos os do site oficial.",
  box_t: "Em resumo",
  box: "A melhor opção para roleplay e conversa: poucas recusas automáticas, uma biblioteca gigantesca, lorebooks e uma versão grátis realmente utilizável. Por outro lado, a memória depende muito do plano, imagens e voz ficam nos planos mais caros, e o gerador de imagens é menos preciso que ferramentas especializadas.",
  scores: [["Versão gratuita", "Sim, mensagens ilimitadas"], ["Preço de entrada", "5,95 €/mês"], ["Memória", "4K a 32K conforme o plano"], ["Personagens", "385.000+"]],
  site_score: "Nota da plataforma (nosso método)",
  pros_t: "Pontos fortes", cons_t: "Pontos fracos",
  pros: ["Roleplay adulto sem recusas automáticas a cada cena",
    "Mais de 385.000 personagens criados pela comunidade",
    "Versão grátis com mensagens ilimitadas",
    "Lorebooks para fixar um mundo, lugares e personagens secundários",
    "Memória semântica 2.0 e contexto de até 32K",
    "Plano de entrada a 5,95 €/mês, -17 % no pagamento anual"],
  cons: ["Grátis: anúncios, filas nos horários de pico, memória curta",
    "Imagens no chat só a partir do True Supporter (19,95 €)",
    "Voz (TTS) só no I'm All In (29,95 €)",
    "Gerador de imagens menos preciso na anatomia",
    "Os limites são seus: a IA não vai te parar",
    "Qualidade varia de um personagem da comunidade para outro"],
  cta: "Experimentar o SpicyChat", cta_note: "Link de afiliado · 18+",
  toc_t: "Sumário",
  sections: [
  { id: "quoi", h2: "1. O que é o SpicyChat?", body: `
<p>O SpicyChat é uma plataforma de <strong>roleplay e conversa para adultos</strong>. Ele usa modelos de IA próprios, feitos para narrativa adulta, em vez de um modelo genérico cheio de restrições: a IA segue o cenário que você propõe, romance, fantasia sombria ou uma história bem íntima, sem sermão. As regras da comunidade da plataforma continuam valendo, claro.</p>
[[img:accueil]]
<p>O grande trunfo é a <strong>biblioteca</strong>: mais de 385.000 personagens da comunidade no dia da nossa visita, filtráveis por tema (romance, cenário, anime, homem, mulher…), com um botão NSFW. Você também pode criar seus próprios personagens, suas “personas” (o papel que você interpreta), grupos e lorebooks.</p>
<p class="avis-note">O outro lado: sem barreiras automáticas, cabe a você definir seus limites e conduzir a história.</p>` },
  { id: "memoire", h2: "2. Memória e lorebooks: chega de memória de peixinho", body: `
<p>O defeito mais comum dos companheiros IA é esquecer seu nome ou um detalhe importante depois de dez mensagens. O SpicyChat ataca isso de duas formas:</p>
<ul>
<li><strong>Memória semântica 2.0</strong> (a partir do True Supporter): a conversa é resumida e arquivada, e a IA consulta esse arquivo antes de responder. Sua personagem lembra dos encontros, das piadas internas e da relação de vocês.</li>
<li><strong>Lorebooks</strong>: você registra lugares, personagens secundários e regras do mundo que a IA respeita horas depois. Ideal para campanhas longas.</li>
<li><strong>Contexto</strong>: 4K de memória imediata no Get a Taste, 8K no True Supporter e 32K no I'm All In.</li>
</ul>
<p>Na versão grátis, a memória “zera” bem mais rápido: é a principal diferença em relação aos planos pagos.</p>` },
  { id: "medias", h2: "3. Imagens, visão e voz", body: `
<ul>
<li><strong>Imagens no chat:</strong> peça uma selfie ou uma ilustração da cena no meio da conversa, e o gerador cria uma imagem que combina com a história. Ilimitadas a partir do True Supporter.</li>
<li><strong>Visão:</strong> segundo o vídeo, você também pode enviar uma imagem (um lugar, uma roupa) e a IA reage ao que vê.</li>
<li><strong>Voz:</strong> a síntese de voz lê as respostas com uma voz consistente, só no I'm All In.</li>
</ul>
<p>Um limite a conhecer: a plataforma prioriza o texto, e o gerador de imagens às vezes produz detalhes anatômicos incoerentes, menos precisos que ferramentas dedicadas como o <a href="seduced-ai.html">Seduced AI</a> ou o <a href="candy-ai.html">Candy AI</a>.</p>` },
  { id: "prix", h2: "4. Versão grátis e preços", body: `
<p>A versão grátis oferece <strong>mensagens ilimitadas</strong>: não é uma armadilha que bloqueia depois de cinco mensagens. Em troca: anúncios, filas nos horários de pico e memória curta. Preços conferidos em spicychat.ai em 11 de novembro de 2026 (em euros):</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["Mensal", "5,95 €/mês", "<strong>19,95 €/mês</strong>", "29,95 €/mês"],
  ["Anual (-17 %)", "60 €/ano", "199,95 €/ano", "299,95 €/ano"],
  ["Sem anúncios nem filas", "✅", "✅", "✅"],
  ["Contexto (memória)", "4K", "8K", "32K"],
  ["Memória semântica 2.0", "—", "✅", "✅"],
  ["Imagens no chat", "—", "✅ ilimitadas", "✅ + chatbots privados"],
  ["Modelos avançados (SpicyXL…)", "—", "modelos extras", "✅ os melhores"],
  ["Voz (TTS)", "—", "—", "✅"],
  ["Personas", "10", "50", "100"]])}
<p><strong>Nosso conselho:</strong> para jogar sem espera e com uma memória decente, o <strong>True Supporter</strong> tem o melhor custo-benefício. O I'm All In é para quem usa muito e quer os melhores modelos, 32K de memória e a voz.</p>
<p>O SpicyChat pertence à NextDay AI (Montreal, Delaware e Limassol).</p>` },
  { id: "verdict", h2: "Veredito: diante da concorrência", body: `
<p>Contra o Character.ai, cujos filtros tornam o roleplay adulto impossível, o SpicyChat vence com folga na liberdade. Contra o <a href="candy-ai.html">Candy AI</a>, mais forte em imagens e visual, o SpicyChat ganha na profundidade do roleplay, no número de personagens e na versão grátis.</p>
<p>Resumindo: para uma história longa e livre, o SpicyChat é a escolha número um. Para imagens bonitas e chamadas, veja o Candy AI ou o <a href="aiallure.html">AIAllure</a>. Funções em detalhe e nota: <a href="../platform/spicychat.html">nossa página do SpicyChat AI</a>.</p>` }
  ],
  faq_t: "Perguntas frequentes",
  faq: [
    ["O SpicyChat é grátis?", "Sim. A versão grátis oferece mensagens ilimitadas, com anúncios, filas nos horários de pico e memória mais curta."],
    ["Quanto custa o SpicyChat?", "Em 11 de novembro de 2026: Get a Taste a 5,95 €/mês, True Supporter a 19,95 €/mês e I'm All In a 29,95 €/mês, ou 60 €, 199,95 € e 299,95 € por ano (-17 %)."],
    ["O SpicyChat tem filtros?", "Ele foi feito para roleplay adulto sem recusas automáticas a cada cena, mas as regras da comunidade da plataforma se aplicam."],
    ["O SpicyChat lembra das conversas?", "Sim, sobretudo nos planos pagos: memória semântica 2.0 a partir do True Supporter, lorebooks para fixar um mundo e até 32K de contexto no I'm All In."],
    ["Dá para gerar imagens no SpicyChat?", "Sim, no meio da conversa, de forma ilimitada a partir do True Supporter. O resultado às vezes é menos preciso que um gerador de imagens dedicado."],
    ["O SpicyChat tem voz?", "Sim, a síntese de voz lê as respostas da IA, só no plano I'm All In."]
  ],
  end_t: "Pronto para a sua primeira história?", end: "Comece grátis com um dos 385.000 personagens e passe para o True Supporter se quiser mais memória.",
  pl_link: "Ler nossa análise completa",
  cap: { "accueil": "A página inicial do SpicyChat: mais de 385.000 personagens, com um botão NSFW.",
    "prix": "Os planos em spicychat.ai (11 de novembro de 2026)." },
  src: "Capturas: spicychat.ai, 11 de novembro de 2026 · Fonte do teste: vídeo de um parceiro"
},

hi: {
  meta_t: "SpicyChat AI रिव्यू 2026: बिना फ़िल्टर रोलप्ले, याददाश्त, फ़्री वर्ज़न और कीमतें",
  meta_d: "SpicyChat AI पर हमारी राय: बिना अपने-आप इनकार वाला वयस्क रोलप्ले, 3,85,000+ कैरेक्टर, लोरबुक और याददाश्त, इमेज और आवाज़, फ़्री वर्ज़न और प्लान की कीमतें (€5.95, €19.95, €29.95)।",
  crumb: "रिव्यू", h1: "SpicyChat AI रिव्यू: बिना फ़िल्टर रोलप्ले का राजा",
  intro: "क्या कभी AI के साथ एक घंटे तक कहानी बनाने के बाद “मैं यह अनुरोध पूरा नहीं कर सकता” पढ़ना पड़ा है? SpicyChat इसी से बचने के लिए बना है: वयस्कों के लिए रोलप्ले प्लेटफ़ॉर्म, कम्युनिटी के बनाए कैरेक्टर की विशाल लाइब्रेरी के साथ। फ़्री हो या पेड, यह कितना अच्छा है, यहाँ जानें।",
  based: "यह रिव्यू एक पार्टनर के वीडियो टेस्ट पर आधारित है, साथ में 11 नवंबर 2026 को spicychat.ai पर हमारी अपनी जाँच। वीडियो की कीमतें पुरानी थीं, इसलिए हम आधिकारिक साइट की कीमतें दे रहे हैं।",
  box_t: "संक्षेप में",
  box: "रोलप्ले और बातचीत के लिए सबसे अच्छा विकल्प: कम अपने-आप इनकार, विशाल लाइब्रेरी, लोरबुक और सच में काम का फ़्री वर्ज़न। दूसरी ओर, याददाश्त प्लान पर बहुत निर्भर है, इमेज और आवाज़ महँगे प्लान में हैं, और इमेज जनरेटर ख़ास टूल्स से कम सटीक है।",
  scores: [["फ़्री वर्ज़न", "हाँ, अनलिमिटेड मैसेज"], ["शुरुआती कीमत", "€5.95/महीना"], ["याददाश्त", "प्लान के हिसाब से 4K से 32K"], ["कैरेक्टर", "3,85,000+"]],
  site_score: "प्लेटफ़ॉर्म की रेटिंग (हमारा तरीका)",
  pros_t: "खूबियाँ", cons_t: "कमियाँ",
  pros: ["हर सीन पर अपने-आप इनकार के बिना वयस्क रोलप्ले",
    "कम्युनिटी के बनाए 3,85,000+ कैरेक्टर",
    "अनलिमिटेड मैसेज वाला फ़्री वर्ज़न",
    "दुनिया, जगहें और साइड कैरेक्टर तय करने के लिए लोरबुक",
    "सिमेंटिक मेमोरी 2.0 और 32K तक कॉन्टेक्स्ट",
    "€5.95/महीना से शुरुआत, सालाना भुगतान पर -17%"],
  cons: ["फ़्री: विज्ञापन, व्यस्त समय में कतार, छोटी याददाश्त",
    "चैट में इमेज सिर्फ़ True Supporter (€19.95) से",
    "आवाज़ (TTS) सिर्फ़ I'm All In (€29.95) में",
    "इमेज जनरेटर शरीर की बनावट में कम सटीक",
    "सीमाएँ आप तय करते हैं: AI आपको नहीं रोकेगा",
    "कम्युनिटी कैरेक्टर की क्वालिटी में फ़र्क"],
  cta: "SpicyChat आज़माएँ", cta_note: "एफ़िलिएट लिंक · 18+",
  toc_t: "विषय-सूची",
  sections: [
  { id: "quoi", h2: "1. SpicyChat क्या है?", body: `
<p>SpicyChat <strong>वयस्कों के लिए रोलप्ले और बातचीत</strong> का प्लेटफ़ॉर्म है। यह किसी सीमित आम मॉडल के बजाय वयस्क कहानियों के लिए बने अपने AI मॉडल इस्तेमाल करता है: आप जो भी सीन शुरू करें, रोमांस, डार्क फ़ैंटेसी या बहुत निजी कहानी, AI बिना उपदेश दिए साथ चलता है। प्लेटफ़ॉर्म के कम्युनिटी नियम बेशक लागू रहते हैं।</p>
[[img:accueil]]
<p>सबसे बड़ी ताक़त है <strong>लाइब्रेरी</strong>: हमारी विज़िट के दिन 3,85,000 से ज़्यादा कम्युनिटी कैरेक्टर, थीम के हिसाब से फ़िल्टर (रोमांस, सीनैरियो, एनीमे, पुरुष, महिला…), NSFW स्विच के साथ। आप अपने कैरेक्टर, “पर्सोना” (आपकी भूमिका), ग्रुप और लोरबुक भी बना सकते हैं।</p>
<p class="avis-note">दूसरा पहलू: अपने-आप कोई रोक नहीं, इसलिए अपनी सीमाएँ तय करना और कहानी चलाना आपके हाथ में है।</p>` },
  { id: "memoire", h2: "2. याददाश्त और लोरबुक: भुलक्कड़पन का अंत", body: `
<p>AI साथियों की सबसे आम कमी है दस मैसेज बाद आपका नाम या कोई ज़रूरी बात भूल जाना। SpicyChat इससे दो तरह निपटता है:</p>
<ul>
<li><strong>सिमेंटिक मेमोरी 2.0</strong> (True Supporter से): बातचीत का सार बनाकर सहेजा जाता है, और जवाब देने से पहले AI उसे देखता है। आपका कैरेक्टर आपकी डेट, मज़ाक और रिश्ता याद रखता है।</li>
<li><strong>लोरबुक</strong>: इसमें आप जगहें, साइड कैरेक्टर और दुनिया के नियम लिखते हैं, जिन्हें AI घंटों बाद भी मानता है। लंबी कहानियों के लिए बढ़िया।</li>
<li><strong>कॉन्टेक्स्ट</strong>: Get a Taste में 4K, True Supporter में 8K और I'm All In में 32K तत्काल याददाश्त।</li>
</ul>
<p>फ़्री वर्ज़न में याददाश्त बहुत जल्दी “रीसेट” होती है: पेड प्लान से यही मुख्य फ़र्क है।</p>` },
  { id: "medias", h2: "3. इमेज, विज़न और आवाज़", body: `
<ul>
<li><strong>चैट में इमेज:</strong> बातचीत के बीच सेल्फ़ी या सीन की तस्वीर माँगें, और जनरेटर कहानी से मेल खाती इमेज बनाता है। True Supporter से अनलिमिटेड।</li>
<li><strong>विज़न:</strong> वीडियो के अनुसार आप इमेज (कोई जगह, कपड़े) भी भेज सकते हैं और AI उस पर प्रतिक्रिया देता है।</li>
<li><strong>आवाज़:</strong> टेक्स्ट-टू-स्पीच एक जैसी आवाज़ में जवाब पढ़ता है, सिर्फ़ I'm All In में।</li>
</ul>
<p>एक सीमा: प्लेटफ़ॉर्म टेक्स्ट को प्राथमिकता देता है, और इसका इमेज जनरेटर कभी-कभी शरीर में गड़बड़ी करता है, <a href="seduced-ai.html">Seduced AI</a> या <a href="candy-ai.html">Candy AI</a> जैसे ख़ास टूल्स से कम सटीक।</p>` },
  { id: "prix", h2: "4. फ़्री वर्ज़न और कीमतें", body: `
<p>फ़्री वर्ज़न में <strong>अनलिमिटेड मैसेज</strong> हैं: यह पाँच मैसेज बाद रोकने वाला जाल नहीं है। बदले में: विज्ञापन, व्यस्त समय में कतार और छोटी याददाश्त। 11 नवंबर 2026 को spicychat.ai पर देखी गई कीमतें (यूरो में):</p>
[[img:prix]]
${T3(["", "Get a Taste", "True Supporter", "I'm All In"], [
  ["मासिक", "€5.95/महीना", "<strong>€19.95/महीना</strong>", "€29.95/महीना"],
  ["सालाना (-17%)", "€60/साल", "€199.95/साल", "€299.95/साल"],
  ["बिना विज्ञापन और कतार", "✅", "✅", "✅"],
  ["कॉन्टेक्स्ट (याददाश्त)", "4K", "8K", "32K"],
  ["सिमेंटिक मेमोरी 2.0", "—", "✅", "✅"],
  ["चैट में इमेज", "—", "✅ अनलिमिटेड", "✅ + प्राइवेट चैटबॉट"],
  ["एडवांस्ड मॉडल (SpicyXL…)", "—", "अतिरिक्त मॉडल", "✅ सबसे अच्छे"],
  ["आवाज़ (TTS)", "—", "—", "✅"],
  ["पर्सोना", "10", "50", "100"]])}
<p><strong>हमारी सलाह:</strong> बिना इंतज़ार खेलने और ठीक-ठाक याददाश्त के लिए <strong>True Supporter</strong> सबसे अच्छा सौदा है। I'm All In ज़्यादा इस्तेमाल करने वालों के लिए है जो सबसे अच्छे मॉडल, 32K याददाश्त और आवाज़ चाहते हैं।</p>
<p>SpicyChat को NextDay AI (मॉन्ट्रियल, डेलावेयर और लिमासोल) चलाता है।</p>` },
  { id: "verdict", h2: "फ़ैसला: प्रतिस्पर्धियों के सामने", body: `
<p>Character.ai के मुक़ाबले, जिसके फ़िल्टर वयस्क रोलप्ले को नामुमकिन बना देते हैं, आज़ादी में SpicyChat साफ़ जीतता है। <a href="candy-ai.html">Candy AI</a> के मुक़ाबले, जो इमेज और विज़ुअल में बेहतर है, SpicyChat रोलप्ले की गहराई, कैरेक्टर की संख्या और फ़्री वर्ज़न में आगे है।</p>
<p>संक्षेप में: लंबी और खुली कहानी के लिए SpicyChat नंबर एक है। सुंदर इमेज और कॉल के लिए Candy AI या <a href="aiallure.html">AIAllure</a> देखें। फ़ीचर विस्तार से और रेटिंग: <a href="../platform/spicychat.html">हमारा SpicyChat AI पेज</a>।</p>` }
  ],
  faq_t: "अक्सर पूछे जाने वाले सवाल",
  faq: [
    ["क्या SpicyChat फ़्री है?", "हाँ। फ़्री वर्ज़न में अनलिमिटेड मैसेज हैं, विज्ञापन, व्यस्त समय में कतार और छोटी याददाश्त के साथ।"],
    ["SpicyChat की कीमत क्या है?", "11 नवंबर 2026 को: Get a Taste €5.95/महीना, True Supporter €19.95/महीना और I'm All In €29.95/महीना, या €60, €199.95 और €299.95 प्रति साल (-17%)।"],
    ["क्या SpicyChat में फ़िल्टर हैं?", "यह हर सीन पर अपने-आप इनकार के बिना वयस्क रोलप्ले के लिए बना है, लेकिन प्लेटफ़ॉर्म के कम्युनिटी नियम लागू होते हैं।"],
    ["क्या SpicyChat बातचीत याद रखता है?", "हाँ, ख़ासकर पेड प्लान में: True Supporter से सिमेंटिक मेमोरी 2.0, दुनिया तय करने के लिए लोरबुक, और I'm All In में 32K तक कॉन्टेक्स्ट।"],
    ["क्या SpicyChat पर इमेज बना सकते हैं?", "हाँ, बातचीत के बीच, True Supporter से अनलिमिटेड। नतीजा कभी-कभी ख़ास इमेज जनरेटर से कम सटीक होता है।"],
    ["क्या SpicyChat में आवाज़ है?", "हाँ, टेक्स्ट-टू-स्पीच AI के जवाब पढ़ता है, सिर्फ़ I'm All In प्लान में।"]
  ],
  end_t: "अपनी पहली कहानी शुरू करें?", end: "3,85,000 कैरेक्टर में से किसी एक के साथ फ़्री शुरू करें, और ज़्यादा याददाश्त चाहिए तो True Supporter लें।",
  pl_link: "हमारा पूरा रिव्यू पढ़ें",
  cap: { "accueil": "SpicyChat का होम पेज: 3,85,000+ कैरेक्टर, NSFW स्विच के साथ।",
    "prix": "spicychat.ai पर प्लान (11 नवंबर 2026)।" },
  src: "स्क्रीनशॉट: spicychat.ai, 11 नवंबर 2026 · टेस्ट का स्रोत: एक पार्टनर का वीडियो"
}
};
