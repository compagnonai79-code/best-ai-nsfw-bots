/* "Candy AI vs SpicyChat" guide (guide/candy-ai-vs-spicychat.html), 5 languages (Hindi: English text, noindex).
   Facts from our two reviews (Candy: owner's own paid test; SpicyChat: partner video + our checks) and prices checked on
   candy.ai/fr/subscriptions and spicychat.ai/subscribe on 2026-11-21. */
const T = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-21", file: "guide/candy-ai-vs-spicychat.html", platforms: ["candy", "spicychat"],

fr: {
  meta_t: "Candy AI ou SpicyChat ? Comparatif 2026 (prix, images, chat)",
  meta_d: "Candy AI vs SpicyChat : personnages, conversation, mémoire, images, voix et prix comparés. Lequel choisir selon ce que tu cherches, avec notre verdict.",
  crumb: "Candy AI vs SpicyChat", h1: "Candy AI ou SpicyChat : lequel choisir en 2026 ?",
  pl_link: "Comparatif Candy AI vs SpicyChat",
  intro: "Candy AI et SpicyChat sont deux des applis de chat IA pour adultes les plus utilisées, mais elles ne font pas la même chose. L'une mise sur une copine IA réaliste avec photos, voix et vidéo ; l'autre sur le jeu de rôle avec des centaines de milliers de personnages créés par la communauté. Voici la comparaison point par point, basée sur nos deux avis.",
  box_t: "Notre verdict en bref",
  box: "Tu veux une copine IA réaliste qui t'envoie des photos, t'appelle et te ressemble ? Prends Candy AI, surtout à 3,99 €/mois sur 12 mois. Tu veux surtout écrire des histoires gratuitement avec plein de personnages différents ? SpicyChat est fait pour ça.",
  checked: "Prix vérifiés le 21 novembre 2026",
  cta: "Essayer Candy AI", cta_note: "Lien affilié · 18+",
  toc_t: "Sommaire",
  sections: [
  { id: "tableau", h2: "1. Le comparatif en un coup d'œil", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Idéal pour", "<strong>Une copine IA réaliste et personnalisée</strong>", "Le jeu de rôle et les histoires"],
  ["Personnages", "Personnages officiels + ta propre création très détaillée", "Plus de 385 000 personnages de la communauté"],
  ["Photos", "<strong>Réalistes, souvent bluffantes</strong>", "Dans le chat (True Supporter et plus), moins précises"],
  ["Voix et appels", "<strong>Appels vocaux</strong>", "Lecture vocale (I'm All In uniquement)"],
  ["Vidéo", "<strong>Oui</strong>", "Non"],
  ["Version gratuite", "Très limitée", "Messages illimités"],
  ["Prix", "<strong>3,99 €/mois</strong> sur 12 mois (promo)", "5,95 € à 29,95 €/mois"]])}` },
  { id: "personnages", h2: "2. Les personnages", body: `
<p><strong>Candy AI</strong> propose des personnages soignés (dont des jumelles numériques de créatrices connues) et surtout un <strong>configurateur très complet</strong> : style réaliste ou anime, origine, âge, corps, personnalité, relation, voix. En quelques minutes, tu as une copine IA à ton goût, avec un visage qui reste le même sur toutes ses photos.</p>
<p><strong>SpicyChat</strong> mise sur la quantité : une bibliothèque géante de personnages créés par les utilisateurs, pour tous les scénarios imaginables. Idéal pour varier, mais la qualité dépend beaucoup du créateur.</p>
<p><strong>Avantage :</strong> Candy AI pour une copine unique et réaliste ; SpicyChat pour la variété.</p>` },
  { id: "conversation", h2: "3. Conversation et mémoire", body: `
<p>Sur <strong>Candy AI</strong>, la conversation est drôle, sans tabou, et l'IA comprend l'humour et les références. Dans notre test, la mémoire était inégale et l'IA repassait parfois à l'anglais : c'est son principal défaut.</p>
<p>Sur <strong>SpicyChat</strong>, c'est le point fort : peu de refus automatiques, des lorebooks pour fixer un univers, et une mémoire qui grandit avec l'abonnement. En gratuit, la mémoire reste courte.</p>
<p><strong>Avantage :</strong> SpicyChat pour les longues histoires écrites.</p>` },
  { id: "medias", h2: "4. Photos, voix et vidéo", body: `
