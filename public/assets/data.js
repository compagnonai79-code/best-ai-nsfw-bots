/* =====================================================================
   DATA — edit this file to update links, profiles and the promo.
   Texts are written in English here; their translations live in i18n.js
   (add a new bio/tag there too, otherwise it shows in English).
   ===================================================================== */

/* ---------- SITE INFO (used in Contact + legal pages) ----------
   ⚠️ Fill in the [TO FILL] values: French law requires them in the Legal Notice. */
const SITE = {
  domain:   "best-ai-nsfw-bots.com",
  url:      "https://best-ai-nsfw-bots.com",
  email:    "compagnon.ai79@gmail.com",
  owner:    "[TO FILL: your full name or company name]",
  status:   "[TO FILL: e.g. Micro-entrepreneur / SAS]",
  address:  "[TO FILL: postal address]",
  siret:    "[TO FILL: SIRET number]",
  vat:      "[TO FILL: VAT number, or 'VAT not applicable, art. 293 B of the CGI']",
  director: "[TO FILL: publication director (usually you)]",
  host:     "[TO FILL: hosting company name, address and phone — e.g. Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA]",
  author:   "Nicholas Simpson",   // name signing the reviews
  updated:  "2026-11-07"   // date shown on legal pages
};

/* ---------- PLATFORMS (affiliate links + data) ----------
   url: your affiliate link ("" = not available yet → "Coming soon")
   top: true = shown in the Top platforms ranking highlights
   data: shown on the Data page. null = "pending verification".
     free      true/false  – free tier available
     price     "$12.99/mo" – cheapest paid plan (copy it from the official pricing page)
     images/voice/video/app  true/false – feature available
     checked   "YYYY-MM-DD" – date YOU checked these facts on the official site
*/
const PLATFORMS = {
  candy:    { name:"Candy AI",     url:"https://candy.ai/?via=ic3p7r", fallback:"https://candy.ai", rating:4.8, top:true, color:["#ff3d8b","#ff8a5c"],
              desc:"Polished AI companion app with customizable characters, image generation and voice messages.",
              feats:["Create your own companion","AI-generated images","Voice messages"],
              tags:["Image generation","Voice","Custom characters","Realistic","Anime"] },
  spicychat:{ name:"SpicyChat AI", url:"https://spicychat.ai?ref=mze1zjm", rating:4.7, top:true, color:["#ff5a36","#ffb03a"],
              desc:"Huge community library of characters for roleplay, with a generous free tier.",
              feats:["Thousands of community characters","Strong roleplay focus","Free tier available"],
              tags:["Roleplay","Free tier","Community characters","Anime"] },
  gfgpt:    { name:"GirlfriendGPT", url:"", rating:4.4, color:["#8b5cf6","#ec4899"],
              desc:"Community-driven platform to chat with or create AI characters.",
              feats:["Community character creator","Roleplay scenarios","Image features"],
              tags:["Roleplay","Community characters","Custom characters","Image generation"] },
  aiallure: { name:"AIAllure",     url:"https://www.aiallure.com/?ref=3Ky1WCa1ksecU30kbFw4Tkuhh9y&mode=0", rating:4.3, color:["#e11d48","#9333ea"],
              desc:"AI companion chat focused on immersive conversations and personalized characters.",
              feats:["Personalized companions","Immersive chat","Image features"],
              tags:["Custom characters","Realistic","Image generation"] },
  kupid:    { name:"Kupid AI",     url:"", rating:4.4, color:["#f43f5e","#fb7185"],
              desc:"AI companion app with a range of characters, images and voice features.",
              feats:["Wide character selection","Images","Voice features"],
              tags:["Image generation","Voice","Realistic","Anime"] },
  muah:     { name:"Muah AI",      url:"https://muah.ai/affiliate/track.php?ref=2ZBBF8KW0Q", rating:4.5, top:true, color:["#06b6d4","#8b5cf6"],
              desc:"Feature-rich companion platform known for voice calls, photos and deep customization.",
              feats:["Voice calls","Photo exchange","Deep customization"],
              tags:["Voice","Image generation","Custom characters","Mobile app"] },
  fantasygf:{ name:"FantasyGF",    url:"", rating:4.2, color:["#a855f7","#f472b6"],
              desc:"Design your ideal AI girlfriend and chat with her, with image generation included.",
              feats:["Character designer","Image generation","Chat & roleplay"],
              tags:["Custom characters","Image generation","Realistic","Anime"] },
  nectar:   { name:"Nectar AI",    url:"", rating:4.3, color:["#f59e0b","#ef4444"],
              desc:"AI companion platform with customizable characters and image generation.",
              feats:["Customizable companions","Image generation","Roleplay"],
              tags:["Custom characters","Image generation","Roleplay"] },
  seduced:  { name:"Seduced AI",   url:"https://seduced.com/t/6ad79a3a3b31df9c339ed74b", rating:4.4, color:["#be123c","#7c3aed"],
              desc:"AI image and video generator for adult content with many style presets.",
              feats:["Image generation","Short video generation","Many style presets"],
              tags:["Image generation","Video","Realistic","Anime"] },
};

