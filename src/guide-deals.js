/* "Promo codes & best deals" guide (guide/ai-girlfriend-deals.html), 5 languages (Hindi: English text, noindex).
   Checked on the official sites on 2026-11-21: candy.ai/fr/subscriptions (+ promotions modal) and spicychat.ai/subscribe.
   AIAllure and Seduced do not show prices before sign-up: their figures come from our reviews (official AIAllure price guide
   and the Seduced source test, both checked on 2026-11-11) and are dated as such. Muah AI shows prices only in the app.
   NO invented codes: when a platform has no code, the page says so. Update `date` and the figures at every check. */
const T = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-21", file: "guide/ai-girlfriend-deals.html", platforms: ["candy", "spicychat", "aiallure", "seduced", "muah"],

fr: {
  meta_t: "Codes promo IA copine 2026 : Candy AI -70 % et autres offres",
  meta_d: "Toutes les offres vérifiées des applis de copine IA : Candy AI à 3,99 €/mois (-70 % sur 12 mois), SpicyChat, AIAllure, Seduced. Codes promo, vrais prix et pièges à éviter.",
  crumb: "Codes promo", h1: "Codes promo et meilleures offres des applis de copine IA",
  pl_link: "Codes promo et offres du moment",
  intro: "Tu cherches un code promo pour Candy AI ou une autre appli de copine IA ? Voici toutes les offres en cours, vérifiées directement sur les sites officiels, avec la date de vérification. Pas de faux codes : quand une plateforme n'en a pas, on te le dit.",
  box_t: "La meilleure offre du moment",
  box: "Candy AI : 3,99 €/mois sur l'abonnement 12 mois au lieu de 13,99 €, soit -70 %. Aucun code à saisir : la réduction s'applique automatiquement aux nouveaux membres. C'est l'offre la plus intéressante que nous ayons trouvée pour une appli complète (chat, images, voix et vidéo).",
  checked: "Offres vérifiées le 21 novembre 2026",
  cta: "Profiter de l'offre Candy AI", cta_note: "Lien affilié · 18+",
  toc_t: "Sommaire",
  sections: [
  { id: "candy", h2: "1. Candy AI : -70 % sur l'abonnement 12 mois", body: `
<p>C'est l'offre que nous recommandons en premier. Candy AI affiche en ce moment une promotion pour les nouveaux membres sur ses trois formules :</p>
${T(["Formule", "Prix par mois", "Réduction"], [
  ["<strong>12 mois</strong>", "<strong>3,99 €</strong> au lieu de 13,99 €", "<strong>-70 %</strong>"],
  ["3 mois", "8,99 € au lieu de 13,99 €", "-35 %"],
  ["1 mois", "9,99 € le premier mois, puis 13,99 €", "-29 %"]])}
<p>Sur 12 mois, ça revient à <strong>47,88 € pour l'année</strong>, contre 167,88 € au prix normal. Le Premium inclut les messages illimités, la création de tes propres copines IA, les images et vidéos +18, les actions en direct et <strong>100 jetons par mois</strong> (les jetons servent aux images, aux appels et à certaines options).</p>
<p><strong>Code promo Candy AI :</strong> il n'y en a pas besoin. La réduction est appliquée automatiquement en passant par la page d'abonnement. Méfie-toi des sites qui affichent des « codes » à copier : sur Candy, aucun champ ne permet d'en saisir.</p>
<p>[[btn:candy|Voir l'offre -70 % sur Candy AI]]</p>
<p class="avis-note">Candy présente cette réduction comme limitée dans le temps, avec un compte à rebours. Nous revérifions l'offre régulièrement et mettons cette page à jour. Pour tout savoir sur l'appli, lis [[p:review/candy-ai.html|notre test complet de Candy AI]].</p>` },
  { id: "spicychat", h2: "2. SpicyChat : -17 % en payant à l'année", body: `
<p>SpicyChat n'a pas de promotion ni de code en ce moment. La seule réduction est le <strong>paiement annuel</strong>, qui fait économiser 17 % :</p>
${T(["Formule", "Mensuel", "Ce qu'elle ajoute"], [
  ["Get a Taste", "5,95 €", "Plus de mémoire, sans publicité"],
  ["True Supporter", "19,95 €", "Images illimitées dans le chat, réponses plus longues"],
  ["I'm All In", "29,95 €", "Mémoire maximale, meilleurs modèles, voix"]])}
<p>Bon point : la version gratuite offre des <strong>messages illimités</strong>, ce qui permet de tester longtemps sans payer. SpicyChat est surtout fait pour le jeu de rôle. Pour des photos réalistes et une copine IA personnalisée, Candy AI reste plus complet. Notre comparatif détaillé : [[p:guide/candy-ai-vs-spicychat.html|Candy AI ou SpicyChat ?]]</p>
<p>[[a:spicychat|Voir SpicyChat]] · [[p:review/spicychat-ai.html|Notre avis SpicyChat]]</p>` },
  { id: "aiallure", h2: "3. AIAllure : essai 24 h et formules longues", body: `
<p>AIAllure n'affiche pas ses prix avant l'inscription. D'après sa grille officielle (vérifiée le 11 novembre 2026, en dollars) :</p>
${T(["Offre", "Starter", "Ce qu'il faut savoir"], [
  ["Essai 24 h", "1,99 $", "Devient l'abonnement mensuel s'il n'est pas annulé"],
  ["1 mois", "19,90 $", "Prix de référence"],
  ["12 mois", "9,90 $/mois (118,80 $)", "Le moins cher par mois"]])}
<p>Pas de code promo public. Attention à l'essai à 1,99 $ : pense à l'annuler avant 24 h si tu ne veux pas être prélevé du mois complet. [[a:aiallure|Voir AIAllure]] · [[p:review/aiallure.html|Notre avis AIAllure]]</p>` },
  { id: "seduced", h2: "4. Seduced AI : essai 2 jours", body: `
<p>Seduced est un générateur d'images et de vidéos, sans conversation. Ses prix ne sont pas publics : d'après le test que nous citons dans notre avis, l'abonnement Pro tourne autour de 30 $/mois hors taxes, avec un <strong>essai à 10 $ pour 2 jours</strong> qui devient automatiquement l'abonnement Pro s'il n'est pas annulé. Pas de code promo public. [[a:seduced|Voir Seduced]] · [[p:review/seduced-ai.html|Notre avis Seduced]]</p>` },
  { id: "muah", h2: "5. Muah AI", body: `
<p>Muah AI n'affiche ses prix et ses offres que dans l'application, après inscription. Nous n'avons pas de réduction vérifiée à te signaler pour le moment. [[a:muah|Voir Muah AI]]</p>` },
  { id: "pieges", h2: "6. Les pièges à éviter", body: `
<ul>
<li><strong>Les faux codes promo.</strong> Beaucoup de sites listent des codes inventés pour attirer des clics. Aucune des plateformes ci-dessus n'a de champ de code : les réductions s'appliquent toutes seules.</li>
<li><strong>Les essais qui se transforment en abonnement.</strong> L'essai à 1,99 $ d'AIAllure ou celui de Seduced devient payant automatiquement. Note la date et annule à temps si besoin.</li>
<li><strong>Les jetons et crédits.</strong> Un abonnement ne veut pas dire tout illimité : chez Candy, les images et les appels consomment des jetons ; chez Seduced, la vidéo vide vite les crédits.</li>
<li><strong>Le prix « par mois » des formules longues.</strong> Il est souvent payé en une fois. Les 3,99 €/mois de Candy, c'est 47,88 € réglés pour l'année.</li>
</ul>` }
  ],
  faq_t: "Questions fréquentes",
  faq: [
    ["Existe-t-il un code promo Candy AI ?", "Non, et il n'en faut pas : la réduction (jusqu'à -70 % sur 12 mois) s'applique automatiquement aux nouveaux membres sur la page d'abonnement. Les « codes » affichés ailleurs ne servent à rien."],
    ["Combien coûte Candy AI avec la promo ?", "Le 21 novembre 2026 : 3,99 €/mois sur 12 mois (47,88 € pour l'année), 8,99 €/mois sur 3 mois, ou 9,99 € le premier mois puis 13,99 €/mois."],
    ["Quelle est l'appli de copine IA la moins chère ?", "SpicyChat démarre à 5,95 €/mois avec une version gratuite illimitée, mais Candy AI à 3,99 €/mois sur 12 mois est l'offre la moins chère pour une appli complète avec images, voix et vidéo."],
    ["La promo Candy AI va-t-elle durer ?", "Candy la présente comme limitée dans le temps. Nous vérifions l'offre régulièrement et mettons cette page à jour avec la date de vérification."],
    ["Peut-on résilier facilement ?", "Oui, depuis les paramètres du compte sur chaque plateforme. Pense à résilier avant la fin d'un essai si tu ne veux pas être prélevé."]
  ],
  end_t: "Notre conseil", end: "Si tu hésites, prends Candy AI en 12 mois pendant la promo : c'est le meilleur rapport qualité-prix que nous ayons trouvé, et tu profites de toutes les fonctions.",
  src: "Sources : candy.ai et spicychat.ai (vérifiés le 21 novembre 2026), grille officielle AIAllure et test source Seduced (11 novembre 2026)."
},