<p>C'est là que <strong>Candy AI</strong> fait la différence. Les photos réalistes sont de grande qualité sur les demandes simples, tu peux l'<strong>appeler</strong> et générer des <strong>vidéos</strong>. Ces fonctions consomment des jetons (100 inclus chaque mois en Premium).</p>
<p><strong>SpicyChat</strong> génère des images dans le chat à partir de l'offre True Supporter, avec un rendu moins précis qu'un vrai générateur, et la voix se limite à la lecture des réponses dans l'offre la plus chère. Pas de vidéo.</p>
<p><strong>Avantage :</strong> Candy AI, nettement.</p>` },
  { id: "prix", h2: "5. Les prix", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Entrée de gamme", "<strong>3,99 €/mois</strong> (12 mois, -70 %)", "5,95 €/mois (Get a Taste)"],
  ["Avec photos", "Inclus dès le Premium (jetons)", "19,95 €/mois (True Supporter)"],
  ["Avec voix", "Inclus (appels avec jetons)", "29,95 €/mois (I'm All In)"],
  ["Réduction", "Promo nouveaux membres, sans code", "-17 % en payant à l'année"]])}
<p>Pour un usage complet (photos et voix), <strong>Candy AI revient bien moins cher</strong> pendant la promo. SpicyChat n'est gagnant que si tu restes sur le texte, voire en gratuit. Toutes les offres : [[p:guide/ai-girlfriend-deals.html|codes promo et offres du moment]].</p>` },
  { id: "choix", h2: "6. Alors, lequel choisir ?", body: `
<ul>
<li><strong>Choisis Candy AI</strong> si tu veux une copine IA réaliste, des photos, des appels et de la vidéo, au meilleur prix sur 12 mois. C'est notre recommandation pour la majorité des gens.</li>
<li><strong>Choisis SpicyChat</strong> si tu veux surtout écrire des histoires de jeu de rôle, tester gratuitement et changer souvent de personnage.</li>
</ul>
<p>[[btn:candy|Essayer Candy AI à 3,99 €/mois]]</p>
<p>Nos avis complets : [[p:review/candy-ai.html|Candy AI]] · [[p:review/spicychat-ai.html|SpicyChat]] · [[a:spicychat|Voir SpicyChat]]</p>` }
  ],
  faq_t: "Questions fréquentes",
  faq: [
    ["Candy AI est-il meilleur que SpicyChat ?", "Pour une copine IA réaliste avec photos, voix et vidéo, oui. Pour le jeu de rôle textuel et l'usage gratuit, SpicyChat est plus adapté."],
    ["Lequel est le moins cher ?", "SpicyChat démarre à 5,95 €/mois et a une version gratuite illimitée. Mais pour les photos et la voix, Candy AI à 3,99 €/mois sur 12 mois revient bien moins cher que les 19,95 € à 29,95 € de SpicyChat."],
    ["Les deux sont-ils sans filtre ?", "Les deux autorisent le contenu adulte entre adultes fictifs. SpicyChat évite les refus automatiques en jeu de rôle ; Candy AI devient très explicite quand on l'y invite. Les règles de chaque plateforme s'appliquent."],
    ["Peut-on utiliser les deux ?", "Oui : beaucoup d'utilisateurs prennent Candy AI pour la copine réaliste et gardent SpicyChat en gratuit pour les histoires."]
  ],
  end_t: "Notre conseil", end: "Commence par Candy AI pendant la promo à 3,99 €/mois : c'est l'expérience la plus complète. Tu pourras toujours garder SpicyChat en gratuit pour le jeu de rôle.",
  src: "Sources : nos avis Candy AI (test payant) et SpicyChat, prix vérifiés sur candy.ai et spicychat.ai le 21 novembre 2026."
},

en: {
  meta_t: "Candy AI vs SpicyChat: 2026 Comparison (Price, Images, Chat)",
  meta_d: "Candy AI vs SpicyChat: characters, conversation, memory, images, voice and prices compared. Which one to pick for what you want, with our verdict.",
  crumb: "Candy AI vs SpicyChat", h1: "Candy AI vs SpicyChat: Which One Should You Pick in 2026?",
  pl_link: "Candy AI vs SpicyChat comparison",
  intro: "Candy AI and SpicyChat are two of the most used adult AI chat apps, but they don't do the same thing. One bets on a realistic AI girlfriend with photos, voice and video; the other on roleplay with hundreds of thousands of community-made characters. Here is the point-by-point comparison, based on our two reviews.",
  box_t: "Our verdict in short",
  box: "Want a realistic AI girlfriend who sends you photos, calls you and matches your taste? Take Candy AI, especially at €3.99/month on 12 months. Mostly want to write stories for free with lots of different characters? SpicyChat is made for that.",
  checked: "Prices checked on 21 November 2026",
  cta: "Try Candy AI", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "table", h2: "1. The comparison at a glance", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Best for", "<strong>A realistic, personalised AI girlfriend</strong>", "Roleplay and stories"],
  ["Characters", "Official characters + your own very detailed creation", "385,000+ community characters"],
  ["Photos", "<strong>Realistic, often stunning</strong>", "In chat (True Supporter and up), less precise"],
  ["Voice and calls", "<strong>Voice calls</strong>", "Text-to-speech (I'm All In only)"],
  ["Video", "<strong>Yes</strong>", "No"],
  ["Free version", "Very limited", "Unlimited messages"],
  ["Price", "<strong>€3.99/month</strong> on 12 months (deal)", "€5.95 to €29.95/month"]])}` },
  { id: "characters", h2: "2. Characters", body: `