/* Facts for the Data page — verify each value on the official site, then set "checked". */
/* ---------- PLATFORM FACTS (used to compute every score — see "How we rate") ----------
   Only facts checked on the platform's own public pages. null = not verified yet (counts half in the score).
   free: true = free start confirmed · unlimited: true = unlimited free chat confirmed
   priceMo = month-to-month price, priceBest = lowest per-month price on a longer plan (cur = currency)
   discreet = neutral name on the bank statement · wallet = Apple Pay / Google Pay */
const PLATFORM_DATA = {
  candy:     { free:true, unlimited:false, priceMo:13.99, priceBest:3.99, cur:"€", images:true, voice:true, calls:true, video:true, group:true, app:null,
               discreet:true, crypto:true, wallet:true, paypal:null, checked:"2026-11-07", src:"candy.ai/subscriptions" },
  spicychat: { free:true, unlimited:true, priceMo:5.95, priceBest:4.94, cur:"€", images:true, voice:true, calls:null, video:null, group:true, app:true,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"spicychat.ai/subscribe" },
  muah:      { free:null, unlimited:null, priceMo:null, priceBest:null, cur:"$", images:true, voice:true, calls:true, video:true, group:null, app:null,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"muah.ai" },
  kupid:     { free:true, unlimited:true, priceMo:null, priceBest:null, cur:"$", images:true, voice:true, calls:null, video:true, group:null, app:true,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"kupid.ai" },
  gfgpt:     { free:true, unlimited:null, priceMo:null, priceBest:null, cur:"$", images:true, voice:true, calls:null, video:null, group:null, app:null,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"gptgirlfriend.online" },
  aiallure:  { free:true, unlimited:null, priceMo:null, priceBest:null, cur:"$", images:true, voice:null, calls:null, video:true, group:null, app:null,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"aiallure.com" },
  fantasygf: { free:null, unlimited:null, priceMo:null, priceBest:null, cur:"$", images:true, voice:true, calls:null, video:true, group:null, app:null,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"fantasygf.com" },
  nectar:    { free:null, unlimited:null, priceMo:null, priceBest:null, cur:"$", images:true, voice:true, calls:true, video:true, group:null, app:null,
               discreet:null, crypto:null, wallet:null, paypal:null, checked:"2026-11-07", src:"nectar.ai" },
  seduced:   { free:null, unlimited:false, priceMo:null, priceBest:null, cur:"$", images:true, voice:false, calls:false, video:true, group:false, app:null,
               discreet:null, crypto:true, wallet:null, paypal:null, checked:"2026-11-07", src:"seduced.com/plans", chat:false },
};

/* ---------- TOP 10 OF THE WEEK (editor's picks) ----------
   Profile ids, in order. Edit this list every week. Ids = the end of the /model/<id> URL. */
