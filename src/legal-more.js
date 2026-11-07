/* Legal page texts in Spanish, German, Portuguese and Hindi (translations of legal.js). Used only by build.js.
   The French and English versions in legal.js remain the reference texts. */
module.exports = (S) => ({
es: {
terms: `
<p>Al acceder a <strong>${S.domain}</strong> (el «Sitio»), aceptas estas Condiciones de uso. Si no estás de acuerdo, no utilices el Sitio.</p>
<h2>1. Solo para adultos</h2>
<p>El Sitio está reservado exclusivamente a personas de 18 años o más, o de la mayoría de edad de su país si es superior. Al entrar, confirmas que cumples este requisito. Los menores deben abandonar el Sitio inmediatamente.</p>
<h2>2. Qué es el Sitio</h2>
<p>El Sitio es un directorio independiente que recopila plataformas de compañía con IA y personajes de IA ficticios. No gestionamos esas plataformas, no alojamos conversaciones y no vendemos ningún servicio. Cuando haces clic en un enlace, sales del Sitio y quedas sujeto a las condiciones de la plataforma que visitas.</p>
<h2>3. Enlaces de afiliado</h2>
<p>Algunos enlaces son de afiliado: podemos recibir una comisión si te registras o compras a través de ellos, sin coste adicional para ti. Las comisiones no influyen en nuestras notas (consulta nuestra página de metodología).</p>
<h2>4. Información «tal cual»</h2>
<p>Hacemos lo posible por mantener exactos los precios, funciones y descripciones, pero pueden cambiar en cualquier momento. La información se ofrece solo con fines generales y sin garantía. Comprueba siempre el sitio oficial antes de pagar.</p>
<h2>5. Personajes ficticios</h2>
<p>Todos los personajes mostrados son ficticios, generados por IA y presentados como adultos (18+). Cualquier parecido con personas reales es casual.</p>
<h2>6. Uso aceptable</h2>
<p>Te comprometes a no copiar el contenido del Sitio con fines comerciales, no extraerlo de forma masiva, no perturbar su funcionamiento y no utilizarlo con fines ilegales.</p>
<h2>7. Propiedad intelectual</h2>
<p>El diseño, los textos y el código del Sitio pertenecen a su editor, salvo las marcas y contenidos de terceros, que pertenecen a sus respectivos titulares. Consulta nuestra página Copyright / DMCA para notificar un contenido.</p>
<h2>8. Responsabilidad</h2>
<p>No somos responsables del contenido, los servicios, la facturación ni las prácticas de las plataformas de terceros, ni de los daños derivados de su uso. Nuestra responsabilidad se limita al máximo permitido por la ley.</p>
<h2>9. Cambios</h2>
<p>Podemos actualizar estas condiciones en cualquier momento. La fecha en la parte superior indica la última versión.</p>
<h2>10. Ley aplicable</h2>
<p>Estas condiciones se rigen por la ley francesa. Si eres consumidor, conservas también la protección de la ley de tu país de residencia.</p>
<p>Contacto: <a href="mailto:${S.email}">${S.email}</a></p>`,
cookies: `
<p>Esta política explica qué se guarda en tu dispositivo cuando visitas <strong>${S.domain}</strong>.</p>
<h2>1. Qué guardamos</h2>
<p>El Sitio no utiliza cookies publicitarias ni de seguimiento. Solo usa el almacenamiento local de tu navegador para funciones estrictamente necesarias:</p>
<ul>
<li><strong>age_ok</strong> (almacenamiento local, 30 días): recuerda que has confirmado tener 18 años o más, para no mostrar la verificación en cada página.</li>
<li><strong>promo_seen</strong> (almacenamiento de sesión, hasta que cierras la pestaña): hace que la ventana promocional se muestre solo una vez por visita.</li>
</ul>
<p>Estos elementos son necesarios para que el Sitio funcione como esperas y no requieren consentimiento según las normas ePrivacy. No contienen datos personales y nunca se nos envían.</p>
<h2>2. Fuentes tipográficas</h2>
<p>Las fuentes están alojadas en nuestro propio servidor: no se envía ninguna petición a Google ni a otro proveedor de fuentes.</p>
<h2>3. Sitios de terceros</h2>
<p>Cuando haces clic en un enlace hacia una plataforma, esa plataforma y su red de afiliación pueden instalar sus propias cookies, por ejemplo para atribuir tu registro. Esas cookies se rigen por sus propias políticas, no por la nuestra.</p>
<h2>4. Gestionar el almacenamiento</h2>
<p>Puedes borrar el almacenamiento local en cualquier momento desde los ajustes de tu navegador (datos de sitios). La verificación de edad simplemente volverá a mostrarse.</p>
<h2>5. Cambios</h2>
<p>Si en el futuro añadimos analítica u otras cookies, actualizaremos esta página y pediremos tu consentimiento cuando sea necesario.</p>`,
dmca: `
<p>Respetamos los derechos de propiedad intelectual. Si crees que un contenido de <strong>${S.domain}</strong> vulnera tus derechos de autor u otros derechos, contáctanos y actuaremos con rapidez.</p>
<h2>1. Cómo enviar una notificación</h2>
<p>Escribe a <a href="mailto:${S.email}">${S.email}</a> con el asunto «Notificación de copyright» e incluye:</p>
<ul>
<li>tu nombre, tus datos de contacto y, en su caso, el titular de los derechos al que representas;</li>
<li>una descripción de la obra protegida;</li>
<li>la(s) URL exacta(s) del contenido en nuestro Sitio;</li>
<li>una declaración de que crees de buena fe que el uso no está autorizado;</li>
<li>una declaración de que la información es exacta y de que eres el titular o estás autorizado a actuar en su nombre;</li>
<li>tu firma física o electrónica.</li>
</ul>
<h2>2. Qué ocurre después</h2>
<p>Revisamos cada notificación completa y retiramos o desactivamos el contenido en cuestión, normalmente en un plazo de 72 horas. Podemos contactarte para pedirte más información.</p>
<h2>3. Contranotificación</h2>
<p>Si tu contenido fue retirado y crees que se trata de un error, puedes enviarnos una contranotificación con la misma información y una explicación.</p>
<h2>4. Imágenes de personajes y plataformas</h2>
<p>Los nombres y logotipos de las plataformas pertenecen a sus titulares y se usan solo para identificarlas. Las imágenes de los personajes son originales, generadas por IA o facilitadas por las plataformas para su promoción. Las plataformas que deseen retirar o actualizar su contenido pueden contactarnos en cualquier momento.</p>`,
privacy: `
<p>Esta política explica cómo <strong>${S.domain}</strong> trata los datos personales, de conformidad con el Reglamento General de Protección de Datos (RGPD).</p>
<h2>1. Responsable del tratamiento</h2>
<p>${S.owner}, ${S.address}. Contacto: <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>2. Datos que recogemos</h2>
<ul>
<li><strong>Navegación:</strong> no tenemos cuentas de usuario ni analítica. Nuestro proveedor de alojamiento puede registrar datos técnicos (dirección IP, navegador, páginas solicitadas) por seguridad y para el funcionamiento del Sitio.</li>
<li><strong>Contacto:</strong> si nos escribes, recibimos tu nombre, tu correo electrónico y tu mensaje.</li>
<li><strong>Almacenamiento local:</strong> consulta nuestra Política de cookies. Estos elementos permanecen en tu dispositivo.</li>
</ul>
<h2>3. Para qué los usamos (base jurídica)</h2>
<ul>
<li>Funcionamiento y seguridad del Sitio: interés legítimo.</li>
<li>Responder a tus mensajes: interés legítimo / tu solicitud.</li>
</ul>
<h2>4. Conservación</h2>
<p>Los mensajes de contacto se conservan hasta 3 años después de nuestro último intercambio. Los registros del proveedor de alojamiento se conservan según su política, normalmente no más de 12 meses.</p>
<h2>5. Destinatarios</h2>
<p>Solo el editor y nuestros proveedores técnicos (alojamiento${S.host.includes("TO FILL") ? "" : ": " + S.host}). Nunca vendemos tus datos. Algunos proveedores pueden estar fuera de la UE; en ese caso, las transferencias están cubiertas por garantías adecuadas, como las cláusulas contractuales tipo de la Comisión Europea.</p>
<h2>6. Plataformas de terceros</h2>
<p>Cuando haces clic en un enlace hacia una plataforma, sales de nuestro Sitio. Esa plataforma recoge datos según su propia política de privacidad.</p>
<h2>7. Tus derechos</h2>
<p>Puedes acceder a tus datos, rectificarlos o suprimirlos, oponerte a su uso o limitarlo, y solicitar su portabilidad escribiendo a <a href="mailto:${S.email}">${S.email}</a>. También puedes presentar una reclamación ante tu autoridad de protección de datos (en Francia: la CNIL, www.cnil.fr).</p>
<h2>8. Menores</h2>
<p>El Sitio es solo para adultos. No recogemos a sabiendas datos de menores de 18 años.</p>`,
ai: `
<p>Queremos ser totalmente transparentes sobre el papel de la inteligencia artificial en <strong>${S.domain}</strong>.</p>
<h2>1. Los personajes son IA</h2>
<p>Todos los personajes listados son personajes de IA: nunca hablas con una persona real. La mayoría son totalmente ficticios. Algunos, marcados como «Creator Twin», son versiones IA oficiales de creadoras adultas reales, publicadas por la propia plataforma; la conversación sigue siendo generada por IA, no por la creadora.</p>
<h2>2. Todos los personajes son adultos</h2>
<p>Cada personaje se presenta como adulto de 18 años o más. No listamos, y retiraremos en cuanto lo veamos, ningún personaje que sea o parezca menor. Comunica cualquier duda a <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>3. Imágenes</h2>
<p>Las imágenes de los personajes están generadas por IA o facilitadas por las plataformas. Salvo los Creator Twins, no muestran a personas reales. Las imágenes de los Creator Twins son visuales promocionales oficiales de la plataforma, con el consentimiento de las creadoras. Cualquier otro parecido con una persona real es involuntario; contáctanos y retiraremos la imagen.</p>
<h2>4. Textos</h2>
<p>Algunas descripciones y traducciones de este Sitio se redactan o traducen con ayuda de herramientas de IA y después las revisamos.</p>
<h2>5. Las conversaciones ocurren en plataformas de terceros</h2>
<p>Las conversaciones tienen lugar en las plataformas que eliges, no en nuestro Sitio. Los modelos de IA pueden producir contenido inexacto o inesperado. No confíes en ellos para consejos médicos, jurídicos, financieros o emocionales, y nunca compartas información personal sensible.</p>
<h2>6. Tu bienestar</h2>
<p>Los compañeros de IA son entretenimiento. Si te sientes solo, angustiado o dependiente, habla con personas de confianza o con un profesional.</p>`,
notice: `
<h2>Editor</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET: ${S.siret}<br>IVA: ${S.vat}<br>Correo: <a href="mailto:${S.email}">${S.email}</a></p>
<h2>Director de la publicación</h2>
<p>${S.director}</p>
<h2>Alojamiento</h2>
<p>${S.host}</p>
<h2>Propiedad intelectual</h2>
<p>El diseño, los textos y el código de este Sitio están protegidos. Las marcas y logotipos de las plataformas listadas pertenecen a sus respectivos titulares y se utilizan solo para identificarlas.</p>
<h2>Contenido para adultos</h2>
<p>Este Sitio está reservado a adultos (18+). El acceso está sujeto a una confirmación de edad.</p>`
},
de: {
terms: `
<p>Mit dem Zugriff auf <strong>${S.domain}</strong> (die „Website“) akzeptierst du diese Nutzungsbedingungen. Wenn du nicht einverstanden bist, nutze die Website nicht.</p>
<h2>1. Nur für Erwachsene</h2>
<p>Die Website ist ausschließlich Personen ab 18 Jahren vorbehalten, bzw. ab dem Volljährigkeitsalter ihres Landes, wenn dieses höher ist. Mit dem Betreten bestätigst du, diese Voraussetzung zu erfüllen. Minderjährige müssen die Website sofort verlassen.</p>
<h2>2. Was die Website ist</h2>
<p>Die Website ist ein unabhängiges Verzeichnis von KI-Begleitplattformen und fiktiven KI-Charakteren. Wir betreiben diese Plattformen nicht, hosten keine Gespräche und verkaufen keine Dienstleistungen. Wenn du auf einen Link klickst, verlässt du die Website und unterliegst den Bedingungen der besuchten Plattform.</p>
<h2>3. Affiliate-Links</h2>
<p>Einige Links sind Affiliate-Links: Wir erhalten möglicherweise eine Provision, wenn du dich darüber registrierst oder etwas kaufst, ohne Mehrkosten für dich. Provisionen beeinflussen unsere Bewertungen nicht (siehe unsere Methodenseite).</p>
<h2>4. Informationen „wie besehen“</h2>
<p>Wir bemühen uns, Preise, Funktionen und Beschreibungen aktuell zu halten, doch sie können sich jederzeit ändern. Die Informationen dienen nur allgemeinen Zwecken und erfolgen ohne Gewähr. Prüfe vor dem Bezahlen immer die offizielle Website.</p>
<h2>5. Fiktive Charaktere</h2>
<p>Alle gezeigten Charaktere sind fiktiv, KI-generiert und als Erwachsene (18+) dargestellt. Ähnlichkeiten mit realen Personen sind zufällig.</p>
<h2>6. Zulässige Nutzung</h2>
<p>Du verpflichtest dich, die Inhalte der Website nicht kommerziell zu kopieren, nicht massenhaft auszulesen, ihren Betrieb nicht zu stören und sie nicht für rechtswidrige Zwecke zu nutzen.</p>
<h2>7. Geistiges Eigentum</h2>
<p>Design, Texte und Code der Website gehören ihrem Herausgeber, mit Ausnahme von Marken und Inhalten Dritter, die ihren jeweiligen Inhabern gehören. Siehe unsere Seite Copyright / DMCA, um Inhalte zu melden.</p>
<h2>8. Haftung</h2>
<p>Wir sind nicht verantwortlich für Inhalte, Dienste, Abrechnung oder Praktiken von Drittplattformen und nicht für Schäden aus deren Nutzung. Unsere Haftung ist im gesetzlich größtmöglichen Umfang beschränkt.</p>
<h2>9. Änderungen</h2>
<p>Wir können diese Bedingungen jederzeit aktualisieren. Das Datum oben auf der Seite zeigt die neueste Fassung.</p>
<h2>10. Anwendbares Recht</h2>
<p>Diese Bedingungen unterliegen französischem Recht. Als Verbraucher behältst du zusätzlich den Schutz des Rechts deines Wohnsitzlandes.</p>
<p>Kontakt: <a href="mailto:${S.email}">${S.email}</a></p>`,
cookies: `
<p>Diese Richtlinie erklärt, was auf deinem Gerät gespeichert wird, wenn du <strong>${S.domain}</strong> besuchst.</p>
<h2>1. Was wir speichern</h2>
<p>Die Website verwendet keine Werbe- oder Tracking-Cookies. Sie nutzt nur den lokalen Speicher deines Browsers für unbedingt notwendige Funktionen:</p>
<ul>
<li><strong>age_ok</strong> (lokaler Speicher, 30 Tage): merkt sich, dass du bestätigt hast, 18+ zu sein, damit die Altersabfrage nicht auf jeder Seite erscheint.</li>
<li><strong>promo_seen</strong> (Sitzungsspeicher, bis du den Tab schließt): sorgt dafür, dass das Werbe-Pop-up nur einmal pro Besuch erscheint.</li>
</ul>
<p>Diese Einträge sind notwendig, damit die Website wie erwartet funktioniert, und erfordern nach den ePrivacy-Regeln keine Einwilligung. Sie enthalten keine personenbezogenen Daten und werden nie an uns gesendet.</p>
<h2>2. Schriftarten</h2>
<p>Die Schriftarten liegen auf unserem eigenen Server: Es wird keine Anfrage an Google oder einen anderen Schriftanbieter gesendet.</p>
<h2>3. Websites Dritter</h2>
<p>Wenn du auf einen Link zu einer Plattform klickst, können diese Plattform und ihr Affiliate-Netzwerk eigene Cookies setzen, etwa um deine Anmeldung zuzuordnen. Diese Cookies unterliegen deren eigenen Richtlinien, nicht unseren.</p>
<h2>4. Speicher verwalten</h2>
<p>Du kannst den lokalen Speicher jederzeit in deinen Browsereinstellungen (Websitedaten) löschen. Die Altersabfrage wird dann einfach erneut angezeigt.</p>
<h2>5. Änderungen</h2>
<p>Sollten wir künftig Analyse- oder andere Cookies einsetzen, aktualisieren wir diese Seite und holen, wo nötig, deine Einwilligung ein.</p>`,
dmca: `
<p>Wir respektieren geistige Eigentumsrechte. Wenn du glaubst, dass Inhalte auf <strong>${S.domain}</strong> dein Urheberrecht oder andere Rechte verletzen, kontaktiere uns, und wir handeln umgehend.</p>
<h2>1. So sendest du eine Meldung</h2>
<p>Schreibe an <a href="mailto:${S.email}">${S.email}</a> mit dem Betreff „Urheberrechtsmeldung“ und gib an:</p>
<ul>
<li>deinen Namen, deine Kontaktdaten und gegebenenfalls den Rechteinhaber, den du vertrittst;</li>
<li>eine Beschreibung des geschützten Werks;</li>
<li>die genaue(n) URL(s) des Inhalts auf unserer Website;</li>
<li>eine Erklärung, dass du in gutem Glauben annimmst, dass die Nutzung nicht genehmigt ist;</li>
<li>eine Erklärung, dass die Angaben korrekt sind und du der Inhaber oder zur Vertretung berechtigt bist;</li>
<li>deine physische oder elektronische Unterschrift.</li>
</ul>
<h2>2. Wie es weitergeht</h2>
<p>Wir prüfen jede vollständige Meldung und entfernen oder sperren den betreffenden Inhalt, in der Regel innerhalb von 72 Stunden. Möglicherweise kontaktieren wir dich für weitere Informationen.</p>
<h2>3. Gegendarstellung</h2>
<p>Wenn dein Inhalt entfernt wurde und du glaubst, dass es ein Fehler war, kannst du uns eine Gegendarstellung mit denselben Angaben und einer Begründung senden.</p>
<h2>4. Bilder von Charakteren und Plattformen</h2>
<p>Namen und Logos der Plattformen gehören ihren Inhabern und dienen nur der Identifizierung. Charakterbilder sind original, KI-generiert oder von den Plattformen zu Werbezwecken bereitgestellt. Plattformen, die ihre Inhalte entfernen oder aktualisieren lassen möchten, können uns jederzeit kontaktieren.</p>`,
privacy: `
<p>Diese Richtlinie erklärt, wie <strong>${S.domain}</strong> personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeitet.</p>
<h2>1. Verantwortlicher</h2>
<p>${S.owner}, ${S.address}. Kontakt: <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>2. Welche Daten wir erheben</h2>
<ul>
<li><strong>Surfen:</strong> Wir haben keine Benutzerkonten und keine Analyse. Unser Hoster kann technische Protokolle (IP-Adresse, Browser, aufgerufene Seiten) zur Sicherheit und zum Betrieb der Website speichern.</li>
<li><strong>Kontakt:</strong> Wenn du uns schreibst, erhalten wir deinen Namen, deine E-Mail-Adresse und deine Nachricht.</li>
<li><strong>Lokaler Speicher:</strong> siehe unsere Cookie-Richtlinie. Diese Einträge bleiben auf deinem Gerät.</li>
</ul>
<h2>3. Wofür wir sie nutzen (Rechtsgrundlage)</h2>
<ul>
<li>Betrieb und Sicherheit der Website: berechtigtes Interesse.</li>
<li>Beantwortung deiner Nachrichten: berechtigtes Interesse / deine Anfrage.</li>
</ul>
<h2>4. Speicherdauer</h2>
<p>Kontaktnachrichten werden bis zu 3 Jahre nach unserem letzten Austausch aufbewahrt. Hoster-Protokolle werden gemäß der Richtlinie des Hosters aufbewahrt, in der Regel höchstens 12 Monate.</p>
<h2>5. Empfänger</h2>
<p>Nur der Herausgeber und unsere technischen Dienstleister (Hosting${S.host.includes("TO FILL") ? "" : ": " + S.host}). Wir verkaufen deine Daten nie. Einige Dienstleister können außerhalb der EU sitzen; in diesem Fall sind Übermittlungen durch geeignete Garantien wie die Standardvertragsklauseln der Europäischen Kommission abgesichert.</p>
<h2>6. Plattformen Dritter</h2>
<p>Wenn du auf einen Link zu einer Plattform klickst, verlässt du unsere Website. Diese Plattform erhebt Daten nach ihrer eigenen Datenschutzerklärung.</p>
<h2>7. Deine Rechte</h2>
<p>Du kannst Auskunft, Berichtigung oder Löschung deiner Daten verlangen, der Nutzung widersprechen oder sie einschränken und Datenübertragbarkeit beantragen, per E-Mail an <a href="mailto:${S.email}">${S.email}</a>. Du kannst dich auch bei deiner Datenschutzbehörde beschweren (in Frankreich: die CNIL, www.cnil.fr).</p>
<h2>8. Minderjährige</h2>
<p>Die Website richtet sich nur an Erwachsene. Wir erheben wissentlich keine Daten von Personen unter 18 Jahren.</p>`,
ai: `
<p>Wir möchten vollkommen transparent über die Rolle künstlicher Intelligenz auf <strong>${S.domain}</strong> sein.</p>
<h2>1. Die Charaktere sind KI</h2>
<p>Alle gelisteten Charaktere sind KI-Personas: Du sprichst nie mit einer echten Person. Die meisten sind vollständig fiktiv. Einige, gekennzeichnet als „Creator Twin“, sind offizielle KI-Versionen realer erwachsener Creatorinnen, von der Plattform selbst veröffentlicht; das Gespräch wird trotzdem von einer KI erzeugt, nicht von der Creatorin.</p>
<h2>2. Alle Charaktere sind volljährig</h2>
<p>Jeder Charakter wird als Erwachsener ab 18 Jahren dargestellt. Wir listen keine Charaktere, die minderjährig sind oder so wirken, und entfernen solche sofort. Melde Bedenken an <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>3. Bilder</h2>
<p>Charakterbilder sind KI-generiert oder von den Plattformen bereitgestellt. Außer bei Creator Twins zeigen sie keine realen Personen. Creator-Twin-Bilder sind offizielle Werbemotive der Plattform, mit Zustimmung der Creatorinnen. Jede andere Ähnlichkeit mit einer realen Person ist unbeabsichtigt; kontaktiere uns, und wir entfernen das Bild.</p>
<h2>4. Texte</h2>
<p>Einige Beschreibungen und Übersetzungen auf dieser Website werden mithilfe von KI-Werkzeugen geschrieben oder übersetzt und anschließend von uns geprüft.</p>
<h2>5. Gespräche finden auf Drittplattformen statt</h2>
<p>Gespräche finden auf den von dir gewählten Plattformen statt, nicht auf unserer Website. KI-Modelle können ungenaue oder unerwartete Inhalte erzeugen. Verlass dich nicht auf sie für medizinische, rechtliche, finanzielle oder emotionale Ratschläge und teile nie sensible persönliche Daten.</p>
<h2>6. Dein Wohlbefinden</h2>
<p>KI-Begleiter sind Unterhaltung. Wenn du dich einsam, belastet oder abhängig fühlst, wende dich bitte an Menschen, denen du vertraust, oder an eine Fachperson.</p>`,
notice: `
<h2>Herausgeber</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET: ${S.siret}<br>USt.: ${S.vat}<br>E-Mail: <a href="mailto:${S.email}">${S.email}</a></p>
<h2>Verantwortlich für den Inhalt</h2>
<p>${S.director}</p>
<h2>Hosting</h2>
<p>${S.host}</p>
<h2>Geistiges Eigentum</h2>
<p>Design, Texte und Code dieser Website sind geschützt. Marken und Logos der gelisteten Plattformen gehören ihren jeweiligen Inhabern und dienen nur der Identifizierung.</p>
<h2>Inhalte für Erwachsene</h2>
<p>Diese Website ist Erwachsenen (18+) vorbehalten. Der Zugang setzt eine Altersbestätigung voraus.</p>`
},
pt: {
terms: `
<p>Ao acessar <strong>${S.domain}</strong> (o "Site"), você aceita estes Termos de Uso. Se não concordar, não use o Site.</p>
<h2>1. Somente para adultos</h2>
<p>O Site é reservado exclusivamente a pessoas com 18 anos ou mais, ou com a maioridade do seu país, se for maior. Ao entrar, você confirma que cumpre esse requisito. Menores devem sair do Site imediatamente.</p>
<h2>2. O que é o Site</h2>
<p>O Site é um diretório independente que lista plataformas de companhia com IA e personagens de IA fictícios. Não operamos essas plataformas, não hospedamos conversas e não vendemos nenhum serviço. Ao clicar num link, você sai do Site e fica sujeito aos termos da plataforma visitada.</p>
<h2>3. Links de afiliado</h2>
<p>Alguns links são de afiliado: podemos receber uma comissão se você se cadastrar ou comprar por meio deles, sem custo extra para você. As comissões não influenciam as nossas notas (veja a nossa página de metodologia).</p>
<h2>4. Informações "no estado em que se encontram"</h2>
<p>Fazemos o possível para manter preços, recursos e descrições corretos, mas eles podem mudar a qualquer momento. As informações têm fins gerais e não têm garantia. Confira sempre o site oficial antes de pagar.</p>
<h2>5. Personagens fictícios</h2>
<p>Todos os personagens mostrados são fictícios, gerados por IA e apresentados como adultos (18+). Qualquer semelhança com pessoas reais é coincidência.</p>
<h2>6. Uso aceitável</h2>
<p>Você se compromete a não copiar o conteúdo do Site para uso comercial, não extraí-lo em massa, não perturbar o seu funcionamento e não usá-lo para fins ilegais.</p>
<h2>7. Propriedade intelectual</h2>
<p>O design, os textos e o código do Site pertencem ao seu editor, exceto marcas e conteúdos de terceiros, que pertencem aos respectivos titulares. Veja a nossa página Copyright / DMCA para denunciar um conteúdo.</p>
<h2>8. Responsabilidade</h2>
<p>Não somos responsáveis pelo conteúdo, serviços, cobranças ou práticas de plataformas de terceiros, nem por danos decorrentes do seu uso. A nossa responsabilidade é limitada ao máximo permitido por lei.</p>
<h2>9. Alterações</h2>
<p>Podemos atualizar estes termos a qualquer momento. A data no topo da página indica a versão mais recente.</p>
<h2>10. Lei aplicável</h2>
<p>Estes termos são regidos pela lei francesa. Se você é consumidor, mantém também a proteção da lei do seu país de residência.</p>
<p>Contato: <a href="mailto:${S.email}">${S.email}</a></p>`,
cookies: `
<p>Esta política explica o que é guardado no seu dispositivo quando você visita <strong>${S.domain}</strong>.</p>
<h2>1. O que guardamos</h2>
<p>O Site não usa cookies de publicidade nem de rastreamento. Ele usa apenas o armazenamento local do seu navegador para funções estritamente necessárias:</p>
<ul>
<li><strong>age_ok</strong> (armazenamento local, 30 dias): lembra que você confirmou ter 18 anos ou mais, para a verificação não aparecer em todas as páginas.</li>
<li><strong>promo_seen</strong> (armazenamento de sessão, até você fechar a aba): faz o pop-up promocional aparecer só uma vez por visita.</li>
</ul>
<p>Esses itens são necessários para o Site funcionar como esperado e não exigem consentimento pelas regras de ePrivacy. Não contêm dados pessoais e nunca são enviados para nós.</p>
<h2>2. Fontes</h2>
<p>As fontes ficam hospedadas no nosso próprio servidor: nenhuma solicitação é enviada ao Google ou a outro fornecedor de fontes.</p>
<h2>3. Sites de terceiros</h2>
<p>Quando você clica num link para uma plataforma, essa plataforma e a sua rede de afiliados podem definir os próprios cookies, por exemplo para atribuir o seu cadastro. Esses cookies seguem as políticas deles, não a nossa.</p>
<h2>4. Gerenciar o armazenamento</h2>
<p>Você pode apagar o armazenamento local a qualquer momento nas configurações do navegador (dados de sites). A verificação de idade simplesmente voltará a aparecer.</p>
<h2>5. Alterações</h2>
<p>Se no futuro adicionarmos análise de uso ou outros cookies, atualizaremos esta página e pediremos o seu consentimento quando necessário.</p>`,
dmca: `
<p>Respeitamos os direitos de propriedade intelectual. Se você acredita que um conteúdo em <strong>${S.domain}</strong> viola os seus direitos autorais ou outros direitos, entre em contato e agiremos rapidamente.</p>
<h2>1. Como enviar uma notificação</h2>
<p>Escreva para <a href="mailto:${S.email}">${S.email}</a> com o assunto "Notificação de direitos autorais" e inclua:</p>
<ul>
<li>seu nome, seus dados de contato e, se for o caso, o titular dos direitos que você representa;</li>
<li>uma descrição da obra protegida;</li>
<li>a(s) URL(s) exata(s) do conteúdo no nosso Site;</li>
<li>uma declaração de que você acredita de boa-fé que o uso não é autorizado;</li>
<li>uma declaração de que as informações são corretas e de que você é o titular ou está autorizado a agir em nome dele;</li>
<li>sua assinatura física ou eletrônica.</li>
</ul>
<h2>2. O que acontece depois</h2>
<p>Analisamos cada notificação completa e removemos ou desativamos o conteúdo em questão, geralmente em até 72 horas. Podemos entrar em contato para pedir mais informações.</p>
<h2>3. Contranotificação</h2>
<p>Se o seu conteúdo foi removido e você acredita que foi um erro, pode nos enviar uma contranotificação com as mesmas informações e uma explicação.</p>
<h2>4. Imagens de personagens e plataformas</h2>
<p>Os nomes e logotipos das plataformas pertencem aos seus titulares e são usados apenas para identificá-las. As imagens dos personagens são originais, geradas por IA ou fornecidas pelas plataformas para divulgação. Plataformas que queiram remover ou atualizar o seu conteúdo podem nos contatar a qualquer momento.</p>`,
privacy: `
<p>Esta política explica como <strong>${S.domain}</strong> trata dados pessoais, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
<h2>1. Controlador dos dados</h2>
<p>${S.owner}, ${S.address}. Contato: <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>2. Dados que coletamos</h2>
<ul>
<li><strong>Navegação:</strong> não temos contas de usuário nem análise de uso. O nosso provedor de hospedagem pode registrar dados técnicos (endereço IP, navegador, páginas acessadas) por segurança e para o funcionamento do Site.</li>
<li><strong>Contato:</strong> se você nos escrever, recebemos o seu nome, o seu e-mail e a sua mensagem.</li>
<li><strong>Armazenamento local:</strong> veja a nossa Política de cookies. Esses itens ficam no seu dispositivo.</li>
</ul>
<h2>3. Para que usamos (base legal)</h2>
<ul>
<li>Funcionamento e segurança do Site: interesse legítimo.</li>
<li>Responder às suas mensagens: interesse legítimo / sua solicitação.</li>
</ul>
<h2>4. Retenção</h2>
<p>As mensagens de contato são guardadas por até 3 anos após a nossa última troca. Os registros do provedor de hospedagem seguem a política dele, em geral no máximo 12 meses.</p>
<h2>5. Quem recebe</h2>
<p>Apenas o editor e os nossos prestadores técnicos (hospedagem${S.host.includes("TO FILL") ? "" : ": " + S.host}). Nunca vendemos os seus dados. Alguns prestadores podem estar fora da UE; nesse caso, as transferências são cobertas por garantias adequadas, como as cláusulas contratuais-padrão da Comissão Europeia.</p>
<h2>6. Plataformas de terceiros</h2>
<p>Quando você clica num link para uma plataforma, sai do nosso Site. Essa plataforma coleta dados segundo a própria política de privacidade.</p>
<h2>7. Seus direitos</h2>
<p>Você pode acessar, corrigir ou apagar os seus dados, opor-se ao uso ou limitá-lo e pedir a portabilidade escrevendo para <a href="mailto:${S.email}">${S.email}</a>. Também pode registrar uma reclamação na sua autoridade de proteção de dados (na França: a CNIL, www.cnil.fr).</p>
<h2>8. Menores</h2>
<p>O Site é apenas para adultos. Não coletamos intencionalmente dados de menores de 18 anos.</p>`,
ai: `
<p>Queremos ser totalmente transparentes sobre o papel da inteligência artificial em <strong>${S.domain}</strong>.</p>
<h2>1. Os personagens são IA</h2>
<p>Todos os personagens listados são personas de IA: você nunca fala com uma pessoa real. A maioria é totalmente fictícia. Alguns, marcados como "Creator Twin", são versões de IA oficiais de criadoras adultas reais, publicadas pela própria plataforma; a conversa continua sendo gerada por IA, não pela criadora.</p>
<h2>2. Todos os personagens são adultos</h2>
<p>Cada personagem é apresentado como adulto de 18 anos ou mais. Não listamos, e removeremos assim que virmos, qualquer personagem que seja ou pareça menor de idade. Comunique qualquer preocupação para <a href="mailto:${S.email}">${S.email}</a>.</p>
<h2>3. Imagens</h2>
<p>As imagens dos personagens são geradas por IA ou fornecidas pelas plataformas. Exceto os Creator Twins, elas não mostram pessoas reais. As imagens dos Creator Twins são visuais promocionais oficiais da plataforma, com o consentimento das criadoras. Qualquer outra semelhança com uma pessoa real é involuntária; entre em contato e removeremos a imagem.</p>
<h2>4. Textos</h2>
<p>Algumas descrições e traduções deste Site são escritas ou traduzidas com a ajuda de ferramentas de IA e depois revisadas por nós.</p>
<h2>5. As conversas acontecem em plataformas de terceiros</h2>
<p>As conversas acontecem nas plataformas que você escolhe, não no nosso Site. Modelos de IA podem produzir conteúdo impreciso ou inesperado. Não confie neles para conselhos médicos, jurídicos, financeiros ou emocionais e nunca compartilhe informações pessoais sensíveis.</p>
<h2>6. Seu bem-estar</h2>
<p>Companheiros de IA são entretenimento. Se você se sentir sozinho, angustiado ou dependente, procure pessoas de confiança ou um profissional.</p>`,
notice: `
<h2>Editor</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET: ${S.siret}<br>IVA: ${S.vat}<br>E-mail: <a href="mailto:${S.email}">${S.email}</a></p>
<h2>Diretor de publicação</h2>
<p>${S.director}</p>
<h2>Hospedagem</h2>
<p>${S.host}</p>
<h2>Propriedade intelectual</h2>
<p>O design, os textos e o código deste Site são protegidos. As marcas e logotipos das plataformas listadas pertencem aos respectivos titulares e são usados apenas para identificá-las.</p>
<h2>Conteúdo adulto</h2>
<p>Este Site é reservado a adultos (18+). O acesso está sujeito a uma confirmação de idade.</p>`
},
hi: {
terms: `
<p><strong>${S.domain}</strong> (“साइट”) का इस्तेमाल करके आप इन उपयोग की शर्तों से सहमत होते हैं। अगर आप सहमत नहीं हैं, तो साइट का इस्तेमाल न करें।</p>
<h2>1. सिर्फ़ वयस्कों के लिए</h2>
<p>यह साइट सिर्फ़ 18 साल या उससे ज़्यादा उम्र के लोगों के लिए है, या आपके देश में बालिग होने की उम्र के लिए, अगर वह ज़्यादा है। साइट में आकर आप पुष्टि करते हैं कि आप यह शर्त पूरी करते हैं। नाबालिगों को तुरंत साइट छोड़ देनी चाहिए।</p>
<h2>2. साइट क्या है</h2>
<p>यह साइट AI साथी प्लेटफ़ॉर्म और काल्पनिक AI किरदारों की एक स्वतंत्र डायरेक्टरी है। हम ये प्लेटफ़ॉर्म नहीं चलाते, बातचीत होस्ट नहीं करते और कोई सेवा नहीं बेचते। किसी लिंक पर क्लिक करते ही आप साइट से बाहर चले जाते हैं और उस प्लेटफ़ॉर्म की शर्तें लागू होती हैं।</p>
<h2>3. एफ़िलिएट लिंक</h2>
<p>कुछ लिंक एफ़िलिएट लिंक हैं: उनके ज़रिए साइन अप या ख़रीदारी करने पर हमें कमीशन मिल सकता है, आपको कोई अतिरिक्त ख़र्च नहीं होता। कमीशन हमारी रेटिंग पर असर नहीं डालता (हमारा तरीक़ा पेज देखें)।</p>
<h2>4. जानकारी “जैसी है वैसी”</h2>
<p>हम कीमतें, सुविधाएँ और विवरण सही रखने की पूरी कोशिश करते हैं, लेकिन ये कभी भी बदल सकते हैं। जानकारी सिर्फ़ सामान्य उद्देश्य के लिए है, बिना किसी गारंटी के। भुगतान से पहले हमेशा आधिकारिक साइट जाँचें।</p>
<h2>5. काल्पनिक किरदार</h2>
<p>दिखाए गए सभी किरदार काल्पनिक हैं, AI से बने हैं और वयस्क (18+) दिखाए गए हैं। असली लोगों से कोई भी समानता संयोग है।</p>
<h2>6. स्वीकार्य उपयोग</h2>
<p>आप सहमत हैं कि साइट की सामग्री को व्यावसायिक उपयोग के लिए कॉपी नहीं करेंगे, बड़े पैमाने पर स्क्रैप नहीं करेंगे, इसके काम में बाधा नहीं डालेंगे और इसे किसी ग़ैरक़ानूनी काम के लिए इस्तेमाल नहीं करेंगे।</p>
<h2>7. बौद्धिक संपदा</h2>
<p>साइट का डिज़ाइन, टेक्स्ट और कोड इसके प्रकाशक के हैं, सिवाय तीसरे पक्ष के ट्रेडमार्क और सामग्री के, जो उनके मालिकों के हैं। किसी सामग्री की शिकायत के लिए हमारा Copyright / DMCA पेज देखें।</p>
<h2>8. ज़िम्मेदारी</h2>
<p>हम तीसरे पक्ष के प्लेटफ़ॉर्म की सामग्री, सेवाओं, बिलिंग या तरीक़ों के लिए, और उनके इस्तेमाल से होने वाले किसी नुक़सान के लिए ज़िम्मेदार नहीं हैं। हमारी ज़िम्मेदारी क़ानून द्वारा अनुमत अधिकतम सीमा तक सीमित है।</p>
<h2>9. बदलाव</h2>
<p>हम इन शर्तों को कभी भी अपडेट कर सकते हैं। पेज के ऊपर दी गई तारीख़ नवीनतम संस्करण दिखाती है।</p>
<h2>10. लागू क़ानून</h2>
<p>ये शर्तें फ़्रांसीसी क़ानून के अधीन हैं। अगर आप उपभोक्ता हैं, तो आपके निवास देश के क़ानून की सुरक्षा भी आपको मिलती रहती है।</p>
<p>संपर्क: <a href="mailto:${S.email}">${S.email}</a></p>`,
cookies: `
<p>यह नीति बताती है कि <strong>${S.domain}</strong> पर आने पर आपके डिवाइस में क्या सेव होता है।</p>
<h2>1. हम क्या सेव करते हैं</h2>
<p>साइट विज्ञापन या ट्रैकिंग कुकीज़ का इस्तेमाल नहीं करती। यह सिर्फ़ ज़रूरी कामों के लिए आपके ब्राउज़र का लोकल स्टोरेज इस्तेमाल करती है:</p>
<ul>
<li><strong>age_ok</strong> (लोकल स्टोरेज, 30 दिन): याद रखता है कि आपने 18+ होने की पुष्टि की है, ताकि उम्र की जाँच हर पेज पर न दिखे।</li>
<li><strong>promo_seen</strong> (सेशन स्टोरेज, टैब बंद होने तक): प्रमोशनल पॉप-अप को हर विज़िट में सिर्फ़ एक बार दिखाता है।</li>
</ul>
<p>ये चीज़ें साइट के सही काम के लिए ज़रूरी हैं और ePrivacy नियमों के तहत इनके लिए सहमति की ज़रूरत नहीं है। इनमें कोई निजी डेटा नहीं होता और ये कभी हमें नहीं भेजी जातीं।</p>
<h2>2. फ़ॉन्ट</h2>
<p>फ़ॉन्ट हमारे अपने सर्वर पर होस्ट हैं: Google या किसी अन्य फ़ॉन्ट प्रदाता को कोई अनुरोध नहीं भेजा जाता।</p>
<h2>3. तीसरे पक्ष की साइटें</h2>
<p>जब आप किसी प्लेटफ़ॉर्म के लिंक पर क्लिक करते हैं, तो वह प्लेटफ़ॉर्म और उसका एफ़िलिएट नेटवर्क अपनी कुकीज़ लगा सकते हैं, जैसे आपके साइन-अप का श्रेय तय करने के लिए। उन कुकीज़ पर उनकी अपनी नीतियाँ लागू होती हैं, हमारी नहीं।</p>
<h2>4. स्टोरेज का प्रबंधन</h2>
<p>आप ब्राउज़र सेटिंग्स (साइट डेटा) से कभी भी लोकल स्टोरेज मिटा सकते हैं। उम्र की जाँच बस फिर से दिखेगी।</p>
<h2>5. बदलाव</h2>
<p>अगर भविष्य में हम एनालिटिक्स या दूसरी कुकीज़ जोड़ते हैं, तो इस पेज को अपडेट करेंगे और जहाँ ज़रूरी हो, आपकी सहमति माँगेंगे।</p>`,
dmca: `
<p>हम बौद्धिक संपदा अधिकारों का सम्मान करते हैं। अगर आपको लगता है कि <strong>${S.domain}</strong> पर कोई सामग्री आपके कॉपीराइट या अन्य अधिकारों का उल्लंघन करती है, तो हमसे संपर्क करें, हम जल्दी कार्रवाई करेंगे।</p>
<h2>1. नोटिस कैसे भेजें</h2>
<p><a href="mailto:${S.email}">${S.email}</a> पर “Copyright notice” विषय के साथ ईमेल करें और इसमें शामिल करें:</p>
<ul>
<li>आपका नाम, संपर्क विवरण और, अगर लागू हो, वह अधिकार-धारक जिसका आप प्रतिनिधित्व करते हैं;</li>
<li>संरक्षित कृति का विवरण;</li>
<li>हमारी साइट पर उस सामग्री का सटीक URL;</li>
<li>यह बयान कि आप सद्भाव से मानते हैं कि उपयोग अनधिकृत है;</li>
<li>यह बयान कि जानकारी सही है और आप मालिक हैं या उनकी ओर से कार्य करने के लिए अधिकृत हैं;</li>
<li>आपके भौतिक या इलेक्ट्रॉनिक हस्ताक्षर।</li>
</ul>
<h2>2. आगे क्या होता है</h2>
<p>हम हर पूरा नोटिस जाँचते हैं और संबंधित सामग्री को हटाते या निष्क्रिय करते हैं, आम तौर पर 72 घंटों के भीतर। ज़रूरत पड़ने पर हम आपसे और जानकारी माँग सकते हैं।</p>
<h2>3. प्रति-नोटिस</h2>
<p>अगर आपकी सामग्री हटा दी गई है और आपको लगता है कि यह गलती थी, तो आप वही जानकारी और एक स्पष्टीकरण के साथ प्रति-नोटिस भेज सकते हैं।</p>
<h2>4. किरदारों और प्लेटफ़ॉर्म की तस्वीरें</h2>
<p>प्लेटफ़ॉर्म के नाम और लोगो उनके मालिकों के हैं और सिर्फ़ पहचान के लिए इस्तेमाल होते हैं। किरदारों की तस्वीरें मौलिक, AI से बनी या प्रमोशन के लिए प्लेटफ़ॉर्म द्वारा दी गई हैं। जो प्लेटफ़ॉर्म अपनी सामग्री हटवाना या अपडेट करवाना चाहते हैं, वे कभी भी हमसे संपर्क कर सकते हैं।</p>`,
privacy: `
<p>यह नीति बताती है कि <strong>${S.domain}</strong> सामान्य डेटा संरक्षण विनियमन (GDPR) के अनुसार निजी डेटा को कैसे संभालती है।</p>
<h2>1. डेटा नियंत्रक</h2>
<p>${S.owner}, ${S.address}। संपर्क: <a href="mailto:${S.email}">${S.email}</a>।</p>
<h2>2. हम कौन सा डेटा लेते हैं</h2>
<ul>
<li><strong>ब्राउज़िंग:</strong> हमारे पास यूज़र अकाउंट या एनालिटिक्स नहीं हैं। हमारा होस्ट सुरक्षा और साइट चलाने के लिए तकनीकी लॉग (IP पता, ब्राउज़र, माँगे गए पेज) रख सकता है।</li>
<li><strong>संपर्क:</strong> अगर आप हमें लिखते हैं, तो हमें आपका नाम, ईमेल पता और संदेश मिलता है।</li>
<li><strong>लोकल स्टोरेज:</strong> हमारी कुकी नीति देखें। ये चीज़ें आपके डिवाइस पर ही रहती हैं।</li>
</ul>
<h2>3. हम इसका इस्तेमाल क्यों करते हैं (क़ानूनी आधार)</h2>
<ul>
<li>साइट चलाना और सुरक्षित रखना: वैध हित।</li>
<li>आपके संदेशों का जवाब देना: वैध हित / आपका अनुरोध।</li>
</ul>
<h2>4. संग्रहण अवधि</h2>
<p>संपर्क संदेश हमारी आख़िरी बातचीत के बाद 3 साल तक रखे जाते हैं। होस्ट के लॉग होस्ट की नीति के अनुसार रखे जाते हैं, आम तौर पर 12 महीने से ज़्यादा नहीं।</p>
<h2>5. इसे कौन पाता है</h2>
<p>सिर्फ़ प्रकाशक और हमारे तकनीकी सेवा प्रदाता (होस्टिंग${S.host.includes("TO FILL") ? "" : ": " + S.host})। हम आपका डेटा कभी नहीं बेचते। कुछ प्रदाता EU के बाहर हो सकते हैं; उस स्थिति में डेटा ट्रांसफ़र उचित सुरक्षा उपायों से सुरक्षित होता है, जैसे यूरोपीय आयोग की मानक अनुबंध धाराएँ।</p>
<h2>6. तीसरे पक्ष के प्लेटफ़ॉर्म</h2>
<p>किसी प्लेटफ़ॉर्म के लिंक पर क्लिक करते ही आप हमारी साइट से बाहर चले जाते हैं। वह प्लेटफ़ॉर्म अपनी प्राइवेसी नीति के अनुसार डेटा लेता है।</p>
<h2>7. आपके अधिकार</h2>
<p>आप <a href="mailto:${S.email}">${S.email}</a> पर ईमेल करके अपने डेटा तक पहुँच, उसमें सुधार या उसे मिटाने, उसके उपयोग पर आपत्ति या उसे सीमित करने, और पोर्टेबिलिटी का अनुरोध कर सकते हैं। आप अपने डेटा संरक्षण प्राधिकरण से शिकायत भी कर सकते हैं (फ़्रांस में: CNIL, www.cnil.fr)।</p>
<h2>8. नाबालिग</h2>
<p>यह साइट सिर्फ़ वयस्कों के लिए है। हम जानबूझकर 18 साल से कम उम्र के किसी व्यक्ति का डेटा नहीं लेते।</p>`,
ai: `
<p>हम <strong>${S.domain}</strong> पर आर्टिफ़िशियल इंटेलिजेंस की भूमिका के बारे में पूरी तरह पारदर्शी रहना चाहते हैं।</p>
<h2>1. किरदार AI हैं</h2>
<p>सूचीबद्ध सभी किरदार AI पर्सोना हैं: आप कभी किसी असली व्यक्ति से बात नहीं कर रहे होते। ज़्यादातर पूरी तरह काल्पनिक हैं। कुछ, जिन पर “Creator Twin” लिखा है, असली वयस्क क्रिएटर्स के आधिकारिक AI वर्ज़न हैं जिन्हें प्लेटफ़ॉर्म ने खुद प्रकाशित किया है; बातचीत फिर भी AI बनाता है, क्रिएटर नहीं।</p>
<h2>2. सभी किरदार वयस्क हैं</h2>
<p>हर किरदार 18 साल या उससे ज़्यादा उम्र का वयस्क दिखाया गया है। हम ऐसा कोई किरदार नहीं दिखाते जो नाबालिग हो या नाबालिग लगे, और दिखते ही उसे हटा देंगे। कोई भी चिंता <a href="mailto:${S.email}">${S.email}</a> पर बताएँ।</p>
<h2>3. तस्वीरें</h2>
<p>किरदारों की तस्वीरें AI से बनी हैं या प्लेटफ़ॉर्म ने दी हैं। Creator Twins को छोड़कर, इनमें असली लोग नहीं हैं। Creator Twin की तस्वीरें प्लेटफ़ॉर्म के आधिकारिक प्रचार चित्र हैं, क्रिएटर्स की सहमति से। किसी असली व्यक्ति से कोई और समानता अनजाने में है; हमसे संपर्क करें, हम तस्वीर हटा देंगे।</p>
<h2>4. टेक्स्ट</h2>
<p>इस साइट के कुछ विवरण और अनुवाद AI टूल की मदद से लिखे या अनुवादित किए जाते हैं, फिर हम उन्हें जाँचते हैं।</p>
<h2>5. बातचीत तीसरे पक्ष के प्लेटफ़ॉर्म पर होती है</h2>
<p>बातचीत आपके चुने हुए प्लेटफ़ॉर्म पर होती है, हमारी साइट पर नहीं। AI मॉडल गलत या अप्रत्याशित सामग्री बना सकते हैं। मेडिकल, क़ानूनी, वित्तीय या भावनात्मक सलाह के लिए उन पर भरोसा न करें, और कभी भी संवेदनशील निजी जानकारी साझा न करें।</p>
<h2>6. आपकी भलाई</h2>
<p>AI साथी मनोरंजन हैं। अगर आप अकेलापन, परेशानी या निर्भरता महसूस करें, तो भरोसेमंद लोगों या किसी विशेषज्ञ से बात करें।</p>`,
notice: `
<h2>प्रकाशक</h2>
<p>${S.owner}<br>${S.status}<br>${S.address}<br>SIRET: ${S.siret}<br>VAT: ${S.vat}<br>ईमेल: <a href="mailto:${S.email}">${S.email}</a></p>
<h2>प्रकाशन निदेशक</h2>
<p>${S.director}</p>
<h2>होस्टिंग</h2>
<p>${S.host}</p>
<h2>बौद्धिक संपदा</h2>
<p>इस साइट का डिज़ाइन, टेक्स्ट और कोड संरक्षित हैं। सूचीबद्ध प्लेटफ़ॉर्म के ट्रेडमार्क और लोगो उनके मालिकों के हैं और सिर्फ़ पहचान के लिए इस्तेमाल होते हैं।</p>
<h2>वयस्क सामग्री</h2>
<p>यह साइट वयस्कों (18+) के लिए आरक्षित है। प्रवेश उम्र की पुष्टि पर निर्भर है।</p>`
}
});
