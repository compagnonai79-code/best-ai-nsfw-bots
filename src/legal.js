/* Legal page texts (English + French). Used only by build.js.
   S = SITE object from data.js. These are templates: have them reviewed for your situation. */
module.exports = (S) => ({
en: {
terms: `
<p>By accessing <strong>${S.domain}</strong> (the "Site"), you agree to these Terms of Service. If you do not agree, do not use the Site.</p>
<h2>1. Adults only</h2>
<p>The Site is strictly reserved for people aged 18 or over, or the age of majority in their country if higher. By entering, you confirm you meet this requirement. Minors must leave the Site immediately.</p>
<h2>2. What the Site is</h2>
<p>The Site is an independent directory that lists AI companion platforms and fictional AI characters. We do not operate these platforms, we do not host conversations and we do not sell any service. When you click a link, you leave the Site and are subject to the terms of the platform you visit.</p>
<h2>3. Affiliate links</h2>
<p>Some links are affiliate links: we may receive a commission if you sign up or buy through them, at no extra cost to you. Commissions do not affect our ratings (see our methodology page).</p>
<h2>4. Information provided "as is"</h2>
<p>We do our best to keep prices, features and descriptions accurate, but they can change at any time. Information is provided for general purposes only, without any warranty. Always check the official website before paying.</p>
<h2>5. Fictional characters</h2>
<p>All characters shown are fictional, AI-generated and depicted as adults (18+). Any resemblance to real people is coincidental.</p>
<h2>6. Acceptable use</h2>
<p>You agree not to copy the Site's content for commercial use, scrape it in bulk, disrupt its operation, or use it for any illegal purpose.</p>
<h2>7. Intellectual property</h2>
<p>The Site's design, texts and code belong to its publisher, except third-party trademarks and content, which belong to their respective owners. See our Copyright / DMCA page to report content.</p>
<h2>8. Liability</h2>
<p>We are not responsible for the content, services, billing or practices of third-party platforms, nor for any damage resulting from their use. Our liability is limited to the maximum extent permitted by law.</p>
<h2>9. Changes</h2>
<p>We may update these terms at any time. The date at the top of the page shows the latest version.</p>
<h2>10. Applicable law</h2>
<p>These terms are governed by French law. If you are a consumer, you also keep the protections of the law of your country of residence.</p>
<p>Contact: <a href="mailto:${S.email}">${S.email}</a></p>`,

cookies: `
<p>This policy explains what is stored on your device when you visit <strong>${S.domain}</strong>.</p>
<h2>1. What we store</h2>
<p>The Site does not use advertising or tracking cookies. It only uses your browser's local storage for strictly necessary functions:</p>
<ul>
<li><strong>age_ok</strong> (local storage, 30 days): remembers that you confirmed you are 18+, so the age check is not shown on every page.</li>
<li><strong>promo_seen</strong> (session storage, until you close the tab): makes sure the promotional pop-up is shown only once per visit.</li>
</ul>
<p>These items are necessary for the Site to work as you expect and do not require consent under the ePrivacy rules. They contain no personal data and are never sent to us.</p>
<h2>2. Fonts</h2>
<p>Fonts are hosted on our own server: no request is sent to Google or any other font provider.</p>
<h2>3. Third-party sites</h2>
<p>When you click a link to a platform, that platform and its affiliate network may set their own cookies, for example to attribute your sign-up. Those cookies are governed by their own policies, not ours.</p>
<h2>4. Managing storage</h2>
<p>You can delete local storage at any time from your browser settings (site data). The age check will simply be shown again.</p>
<h2>5. Changes</h2>
<p>If we add analytics or other cookies in the future, we will update this page and ask for your consent where required.</p>`,

dmca: `
<p>We respect intellectual property rights. If you believe content on <strong>${S.domain}</strong> infringes your copyright or other rights, contact us and we will act promptly.</p>
<h2>1. How to send a notice</h2>
<p>Email <a href="mailto:${S.email}">${S.email}</a> with the subject "Copyright notice" and include:</p>
<ul>
<li>your name, contact details and, if applicable, the rights holder you represent;</li>
<li>a description of the protected work;</li>
<li>the exact URL(s) of the content on our Site;</li>
<li>a statement that you believe in good faith the use is not authorized;</li>
<li>a statement that the information is accurate and that you are the owner or authorized to act on the owner's behalf;</li>
<li>your physical or electronic signature.</li>
</ul>
<h2>2. What happens next</h2>
<p>We review every complete notice and remove or disable the content in question, usually within 72 hours. We may contact you for more information.</p>
<h2>3. Counter-notice</h2>
<p>If your content was removed and you believe it was a mistake, you can send us a counter-notice with the same information and an explanation.</p>
<h2>4. Images of characters and platforms</h2>
<p>Platform names and logos belong to their owners and are used only to identify them. Character images are original, AI-generated or provided by the platforms for promotion. Platforms that want their content removed or updated can contact us at any time.</p>`,

privacy: `
<p>This policy explains how <strong>${S.domain}</strong> handles personal data, in accordance with the General Data Protection Regulation (GDPR).</p>
<h2>1. Data controller</h2>
<p>${S.owner}, ${S.address}. Contact: <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>2. Data we collect</h2>
<ul>
<li><strong>Browsing:</strong> we have no user accounts and no analytics. Our host may record technical logs (IP address, browser, pages requested) for security and to run the Site.</li>
<li><strong>Contact:</strong> if you write to us, we receive your name, email address and message.</li>
<li><strong>Local storage:</strong> see our Cookie Policy. These items stay on your device.</li>
</ul>
<h2>3. Why we use it (legal basis)</h2>
<ul>
<li>Running and securing the Site: legitimate interest.</li>
<li>Answering your messages: legitimate interest / your request.</li>
</ul>
<h2>4. Retention</h2>
<p>Contact messages are kept for up to 3 years after our last exchange. Host logs are kept according to the host's policy, generally no more than 12 months.</p>
<h2>5. Who receives it</h2>
<p>Only the publisher and our technical providers (hosting${S.host.includes("TO FILL") ? "" : ": " + S.host}). We never sell your data. Some providers may be located outside the EU; in that case transfers are covered by appropriate safeguards such as the European Commission's standard contractual clauses.</p>
<h2>6. Third-party platforms</h2>
<p>When you click a link to a platform, you leave our Site. That platform collects data under its own privacy policy.</p>
<h2>7. Your rights</h2>
<p>You can access, correct or delete your data, object to or restrict its use, and request portability by emailing <a href="mailto:${S.email}">${S.email}</a>. You can also file a complaint with your data protection authority (in France: the CNIL, www.cnil.fr).</p>
<h2>8. Minors</h2>
<p>The Site is for adults only. We do not knowingly collect data from anyone under 18.</p>`,

ai: `
<p>We want to be fully transparent about the role of artificial intelligence on <strong>${S.domain}</strong>.</p>
<h2>1. The characters are AI</h2>
<p>All characters listed are AI personas: you are never talking to a real person. Most are entirely fictional. Some, labelled “Creator Twin”, are official AI versions of real adult creators published by the platform itself; the conversation is still generated by AI, not by the creator.</p>
<h2>2. All characters are adults</h2>
<p>Every character is depicted as an adult aged 18 or over. We do not list, and will remove on sight, any character that is or appears to be a minor. Report any concern to <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>3. Images</h2>
<p>Character images are AI-generated or provided by the platforms. Except for Creator Twins, they do not show real people. Creator Twin images are official promotional visuals provided by the platform, with the creators' consent. Any other resemblance to a real person is unintentional; contact us and we will remove the image.</p>
<h2>4. Texts</h2>
<p>Some descriptions and translations on this Site are written or translated with the help of AI tools, then reviewed by us.</p>
<h2>5. Conversations happen on third-party platforms</h2>
<p>Conversations take place on the platforms you choose, not on our Site. AI models can produce inaccurate or unexpected content. Do not rely on them for medical, legal, financial or emotional advice, and never share sensitive personal information.</p>
<h2>6. Your wellbeing</h2>
<p>AI companions are entertainment. If you feel lonely, distressed or dependent, please reach out to people you trust or to a professional.</p>`,

notice: `
<h2>Publisher</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET: ${S.siret}<br>VAT: ${S.vat}<br>Email: <a href="mailto:${S.email}">${S.email}</a></p>
<h2>Publication director</h2>
<p>${S.director}</p>
<h2>Hosting</h2>
<p>${S.host}</p>
<h2>Intellectual property</h2>
<p>The design, texts and code of this Site are protected. Trademarks and logos of the listed platforms belong to their respective owners and are used for identification only.</p>
<h2>Adult content</h2>
<p>This Site is reserved for adults (18+). Access is subject to an age confirmation.</p>`
},

fr: {
terms: `
<p>En accédant à <strong>${S.domain}</strong> (le « Site »), vous acceptez les présentes conditions d'utilisation. Si vous ne les acceptez pas, n'utilisez pas le Site.</p>
<h2>1. Réservé aux adultes</h2>
<p>Le Site est strictement réservé aux personnes âgées de 18 ans ou plus, ou de l'âge de la majorité dans leur pays s'il est plus élevé. En entrant, vous confirmez remplir cette condition. Les mineurs doivent quitter le Site immédiatement.</p>
<h2>2. Nature du Site</h2>
<p>Le Site est un annuaire indépendant qui présente des plateformes de compagnie IA et des personnages IA fictifs. Nous n'exploitons pas ces plateformes, n'hébergeons aucune conversation et ne vendons aucun service. Lorsque vous cliquez sur un lien, vous quittez le Site et êtes soumis aux conditions de la plateforme visitée.</p>
<h2>3. Liens affiliés</h2>
<p>Certains liens sont des liens affiliés : nous pouvons percevoir une commission si vous vous inscrivez ou achetez via ces liens, sans surcoût pour vous. Les commissions n'influencent pas nos notes (voir notre page méthodologie).</p>
<h2>4. Informations fournies « en l'état »</h2>
<p>Nous faisons de notre mieux pour que les prix, fonctionnalités et descriptions soient exacts, mais ils peuvent changer à tout moment. Les informations sont fournies à titre indicatif, sans garantie. Vérifiez toujours sur le site officiel avant de payer.</p>
<h2>5. Personnages fictifs</h2>
<p>Tous les personnages présentés sont fictifs, générés par IA et représentés comme majeurs (18+). Toute ressemblance avec des personnes réelles est fortuite.</p>
<h2>6. Utilisation acceptable</h2>
<p>Vous vous engagez à ne pas copier le contenu du Site à des fins commerciales, ne pas l'aspirer en masse, ne pas perturber son fonctionnement ni l'utiliser à des fins illégales.</p>
<h2>7. Propriété intellectuelle</h2>
<p>Le design, les textes et le code du Site appartiennent à son éditeur, à l'exception des marques et contenus de tiers, qui appartiennent à leurs propriétaires. Consultez notre page Droits d'auteur / DMCA pour signaler un contenu.</p>
<h2>8. Responsabilité</h2>
<p>Nous ne sommes pas responsables du contenu, des services, de la facturation ou des pratiques des plateformes tierces, ni des dommages résultant de leur utilisation. Notre responsabilité est limitée dans la mesure permise par la loi.</p>
<h2>9. Modifications</h2>
<p>Nous pouvons modifier ces conditions à tout moment. La date en haut de page indique la dernière version.</p>
<h2>10. Droit applicable</h2>
<p>Les présentes conditions sont régies par le droit français. Si vous êtes consommateur, vous conservez la protection du droit de votre pays de résidence.</p>
<p>Contact : <a href="mailto:${S.email}">${S.email}</a></p>`,

cookies: `
<p>Cette politique explique ce qui est enregistré sur votre appareil lorsque vous visitez <strong>${S.domain}</strong>.</p>
<h2>1. Ce que nous enregistrons</h2>
<p>Le Site n'utilise aucun cookie publicitaire ou de suivi. Il utilise uniquement le stockage local de votre navigateur pour des fonctions strictement nécessaires :</p>
<ul>
<li><strong>age_ok</strong> (stockage local, 30 jours) : mémorise que vous avez confirmé avoir 18 ans ou plus, pour ne pas afficher la vérification à chaque page.</li>
<li><strong>promo_seen</strong> (stockage de session, jusqu'à la fermeture de l'onglet) : garantit que la fenêtre promotionnelle ne s'affiche qu'une fois par visite.</li>
</ul>
<p>Ces éléments sont nécessaires au fonctionnement du Site et ne requièrent pas de consentement au sens de la réglementation ePrivacy. Ils ne contiennent aucune donnée personnelle et ne nous sont jamais transmis.</p>
<h2>2. Polices</h2>
<p>Les polices sont hébergées sur notre propre serveur : aucune requête n'est envoyée à Google ni à un autre fournisseur de polices.</p>
<h2>3. Sites tiers</h2>
<p>Lorsque vous cliquez sur un lien vers une plateforme, celle-ci et son réseau d'affiliation peuvent déposer leurs propres cookies, par exemple pour attribuer votre inscription. Ces cookies relèvent de leurs propres politiques.</p>
<h2>4. Gérer le stockage</h2>
<p>Vous pouvez supprimer le stockage local à tout moment dans les paramètres de votre navigateur (données de site). La vérification d'âge s'affichera simplement à nouveau.</p>
<h2>5. Évolutions</h2>
<p>Si nous ajoutons un outil de mesure d'audience ou d'autres cookies, nous mettrons cette page à jour et demanderons votre consentement lorsque c'est requis.</p>`,

dmca: `
<p>Nous respectons les droits de propriété intellectuelle. Si vous estimez qu'un contenu de <strong>${S.domain}</strong> porte atteinte à vos droits d'auteur ou à d'autres droits, contactez-nous et nous agirons rapidement.</p>
<h2>1. Comment nous signaler un contenu</h2>
<p>Écrivez à <a href="mailto:${S.email}">${S.email}</a> avec l'objet « Signalement droits d'auteur » en indiquant :</p>
<ul>
<li>vos nom et coordonnées et, le cas échéant, le titulaire des droits que vous représentez ;</li>
<li>la description de l'œuvre protégée ;</li>
<li>l'adresse (URL) exacte du contenu sur notre Site ;</li>
<li>une déclaration indiquant que vous estimez de bonne foi que l'utilisation n'est pas autorisée ;</li>
<li>une déclaration attestant l'exactitude des informations et votre qualité de titulaire ou de mandataire ;</li>
<li>votre signature physique ou électronique.</li>
</ul>
<h2>2. Suite donnée</h2>
<p>Nous examinons chaque signalement complet et retirons ou désactivons le contenu concerné, généralement sous 72 heures. Nous pouvons vous contacter pour obtenir des précisions.</p>
<h2>3. Contestation</h2>
<p>Si votre contenu a été retiré et que vous pensez qu'il s'agit d'une erreur, vous pouvez nous adresser une contestation comportant les mêmes informations et une explication.</p>
<h2>4. Images des personnages et plateformes</h2>
<p>Les noms et logos des plateformes appartiennent à leurs propriétaires et ne servent qu'à les identifier. Les images des personnages sont originales, générées par IA ou fournies par les plateformes à des fins promotionnelles. Les plateformes qui souhaitent faire retirer ou modifier un contenu peuvent nous contacter à tout moment.</p>`,

privacy: `
<p>Cette politique explique comment <strong>${S.domain}</strong> traite les données personnelles, conformément au Règlement général sur la protection des données (RGPD).</p>
<h2>1. Responsable du traitement</h2>
<p>${S.owner}, ${S.address}. Contact : <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>2. Données collectées</h2>
<ul>
<li><strong>Navigation :</strong> pas de compte utilisateur ni d'outil de mesure d'audience. Notre hébergeur peut enregistrer des journaux techniques (adresse IP, navigateur, pages demandées) pour la sécurité et le fonctionnement du Site.</li>
<li><strong>Contact :</strong> si vous nous écrivez, nous recevons votre nom, votre adresse e-mail et votre message.</li>
<li><strong>Stockage local :</strong> voir notre Politique cookies. Ces éléments restent sur votre appareil.</li>
</ul>
<h2>3. Finalités et bases légales</h2>
<ul>
<li>Fonctionnement et sécurité du Site : intérêt légitime.</li>
<li>Réponse à vos messages : intérêt légitime / votre demande.</li>
</ul>
<h2>4. Durée de conservation</h2>
<p>Les messages de contact sont conservés au maximum 3 ans après notre dernier échange. Les journaux de l'hébergeur sont conservés selon sa politique, en général 12 mois au plus.</p>
<h2>5. Destinataires</h2>
<p>Uniquement l'éditeur et nos prestataires techniques (hébergement). Nous ne vendons jamais vos données. Certains prestataires peuvent être situés hors de l'UE ; les transferts sont alors encadrés par des garanties appropriées, comme les clauses contractuelles types de la Commission européenne.</p>
<h2>6. Plateformes tierces</h2>
<p>Lorsque vous cliquez sur un lien vers une plateforme, vous quittez notre Site. Cette plateforme collecte des données selon sa propre politique de confidentialité.</p>
<h2>7. Vos droits</h2>
<p>Vous pouvez accéder à vos données, les rectifier, les supprimer, vous opposer à leur traitement, en demander la limitation ou la portabilité en écrivant à <a href="mailto:${S.email}">${S.email}</a>. Vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
<h2>8. Mineurs</h2>
<p>Le Site est réservé aux adultes. Nous ne collectons pas sciemment de données concernant des personnes de moins de 18 ans.</p>`,

ai: `
<p>Nous voulons être totalement transparents sur le rôle de l'intelligence artificielle sur <strong>${S.domain}</strong>.</p>
<h2>1. Les personnages sont des IA</h2>
<p>Tous les personnages présentés sont des personas IA : vous ne parlez jamais à une personne réelle. La plupart sont entièrement fictifs. Certains, signalés « Jumelle IA de créatrice », sont des versions IA officielles de créatrices adultes réelles, publiées par la plateforme elle-même ; la conversation reste générée par l'IA, pas par la créatrice.</p>
<h2>2. Tous les personnages sont majeurs</h2>
<p>Chaque personnage est représenté comme un adulte de 18 ans ou plus. Nous ne présentons pas, et retirons immédiatement, tout personnage qui est ou semble être mineur. Signalez tout problème à <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>3. Images</h2>
<p>Les images des personnages sont générées par IA ou fournies par les plateformes. À l'exception des jumelles IA de créatrices, elles ne représentent pas de personnes réelles. Les images des jumelles IA sont des visuels promotionnels officiels fournis par la plateforme, avec l'accord des créatrices. Toute autre ressemblance est involontaire ; contactez-nous et nous retirerons l'image.</p>
<h2>4. Textes</h2>
<p>Certaines descriptions et traductions de ce Site sont rédigées ou traduites à l'aide d'outils d'IA, puis relues par nos soins.</p>
<h2>5. Les conversations ont lieu sur des plateformes tierces</h2>
<p>Les conversations se déroulent sur les plateformes que vous choisissez, pas sur notre Site. Les modèles d'IA peuvent produire des contenus inexacts ou inattendus. Ne vous y fiez pas pour des conseils médicaux, juridiques, financiers ou émotionnels, et ne partagez jamais d'informations personnelles sensibles.</p>
<h2>6. Votre bien-être</h2>
<p>Les compagnes IA sont un divertissement. Si vous vous sentez seul, en détresse ou dépendant, n'hésitez pas à vous tourner vers des proches ou un professionnel.</p>`,

notice: `
<h2>Éditeur du site</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET : ${S.siret}<br>TVA : ${S.vat}<br>E-mail : <a href="mailto:${S.email}">${S.email}</a></p>
<h2>Directeur de la publication</h2>
<p>${S.director}</p>
<h2>Hébergeur</h2>
<p>${S.host}</p>
<h2>Propriété intellectuelle</h2>
<p>Le design, les textes et le code de ce Site sont protégés. Les marques et logos des plateformes présentées appartiennent à leurs propriétaires respectifs et ne sont utilisés qu'à des fins d'identification.</p>
<h2>Contenu pour adultes</h2>
<p>Ce Site est réservé aux adultes (18+). Son accès est soumis à une confirmation d'âge.</p>`
}
});