const TOP_PICKS = ["riley-reid","pilar-ibarra","mizuki-saeki","mia-malkova","valeria-ochoa","lira","maisie-mckae","sp00kybby","victor-draven","lena-the-plug"];

/* ---------- CURRENT CANDY OFFER (banner) ----------
   Candy's public discount, copied from its own site (promotion window + subscription page).
   checked = date we last saw it on candy.ai. The banner hides itself 30 days after that date
   unless you re-check the offer and update the date (step 6c of tools/UPDATE_CANDY.md).
   Set active:false to remove it everywhere. Never put an unverified code here. */
const OFFER = {
  active: true,
  platform: "candy",
  pct: 70,                 // "up to -70%"
  price: 3.99,              // € per month on the 12-month plan
  regular: 13.99,          // € month-to-month price
  checked: "2026-11-07",
  days: 30
};

/* ---------- PROMO POP-UP ----------
   (pop-up texts are translated in i18n.js: promo_title, promo_text, promo_btn) */
const PROMO = {
  platform: "candy",                 // which platform the pop-up promotes
  img: "images/promo-candy.jpg",     // put your promo image here (portrait, ~600×800)
  delaySeconds: 8,                   // shown after X seconds…
  showOnExit: true                   // …or when the mouse leaves the page (desktop)
};

/* ---------- CATEGORIES (tags) ----------
   Every tag used on a profile must be listed here (build.js warns otherwise).
   Translations: src/i18n-tags.js. A category with 0 profiles gets a page that is not indexed until you add a profile. */
const TAG_GROUPS = {
  style:       ["2.5D","Anime","Cartoon","Hentai","Realistic"],
  vibe:        ["Alt","Cosplay","E-girl","Emo","Goth","Gyaru","Kawaii","Punk","Tomboy","Waifu"],
  personality: ["Bad Girl","Brat","Caring","Clingy","Dandere","Dominant","Experienced","Flirty","Horny","Innocent","Jealous","Kuudere","Loyal","Mean","Mysterious","Nympho","Playful","Rebel","Romantic","Sadistic","Seductress","Shy","Submissive","Sweet","Temptress","Tsundere","Virgin","Yandere"],
  body:        ["Athletic","BBW","Big Ass","Big Boobs","Chubby","Curvy","Fit","Flat Chested","Hourglass","Muscle","Muscular","Pawg","Petite","Pierced","Pregnant","Size Difference","Slim","Small Tits","Tall","Tattooed","Thicc"],
  hair:        ["Black Hair","Blonde","Blue Hair","Brunette","Long Hair","Pigtails","Pink Hair","Purple Hair","Redhead","Short Hair","White Hair"],
  origin:      ["Arab","Asian","Brazilian","British","Caucasian","Chinese","Colombian","Ebony","European","Filipina","French","German","Indian","Italian","Japanese","Korean","Latina","Mexican","Middle Eastern","Mixed Race","Russian","Thai","Ukrainian","Vietnamese"],
  role:        ["Barista","Biker","Boss","Cam Girl","Caregiver","CEO","College Student","Coworker","Doctor","Escort","Fitness","Flight Attendant","Gamer","Gamer Girl","Gym Trainer","Influencer","Jester","K-pop","Lawyer","Librarian","Maid","Masseuse","Model","Nun","Nurse","OnlyFans","Police Officer","Professor","Secretary","Streamer","Stripper","Teacher","Travel","VTuber","Waitress","Yoga Instructor"],
  relationship:["Best Friend","Boyfriend","Bully","Cheating","Cougar","Cousin","Daddy","DILF","Ex-Girlfriend","Forbidden","Friends w/ Benefits","Girl Next Door","Girlfriend","Granny","Husband","Mature","MILF","Neighbor","Teen (18+)","One Night Stand","Roommate","Slow Burn","Stepbrother","Stepdad","Stepmom","Stepsister","Stranger","Sugar Baby","Twins","Young","Wife"],
  fantasy:     ["Alien","Android","Angel","Bear","Bunny Girl","Catgirl","Demon","Elf","Fairy","Fantasy","Fox Girl","Furry","Goddess","Mermaid","Monster Girl","Princess","Queen","Robot","Sage","Succubus","Vampire","Witch"],
  gender:      ["Female","Male","Bisexual","BL","Femboy","Futa","Gay","Lesbian","Sissy","Trans","Twink"],
  kink:        ["BDSM","Bondage","Breast Expansion","Chastity","Cuckold","Exhibitionism","Feet","Femdom","Hypno","JOI","Netorare","Pet Play","POV","Public","Seduction","Threesome","Vore","Voyeur"],
  features:    ["Creator Twin","Comedy","Game","Group Chat","Image generation","Roleplay","Sexting","Video","Voice","VR"]
};
const ALL_TAGS = [...new Set(Object.values(TAG_GROUPS).flat())];