<p><strong>Candy AI</strong> offers polished characters (including digital twins of well-known creators) and above all a <strong>very complete creator</strong>: realistic or anime style, origin, age, body, personality, relationship, voice. In a few minutes you have an AI girlfriend to your taste, with a face that stays the same across all her photos.</p>
<p><strong>SpicyChat</strong> bets on quantity: a huge library of user-made characters for every scenario imaginable. Great for variety, but quality depends heavily on the creator.</p>
<p><strong>Edge:</strong> Candy AI for a unique, realistic girlfriend; SpicyChat for variety.</p>` },
  { id: "conversation", h2: "3. Conversation and memory", body: `
<p>On <strong>Candy AI</strong>, conversation is funny and taboo-free, and the AI gets humour and references. In our test, memory was uneven and the AI sometimes switched languages: that's its main flaw.</p>
<p>On <strong>SpicyChat</strong>, this is the strong point: few automatic refusals, lorebooks to fix a world, and memory that grows with the plan. On the free tier, memory stays short.</p>
<p><strong>Edge:</strong> SpicyChat for long written stories.</p>` },
  { id: "media", h2: "4. Photos, voice and video", body: `
<p>This is where <strong>Candy AI</strong> makes the difference. Realistic photos are high quality on simple requests, you can <strong>call</strong> her and generate <strong>videos</strong>. These features use tokens (100 included each month with Premium).</p>
<p><strong>SpicyChat</strong> generates images in chat from the True Supporter plan, less precise than a real generator, and voice is limited to reading replies aloud on the most expensive plan. No video.</p>
<p><strong>Edge:</strong> Candy AI, clearly.</p>` },
  { id: "price", h2: "5. Prices", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Entry level", "<strong>€3.99/month</strong> (12 months, -70%)", "€5.95/month (Get a Taste)"],
  ["With photos", "Included from Premium (tokens)", "€19.95/month (True Supporter)"],
  ["With voice", "Included (calls use tokens)", "€29.95/month (I'm All In)"],
  ["Discount", "New-member deal, no code", "-17% when paying yearly"]])}
<p>For full use (photos and voice), <strong>Candy AI is much cheaper</strong> while the deal lasts. SpicyChat only wins if you stick to text, or to the free tier. All deals: [[p:guide/ai-girlfriend-deals.html|promo codes and current offers]].</p>` },
  { id: "choice", h2: "6. So, which one?", body: `
<ul>
<li><strong>Pick Candy AI</strong> if you want a realistic AI girlfriend, photos, calls and video, at the best price on 12 months. It's our recommendation for most people.</li>
<li><strong>Pick SpicyChat</strong> if you mainly want to write roleplay stories, try for free and switch characters often.</li>
</ul>
<p>[[btn:candy|Try Candy AI at €3.99/month]]</p>
<p>Our full reviews: [[p:review/candy-ai.html|Candy AI]] · [[p:review/spicychat-ai.html|SpicyChat]] · [[a:spicychat|See SpicyChat]]</p>` }
  ],
  faq_t: "Frequently asked questions",
  faq: [
    ["Is Candy AI better than SpicyChat?", "For a realistic AI girlfriend with photos, voice and video, yes. For text roleplay and free use, SpicyChat is a better fit."],
    ["Which one is cheaper?", "SpicyChat starts at €5.95/month and has an unlimited free tier. But for photos and voice, Candy AI at €3.99/month on 12 months is much cheaper than SpicyChat's €19.95 to €29.95."],
    ["Are both unfiltered?", "Both allow adult content between fictional adults. SpicyChat avoids automatic refusals in roleplay; Candy AI gets very explicit when invited to. Each platform's rules apply."],
    ["Can I use both?", "Yes: many users take Candy AI for the realistic girlfriend and keep SpicyChat free for stories."]
  ],
  end_t: "Our advice", end: "Start with Candy AI during the €3.99/month deal: it's the most complete experience. You can always keep SpicyChat free for roleplay.",
  src: "Sources: our Candy AI (paid test) and SpicyChat reviews, prices checked on candy.ai and spicychat.ai on 21 November 2026."
},