en: {
  meta_t: "AI Girlfriend Promo Codes 2026: Candy AI -70% & More Deals",
  meta_d: "Every verified AI girlfriend app deal: Candy AI at €3.99/month (-70% on 12 months), SpicyChat, AIAllure, Seduced. Promo codes, real prices and traps to avoid.",
  crumb: "Promo codes", h1: "Promo Codes and Best Deals on AI Girlfriend Apps",
  pl_link: "Promo codes and current deals",
  intro: "Looking for a Candy AI promo code or a deal on another AI girlfriend app? Here are all the current offers, checked directly on the official sites, with the date we checked them. No fake codes: when a platform has none, we say so.",
  box_t: "Best deal right now",
  box: "Candy AI: €3.99/month on the 12-month plan instead of €13.99, i.e. -70%. No code needed: the discount is applied automatically for new members. It is the best offer we found for a complete app (chat, images, voice and video).",
  checked: "Deals checked on 21 November 2026",
  cta: "Get the Candy AI deal", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "candy", h2: "1. Candy AI: -70% on the 12-month plan", body: `
<p>This is the deal we recommend first. Candy AI currently shows a new-member promotion on all three plans:</p>
${T(["Plan", "Price per month", "Discount"], [
  ["<strong>12 months</strong>", "<strong>€3.99</strong> instead of €13.99", "<strong>-70%</strong>"],
  ["3 months", "€8.99 instead of €13.99", "-35%"],
  ["1 month", "€9.99 the first month, then €13.99", "-29%"]])}
<p>Over 12 months that comes to <strong>€47.88 for the year</strong>, versus €167.88 at full price. Premium includes unlimited messages, creating your own AI girlfriends, 18+ images and videos, live actions and <strong>100 tokens a month</strong> (tokens pay for images, calls and some options).</p>
<p><strong>Candy AI promo code:</strong> you don't need one. The discount is applied automatically on the subscription page. Be wary of sites showing "codes" to copy: Candy has no field to enter one.</p>
<p>[[btn:candy|See the -70% deal on Candy AI]]</p>
<p class="avis-note">Candy presents this discount as time-limited, with a countdown. We re-check the offer regularly and update this page. For everything about the app, read [[p:review/candy-ai.html|our full Candy AI test]].</p>` },
  { id: "spicychat", h2: "2. SpicyChat: -17% when paying yearly", body: `
<p>SpicyChat has no promotion or code right now. The only discount is <strong>yearly billing</strong>, which saves 17%:</p>
${T(["Plan", "Monthly", "What it adds"], [
  ["Get a Taste", "€5.95", "More memory, no ads"],
  ["True Supporter", "€19.95", "Unlimited images in chat, longer replies"],
  ["I'm All In", "€29.95", "Maximum memory, best models, voice"]])}
<p>A plus: the free tier offers <strong>unlimited messages</strong>, so you can test for a long time without paying. SpicyChat is mainly built for roleplay. For realistic photos and a personalised AI girlfriend, Candy AI is more complete. Our detailed comparison: [[p:guide/candy-ai-vs-spicychat.html|Candy AI or SpicyChat?]]</p>
<p>[[a:spicychat|See SpicyChat]] · [[p:review/spicychat-ai.html|Our SpicyChat review]]</p>` },
  { id: "aiallure", h2: "3. AIAllure: 24-hour trial and long plans", body: `
<p>AIAllure doesn't show prices before sign-up. From its official price guide (checked on 11 November 2026, in dollars):</p>
${T(["Offer", "Starter", "Good to know"], [
  ["24-hour trial", "$1.99", "Turns into the monthly plan if not cancelled"],
  ["1 month", "$19.90", "Reference price"],
  ["12 months", "$9.90/month ($118.80)", "Cheapest per month"]])}
<p>No public promo code. Watch the $1.99 trial: cancel within 24 hours if you don't want to be charged for a full month. [[a:aiallure|See AIAllure]] · [[p:review/aiallure.html|Our AIAllure review]]</p>` },
  { id: "seduced", h2: "4. Seduced AI: 2-day trial", body: `
<p>Seduced is an image and video generator, with no chat. Its prices aren't public: according to the test we cite in our review, the Pro plan is around $30/month before tax, with a <strong>$10 two-day trial</strong> that automatically becomes the Pro plan if not cancelled. No public promo code. [[a:seduced|See Seduced]] · [[p:review/seduced-ai.html|Our Seduced review]]</p>` },
  { id: "muah", h2: "5. Muah AI", body: `
<p>Muah AI shows its prices and offers only inside the app, after sign-up. We have no verified discount to report for now. [[a:muah|See Muah AI]]</p>` },
  { id: "traps", h2: "6. Traps to avoid", body: `
<ul>
<li><strong>Fake promo codes.</strong> Many sites list made-up codes to get clicks. None of the platforms above has a code field: discounts apply on their own.</li>
<li><strong>Trials that turn into subscriptions.</strong> AIAllure's $1.99 trial and Seduced's trial become paid automatically. Note the date and cancel in time if needed.</li>
<li><strong>Tokens and credits.</strong> A subscription doesn't mean everything is unlimited: on Candy, images and calls use tokens; on Seduced, video burns through credits quickly.</li>
<li><strong>The "per month" price of long plans.</strong> It is usually paid upfront. Candy's €3.99/month means €47.88 paid for the year.</li>
</ul>` }
  ],
  faq_t: "Frequently asked questions",
  faq: [
    ["Is there a Candy AI promo code?", "No, and you don't need one: the discount (up to -70% on 12 months) is applied automatically for new members on the subscription page. \"Codes\" shown elsewhere do nothing."],
    ["How much is Candy AI with the deal?", "On 21 November 2026: €3.99/month on 12 months (€47.88 for the year), €8.99/month on 3 months, or €9.99 the first month then €13.99/month."],
    ["What is the cheapest AI girlfriend app?", "SpicyChat starts at €5.95/month with an unlimited free tier, but Candy AI at €3.99/month on 12 months is the cheapest deal for a complete app with images, voice and video."],
    ["Will the Candy AI deal last?", "Candy presents it as time-limited. We check the offer regularly and update this page with the date of each check."],
    ["Can I cancel easily?", "Yes, from the account settings on each platform. Remember to cancel before a trial ends if you don't want to be charged."]
  ],
  end_t: "Our advice", end: "If you're unsure, take Candy AI on the 12-month plan while the deal lasts: it's the best value we found, with every feature included.",
  src: "Sources: candy.ai and spicychat.ai (checked on 21 November 2026), official AIAllure price guide and Seduced source test (11 November 2026)."
},