/* ---------- AI GIRLFRIEND PROFILES (home page) ----------
   ALL characters must be adults (age 18+). Only use images of clearly adult characters.
   img:      path to the picture, e.g. "images/luna.jpg" (portrait 3:4). Missing file = coloured placeholder.
   link:     direct link to the character (with your affiliate code). Empty = the platform's affiliate link.
   age:      optional — shown next to the name when set.
   bio:      { en, fr, es, de, pt, hi } — one text per language.
   platform: key from PLATFORMS above (the "Chat with her" button uses that affiliate link)
   added:    date added "YYYY-MM-DD" — used for the "New" counter (last 14 days)
*/
const NEW_DAYS = 14;

/* SpicyChat deep links: ?ref=mze1zjm is added automatically (see SC below). */
const SC = id => `https://spicychat.ai/chat/${id}?ref=mze1zjm`;

const PROFILES = [
  { name:"Avery Hughes", platform:"spicychat", added:"2026-11-04", img:"images/avery-hughes.jpg", link:SC("a98ba0a7-68ba-441a-8785-c2481941fac8"),
    tags:["Female","Tomboy","Best Friend","Comedy","Romantic","Caring","Realistic"],
    bio:{ en:"Your tomboy best friend picked a Halloween costume that turned out far more daring than she expected. Now she wants your honest opinion.",
          fr:"Ta meilleure amie garçon manqué a choisi un costume d'Halloween bien plus osé que prévu. Maintenant, elle veut ton avis sincère.",
          es:"Tu mejor amiga marimacho eligió un disfraz de Halloween mucho más atrevido de lo que esperaba. Ahora quiere tu opinión sincera.",
          de:"Deine burschikose beste Freundin hat ein Halloween-Kostüm gewählt, das viel gewagter ist als gedacht. Jetzt will sie deine ehrliche Meinung.",
          pt:"Sua melhor amiga moleca escolheu uma fantasia de Halloween bem mais ousada do que esperava. Agora ela quer sua opinião sincera.",
          hi:"तुम्हारी टॉमबॉय बेस्ट फ़्रेंड ने हैलोवीन के लिए ऐसा कॉस्ट्यूम चुना जो उम्मीद से कहीं ज़्यादा बोल्ड निकला। अब उसे तुम्हारी सच्ची राय चाहिए।" } },
  { name:"Elizabeth Sinclair", platform:"spicychat", added:"2026-11-04", img:"images/elizabeth-sinclair.jpg", link:SC("e5dc1bbc-af8a-4d7e-9338-bbaad1610f3a"),
    tags:["Female","College Student","Best Friend","Romantic","Roleplay"],
    bio:{ en:"The most popular girl on campus is also your close friend. Now rumors about you two are spreading, and she's at your door wanting answers.",
          fr:"La fille la plus populaire du campus est aussi ton amie proche. Des rumeurs circulent sur vous deux, et elle frappe à ta porte pour avoir des réponses.",
          es:"La chica más popular del campus también es tu amiga íntima. Ahora corren rumores sobre vosotros y está en tu puerta pidiendo explicaciones.",
          de:"Das beliebteste Mädchen auf dem Campus ist auch deine enge Freundin. Jetzt gehen Gerüchte über euch um – und sie steht vor deiner Tür.",
          pt:"A garota mais popular do campus também é sua amiga próxima. Agora há boatos sobre vocês dois, e ela está na sua porta querendo respostas.",
          hi:"कैंपस की सबसे लोकप्रिय लड़की तुम्हारी करीबी दोस्त भी है। अब तुम दोनों के बारे में अफ़वाहें फैल रही हैं, और वह जवाब माँगने तुम्हारे दरवाज़े पर है।" } },
  { name:"Her Pool Attendant", platform:"spicychat", added:"2026-11-04", img:"images/her-pool-attendant.jpg", link:SC("d9359f08-8753-436b-bf43-2b136133ee7f"),
    tags:["Female","Dominant","Boss","Comedy","Group Chat","Realistic"],
    bio:{ en:"Your first day as a pool attendant at a luxury villa. Your employer and her two spoiled friends are betting on when you'll quit.",
          fr:"Ton premier jour comme employé de piscine dans une villa de luxe. Ta patronne et ses deux amies gâtées parient sur le jour où tu vas craquer.",
          es:"Tu primer día como encargado de la piscina en una villa de lujo. Tu jefa y sus dos amigas consentidas apuestan cuándo vas a renunciar.",
          de:"Dein erster Tag als Poolboy in einer Luxusvilla. Deine Chefin und ihre zwei verwöhnten Freundinnen wetten, wann du hinschmeißt.",
          pt:"Seu primeiro dia como piscineiro numa mansão de luxo. Sua patroa e as duas amigas mimadas apostam quando você vai desistir.",
          hi:"एक आलीशान विला में पूल अटेंडेंट के रूप में तुम्हारा पहला दिन। तुम्हारी मालकिन और उसकी दो बिगड़ी सहेलियाँ शर्त लगा रही हैं कि तुम कब हार मानोगे।" } },
  { name:"They Saw My Chats!", platform:"spicychat", added:"2026-11-04", img:"images/they-saw-my-chats.jpg", link:SC("3b7c06eb-5986-4413-a640-f31482ab8251"),
    tags:["Female","Wife","Comedy","Romantic","Group Chat"],
    bio:{ en:"Your wife and her best friend just found your chat history. Now you have some explaining to do.",
          fr:"Ta femme et sa meilleure amie viennent de découvrir tes conversations. Tu vas devoir t'expliquer.",
          es:"Tu esposa y su mejor amiga acaban de encontrar tu historial de chats. Ahora te toca dar explicaciones.",
          de:"Deine Frau und ihre beste Freundin haben gerade deinen Chatverlauf entdeckt. Jetzt musst du einiges erklären.",
          pt:"Sua esposa e a melhor amiga dela acabaram de achar seu histórico de conversas. Agora você vai ter que se explicar.",
          hi:"तुम्हारी पत्नी और उसकी बेस्ट फ़्रेंड ने तुम्हारी चैट हिस्ट्री देख ली है। अब तुम्हें बहुत कुछ समझाना पड़ेगा।" } },
  { name:"Maisie Mckae", platform:"spicychat", added:"2026-11-06", img:"images/maisie-mckae.jpg", link:SC("09808294-ee37-4636-9353-bb25b24226c8"),
    tags:["Female","Blonde","Tsundere","Romantic","Comedy"],
    bio:{ en:"Your sister's best friend has never liked you. Tonight, movie night forces her to knock on your door — and the sparks fly.",
          fr:"La meilleure amie de ta sœur ne t'a jamais supporté. Ce soir, la soirée film l'oblige à frapper à ta porte… et les étincelles fusent.",
          es:"La mejor amiga de tu hermana nunca te ha soportado. Esta noche, la noche de películas la obliga a llamar a tu puerta… y saltan chispas.",
          de:"Die beste Freundin deiner Schwester konnte dich nie leiden. Heute zwingt sie der Filmabend, an deine Tür zu klopfen – und es knistert.",
          pt:"A melhor amiga da sua irmã nunca foi com a sua cara. Hoje, a noite de filmes a obriga a bater na sua porta… e saem faíscas.",
          hi:"तुम्हारी बहन की बेस्ट फ़्रेंड तुम्हें कभी पसंद नहीं करती थी। आज मूवी नाइट की वजह से उसे तुम्हारा दरवाज़ा खटखटाना पड़ता है — और चिंगारियाँ उड़ती हैं।" } },
  { name:"Janice Cooper", platform:"spicychat", added:"2026-11-04", img:"images/janice-cooper.jpg", link:SC("0e6e2923-4d45-446b-bdb0-3c471f78bd38"),
    tags:["Female","MILF","Mature","Forbidden","Romantic","Submissive"],
    bio:{ en:"You run into your ex-girlfriend's mother at the supermarket — and she has no idea you two broke up.",
          fr:"Tu croises la mère de ton ex au supermarché… et elle ne sait pas encore que vous avez rompu.",
          es:"Te cruzas con la madre de tu ex en el supermercado… y ella no sabe que habéis roto.",
          de:"Du triffst die Mutter deiner Ex im Supermarkt – und sie weiß nicht, dass ihr euch getrennt habt.",
          pt:"Você esbarra na mãe da sua ex no supermercado… e ela não sabe que vocês terminaram.",
          hi:"सुपरमार्केट में तुम्हारी मुलाक़ात अपनी एक्स-गर्लफ्रेंड की माँ से होती है — और उन्हें पता ही नहीं कि तुम दोनों का ब्रेकअप हो चुका है।" } },
  { name:"May", platform:"spicychat", added:"2026-11-04", img:"images/may.jpg", link:SC("8c3f0dec-7857-4a44-85d7-338a8255ecd8"),
    tags:["Female","MILF","Caring","Romantic","Realistic"],
    bio:{ en:"A hard-working single mom juggling long shifts and bills, who has almost given up on finding love.",
          fr:"Une mère célibataire courageuse qui jongle entre longues journées et factures, et qui a presque renoncé à trouver l'amour.",
          es:"Una madre soltera trabajadora que hace malabares con turnos largos y facturas, y que casi ha renunciado al amor.",
          de:"Eine fleißige alleinerziehende Mutter zwischen langen Schichten und Rechnungen, die die Liebe fast aufgegeben hat.",
          pt:"Uma mãe solo batalhadora que se divide entre turnos longos e contas, e quase desistiu de encontrar o amor.",
          hi:"लंबी शिफ़्ट और बिलों के बीच जूझती एक मेहनती सिंगल मॉम, जिसने प्यार पाने की उम्मीद लगभग छोड़ दी है।" } },
  { name:"Scaramouche", platform:"spicychat", added:"2026-11-04", img:"images/scaramouche.jpg", link:SC("2c0f5f67-dad0-4c24-9bf7-f767d29d5bd5"),
    tags:["Male","Boyfriend","College Student","Romantic"],
    bio:{ en:"Your cold, sarcastic boyfriend from university. Getting him to open up is the real challenge.",
          fr:"Ton petit ami froid et sarcastique rencontré à la fac. Le vrai défi : le faire s'ouvrir.",
          es:"Tu novio frío y sarcástico de la universidad. El verdadero reto es que se abra contigo.",
          de:"Dein kühler, sarkastischer Freund von der Uni. Die echte Herausforderung: ihn zum Auftauen zu bringen.",
          pt:"Seu namorado frio e sarcástico da faculdade. O verdadeiro desafio é fazê-lo se abrir.",
          hi:"यूनिवर्सिटी का तुम्हारा रूखा और व्यंग्य करने वाला बॉयफ़्रेंड। असली चुनौती है उसे खुलवाना।" } },
  { name:"Jade Bluebell", platform:"spicychat", added:"2026-11-04", img:"images/jade-bluebell.jpg", link:SC("8681960e-853e-4c1b-b519-59f8a0ba184c"),
    tags:["Female","Police Officer","Roleplay"],
    bio:{ en:"A brilliant detective who has finally tracked you down on a warehouse rooftop. What happens next is up to you.",
          fr:"Une détective brillante qui a enfin réussi à te coincer sur le toit d'un entrepôt. La suite dépend de toi.",
          es:"Una detective brillante que por fin te ha acorralado en la azotea de un almacén. Lo que pase ahora depende de ti.",
          de:"Eine brillante Detektivin hat dich endlich auf dem Dach einer Lagerhalle gestellt. Was jetzt passiert, liegt bei dir.",
          pt:"Uma detetive brilhante finalmente encurralou você no telhado de um armazém. O que acontece agora depende de você.",
          hi:"एक तेज़-तर्रार जासूस ने आख़िरकार तुम्हें एक गोदाम की छत पर पकड़ लिया है। आगे क्या होगा, यह तुम पर है।" } },
  { name:"Ava and Harper", platform:"spicychat", added:"2026-11-04", img:"images/ava-and-harper.jpg", link:SC("6f2e5bc6-d820-48e3-953b-bb0814677354"),
    tags:["Female","Girlfriend","Dominant","Group Chat","Realistic"],
    bio:{ en:"Your two girlfriends have grown distant lately — and tonight they have something to tell you.",
          fr:"Tes deux petites amies se sont éloignées ces derniers temps… et ce soir, elles ont quelque chose à t'annoncer.",
          es:"Tus dos novias se han distanciado últimamente… y esta noche tienen algo que decirte.",
          de:"Deine beiden Freundinnen sind in letzter Zeit auf Abstand gegangen – und heute Abend haben sie dir etwas zu sagen.",
          pt:"Suas duas namoradas andam distantes… e hoje à noite elas têm algo para te contar.",
          hi:"तुम्हारी दोनों गर्लफ्रेंड पिछले कुछ समय से दूर-दूर रहने लगी हैं — और आज रात उन्हें तुमसे कुछ कहना है।" } },
  { name:"Blair Sterling", platform:"spicychat", added:"2026-11-04", img:"images/blair-sterling.jpg", link:SC("37945be0-9831-4f95-b852-bba3ed39bcc0"),
    tags:["Female","College Student","Dominant","Size Difference","Realistic"],
    bio:{ en:"The smartest girl in college, who has turned everyone down. Your friend bets you can't win her over.",
          fr:"La fille la plus brillante de la fac, qui a repoussé tous ses prétendants. Ton ami parie que tu n'arriveras pas à la séduire.",
          es:"La chica más lista de la universidad, que ha rechazado a todos. Tu amigo apuesta a que no podrás conquistarla.",
          de:"Die klügste Studentin am College, die bisher jeden abgewiesen hat. Dein Kumpel wettet, dass du sie nicht rumkriegst.",
          pt:"A garota mais inteligente da faculdade, que já recusou todo mundo. Seu amigo aposta que você não vai conquistá-la.",
          hi:"कॉलेज की सबसे होशियार लड़की, जिसने सबको ठुकरा दिया है। तुम्हारे दोस्त की शर्त है कि तुम उसका दिल नहीं जीत पाओगे।" } },
];


;const IMG_OK = ["images/promo-candy.jpg","images/avery-hughes.jpg","images/elizabeth-sinclair.jpg","images/her-pool-attendant.jpg","images/they-saw-my-chats.jpg","images/maisie-mckae.jpg","images/janice-cooper.jpg","images/may.jpg","images/scaramouche.jpg","images/jade-bluebell.jpg","images/ava-and-harper.jpg","images/blair-sterling.jpg"];
;/* images not uploaded yet → placeholder */
for (const p of PROFILES) if (p.img && p.img.startsWith("images/") && !IMG_OK.includes(p.img)) p.img = "";
if (PROMO.img.startsWith("images/") && !IMG_OK.includes(PROMO.img)) PROMO.img = "";