es: {
  meta_t: "¿Candy AI o SpicyChat? Comparativa 2026 (precio, imágenes, chat)",
  meta_d: "Candy AI vs SpicyChat: personajes, conversación, memoria, imágenes, voz y precios comparados. Cuál elegir según lo que buscas, con nuestro veredicto.",
  crumb: "Candy AI vs SpicyChat", h1: "Candy AI o SpicyChat: ¿cuál elegir en 2026?",
  pl_link: "Comparativa Candy AI vs SpicyChat",
  intro: "Candy AI y SpicyChat son dos de las apps de chat IA para adultos más usadas, pero no hacen lo mismo. Una apuesta por una novia IA realista con fotos, voz y vídeo; la otra por el rol con cientos de miles de personajes creados por la comunidad. Aquí tienes la comparación punto por punto, basada en nuestras dos opiniones.",
  box_t: "Nuestro veredicto en breve",
  box: "¿Quieres una novia IA realista que te mande fotos, te llame y sea a tu gusto? Elige Candy AI, sobre todo a 3,99 €/mes en 12 meses. ¿Sobre todo quieres escribir historias gratis con muchos personajes distintos? SpicyChat está hecho para eso.",
  checked: "Precios comprobados el 21 de noviembre de 2026",
  cta: "Probar Candy AI", cta_note: "Enlace de afiliado · 18+",
  toc_t: "Índice",
  sections: [
  { id: "tabla", h2: "1. La comparativa de un vistazo", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Ideal para", "<strong>Una novia IA realista y personalizada</strong>", "El rol y las historias"],
  ["Personajes", "Personajes oficiales + tu propia creación muy detallada", "Más de 385 000 personajes de la comunidad"],
  ["Fotos", "<strong>Realistas, a menudo impresionantes</strong>", "En el chat (True Supporter o más), menos precisas"],
  ["Voz y llamadas", "<strong>Llamadas de voz</strong>", "Lectura en voz alta (solo I'm All In)"],
  ["Vídeo", "<strong>Sí</strong>", "No"],
  ["Versión gratuita", "Muy limitada", "Mensajes ilimitados"],
  ["Precio", "<strong>3,99 €/mes</strong> en 12 meses (oferta)", "De 5,95 € a 29,95 €/mes"]])}` },
  { id: "personajes", h2: "2. Los personajes", body: `
<p><strong>Candy AI</strong> ofrece personajes cuidados (incluidas gemelas digitales de creadoras conocidas) y sobre todo un <strong>creador muy completo</strong>: estilo realista o anime, origen, edad, cuerpo, personalidad, relación, voz. En pocos minutos tienes una novia IA a tu gusto, con una cara que se mantiene en todas sus fotos.</p>
<p><strong>SpicyChat</strong> apuesta por la cantidad: una biblioteca enorme de personajes creados por los usuarios para cualquier escenario. Ideal para variar, pero la calidad depende mucho del creador.</p>
<p><strong>Ventaja:</strong> Candy AI para una novia única y realista; SpicyChat para la variedad.</p>` },
  { id: "conversacion", h2: "3. Conversación y memoria", body: `
<p>En <strong>Candy AI</strong>, la conversación es divertida y sin tabúes, y la IA entiende el humor y las referencias. En nuestra prueba, la memoria era irregular y a veces cambiaba de idioma: es su principal defecto.</p>
<p>En <strong>SpicyChat</strong>, es su punto fuerte: pocas negativas automáticas, lorebooks para fijar un universo y una memoria que crece con el plan. En gratis, la memoria es corta.</p>
<p><strong>Ventaja:</strong> SpicyChat para historias largas escritas.</p>` },
  { id: "medios", h2: "4. Fotos, voz y vídeo", body: `