es: {
  meta_t: "Códigos promocionales novia IA 2026: Candy AI -70 % y más",
  meta_d: "Todas las ofertas verificadas de las apps de novia IA: Candy AI a 3,99 €/mes (-70 % en 12 meses), SpicyChat, AIAllure, Seduced. Códigos, precios reales y trampas.",
  crumb: "Códigos promocionales", h1: "Códigos promocionales y mejores ofertas de apps de novia IA",
  pl_link: "Códigos promocionales y ofertas actuales",
  intro: "¿Buscas un código promocional de Candy AI o una oferta en otra app de novia IA? Aquí tienes todas las ofertas actuales, comprobadas en las webs oficiales, con la fecha de la comprobación. Sin códigos falsos: cuando una plataforma no tiene, te lo decimos.",
  box_t: "La mejor oferta del momento",
  box: "Candy AI: 3,99 €/mes en el plan de 12 meses en lugar de 13,99 €, es decir, -70 %. Sin código: el descuento se aplica automáticamente a los nuevos miembros. Es la mejor oferta que hemos encontrado para una app completa (chat, imágenes, voz y vídeo).",
  checked: "Ofertas comprobadas el 21 de noviembre de 2026",
  cta: "Aprovechar la oferta de Candy AI", cta_note: "Enlace de afiliado · 18+",
  toc_t: "Índice",
  sections: [
  { id: "candy", h2: "1. Candy AI: -70 % en el plan de 12 meses", body: `
<p>Es la oferta que recomendamos primero. Candy AI muestra ahora una promoción para nuevos miembros en sus tres planes:</p>
${T(["Plan", "Precio al mes", "Descuento"], [
  ["<strong>12 meses</strong>", "<strong>3,99 €</strong> en lugar de 13,99 €", "<strong>-70 %</strong>"],
  ["3 meses", "8,99 € en lugar de 13,99 €", "-35 %"],
  ["1 mes", "9,99 € el primer mes, luego 13,99 €", "-29 %"]])}
<p>En 12 meses salen <strong>47,88 € por el año</strong>, frente a 167,88 € a precio normal. El Premium incluye mensajes ilimitados, crear tus propias novias IA, imágenes y vídeos +18, acciones en directo y <strong>100 tokens al mes</strong> (los tokens se usan para imágenes, llamadas y algunas opciones).</p>
<p><strong>Código promocional de Candy AI:</strong> no hace falta. El descuento se aplica solo en la página de suscripción. Desconfía de las webs que muestran «códigos» para copiar: Candy no tiene ningún campo para introducirlos.</p>
<p>[[btn:candy|Ver la oferta -70 % en Candy AI]]</p>
<p class="avis-note">Candy presenta este descuento como limitado en el tiempo, con una cuenta atrás. Revisamos la oferta con regularidad y actualizamos esta página. Para saberlo todo sobre la app, lee [[p:review/candy-ai.html|nuestra prueba completa de Candy AI]].</p>` },
  { id: "spicychat", h2: "2. SpicyChat: -17 % pagando al año", body: `
<p>SpicyChat no tiene promoción ni código ahora mismo. El único descuento es el <strong>pago anual</strong>, que ahorra un 17 %:</p>
${T(["Plan", "Mensual", "Qué añade"], [
  ["Get a Taste", "5,95 €", "Más memoria, sin anuncios"],
  ["True Supporter", "19,95 €", "Imágenes ilimitadas en el chat, respuestas más largas"],
  ["I'm All In", "29,95 €", "Memoria máxima, mejores modelos, voz"]])}
<p>Un punto a favor: la versión gratuita ofrece <strong>mensajes ilimitados</strong>, así que puedes probar mucho tiempo sin pagar. SpicyChat está pensado sobre todo para el rol. Para fotos realistas y una novia IA personalizada, Candy AI es más completo. Nuestra comparativa: [[p:guide/candy-ai-vs-spicychat.html|¿Candy AI o SpicyChat?]]</p>
<p>[[a:spicychat|Ver SpicyChat]] · [[p:review/spicychat-ai.html|Nuestra opinión sobre SpicyChat]]</p>` },
  { id: "aiallure", h2: "3. AIAllure: prueba de 24 h y planes largos", body: `
<p>AIAllure no muestra sus precios antes del registro. Según su tabla oficial (comprobada el 11 de noviembre de 2026, en dólares):</p>
${T(["Oferta", "Starter", "A tener en cuenta"], [
  ["Prueba 24 h", "1,99 $", "Se convierte en el plan mensual si no se cancela"],
  ["1 mes", "19,90 $", "Precio de referencia"],
  ["12 meses", "9,90 $/mes (118,80 $)", "El más barato al mes"]])}
<p>Sin código promocional público. Ojo con la prueba de 1,99 $: cancélala antes de 24 h si no quieres que te cobren el mes completo. [[a:aiallure|Ver AIAllure]] · [[p:review/aiallure.html|Nuestra opinión sobre AIAllure]]</p>` },
  { id: "seduced", h2: "4. Seduced AI: prueba de 2 días", body: `
<p>Seduced es un generador de imágenes y vídeos, sin conversación. Sus precios no son públicos: según la prueba que citamos en nuestra opinión, el plan Pro ronda los 30 $/mes sin impuestos, con una <strong>prueba de 10 $ por 2 días</strong> que se convierte automáticamente en el plan Pro si no se cancela. Sin código público. [[a:seduced|Ver Seduced]] · [[p:review/seduced-ai.html|Nuestra opinión sobre Seduced]]</p>` },
  { id: "muah", h2: "5. Muah AI", body: `
<p>Muah AI solo muestra sus precios y ofertas dentro de la app, tras registrarse. Por ahora no tenemos ningún descuento comprobado que señalar. [[a:muah|Ver Muah AI]]</p>` },
  { id: "trampas", h2: "6. Trampas que evitar", body: `
<ul>
<li><strong>Los códigos falsos.</strong> Muchas webs publican códigos inventados para conseguir clics. Ninguna de estas plataformas tiene campo de código: los descuentos se aplican solos.</li>
<li><strong>Las pruebas que se convierten en suscripción.</strong> La prueba de 1,99 $ de AIAllure y la de Seduced pasan a ser de pago automáticamente. Apunta la fecha y cancela a tiempo si hace falta.</li>
<li><strong>Tokens y créditos.</strong> Suscripción no significa todo ilimitado: en Candy, las imágenes y llamadas gastan tokens; en Seduced, el vídeo agota los créditos rápido.</li>
<li><strong>El precio «al mes» de los planes largos.</strong> Suele pagarse de una vez. Los 3,99 €/mes de Candy son 47,88 € pagados por el año.</li>
</ul>` }
  ],
  faq_t: "Preguntas frecuentes",
  faq: [
    ["¿Hay un código promocional de Candy AI?", "No, y no hace falta: el descuento (hasta -70 % en 12 meses) se aplica automáticamente a los nuevos miembros en la página de suscripción. Los «códigos» de otras webs no sirven."],
    ["¿Cuánto cuesta Candy AI con la oferta?", "El 21 de noviembre de 2026: 3,99 €/mes en 12 meses (47,88 € por el año), 8,99 €/mes en 3 meses, o 9,99 € el primer mes y luego 13,99 €/mes."],
    ["¿Cuál es la app de novia IA más barata?", "SpicyChat empieza en 5,95 €/mes con una versión gratuita ilimitada, pero Candy AI a 3,99 €/mes en 12 meses es la oferta más barata para una app completa con imágenes, voz y vídeo."],
    ["¿Durará la oferta de Candy AI?", "Candy la presenta como limitada en el tiempo. Revisamos la oferta con regularidad y actualizamos esta página con la fecha de cada comprobación."],
    ["¿Se puede cancelar fácilmente?", "Sí, desde los ajustes de la cuenta en cada plataforma. Recuerda cancelar antes de que termine una prueba si no quieres que te cobren."]
  ],
  end_t: "Nuestro consejo", end: "Si dudas, coge Candy AI en 12 meses mientras dure la oferta: es la mejor relación calidad-precio que hemos encontrado, con todas las funciones.",
  src: "Fuentes: candy.ai y spicychat.ai (comprobados el 21 de noviembre de 2026), tabla oficial de AIAllure y prueba fuente de Seduced (11 de noviembre de 2026)."
},