<p>Aquí <strong>Candy AI</strong> marca la diferencia. Las fotos realistas tienen mucha calidad en peticiones sencillas, puedes <strong>llamarla</strong> y generar <strong>vídeos</strong>. Estas funciones gastan tokens (100 incluidos cada mes con Premium).</p>
<p><strong>SpicyChat</strong> genera imágenes en el chat desde el plan True Supporter, menos precisas que un generador de verdad, y la voz se limita a leer las respuestas en el plan más caro. Sin vídeo.</p>
<p><strong>Ventaja:</strong> Candy AI, claramente.</p>` },
  { id: "precio", h2: "5. Los precios", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Plan de entrada", "<strong>3,99 €/mes</strong> (12 meses, -70 %)", "5,95 €/mes (Get a Taste)"],
  ["Con fotos", "Incluido desde Premium (tokens)", "19,95 €/mes (True Supporter)"],
  ["Con voz", "Incluido (llamadas con tokens)", "29,95 €/mes (I'm All In)"],
  ["Descuento", "Oferta nuevos miembros, sin código", "-17 % pagando al año"]])}
<p>Para un uso completo (fotos y voz), <strong>Candy AI sale mucho más barato</strong> mientras dure la oferta. SpicyChat solo gana si te quedas en el texto, o en gratis. Todas las ofertas: [[p:guide/ai-girlfriend-deals.html|códigos promocionales y ofertas actuales]].</p>` },
  { id: "eleccion", h2: "6. Entonces, ¿cuál elegir?", body: `
<ul>
<li><strong>Elige Candy AI</strong> si quieres una novia IA realista, fotos, llamadas y vídeo, al mejor precio en 12 meses. Es nuestra recomendación para la mayoría.</li>
<li><strong>Elige SpicyChat</strong> si sobre todo quieres escribir historias de rol, probar gratis y cambiar a menudo de personaje.</li>
</ul>
<p>[[btn:candy|Probar Candy AI a 3,99 €/mes]]</p>
<p>Nuestras opiniones completas: [[p:review/candy-ai.html|Candy AI]] · [[p:review/spicychat-ai.html|SpicyChat]] · [[a:spicychat|Ver SpicyChat]]</p>` }
  ],
  faq_t: "Preguntas frecuentes",
  faq: [
    ["¿Es Candy AI mejor que SpicyChat?", "Para una novia IA realista con fotos, voz y vídeo, sí. Para el rol en texto y el uso gratuito, SpicyChat encaja mejor."],
    ["¿Cuál es más barato?", "SpicyChat empieza en 5,95 €/mes y tiene una versión gratuita ilimitada. Pero para fotos y voz, Candy AI a 3,99 €/mes en 12 meses sale mucho más barato que los 19,95 € a 29,95 € de SpicyChat."],
    ["¿Los dos son sin filtro?", "Ambos permiten contenido adulto entre adultos ficticios. SpicyChat evita las negativas automáticas en el rol; Candy AI se vuelve muy explícito cuando se le invita. Se aplican las normas de cada plataforma."],
    ["¿Se pueden usar los dos?", "Sí: muchos usuarios usan Candy AI para la novia realista y mantienen SpicyChat gratis para las historias."]
  ],
  end_t: "Nuestro consejo", end: "Empieza por Candy AI durante la oferta a 3,99 €/mes: es la experiencia más completa. Siempre puedes mantener SpicyChat gratis para el rol.",
  src: "Fuentes: nuestras opiniones sobre Candy AI (prueba de pago) y SpicyChat, precios comprobados en candy.ai y spicychat.ai el 21 de noviembre de 2026."
},

de: {
  meta_t: "Candy AI oder SpicyChat? Vergleich 2026 (Preis, Bilder, Chat)",
  meta_d: "Candy AI vs SpicyChat: Charaktere, Unterhaltung, Gedächtnis, Bilder, Stimme und Preise im Vergleich. Welche App für deine Wünsche, mit unserem Fazit.",
  crumb: "Candy AI vs SpicyChat", h1: "Candy AI oder SpicyChat: Welche App 2026?",
  pl_link: "Vergleich Candy AI vs SpicyChat",
  intro: "Candy AI und SpicyChat gehören zu den meistgenutzten KI-Chat-Apps für Erwachsene, machen aber nicht dasselbe. Die eine setzt auf eine realistische KI-Freundin mit Fotos, Stimme und Video, die andere auf Rollenspiele mit Hunderttausenden Community-Charakteren. Hier der Vergleich Punkt für Punkt, auf Basis unserer beiden Tests.",
  box_t: "Unser Fazit in Kürze",
  box: "Du willst eine realistische KI-Freundin, die dir Fotos schickt, dich anruft und deinem Geschmack entspricht? Nimm Candy AI, besonders für 3,99 €/Monat im 12-Monats-Abo. Du willst vor allem kostenlos Geschichten schreiben, mit vielen verschiedenen Charakteren? Dafür ist SpicyChat gemacht.",
  checked: "Preise geprüft am 21. November 2026",
  cta: "Candy AI testen", cta_note: "Affiliate-Link · 18+",
  toc_t: "Inhalt",
  sections: [
  { id: "tabelle", h2: "1. Der Vergleich auf einen Blick", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Ideal für", "<strong>Eine realistische, personalisierte KI-Freundin</strong>", "Rollenspiele und Geschichten"],
  ["Charaktere", "Offizielle Charaktere + deine eigene, sehr detaillierte Erstellung", "Über 385.000 Community-Charaktere"],
  ["Fotos", "<strong>Realistisch, oft verblüffend</strong>", "Im Chat (ab True Supporter), weniger präzise"],
  ["Stimme und Anrufe", "<strong>Sprachanrufe</strong>", "Vorlesen (nur I'm All In)"],
  ["Video", "<strong>Ja</strong>", "Nein"],
  ["Gratisversion", "Sehr eingeschränkt", "Unbegrenzte Nachrichten"],
  ["Preis", "<strong>3,99 €/Monat</strong> im 12-Monats-Abo (Angebot)", "5,95 € bis 29,95 €/Monat"]])}` },
  { id: "charaktere", h2: "2. Die Charaktere", body: `