de: {
  meta_t: "KI-Freundin Gutscheincodes 2026: Candy AI -70 % und mehr",
  meta_d: "Alle geprüften Angebote der KI-Freundin-Apps: Candy AI für 3,99 €/Monat (-70 % im 12-Monats-Abo), SpicyChat, AIAllure, Seduced. Gutscheine, echte Preise, Fallen.",
  crumb: "Gutscheincodes", h1: "Gutscheincodes und beste Angebote der KI-Freundin-Apps",
  pl_link: "Gutscheincodes und aktuelle Angebote",
  intro: "Du suchst einen Candy-AI-Gutscheincode oder ein Angebot für eine andere KI-Freundin-App? Hier sind alle aktuellen Angebote, direkt auf den offiziellen Seiten geprüft, mit Prüfdatum. Keine erfundenen Codes: Wenn eine Plattform keinen hat, sagen wir es.",
  box_t: "Das beste Angebot gerade",
  box: "Candy AI: 3,99 €/Monat im 12-Monats-Abo statt 13,99 €, also -70 %. Kein Code nötig: Der Rabatt gilt automatisch für neue Mitglieder. Das beste Angebot, das wir für eine komplette App (Chat, Bilder, Stimme und Video) gefunden haben.",
  checked: "Angebote geprüft am 21. November 2026",
  cta: "Candy-AI-Angebot sichern", cta_note: "Affiliate-Link · 18+",
  toc_t: "Inhalt",
  sections: [
  { id: "candy", h2: "1. Candy AI: -70 % im 12-Monats-Abo", body: `
<p>Dieses Angebot empfehlen wir zuerst. Candy AI zeigt derzeit eine Aktion für neue Mitglieder auf allen drei Abos:</p>
${T(["Abo", "Preis pro Monat", "Rabatt"], [
  ["<strong>12 Monate</strong>", "<strong>3,99 €</strong> statt 13,99 €", "<strong>-70 %</strong>"],
  ["3 Monate", "8,99 € statt 13,99 €", "-35 %"],
  ["1 Monat", "9,99 € im ersten Monat, dann 13,99 €", "-29 %"]])}
<p>Über 12 Monate sind das <strong>47,88 € für das Jahr</strong> statt 167,88 € zum Normalpreis. Premium enthält unbegrenzte Nachrichten, eigene KI-Freundinnen erstellen, Bilder und Videos ab 18, Live-Aktionen und <strong>100 Tokens pro Monat</strong> (Tokens zahlen Bilder, Anrufe und einige Optionen).</p>
<p><strong>Candy-AI-Gutscheincode:</strong> Du brauchst keinen. Der Rabatt wird auf der Abo-Seite automatisch abgezogen. Vorsicht bei Seiten mit „Codes“ zum Kopieren: Bei Candy gibt es kein Feld, um einen einzugeben.</p>
<p>[[btn:candy|Das -70-%-Angebot auf Candy AI ansehen]]</p>
<p class="avis-note">Candy stellt diesen Rabatt als zeitlich begrenzt dar, mit Countdown. Wir prüfen das Angebot regelmäßig und aktualisieren diese Seite. Alles zur App: [[p:review/candy-ai.html|unser kompletter Candy-AI-Test]].</p>` },
  { id: "spicychat", h2: "2. SpicyChat: -17 % bei jährlicher Zahlung", body: `
<p>SpicyChat hat gerade weder Aktion noch Code. Der einzige Rabatt ist die <strong>jährliche Zahlung</strong>, die 17 % spart:</p>
${T(["Abo", "Monatlich", "Was es bringt"], [
  ["Get a Taste", "5,95 €", "Mehr Gedächtnis, keine Werbung"],
  ["True Supporter", "19,95 €", "Unbegrenzte Bilder im Chat, längere Antworten"],
  ["I'm All In", "29,95 €", "Maximales Gedächtnis, beste Modelle, Stimme"]])}
<p>Pluspunkt: Die Gratisversion bietet <strong>unbegrenzte Nachrichten</strong>, du kannst also lange testen, ohne zu zahlen. SpicyChat ist vor allem für Rollenspiele gemacht. Für realistische Fotos und eine personalisierte KI-Freundin ist Candy AI vollständiger. Unser Vergleich: [[p:guide/candy-ai-vs-spicychat.html|Candy AI oder SpicyChat?]]</p>
<p>[[a:spicychat|SpicyChat ansehen]] · [[p:review/spicychat-ai.html|Unser SpicyChat-Test]]</p>` },
  { id: "aiallure", h2: "3. AIAllure: 24-Stunden-Test und lange Abos", body: `
<p>AIAllure zeigt keine Preise vor der Anmeldung. Laut offizieller Preisliste (geprüft am 11. November 2026, in Dollar):</p>
${T(["Angebot", "Starter", "Gut zu wissen"], [
  ["24-Stunden-Test", "1,99 $", "Wird zum Monatsabo, wenn nicht gekündigt"],
  ["1 Monat", "19,90 $", "Referenzpreis"],
  ["12 Monate", "9,90 $/Monat (118,80 $)", "Am günstigsten pro Monat"]])}
<p>Kein öffentlicher Gutscheincode. Achtung beim 1,99-$-Test: Kündige innerhalb von 24 Stunden, wenn du nicht den vollen Monat zahlen willst. [[a:aiallure|AIAllure ansehen]] · [[p:review/aiallure.html|Unser AIAllure-Test]]</p>` },
  { id: "seduced", h2: "4. Seduced AI: 2-Tage-Test", body: `
<p>Seduced ist ein Bild- und Videogenerator ohne Chat. Die Preise sind nicht öffentlich: Laut dem Test, den wir in unserem Bericht zitieren, kostet Pro rund 30 $/Monat netto, mit einem <strong>Test für 10 $ über 2 Tage</strong>, der automatisch zum Pro-Abo wird, wenn er nicht gekündigt wird. Kein öffentlicher Code. [[a:seduced|Seduced ansehen]] · [[p:review/seduced-ai.html|Unser Seduced-Test]]</p>` },
  { id: "muah", h2: "5. Muah AI", body: `
<p>Muah AI zeigt Preise und Angebote nur in der App nach der Anmeldung. Wir haben derzeit keinen geprüften Rabatt zu melden. [[a:muah|Muah AI ansehen]]</p>` },
  { id: "fallen", h2: "6. Fallen, die du vermeiden solltest", body: `
<ul>
<li><strong>Erfundene Gutscheincodes.</strong> Viele Seiten listen ausgedachte Codes, um Klicks zu bekommen. Keine der Plattformen oben hat ein Code-Feld: Rabatte gelten von selbst.</li>
<li><strong>Tests, die zum Abo werden.</strong> Der 1,99-$-Test von AIAllure und der Test von Seduced werden automatisch kostenpflichtig. Notiere das Datum und kündige rechtzeitig.</li>
<li><strong>Tokens und Credits.</strong> Ein Abo heißt nicht, dass alles unbegrenzt ist: Bei Candy verbrauchen Bilder und Anrufe Tokens; bei Seduced frisst Video schnell die Credits.</li>
<li><strong>Der „Monatspreis“ langer Abos.</strong> Er wird meist im Voraus bezahlt. 3,99 €/Monat bei Candy heißt 47,88 € für das Jahr.</li>
</ul>` }
  ],
  faq_t: "Häufige Fragen",
  faq: [
    ["Gibt es einen Candy-AI-Gutscheincode?", "Nein, und du brauchst keinen: Der Rabatt (bis zu -70 % im 12-Monats-Abo) wird neuen Mitgliedern auf der Abo-Seite automatisch gewährt. „Codes“ von anderen Seiten bringen nichts."],
    ["Was kostet Candy AI mit dem Angebot?", "Am 21. November 2026: 3,99 €/Monat im 12-Monats-Abo (47,88 € für das Jahr), 8,99 €/Monat im 3-Monats-Abo oder 9,99 € im ersten Monat, dann 13,99 €/Monat."],
    ["Welche KI-Freundin-App ist am günstigsten?", "SpicyChat startet bei 5,95 €/Monat mit unbegrenzter Gratisversion, aber Candy AI mit 3,99 €/Monat im 12-Monats-Abo ist das günstigste Angebot für eine komplette App mit Bildern, Stimme und Video."],
    ["Bleibt das Candy-AI-Angebot bestehen?", "Candy stellt es als zeitlich begrenzt dar. Wir prüfen das Angebot regelmäßig und aktualisieren diese Seite mit dem Prüfdatum."],
    ["Kann man einfach kündigen?", "Ja, in den Kontoeinstellungen jeder Plattform. Kündige vor Ende eines Tests, wenn du nicht belastet werden willst."]
  ],
  end_t: "Unser Rat", end: "Wenn du unsicher bist, nimm Candy AI im 12-Monats-Abo, solange das Angebot gilt: das beste Preis-Leistungs-Verhältnis, das wir gefunden haben, mit allen Funktionen.",
  src: "Quellen: candy.ai und spicychat.ai (geprüft am 21. November 2026), offizielle AIAllure-Preisliste und Seduced-Quelltest (11. November 2026)."
},