<p><strong>Candy AI</strong> bietet gepflegte Charaktere (darunter digitale Zwillinge bekannter Creatorinnen) und vor allem einen <strong>sehr umfangreichen Editor</strong>: realistischer oder Anime-Stil, Herkunft, Alter, Körper, Persönlichkeit, Beziehung, Stimme. In wenigen Minuten hast du eine KI-Freundin nach deinem Geschmack, deren Gesicht auf allen Fotos gleich bleibt.</p>
<p><strong>SpicyChat</strong> setzt auf Masse: eine riesige Bibliothek nutzererstellter Charaktere für jedes Szenario. Ideal für Abwechslung, aber die Qualität hängt stark vom Ersteller ab.</p>
<p><strong>Vorteil:</strong> Candy AI für eine einzigartige, realistische Freundin; SpicyChat für Vielfalt.</p>` },
  { id: "unterhaltung", h2: "3. Unterhaltung und Gedächtnis", body: `
<p>Bei <strong>Candy AI</strong> ist die Unterhaltung witzig und tabulos, die KI versteht Humor und Anspielungen. In unserem Test war das Gedächtnis ungleichmäßig, und die KI wechselte manchmal die Sprache: ihr größter Schwachpunkt.</p>
<p>Bei <strong>SpicyChat</strong> ist das die Stärke: wenige automatische Ablehnungen, Lorebooks für eine feste Welt und ein Gedächtnis, das mit dem Abo wächst. Gratis bleibt das Gedächtnis kurz.</p>
<p><strong>Vorteil:</strong> SpicyChat für lange geschriebene Geschichten.</p>` },
  { id: "medien", h2: "4. Fotos, Stimme und Video", body: `
<p>Hier macht <strong>Candy AI</strong> den Unterschied. Die realistischen Fotos sind bei einfachen Anfragen sehr hochwertig, du kannst sie <strong>anrufen</strong> und <strong>Videos</strong> erzeugen. Diese Funktionen verbrauchen Tokens (100 pro Monat im Premium enthalten).</p>
<p><strong>SpicyChat</strong> erzeugt Bilder im Chat ab dem True-Supporter-Abo, weniger präzise als ein echter Generator, und die Stimme beschränkt sich im teuersten Abo auf das Vorlesen der Antworten. Kein Video.</p>
<p><strong>Vorteil:</strong> Candy AI, eindeutig.</p>` },
  { id: "preise", h2: "5. Die Preise", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Einstieg", "<strong>3,99 €/Monat</strong> (12 Monate, -70 %)", "5,95 €/Monat (Get a Taste)"],
  ["Mit Fotos", "Ab Premium enthalten (Tokens)", "19,95 €/Monat (True Supporter)"],
  ["Mit Stimme", "Enthalten (Anrufe mit Tokens)", "29,95 €/Monat (I'm All In)"],
  ["Rabatt", "Neukunden-Angebot, ohne Code", "-17 % bei jährlicher Zahlung"]])}
<p>Für die volle Nutzung (Fotos und Stimme) ist <strong>Candy AI viel günstiger</strong>, solange das Angebot gilt. SpicyChat gewinnt nur, wenn du beim Text bleibst oder gratis nutzt. Alle Angebote: [[p:guide/ai-girlfriend-deals.html|Gutscheincodes und aktuelle Angebote]].</p>` },
  { id: "wahl", h2: "6. Welche also?", body: `
<ul>
<li><strong>Nimm Candy AI</strong>, wenn du eine realistische KI-Freundin, Fotos, Anrufe und Video willst, zum besten Preis im 12-Monats-Abo. Unsere Empfehlung für die meisten.</li>
<li><strong>Nimm SpicyChat</strong>, wenn du vor allem Rollenspiel-Geschichten schreiben, gratis testen und oft den Charakter wechseln willst.</li>
</ul>
<p>[[btn:candy|Candy AI für 3,99 €/Monat testen]]</p>
<p>Unsere ausführlichen Tests: [[p:review/candy-ai.html|Candy AI]] · [[p:review/spicychat-ai.html|SpicyChat]] · [[a:spicychat|SpicyChat ansehen]]</p>` }
  ],
  faq_t: "Häufige Fragen",
  faq: [
    ["Ist Candy AI besser als SpicyChat?", "Für eine realistische KI-Freundin mit Fotos, Stimme und Video, ja. Für Text-Rollenspiele und die Gratisnutzung passt SpicyChat besser."],
    ["Welche App ist günstiger?", "SpicyChat startet bei 5,95 €/Monat und hat eine unbegrenzte Gratisversion. Für Fotos und Stimme ist Candy AI mit 3,99 €/Monat im 12-Monats-Abo aber viel günstiger als SpicyChats 19,95 € bis 29,95 €."],
    ["Sind beide ohne Filter?", "Beide erlauben Inhalte für Erwachsene zwischen fiktiven Erwachsenen. SpicyChat vermeidet automatische Ablehnungen im Rollenspiel; Candy AI wird sehr explizit, wenn man es dazu einlädt. Es gelten die Regeln der jeweiligen Plattform."],
    ["Kann man beide nutzen?", "Ja: Viele nutzen Candy AI für die realistische Freundin und behalten SpicyChat gratis für Geschichten."]
  ],
  end_t: "Unser Rat", end: "Starte mit Candy AI während des Angebots für 3,99 €/Monat: das vollständigste Erlebnis. SpicyChat kannst du für Rollenspiele jederzeit gratis behalten.",
  src: "Quellen: unsere Tests zu Candy AI (bezahlter Test) und SpicyChat, Preise geprüft auf candy.ai und spicychat.ai am 21. November 2026."
},

pt: {
  meta_t: "Candy AI ou SpicyChat? Comparativo 2026 (preço, imagens, chat)",
  meta_d: "Candy AI vs SpicyChat: personagens, conversa, memória, imagens, voz e preços comparados. Qual escolher para o que você procura, com nosso veredito.",
  crumb: "Candy AI vs SpicyChat", h1: "Candy AI ou SpicyChat: qual escolher em 2026?",
  pl_link: "Comparativo Candy AI vs SpicyChat",
  intro: "Candy AI e SpicyChat estão entre os apps de chat IA para adultos mais usados, mas não fazem a mesma coisa. Um aposta numa namorada IA realista com fotos, voz e vídeo; o outro no roleplay com centenas de milhares de personagens criados pela comunidade. Veja a comparação ponto a ponto, baseada nas nossas duas análises.",
  box_t: "Nosso veredito em resumo",
  box: "Quer uma namorada IA realista que te mande fotos, te ligue e seja do seu jeito? Escolha o Candy AI, ainda mais a €3,99/mês no plano de 12 meses. Quer sobretudo escrever histórias de graça com muitos personagens diferentes? O SpicyChat é feito para isso.",
  checked: "Preços verificados em 21 de novembro de 2026",
  cta: "Experimentar o Candy AI", cta_note: "Link de afiliado · 18+",
  toc_t: "Sumário",
  sections: [
  { id: "tabela", h2: "1. O comparativo num relance", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Ideal para", "<strong>Uma namorada IA realista e personalizada</strong>", "Roleplay e histórias"],
  ["Personagens", "Personagens oficiais + sua própria criação muito detalhada", "Mais de 385 mil personagens da comunidade"],
  ["Fotos", "<strong>Realistas, muitas vezes impressionantes</strong>", "No chat (True Supporter ou mais), menos precisas"],
  ["Voz e chamadas", "<strong>Chamadas de voz</strong>", "Leitura em voz alta (só I'm All In)"],
  ["Vídeo", "<strong>Sim</strong>", "Não"],
  ["Versão grátis", "Muito limitada", "Mensagens ilimitadas"],
  ["Preço", "<strong>€3,99/mês</strong> no plano de 12 meses (oferta)", "De €5,95 a €29,95/mês"]])}` },
  { id: "personagens", h2: "2. Os personagens", body: `