pt: {
  meta_t: "Cupons de namorada IA 2026: Candy AI -70% e outras ofertas",
  meta_d: "Todas as ofertas verificadas dos apps de namorada IA: Candy AI a €3,99/mês (-70% no plano de 12 meses), SpicyChat, AIAllure, Seduced. Cupons, preços reais e armadilhas.",
  crumb: "Cupons", h1: "Cupons e melhores ofertas dos apps de namorada IA",
  pl_link: "Cupons e ofertas do momento",
  intro: "Procurando um cupom do Candy AI ou uma oferta em outro app de namorada IA? Aqui estão todas as ofertas atuais, verificadas direto nos sites oficiais, com a data da verificação. Nada de cupons falsos: quando uma plataforma não tem, a gente avisa.",
  box_t: "A melhor oferta do momento",
  box: "Candy AI: €3,99/mês no plano de 12 meses em vez de €13,99, ou seja, -70%. Sem cupom: o desconto é aplicado automaticamente para novos membros. É a melhor oferta que encontramos para um app completo (chat, imagens, voz e vídeo).",
  checked: "Ofertas verificadas em 21 de novembro de 2026",
  cta: "Aproveitar a oferta do Candy AI", cta_note: "Link de afiliado · 18+",
  toc_t: "Sumário",
  sections: [
  { id: "candy", h2: "1. Candy AI: -70% no plano de 12 meses", body: `
<p>É a oferta que recomendamos primeiro. O Candy AI mostra agora uma promoção para novos membros nos três planos:</p>
${T(["Plano", "Preço por mês", "Desconto"], [
  ["<strong>12 meses</strong>", "<strong>€3,99</strong> em vez de €13,99", "<strong>-70%</strong>"],
  ["3 meses", "€8,99 em vez de €13,99", "-35%"],
  ["1 mês", "€9,99 no primeiro mês, depois €13,99", "-29%"]])}
<p>Em 12 meses, isso dá <strong>€47,88 pelo ano</strong>, contra €167,88 no preço normal. O Premium inclui mensagens ilimitadas, criar suas próprias namoradas IA, imagens e vídeos +18, ações ao vivo e <strong>100 tokens por mês</strong> (os tokens pagam imagens, chamadas e algumas opções).</p>
<p><strong>Cupom do Candy AI:</strong> você não precisa de um. O desconto é aplicado sozinho na página de assinatura. Desconfie de sites com “cupons” para copiar: o Candy não tem nenhum campo para digitá-los.</p>
<p>[[btn:candy|Ver a oferta -70% no Candy AI]]</p>
<p class="avis-note">O Candy apresenta esse desconto como por tempo limitado, com contagem regressiva. Verificamos a oferta regularmente e atualizamos esta página. Para saber tudo sobre o app, leia [[p:review/candy-ai.html|nosso teste completo do Candy AI]].</p>` },
  { id: "spicychat", h2: "2. SpicyChat: -17% pagando por ano", body: `
<p>O SpicyChat não tem promoção nem cupom agora. O único desconto é o <strong>pagamento anual</strong>, que economiza 17%:</p>
${T(["Plano", "Mensal", "O que adiciona"], [
  ["Get a Taste", "€5,95", "Mais memória, sem anúncios"],
  ["True Supporter", "€19,95", "Imagens ilimitadas no chat, respostas mais longas"],
  ["I'm All In", "€29,95", "Memória máxima, melhores modelos, voz"]])}
<p>Ponto positivo: a versão grátis oferece <strong>mensagens ilimitadas</strong>, então dá para testar por muito tempo sem pagar. O SpicyChat é feito sobretudo para roleplay. Para fotos realistas e uma namorada IA personalizada, o Candy AI é mais completo. Nosso comparativo: [[p:guide/candy-ai-vs-spicychat.html|Candy AI ou SpicyChat?]]</p>
<p>[[a:spicychat|Ver o SpicyChat]] · [[p:review/spicychat-ai.html|Nossa análise do SpicyChat]]</p>` },
  { id: "aiallure", h2: "3. AIAllure: teste de 24 h e planos longos", body: `
<p>O AIAllure não mostra os preços antes do cadastro. Segundo a tabela oficial (verificada em 11 de novembro de 2026, em dólares):</p>
${T(["Oferta", "Starter", "Bom saber"], [
  ["Teste 24 h", "$1,99", "Vira o plano mensal se não for cancelado"],
  ["1 mês", "$19,90", "Preço de referência"],
  ["12 meses", "$9,90/mês ($118,80)", "O mais barato por mês"]])}
<p>Sem cupom público. Cuidado com o teste de $1,99: cancele antes de 24 h se não quiser pagar o mês inteiro. [[a:aiallure|Ver o AIAllure]] · [[p:review/aiallure.html|Nossa análise do AIAllure]]</p>` },
  { id: "seduced", h2: "4. Seduced AI: teste de 2 dias", body: `
<p>O Seduced é um gerador de imagens e vídeos, sem conversa. Os preços não são públicos: segundo o teste que citamos na nossa análise, o plano Pro fica em torno de $30/mês sem impostos, com um <strong>teste de $10 por 2 dias</strong> que vira automaticamente o plano Pro se não for cancelado. Sem cupom público. [[a:seduced|Ver o Seduced]] · [[p:review/seduced-ai.html|Nossa análise do Seduced]]</p>` },
  { id: "muah", h2: "5. Muah AI", body: `
<p>O Muah AI só mostra preços e ofertas dentro do app, depois do cadastro. Por enquanto não temos nenhum desconto verificado para indicar. [[a:muah|Ver o Muah AI]]</p>` },
  { id: "armadilhas", h2: "6. Armadilhas a evitar", body: `
<ul>
<li><strong>Cupons falsos.</strong> Muitos sites listam cupons inventados para ganhar cliques. Nenhuma das plataformas acima tem campo de cupom: os descontos se aplicam sozinhos.</li>
<li><strong>Testes que viram assinatura.</strong> O teste de $1,99 do AIAllure e o do Seduced passam a ser pagos automaticamente. Anote a data e cancele a tempo se precisar.</li>
<li><strong>Tokens e créditos.</strong> Assinatura não quer dizer tudo ilimitado: no Candy, imagens e chamadas gastam tokens; no Seduced, o vídeo consome os créditos rápido.</li>
<li><strong>O preço “por mês” dos planos longos.</strong> Costuma ser pago de uma vez. Os €3,99/mês do Candy são €47,88 pagos pelo ano.</li>
</ul>` }
  ],
  faq_t: "Perguntas frequentes",
  faq: [
    ["Existe cupom do Candy AI?", "Não, e não precisa: o desconto (até -70% no plano de 12 meses) é aplicado automaticamente para novos membros na página de assinatura. Os “cupons” de outros sites não servem para nada."],
    ["Quanto custa o Candy AI com a oferta?", "Em 21 de novembro de 2026: €3,99/mês no plano de 12 meses (€47,88 pelo ano), €8,99/mês no de 3 meses, ou €9,99 no primeiro mês e depois €13,99/mês."],
    ["Qual é o app de namorada IA mais barato?", "O SpicyChat começa em €5,95/mês com versão grátis ilimitada, mas o Candy AI a €3,99/mês no plano de 12 meses é a oferta mais barata para um app completo com imagens, voz e vídeo."],
    ["A oferta do Candy AI vai durar?", "O Candy a apresenta como por tempo limitado. Verificamos a oferta regularmente e atualizamos esta página com a data de cada verificação."],
    ["Dá para cancelar fácil?", "Sim, nas configurações da conta de cada plataforma. Lembre de cancelar antes do fim de um teste se não quiser ser cobrado."]
  ],
  end_t: "Nosso conselho", end: "Se estiver em dúvida, pegue o Candy AI no plano de 12 meses enquanto a oferta durar: é o melhor custo-benefício que encontramos, com todas as funções.",
  src: "Fontes: candy.ai e spicychat.ai (verificados em 21 de novembro de 2026), tabela oficial do AIAllure e teste fonte do Seduced (11 de novembro de 2026)."
}
};