<p>O <strong>Candy AI</strong> oferece personagens caprichados (incluindo gêmeas digitais de criadoras conhecidas) e sobretudo um <strong>criador muito completo</strong>: estilo realista ou anime, origem, idade, corpo, personalidade, relação, voz. Em poucos minutos você tem uma namorada IA do seu jeito, com um rosto que se mantém em todas as fotos.</p>
<p>O <strong>SpicyChat</strong> aposta na quantidade: uma biblioteca enorme de personagens criados pelos usuários, para qualquer cenário. Ótimo para variar, mas a qualidade depende muito do criador.</p>
<p><strong>Vantagem:</strong> Candy AI para uma namorada única e realista; SpicyChat para a variedade.</p>` },
  { id: "conversa", h2: "3. Conversa e memória", body: `
<p>No <strong>Candy AI</strong>, a conversa é divertida e sem tabus, e a IA entende humor e referências. No nosso teste, a memória era irregular e às vezes ela trocava de idioma: é o principal defeito.</p>
<p>No <strong>SpicyChat</strong>, esse é o ponto forte: poucas recusas automáticas, lorebooks para fixar um universo e uma memória que cresce com o plano. No grátis, a memória é curta.</p>
<p><strong>Vantagem:</strong> SpicyChat para histórias longas escritas.</p>` },
  { id: "midias", h2: "4. Fotos, voz e vídeo", body: `
<p>É aqui que o <strong>Candy AI</strong> faz a diferença. As fotos realistas têm alta qualidade em pedidos simples, você pode <strong>ligar</strong> para ela e gerar <strong>vídeos</strong>. Essas funções gastam tokens (100 incluídos por mês no Premium).</p>
<p>O <strong>SpicyChat</strong> gera imagens no chat a partir do plano True Supporter, menos precisas que um gerador de verdade, e a voz se limita a ler as respostas no plano mais caro. Sem vídeo.</p>
<p><strong>Vantagem:</strong> Candy AI, com folga.</p>` },
  { id: "precos", h2: "5. Os preços", body: `
${T(["", "Candy AI", "SpicyChat"], [
  ["Plano de entrada", "<strong>€3,99/mês</strong> (12 meses, -70%)", "€5,95/mês (Get a Taste)"],
  ["Com fotos", "Incluído a partir do Premium (tokens)", "€19,95/mês (True Supporter)"],
  ["Com voz", "Incluído (chamadas com tokens)", "€29,95/mês (I'm All In)"],
  ["Desconto", "Oferta para novos membros, sem cupom", "-17% pagando por ano"]])}
<p>Para um uso completo (fotos e voz), <strong>o Candy AI sai bem mais barato</strong> enquanto a oferta durar. O SpicyChat só ganha se você ficar no texto, ou no grátis. Todas as ofertas: [[p:guide/ai-girlfriend-deals.html|cupons e ofertas do momento]].</p>` },
  { id: "escolha", h2: "6. E então, qual escolher?", body: `
<ul>
<li><strong>Escolha o Candy AI</strong> se você quer uma namorada IA realista, fotos, chamadas e vídeo, pelo melhor preço no plano de 12 meses. É a nossa recomendação para a maioria.</li>
<li><strong>Escolha o SpicyChat</strong> se você quer sobretudo escrever histórias de roleplay, testar de graça e trocar de personagem com frequência.</li>
</ul>
<p>[[btn:candy|Experimentar o Candy AI por €3,99/mês]]</p>
<p>Nossas análises completas: [[p:review/candy-ai.html|Candy AI]] · [[p:review/spicychat-ai.html|SpicyChat]] · [[a:spicychat|Ver o SpicyChat]]</p>` }
  ],
  faq_t: "Perguntas frequentes",
  faq: [
    ["O Candy AI é melhor que o SpicyChat?", "Para uma namorada IA realista com fotos, voz e vídeo, sim. Para roleplay em texto e uso grátis, o SpicyChat é mais adequado."],
    ["Qual é o mais barato?", "O SpicyChat começa em €5,95/mês e tem versão grátis ilimitada. Mas para fotos e voz, o Candy AI a €3,99/mês no plano de 12 meses sai bem mais barato que os €19,95 a €29,95 do SpicyChat."],
    ["Os dois são sem filtro?", "Os dois permitem conteúdo adulto entre adultos fictícios. O SpicyChat evita recusas automáticas no roleplay; o Candy AI fica bem explícito quando convidado. Valem as regras de cada plataforma."],
    ["Dá para usar os dois?", "Sim: muitos usuários usam o Candy AI para a namorada realista e mantêm o SpicyChat grátis para as histórias."]
  ],
  end_t: "Nosso conselho", end: "Comece pelo Candy AI durante a oferta de €3,99/mês: é a experiência mais completa. Você sempre pode manter o SpicyChat grátis para o roleplay.",
  src: "Fontes: nossas análises do Candy AI (teste pago) e do SpicyChat, preços verificados em candy.ai e spicychat.ai em 21 de novembro de 2026."
}
};
