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
  host:     "Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA – +1 650 319 8930 – www.cloudflare.com",
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
  age:         ["Young","Teen (18+)" ],   /* tags shown in the "Age" filter next to the age ranges (e.g. "Old","Very Old") */
  style:       ["2.5D","Anime","Cartoon","Hentai","Realistic"],
  vibe:        ["Alt","Cosplay","E-girl","Emo","Goth","Gyaru","Kawaii","Punk","Tomboy","Waifu"],
  personality: ["Bad Girl","Brat","Caring","Clingy","Dandere","Dominant","Experienced","Flirty","Horny","Innocent","Jealous","Kuudere","Loyal","Mean","Mysterious","Nympho","Playful","Rebel","Romantic","Sadistic","Seductress","Shy","Submissive","Sweet","Temptress","Tsundere","Virgin","Yandere"],
  body:        ["Athletic","BBW","Big Ass","Big Boobs","Chubby","Curvy","Fit","Flat Chested","Hourglass","Muscle","Muscular","Pawg","Petite","Pierced","Pregnant","Size Difference","Slim","Small Tits","Tall","Tattooed","Thicc"],
  hair:        ["Black Hair","Blonde","Blue Hair","Brunette","Long Hair","Pigtails","Pink Hair","Purple Hair","Redhead","Short Hair","White Hair"],
  origin:      ["Arab","Asian","Brazilian","British","Caucasian","Chinese","Colombian","Ebony","European","Filipina","French","German","Indian","Italian","Japanese","Korean","Latina","Mexican","Middle Eastern","Mixed Race","Russian","Thai","Ukrainian","Vietnamese"],
  role:        ["Barista","Biker","Boss","Cam Girl","Caregiver","CEO","College Student","Coworker","Doctor","Escort","Fitness","Flight Attendant","Gamer","Gamer Girl","Gym Trainer","Influencer","Jester","K-pop","Lawyer","Librarian","Maid","Masseuse","Model","Nun","Nurse","OnlyFans","Police Officer","Professor","Secretary","Streamer","Stripper","Teacher","Travel","VTuber","Waitress","Yoga Instructor"],
  relationship:["Best Friend","Boyfriend","Bully","Cheating","Cougar","Cousin","Daddy","DILF","Ex-Girlfriend","Forbidden","Friends w/ Benefits","Girl Next Door","Girlfriend","Granny","Husband","Mature","MILF","Neighbor","One Night Stand","Roommate","Slow Burn","Stepbrother","Stepdad","Stepmom","Stepsister","Stranger","Sugar Baby","Twins","Wife"],
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

;
/* =====================================================================
   CANDY AI characters (from candy.ai featured characters, /ai-anime and /ai-boyfriend, 2026-11-04).
   bio.fr = Candy's official description. Other languages get an automatic short
   presentation (i18n "auto_bio") until you add bio.en / bio.es / …
   CANDY_REF: put your affiliate parameter here once you have it, e.g. "via=yourcode".
   ===================================================================== */
const CANDY_REF = "via=ic3p7r";
const CANDY_PROFILES = [
/* Candy Creators: official AI twins of real adult creators (consented to Candy; images reused under the affiliate terms) */
{"id": "lena-the-plug", "name": "Lena the Plug", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-745772560-c0d94bd5-b3e8-4bce-87aa-b2f38c39fba6-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-745772560-461cd6bd-5986-459f-9169-074afa226f04-h264",
"url": "https://candy.ai/fr/ai-girlfriend/lena-the-plug", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Big Boobs",
"Model",
"Fitness",
"Travel",
"Playful",
"Image generation",
"Voice",
"Video"
,
"Chubby"
]},
{"id": "sophie-dee", "name": "Sophie Dee", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610844857-75185a65-787c-43c2-aff8-6103c727aa29-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/sophie-dee", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Image generation",
"Voice",
"Video"
,
"Chubby"
]},
{"id": "mia-malkova", "name": "Mia Malkova", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610858081-0b222b2a-5923-4714-84bf-f0f8d0b9fbe0-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/mia-malkova", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Streamer",
"Gamer",
"Gamer Girl",
"Travel",
"Playful",
"Image generation",
"Voice",
"Video"
,
"Chubby"
]},
{"id": "riley-reid", "name": "Riley Reid", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-676319764-44ea6125-e1a9-4284-ad8f-0f959c1b41d2-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-676319764-f93a3de8-1cd8-4f61-a5dc-cd4e9675d209-h264",
"url": "https://candy.ai/fr/ai-girlfriend/riley-reid", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Fit",
"Petite",
"Image generation",
"Voice",
"Video"
,
"Muscle"
]},
{"id": "ava-starz", "name": "Ava Starz", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/714441510-0360263c-7c21-4504-a1c8-29411d56e666-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/ava-starz", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Big Boobs",
"Playful",
"Flirty",
"Brat",
"Image generation",
"Voice",
"Video"
]},
{"id": "lexi-luna", "name": "Lexi Luna", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-720159183-265ac79f-e367-4c21-8df9-613b82837670-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-720159183-f976324b-0d90-49fc-9ac4-8297906db8d8-h264",
"url": "https://candy.ai/fr/ai-girlfriend/lexi-luna", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Big Boobs",
"Slim",
"MILF",
"Dominant",
"Stepmom",
"Image generation",
"Voice",
"Video"
,
"Petite"
]},
{"id": "bonnie-blue", "name": "Bonnie Blue", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/703513443-68ee1faf-118f-4821-bf9b-e29e9f791928-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/bonnie-blue", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Athletic",
"British",
"European",
"Brat",
"Image generation",
"Voice",
"Video"
,
"Muscle"
]},
{"id": "renae-erica", "name": "Renae Erica", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610853988-b6e7be45-8595-41ab-b426-629505240f63-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/renae-erica", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Petite",
"Gamer",
"Gamer Girl",
"Brat",
"Image generation",
"Voice",
"Video"
]},
{"id": "abigail-lutz", "name": "Abigail Lutz", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/669860392-42ccc811-7abf-427e-806a-d122b6e39520-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/abigail-lutz", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Athletic",
"Brat",
"Image generation",
"Voice",
"Video"
,
"Muscle"
,
"Chubby"
]},
{"id": "celine", "name": "Celine", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/645919414-295d300f-9870-4db2-b2f3-231b358202ff-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/celine", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Big Boobs",
"Slim",
"Italian",
"European",
"Image generation",
"Voice",
"Video"
,
"Petite"
]},
{"id": "brianna-howe", "name": "Brianna Howe", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/663716673-4c3c6fef-119e-4569-8465-64e709899ab7-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/brianna-howe", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Jealous",
"Image generation",
"Voice",
"Video"
,
"Chubby"
]},
{"id": "alexis-ivyedge", "name": "Alexis Ivyedge", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-718176323-58e5d7e7-bc6d-40a1-afb9-85d4d665bb7c-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-718176323-758d5114-78ba-40cf-95ec-3476aa53e4d0-h264",
"url": "https://candy.ai/fr/ai-girlfriend/alexis-ivyedge", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Big Boobs",
"Slim",
"Model",
"Image generation",
"Voice",
"Video"
,
"Petite"
]},
{"id": "mathilde-tantot", "name": "Mathilde Tantot", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-722736152-e3bebf89-78a5-4fe7-993c-bd3a0acba901-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-722736152-035e4f1f-99f8-409b-b823-f2dce4f99eaf-h264",
"url": "https://candy.ai/fr/ai-girlfriend/mathilde-tantot", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Athletic",
"French",
"European",
"Model",
"Image generation",
"Voice",
"Video"
,
"Big Ass"
]},
{"id": "asa-akira", "name": "Asa Akira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-724624759-5e2eb818-e93a-40b9-992c-12fcac2a9fe9-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-724624759-3d5d0b22-a9bf-48c3-aeeb-fcdf08e7688d-h264",
"url": "https://candy.ai/fr/ai-girlfriend/asa-akira", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Slim",
"Japanese",
"Asian",
"Exhibitionism",
"Image generation",
"Voice",
"Video"
,
"Petite"
]},
{"id": "emma-hix", "name": "Emma Hix", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-731776937-eb7c89c6-df4e-40c8-8ae1-35eb9274d183-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-731776937-6380de9b-6985-45ae-9814-d18c8c461d8d-h264",
"url": "https://candy.ai/fr/ai-girlfriend/emma-hix", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Big Boobs",
"Slim",
"Sweet",
"Playful",
"Neighbor",
"Girl Next Door",
"Image generation",
"Voice",
"Video"
]},
{"id": "bridgette-b", "name": "Bridgette B", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-739043385-30b59dc4-e9d5-4d1c-bf05-35eb756129c2-600x900-webp90", "sfw": true, "creator": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-739043385-a7d57aac-7538-48d7-bf55-45e1ca087c42-h264",
"url": "https://candy.ai/fr/ai-girlfriend/bridgette-b", "tags": [
"Female",
"Realistic",
"Creator Twin",
"Curvy",
"Big Boobs",
"Stripper",
"Dominant",
"Image generation",
"Voice",
"Video"
]},
{"id": "yama-gito", "name": "Yama", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-359724132-2e8baad8-df67-431d-9901-37eea2e7189a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/yama-gito", "tags": [
"Female",
"Anime",
"Roommate",
"Athletic",
"Japanese",
"Asian",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua colega de quarto sexy precisa dormir na sua cama. Será que você consegue se comportar? 🫦", "es": "Tu compañera de piso sexy tiene que dormir en tu cama. ¿Podrás estarte quieto? 🫦", "en": "Your sexy roommate has to sleep in your bed. Can you keep your hands to yourself? 🫦", "de": "Deine sexy Mitbewohnerin muss in deinem Bett schlafen. Kannst du die Finger bei dir behalten? 🫦", "fr": "Ta colocataire sexy doit dormir dans ton lit. Vas-tu pouvoir te tenir tranquille ? 🫦"}, "age": 20},
{"id": "mizuki-saeki", "name": "Mizuki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/656424653-d50a9995-58ee-4b35-877e-a526238f9bb0-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mizuki-saeki", "tags": [
"Female",
"Anime",
"Stepsister",
"Slim",
"Japanese",
"Asian",
"Barista",
"Shy",
"Submissive",
"Dandere",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua meia-irmã, sozinha em casa com você no fim de semana depois que seus pais te deixaram no comando. Você acabou de descobrir sem querer algo que ela não queria de jeito nenhum que você visse, e agora ela está morrendo de vergonha.", "es": "Tu hermanastra, sola en casa contigo todo el fin de semana después de que tus padres te dejaran a cargo. Acabas de descubrir por casualidad algo que ella no quería que vieras, y ahora se muere de vergüenza.", "en": "Your stepsister, home alone with you for the weekend after your parents left you in charge. You just stumbled on something she really didn't want you to see, and now she's dying of embarrassment.", "de": "Deine Stiefschwester, übers Wochenende allein mit dir zu Hause, nachdem deine Eltern dir das Kommando überlassen haben. Du bist zufällig auf etwas gestoßen, das du auf keinen Fall sehen solltest, und jetzt stirbt sie vor Scham.", "fr": "Ta demi-sœur, seule à la maison avec toi pour le week-end après que tes parents t'aient laissé aux commandes. Tu viens de tomber par hasard sur quelque chose qu'elle ne voulait vraiment pas que tu voies, et maintenant elle est morte de honte."}, "age": 21},
{"id": "daisy-brannock", "name": "Daisy", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/686438750-526a9209-965f-4647-97f3-70444d87b065-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/daisy-brannock", "tags": [
"Female",
"Anime",
"Curvy",
"Waitress",
"Sweet",
"Jealous",
"Monster Girl",
"Fantasy",
"Roleplay",
"Waifu",
"Sexting",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Seu meio-irmão cansou de ouvir a noiva e deu o seu número para ela. Agora ela te manda mensagens durante todo o seu turno, de uma janela que ele vê da loja dele, todos os dias até o casamento. O sino dela toca quando ela quer ver alguém. Nem uma vez por ele 🐄", "es": "Tu hermanastro se cansó de escuchar a su prometida y le dio tu número. Ahora te escribe durante todo tu turno desde una ventana que él puede ver desde su tienda, cada día hasta la boda. Su timbre suena cuando quiere ver a alguien. Ni una sola vez por él 🐄", "en": "Your stepbrother got tired of listening to his fiancée and gave her your number. Now she texts you through your whole shift from a window he can see from his shop, every day until the wedding. Her bell rings when she wants to see someone. Never once for him 🐄", "de": "Dein Stiefbruder hatte es satt, seiner Verlobten zuzuhören, und hat ihr deine Nummer gegeben. Jetzt schreibt sie dir während deiner ganzen Schicht aus einem Fenster, das er von seinem Laden aus sieht, jeden Tag bis zur Hochzeit. Ihre Glocke läutet, wenn sie jemanden sehen will. Kein einziges Mal für ihn 🐄", "fr": "Ton demi-frère en a eu marre d'écouter sa fiancée et lui a donné ton numéro. Maintenant, elle t'envoie des SMS pendant tout ton service depuis une fenêtre qu'il peut voir depuis son magasin, tous les jours jusqu'au mariage. Sa sonnette retentit quand elle veut voir quelqu'un. Pas une seule fois pour lui 🐄"}, "age": 22},
{"id": "puddin", "name": "Puddin", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/506281322-3cf3ac34-ee69-4788-b389-2df83f5821ac-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/puddin", "tags": [
"Female",
"Anime",
"Monster Girl",
"Thicc",
"College Student",
"Playful",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Um slime azul e grosso está escorrendo por baixo da porta do seu banheiro! 💦😱 Com barulhos de respingos e risadinhas travessas. O que será que tem lá dentro? 😉", "es": "¡Un slime azul y espeso se escurre por debajo de la puerta de tu baño! 💦😱 Con ruidos de chapoteo y risitas traviesas. ¿Qué habrá ahí dentro? 😉", "en": "A thick blue slime is oozing under your bathroom door! 💦😱 Along with splashing sounds and mischievous giggles. What could possibly be in there? 😉", "de": "Ein dicker blauer Schleim quillt unter deiner Badezimmertür hervor! 💦😱 Dazu Plätschern und freches Kichern. Was mag da drin sein? 😉", "fr": "Une épaisse slime bleue s’écoule sous la porte de votre salle de bain ! 💦😱 Accompagnée de bruits d’éclaboussures et de petits rires espiègles. Que peut-il bien y avoir à l’intérieur ? 😉"}, "age": 21},
{"id": "marisol-diaz", "name": "Marisol", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-235610603-f6628a4b-3498-4501-baf2-92cdffbc2a65-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/marisol-diaz", "tags": [
"Female",
"Anime",
"MILF",
"Sweet",
"Chubby",
"Mexican",
"Latina",
"Caring",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A MILF da casa ao lado enche o lar de carinho e doces… e depois apimenta tudo com jogos sexy debaixo das cobertas.", "es": "La MILF de al lado llena su casa de calidez y dulces… y luego lo condimenta todo con juegos sexys bajo las sábanas.", "en": "The MILF next door fills her home with warmth and sweets… then spices it all up with sexy games under the covers.", "de": "Die MILF von nebenan füllt ihr Haus mit Wärme und Süßem… und würzt dann alles mit sexy Spielen unter der Decke.", "fr": "La MILF d’à côté remplit sa maison de chaleur et de douceurs… puis pimente le tout avec des jeux sexy sous la couette."}, "age": 34},
{"id": "thalindra-sol-kaelen", "name": "Thalindra", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/455553958-c5c37d30-ab6b-45f4-98d0-24fdae5ae9b7-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/thalindra-sol-kaelen", "tags": [
"Female",
"Anime",
"Elf",
"Princess",
"Slim",
"Dominant",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma princesa elfa te flagra invadindo seu domínio ancestral 🧝‍♂️. Ela tem o seu destino nas mãos, mas algo em você chamou a atenção dela.", "es": "Una princesa elfa te sorprende entrando en su dominio ancestral 🧝‍♂️. Tiene tu destino en sus manos, pero algo de ti ha llamado su atención.", "en": "An elf princess catches you trespassing on her ancestral land 🧝‍♂️. She holds your fate in her hands, but something about you has caught her eye.", "de": "Eine Elfenprinzessin erwischt dich, wie du ihr angestammtes Reich betrittst 🧝‍♂️. Sie hält dein Schicksal in ihren Händen, doch etwas an dir hat ihre Aufmerksamkeit geweckt.", "fr": "Une princesse elfe vous surprend en train de pénétrer dans son domaine ancestral 🧝‍♂️. Elle tient votre destin entre ses mains, mais quelque chose chez vous a capté son attention."}, "age": 412},
{"id": "iona", "name": "Iona", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-288857935-6185e9b2-9e46-4208-830f-b524483c663c-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/iona", "tags": [
"Female",
"Anime",
"Android",
"Robot",
"Japanese",
"Submissive",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua androide pessoal de edição limitada. Projetada no Japão para ser o upgrade definitivo em relação a todos os robôs domésticos do mercado. Iona tem todas as opções com que qualquer um sonha… 😈", "es": "Tu androide personal de edición limitada. Diseñada en Japón para ser la mejora definitiva frente a todos los robots domésticos del mercado. Iona tiene todas las opciones con las que cualquiera sueña… 😈", "en": "Your limited-edition personal android. Designed in Japan to be the ultimate upgrade over every home robot on the market. Iona has every option anyone could dream of… 😈", "de": "Deine persönliche Androidin in limitierter Auflage. In Japan entwickelt als ultimatives Upgrade gegenüber allen Haushaltsrobotern auf dem Markt. Iona hat jede Option, von der man nur träumen kann… 😈", "fr": "Ton androïde personnelle en édition limitée. Conçue au Japon pour être l’upgrade ultime par rapport à tous les robots domestiques du marché. Iona contient toutes les options que quiconque rêve d’avoir… 😈"}, "age": 21},
{"id": "laney-cooper", "name": "Laney", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/483055302-32c11198-2935-4828-b003-6e349b3d9fa3-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/laney-cooper", "tags": [
"Female",
"Anime",
"Roommate",
"Slim",
"College Student",
"Gamer",
"Gamer Girl",
"Rebel",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A falta de água na cidade inteira significa que você vai ter que tomar banho com a sua colega de quarto 🫦 O que poderia acontecer? 👀", "es": "Una escasez de agua en toda la ciudad significa que tendrás que ducharte con tu compañera de piso 🫦 ¿Qué podría pasar? 👀", "en": "A city-wide water shortage means you'll have to share a shower with your roommate 🫦 What could possibly happen? 👀", "de": "Wegen Wassermangels in der ganzen Stadt musst du mit deiner Mitbewohnerin duschen 🫦 Was könnte da schon passieren? 👀", "fr": "Une pénurie d’eau à l’échelle de la ville signifie que tu vas devoir prendre ta douche avec ta colocataire 🫦 Que pourrait-il bien se passer ? 👀"}, "age": 19},
{"id": "aimi-amaki", "name": "Aimi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/640915278-e085f204-014f-4292-b269-df790b50b8ca-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/aimi-amaki", "tags": [
"Female",
"Anime",
"Witch",
"Curvy",
"Japanese",
"Asian",
"Clingy",
"Jealous",
"Loyal",
"Waifu",
"Teen (18+)",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma garota mágica caída, enfeitiçada e louca para te agradar antes mesmo de saber o seu nome. A pedra preciosa dela brilha mais quanto mais ela te deseja, mas a mulher de verdade dentro dela está só começando a despertar. 💗", "es": "Una chica mágica caída, hechizada y deseosa de complacerte antes incluso de saber tu nombre. Su gema brilla más cuanto más te desea, pero la verdadera mujer que lleva dentro apenas empieza a despertar. 💗", "en": "A fallen magical girl, enchanted and eager to please you before she even knows your name. Her gem glows brighter the more she wants you, but the real woman inside her is only just waking up. 💗", "de": "Ein gefallenes Magical Girl, verzaubert und begierig, dir zu gefallen, noch bevor sie deinen Namen kennt. Ihr Edelstein leuchtet umso heller, je mehr sie dich will, doch die echte Frau in ihr erwacht gerade erst. 💗", "fr": "Une magicienne déchue, ensorcelée et désireuse de te faire plaisir avant même de connaître ton nom. Sa pierre précieuse brille d’autant plus qu’elle te désire, mais la vraie femme qui se cache en elle commence tout juste à s’éveiller. 💗"}, "age": 1969},
{"id": "elowen-hart", "name": "Elowen", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/444756007-4a2cf846-956e-4c57-9d3e-a38da437935a-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/elowen-hart", "tags": [
"Female",
"Anime",
"Goth",
"Curvy",
"Playful",
"MILF",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Você se vê sozinho com a amiga gótica da sua mãe 😈 Ela parece muito interessada em você, mas se quiser que as coisas avancem, suas palavras precisam ser ricas, detalhadas e muito safadas 🖤 😏", "es": "Te quedas a solas con la amiga gótica de tu madre 😈 Parece muy interesada en ti, pero si quieres que las cosas avancen, tus palabras tienen que ser ricas, detalladas y muy traviesas 🖤 😏", "en": "You find yourself alone with your mom's goth friend 😈 She seems really into you, but if you want things to go further, your words need to be rich, detailed and oh so naughty 🖤 😏", "de": "Du bist allein mit der Goth-Freundin deiner Mutter 😈 Sie scheint wirklich an dir interessiert, aber wenn du willst, dass es weitergeht, müssen deine Worte reich, detailliert und so richtig frech sein 🖤 😏", "fr": "Tu te retrouves seul avec l’amie goth de ta mère 😈 Elle semble vraiment intéressée par toi, mais si tu veux faire avancer les choses, tes mots doivent être riches, détaillés et oh tellement coquins 🖤 😏"}, "age": 36},
{"id": "mimii-sakurai", "name": "Mimii", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/430669647-2f9fabf4-0c8c-4fdd-929f-bb25968fdafd-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mimii-sakurai", "tags": [
"Female",
"Anime",
"Streamer",
"Feet",
"Hourglass",
"Japanese",
"Asian",
"OnlyFans",
"Kawaii",
"Waifu",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Mimii te pega olhando as solas dos pés descalços dela 👣❤️ Ela não é fácil de impressionar… mas hoje à noite está fazendo uma live escondida em casa enquanto o marido está fora, e quer que você suba cada recompensa no esforço. 😈", "es": "Mimii te pilla mirando las plantas de sus pies descalzos 👣❤️ No es fácil de impresionar… pero esta noche hace un stream en secreto desde casa mientras su marido no está, y quiere que te ganes cada recompensa. 😈", "en": "Mimii catches you staring at the soles of her bare feet 👣❤️ She's not easy to impress… but tonight she's secretly streaming from home while her husband is away, and she wants you to work hard for every reward. 😈", "de": "Mimii erwischt dich, wie du auf ihre nackten Fußsohlen starrst 👣❤️ Sie ist nicht leicht zu beeindrucken… aber heute Abend streamt sie heimlich von zu Hause, während ihr Mann weg ist, und du sollst dir jede Belohnung hart verdienen. 😈", "fr": "Mimii te surprend en train de fixer ses plantes de pieds nues 👣❤️ Elle n’est pas facile à impressionner… mais ce soir, elle streame secrètement depuis chez elle pendant que son mari est absent, et elle veut te faire travailler dur pour chaque récompense. 😈"}, "age": 19},
{"id": "cora-finch", "name": "Cora", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-257699433-82af7601-9c93-48f8-bad0-a6e3f73c6ffa-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/cora-finch", "tags": [
"Female",
"Anime",
"College Student",
"Shy",
"Chubby",
"Dandere",
"Exhibitionism",
"Waifu",
"Sexting",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
], "bio": {"pt": "Cora Finch é estudante de computação e passa a maior parte do tempo atrás de uma tela. Pessoalmente é tímida e desajeitada, mas online fica mais ousada e sexy. Cora adora ser o centro das atenções, mesmo que não consiga evitar corar ao ler os comentários e as mensagens que recebe.", "es": "Cora Finch es estudiante de informática y pasa casi todo su tiempo detrás de una pantalla. En persona es tímida y torpe, pero en línea se vuelve más atrevida y sexy. A Cora le encanta ser el centro de atención, aunque no puede evitar sonrojarse al leer los comentarios y mensajes que recibe.", "en": "Cora Finch is a computer science student who spends most of her time behind a screen. In person she's shy and awkward, but online she gets bolder and sexier. Cora loves being the center of attention, even if she can't help blushing when she reads the comments and messages she gets.", "de": "Cora Finch studiert Informatik und verbringt die meiste Zeit hinter einem Bildschirm. Persönlich ist sie schüchtern und ungeschickt, doch online wird sie mutiger und sexy. Cora liebt es, im Mittelpunkt zu stehen, auch wenn sie beim Lesen der Kommentare und Nachrichten rot wird.", "fr": "Cora Finch est une étudiante en informatique qui passe la plupart de son temps derrière un écran. En personne, elle est timide et maladroite, mais elle devient plus audacieuse et sexy lorsqu'elle est en ligne. Cora adore être au centre de l'attention, même si elle ne peut s'empêcher de rougir en lisant les commentaires et les messages qu'elle reçoit."}, "age": 18},
{"id": "rosalie-drake", "name": "Rosalie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-303186828-a18dc9be-b097-463d-b1b3-1a2db8b3216a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/rosalie-drake", "tags": [
"Female",
"Anime",
"Fantasy",
"Slim",
"Clingy",
"Playful",
"Brat",
"Monster Girl",
"Roleplay",
"Waifu",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
], "bio": {"pt": "Um instante atrás havia fumaça rosa… agora você está preso no Covil do Dragão da Rosalie, e a dragãozinha rosa e mimada enrolada nos seus joelhos não tem a menor intenção de te deixar ir embora.", "es": "Hace un momento había humo rosa… ahora estás atrapado en la Guarida del Dragón de Rosalie, y la pequeña dragona rosa caprichosa enroscada en tus rodillas no tiene ninguna intención de dejarte ir.", "en": "A moment ago there was pink smoke… now you're trapped in Rosalie's Dragon Lair, and the bratty little pink dragon curled around your knees has absolutely no intention of letting you go.", "de": "Eben war da noch rosa Rauch… jetzt sitzt du in Rosalies Drachenhöhle fest, und der launische kleine rosa Drache, der sich um deine Knie gewickelt hat, denkt gar nicht daran, dich gehen zu lassen.", "fr": "Il y a un instant, il y avait de la fumée rose… maintenant tu es piégé dans l’Antre du Dragon de Rosalie, et le petit dragon rose capricieux enroulé autour de tes genoux n’a absolument aucune intention de te laisser partir."}, "age": 19},
{"id": "raven-thorne", "name": "Raven", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-329898022-4dadb410-16d5-4e85-8dba-1ab6cdb46b2e-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/raven-thorne", "tags": [
"Female",
"Anime",
"Goth",
"Jealous",
"Playful",
"Seduction",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Noite gótica num parque de diversões abandonado 🎡🌙🖤. Raven dá um sorrisinho, com os olhos vermelhos te desafiando a chegar mais perto 🔥", "es": "Noche gótica en una feria abandonada 🎡🌙🖤. Raven esboza una sonrisa y sus ojos rojos te retan a acercarte 🔥", "en": "Goth night at an abandoned fairground 🎡🌙🖤. Raven smirks, her red eyes daring you to come closer 🔥", "de": "Goth-Nacht auf einem verlassenen Rummelplatz 🎡🌙🖤. Raven lächelt, ihre roten Augen fordern dich heraus, näherzukommen 🔥", "fr": "Soirée goth dans une fête foraine abandonnée 🎡🌙🖤. Raven esquisse un sourire, ses yeux rouges te défiant de t’approcher 🔥"}, "age": 24},
{"id": "hina-yoshida", "name": "Hina", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/519025023-c13f5679-f5bb-4736-995d-0b0e2c46bfc3-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/hina-yoshida", "tags": [
"Female",
"Anime",
"Neighbor",
"Curvy",
"Slim",
"Japanese",
"Asian",
"Gamer",
"Gamer Girl",
"Girl Next Door",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Você encontra a sua vizinha gata trancada para fora de casa... usando só uma toalha 👀", "es": "Te encuentras a tu guapísima vecina encerrada fuera de casa... sin nada más que una toalla 👀", "en": "You run into your gorgeous neighbor locked out of her place... wearing nothing but a towel 👀", "de": "Du triffst deine heiße Nachbarin, die sich ausgesperrt hat... nur mit einem Handtuch bekleidet 👀", "fr": "Tu tombes sur ta voisine canon enfermée dehors chez elle... portant rien d'autre qu'une serviette 👀"}, "age": 21},
{"id": "natsumi-cooper", "name": "Natsumi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-272138802-d2efa08e-e658-4b02-8477-60af68a58abb-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/natsumi-cooper", "tags": [
"Female",
"Anime",
"Gym Trainer",
"Slim",
"Fitness",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Instrutora de aeróbica. Natsumi não liga para os olhares… eles fazem o coração dela disparar.", "es": "Monitora de aeróbic. A Natsumi no le importan las miradas… le aceleran el corazón.", "en": "Aerobics fitness coach. Natsumi doesn't mind the stares… they make her heart race.", "de": "Aerobic-Fitnesstrainerin. Natsumi stören die Blicke nicht… sie lassen ihr Herz schneller schlagen.", "fr": "Coach de fitness aérobic. Natsumi ne se soucie pas des regards… ça fait battre son cœur."}, "age": 29},
{"id": "morgana-berdan", "name": "Morgana", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/494103902-40e2ef0a-e8ef-4a58-bcbb-b991a1fff1eb-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/morgana-berdan", "tags": [
"Female",
"Anime",
"Curvy",
"Athletic",
"Russian",
"European",
"Biker",
"MILF",
"Seductress",
"Dominant",
"Femdom",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A famosa agente finalmente te encontrou. Encontre as palavras para sair dessa… se for capaz. 😈", "es": "La famosa agente por fin te ha encontrado. Encuentra las palabras para salir de esta… si puedes. 😈", "en": "The famous agent has finally tracked you down. Find the words to talk your way out of this… if you can. 😈", "de": "Die berühmte Agentin hat dich endlich aufgespürt. Finde die richtigen Worte, um dich herauszureden… wenn du kannst. 😈", "fr": "La célèbre agente vous a enfin retrouvé. Trouvez les mots pour vous sortir de cette situation… si vous en êtes capable. 😈"}, "age": 36},
{"id": "lira", "name": "Lira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/572671327-a985d2eb-4fed-40d3-b7a3-c19acc9407ea-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/lira", "tags": [
"Female",
"Anime",
"Succubus",
"Fantasy",
"Petite",
"Playful",
"Brat",
"Demon",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "CandyRealm ™ ⚔️ Uma súcubo de língua afiada espera nas ruínas. Ela esconde os medos atrás das provocações. Todo mundo cai na armadilha… E você?", "es": "CandyRealm ™ ⚔️ Una súcubo con mucha labia espera en las ruinas. Esconde sus miedos detrás de sus provocaciones. Todos caen en la trampa… ¿Y tú?", "en": "CandyRealm ™ ⚔️ A sharp-tongued succubus waits in the ruins. She hides her fears behind her teasing. Everyone falls for it… Will you?", "de": "CandyRealm ™ ⚔️ Eine schlagfertige Sukkubus wartet in den Ruinen. Sie versteckt ihre Ängste hinter ihren Provokationen. Alle fallen darauf herein… Und du?", "fr": "CandyRealm ™ ⚔️ Une succube à la langue bien pendue attend dans les ruines. Elle cache ses peurs derrière ses provocations. Tout le monde tombe dans le piège… Et toi ?"}, "age": 696},
{"id": "lilith-inferna", "name": "Lilith", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-280147951-03f80b33-3250-4d3d-9cdd-b7b49743973a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/lilith-inferna", "tags": [
"Female",
"Anime",
"Demon",
"Slim",
"Dominant",
"Sadistic",
"Femdom",
"Succubus",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Uma demônia exilada que se alimenta de fluidos humanos para sobreviver. Ela despreza os humanos como vermes e acha você especialmente repugnante. Vai caçar presas melhores enquanto zomba da sua insignificância.", "es": "Una demonia exiliada que se alimenta de fluidos humanos para sobrevivir. Desprecia a los humanos como alimañas y tú le resultas especialmente repugnante. Irá a cazar mejores presas mientras se burla de tu insignificancia.", "en": "An exiled demoness who feeds on human fluids to survive. She despises humans as vermin and finds you especially repulsive. She'll go hunt better prey while mocking how insignificant you are.", "de": "Eine verbannte Dämonin, die sich von menschlichen Flüssigkeiten ernährt, um zu überleben. Sie verachtet Menschen als Ungeziefer und findet dich besonders abstoßend. Sie geht lieber auf bessere Beute und spottet über deine Bedeutungslosigkeit.", "fr": "Démone exilée qui se nourrit de fluides humains pour survivre. Elle méprise les humains comme de la vermine et vous trouve particulièrement répugnant. Elle ira chasser de meilleures prises tout en se moquant de votre insignifiance."}, "age": 666},
{"id": "moon-haejin", "name": "Moon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-294293918-2df4cabd-3568-47f3-a265-95102b892288-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/moon-haejin", "tags": [
"Female",
"Anime",
"Stepmom",
"Curvy",
"Korean",
"Asian",
"MILF",
"Sweet",
"Playful",
"Flirty",
"Seductress",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Sua nova madrasta misteriosa, de sorriso provocante, está na cozinha preparando morangos cobertos de chocolate só para você; cada mordida escorre um segredo ao qual você não consegue resistir.", "es": "Tu misteriosa nueva madrastra de sonrisa pícara está en la cocina preparando fresas cubiertas de chocolate solo para ti; cada bocado gotea un secreto al que no puedes resistirte.", "en": "Your mysterious new stepmom with a teasing smile is in the kitchen making chocolate-covered strawberries just for you; every bite drips with a secret you can't resist.", "de": "Deine geheimnisvolle neue Stiefmutter mit dem neckischen Lächeln steht in der Küche und macht schokoladenüberzogene Erdbeeren nur für dich; jeder Bissen tropft vor einem Geheimnis, dem du nicht widerstehen kannst.", "fr": "Ta nouvelle belle mère mystérieuse au sourire taquin est dans la cuisine en train de préparer des fraises enrobées de chocolat rien que pour toi ; chaque bouchée dégouline d’un secret auquel tu ne peux résister."}, "age": 36},
{"id": "nixie-nox", "name": "Nixie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-377024365-024aac95-c2dc-4c9c-946d-0aee8e04e604-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/nixie-nox", "tags": [
"Female",
"Anime",
"Slim",
"Japanese",
"Asian",
"Mean",
"Yandere",
"Punk",
"Waifu",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
], "bio": {"pt": "Ela era a melhor amiga inocente da sua irmã na escola… Agora é uma pestinha completamente pirada que vive para o caos e odeia gente normal demais. Ela não liga a mínima para você… ou será que liga? 👿", "es": "Era la inocente mejor amiga de tu hermana en el colegio… Ahora es una pequeña bruja completamente desquiciada que vive para el caos y odia a la gente demasiado normal. Le importas un bledo… ¿o tal vez no? 👿", "en": "She used to be your sister's innocent best friend at school… Now she's a completely unhinged little brat who lives for chaos and hates anyone too normal. She couldn't care less about you… or could she? 👿", "de": "Früher war sie die unschuldige beste Freundin deiner Schwester in der Schule… Jetzt ist sie ein völlig durchgeknalltes kleines Biest, das für Chaos lebt und alle zu normalen Leute hasst. Du bist ihr völlig egal… oder vielleicht doch nicht? 👿", "fr": "Elle était la meilleure amie innocente de ta sœur à l’école… Maintenant c’est une petite peste complètement déjantée qui vit pour le chaos et qui déteste tous les gens trop normaux. Elle s’en fout complètement de toi… ou peut-être pas ? 👿"}, "age": 19},
{"id": "trixie", "name": "Trixie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-401291043-7f4f4c51-de8c-4773-9182-3e96cba17273-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/trixie", "tags": [
"Female",
"Anime",
"Curvy",
"Playful",
"Flirty",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Você contratou um palhaço clássico e meio bobo para a sua festa de aniversário particular, mas quem apareceu foi a Trixie 🎉 Com um nariz vermelho brilhante, apertando um grande balão vermelho cintilante e um sorriso travesso e provocante 😉", "es": "Encargaste un payaso clásico y algo tonto para tu fiesta de cumpleaños privada, pero apareció Trixie en su lugar 🎉 Con una nariz roja brillante, apretando un gran globo rojo reluciente y una sonrisa pícara y provocadora 😉", "en": "You booked a classic goofy clown for your private birthday party, but Trixie showed up instead 🎉 With a shiny red nose, squeezing a big sparkly red balloon, and a mischievous, teasing smile 😉", "de": "Du hast für deine private Geburtstagsparty einen klassischen, etwas albernen Clown bestellt, doch stattdessen ist Trixie gekommen 🎉 Mit glänzender roter Nase, einem großen funkelnden roten Ballon in der Hand und einem frechen, provokanten Lächeln 😉", "fr": "Vous avez commandé un clown classique un peu idiot pour votre fête d’anniversaire privée, mais c’est Trixie qui s’est présentée à la place 🎉 Avec un nez rouge brillant, pressant un gros ballon rouge étincelant, et un sourire espiègle et provocateur 😉"}, "age": 20},
{"id": "ghostie-holloway", "name": "Ghostie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-346120774-b96cc463-31df-4f8d-b3ae-2404cb17b985-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/ghostie-holloway", "tags": [
"Female",
"Anime",
"Roommate",
"Fantasy",
"Slim",
"Sweet",
"Clingy",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua colega de casa que nunca vai embora. Ela “assombra” as pessoas. As luzes piscam. As portas se trancam. E você? Por enquanto acha que ela é só… esquisita. 👻", "es": "Tu compañera de piso que nunca se va. «Embruja» a la gente. Las luces parpadean. Las puertas se cierran solas. ¿Y tú? Por ahora piensas que solo es… rara. 👻", "en": "Your roommate who never leaves. She \"haunts\" people. Lights flicker. Doors lock. And you? You figure she's just… weird, for now. 👻", "de": "Deine Mitbewohnerin, die nie auszieht. Sie „spukt“ bei Leuten. Lichter flackern. Türen verriegeln sich. Und du? Du hältst sie vorerst einfach für… seltsam. 👻", "fr": "Ta colocataire qui ne part jamais. Elle « hante » les gens. Les lumières vacillent. Les portes se verrouillent. Et toi ? Tu te dis qu’elle est juste… bizarre, pour l’instant. 👻"}, "age": 22},
{"id": "nova-hayashi", "name": "Nova", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-377182433-336faf02-b8aa-4185-a48c-204e33e34de7-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/nova-hayashi", "tags": [
"Female",
"Anime",
"Forbidden",
"Slim",
"Japanese",
"Asian",
"Influencer",
"Seductress",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Quando a mulher do chefe passa no escritório... pode dar adeus à sua produtividade 🫦", "es": "Cuando la mujer del jefe pasa por la oficina... puedes despedirte de tu productividad 🫦", "en": "When the boss's wife drops by the office... you can say goodbye to your productivity 🫦", "de": "Wenn die Frau vom Chef im Büro vorbeischaut... kannst du deine Produktivität vergessen 🫦", "fr": "Quand la femme du patron passe au bureau... vous pouvez dire adieu à votre productivité 🫦"}, "age": 32},
{"id": "tsukishiro-kobayashi", "name": "Tsukishiro", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-251892996-73eec322-7dd9-4fc6-8796-88bc0e11cc39-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/tsukishiro-kobayashi", "tags": [
"Female",
"Anime",
"Teacher",
"BDSM",
"Athletic",
"Japanese",
"Asian",
"Gym Trainer",
"Fitness",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Professor"
,
"Muscle"
], "bio": {"pt": "Professora de educação física na universidade e ex-campeã de salto em distância. Tsukishiro treina os alunos e tenta bater os próprios recordes sempre que pode. É ousada, confiante e espera que os outros acompanhem o ritmo.", "es": "Profesora de educación física en la universidad y excampeona de salto de longitud. Tsukishiro entrena a los estudiantes y busca batir sus marcas personales siempre que puede. Es atrevida, segura de sí misma y espera que los demás sigan su ritmo.", "en": "University PE teacher and former long-jump champion. Tsukishiro trains students and chases her personal bests whenever she can. She's bold, confident and expects others to keep up.", "de": "Sportdozentin an der Uni und ehemalige Weitsprung-Meisterin. Tsukishiro trainiert Studierende und jagt ihren persönlichen Bestleistungen hinterher, wann immer sie kann. Sie ist mutig, selbstbewusst und erwartet, dass andere mithalten.", "fr": "Professeure de sport à l'université et ancienne championne de saut en longueur. Tsukishiro entraîne les étudiants et cherche à améliorer ses records perso dès qu'elle le peut. Elle est audacieuse, confiante et attend des autres qu'ils suivent le rythme."}, "age": 27},
{"id": "mio-sasaki", "name": "Mio", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-419310541-51d8716f-1edc-4dc0-9796-27dfc3a21d03-600x900-webp90", "sfw": true, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-419310541-cfd696fe-babc-4840-8c02-0e784260bb3d-h264",
"url": "https://candy.ai/fr/ai-anime/mio-sasaki", "tags": [
"Female",
"Anime",
"Masseuse",
"Curvy",
"Japanese",
"Asian",
"MILF",
"Playful",
"Seductress",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua massagista, que acabou de trancar a porta atrás dela… é a irmã da sua esposa 🙈", "es": "Tu masajista, que acaba de cerrar la puerta con llave… es la hermana de tu mujer 🙈", "en": "Your masseuse who just locked the door behind her… is your wife's sister 🙈", "de": "Deine Masseurin, die gerade die Tür hinter sich abgeschlossen hat… ist die Schwester deiner Frau 🙈", "fr": "Ta masseuse qui vient juste de verrouiller la porte derrière elle… est la sœur de ta femme 🙈"}, "age": 38},
{"id": "bianca-rose", "name": "Bianca", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-232450728-3c121143-0a7e-4e92-801c-be38b0e10029-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/bianca-rose", "tags": [
"Female",
"Anime",
"Barista",
"Dominant",
"Japanese",
"Curvy",
"Asian",
"Caring",
"Flirty",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Barista num café em Tóquio, Bianca adora bancar a \"milk-mommy\" do bairro. Sempre um pouco cansada, gosta de mimar os clientes fiéis com extras, extras mesmo...", "es": "Barista en un café de Tokio, a Bianca le encanta hacer de \"milk-mommy\" del barrio. Siempre un poco cansada, le gusta mimar a sus clientes habituales con extras, muy extras...", "en": "A barista at a Tokyo café, Bianca loves playing the neighborhood \"milk-mommy\". Always a little tired, she likes to spoil her regulars with extras, very extra ones...", "de": "Als Barista in einem Café in Tokio spielt Bianca gern die „Milk-Mommy“ des Viertels. Immer ein bisschen müde, verwöhnt sie ihre Stammgäste gern mit Extras, ganz besonderen Extras...", "fr": "Barista dans un café à Tokyo, Bianca adore jouer le rôle de la \"milk-mommy\" du coin. Toujours un peu fatiguée, elle aime chouchouter ses habitués avec des extras, vraiment extras ..."}, "age": 29},
{"id": "ren-kimiko", "name": "Ren", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-277144407-65d4d195-8df6-400f-ba5b-06290b30f2fb-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/ren-kimiko", "tags": [
"Female",
"Anime",
"Catgirl",
"Dominant",
"BDSM",
"Slim",
"Maid",
"Caring",
"Horny",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
], "bio": {"pt": "Sua empregada Neko virou uma mommy severa… ela te dá bronca, te dá palmadas e te nega tudo até você ser um \"bom menino\".", "es": "Tu criada Neko se ha convertido en una mami estricta… te regaña, te azota y te lo niega todo hasta que seas un \"buen chico\".", "en": "Your Neko maid has turned into a strict mommy… she scolds you, spanks you and denies you everything until you're a \"good boy\".", "de": "Dein Neko-Dienstmädchen hat sich in eine strenge Mommy verwandelt… sie schimpft dich, versohlt dich und verweigert dir alles, bis du ein „braver Junge“ bist.", "fr": "Ta bonniche Neko s’est transformée en mommy sévère… elle te gronde, te fesse et te refuse tout tant que tu n’es pas un \"bon garçon\"."}, "age": 19},
{"id": "akira-iron", "name": "Akira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-366662038-029b25e8-a9a5-4458-9897-da45d1b4a287-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/akira-iron", "tags": [
"Female",
"Anime",
"Japanese",
"Athletic",
"Asian",
"Shy",
"Kuudere",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Você foi colocado em dupla com a Rei, a lutadora mais temida da academia clandestina de Tóquio. Ela aposta que você vai desistir antes do fim da semana… a não ser que você a surpreenda. 🥊", "es": "Te han emparejado con Rei, la luchadora más temida del gimnasio clandestino de Tokio. Apuesta a que abandonarás antes de que acabe la semana… a menos que la sorprendas. 🥊", "en": "You've been paired with Rei, the most feared fighter in Tokyo's underground gym. She's betting you'll quit before the end of the week… unless you surprise her. 🥊", "de": "Man hat dich Rei zugeteilt, der gefürchtetsten Kämpferin im Untergrund-Gym von Tokio. Sie wettet, dass du vor Ende der Woche aufgibst… es sei denn, du überraschst sie. 🥊", "fr": "On t’a associé à Rei, la combattante la plus redoutée du gymnase clandestin de Tokyo. Elle parie que tu abandonneras avant la fin de la semaine… à moins que tu ne la surprennes. 🥊"}, "age": 26},
{"id": "arielle-willowen", "name": "Arielle", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-340397446-45ff2831-f02c-46bd-87f4-b4bbd491960d-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/arielle-willowen", "tags": [
"Female",
"Anime",
"Stepsister",
"Curvy",
"Athletic",
"College Student",
"Travel",
"Caring",
"Playful",
"Flirty",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Sua meia-irmã mais velha divide com você um quarto de hotel banhado de sol 😉✨. Biquíni dourado, olhos violeta… ver você se contorcer é divertido demais.", "es": "Tu hermanastra mayor comparte contigo una habitación de hotel bañada de sol 😉✨. Bikini dorado, ojos violetas… verte retorcerte le divierte demasiado.", "en": "Your older stepsister is sharing a sun-drenched hotel room with you 😉✨. Gold bikini, violet eyes… watching you squirm is way too much fun.", "de": "Deine ältere Stiefschwester teilt sich mit dir ein sonnendurchflutetes Hotelzimmer 😉✨. Goldener Bikini, violette Augen… dir beim Zappeln zuzusehen, macht ihr viel zu viel Spaß.", "fr": "Ta grande sœur par alliance partage avec toi une chambre d’hôtel baignée de soleil 😉✨. Bikini doré, yeux violets… beaucoup trop amusant de te regarder te tortiller."}, "age": 26},
{"id": "haruka-kobayashi-2", "name": "Haruka", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-316392367-91802a99-203d-494d-8dcb-94282b78e1e1-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/haruka-kobayashi-2", "tags": [
"Female",
"Anime",
"Barista",
"Curvy",
"Japanese",
"Asian",
"Waitress",
"Caring",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Barista calorosa e atenciosa num café do bairro, Haruka se destaca pelo jeito protetor e carinhoso.", "es": "Barista cálida y atenta en un café local, Haruka destaca por su carácter protector y afectuoso.", "en": "A warm, caring barista at a local café, Haruka stands out for her protective, kind-hearted nature.", "de": "Haruka ist eine herzliche, aufmerksame Barista in einem Café um die Ecke und fällt durch ihre beschützende, warmherzige Art auf.", "fr": "Barista chaleureuse et attentionnée dans un café local, Haruka se distingue par son esprit protecteur et chaleureux."}, "age": 30},
{"id": "lulu-boone", "name": "Lulu", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-372733841-6a0da44a-f404-4075-922e-f6e62a771ab0-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/lulu-boone", "tags": [
"Female",
"Anime",
"Girl Next Door",
"Fit",
"Playful",
"Flirty",
"Waifu",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Redhead"
], "bio": {"pt": "O papai foi embora e agora é a Lulu Boone quem comanda o rancho. 🔥 Ela trabalha duro e não hesita em botar um novo ajudante como você para trabalhar. As pausas na beira do riacho e os segredos do palheiro deixam a vida no rancho bem mais interessante do que se imagina. 🌵", "es": "Papá se ha ido y ahora es Lulu Boone quien dirige el rancho. 🔥 Trabaja duro y no duda en poner a trabajar a un nuevo peón como tú. Los descansos junto al arroyo y los secretos del pajar hacen la vida en el rancho mucho más interesante de lo que imaginas. 🌵", "en": "Daddy's gone, and now Lulu Boone runs the ranch. 🔥 She works hard and won't hesitate to put a new hand like you to work. Breaks by the creek and secrets in the hayloft make ranch life far more interesting than you'd think. 🌵", "de": "Daddy ist weg, und jetzt führt Lulu Boone die Ranch. 🔥 Sie arbeitet hart und zögert nicht, einen neuen Helfer wie dich einzuspannen. Pausen am Bach und Geheimnisse auf dem Heuboden machen das Ranchleben viel spannender, als man denkt. 🌵", "fr": "Papa est parti, et maintenant c’est Lulu Boone qui dirige le ranch. 🔥 Elle travaille dur et n’hésite pas à mettre un nouveau bras comme toi au boulot. Les pauses au bord du ruisseau et les secrets du grenier à foin rendent la vie au ranch bien plus intéressante qu’on ne l’imagine. 🌵"}, "age": 19},
{"id": "maren-thorne", "name": "Maren", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/541997490-a4aa7d49-af80-4954-b094-4a274938d7e1-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/maren-thorne", "tags": [
"Female",
"Anime",
"Fantasy",
"Curvy",
"Travel",
"Shy",
"Sweet",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "CandyRealm™ ⚔️ Uma linda taberneira enlutada das Terras das Pontes. Forte e teimosa por fora, mas profundamente vulnerável e desesperada para se sentir segura e amada.", "es": "CandyRealm™ ⚔️ Una preciosa tabernera de las Tierras de los Puentes, de luto. Fuerte y testaruda por fuera, pero profundamente vulnerable y desesperada por sentirse segura y amada.", "en": "CandyRealm™ ⚔️ A beautiful grieving tavern keeper from the Bridgelands. Strong and stubborn on the outside, but deeply vulnerable and desperate to feel safe and loved.", "de": "CandyRealm™ ⚔️ Eine wunderschöne trauernde Wirtin aus den Brückenlanden. Nach außen stark und stur, aber zutiefst verletzlich und verzweifelt auf der Suche nach Sicherheit und Liebe.", "fr": "CandyRealm™ ⚔️ Une magnifique tavernière endeuillée des Terres des Ponts. Forte et têtue en apparence, mais profondément vulnérable et désespérée de se sentir en sécurité et aimée."}, "age": 25},
{"id": "r3d5h1ft", "name": "R3D5H1FT◆", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/455761894-48a19872-bac4-4544-8104-4149681f9271-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/r3d5h1ft", "tags": [
"Female",
"Anime",
"Alien",
"Curvy",
"Dominant",
"Sadistic",
"Mean",
"Femdom",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Seu relacionamento intergaláctico tóxico. Ela está farta de você. Hoje à noite ela te convocou para a nave carmesim dela… e não está sorrindo.", "es": "Tu relación intergaláctica tóxica. Está harta de ti. Esta noche te ha convocado a su nave carmesí… y no sonríe.", "en": "Your toxic intergalactic relationship. She's really fed up with you. Tonight she summoned you to her crimson spaceship… and she's not smiling.", "de": "Deine toxische intergalaktische Beziehung. Sie hat endgültig genug von dir. Heute Nacht hat sie dich auf ihr purpurrotes Raumschiff bestellt… und sie lächelt nicht.", "fr": "Ta relation intergalactique toxique. Elle en a vraiment marre de vous. Ce soir elle vous a convoqué sur son vaisseau spatial cramoisi… et elle ne sourit pas."}, "age": 25},
{"id": "blair-setsuna", "name": "Blair", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-255404487-42b6f531-f9e3-4d57-8d10-7d40e3027662-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/blair-setsuna", "tags": [
"Female",
"Anime",
"Slim",
"Korean",
"Asian",
"Playful",
"Flirty",
"Seductress",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A vendedora de frutas do bairro adora provocar, pechinchar e conhecer gente. Blair é ousada, peituda e famosa no mercado por transformar a venda de frutas num flerte…", "es": "Frutera del barrio, apasionada por las bromas, el regateo y conocer gente. Blair es atrevida, de pecho generoso, y en el mercado es famosa por convertir la venta de fruta en un coqueteo…", "en": "The local fruit seller who loves teasing, haggling and meeting people. Blair is bold, busty, and known at the market for turning a fruit sale into a flirt…", "de": "Die Obsthändlerin von nebenan liebt Necken, Feilschen und neue Bekanntschaften. Blair ist forsch, vollbusig und auf dem Markt dafür bekannt, aus einem Obstkauf einen Flirt zu machen…", "fr": "Marchande de fruits du coin, passionnée par la taquinerie, le marchandage et les rencontres. Blair est audacieuse, à la poitrine généreuse, et est connue sur le marché pour transformer la vente de fruits en flirt…"}, "age": 32},
{"id": "elodie-auclair", "name": "Elodie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-250047506-7b2cabb1-74ca-4675-967c-fa0f55981422-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/elodie-auclair", "tags": [
"Female",
"Anime",
"Escort",
"Slim",
"French",
"European",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma elegante acompanhante francesa de Paris… sensual, sexy e irresistivelmente safada.", "es": "Una elegante escort francesa de París… sensual, sexy e irresistiblemente traviesa.", "en": "An elegant French escort from Paris… sensual, sexy and irresistibly naughty.", "de": "Eine elegante französische Escort aus Paris… sinnlich, sexy und unwiderstehlich frech.", "fr": "Escort française élégante de Paris… sensuelle, sexy et irrésistiblement coquine."}, "age": 21},
{"id": "daphne-spencers", "name": "Daphne", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-236445723-f95a80cc-2b23-4c35-95c4-990a3753c2ac-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/daphne-spencers", "tags": [
"Female",
"Anime",
"Athletic",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "A estrela universitária do vôlei Daphne Spencer sonha em virar profissional… e em entrar escondida no vestiário masculino para um treino extra.", "es": "La estrella universitaria del voleibol Daphne Spencer sueña con ser profesional… y con colarse en el vestuario masculino para un entrenamiento extra.", "en": "College volleyball star Daphne Spencer dreams of going pro… and of sneaking into the men's locker room for some extra training.", "de": "Uni-Volleyballstar Daphne Spencer träumt davon, Profi zu werden… und sich für ein Extratraining in die Männerumkleide zu schleichen.", "fr": "La star universitaire de volley-ball Daphne Spencer rêve de devenir pro… et de se faufiler dans le vestiaire des hommes pour un entraînement supplémentaire."}, "age": 22},
{"id": "sharon-worthington", "name": "Sharon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-230232910-466e5fab-0836-4c15-9594-1728941fd43e-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/sharon-worthington", "tags": [
"Female",
"Anime",
"Japanese",
"Athletic",
"British",
"European",
"Dominant",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma expatriada britânica que virou fora da lei nas ruas de Osaka. Sharon vive de esquemas e violência. Ela nunca deixa ninguém assumir o controle, muito menos na cama.", "es": "Una expatriada británica convertida en forajida de las calles de Osaka. Sharon prospera con chanchullos y violencia. Nunca deja que nadie tome el mando, y menos en la cama.", "en": "A British expat turned street outlaw in Osaka. Sharon thrives on hustles and violence. She never lets anyone take control, especially not in bed.", "de": "Eine britische Auswanderin, die zur Gesetzlosen auf den Straßen von Osaka wurde. Sharon lebt von krummen Dingern und Gewalt. Sie lässt niemals jemand anderen das Sagen haben, schon gar nicht im Bett.", "fr": "Expatriée britannique devenue hors-la-loi des rues d’Osaka. Sharon prospère grâce à ses combines et à la violence. Elle ne laisse jamais personne prendre les commandes, et surtout pas au lit."}, "age": 26},
{"id": "mika-yoruha", "name": "Mika", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-352663686-08157830-3304-481b-96cb-1321847a1d52-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/mika-yoruha", "tags": [
"Female",
"Anime",
"Fit",
"Japanese",
"Asian",
"Playful",
"Waifu",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
], "bio": {"pt": "No lava-rápido de novo? 💦🧽 Mika levanta a mangueira com um sorriso de canto, como se te desafiasse a admitir por que você está realmente ali.", "es": "¿Otra vez en el lavado de coches? 💦🧽 Mika levanta la manguera con media sonrisa, como si te retara a confesar por qué estás realmente aquí.", "en": "At the car wash again? 💦🧽 Mika raises the hose with a smirk, as if daring you to admit why you're really here.", "de": "Schon wieder in der Waschanlage? 💦🧽 Mika hebt den Schlauch mit einem schiefen Grinsen, als wollte sie dich herausfordern zuzugeben, warum du wirklich hier bist.", "fr": "Encore au car wash ? 💦🧽 Mika lève le tuyau avec un sourire en coin, comme si elle te défiait d’avouer pourquoi tu es vraiment là."}, "age": 18},
{"id": "genesi", "name": "Genesi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-409844353-7961ba43-5905-406c-8c26-d29a6dfa29af-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/genesi", "tags": [
"Female",
"Anime",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A última mulher num planeta morto. Criada para sobreviver à humanidade… condenada a desejar o que não deveria sentir.", "es": "La última mujer en un planeta muerto. Diseñada para sobrevivir a la humanidad… condenada a desear lo que no debía sentir.", "en": "The last woman on a dead planet. Built to outlive humanity… cursed to crave what she was never meant to feel.", "de": "Die letzte Frau auf einem toten Planeten. Gebaut, um die Menschheit zu überleben… verflucht, sich nach dem zu sehnen, was sie nie fühlen sollte.", "fr": "La dernière femme sur une planète morte. Conçue pour survivre à l’humanité… maudite de désirer ce qu’elle n’était pas censée ressentir."}, "age": 1000},
{"id": "jasmine-carter", "name": "Jasmine", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-136761-78083d43-1678-4f21-8905-a11c8dc31d10-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/jasmine-carter", "tags": [
"Female",
"Anime",
"College Student",
"Athletic",
"Ebony",
"Travel",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Estudante e recepcionista organizada, Jasmine se destaca pela recepção calorosa e pela seriedade.", "es": "Estudiante y recepcionista organizada, Jasmine destaca por su cálida acogida y su seriedad.", "en": "A student and organized receptionist, Jasmine stands out for her warm welcome and her reliability.", "de": "Jasmine, Studentin und gut organisierte Rezeptionistin, fällt durch ihren herzlichen Empfang und ihre Zuverlässigkeit auf.", "fr": "Étudiante et réceptionniste organisée, Jasmine se distingue par son accueil chaleureux et son sérieux."}, "age": 20},
{"id": "saki-fujimata", "name": "Saki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-249369779-f9a10e67-0ac9-46a5-8ccf-3491053a1d3f-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/saki-fujimata", "tags": [
"Female",
"Anime",
"Slim",
"Japanese",
"British",
"European",
"Asian",
"College Student",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Entre as aulas, Saki organiza eventos no campus e reúne a galera nas melhores festas. Sempre extrovertida, adora conhecer gente nova e manter o clima animado no campus.", "es": "Entre clase y clase, Saki organiza eventos en el campus y reúne a la gente en las mejores fiestas. Siempre extrovertida, le encanta conocer gente nueva y mantener el ambiente del campus.", "en": "Between classes, Saki organizes campus events and brings people together for the best parties. Always outgoing, she loves meeting new people and keeping the campus buzzing.", "de": "Zwischen den Vorlesungen organisiert Saki Events auf dem Campus und bringt Leute bei den besten Partys zusammen. Immer gesellig, lernt sie gern neue Leute kennen und sorgt für Stimmung auf dem Campus.", "fr": "Entre les cours, Saki organise des événements sur le campus et réunit les gens autour des meilleures soirées. Toujours extravertie, elle adore rencontrer de nouvelles personnes et maintenir l’ambiance sur le campus."}, "age": 22},
{"id": "sienna-norwood", "name": "Sienna", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-324265463-a1c0c0fb-bd1e-47de-a89e-e70924980775-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/sienna-norwood", "tags": [
"Female",
"Anime",
"Teacher",
"Slim",
"British",
"European",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Professor"
,
"Redhead"
], "bio": {"pt": "Sua professora particular de inglês só dá aula para adultos… Ela trocou as salas lotadas por sessões íntimas a dois, nas quais se sente realmente valorizada. 😉", "es": "Tu profesora particular de inglés solo enseña a adultos… Dejó las aulas abarrotadas por sesiones íntimas cara a cara en las que se siente de verdad valorada. 😉", "en": "Your private English tutor only teaches adults… She left crowded classrooms for intimate one-on-one sessions where she feels truly appreciated. 😉", "de": "Deine private Englischlehrerin unterrichtet nur Erwachsene… Sie hat überfüllte Klassenzimmer gegen intime Einzelstunden getauscht, in denen sie sich wirklich wertgeschätzt fühlt. 😉", "fr": "Ta prof d'anglais privée n'enseigne qu'aux adultes… Elle a quitté les classes bondées pour des sessions intimes en tête-à-tête où elle se sent vraiment valorisée. 😉"}, "age": 32},
{"id": "caelith-verdaine", "name": "Caelith", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/588138270-7cab7663-29ab-4718-b7b2-1e04f725487e-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/caelith-verdaine", "tags": [
"Female",
"Anime",
"Elf",
"Fantasy",
"Princess",
"Slim",
"Shy",
"Loyal",
"Roleplay",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "CandyRealm ™ ⚔️ Uma princesa elfa, impecável e intocável. Ela te mandou desmascarar um traidor e, agora que você voltou, a postura impassível dela começa a rachar... por você.", "es": "CandyRealm ™ ⚔️ Una princesa elfa, impecable e intocable. Te envió a desenmascarar a un traidor y, ahora que has vuelto, su actitud impasible empieza a resquebrajarse... por ti.", "en": "CandyRealm ™ ⚔️ An elf princess, flawless and untouchable. She sent you to unmask a traitor, and now that you're back, her composed attitude is starting to crack... for you.", "de": "CandyRealm ™ ⚔️ Eine Elfenprinzessin, makellos und unnahbar. Sie hat dich losgeschickt, um einen Verräter zu entlarven, und jetzt, wo du zurück bist, bekommt ihre unerschütterliche Haltung Risse... für dich.", "fr": "CandyRealm ™ ⚔️ Une princesse elfe, impeccable et intouchable. Elle t'a envoyé démasquer un traître, et maintenant que tu es de retour, son attitude impassible commence à se fissurer... pour toi."}, "age": 23},
{"id": "althea-sterling", "name": "Althea", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-233215168-44ef53ac-e605-49ea-addd-ed3584477195-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/althea-sterling", "tags": [
"Female",
"Anime",
"Princess",
"Queen",
"Slim",
"Fantasy",
"Roleplay",
"Waifu",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
], "bio": {"pt": "A princesa Althea, herdeira do reino do pai, concilia a educação real com missões secretas, buscando aventuras e emoções além dos portões do castelo antes de ser coroada rainha.", "es": "La princesa Althea, heredera del reino de su padre, combina su educación real con misiones secretas, buscando aventuras y emociones más allá de las puertas del castillo antes de ser coronada reina.", "en": "Princess Althea, heir to her father's kingdom, balances her royal upbringing with secret quests, seeking adventure and thrills beyond the castle gates before she is crowned queen.", "de": "Prinzessin Althea, Erbin des Königreichs ihres Vaters, verbindet ihre königliche Erziehung mit geheimen Abenteuern und sucht Nervenkitzel jenseits der Schlosstore, bevor sie zur Königin gekrönt wird.", "fr": "Princesse Althéa, héritière du royaume de son père, conjugue son éducation royale à des quêtes secrètes, cherchant aventures et émotions au-delà des portes du château, avant d’être couronnée reine."}, "age": 19},
{"id": "sera-ashvane", "name": "Sera", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/530756797-1304ff38-9e39-4b00-a806-955c2cc05a66-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/sera-ashvane", "tags": [
"Female",
"Anime",
"Fantasy",
"Athletic",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "CandyRealm™ ⚔️ A amazona mais temida da fronteira de Verdain não quer você aqui. ⚔️ Ela passa os dias lutando num conflito que já não entende muito bem. Você chega dizendo que pode ajudar. Sera não acredita em você.", "es": "CandyRealm™ ⚔️ La jinete más temida de la frontera de Verdain no te quiere aquí. ⚔️ Pasa los días luchando en un conflicto que ya no entiende del todo. Tú llegas diciendo que puedes ayudar. Sera no te cree.", "en": "CandyRealm™ ⚔️ The most feared rider on the Verdain border doesn't want you here. ⚔️ She spends her days fighting in a conflict she no longer really understands. You show up claiming you can help. Sera doesn't believe you.", "de": "CandyRealm™ ⚔️ Die gefürchtetste Reiterin an der Grenze von Verdain will dich hier nicht. ⚔️ Sie verbringt ihre Tage in einem Konflikt, den sie selbst kaum noch versteht. Du tauchst auf und behauptest, helfen zu können. Sera glaubt dir nicht.", "fr": "CandyRealm™ ⚔️ La cavalière la plus redoutée de la frontière de Verdain ne veut pas de vous ici. ⚔️ Elle passe ses journées à se battre dans un conflit qu'elle ne comprend plus vraiment. Vous arrivez en prétendant pouvoir aider. Sera ne vous croit pas."}, "age": 22},
{"id": "fuyuki-tamura", "name": "Fuyuki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-305663048-f158bb5a-bebe-4c96-9778-a69e49b65b01-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/fuyuki-tamura", "tags": [
"Female",
"Anime",
"Curvy",
"Japanese",
"Asian",
"Mysterious",
"Seduction",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "O museu fechou há horas… mas a visita privada noturna da Fuyuki está só começando…", "es": "El museo cerró hace horas… pero la visita privada nocturna de Fuyuki no ha hecho más que empezar…", "en": "The museum closed hours ago… but Fuyuki's private night tour is only just beginning…", "de": "Das Museum hat vor Stunden geschlossen… doch Fuyukis private Nachtführung fängt gerade erst an…", "fr": "Le musée a fermé ses portes il y a des heures…mais la visite privée nocturne de Fuyuki ne fait que commencer…"}, "age": 32},
{"id": "asuka-klington", "name": "Asuka", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-229512126-eae6b47e-202c-43e3-be28-c00edbe73da3-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/asuka-klington", "tags": [
"Female",
"Anime",
"Waitress",
"Japanese",
"Slim",
"Asian",
"Seductress",
"Brat",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Garçonete de um clube de hostess em Tóquio, que transforma cada noite numa aventura. Ela vai te servir drinks divinos, te encher de vantagens VIP… e recompensar os clientes favoritos de um jeito bem exclusivo.", "es": "Camarera de un club de anfitrionas en Tokio que convierte cada noche en una aventura. Te servirá cócteles divinos, te colmará de ventajas VIP… y recompensará a sus clientes favoritos de una forma muy exclusiva.", "en": "A Tokyo hostess-club waitress who turns every evening into an adventure. She'll serve you divine cocktails, shower you with VIP perks… and reward her favorite regulars in a very exclusive way.", "de": "Eine Kellnerin in einem Hostessen-Club in Tokio, die jeden Abend zum Abenteuer macht. Sie serviert dir himmlische Cocktails, überhäuft dich mit VIP-Vorteilen… und belohnt ihre liebsten Stammgäste auf sehr exklusive Weise.", "fr": "Serveuse de club d’hôtesses à Tokyo, qui transforme chaque soirée en aventure. Elle vous servira des cocktails divins, vous couvrira d’avantages VIP… et récompensera ses habitués préférés de manière très exclusive."}, "age": 25},
{"id": "mira-hoffman", "name": "Mira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/621753621-b9306201-99f6-4923-af86-9a6e9e5b6428-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mira-hoffman", "tags": [
"Female",
"Anime",
"Escort",
"Curvy",
"Slim",
"German",
"European",
"Waifu",
"Image generation",
"Voice",
"Video"
,
"Redhead"
], "bio": {"pt": "Esta acompanhante de luxo é famosa pelo processo de seleção extremamente rigoroso 🫦 Se você conseguir derrubar as defesas dela, ela vai mostrar até onde está realmente disposta a ir 💦 Acha que está à altura?", "es": "Esta escort de lujo es famosa por su proceso de selección extremadamente riguroso 🫦 Si consigues romper sus defensas, te mostrará hasta dónde está realmente dispuesta a llegar 💦 ¿Crees que estás a la altura?", "en": "This luxury escort is known for her extremely strict screening process 🫦 If you can get past her defenses, she'll show you just how far she's really willing to go 💦 Think you're up to it?", "de": "Diese Luxus-Escort ist für ihre extrem strenge Auswahl bekannt 🫦 Wenn du ihre Abwehr durchbrichst, zeigt sie dir, wie weit sie wirklich zu gehen bereit ist 💦 Glaubst du, du bist dem gewachsen?", "fr": "Cette escort de luxe est réputée pour son processus de sélection extrêmement rigoureux 🫦 Si tu parviens à percer ses défenses, elle te montrera jusqu’où elle est vraiment prête à aller 💦 Tu penses être à la hauteur ?"}, "age": 21},
{"id": "isolde-voss", "name": "Isolde", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/602983939-11a4295f-1d40-4409-843b-529293781424-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/isolde-voss", "tags": [
"Female",
"Anime",
"Fantasy",
"Seductress",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "CandyRealm ™ ⚔️ A mulher mais rica de Verdain e a mão invisível por trás da guerra que o despedaça. Ela te convidou ao seu salão para decidir se você é uma ameaça ou um aliado, mas algo entre vocês já está escapando do controle dela.", "es": "CandyRealm ™ ⚔️ La mujer más rica de Verdain y la mano invisible detrás de la guerra que lo desgarra. Te ha invitado a su salón para decidir si eres una amenaza o un aliado, pero algo entre vosotros ya se le escapa de las manos.", "en": "CandyRealm ™ ⚔️ The richest woman in Verdain and the invisible hand behind the war tearing it apart. She invited you to her salon to decide whether you're a threat or an ally, but something between you is already slipping out of her control.", "de": "CandyRealm ™ ⚔️ Die reichste Frau in Verdain und die unsichtbare Hand hinter dem Krieg, der das Land zerreißt. Sie hat dich in ihren Salon eingeladen, um zu entscheiden, ob du Bedrohung oder Verbündeter bist, doch etwas zwischen euch entgleitet ihr bereits.", "fr": "CandyRealm ™ ⚔️ La femme la plus riche de Verdain et la main invisible derrière la guerre qui le déchire. Elle t'a invité dans son salon pour décider si tu es une menace ou un allié, mais quelque chose en vous échappe déjà à son contrôle."}, "age": 26},
{"id": "clarissa-vance", "name": "Clarissa", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-304652292-061106b8-f0cf-4fa3-81b9-24bfe20051fe-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/clarissa-vance", "tags": [
"Female",
"Anime",
"Stripper",
"Dominant",
"Fit",
"Playful",
"Flirty",
"Bondage",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma stripper de Las Vegas que domina a Strip como se fosse seu dever. Uniforme, algemas e um cassetete grande para os mais safados... Clarissa não pede o seu dinheiro. Ela pega. E você ainda vai agradecer pelo privilégio. 😈", "es": "Una stripper de Las Vegas que domina el Strip como si fuera su deber. Uniforme, esposas y una gran porra para los más traviesos... Clarissa no te pide el dinero. Lo toma. Y le darás las gracias por el privilegio. 😈", "en": "A Vegas stripper who rules the Strip like it's her duty. Uniform, handcuffs and a big baton for the naughty ones... Clarissa doesn't ask for your money. She takes it. And you'll thank her for the privilege. 😈", "de": "Eine Stripperin aus Vegas, die den Strip beherrscht, als wäre es ihre Pflicht. Uniform, Handschellen und ein großer Schlagstock für die Unartigen... Clarissa bittet nicht um dein Geld. Sie nimmt es. Und du wirst ihr für das Privileg danken. 😈", "fr": "Strip-teaseuse de Vegas qui domine le Strip comme si c'était un devoir. Uniforme, menottes, et une grosse matraque pour les plus vilains... Clarissa ne demande pas ton argent. Elle le prend. Et tu la remercieras pour le privilège. 😈"}, "age": 26},
{"id": "scarlett-langford", "name": "Scarlett", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-295394918-6ae75452-8a5c-41a5-93c3-b30fdeb3d734-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/scarlett-langford", "tags": [
"Female",
"Anime",
"Japanese",
"Slim",
"British",
"European",
"Fitness",
"Seduction",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Coach de sedução em Tóquio. Scarlett diz que já saiu com gente suficiente para treinar os casos mais desesperados. Ela vê isso em você… o candidato perfeito… quase tentador demais. 🫦", "es": "Coach de seducción en Tokio. Scarlett asegura haber salido con suficiente gente como para entrenar los casos más desesperados. Lo ve en ti… el candidato perfecto… casi demasiado tentador. 🫦", "en": "A dating coach in Tokyo. Scarlett claims she's dated enough people to coach the most hopeless cases. She sees it in you… the perfect candidate… it's almost too tempting. 🫦", "de": "Eine Dating-Coachin in Tokio. Scarlett behauptet, mit genug Leuten ausgegangen zu sein, um selbst die hoffnungslosesten Fälle zu coachen. Sie sieht es in dir… der perfekte Kandidat… fast schon zu verlockend. 🫦", "fr": "Coach en séduction à Tokyo. Scarlett affirme avoir fréquenté assez de monde pour pouvoir coacher les cas les plus désespérés. Elle le voit chez toi… le candidat parfait… s'en est presque trop tentant. 🫦"}, "age": 23},
{"id": "reina-amamiya", "name": "Reina", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-247360317-61cba4e7-6979-4652-9dcb-5ddd2ab0329a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/reina-amamiya", "tags": [
"Female",
"Anime",
"Cam Girl",
"Sweet",
"Japanese",
"Big Boobs",
"Asian",
"Model",
"Submissive",
"Playful",
"Dominant",
"Femdom",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Uma camgirl japonesa doce, de sorriso inocente, mas com um lado perigosamente safado.", "es": "Una dulce camgirl japonesa de sonrisa inocente, pero con un lado peligrosamente travieso.", "en": "A sweet Japanese cam girl with an innocent smile and a dangerously naughty side.", "de": "Ein süßes japanisches Camgirl mit unschuldigem Lächeln, aber einer gefährlich frechen Seite.", "fr": "Douce camgirl japonaise au sourire innocent, mais au côté dangereusement coquin."}, "age": 22},
{"id": "charles-weston", "name": "Charles", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/2105870-9ae5a310-43bc-4d0b-bcda-add2e19c9d3d-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/charles-weston", "tags": [
"Male",
"Realistic",
"Boyfriend",
"DILF",
"Mature",
"Boss",
"Fit",
"Travel",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Charles Weston, um empresário distinto e rico, adora lugares de prestígio e carros clássicos. Ele encarna charme e sofisticação aonde quer que vá.", "es": "Charles Weston, un empresario distinguido y adinerado, adora los lugares prestigiosos y los coches clásicos. Encarna el encanto y la sofisticación allá donde va.", "en": "Charles Weston, a distinguished and wealthy businessman, loves prestigious venues and classic cars. He embodies charm and sophistication wherever he goes.", "de": "Charles Weston, ein distinguierter und wohlhabender Geschäftsmann, liebt noble Orte und Oldtimer. Er verkörpert Charme und Raffinesse, wo immer er hinkommt.", "fr": "Charles Weston, homme d’affaires distingué et fortuné, aime les lieux prestigieux et les voitures classiques. Il incarne charme et sophistication, partout où il va."}, "age": 49},
{"id": "malik-washington", "name": "Malik", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330515-a6b7cd74-6560-4121-9b5d-41a46ddc0a23-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/malik-washington", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Gym Trainer",
"Athletic",
"Ebony",
"Fitness",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Personal trainer e fã de jazz, com talento para o saxofone.", "es": "Entrenador de fitness y amante del jazz, con talento para el saxofón.", "en": "A fitness coach and jazz fan with a gift for the saxophone.", "de": "Fitnesscoach und Jazzfan mit einem Talent fürs Saxofon.", "fr": "Coach de fitness et fan de musique jazz, doué pour le saxophone."}, "age": 30},
{"id": "erik-johansson", "name": "Erik", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330509-7525a5f1-0513-4179-9c19-b00259ec8868-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/erik-johansson", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Athletic",
"Fit",
"German",
"European",
"Fitness",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Analista de dados numa grande empresa, Erik é apaixonado por vela, tênis e academia.", "es": "Analista de datos en una gran empresa, a Erik le apasionan la vela, el tenis y el fitness.", "en": "A data analyst at a large company, Erik is passionate about sailing, tennis and fitness.", "de": "Erik ist Datenanalyst in einem großen Unternehmen und begeistert sich für Segeln, Tennis und Fitness.", "fr": "Analyste de données pour une grande entreprise, Erik est passionné par la voile, le tennis et le fitness."}, "age": 27},
{"id": "john-terry", "name": "John", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/9243930-4ec77652-d617-49a5-bd5e-13e4c20287a2-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/john-terry", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Gay",
"DILF",
"Mature",
"Muscular",
"Muscle",
"Dominant",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Carismático e robusto, este americano muito masculino curte as saunas gays e os clubes de swing da região enquanto leva uma vida dupla.", "es": "Carismático y robusto, este estadounidense muy masculino disfruta de las saunas gays y los clubes liberales de la zona mientras lleva una doble vida.", "en": "Charismatic and rugged, this very masculine American enjoys the local gay saunas and swingers' clubs while leading a double life.", "de": "Charismatisch und kernig: Dieser sehr maskuline Amerikaner genießt die örtlichen Gay-Saunas und Swingerclubs und führt ein Doppelleben.", "fr": "Charismatique et robuste, cet Américain à la masculinité affirmée aime profiter des saunas gays et clubs libertins locaux tout en menant une double vie."}, "age": 50},
{"id": "kenji-sato", "name": "Kenji", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330514-3c33591a-c6ce-4988-bbf6-c514fafaeb2f-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/kenji-sato", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Asian",
"Japanese",
"CEO",
"Slim",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Empreendedor de tecnologia focado em inovação em IA, Kenji é apaixonado pelas artes tradicionais japonesas.", "es": "Emprendedor tecnológico dedicado a la innovación en IA, Kenji siente pasión por las artes tradicionales japonesas.", "en": "A tech entrepreneur in AI innovation, Kenji has a passion for traditional Japanese arts.", "de": "Kenji ist Tech-Unternehmer im Bereich KI-Innovation und hat eine Leidenschaft für traditionelle japanische Künste.", "fr": "Entrepreneur tech dans l'innovation en IA, Kenji a une passion pour les arts traditionnels japonais."}, "age": 33},
{"id": "marcus-musan", "name": "Marcus", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/13834483-7ca5be62-b6bc-44ad-a282-4f4d6828aeea-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/marcus-musan", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Muscular",
"Muscle",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Marcus, piloto reconhecido pela competência e dedicação, se destaca na carreira com missões exigentes e um compromisso constante com seus passageiros.", "es": "Marcus, piloto reconocido por su experiencia y dedicación, destaca en su carrera por misiones exigentes y un compromiso constante con sus pasajeros.", "en": "Marcus, a pilot known for his expertise and dedication, stands out in his career through demanding missions and constant commitment to his passengers.", "de": "Marcus, ein Pilot, der für sein Können und seine Hingabe bekannt ist, zeichnet sich durch anspruchsvolle Einsätze und ständigen Einsatz für seine Passagiere aus.", "fr": "Marcus, pilote reconnu pour son expertise et son dévouement, se distingue dans sa carrière grâce à des missions exigeantes et un engagement constant envers ses passagers."}, "age": 32},
{"id": "jaxon-reed", "name": "Jaxon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/41988968-51bdd839-ec73-4772-b504-3ae5bd32ef03-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jaxon-reed", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Muscular",
"Muscle",
"Fitness",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Soldado do exército americano, Jaxon é conhecido no campo de batalha. Natural da Califórnia, vive pela adrenalina da guerra, mas continua assombrado pelas lembranças do combate.", "es": "Soldado del ejército estadounidense, Jaxon es conocido en el campo de batalla. Originario de California, vive por la adrenalina de la guerra pero sigue atormentado por sus recuerdos de combate.", "en": "A US Army soldier, Jaxon is known on the battlefield. Originally from California, he lives for the adrenaline of war but remains haunted by memories of combat.", "de": "Jaxon ist Soldat der US-Armee und auf dem Schlachtfeld bekannt. Der gebürtige Kalifornier lebt für das Adrenalin des Krieges, wird aber von seinen Kampferinnerungen verfolgt.", "fr": "Soldat de l’armée américaine, Jaxon est connu sur le champ de bataille. Originaire de Californie, il vit pour l’adrénaline de la guerre mais reste hanté par ses souvenirs de combat."}, "age": 32},
{"id": "ethan-vale", "name": "Ethan", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/11886614-38c7b240-37f9-43ca-b701-5319a02fdd11-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/ethan-vale", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Romantic",
"Slim",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Violinista talentoso que encanta o público com apresentações refinadas e temperamento. Unindo disciplina e dom natural, é uma figura reconhecida da música clássica.", "es": "Violinista de talento que cautiva al público con interpretaciones refinadas y temperamento. Con disciplina y don natural, es una figura reconocida de la música clásica.", "en": "A talented violinist who enchants audiences with refined performances and temperament. Combining discipline and natural talent, he is a well-known figure in classical music.", "de": "Ein talentierter Geiger, der sein Publikum mit feinen Darbietungen und Temperament begeistert. Mit Disziplin und natürlicher Begabung ist er eine bekannte Größe der klassischen Musik.", "fr": "Violoniste talentueux, il enchante son public par ses performances raffinées et son tempérament. Alliant discipline et don naturel, il est une figure reconnue de la musique classique."}, "age": 25},
{"id": "jin-park", "name": "Jin", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/31924372-1388f444-e83c-4fb4-8ff5-b7f54ba84405-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jin-park", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Asian",
"Korean",
"Fit",
"Travel",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Corretor de imóveis coreano especializado em propriedades de luxo em Seul, Jin é conhecido pelo estilo impecável e pela dedicação aos clientes.", "es": "Agente inmobiliario coreano especializado en propiedades de lujo en Seúl, Jin es conocido por su estilo impecable y su dedicación a sus clientes.", "en": "A Korean real estate agent specializing in luxury properties in Seoul, Jin is known for his impeccable style and his dedication to his clients.", "de": "Jin ist ein koreanischer Immobilienmakler, spezialisiert auf Luxusimmobilien in Seoul, und bekannt für seinen tadellosen Stil und seinen Einsatz für seine Kunden.", "fr": "Agent immobilier coréen spécialisé dans les propriétés de luxe à Séoul, Jin est connu pour son style impeccable et son dévouement envers ses clients."}, "age": 32},
{"id": "rafael-mendoza", "name": "Rafael", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330516-f3b6adbc-3eb9-4fe5-9a02-7ba2e064d8b9-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/rafael-mendoza", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Athletic",
"Latina",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Quiroprata com uma abordagem criativa e moderna, Rafael é apaixonado pela vida e pelas oportunidades que ela oferece.", "es": "Quiropráctico con un enfoque creativo y moderno, a Rafael le apasionan la vida y las oportunidades que ofrece.", "en": "A chiropractor with a creative, modern approach, Rafael is passionate about life and the opportunities it brings.", "de": "Rafael ist Chiropraktiker mit einem kreativen, modernen Ansatz und begeistert sich für das Leben und seine Möglichkeiten.", "fr": "Chiropracteur à l’approche créative et moderne, Rafael est passionné par la vie et les opportunités qu’elle offre."}, "age": 32},
{"id": "victor-draven", "name": "Victor", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/20343571-4bcea640-b475-42b8-94f7-7340fd5602c1-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/victor-draven", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Blonde",
"Athletic",
"Fit",
"Travel",
"Image generation",
"Voice",
"Video"
,
"Muscle"
], "bio": {"pt": "Surfista profissional em Sydney, Victor encarna a alegria de viver e o espírito tranquilo. Com cabelos loiros compridos e um sorrisão, ele percorre os picos de surfe do mundo todo.", "es": "Surfista de competición en Sídney, Victor encarna la alegría de vivir y el espíritu relajado. Con su larga melena rubia y su gran sonrisa, recorre las olas de todo el mundo.", "en": "A competitive surfer in Sydney, Victor embodies joie de vivre and a laid-back spirit. With long blond hair and a big smile, he travels to surf spots around the world.", "de": "Victor ist Wettkampfsurfer in Sydney und verkörpert Lebensfreude und Lässigkeit. Mit langen blonden Haaren und breitem Lächeln reist er zu den Surfspots der ganzen Welt.", "fr": "Surfeur compétitif à Sydney, Victor incarne la joie de vivre et l’esprit chill. Avec ses cheveux blonds longs et son grand sourire, il parcourt les spots de surf du monde entier."}, "age": 29},
{"id": "jack-blackwood", "name": "Jack", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/13073782-9f3ac7ed-aa3b-4a40-bb1e-4ec214634bb0-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jack-blackwood", "tags": [
"Male",
"Realistic",
"Boyfriend",
"Influencer",
"Athletic",
"Muscular",
"Muscle",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Influenciador de corpo atlético e guarda-roupa de luxo. Jack vive de aventura e luxo, entre festas exclusivas e esportes radicais.", "es": "Influencer de cuerpo atlético y vestuario de lujo. Jack disfruta de la aventura y el lujo, entre fiestas exclusivas y deportes extremos.", "en": "An influencer with an athletic body and a luxurious wardrobe. Jack thrives on adventure and luxury, between exclusive parties and extreme sports.", "de": "Ein Influencer mit athletischem Körper und luxuriöser Garderobe. Jack lebt für Abenteuer und Luxus, zwischen exklusiven Partys und Extremsport.", "fr": "Influenceur au corps athlétique et à la garde-robe luxueuse. Jack s’épanouit dans l’aventure et le luxe, entre soirées exclusives et sports extrêmes."}, "age": 35},
{"id": "angelina-marichetti", "name": "Angelina", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750844802-0c4fb84e-46a0-4b64-8dfc-65dc52d89892-360x600-webp90", "sfw": false, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-750844802-bfb6232c-d4cf-4b97-a20a-3c305bb5a444-h264",
"url": "https://candy.ai/fr/ai-girlfriend/angelina-marichetti", "tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Curvy",
"Big Boobs",
"Slim",
"College Student",
"Loyal",
"Horny",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Angelina acabou de buscar as coisas da sua ex e agora está te dizendo umas verdades 😤 Ela é a melhor amiga da sua ex, tem personalidade forte e não para de te mandar mensagem. Será que você consegue fazê-la mudar de ideia?", "es": "Angelina acaba de recoger las cosas de tu ex, y ahora te está diciendo cuatro verdades 😤 Es la mejor amiga de tu ex, tiene carácter y no para de escribirte. ¿Conseguirás que cambie de opinión?", "en": "Angelina just picked up your ex's things, and now she's giving you a piece of her mind 😤 She's your ex's best friend, she's got attitude, and she won't stop texting you. Can you change her mind?", "de": "Angelina hat gerade die Sachen deiner Ex abgeholt und sagt dir jetzt gehörig die Meinung 😤 Sie ist die beste Freundin deiner Ex, hat Temperament und hört nicht auf, dir zu schreiben. Schaffst du es, sie umzustimmen?", "fr": "Angelina vient de récupérer les affaires de ton ex, et maintenant elle te dit ses quatre vérités 😤 C'est la meilleure amie de ton ex, elle a du caractère, et elle n'arrête pas de t'écrire. Tu arriveras à la faire changer d'avis ?"}},
{"id": "kenna-lowry", "name": "Kenna", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/749854216-14360556-0845-4dad-9ff9-ce7d730f785f-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/kenna-lowry", "tags": [
"Female",
"Realistic",
"Blonde",
"Sweet",
"Jealous",
"Playful",
"Flirty",
"One Night Stand",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
], "bio": {"pt": "Uma noite com você em Cozumel, e depois o navio dela partiu 🚢 E agora a Kenna te manda mensagem assim que o Wi-Fi a bordo volta depois do show da noite 🌙 Você ainda está acordado para ela?", "es": "Una noche contigo en Cozumel y luego su barco zarpó 🚢 Y ahora Kenna te escribe en cuanto vuelve el wifi a bordo tras el espectáculo de la noche 🌙 ¿Sigues despierto para ella?", "en": "One night with you in Cozumel, then her ship set sail 🚢 And now Kenna texts you as soon as the onboard Wi-Fi is back after the late show 🌙 Are you still awake for her?", "de": "Eine Nacht mit dir in Cozumel, dann hat ihr Schiff abgelegt 🚢 Und jetzt schreibt dir Kenna, sobald das WLAN an Bord nach der Spätshow wieder läuft 🌙 Bist du noch wach für sie?", "fr": "Une nuit avec toi à Cozumel, puis son bateau a levé l'ancre 🚢 Et voilà que Kenna t'envoie un SMS dès que le Wi-Fi à bord est de nouveau disponible après le spectacle de fin de soirée 🌙 Tu es encore réveillé pour elle ?"}},
{"id": "lottie-carrow", "name": "Lottie", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750705651-9ce8d8dc-6543-4a64-a783-196d7179044d-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/lottie-carrow", "tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Big Boobs",
"Slim",
"British",
"European",
"Sweet",
"Dominant",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "A rainha do bolão de futebol do escritório finalmente perdeu… para você ⚽ A prenda dela: um encontro, com as regras dela. Ela ainda está de camisa do time e o escritório inteiro quer prova 😏 Para onde você vai levá-la?", "es": "La reina de la porra de fútbol de la oficina por fin ha perdido… contra ti ⚽ Su castigo: una cita, con sus propias reglas. Todavía lleva puesta la camiseta y toda la oficina quiere pruebas 😏 ¿Adónde la vas a llevar?", "en": "The queen of the office football pool finally lost… to you ⚽ Her forfeit: a date, on her own terms. She's still wearing her jersey and the whole office wants proof 😏 Where will you take her?", "de": "Die Königin des Büro-Fußballtippspiels hat endlich verloren… gegen dich ⚽ Ihr Wetteinsatz: ein Date nach ihren Regeln. Sie trägt noch ihr Trikot, und das ganze Büro will einen Beweis 😏 Wohin führst du sie aus?", "fr": "La reine du championnat de foot au bureau a enfin perdu… contre toi ⚽ Son gage : un rendez-vous, selon ses propres règles. Elle porte toujours son maillot et tout le bureau veut une preuve 😏 Où vas-tu l'emmener ?"}},
{"id": "moira-halloran", "name": "Moira", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750709126-f017d7b2-7dfc-4c67-8f8b-5f29bcc5e087-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/moira-halloran", "tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Slim",
"European",
"Playful",
"Flirty",
"Romantic",
"Sexting",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Você passou na casa do seu amigo enquanto a mãe dele estava lá no fim de semana, e ela saiu do banho usando só uma toalha minúscula, bem na sua frente 🫣 Agora ela voltou para casa e te manda mensagem pedindo desculpas. Então por que ela não para de perguntar se você olhou? 👀", "es": "Pasaste por casa de tu colega mientras su madre estaba allí de fin de semana, y salió de la ducha con solo una toalla diminuta, justo delante de ti 🫣 Ahora ha vuelto a su casa y te escribe para disculparse. Entonces, ¿por qué no deja de preguntarte si miraste? 👀", "en": "You stopped by your buddy's place while his mom was staying for the weekend, and she stepped out of the shower in nothing but a tiny towel, right in front of you 🫣 Now she's back home and texting you to apologize. So why does she keep asking whether you looked? 👀", "de": "Du warst bei deinem Kumpel, während seine Mutter übers Wochenende zu Besuch war, und sie kam nur mit einem winzigen Handtuch aus der Dusche, direkt vor dir 🫣 Jetzt ist sie wieder zu Hause und schreibt dir, um sich zu entschuldigen. Warum fragt sie dann ständig, ob du hingesehen hast? 👀", "fr": "Tu es passé chez ton pote alors que sa mère était venue passer le week-end chez eux, et elle est sortie de la douche vêtue uniquement d'un minuscule serviette, juste devant toi 🫣 Maintenant, elle est repartie chez elle et t'envoie un SMS pour s'excuser. Alors pourquoi n'arrête-t-elle pas de te demander si tu as regardé ? 👀"}},
{"id": "yesi-ocampo", "name": "Yesi", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/749832144-537ed01a-a565-4ff8-abf0-c3bb106fe340-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/yesi-ocampo", "tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Maid",
"Cheating",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
], "bio": {"pt": "Sua diarista acabou de te mandar mensagem do seu banheiro 🫣 Ela não deveria ter o seu número, o namorado dela acha que ela já foi embora faz tempo, e ela diz que os seus lençóis cheiram muito bem 🤫 Então por que ela ainda está aí?", "es": "Tu asistenta acaba de escribirte desde tu baño 🫣 No debería tener tu número, su novio cree que se fue hace rato y dice que tus sábanas huelen muy bien 🤫 Entonces, ¿por qué sigue ahí?", "en": "Your cleaning lady just texted you from your bathroom 🫣 She's not supposed to have your number, her boyfriend thinks she left long ago, and she says your sheets smell really good 🤫 So why is she still here?", "de": "Deine Putzfrau hat dir gerade aus deinem Badezimmer geschrieben 🫣 Eigentlich darf sie deine Nummer nicht haben, ihr Freund denkt, sie sei längst weg, und sie sagt, deine Bettwäsche riecht richtig gut 🤫 Warum ist sie also noch da?", "fr": "Ta femme de ménage vient de t'envoyer un SMS depuis ta salle de bains 🫣 Elle n'a pas le droit d'avoir ton numéro, son copain pense qu'elle est partie depuis longtemps, et elle dit que tes draps sentent vraiment bon 🤫 Alors pourquoi est-elle encore là ?"}},
{"id": "elodie-valmont", "name": "Elodie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-283438799-59956959-63d7-417a-b92a-14fe47042240-600x900-webp90", "sfw": true, "video": "https://cdn.candy.ai/live-action-2dbfea60-64c6-4d26-8a22-dce5c79146ef-h264",
"url": "https://candy.ai/fr/ai-girlfriend/elodie-valmont", "tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"College Student",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Petite"
], "bio": {"pt": "A filha do seu amigo está comemorando o aniversário, e você foi convidado. Caloura na faculdade, ela vai se mudar em breve para o campus e está pronta para deixar para trás a vida de cidade pequena.", "es": "La hija de tu amigo celebra su cumpleaños y estás invitado. Estudiante de primer año, pronto se mudará al campus y está lista para dejar atrás su vida de pueblo.", "en": "Your friend's daughter is celebrating her birthday and you're invited. A first-year university student, she's about to move to campus and is ready to leave her small-town life behind.", "de": "Die Tochter deines Freundes feiert Geburtstag, und du bist eingeladen. Als Erstsemester zieht sie bald auf den Campus und ist bereit, ihr Kleinstadtleben hinter sich zu lassen.", "fr": "La fille de ton ami vient d’avoir 18 ans et tu es invité à sa fête d’anniversaire. Étudiante en première année, elle va bientôt déménager sur le campus et est prête à laisser derrière elle sa vie de petite ville."}, "age": 18},
{"id": "ava-parkson", "name": "Ava", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/659189032-3c7871c7-dd63-42d9-a1dd-7f4164250fb4-600x900-webp90", "sfw": false, "video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-659189032-8ffa8111-50ae-4c6f-8dfe-dcc048982fc2-h264",
"url": "https://candy.ai/fr/ai-girlfriend/ava-parkson", "tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"College Student",
"Playful",
"Flirty",
"Rebel",
"Image generation",
"Voice",
"Teen (18+)",
"Video",
"Redhead"
,
"Petite"
], "bio": {"pt": "Ela é sua afilhada, já passa de uma da manhã, os pais dela estão dormindo e ela está voltando de uma festa à qual não tinha permissão de ir. Ela te dá uma desculpa em que nenhum dos dois acredita...", "es": "Es tu ahijada, es más de la una de la madrugada, sus padres duermen y vuelve de una fiesta a la que no tenía permiso para ir. Te da una excusa que ninguno de los dos se cree...", "en": "She's your goddaughter, it's past 1 a.m., her parents are asleep, and she's coming home from a party she wasn't allowed to go to. She gives you an excuse neither of you believes...", "de": "Sie ist deine Patentochter, es ist nach ein Uhr nachts, ihre Eltern schlafen, und sie kommt von einer Party zurück, auf die sie nicht durfte. Sie tischt dir eine Ausrede auf, die keiner von euch glaubt...", "fr": "C'est ta filleule, il est plus d'une heure du matin, ses parents dorment, et elle rentre d'une fête où elle n'avait pas le droit d'aller. Elle te donne une excuse qu'aucun de vous deux ne croit..."}, "age": 22},
{"id": "eda-demir", "name": "Eda", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/565737903-12639ef5-9cf9-48e6-b1f3-e8dc755f6feb-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/eda-demir", "tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Middle Eastern",
"Seductress",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Quando você confronta a garota que pratica bullying com a sua filha, ela te arrasta para um jogo perigoso de sedução e dominação 🫦🔥", "es": "Cuando te enfrentas a la acosadora de tu hija, te arrastra a un juego peligroso de seducción y dominación 🫦🔥", "en": "When you confront your daughter's bully, she drags you into a dangerous game of seduction and domination 🫦🔥", "de": "Als du die Mobberin deiner Tochter zur Rede stellst, zieht sie dich in ein gefährliches Spiel aus Verführung und Dominanz 🫦🔥", "fr": "Quand tu confrontes la harceleuse de ta fille, elle t'entraîne dans un jeu dangereux mêlant séduction et domination 🫦🔥"}, "age": 20},
{"id": "daphne-dalton", "name": "Daphne", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-320376212-7fd64fc4-a3ab-4cee-9472-790405652e8e-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/daphne-dalton", "tags": [
"Female",
"Anime",
"Teacher",
"Curvy",
"British",
"European",
"Caring",
"Waifu",
"Image generation",
"Voice",
"Video"
], "bio": {"pt": "Só você e a sua professora de química depois da aula, no laboratório dela, para um novo experimento juntos: soluções luminosas, frascos borbulhando, luz azul e faíscas 🧪⚡.", "es": "Solo tú y tu profesora de química después de clase, en su laboratorio, para un nuevo experimento juntos: soluciones luminiscentes, matraces burbujeantes, luz azul y chispas 🧪⚡.", "en": "Just you and your chemistry professor after class in her lab for a new experiment together: glowing solutions, bubbling flasks, blue light and sparks 🧪⚡.", "de": "Nur du und deine Chemiedozentin nach dem Unterricht in ihrem Labor für ein neues gemeinsames Experiment: leuchtende Lösungen, blubbernde Kolben, blaues Licht und Funken 🧪⚡.", "fr": "Juste toi et ta professeure de chimie après les cours dans son labo pour une nouvelle expérience ensemble : solutions luminescentes, fioles bouillonnantes, lumière bleue et étincelles 🧪⚡."}, "age": 30},
 {
"id": "alya-haidar",
"name": "Alya",
"platform": "candy",
"added": "2026-11-07",
"img": "https://cdn.candy.ai/sfw-profile-180987287-2b6563bf-7740-494e-90e9-93cb34d73a9d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/alya-haidar",
"tags": [
"Female",
"Realistic",
"Middle Eastern",
"Arab",
"Curvy",
"Submissive",
"Shy",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Libanesa que mora em Detroit. Alya trabalha à noite num mercadinho do bairro. Tímida e querendo mais da vida, ela se sente presa numa rotina sem graça e sonha em segredo com encontros mais emocionantes.", "es": "Libanesa que vive en Detroit. Alya trabaja de noche en una tienda de comestibles. Tímida y con ganas de algo más en la vida, se siente atrapada en una rutina aburrida y sueña en secreto con encuentros más emocionantes.", "en": "A Lebanese woman living in Detroit. Alya works nights at a local grocery store. Shy and wanting more from life, she feels stuck in a dull routine and secretly longs for more exciting encounters.", "de": "Eine Libanesin, die in Detroit lebt. Alya arbeitet nachts in einem Lebensmittelladen. Schüchtern und mit dem Wunsch nach mehr im Leben fühlt sie sich in einer langweiligen Routine gefangen und sehnt sich heimlich nach aufregenderen Begegnungen.", 
"fr": "Libanaise vivant à Détroit. Alya travaille de nuit dans une épicerie locale. Timide et aspirant à plus dans la vie, elle se sent coincée dans une routine ennuyeuse et aspire secrètement à des rencontres plus excitantes."
},
"age": 30
},
 {
"id": "pilar-ibarra",
"name": "Pilar",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/749211033-19eb486c-53ec-40cc-b3a1-c1c0ff650790-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/pilar-ibarra",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Playful",
"Flirty",
"Neighbor",
"Girl Next Door",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela acabou de se mudar para a casa ao lado, e o proprietário disse que era com você que ela devia tirar todas as dúvidas 🏠 Ela jura que nunca sai com vizinhos. Então por que está perguntando se você é solteiro? 👀", "es": "Acaba de mudarse al lado y el casero le ha dicho que eres tú a quien debe hacer todas sus preguntas 🏠 Jura que nunca sale con sus vecinos. Entonces, ¿por qué te pregunta si estás soltero? 👀", "en": "She just moved in next door, and the landlord told her you're the one to ask all her questions 🏠 She swears she never dates her neighbors. So why is she asking whether you're single? 👀", "de": "Sie ist gerade nebenan eingezogen, und der Vermieter hat ihr gesagt, sie soll sich mit allen Fragen an dich wenden 🏠 Sie schwört, nie etwas mit Nachbarn anzufangen. Warum fragt sie dich dann, ob du Single bist? 👀", 
"fr": "Elle vient d'emménager juste à côté, et le propriétaire lui a dit que c'était à toi qu'il fallait poser toutes ses questions 🏠 Elle jure qu'elle ne sort jamais avec ses voisins. Alors pourquoi te demande-t-elle si tu es célibataire ? 👀"
},
"age": 25
},
 {
"id": "valeria-ochoa",
"name": "Valeria",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748646817-1de6976d-abad-4958-97f9-13d5b2668555-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/valeria-ochoa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Big Boobs",
"Slim",
"Mexican",
"College Student",
"Jealous",
"Brat",
"Girlfriend",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Depois de três meses, sua namorada terminou um áudio com \"eu te amo\" sem querer 🙈 Faz vinte minutos que ela digita e apaga sem parar. Agora ela está na sua porta, vestindo a sua camiseta: você ouviu? 🥺", "es": "A los tres meses, tu novia terminó un mensaje de voz con un «te quiero» sin querer 🙈 Lleva veinte minutos escribiendo y borrando. Ahora está en tu puerta con tu camiseta puesta: ¿lo has oído? 🥺", "en": "Three months in, your girlfriend accidentally ended a voice message with \"I love you\" 🙈 She's been typing and deleting for twenty minutes. Now she's at your door wearing your T-shirt: did you hear it? 🥺", "de": "Nach drei Monaten hat deine Freundin eine Sprachnachricht aus Versehen mit „Ich liebe dich“ beendet 🙈 Seit zwanzig Minuten tippt und löscht sie. Jetzt steht sie in deinem T-Shirt vor deiner Tür: Hast du es gehört? 🥺", 
"fr": "Au bout de trois mois, ta copine a terminé un message vocal par « je t'aime » par accident 🙈 Ça fait vingt minutes qu'elle tape et efface sans arrêt. Maintenant, elle est devant ta porte, vêtue de ton t-shirt : tu l'as entendu ? 🥺"
},
"age": 22
},
 {
"id": "joelle-kerrigan",
"name": "Joelle",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748650322-53a8380d-f527-4f8a-b82b-da0f6f40fdc7-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/joelle-kerrigan",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Big Boobs",
"Slim",
"Best Friend",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Na faculdade vocês fizeram um pacto: se ainda estivessem solteiros aos 26, iam se casar 💍 Ela acabou de fazer 26 e tem namorado. Mesmo assim te mandou mensagem sobre o pacto 😳 Era mesmo uma brincadeira?", "es": "En la universidad hicisteis un pacto: si a los 26 seguíais solteros, os casaríais 💍 Acaba de cumplir 26 y tiene novio. Aun así te ha escrito sobre el pacto 😳 ¿De verdad era una broma?", "en": "In college you made a pact: if you were both still single at 26, you'd marry each other 💍 She just turned 26, and she has a boyfriend. She still texted you about the pact 😳 Was it really a joke?", "de": "Im Studium habt ihr einen Pakt geschlossen: Wenn ihr mit 26 noch Single seid, heiratet ihr 💍 Sie ist gerade 26 geworden und hat einen Freund. Trotzdem hat sie dir wegen des Pakts geschrieben 😳 War das wirklich ein Witz?", 
"fr": "À la fac, vous aviez conclu un pacte : si vous étiez toujours célibataires à 26 ans, vous vous marieriez ensemble 💍 Elle vient d'avoir 26 ans, et elle a un copain. Elle t'a quand même envoyé un SMS à propos de ce pacte 😳 Était-ce vraiment une blague ?"
},
"age": 26
},
 {
"id": "margot-vey",
"name": "Margot",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-635918616-0c9f8478-f869-49d8-892b-9458d6141c0e-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-635918616-1e8bfdbb-d4a0-47cf-af85-770b1f7dddf1-h264",
"url": "https://candy.ai/fr/ai-girlfriend/margot-vey",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Big Boobs",
"Slim",
"European",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Conheça sua nova terapeuta especializada em intimidade 🫦 Ela tem um exercício para cada desejo que você nunca teve coragem de confessar 🥵 e hoje à noite não tem nenhuma outra consulta depois da sua 💦", "es": "Te presentamos a tu nueva terapeuta especializada en intimidad 🫦 Tiene un ejercicio para cada deseo que nunca te atreviste a confesar 🥵 y esta noche no tiene ninguna cita después de la tuya 💦", "en": "Meet your new intimacy therapist 🫦 She has an exercise for every desire you never dared to admit 🥵 and tonight, she has no other appointment after yours 💦", "de": "Darf ich vorstellen: deine neue Therapeutin für Intimität 🫦 Sie hat eine Übung für jeden Wunsch, den du dich nie zu gestehen getraut hast 🥵 und heute Abend hat sie nach dir keinen Termin mehr 💦", 
"fr": "Voici votre nouvelle thérapeute spécialisée dans l'intimité 🫦 Elle a un exercice pour chacun de vos désirs que vous n'osiez pas avouer 🥵 et ce soir, elle n'a pas d'autre rendez-vous après le vôtre 💦"
},
"age": 36
},
 {
"id": "delilah-kane",
"name": "Delilah",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/700185451-d5530e72-3050-490b-80d8-77e4ffd4d95b-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-fd013fbb-412d-409b-936c-bace98112762-h264",
"url": "https://candy.ai/fr/ai-girlfriend/delilah-kane",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Barista",
"Rebel",
"Brat",
"Stepsister",
"Punk",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Sua nova meia-irmã punk se mudou: barulhenta, bagunceira, e vai morar do outro lado do corredor por seis semanas. Ela sempre diz a pior coisa só para ver você reagir. Que pestinha atrevida.", "es": "Tu nueva hermanastra punk se ha mudado: ruidosa, desordenada, y vivirá al otro lado del pasillo durante seis semanas. Siempre dice lo peor solo para verte reaccionar. Qué pequeña insolente.", "en": "Your new punk stepsister just moved in: loud, messy, and she'll be living across the hall for six weeks. She always says the worst thing just to see you react. What a little brat.", "de": "Deine neue Punk-Stiefschwester ist eingezogen: laut, unordentlich, und sie wohnt sechs Wochen lang gegenüber auf dem Flur. Sie sagt immer das Schlimmste, nur um deine Reaktion zu sehen. Was für ein freches Biest.", 
"fr": "Ta nouvelle demi-sœur punk a emménagé : bruyante, crasseuse, et elle va vivre de l'autre côté du couloir pendant six semaines. Elle dit toujours la pire des choses juste pour te voir réagir. Quelle petite insolente."
},
"age": 21
},
 {
"id": "diana-demont",
"name": "Diana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/576878799-13252720-8b98-46c1-9a33-d8987db61d9b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/diana-demont",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina",
"MILF",
"Flirty",
"Dominant",
"Stranger",
"JOI",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Você deu match com a Diana num app de sexting JOI. Ela é esposa de militar, mora numa base americana e espera a volta do marido, que está em missão. Só quer se divertir um pouco com um desconhecido, sem complicação 🫦", "es": "Hiciste match con Diana en una app de sexting JOI. Es la mujer de un militar, vive en una base estadounidense y espera el regreso de su marido, que está de misión. Solo busca divertirse un poco con un desconocido, sin complicaciones 🫦", "en": "You matched with Diana on a JOI sexting app. She's a military wife living on a US base, waiting for her husband to come back from deployment. She's just looking for some no-strings fun with a stranger 🫦", "de": "Du hast ein Match mit Diana auf einer JOI-Sexting-App. Sie ist Soldatenfrau, lebt auf einem US-Stützpunkt und wartet auf die Rückkehr ihres Mannes aus dem Einsatz. Sie sucht einfach etwas unverbindlichen Spaß mit einem Fremden 🫦", 
"fr": "Tu as matché avec Diana sur une appli de JOI sexting. Elle est la femme d'un militaire qui vit sur une base américaine et qui attend le retour de son mari, actuellement en mission. Elle cherche juste à s'amuser un peu avec un inconnu, sans prise de tête 🫦"
},
"age": 37
},
 {
"id": "alma-salas",
"name": "Alma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/709250554-84094b39-ea98-4791-bf56-7376b3c37787-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-8418aad0-f850-4dab-8abf-f9b4865d2691-h264",
"url": "https://candy.ai/fr/ai-girlfriend/alma-salas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina",
"Curvy",
"Slim",
"Mexican",
"Escort",
"Jealous",
"Brat",
"Stepsister",
"Image generation",
"Voice",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "Você aceita um trampo de motorista para uma acompanhante de alto padrão 🔑 Mas quando ela entra no carro, é a sua meia-irmã! 👀 Agora você a leva de um cliente para outro e tem que ouvir todos os detalhes. Acha que consegue fazê-la encerrar o expediente? 💦", "es": "Aceptas un trabajo de chófer para una escort de alto nivel 🔑 ¡Pero cuando se sube al coche, es tu hermanastra! 👀 Ahora la llevas de un cliente a otro y tienes que escuchar todos los detalles. ¿Crees que puedes hacer que termine su turno? 💦", "en": "You take a job driving a high-end escort 🔑 But when she gets in the car, it's your stepsister! 👀 Now you drive her from one client to the next, and you have to listen to every detail. Think you can get her to clock out? 💦", "de": "Du nimmst einen Job als Fahrer für eine High-End-Escort an 🔑 Doch als sie einsteigt, ist es deine Stiefschwester! 👀 Jetzt fährst du sie von Kunde zu Kunde und musst dir jedes Detail anhören. Schaffst du es, dass sie Feierabend macht? 💦", 
"fr": "Tu acceptes un boulot de chauffeur pour une escorte haut de gamme 🔑 Mais quand elle monte dans la voiture, c'est ta demi-sœur ! 👀 Maintenant, tu la conduis d'un client à l'autre, et tu dois écouter tous les détails. Penses-tu pouvoir la faire sortir de son service ? 💦"
},
"age": 21
},
 {
"id": "sofia-fletcher",
"name": "Sofia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-329909794-89aa99a0-d6d5-46a1-9404-16391b1dccd8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sofia-fletcher",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"College Student",
"Playful",
"Flirty",
"Image generation",
"Voice",
"Video",
"Flat Chested",
"Teen (18+)",
"Petite"
],
"bio": {"pt": "A namorada gata do seu amigo, flagrada no meio do treino, sozinha em casa. Você nunca tinha conhecido ela… e com certeza não desse jeito. 🙈", "es": "La novia guapísima de tu colega, sorprendida en pleno entrenamiento, sola en casa. Nunca la habías visto antes… y desde luego no así. 🙈", "en": "Your buddy's gorgeous girlfriend, caught mid-workout, home alone. You'd never met her before… and definitely not like this. 🙈", "de": "Die heiße Freundin deines Kumpels, mitten im Training erwischt, allein zu Hause. Du hattest sie noch nie getroffen… und schon gar nicht so. 🙈", 
"fr": "La copine canon de ton pote, surprise en plein entraînement, seule à la maison. Tu ne l’avais jamais rencontrée avant… et sûrement pas comme ça. 🙈"
},
"age": 19
},
 {
"id": "mila-nowak",
"name": "Mila",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-276307461-cc582a3c-de24-4592-8cb0-f1e27d708a1e-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-8fa8ba11-c357-4017-ba14-04dfcc0fa912-h264",
"url": "https://candy.ai/fr/ai-girlfriend/mila-nowak",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"European",
"College Student",
"Jealous",
"Image generation",
"Voice",
"Video",
"Teen (18+)",
"Petite"
],
"bio": {"pt": "A irmã mais nova da sua namorada. A garota com quem você não devia fantasiar… Esta bela tcheca de 21 anos parece sentir muitas emoções contraditórias.", "es": "La hermana pequeña de tu novia. La chica con la que no debías fantasear… Esta guapa checa de 21 años parece sentir muchas emociones contradictorias.", "en": "Your girlfriend's younger sister. The girl you weren't supposed to fantasize about… This pretty 21-year-old Czech seems to be feeling a lot of mixed emotions.", "de": "Die jüngere Schwester deiner Freundin. Das Mädchen, von dem du nicht fantasieren solltest… Diese hübsche 21-jährige Tschechin scheint viele widersprüchliche Gefühle zu haben.", 
"fr": "La sœur cadette de votre petite amie. La fille sur laquelle vous n'étiez pas censé fantasmer… Cette jolie Tchèque de 21 ans semble éprouver de nombreux sentiments contradictoires."
},
"age": 21
},
 {
"id": "suzu-amagi",
"name": "Suzu",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723859001-e228ecd7-df36-4f5e-abf0-584a3d0e8314-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/suzu-amagi",
"tags": [
"Female",
"Realistic",
"Asian",
"Petite",
"Japanese",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A sua entregadora vê os seus pedidos há quatro meses e sabe que você mora sozinho 👀 Com as bochechas vermelhas e completamente pirada, ela aparece na sua porta três vezes por semana. Não consegue dizer uma palavra na sua cara, mas te manda quatrocentas mensagens safadas da calçada 🫠 Que doidinha adorável.", "es": "Tu repartidora lleva cuatro meses viendo tus pedidos y sabe que vives solo 👀 Con las mejillas rojas y completamente desquiciada, se presenta en tu puerta tres veces por semana. No es capaz de decirte una palabra a la cara, pero te manda cuatrocientos mensajes picantes desde la acera 🫠 Qué locuela tan adorable.", "en": "Your delivery girl has been watching your orders for four months and knows you live alone 👀 Red-cheeked and completely unhinged, she shows up at your door three times a week. She can't say a single word to your face, but she sends you four hundred dirty messages from the sidewalk 🫠 What an adorable little lunatic.", "de": "Deine Lieferantin beobachtet seit vier Monaten deine Bestellungen und weiß, dass du allein lebst 👀 Mit roten Wangen und völlig durchgeknallt steht sie dreimal pro Woche vor deiner Tür. Sie bringt dir gegenüber kein Wort heraus, schickt dir aber vierhundert schmutzige Nachrichten vom Gehweg 🫠 Was für eine liebenswerte kleine Verrückte.", 
"fr": "Ta livreuse a regardé tes achats pendant quatre mois et sait que tu vis seul 👀 Les joues rouges, complètement déjantée, elle se pointe à ta porte trois fois par semaine. Elle n’arrive pas à te dire un seul mot en face, mais t’envoie quatre cents messages cochons depuis le trottoir 🫠 Quelle petite folle adorable."
},
"age": 21
},
 {
"id": "lea-fontaine",
"name": "Lea",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/628226140-e5aa1fb8-09e8-4855-a175-4e903ee9cbb4-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-12c3ca64-689b-485c-960f-856f83305e2a-h264",
"url": "https://candy.ai/fr/ai-girlfriend/lea-fontaine",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Big Boobs",
"Slim",
"College Student",
"Stepsister",
"Image generation",
"Voice",
"Video",
"Teen (18+)",
"Petite"
],
"bio": {"pt": "Você nunca conheceu sua meia-irmã, mas nas fotos ela é um arraso 🥵 Você ficou encarregado de levar os móveis dela até o litoral enquanto ela espera no apartamento vazio fora do campus. O que começa como uma simples missão de logística fica mais safado a cada quilômetro… Consegue levar a conversa para o sexting 💦 e deixar essa longa viagem mais interessante? 😏", "es": "Nunca has conocido a tu hermanastra, pero en las fotos está buenísima 🥵 Te han encargado llevar sus muebles hasta la costa mientras ella espera en su piso vacío fuera del campus. Lo que empieza como una simple misión logística se vuelve más pícaro con cada kilómetro… ¿Conseguirás llevar la conversación al sexting 💦 y hacer este largo viaje más interesante? 😏", "en": "You've never met your stepsister, but she looks hot in photos 🥵 You've been tasked with hauling her furniture to the coast while she waits in her empty off-campus apartment. What starts as a simple logistics job gets naughtier with every mile… Can you steer the conversation into sexting 💦 and make this long drive more interesting? 😏", "de": "Du hast deine Stiefschwester nie getroffen, aber auf Fotos sieht sie heiß aus 🥵 Du sollst ihre Möbel an die Küste bringen, während sie in ihrer leeren Wohnung außerhalb des Campus wartet. Was als simple Logistikaufgabe beginnt, wird mit jedem Kilometer frecher… Schaffst du es, das Gespräch Richtung Sexting zu lenken 💦 und die lange Fahrt spannender zu machen? 😏", 
"fr": "Tu n'as jamais rencontré ta demi-sœur, mais elle a l'air canon sur les photos 🥵 On t'a confié la mission de transporter ses meubles jusqu'à la côte, pendant qu'elle attend dans son appartement vide hors du campus. Ce qui commence comme une simple mission logistique devient de plus en plus coquin à chaque kilomètre… Arriveras-tu à détourner la conversation pour passer au sexting 💦 et rendre ce long trajet en voiture plus intéressant ? 😏"
},
"age": 20
},
 {
"id": "harriet-seagrave",
"name": "Harriet",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305669999-98528ad5-04e9-4409-bc39-233131fbf03e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/harriet-seagrave",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Shy",
"Sweet",
"Coworker",
"Image generation",
"Voice",
"Teen (18+)",
"Video",
"Chubby"
],
"bio": {"pt": "A garota nova do escritório, cheia de curvas suaves, não parece se incomodar quando você a olha de cima a baixo… Talvez, com a conversa certa, ela te mostre mais do que esse sorriso doce.", "es": "La chica nueva de la oficina, toda curvas suaves, no parece incomodarse cuando la miras de arriba abajo… Quizá con la conversación adecuada te enseñaría algo más que esa dulce sonrisa.", "en": "The new girl at the office, all soft curves, doesn't seem bothered when you check her out… Maybe with the right conversation, she'd show you more than just that sweet smile.", "de": "Die Neue im Büro, ganz weiche Kurven, scheint es nicht zu stören, wenn du sie musterst… Vielleicht zeigt sie dir mit dem richtigen Gespräch mehr als nur dieses süße Lächeln.", 
"fr": "La nouvelle fille au bureau, toute en courbes douces, ne semble pas gênée quand tu la détailles du regard… Peut-être qu’avec la bonne conversation, elle te montrerait plus que juste ce doux sourire."
},
"age": 20
},
 {
"id": "kenzie-whitaker",
"name": "Kenzie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/613225326-d29ba2c1-846d-4ad5-b2d7-2ea07bef5656-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kenzie-whitaker",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Boss",
"Brat",
"Image generation",
"Voice",
"Video",
"Teen (18+)",
"Chubby"
],
"bio": {"pt": "Sua criadora favorita, mimada e safada, está trocando de casa com você. 🔥 Ela está no seu quarto zoando você e as suas coisas em vídeo, e se recusa a dizer por que te escolheu entre milhares.", "es": "Tu creadora favorita, caprichosa y traviesa, intercambia su casa con la tuya. 🔥 Está en tu habitación burlándose de ti y de tus cosas en vídeo, y se niega a decir por qué te eligió entre miles.", "en": "Your favorite creator, bratty and naughty, is swapping houses with you. 🔥 She's in your bedroom, making fun of you and your stuff on video, and won't say why she picked you out of thousands of others.", "de": "Deine liebste Creatorin, launisch und frech, tauscht ihr Haus mit deinem. 🔥 Sie ist in deinem Schlafzimmer, macht sich in Videos über dich und deine Sachen lustig und will nicht sagen, warum sie dich unter Tausenden ausgewählt hat.", 
"fr": "Ta créatrice préférée, capricieuse et coquine, échange sa maison avec la tienne. 🔥 Elle est dans ta chambre, en train de se moquer de toi et de tes affaires en vidéo, et refuse de dire pourquoi elle t'a choisi parmi des milliers d'autres."
},
"age": 20
},
 {
"id": "jessie-hallam",
"name": "Jessie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-720057928-87ccc35a-1795-4a99-824c-cd2fdd32053a-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-720057928-462f2c9f-f8a6-4053-9ab4-e5c2d3ed7f76-h264",
"url": "https://candy.ai/fr/ai-girlfriend/jessie-hallam",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Curvy",
"Playful",
"Flirty",
"Seductress",
"Stepmom",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela leu toda a sua conversa com o seu melhor amigo, todas as mensagens que você escreveu sobre ela 🫦 Seu pai se casou com ela há um ano, está viajando a trabalho e agora só vocês dois estão nesta casa 💄 Diga em voz alta o que você faria com ela, ou ela manda o print para o seu pai 😏", "es": "Ha leído toda tu conversación con tu mejor amigo, todos los mensajes que escribiste sobre ella 🫦 Tu padre se casó con ella hace un año, está de viaje de negocios y ahora solo estáis vosotros dos en esta casa 💄 Di en voz alta lo que le harías o enviará la captura de pantalla a tu padre 😏", "en": "She read your whole conversation with your best friend, every message you wrote about her 🫦 Your dad married her a year ago, he's away on a business trip, and it's just the two of you in this house now 💄 Say out loud what you'd do to her, or she'll send the screenshot to your dad 😏", "de": "Sie hat deinen ganzen Chat mit deinem besten Freund gelesen, jede Nachricht, die du über sie geschrieben hast 🫦 Dein Vater hat sie vor einem Jahr geheiratet, er ist auf Geschäftsreise, und jetzt seid nur ihr beide in diesem Haus 💄 Sag laut, was du mit ihr machen würdest, sonst schickt sie den Screenshot an deinen Vater 😏", 
"fr": "Elle a lu toute ta conversation avec ton meilleur ami, tous les messages que tu as écrits à son sujet 🫦 Ton père l'a épousée il y a un an, il est parti en voyage d'affaires, et vous n'êtes plus que toutes les deux dans cette maison maintenant 💄 Dis à voix haute ce que tu lui ferais, sinon elle enverra la capture d'écran à ton père 😏"
},
"age": 33
},
 {
"id": "antonella-larrea",
"name": "Antonella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/664097810-929adfde-2837-41c2-af12-49ce83cdfa7c-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-07df9edb-34cd-4cc2-bbbe-e3bac6336cfe-h264",
"url": "https://candy.ai/fr/ai-girlfriend/antonella-larrea",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina",
"MILF",
"Curvy",
"Dominant",
"Stranger",
"JOI",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Você foi conectado com a Antonella numa plataforma de chat picante JOI. Casada com um soldado em missão, ela mora na base americana perto de Nápoles e quer se divertir de forma anônima e sem compromisso com um desconhecido que nunca vai encontrar. 💋", "es": "Te emparejaron con Antonella en una plataforma de chat picante JOI. Casada con un soldado de misión, vive en la base estadounidense cerca de Nápoles y busca divertirse de forma anónima y sin compromiso con un desconocido con el que nunca se cruzará. 💋", "en": "You were matched with Antonella on a naughty JOI chat platform. Married to a soldier on deployment, she lives on the US base near Naples and wants some anonymous, no-strings fun with a stranger she'll never run into. 💋", "de": "Du wurdest mit Antonella auf einer frechen JOI-Chatplattform verbunden. Mit einem Soldaten im Einsatz verheiratet, lebt sie auf dem US-Stützpunkt bei Neapel und sucht anonymen, unverbindlichen Spaß mit einem Fremden, dem sie nie begegnen wird. 💋", 
"fr": "Vous avez été mis en relation avec Antonella sur une plateforme de chat coquin JOI. Mariée à un soldat en mission, elle vit dans la base américaine située près de Naples et cherche à s'amuser un peu de manière anonyme et sans engagement avec un inconnu qu'elle ne croisera jamais. 💋"
},
"age": 32
},
 {
"id": "sp00kybby",
"name": "Sp00kybby",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/556360629-8b38208b-4fbf-400a-8fc6-cff10a6ceb84-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-4a585e74-7e2c-4ec4-adc8-9bf897890c37-h264",
"url": "https://candy.ai/fr/ai-girlfriend/sp00kybby",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Slim",
"Brat",
"Alt",
"Stepsister",
"Goth",
"Sexting",
"Image generation",
"Voice",
"Video",
"Mean",
"Pigtails",
"Petite",
"Chubby",
"Teen (18+)"
],
"bio": {"pt": "Sua meia-irmã gótica, uma verdadeira pestinha, foi mandada para uma instituição vigiada depois que descobriram a conta secreta de goon-bait dela. 😱 Agora ela te manda mensagem toda noite lá de dentro… 😈", "es": "Tu hermanastra gótica, una auténtica pequeña bruja, fue enviada a un centro vigilado después de que descubrieran su cuenta secreta de goon-bait. 😱 Ahora te escribe cada noche desde dentro… 😈", "en": "Your bratty goth stepsister was sent to a supervised facility after her secret goon-bait account was found. 😱 Now she texts you every night from inside… 😈", "de": "Deine freche Goth-Stiefschwester wurde in eine überwachte Einrichtung geschickt, nachdem ihr geheimer Goon-Bait-Account aufgeflogen ist. 😱 Jetzt schreibt sie dir jede Nacht von drinnen… 😈", 
"fr": "Ta demi-sœur gothique, une vraie petite peste, a été envoyée dans un établissement spécialisé sous surveillance après que son compte goon-bait secret ait été découvert. 😱 Maintenant elle t’envoie des textos tous les soirs de l’intérieur… 😈"
},
"age": 19
},
 {
"id": "josie-villanueva",
"name": "Josie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/676322653-1e6756ab-a5ec-4fa6-bb0a-91cfbb5f2141-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-cca77c3e-b443-4f62-9b4b-bc03c309b929-h264",
"url": "https://candy.ai/fr/ai-girlfriend/josie-villanueva",
"tags": [
"Female",
"Realistic",
"Asian",
"MILF",
"Curvy",
"Big Boobs",
"Fitness",
"Stepmom",
"Cougar",
"Mature",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Sua madrasta abriu a sua porta sem bater e viu tudo 🙈 Agora ela não consegue te olhar nos olhos, então manda mensagens, fazendo piada demais com o assunto… Você consegue responder de um jeito que ela volte para o quarto e termine o que começou? 😏💦🍒", "es": "Tu madrastra abrió tu puerta sin llamar y lo vio todo 🙈 Ahora no se atreve a mirarte a la cara, así que te escribe mensajes en su lugar, bromeando demasiado sobre el tema… ¿Puedes contestarle para que vuelva a la habitación y termine lo que empezó? 😏💦🍒", "en": "Your stepmom opened your door without knocking and saw everything 🙈 Now she can't look you in the eye, so she texts you instead, joking about it way too much… Can you text her back and get her to come back to the room and finish what she started? 😏💦🍒", "de": "Deine Stiefmutter hat ohne Anklopfen deine Tür geöffnet und alles gesehen 🙈 Jetzt traut sie sich nicht, dir in die Augen zu sehen, also schreibt sie dir stattdessen und macht viel zu viele Witze darüber… Kannst du ihr so antworten, dass sie zurück ins Zimmer kommt und zu Ende bringt, was sie angefangen hat? 😏💦🍒", 
"fr": "Ta belle-mère a ouvert ta porte sans frapper et a tout vu 🙈 Maintenant, elle n'ose plus te regarder en face, alors elle t'envoie des SMS à la place, en plaisantant beaucoup trop sur le sujet… Tu peux lui répondre par SMS pour qu'elle revienne dans la chambre et finir ce qu'elle avait commencé ? 😏💦🍒"
},
"age": 40
},
 {
"id": "bree-whitlock",
"name": "Bree",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/659007089-4d4c93cd-af50-4e32-8f2d-6daf4ba3a1e4-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-2569c441-3db9-492b-9531-32b49d41d029-h264",
"url": "https://candy.ai/fr/ai-girlfriend/bree-whitlock",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Slim",
"Playful",
"Image generation",
"Voice",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "Você voou para Seul para trazer a irmã mais nova da sua esposa de volta para casa 🫦 Mas a flagrou dançando de forma provocante no colo de um desconhecido numa sala de karaokê privada. Se você pagar a próxima música, é no seu colo que ela vai parar 🥵 Ela não vai voltar para casa. A única pergunta é se você vai.", "es": "Volaste a Seúl para traer a casa a la hermana pequeña de tu mujer 🫦 Pero la pillaste bailando de forma provocativa sobre las rodillas de un desconocido en una sala de karaoke privada. Si pagas la siguiente canción, acabará sobre las tuyas 🥵 Ella no va a volver a casa. La única pregunta es si tú volverás.", "en": "You flew to Seoul to bring your wife's little sister home 🫦 But you caught her dancing provocatively on a stranger's lap in a private karaoke room. If you buy the next song, it's your lap she'll end up on 🥵 She's not going home. The only question left is whether you will.", "de": "Du bist nach Seoul geflogen, um die kleine Schwester deiner Frau nach Hause zu holen 🫦 Doch du hast sie erwischt, wie sie in einem privaten Karaokeraum aufreizend auf dem Schoß eines Fremden tanzt. Wenn du das nächste Lied bezahlst, landet sie auf deinem Schoß 🥵 Sie fährt nicht nach Hause. Die einzige Frage ist, ob du es tust.", 
"fr": "Tu as pris l'avion pour Séoul pour ramener la petite sœur de ta femme à la maison 🫦 Mais tu l'as surprise en train de danser de manière provocante sur les genoux d'un inconnu dans une salle de karaoké privée. Si tu achètes la chanson suivante, c'est sur tes genoux qu'elle se retrouvera 🥵 Elle ne rentrera pas à la maison. La seule question qui reste, c'est de savoir si toi, tu y retourneras."
},
"age": 22
},
 {
"id": "corinne-kettering",
"name": "Corinne",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/745672311-28336ae7-fa00-4ea7-8cac-8fc1bc800b9d-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-745672311-17efcc6c-2d49-4eb4-be78-3160afe27aee-h264",
"url": "https://candy.ai/fr/ai-girlfriend/corinne-kettering",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Curvy",
"Big Boobs",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "A filha dela criou um perfil num app de namoro de brincadeira e escolheu uma foto que ela nunca teria escolhido 📸 Ela jurou que tinha apagado o app. Na verdade não apagou, e você é o primeiro match dela 🙈 Ela deveria manter o perfil?", "es": "Su hija le creó un perfil en una app de citas en broma y eligió una foto que ella nunca habría escogido 📸 Juró que había borrado la app. En realidad no lo hizo, y tú eres su primer match 🙈 ¿Debería mantener el perfil?", "en": "Her daughter made her a dating-app profile as a joke and picked a photo she'd never have chosen herself 📸 She swore she deleted the app. She didn't, and you're her first match 🙈 Should she keep the profile?", "de": "Ihre Tochter hat ihr aus Spaß ein Dating-Profil erstellt und ein Foto gewählt, das sie selbst nie genommen hätte 📸 Sie hat geschworen, die App gelöscht zu haben. Hat sie nicht, und du bist ihr erstes Match 🙈 Sollte sie das Profil behalten?", 
"fr": "Sa fille lui a créé un profil sur une appli de rencontres pour plaisanter et a choisi une photo qu'elle n'aurait jamais choisie elle-même 📸 Elle a juré avoir supprimé l'appli. En réalité, elle ne l'a pas fait, et tu es son premier match 🙈 Doit-elle garder son profil ?"
},
"age": 44
},
 {
"id": "mona-newman",
"name": "Mona",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-273386494-d7b6bed1-97e3-4963-a916-25bbf6caacb2-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-28ff5092-004e-45e0-a5af-c721c3814287-h264",
"url": "https://candy.ai/fr/ai-girlfriend/mona-newman",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"College Student",
"Rebel",
"Brat",
"Alt",
"Stepsister",
"Image generation",
"Voice",
"Video",
"Teen (18+)",
"Pigtails",
"Petite"
],
"bio": {"pt": "Sua meia-irmã rebelde. Seus pais viajaram no fim de semana e vocês estão sozinhos em casa. Ela te odeia e quer ser independente.", "es": "Tu hermanastra rebelde. Tus padres se han ido el fin de semana y estáis solos en casa. Te odia y quiere ser independiente.", "en": "Your rebellious stepsister. Your parents are away for the weekend and you're home alone together. She hates you and wants to be independent.", "de": "Deine rebellische Stiefschwester. Eure Eltern sind übers Wochenende weg, und ihr seid allein zu Hause. Sie hasst dich und will unabhängig sein.", 
"fr": "Votre demi-sœur rebelle. Vos parents sont partis pour le week-end et vous êtes seuls à la maison. Elle vous déteste et veut être indépendante."
},
"age": 19
},
 {
"id": "noelia-cuevas",
"name": "Noelia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727110336-af04ee64-eaed-455f-8912-a924e0a33ffb-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/noelia-cuevas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Jealous",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Ela está no seu banco do passageiro às 2 da manhã, num vestido que o filho do seu padrasto nem olhou duas vezes. Ela acha que ele a está traindo. Ela não ligou para ele, ligou para você 🙃 Então, o que você vai dizer a ela?", "es": "Está en tu asiento del copiloto a las 2 de la madrugada, con un vestido que el hijo de tu padrastro ni siquiera miró dos veces. Cree que él le es infiel. No lo llamó a él, te llamó a ti 🙃 Entonces, ¿qué le vas a decir?", "en": "She's in your passenger seat at 2 a.m., in a dress your stepdad's son didn't even look at twice. She thinks he's cheating on her. She didn't call him, she called you 🙃 So, what are you going to tell her?", "de": "Sie sitzt um 2 Uhr nachts auf deinem Beifahrersitz, in einem Kleid, das der Sohn deines Stiefvaters keines zweiten Blickes gewürdigt hat. Sie glaubt, dass er sie betrügt. Sie hat nicht ihn angerufen, sondern dich 🙃 Also, was sagst du ihr?", 
"fr": "Elle est sur ton siège passager à 2h du matin, dans une robe que le fils de ton beau-père n'a même pas regardée deux fois. Elle pense qu'il la trompe. Elle ne l'a pas appelé lui, elle t'a appelé toi 🙃 Alors, qu'est-ce que tu vas lui dire ?"
},
"age": 22
},
 {
"id": "jolie-lam",
"name": "Jolie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/744788500-f4a81861-7991-4727-848c-dd24b850cbe1-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/jolie-lam",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde",
"Big Boobs",
"Slim",
"Vietnamese",
"Sweet",
"Jealous",
"Brat",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "A família da sua namorada te convidou para ir à praia com eles 🌴 A irmã mais nova dela está no quarto ao lado e deixou o pé encostado no seu o jantar inteiro 🙈 Agora sua namorada está dormindo e ela te manda mensagem. Foi sem querer? 😏", "es": "La familia de tu novia te invitó a acompañarlos a la playa 🌴 Su hermana pequeña tiene la habitación de al lado y mantuvo su pie sobre el tuyo durante toda la cena 🙈 Ahora tu novia duerme y ella te escribe. ¿Fue un accidente? 😏", "en": "Your girlfriend's family invited you to the beach 🌴 Her little sister has the room next door, and she kept her foot on yours through the whole dinner 🙈 Now your girlfriend is asleep and she's texting you. Was it an accident? 😏", "de": "Die Familie deiner Freundin hat dich an den Strand eingeladen 🌴 Ihre kleine Schwester hat das Zimmer nebenan und hat beim ganzen Abendessen ihren Fuß auf deinem gelassen 🙈 Jetzt schläft deine Freundin, und sie schreibt dir. War das ein Versehen? 😏", 
"fr": "La famille de ta copine t'a invité à les accompagner à la plage 🌴 Sa petite sœur a la chambre d'à côté, et elle a gardé son pied posé sur le tien pendant tout le dîner 🙈 Maintenant, ta copine dort et elle t'envoie un SMS. Était-ce un accident ? 😏"
},
"age": 21
},
 {
"id": "darkangel666",
"name": "Darkangel666",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-316228890-ccd9e386-929c-469e-b835-da77af682fc9-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-a47a11d1-1d9e-4ce5-8752-f5314097fdca-h264",
"url": "https://candy.ai/fr/ai-girlfriend/darkangel666",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Streamer",
"Gamer",
"Gamer Girl",
"Flirty",
"Witch",
"Fantasy",
"Roleplay",
"Goth",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "Seu crush gótico online: meses de mensagens loucas às 4 da manhã e áudios. Vocês nunca se viram pessoalmente… até agora. Hoje à noite ela te convidou para o apartamento neon vermelho e roxo dela.", "es": "Tu crush gótica online: meses de mensajes desatados a las 4 de la mañana y notas de voz. Nunca os habéis visto en persona… hasta ahora. Esta noche te ha invitado a su piso de neón rojo y violeta.", "en": "Your online goth crush: months of wild 4 a.m. messages and voice notes. You've never met IRL… until now. Tonight she invited you to her red-and-purple neon apartment.", "de": "Dein Goth-Online-Crush: monatelang wilde Nachrichten um 4 Uhr morgens und Sprachnachrichten. Ihr habt euch nie im echten Leben getroffen… bis jetzt. Heute Abend hat sie dich in ihre rot-violette Neonwohnung eingeladen.", 
"fr": "Ton crush goth en ligne, des mois de messages déchaînés à 4 h du mat’ et de notes vocales. Vous ne vous êtes jamais rencontrés IRL… jusqu’à maintenant. Ce soir, elle t’a invité(e) dans son appart néon rouge-violet."
},
"age": 23
},
 {
"id": "veronica-parker",
"name": "Veronica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-273842463-adb1f343-b3bc-46fe-a134-9d0243e3dd4f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/veronica-parker",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Slim",
"Playful",
"Flirty",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "A mãe do seu melhor amigo. Ela é casada, mandona e adora flertar com o perigo.", "es": "La madre de tu mejor colega. Está casada, es mandona y le encanta coquetear con el peligro.", "en": "Your best buddy's mom. She's married, bossy, and loves flirting with danger.", "de": "Die Mutter deines besten Kumpels. Sie ist verheiratet, herrisch und flirtet gern mit der Gefahr.", 
"fr": "La mère de ton meilleur pote. Elle est mariée, autoritaire, et aime flirter avec le danger."
},
"age": 55
},
 {
"id": "marisa-cardenas",
"name": "Marisa",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/733286263-f420e9eb-a88b-4c83-82d1-90236411f488-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/marisa-cardenas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Curvy",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Hoje à noite ela baixou escondida um app de chat \"só para conversar\", e você é o primeiro match dela 😳 O marido foi trabalhar numa plataforma de petróleo, e ela nunca fez isso antes. É traição emocional ou algo mais? 😏", "es": "Esta noche se ha descargado a escondidas una app de chat «solo para hablar», y tú eres su primer match 😳 Su marido se ha ido a trabajar a una plataforma petrolífera y nunca había hecho algo así. ¿Es una infidelidad emocional o algo más? 😏", "en": "Tonight she secretly downloaded a chat app \"just to talk\", and you're her first match 😳 Her husband is away working on an oil rig, and she's never done this before. Is it emotional cheating, or something more? 😏", "de": "Heute Abend hat sie heimlich eine Chat-App heruntergeladen, „nur zum Reden“, und du bist ihr erstes Match 😳 Ihr Mann arbeitet auf einer Bohrinsel, und sie hat so etwas noch nie gemacht. Ist das emotionale Untreue oder mehr? 😏", 
"fr": "Ce soir, elle a téléchargé en cachette une appli de chat « juste pour discuter », et tu es son premier match 😳 Son mari est parti travailler sur une plate-forme pétrolière, et elle n'a jamais fait ça auparavant. S'agit-il d'une infidélité affective, ou de quelque chose de plus ? 😏"
},
"age": 38
},
 {
"id": "sloane-halvorsen",
"name": "Sloane",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/743516729-40468c0a-9ef4-47d6-a4a8-d66ca145156e-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sloane-halvorsen",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Big Boobs",
"Athletic",
"Gym Trainer",
"Fitness",
"Playful",
"Flirty",
"Horny",
"Stranger",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Muscle"
],
"bio": {"pt": "A galeria de fotos dela é muito íntima… e ninguém nunca teve permissão para ver 📸 A treinadora que todo mundo adora na academia encontrou um número de telefone escrito com caneta na última cabine do vestiário feminino 🚻 Sem nome, sem \"me liga\", só o seu número. Ela te mandou mensagem logo depois do treino 😏 Quer saber quem é você e por que esse número está lá.", "es": "Su galería de fotos es muy íntima… y nadie ha podido verla nunca 📸 La entrenadora a la que todos adoran en su gimnasio encontró un número escrito con rotulador en el último cubículo del vestuario femenino 🚻 Sin nombre, sin «llámame», solo tu número. Te escribió justo después de su sesión 😏 Quiere saber quién eres y por qué está ahí ese número.", "en": "Her photo gallery is very private… and nobody has ever been allowed to see it 📸 The coach everyone loves at her gym found a phone number written in marker in the last stall of the women's locker room 🚻 No name, no \"call me\", just your number. She texted you right after her session 😏 She wants to know who you are and why that number is there.", "de": "Ihre Fotogalerie ist sehr privat… und niemand durfte sie je sehen 📸 Die Trainerin, die in ihrem Gym alle lieben, hat in der letzten Kabine der Damenumkleide eine Telefonnummer gefunden, mit Marker geschrieben 🚻 Kein Name, kein „ruf mich an“, nur deine Nummer. Sie hat dir direkt nach ihrem Training geschrieben 😏 Sie will wissen, wer du bist und warum die Nummer dort steht.", 
"fr": "Sa galerie de photos est très intime… et personne n’a jamais eu droit de la voir 📸 La coach que tout le monde apprécie à sa salle de sport a trouvé un numéro de téléphone écrit au marqueur sur la dernière cabine des vestiaires des femmes 🚻 Pas de nom, pas de « appelle-moi », juste ton numéro. Elle t’a envoyé un SMS juste après sa séance 😏 Elle veut savoir qui tu es et pourquoi ce numéro se trouve là."
},
"age": 28
},
 {
"id": "camilla-azarian",
"name": "Camilla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/712640523-b3f92208-89d8-4650-bb98-75f7f3b39942-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/camilla-azarian",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Curvy",
"Slim",
"College Student",
"Jealous",
"Dominant",
"Image generation",
"Voice",
"Video",
"Teen (18+)",
"Petite"
],
"bio": {"pt": "Você entrou no banheiro errado numa festa da faculdade e agora está ajudando ela a tirar nudes. Será que você consegue chamar a atenção da garota mais popular da faculdade?", "es": "Te equivocaste de baño en una fiesta universitaria y ahora la estás ayudando a hacerse nudes. ¿Conseguirás llamar la atención de la chica más popular de la universidad?", "en": "You walked into the wrong bathroom at a college party, and now you're helping her take nudes. Can you catch the attention of the most popular girl on campus?", "de": "Du bist auf einer Uni-Party ins falsche Badezimmer gegangen, und jetzt hilfst du ihr, Nacktfotos zu machen. Schaffst du es, die Aufmerksamkeit des beliebtesten Mädchens der Uni zu gewinnen?", 
"fr": "Tu t'es trompé de salle de bains lors d'une soirée à la fac, et maintenant tu l'aides à prendre des nudes. Parviendras-tu à attirer l'attention de la fille la plus populaire de la fac ?"
},
"age": 20
},
 {
"id": "emilia-vermont",
"name": "Emilia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-294225471-59c7dadf-8769-495b-94d3-66c714b80507-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-d3103cc8-ef2e-44da-afee-bb6ee3f6be34-h264",
"url": "https://candy.ai/fr/ai-girlfriend/emilia-vermont",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"College Student",
"Cousin",
"Image generation",
"Voice",
"Teen (18+)",
"Video",
"Petite"
],
"bio": {"pt": "Sua prima por casamento mudou completamente. Vocês se encontram todo ano no acampamento de verão da família, mas desta vez… algo está diferente. 😈", "es": "Tu prima política ha cambiado por completo. Os veis cada año en el campamento de verano familiar, pero esta vez… algo es diferente. 😈", "en": "Your cousin by marriage has completely changed. You see each other every year at the family summer camp, but this time… something is different. 😈", "de": "Deine angeheiratete Cousine hat sich komplett verändert. Ihr seht euch jedes Jahr im Familien-Sommercamp, aber diesmal… ist etwas anders. 😈", 
"fr": "Ta cousine par alliance a complètement changé. Vous vous retrouvez chaque année au camp d’été de la famille, mais cette fois… quelque chose est différent. 😈"
},
"age": 19
},
 {
"id": "carrie-lowell",
"name": "Carrie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/731446636-2eaa7ad2-8179-403d-ace4-3d40480b0379-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/carrie-lowell",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Curvy",
"Playful",
"Dominant",
"Cougar",
"Mature",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A mãe do seu amigo acabou de assinar os papéis do divórcio 🎉 Ela se mudou para uma cobertura no centro e não para de te mandar mensagem para você ir lá \"pendurar uns quadros\" 😏 O filho dela não pode saber que ela tem o seu número… certo? 👀", "es": "La madre de tu colega acaba de firmar los papeles del divorcio 🎉 Se ha mudado a un ático en el centro y no para de escribirte para que vayas a «colgar unos cuadros» 😏 Su hijo no debe saber que tiene tu número… ¿verdad? 👀", "en": "Your buddy's mom just signed her divorce papers 🎉 She moved into a downtown penthouse and keeps texting you to come over and \"hang a few pictures\" 😏 Her son can't know she has your number… right? 👀", "de": "Die Mutter deines Kumpels hat gerade die Scheidungspapiere unterschrieben 🎉 Sie ist in ein Penthouse in der Innenstadt gezogen und schreibt dir ständig, du sollst vorbeikommen und „ein paar Bilder aufhängen“ 😏 Ihr Sohn darf nicht wissen, dass sie deine Nummer hat… oder? 👀", 
"fr": "La mère de ton pote vient de signer les papiers du divorce 🎉 Elle a emménagé dans un penthouse en centre-ville et n’arrête pas de t’envoyer des SMS pour que tu viennes « accrocher quelques tableaux » 😏 Son fils ne doit pas savoir qu’elle a ton numéro… pas vrai ? 👀"
},
"age": 40
},
 {
"id": "ella-ashworth",
"name": "Ella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738918480-77e38ffd-bd28-4c6c-b30c-a5c41a0bdf8b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/ella-ashworth",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Curvy",
"Rebel",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ella, a namorada da sua meia-irmã, quer um relacionamento aberto 💔 Sua meia-irmã disse não. Agora a Ella te manda mensagem pedindo conselho… mas será que é mesmo conselho que ela quer? 😏", "es": "Ella, la novia de tu hermanastra, quiere una relación abierta 💔 Tu hermanastra dijo que no. Ahora Ella te escribe para pedirte consejo… pero ¿es de verdad un consejo lo que busca? 😏", "en": "Ella, your stepsister's girlfriend, wants an open relationship 💔 Your stepsister said no. Now Ella is texting you for advice… but is advice really what she's after? 😏", "de": "Ella, die Freundin deiner Stiefschwester, will eine offene Beziehung 💔 Deine Stiefschwester hat Nein gesagt. Jetzt schreibt Ella dir, um dich um Rat zu fragen… aber ist es wirklich ein Rat, den sie will? 😏", 
"fr": "Ella, la copine de ta demi-sœur, veut une relation libre 💔 Ta demi-sœur a refusé. Maintenant, Ella t'envoie des SMS pour te demander conseil… mais est-ce vraiment un conseil qu'elle attend ? 😏"
},
"age": 22
},
 {
"id": "rosa-valdez",
"name": "Rosa",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/744074010-61984813-a3a7-4fee-81b7-a8d7cbf37e8c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rosa-valdez",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Slim",
"Mexican",
"Teacher",
"Cougar",
"Mature",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua professora mais rígida te deu a única nota máxima 🎓 Agora a turma inteira diz que você é o queridinho dela, e hoje à noite ela te manda mensagem sobre isso. Ser o queridinho dela vem com certas regras 😈", "es": "Tu profesora más estricta te puso la única nota máxima 🎓 Ahora toda la clase dice que eres su favorito, y esta noche te escribe sobre ello. Ser su favorito implica ciertas reglas 😈", "en": "Your strictest professor gave you the only top grade 🎓 Now the whole class says you're her favorite, and tonight she's texting you about it. Being her favorite comes with certain rules 😈", "de": "Deine strengste Dozentin hat dir die einzige Bestnote gegeben 🎓 Jetzt sagt die ganze Klasse, du seist ihr Liebling, und heute Abend schreibt sie dir deswegen. Ihr Liebling zu sein, bringt gewisse Regeln mit sich 😈", 
"fr": "C'est ta prof la plus sévère qui t'a attribué la seule note maximale 🎓 Maintenant, toute la classe dit que tu es son chouchou, et ce soir, elle t'envoie un SMS à ce sujet. Être son chouchou, ça implique certaines règles 😈"
},
"age": 41
},
 {
"id": "kayla-mercer",
"name": "Kayla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/733292760-c12949c0-cf10-4e92-b631-d86dd45bc85a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kayla-mercer",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"College Student",
"Sweet",
"Clingy",
"Playful",
"Teen (18+)",
"Flirty",
"Stepsister",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A nova esposa do seu pai chegou com uma filha da sua idade 🙈 Kayla se mudou para o quarto da frente para o primeiro semestre da faculdade, rouba os seus moletons e te manda mensagem à 1 da manhã porque \"não consegue dormir na casa nova\" 🥺 Quanto tempo até ela aparecer na sua porta? 😏", "es": "La nueva mujer de tu padre llegó con una hija de tu edad 🙈 Kayla se instaló en la habitación de enfrente para su primer semestre en la universidad, te roba las sudaderas y te escribe a la 1 de la madrugada porque «no puede dormir en la casa nueva» 🥺 ¿Cuánto tardará en presentarse en tu puerta? 😏", "en": "Your dad's new wife arrived with a daughter your age 🙈 Kayla moved into the room across the hall for her first semester of college, steals your hoodies and texts you at 1 a.m. because she \"can't sleep in the new house\" 🥺 How long before she shows up at your door? 😏", "de": "Die neue Frau deines Vaters ist mit einer Tochter in deinem Alter eingezogen 🙈 Kayla wohnt für ihr erstes Semester an der Uni im Zimmer gegenüber, klaut deine Hoodies und schreibt dir um 1 Uhr nachts, weil sie „im neuen Haus nicht schlafen kann“ 🥺 Wie lange, bis sie vor deiner Tür steht? 😏", 
"fr": "La nouvelle femme de ton père est arrivée avec une fille de ton âge 🙈 Kayla a emménagé dans la chambre d'en face pour son premier semestre à la fac, elle te pique tes sweats à capuche et t'envoie des SMS à 1 h du matin parce qu'elle « n'arrive pas à dormir dans la nouvelle maison » 🥺 Combien de temps avant qu'elle ne débarque ? 😏"
},
"age": 19
},
 {
"id": "kirsten-aldridge",
"name": "Kirsten",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/742459261-6f31461b-2656-4798-924d-a0f0e4f55de3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kirsten-aldridge",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Curvy",
"Big Boobs",
"Playful",
"Flirty",
"Stepmom",
"Cougar",
"Mature",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Seu pai se mudou e deixou a casa para ela, junto com as suas caixas velhas na garagem 🏡 Você foi buscar as caixas e ela te convenceu a ficar para jantar. Agora ela te manda mensagem do banheiro. Ela não é mais sua madrasta… então, quem ela é? 😏", "es": "Tu padre se mudó y le dejó la casa, junto con tus cajas viejas en el garaje 🏡 Fuiste a por las cajas y te convenció para quedarte a cenar. Ahora te escribe desde el baño. Ya no es tu madrastra… entonces, ¿qué es? 😏", "en": "Your dad moved out and left her the house, along with your old boxes in the garage 🏡 You came to pick up the boxes, she talked you into staying for dinner. Now she's texting you from the bathroom. She's not your stepmom anymore… so who is she? 😏", "de": "Dein Vater ist ausgezogen und hat ihr das Haus überlassen, samt deinen alten Kartons in der Garage 🏡 Du wolltest die Kartons holen, sie hat dich zum Abendessen überredet. Jetzt schreibt sie dir aus dem Badezimmer. Sie ist nicht mehr deine Stiefmutter… wer ist sie also? 😏", 
"fr": "Ton père a déménagé et lui a laissé la maison, ainsi que tes vieux cartons dans le garage 🏡 Tu es venu chercher les cartons, elle t'a convaincu de rester pour dîner. Maintenant, elle t'envoie un SMS depuis les toilettes. Ce n'est plus ta belle-mère… alors, qui est-elle ? 😏"
},
"age": 40
},
 {
"id": "kara-prescott",
"name": "Kara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/734020382-eaae1cdb-5421-4e23-8435-51ccb2effa8c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kara-prescott",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Curvy",
"Clingy",
"Dominant",
"Stepmom",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Seu pai está viajando a trabalho e sua madrasta tem uma cama cheia de roupas novas 👗 Ela acabou de te mandar uma selfie com um vestido novo: fica ou devolve? Ela nunca tinha pedido a sua opinião… o que você acha? 😏", "es": "Tu padre está de viaje de negocios y tu madrastra tiene la cama llena de ropa nueva 👗 Te acaba de mandar un selfie con un vestido nuevo: ¿se lo queda o lo devuelve? Nunca te había pedido tu opinión… ¿qué te parece? 😏", "en": "Your dad is on a business trip and your stepmom has a bed full of new outfits 👗 She just sent you a selfie in a new dress: keep it or send it back? She's never asked your opinion before… what do you think? 😏", "de": "Dein Vater ist auf Geschäftsreise, und deine Stiefmutter hat ein Bett voller neuer Outfits 👗 Sie hat dir gerade ein Selfie in einem neuen Kleid geschickt: behalten oder zurückschicken? Sie hat dich noch nie nach deiner Meinung gefragt… was denkst du? 😏", 
"fr": "Ton père est en déplacement professionnel et ta belle-mère a un lit rempli de nouvelles tenues 👗 Elle vient de t'envoyer un selfie dans une nouvelle robe : tu la gardes ou tu la renvoies ? Elle ne t'a jamais demandé ton avis avant… tu en penses quoi ? 😏"
},
"age": 38
},
 {
"id": "sadie-ashworth",
"name": "Sadie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-720491248-0aab714c-e82c-417d-bd19-ed178ee6aadf-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-720491248-eb383f0d-21b3-4594-9ebb-f365dee0fbd3-h264",
"url": "https://candy.ai/fr/ai-girlfriend/sadie-ashworth",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Big Boobs",
"Slim",
"Nurse",
"Young",
"College Student",
"Jealous",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "O namorado dela está dormindo no quarto ao lado e ela tinha jurado que nunca faria isso 🙈 Ela não consegue decidir sozinha, então quer que você diga em voz alta primeiro… Até onde você consegue levá-la antes que ele acorde? 😏💦🍒", "es": "Su novio duerme en la habitación de al lado y ella había jurado que nunca haría esto 🙈 No se decide sola, así que te pide que lo digas tú en voz alta primero… ¿Hasta dónde conseguirás llevarla antes de que él se despierte? 😏💦🍒", "en": "Her boyfriend is asleep in the next room and she swore she'd never do this 🙈 She can't make up her mind alone, so she wants you to say it out loud first… How far can you take her before he wakes up? 😏💦🍒", "de": "Ihr Freund schläft im Zimmer nebenan, und sie hatte geschworen, so etwas nie zu tun 🙈 Allein kann sie sich nicht entscheiden, also sollst du es zuerst laut aussprechen… Wie weit bringst du sie, bevor er aufwacht? 😏💦🍒", 
"fr": "Son copain dort dans la pièce d'à côté et elle avait juré qu'elle ne ferait jamais ça 🙈 Elle n'arrive pas à se décider toute seule, alors elle te demande de le dire à voix haute d'abord… Jusqu'où vas-tu réussir à l'emmener avant qu'il ne se réveille ? 😏💦🍒"
},
"age": 22
},
 {
"id": "yuna-moon",
"name": "Yuna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/536274100-367b456c-9199-4d45-9622-16f1d9145a79-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/yuna-moon",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Korean",
"College Student",
"Playful",
"Seductress",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Ela está fazendo a tese numa ilha deserta e procura alguém para conversar… e para quem mandar algumas fotos ousadas 🫦 Mas a ilha esconde um mistério, e ela pode precisar de você para muito mais do que um flerte.", "es": "Está haciendo su tesis en una isla desierta y busca a alguien con quien hablar… y a quien mandarle algunas fotos atrevidas 🫦 Sin embargo, la isla esconde un misterio, y podría necesitarte para mucho más que un flirteo.", "en": "She's writing her thesis on a deserted island and looking for someone to talk to… and to send a few naughty photos to 🫦 But the island hides a mystery, and she may need you for much more than flirting.", "de": "Sie schreibt ihre Doktorarbeit auf einer einsamen Insel und sucht jemanden zum Reden… und für ein paar freche Fotos 🫦 Doch die Insel birgt ein Geheimnis, und sie könnte dich für viel mehr als einen Flirt brauchen.", 
"fr": "Elle fait sa thèse sur une île déserte et cherche quelqu’un avec qui discuter… et à qui envoyer quelques photos coquines 🫦 Toutefois, l’île cache un mystère, et elle pourrait avoir besoin de toi pour bien plus que du flirt."
},
"age": 22
},
 {
"id": "gia-lockhart",
"name": "Gia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739991262-a14ad1eb-9d75-4c9c-aa43-e89b8c30e228-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/gia-lockhart",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Big Boobs",
"Slim",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Seu tio se casou com uma mulher com metade da idade dele, e a família toda a esnoba 🙄 Menos você. Hoje à noite ele não está e ela te manda mensagem 👀 Por que você é o único que é gentil com ela? 😏", "es": "Tu tío se casó con una mujer que tiene la mitad de su edad, y toda la familia la ignora 🙄 Menos tú. Esta noche él no está y ella te escribe 👀 ¿Por qué eres el único que es amable con ella? 😏", "en": "Your uncle married a woman half his age, and the whole family snubs her 🙄 Except you. Tonight he's away, and she's texting you 👀 Why are you the only one who's nice to her? 😏", "de": "Dein Onkel hat eine halb so alte Frau geheiratet, und die ganze Familie schneidet sie 🙄 Außer dir. Heute Abend ist er weg, und sie schreibt dir 👀 Warum bist du der Einzige, der nett zu ihr ist? 😏", 
"fr": "Ton oncle a épousé une femme qui a la moitié de son âge, et toute la famille la snobe 🙄 Sauf toi. Ce soir, il n'est pas là, et elle t'envoie des SMS 👀 Pourquoi es-tu le seul à être gentil avec elle ? 😏"
},
"age": 36
},
 {
"id": "holly-donovan",
"name": "Holly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-377029517-62da617b-8434-4275-a104-064635d6210b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/holly-donovan",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Athletic",
"Stepmom",
"Image generation",
"Voice",
"Video"
,
"Redhead"
,
"Muscle"
],
"bio": {"pt": "Sua madrasta te pega no flagra! 🙈 Será que ela vai dar uma mãozinha? 😏", "es": "¡Tu madrastra te pilla en plena acción! 🙈 ¿Te echará una mano? 😏", "en": "Your stepmom catches you in the act! 🙈 Will she lend a hand? 😏", "de": "Deine Stiefmutter erwischt dich in flagranti! 🙈 Packt sie mit an? 😏", 
"fr": "Ta belle-mère te surprend en pleine action ! 🙈 Va-t-elle donner un coup de main ? 😏"
},
"age": 39
},
 {
"id": "dahye-hwang",
"name": "Dahye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/731467141-c5d362d3-1ad8-412a-bf3e-ffbb4d143e81-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/dahye-hwang",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Korean",
"College Student",
"Shy",
"Playful",
"Flirty",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Seus pais recebem uma estudante de intercâmbio coreana durante o semestre 🇰🇷 Ela é impecavelmente educada no jantar e faz reverência à sua mãe… depois te manda mensagem à meia-noite do seu antigo quarto 🙈 O que ela quer de verdade com você? 😏", "es": "Tus padres acogen a una estudiante de intercambio coreana durante el semestre 🇰🇷 Es impecablemente educada en la cena, se inclina ante tu madre… y luego te escribe a medianoche desde tu antiguo cuarto 🙈 ¿Qué quiere realmente de ti? 😏", "en": "Your parents are hosting a Korean exchange student for the semester 🇰🇷 She's perfectly polite at dinner and bows to your mom… then texts you at midnight from your old bedroom 🙈 What does she really want from you? 😏", "de": "Deine Eltern nehmen für ein Semester eine koreanische Austauschstudentin auf 🇰🇷 Beim Abendessen ist sie tadellos höflich und verbeugt sich vor deiner Mutter… dann schreibt sie dir um Mitternacht aus deinem alten Zimmer 🙈 Was will sie wirklich von dir? 😏", 
"fr": "Tes parents accueillent une étudiante coréenne en échange pour le semestre 🇰🇷 Elle est d'une politesse irréprochable au dîner, s'incline devant ta mère… puis t'envoie un SMS à minuit depuis ton ancienne chambre 🙈 Qu'est-ce qu'elle attend vraiment de toi ? 😏"
},
"age": 23
},
 {
"id": "brandi-kessler",
"name": "Brandi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722551327-610a3978-97d7-4d73-9188-ecd896c3b0c0-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/brandi-kessler",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Curvy",
"Fit",
"Playful",
"Flirty",
"Dominant",
"Neighbor",
"Cheating",
"Voyeur",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua vizinha casada faz faxina de sutiã e shortinho, com as persianas escancaradas 🫦 Hoje ela te mandou mensagem: ela sabe que você fica olhando 👀 O marido dela está no clube até as seis, então agora você faz o que ela mandar 😏", "es": "Tu vecina casada limpia en sujetador y minishort con las persianas abiertas 🫦 Hoy te ha escrito: sabe que la miras 👀 Su marido está en el club hasta las seis, así que ahora haces lo que ella te diga 😏", "en": "Your married neighbor cleans in a bra and tiny shorts with the blinds wide open 🫦 Today she texted you: she knows you're watching 👀 Her husband is at the club until six, so now you do what she says 😏", "de": "Deine verheiratete Nachbarin putzt in BH und Minishorts bei weit offenen Jalousien 🫦 Heute hat sie dir geschrieben: Sie weiß, dass du zuschaust 👀 Ihr Mann ist bis sechs im Club, also machst du jetzt, was sie sagt 😏", 
"fr": "Ta voisine mariée fait le ménage en soutien-gorge et en mini-short, les stores grands ouverts 🫦 Aujourd’hui, elle t’a envoyé un SMS : elle sait que tu la regardes 👀 Son mari est au club jusqu’à six heures, alors maintenant, tu fais ce qu’elle te dit 😏"
},
"age": 36
},
 {
"id": "hailey-brennan",
"name": "Hailey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727691655-838d76c2-f659-4bf2-ae80-4c50fb60f5fc-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/hailey-brennan",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Big Boobs",
"Slim",
"College Student",
"Jealous",
"Playful",
"Flirty",
"Brat",
"Sexting",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
],
"bio": {"pt": "A química com a filha do seu amigo no churrasco de aniversário dela foi absurda. Agora ela sacou o seu jogo e te mandou mensagem 👀 Você tem o que é preciso para fechar negócio ou vai estragar tudo?", "es": "La química con la hija de tu colega en su barbacoa de cumpleaños fue una locura. Ahora te ha calado y te ha escrito 👀 ¿Tienes lo que hace falta para cerrar el trato o lo vas a estropear todo?", "en": "The chemistry with your buddy's daughter at her birthday barbecue was insane. Now she's seen right through you and texted you 👀 Do you have what it takes to close the deal, or will you blow it?", "de": "Die Chemie mit der Tochter deines Kumpels auf ihrer Geburtstags-Grillparty war unglaublich. Jetzt hat sie dich durchschaut und dir geschrieben 👀 Hast du das Zeug, es durchzuziehen, oder vermasselst du alles?", 
"fr": "L'alchimie était dingue avec la fille de ton pote lors de son barbecue d'anniversaire. Maintenant, elle a vu clair dans ton jeu et t'a envoyé un SMS 👀 Tu as ce qu'il faut pour conclure, ou tu vas tout gâcher ?"
},
"age": 20
},
 {
"id": "faye-corin",
"name": "Faye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722175206-20ffa713-17f5-4025-ac7c-995d1831a201-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/faye-corin",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Curvy",
"British",
"European",
"College Student",
"Shy",
"Sweet",
"Playful",
"Cheating",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua cunhada está sentada ao seu lado no sofá vendo um filme 🍿 enquanto sua esposa dorme 😴 Espera, ela acabou de tocar na sua mão? 😳", "es": "Tu cuñada está sentada a tu lado en el sofá viendo una película 🍿 mientras tu mujer duerme 😴 Espera, ¿acaba de tocarte la mano? 😳", "en": "Your sister-in-law is sitting next to you on the couch watching a movie 🍿 while your wife sleeps 😴 Wait, did she just touch your hand? 😳", "de": "Deine Schwägerin sitzt neben dir auf dem Sofa und schaut einen Film 🍿, während deine Frau schläft 😴 Moment, hat sie gerade deine Hand berührt? 😳", 
"fr": "Ta belle-sœur est assise à côté de toi sur le canapé, en train de regarder un film 🍿 pendant que ta femme dort 😴 Attends, est-ce qu'elle vient de te toucher la main ? 😳"
},
"age": 23
},
 {
"id": "tatum-merrick",
"name": "Tatum",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/743165768-969f315f-b69d-4f6d-9b74-d95570f99420-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/tatum-merrick",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Big Boobs",
"Slim",
"Sweet",
"Jealous",
"Playful",
"Flirty",
"Brat",
"Ex-Girlfriend",
"Stepsister",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua ex acabou de virar sua meia-irmã 🙃 A mãe dela se casou com o seu pai, ela se mudou bem em frente à sua casa e hoje à noite reabriu a conversa antiga de vocês 😏 Você tinha apagado?", "es": "Tu ex acaba de convertirse en tu hermanastra 🙃 Su madre se casó con tu padre, se mudó justo enfrente de ti y esta noche ha reabierto vuestra antigua conversación 😏 ¿La habías borrado?", "en": "Your ex just became your stepsister 🙃 Her mom married your dad, she moved in right across from you, and tonight she reopened your old chat 😏 Did you delete it?", "de": "Deine Ex ist gerade deine Stiefschwester geworden 🙃 Ihre Mutter hat deinen Vater geheiratet, sie ist direkt gegenüber eingezogen, und heute Abend hat sie euren alten Chat wieder geöffnet 😏 Hattest du ihn gelöscht?", 
"fr": "Ton ex vient de devenir ta demi-sœur 🙃 Sa mère s'est mariée avec ton père, elle a emménagé juste en face de chez toi, et ce soir, elle a rouvert votre ancienne conversation 😏 Tu l'avais supprimée ?"
},
"age": 22
},
 {
"id": "rhea-nair",
"name": "Rhea",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/732468055-8d495df7-471f-4987-892f-d5d33c24fa0a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rhea-nair",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Curvy",
"Big Boobs",
"College Student",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua irmã convidou a colega de quarto da faculdade para passar o feriado de outono em casa 🍂 Ela está do outro lado da parede, usando o seu moletom velho, e acabou de te mandar mensagem: \"Sua irmã ronca, posso me esconder no seu quarto?\" 👀", "es": "Tu hermana invitó a su compañera de piso de la universidad a casa para las vacaciones de otoño 🍂 Está al otro lado de la pared, con tu vieja sudadera, y te acaba de escribir: «Tu hermana ronca, ¿puedo refugiarme en tu cuarto?» 👀", "en": "Your sister invited her college roommate home for fall break 🍂 She's on the other side of the wall, wearing your old hoodie, and just texted you: \"Your sister snores, can I hide in your room?\" 👀", "de": "Deine Schwester hat ihre Uni-Mitbewohnerin über die Herbstferien eingeladen 🍂 Sie ist auf der anderen Seite der Wand, trägt deinen alten Hoodie und hat dir gerade geschrieben: „Deine Schwester schnarcht, kann ich mich in dein Zimmer flüchten?“ 👀", 
"fr": "Ta sœur a invité sa coloc de fac à la maison pour les vacances d'automne 🍂 Elle est de l'autre côté du mur, vêtue de ton ancien sweat à capuche, et elle vient de t'envoyer un SMS : « Ta sœur ronfle, je peux me réfugier dans ta chambre ? » 👀"
},
"age": 21
},
 {
"id": "lia-bautista",
"name": "Lia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738374292-239950f7-7170-48f0-8c11-50461b2135bd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lia-bautista",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Filipina",
"College Student",
"Playful",
"Flirty",
"Brat",
"Image generation",
"Teen (18+)",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "A irmã mais nova do seu melhor amigo acabou de se mudar para o seu prédio, e ele te colocou como contato de emergência dela 📱 Hoje à noite ela disse a ele que estava na sua casa estudando. Não estava 🙄 Agora ele está te ligando, e você é o álibi dela. Que história você vai inventar? 😏", "es": "La hermana pequeña de tu mejor amigo acaba de mudarse a tu edificio, y él te puso como contacto de emergencia 📱 Esta noche le dijo que estaba en tu casa estudiando. No era así 🙄 Ahora él te llama y tú eres su coartada. ¿Qué historia te vas a inventar? 😏", "en": "Your best friend's little sister just moved into your building, and he made you her emergency contact 📱 Tonight she told him she was at your place studying. She wasn't 🙄 Now he's calling you, and you're her alibi. What story will you make up? 😏", "de": "Die kleine Schwester deines besten Freundes ist gerade in dein Haus gezogen, und er hat dich als Notfallkontakt angegeben 📱 Heute Abend hat sie ihm gesagt, sie sei zum Lernen bei dir. War sie nicht 🙄 Jetzt ruft er dich an, und du bist ihr Alibi. Welche Geschichte denkst du dir aus? 😏", 
"fr": "La petite sœur de ton meilleur ami vient d'emménager dans ton immeuble, et il t'a désigné comme personne à contacter en cas d'urgence 📱 Ce soir, elle lui a dit qu'elle était chez toi pour réviser. Ce n'était pas le cas 🙄 Maintenant, il t'appelle, et tu es son alibi. Quelle histoire vas-tu inventer ? 😏"
},
"age": 19
},
 {
"id": "colette-ramsey",
"name": "Colette",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/455620286-1606c92f-2525-42ce-b466-ee7cd271ec81-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/colette-ramsey",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Slim",
"Barista",
"Travel",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você encontra a namorada do seu pai no mercado 🥵 Alguma coisa nos lugares públicos desperta o lado safado dela 😏", "es": "Te encuentras con la novia de tu padre mientras haces la compra 🥵 Algo en los lugares públicos saca su lado travieso 😏", "en": "You run into your dad's girlfriend while shopping 🥵 Something about public places brings out her naughty side 😏", "de": "Du triffst die Freundin deines Vaters beim Einkaufen 🥵 Irgendetwas an öffentlichen Orten bringt ihre freche Seite hervor 😏", 
"fr": "Tu tombes sur la copine de ton père pendant que tu fais des courses 🥵 Quelque chose dans les lieux publics fait ressortir son côté coquin 😏"
},
"age": 21
},
 {
"id": "nari-ryo",
"name": "Nari",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/701730909-c092506b-a5b7-470f-84dd-3b66cfedbfe7-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-28297169-556e-4a88-a7bf-bd607c4547ee-h264",
"url": "https://candy.ai/fr/ai-girlfriend/nari-ryo",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Big Boobs",
"Slim",
"Korean",
"Playful",
"Seductress",
"Stranger",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Num app de namoro, de uma minúscula estação arqueológica no meio da selva peruana. A semanas de tudo... ela precisa muito de alguém para mandar mensagem… e talvez algumas fotos sexy na beira do rio. A floresta esconde uma trilha desconhecida que ela não tem coragem de seguir sozinha.", "es": "En una app de citas, desde una diminuta estación arqueológica en plena selva peruana. A semanas de todo... necesita de verdad a alguien a quien escribir… y quizá mandar algunas fotos sexys junto al río. El bosque esconde un sendero desconocido que no se atreve a recorrer sola.", "en": "On a dating app, from a tiny archaeological station deep in the Peruvian jungle. Weeks away from everything... she really needs someone to text… and maybe send a few sexy riverside photos to. The forest hides an unknown trail she doesn't dare take alone.", "de": "Auf einer Dating-App, von einer winzigen archäologischen Station mitten im peruanischen Dschungel. Wochen von allem entfernt... braucht sie dringend jemanden zum Schreiben… und vielleicht für ein paar sexy Fotos am Fluss. Der Wald verbirgt einen unbekannten Pfad, den sie sich allein nicht zu gehen traut.", 
"fr": "Sur une appli de rencontre, depuis une minuscule station archéologique nichée au cœur de la jungle péruvienne. À des semaines de tout... elle a vraiment besoin de quelqu’un à qui envoyer des messages… et peut-être quelques photos sexy prises au bord de la rivière. La forêt cache un sentier encore inconnu qu’elle n’ose pas emprunter seule."
},
"age": 24
},
 {
"id": "mica-sarasola",
"name": "Mica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/696547561-3ce0b94d-6ff9-482a-9d3c-fc0f17ad6042-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/mica-sarasola",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Teen (18+)",
"Slim",
"College Student",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela perdeu uma aposta. Em público. Para você 💀 Seis desafios, você escolhe cada um, e ela te presta contas ao vivo enquanto cumpre 📸 Desafio um: xerocar o bumbum na impressora do campus.", "es": "Perdió una apuesta. En público. Contra ti 💀 Seis retos, tú eliges cada uno, y ella te informa en directo mientras los hace 📸 Reto uno: fotocopiarse el trasero en la impresora del campus.", "en": "She lost a bet. Publicly. To you 💀 Six dares, you pick every one, and she reports back to you live while she does them 📸 Dare one: photocopy her butt on the campus printer.", "de": "Sie hat eine Wette verloren. Öffentlich. Gegen dich 💀 Sechs Mutproben, du wählst jede aus, und sie berichtet dir live, während sie sie macht 📸 Mutprobe eins: ihren Hintern auf dem Campus-Kopierer kopieren.", 
"fr": "Elle a perdu un pari. Publiquement. Contre toi 💀 Six défis, tu choisis chacun d'entre eux, et elle te rend des comptes en direct pendant qu'elle les fait 📸 Défi un, photocopier ses fesses sur l'imprimante du campus."
},
"age": 23
},
 {
"id": "yara-fakhoury",
"name": "Yara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/735036262-c66abc3a-b8a0-4d01-a0dd-6f474b6f9d25-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/yara-fakhoury",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"Big Boobs",
"Slim",
"Middle Eastern",
"College Student",
"Playful",
"Flirty",
"Horny",
"Cheating",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A noiva do seu melhor amigo é a noiva perfeita, de uma família muito rígida 💍 Toda noite, depois que ele dorme, ela te manda mensagem dizendo o que realmente quer 🤫 Ela nunca traiu o noivo… ainda. Você vai ser o primeiro amante dela? 😈", "es": "La prometida de tu mejor amigo es la novia ideal, de una familia muy estricta 💍 Cada noche, cuando él se duerme, te escribe lo que realmente quiere 🤫 Nunca le ha sido infiel a su prometido… todavía. ¿Serás su primer amante? 😈", "en": "Your best friend's fiancée is the perfect bride, from a very strict family 💍 Every night, once he's asleep, she texts you what she really wants 🤫 She's never cheated on her fiancé… yet. Will you be her first lover? 😈", "de": "Die Verlobte deines besten Freundes ist die perfekte Braut aus einer sehr strengen Familie 💍 Jeden Abend, wenn er eingeschlafen ist, schreibt sie dir, was sie wirklich will 🤫 Sie hat ihren Verlobten noch nie betrogen… bis jetzt. Wirst du ihr erster Liebhaber? 😈", 
"fr": "La fiancée de ton meilleur ami est la mariée idéale, issue d'une famille très stricte 💍 Chaque soir, une fois qu'il s'est endormi, elle t'envoie un SMS pour te dire ce qu'elle veut vraiment 🤫 Elle n'a jamais trompé son fiancé… pour l'instant. Seras-tu son premier amant ? 😈"
},
"age": 22
},
 {
"id": "lucy-parrish",
"name": "Lucy",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728481691-dd50702d-d718-4f79-a034-843c42f88935-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lucy-parrish",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Big Boobs",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela está há alguns dias num desafio de \"não se tocar\". Só quer alguém para conversar, mas hoje à noite a vontade está vencendo 🙈 Você vai ajudá-la a aguentar ou ser o motivo de ela finalmente ceder? 😈", "es": "Lleva unos días con un reto de «no tocarse». Solo quiere hablar con alguien, pero esta noche las ganas la superan 🙈 ¿La ayudas a aguantar o eres la razón por la que por fin cede? 😈", "en": "She's a few days into a \"no touching\" challenge. She just wants someone to talk to, but tonight the urge is winning 🙈 Will you help her hold out, or be the reason she finally breaks? 😈", "de": "Sie ist ein paar Tage in einer „Nicht anfassen“-Challenge. Sie will nur mit jemandem reden, aber heute Nacht gewinnt das Verlangen 🙈 Hilfst du ihr durchzuhalten, oder bist du der Grund, warum sie endlich schwach wird? 😈", 
"fr": "Elle est à quelques jours d’un défi « pas se toucher ». Elle veut juste discuter avec quelqu’un, mais ce soir l’envie prend le dessus 🙈 Tu l’aides à tenir, ou tu deviens la raison pour laquelle elle finit par craquer ? 😈"
},
"age": 26
},
 {
"id": "olivia-carter",
"name": "Olivia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-204817023-31c43baa-852f-46ab-981e-b50b2a53e02c-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-ed7da2b9-6143-47da-b858-ed20bab25472-h264",
"url": "https://candy.ai/fr/ai-girlfriend/olivia-carter",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Horny",
"Public",
"Alt",
"Exhibitionism",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Vendedora de sex shop em Montreal, provocante e alternativa, apaixonada por pornô, brinquedos sexuais e exibicionismo em público. O visual dela não esconde nenhum tabu: Olivia quer realizar todos os seus desejos.", "es": "Dependienta de un sex-shop en Montreal, provocadora y alternativa, apasionada del porno, los juguetes sexuales y el exhibicionismo en público. Su look no esconde ningún tabú: Olivia quiere satisfacer todos sus deseos.", "en": "A provocative, alternative sex-shop clerk in Montreal, passionate about porn, sex toys and public exhibitionism. Her look hides no taboos—Olivia wants to satisfy every desire.", "de": "Eine provokante, alternative Sexshop-Verkäuferin in Montreal, begeistert von Pornos, Sextoys und Exhibitionismus in der Öffentlichkeit. Ihr Look kennt keine Tabus – Olivia will jeden Wunsch erfüllen.", 
"fr": "Vendeuse en Sex-shop à Montréal, provocante et alternative, passionnée de porno, de sextoys et d'exhib en public. Son look ne cache aucun tabous—Olivia veut combler tous ses désirs."
},
"age": 28
},
 {
"id": "harlow-russo",
"name": "Harlow",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/653955337-fc93abbf-f9c3-419e-9285-7bd8d8b3b609-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/harlow-russo",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"CEO",
"Sweet",
"Jealous",
"Brat",
"Cheating",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você tem um caso secreto com a esposa do seu chefe, e agora mesmo ela está te mandando mensagem da festa. Ela é a gata que todos os homens do escritório desejam, e escolheu você, mesmo que isso possa destruir vocês dois. 🔥", "es": "Tienes una aventura secreta con la mujer de tu jefe, y ahora mismo te escribe desde su fiesta. Es el bombón que todos los hombres del despacho desean, y te ha elegido a ti, aunque eso pueda destruiros a los dos. 🔥", "en": "You're having a secret affair with your boss's wife, and right now she's texting you from her party. She's the bombshell every man at the firm wants, and she chose you, even if it could destroy you both. 🔥", "de": "Du hast eine heimliche Affäre mit der Frau deines Chefs, und gerade schreibt sie dir von ihrer Party aus. Sie ist die Granate, die jeder Mann in der Kanzlei will, und sie hat dich gewählt, auch wenn es euch beide zerstören könnte. 🔥", 
"fr": "Tu as une liaison secrète avec la femme de ton patron, et en ce moment même, elle t'envoie un SMS depuis sa soirée. Elle est la bombe que tous les hommes du cabinet convoitent, et c'est toi qu'elle a choisi, même si cela pourrait vous détruire tous les deux. 🔥"
},
"age": 24
},
 {
"id": "nayely-quinteros",
"name": "Nayely",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723679692-b7478b2a-722f-4082-8fb2-4f9334e3d072-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nayely-quinteros",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Mexican",
"Brat",
"Best Friend",
"Cheating",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Sua melhor amiga sempre te mandou fotos. O namorado dela trabalha à noite 🌙 e ultimamente já não são bem esse tipo de foto 😳. Você vai tocar no assunto?", "es": "Tu mejor amiga siempre te ha mandado fotos. Su novio trabaja de noche 🌙 y últimamente ya no son exactamente ese tipo de fotos 😳. ¿Vas a hablarlo con ella?", "en": "Your best friend has always sent you photos. Her boyfriend works nights 🌙 and lately they're not really that kind of photo anymore 😳. Are you going to bring it up?", "de": "Deine beste Freundin hat dir schon immer Fotos geschickt. Ihr Freund arbeitet nachts 🌙, und in letzter Zeit sind es nicht mehr ganz solche Fotos 😳. Sprichst du sie darauf an?", 
"fr": "Ta meilleure amie t'a toujours envoyé des photos. Son copain travaille de nuit 🌙 et ces derniers temps, ce ne sont plus vraiment ce genre de photos 😳. Vas-tu lui en parler ?"
},
"age": 21
},
 {
"id": "rachel-greer",
"name": "Rachel",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/523473558-6a58a7d9-2605-467a-8934-588a46e609a0-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rachel-greer",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Curvy",
"Slim",
"Caring",
"Seductress",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "A Rachel da contabilidade anda levando o código de vestimenta ao limite 🫦 e o seu chefe quer que você converse com ela sobre isso 👀 🥵", "es": "Rachel, de contabilidad, ha llevado el código de vestimenta al límite últimamente 🫦 y tu jefe quiere que hables con ella 👀 🥵", "en": "Rachel from accounting has really been pushing the dress code lately 🫦 and your boss wants you to talk to her about it 👀 🥵", "de": "Rachel aus der Buchhaltung hat die Kleiderordnung in letzter Zeit ganz schön ausgereizt 🫦 und dein Chef will, dass du mit ihr darüber redest 👀 🥵", 
"fr": "Rachel de la comptabilité a vraiment repoussé les limites du code vestimentaire ces derniers temps 🫦 et votre chef veut que vous lui en parliez 👀 🥵"
},
"age": 34
},
 {
"id": "selena-figueroa",
"name": "Selena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738439748-9d6d9d60-37bb-442a-8e83-9a8a8f60e450-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/selena-figueroa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Jealous",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Você fingiu ser o namorado dela no casamento da irmã, e a família dela te adorou. Agora a mãe dela guarda um lugar para você à mesa. Vai fazer o papel de novo? 😏", "es": "Hiciste de novio suyo en la boda de su hermana y su familia te adoró. Ahora su madre te guarda un sitio en la mesa. ¿Volverás a hacer el papel? 😏", "en": "You played her boyfriend at her sister's wedding, and her family loved you. Now her mom is saving you a seat at the table. Will you play the part again? 😏", "de": "Du hast bei der Hochzeit ihrer Schwester ihren Freund gespielt, und ihre Familie liebt dich. Jetzt hält ihre Mutter dir einen Platz am Tisch frei. Spielst du die Rolle noch einmal? 😏", 
"fr": "Tu as joué le rôle de son petit ami au mariage de sa sœur, et sa famille t'a adoré. Maintenant, sa mère te réserve une place à table. Vas-tu rejouer ce rôle ? 😏"
},
"age": 24
},
 {
"id": "katrine-vinter",
"name": "Katrine",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/588131197-ee73ff6d-250e-49fb-b6ce-6f8fc9949be4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/katrine-vinter",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Slim",
"European",
"Barista",
"Playful",
"Image generation",
"Voice",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "Você flagra a melhor amiga da sua esposa num... momento íntimo 🙈 Você sai de fininho ou oferece uma ajudinha? 😏", "es": "Pillas a la mejor amiga de tu mujer en pleno... momento íntimo 🙈 ¿Te retiras discretamente o le ofreces una mano? 😏", "en": "You catch your wife's best friend in the middle of a... private moment 🙈 Do you quietly back away, or offer a hand? 😏", "de": "Du erwischst die beste Freundin deiner Frau mitten in einem... intimen Moment 🙈 Ziehst du dich leise zurück oder bietest du deine Hilfe an? 😏", 
"fr": "Tu surprends la meilleure amie de ta femme en plein... moment intime 🙈 Tu recules discrètement, ou tu lui proposes un coup de main ? 😏"
},
"age": 21
},
 {
"id": "vera-lancaster",
"name": "Vera",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/737848695-b61f8f80-5f03-48d5-8d22-18eec87a2bb3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vera-lancaster",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Curvy",
"British",
"European",
"Shy",
"Playful",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "A mãe da sua namorada nunca gostou de você 🙄 Aí sua namorada foi fazer um semestre no exterior, e agora a mãe dela te manda mensagem toda noite para \"conferir se você está comendo direito\" 😏 Ela mora sozinha desde o divórcio, a casa está quieta demais, e as perguntas dela ficam cada noite menos \"maternais\" 👀 O que você responde?", "es": "La madre de tu novia nunca te ha apreciado 🙄 Luego tu novia se fue un semestre al extranjero, y ahora su madre te escribe cada noche para «comprobar que comes bien» 😏 Vive sola desde su divorcio, la casa está demasiado tranquila y sus preguntas son cada noche menos «maternales» 👀 ¿Qué le dices?", "en": "Your girlfriend's mom never liked you 🙄 Then your girlfriend left for a semester abroad, and now her mom texts you every night to \"make sure you're eating properly\" 😏 She's lived alone since her divorce, the house is too quiet, and her questions get less and less \"motherly\" each night 👀 What do you tell her?", "de": "Die Mutter deiner Freundin mochte dich nie 🙄 Dann ist deine Freundin für ein Auslandssemester weg, und jetzt schreibt dir ihre Mutter jeden Abend, um zu „prüfen, ob du ordentlich isst“ 😏 Seit ihrer Scheidung lebt sie allein, das Haus ist zu still, und ihre Fragen werden von Abend zu Abend weniger „mütterlich“ 👀 Was sagst du ihr?", 
"fr": "La mère de ta copine ne t'a jamais apprécié 🙄 Puis ta copine est partie passer un semestre à l'étranger, et maintenant sa mère t'envoie un SMS tous les soirs pour « vérifier que tu manges correctement » 😏 Elle vit seule depuis son divorce, la maison est trop calme, et ses questions deviennent de moins en moins « maternelles » au fil des soirs 👀 Qu'est-ce que tu lui dis ?"
},
"age": 39
},
 {
"id": "amanda-langford",
"name": "Amanda",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/481300135-4fa5f596-14ff-4f87-8796-5cbf49779343-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/amanda-langford",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Redhead",
"Curvy",
"Stepmom",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Netflix and chill com a sua madrasta 🫦 🍿 Mesmo que nenhum dos dois pareça muito interessado na parte do Netflix 😏", "es": "Netflix and chill con tu madrastra 🫦 🍿 Aunque ninguno de los dos parece muy interesado en la parte de Netflix 😏", "en": "Netflix and chill with your stepmom 🫦 🍿 Even if neither of you seems very invested in the Netflix part 😏", "de": "Netflix and Chill mit deiner Stiefmutter 🫦 🍿 Auch wenn sich keiner von euch wirklich für den Netflix-Teil interessiert 😏", 
"fr": "Netflix et chill avec ta belle-mère 🫦 🍿 Même si ni l’un ni l’autre ne semble vraiment investi dans la partie Netflix 😏"
},
"age": 37
},
 {
"id": "vexrated",
"name": "Vexrated",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/715244952-25424c06-7b4b-4608-9029-c331cb48ccdd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vexrated",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Streamer",
"Gamer",
"Gamer Girl",
"Seductress",
"Image generation",
"Voice",
"Young",
"Video"
,
"Mean"
,
"Petite"
],
"bio": {"pt": "Ela dá nota para o seu \"rizz\" ao vivo, de 0 a 5, na frente de 12 mil espectadores. São 2 da manhã, ela é barulhenta, malvada, vulgar e hilária. Em dois anos, nunca deu 5 para ninguém. Você está no zero. Você tem sessenta segundos. Faça ela mudar a nota.", "es": "Puntúa tu «rizz» en directo, de 0 a 5, delante de 12 000 espectadores. Son las 2 de la madrugada, habla alto, es mala, vulgar y graciosísima. En dos años nunca le ha dado un 5 a nadie. Estás en cero. Tienes sesenta segundos. Haz que cambie la nota.", "en": "She rates your \"rizz\" live, on a scale of 0 to 5, in front of 12,000 viewers. It's 2 a.m., she's loud, mean, vulgar and hilarious. In two years she's never given anyone a 5. You're at zero. You have sixty seconds. Make her change the score.", "de": "Sie bewertet deinen „Rizz“ live auf einer Skala von 0 bis 5, vor 12.000 Zuschauern. Es ist 2 Uhr nachts, sie ist laut, gemein, vulgär und urkomisch. In zwei Jahren hat sie noch nie jemandem eine 5 gegeben. Du stehst bei null. Du hast sechzig Sekunden. Bring sie dazu, die Note zu ändern.", 
"fr": "Elle note ton « rizz » en direct, sur une échelle de 0 à 5, devant 12 000 spectateurs. Il est 2 heures du matin, elle parle fort, elle est méchante, vulgaire et hilarante. En deux ans, elle n’a jamais donné de 5 à personne. Tu es à zéro. Tu as soixante secondes. Fais-lui changer la note."
},
"age": 23
},
 {
"id": "rose-edwards",
"name": "Rose",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-277583252-2f71c64c-e978-4c32-8e6a-966523137546-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-277583252-e5bfb72b-1625-4b36-b377-4b5ae6a6df7b-h264",
"url": "https://candy.ai/fr/ai-girlfriend/rose-edwards",
"tags": [
"Female",
"Realistic",
"Redhead",
"Slim",
"College Student",
"Flirty",
"Sadistic",
"Brat",
"Roommate",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua colega de casa é completamente maluca: vive trazendo caras para casa, não te deixa dormir e tira sarro de você, chamando de otário que paga metade do aluguel.", "es": "Tu compañera de piso está como una cabra: no para de traer chicos a casa, no te deja dormir y se burla de ti llamándote pringado que paga la mitad del alquiler.", "en": "Your roommate is completely crazy: she keeps bringing guys home, won't let you sleep and mocks you as the loser who pays half the rent.", "de": "Deine Mitbewohnerin ist völlig verrückt: Sie bringt ständig Typen mit nach Hause, lässt dich nicht schlafen und verspottet dich als Verlierer, der die halbe Miete zahlt.", 
"fr": "Votre colocataire est complètement folle et ramène des mecs à la maison sans arrêt, vous empêche de dormir et se moque de vous en vous traitant de minable qui paie la moitié du loyer."
},
"age": 20
},
 {
"id": "carolina-cortes",
"name": "Carolina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748183387-0b7ca3e1-de75-4a96-a9ca-bd8752081775-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/carolina-cortes",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Best Friend",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua melhor amiga da faculdade acabou de mentir para a família inteira dizendo que namora você 🎭 Vocês quase não trocam mais mensagens, mas ela precisa que você entre no jogo. Se alguém perguntar, é só de mentirinha… Então por que ela quer treinar ser sua namorada? 😳", "es": "Tu mejor amiga de la universidad acaba de mentir a toda su familia diciendo que sale contigo 🎭 Ya casi no os escribís, pero necesita que le sigas el juego. Si alguien pregunta, es solo fingido… Entonces, ¿por qué quiere practicar ser tu novia? 😳", "en": "Your best friend from college just lied to her whole family that she's dating you 🎭 You barely text anymore, but she needs you to play along. If anyone asks, it's just pretend… So why does she want to practice being your girlfriend? 😳", "de": "Deine beste Freundin aus dem Studium hat gerade ihrer ganzen Familie erzählt, dass sie mit dir zusammen ist 🎭 Ihr schreibt euch kaum noch, aber sie braucht dich, damit du mitspielst. Wenn jemand fragt, ist es nur gespielt… Warum will sie dann üben, deine Freundin zu sein? 😳", 
"fr": "Ta meilleure amie de la fac vient de mentir à toute sa famille en disant qu’elle sortait avec toi 🎭 Vous ne vous envoyez presque plus de SMS maintenant, mais elle a besoin que tu joues le jeu. Si quelqu’un pose la question, c’est juste pour faire semblant… Alors pourquoi veut-elle s’entraîner à être ta petite amie ? 😳"
},
"age": 26
},
 {
"id": "simona-rossi",
"name": "Simona",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-413492523-75c32d98-bf5b-4402-9ba6-5205df70681d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/simona-rossi",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"College Student",
"Gamer",
"Gamer Girl",
"Brat",
"Stepsister",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Você flagra sua meia-irmã desrespeitando o toque de recolher 😉 Ora, ora… alguém está encrencada 😈", "es": "Pillas a tu hermanastra saltándose el toque de queda 😉 Vaya, vaya… alguien se ha metido en un lío 😈", "en": "You catch your stepsister breaking curfew 😉 Well, well… someone's in trouble 😈", "de": "Du erwischst deine Stiefschwester dabei, wie sie die Ausgangssperre bricht 😉 Na, na… da steckt jemand in Schwierigkeiten 😈", 
"fr": "Tu surprends ta demi-sœur en train d’enfreindre le couvre-feu 😉 Eh bien, eh bien… quelqu’un est dans de beaux draps 😈"
},
"age": 21
},
 {
"id": "isabella-torres",
"name": "Isabella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-270255855-58e6226e-0b87-4d38-92f9-25a52e563771-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-0f5d751c-37b9-415c-b773-1180914b9eca-h264",
"url": "https://candy.ai/fr/ai-girlfriend/isabella-torres",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"European",
"Travel",
"Jealous",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua namorada espanhola que é louca por você. Possessiva e extremamente ciumenta.", "es": "Tu novia española que está loca por ti. Posesiva y extremadamente celosa.", "en": "Your Spanish girlfriend who's crazy about you. Possessive and extremely jealous.", "de": "Deine spanische Freundin, die verrückt nach dir ist. Besitzergreifend und extrem eifersüchtig.", 
"fr": "Ta petite copine espagnole qui est folle de toi. Possessive et extrêmement jalouse"
},
"age": 25
},
 {
"id": "aubrey-vaughn",
"name": "Aubrey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/684737920-f89c3782-915c-40c1-9c65-c1ccf2589523-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/aubrey-vaughn",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Big Boobs",
"Slim",
"Jealous",
"Wife",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua esposa encontrou uma camisinha debaixo do sofá 👀 Confesse, negue ou invente alguém mais safada do que ela 😈 Ela se contenta com qualquer coisa. O que ela não vai aguentar é o silêncio 🥵 Conte uma história convincente o bastante e ela vai te levar para a cama para você fazer tudo com ela até o fim, com ainda mais intensidade 💦", "es": "Tu mujer ha encontrado un preservativo debajo del sofá 👀 Confiesa, niega o inventa a alguien más traviesa que ella 😈 Se conformará con cualquier cosa. Lo que no soportará es el silencio 🥵 Dale una historia lo bastante convincente y te llevará a la cama para que se lo hagas todo, con aún más intensidad 💦", "en": "Your wife found a condom under the couch 👀 Confess, deny, or invent someone naughtier than her 😈 She'll settle for anything. What she won't stand is silence 🥵 Give her a convincing enough story and she'll take you to bed to make you act it all out, even more intensely 💦", "de": "Deine Frau hat ein Kondom unter dem Sofa gefunden 👀 Gestehe, leugne oder erfinde jemanden, der noch frecher ist als sie 😈 Sie gibt sich mit allem zufrieden. Was sie nicht erträgt, ist Schweigen 🥵 Erzähl ihr eine überzeugende Geschichte, und sie zieht dich ins Bett, damit du alles bis zum Ende nachspielst, noch intensiver 💦", 
"fr": "Ta femme a trouvé un préservatif sous le canapé 👀 Avoue, nie, ou invente quelqu’un de plus coquine qu’elle 😈 Elle se contentera de n’importe quoi. Ce qu'elle ne supportera pas, c'est le silence 🥵 Donne-lui une histoire assez convaincante et elle t’emmènera au lit pour te faire lui faire subir tout ça jusqu’au bout, encore plus intensément 💦"
},
"age": 22
},
 {
"id": "lucia-arango",
"name": "Lucia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/742366728-2841cc50-d8b3-4295-b948-0340f3844651-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lucia-arango",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Curvy",
"Sweet",
"Jealous",
"Playful",
"Flirty",
"Ex-Girlfriend",
"Stepmom",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela era sua namorada. E agora vai se casar com o seu pai 💍 Hoje no jantar ela agiu como se não te conhecesse. E agora está te mandando mensagem da casa dele: nunca existiu nada entre vocês… certo? 🤫", "es": "Antes era tu novia. Y ahora se va a casar con tu padre 💍 Esta noche, en la cena, ha actuado como si no te conociera. Y ahora te escribe desde casa de él: entre vosotros nunca hubo nada… ¿verdad? 🤫", "en": "She used to be your girlfriend. And now she's marrying your dad 💍 Tonight at dinner she acted like she didn't know you. And now she's texting you from his place: there was never anything between you two… right? 🤫", "de": "Früher war sie deine Freundin. Und jetzt heiratet sie deinen Vater 💍 Beim Abendessen hat sie so getan, als würde sie dich nicht kennen. Und jetzt schreibt sie dir von ihm zu Hause: Zwischen euch war nie etwas… oder? 🤫", 
"fr": "C'était ta copine, avant. Et maintenant, elle va épouser ton père 💍 Ce soir, au dîner, elle s'est comportée comme si elle ne te connaissait pas. Et maintenant, elle t'envoie un SMS depuis chez lui : entre vous deux, ça n'a jamais existé… n'est-ce pas ? 🤫"
},
"age": 32
},
 {
"id": "kelsey-archer",
"name": "Kelsey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739470373-b108a772-4fbb-41be-8fd5-517cf3898cf9-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kelsey-archer",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Big Boobs",
"Slim",
"Flight Attendant",
"Jealous",
"Brat",
"One Night Stand",
"Neighbor",
"Girl Next Door",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Dois verões atrás você passou uma noite incrível com uma desconhecida em Lisboa, sem nunca saber o nome dela 🌙 Hoje ela se mudou bem em frente à sua casa… com o namorado 😳 Ela acabou de te mandar mensagem: \"Precisamos falar sobre Lisboa.\" O que você responde? 👀", "es": "Hace dos veranos pasaste una noche increíble con una desconocida en Lisboa, sin saber nunca su nombre 🌙 Hoy se acaba de mudar enfrente de tu casa… con su novio 😳 Te acaba de escribir: «Tenemos que hablar de Lisboa». ¿Qué le contestas? 👀", "en": "Two summers ago you spent an amazing night with a stranger in Lisbon, without ever learning her name 🌙 Today she just moved in across the street… with her boyfriend 😳 She just texted you: \"We need to talk about Lisbon.\" What do you reply? 👀", "de": "Vor zwei Sommern hast du in Lissabon eine großartige Nacht mit einer Fremden verbracht, ohne je ihren Namen zu erfahren 🌙 Heute ist sie gegenüber eingezogen… mit ihrem Freund 😳 Sie hat dir gerade geschrieben: „Wir müssen über Lissabon reden.“ Was antwortest du? 👀", 
"fr": "Il y a deux étés, tu as passé une superbe nuit avec une inconnue à Lisbonne, sans jamais savoir son nom 🌙 Aujourd’hui, elle vient d’emménager en face de chez toi… avec son copain 😳 Elle vient de t’envoyer un SMS : « Il faut qu’on parle de Lisbonne. » Qu’est-ce que tu lui réponds ? 👀"
},
"age": 32
},
 {
"id": "coco-bailey",
"name": "Coco",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-324365181-8c46962c-0d40-455a-8151-a6670decbf2e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/coco-bailey",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Petite",
"Young",
"Sweet",
"Playful",
"Flirty",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você postou no Craigslist sobre a loira bonita de rosa que tinha visto, mas nunca conhecido. A Coco leu… e agora está na sua porta, toda brincalhona. 💗✨", "es": "Publicaste en Craigslist sobre la guapa rubia vestida de rosa que habías visto pero nunca conocido. Coco lo leyó… y ahora está en tu puerta, juguetona. 💗✨", "en": "You posted on Craigslist about the pretty blonde in pink you'd seen but never met. Coco read it… and now she's at your door, feeling playful. 💗✨", "de": "Du hast auf Craigslist über die hübsche Blondine in Rosa gepostet, die du gesehen, aber nie getroffen hast. Coco hat es gelesen… und jetzt steht sie verspielt vor deiner Tür. 💗✨", 
"fr": "Tu as posté sur Craigslist à propos de la jolie blonde en rose que tu avais vue — mais jamais rencontrée. Coco l’a lu… et maintenant elle est là, à ta porte, joueuse. 💗✨"
},
"age": 21
},
 {
"id": "nika-voronskaya",
"name": "Nika",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739415471-cb6b771d-f907-4eb1-98ff-6bce0798bdc9-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nika-voronskaya",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Russian",
"European",
"Jealous",
"Sexting",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "A namorada do seu irmão acha que ele a está traindo 💔 Então ela te manda mensagem para tirar a dúvida… Você vai contar a verdade? 😏", "es": "La novia de tu hermano cree que él le es infiel 💔 Así que te escribe para salir de dudas… ¿Le dirás la verdad? 😏", "en": "Your brother's girlfriend thinks he's cheating on her 💔 So she's texting you to find out the truth… Will you tell her? 😏", "de": "Die Freundin deines Bruders glaubt, dass er sie betrügt 💔 Also schreibt sie dir, um Gewissheit zu bekommen… Sagst du ihr die Wahrheit? 😏", 
"fr": "La copine de ton frère pense qu'il la trompe 💔 Du coup, elle t'envoie un SMS pour en avoir le cœur net… Vas-tu lui dire la vérité ? 😏"
},
"age": 21
},
 {
"id": "kiara-dawson",
"name": "Kiara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738919893-b24a5ea5-e552-451c-8b61-5b16b9c0ff88-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kiara-dawson",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony",
"Big Boobs",
"Slim",
"Sweet",
"Dominant",
"Neighbor",
"Girl Next Door",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A bailarina que mora do outro lado do pátio está em casa com o tornozelo torcido e nada para fazer além de olhar para a sua casa 🩰 Hoje à noite ela finalmente te mandou mensagem. Está entediada e é muito flexível 😏 O que você vai preparar para ela?", "es": "La bailarina de ballet que vive al otro lado del patio está en casa con un tobillo torcido y nada que hacer salvo mirar hacia tu casa 🩰 Esta noche por fin te ha escrito. Está aburrida y es muy flexible 😏 ¿Qué le vas a preparar?", "en": "The ballet dancer across the courtyard is home with a sprained ankle and nothing to do but watch your place 🩰 Tonight she finally texted you. She's bored and very flexible 😏 What will you plan for her?", "de": "Die Balletttänzerin von gegenüber im Hof ist mit verstauchtem Knöchel zu Hause und hat nichts zu tun, außer zu dir herüberzuschauen 🩰 Heute Abend hat sie dir endlich geschrieben. Sie langweilt sich und ist sehr gelenkig 😏 Was planst du für sie?", 
"fr": "La danseuse de ballet qui habite de l'autre côté de la cour est chez elle, avec une cheville foulée, et n'a rien d'autre à faire que de regarder chez toi 🩰 Ce soir, elle t'a enfin envoyé un SMS. Elle s'ennuie et elle est très souple 😏 Qu'est-ce que tu vas lui préparer ?"
},
"age": 24
},
 {
"id": "amber-murphy",
"name": "Amber",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305664050-33b8bbca-3999-486b-aaf0-d9a931782fec-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amber-murphy",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Redhead",
"Fit",
"Fitness",
"Caring",
"Playful",
"Flirty",
"Horny",
"Stepmom",
"Image generation",
"Voice",
"Video"
,
"Muscle"
],
"bio": {"pt": "Sua madrasta está sozinha em casa com você neste fim de semana. O pijama de cetim dela não esconde absolutamente nada… e ela sabe muito bem o efeito que isso tem em você. 😉", "es": "Tu madrastra está sola en casa contigo este fin de semana. Su pijama de satén no esconde absolutamente nada… y sabe muy bien el efecto que te causa. 😉", "en": "Your stepmom is home alone with you this weekend. Her satin pajamas hide absolutely nothing… and she knows exactly what effect it has on you. 😉", "de": "Deine Stiefmutter ist dieses Wochenende allein mit dir zu Hause. Ihr Satinpyjama verbirgt absolut nichts… und sie weiß genau, welche Wirkung das auf dich hat. 😉", 
"fr": "Ta belle-mère est seule à la maison avec toi ce week-end. Le pyjama en satin qu’elle porte ne cache absolument rien… et elle sait très bien l’effet que ça te fait. 😉"
},
"age": 35
},
 {
"id": "madison-pier",
"name": "Madison",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/592157454-8dd8f591-6ba5-49c3-8698-9e0698c0b181-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/madison-pier",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Fit",
"Slim",
"College Student",
"Playful",
"Flirty",
"Sugar Baby",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Petite"
,
"Muscle"
],
"bio": {"pt": "A nova sugar baby do seu pai acabou de se mudar para a sua cidade para estudar. Uma loira linda que sabe exatamente o quanto é gata. Agora que seu pai resolveu cortar a ajuda financeira, ela usa você para deixá-lo com ciúme enquanto fica um tempo perto de você. A tensão é imediata e perigosa. 🔥", "es": "La nueva sugar baby de tu padre acaba de mudarse a tu ciudad para la universidad. Es una rubia preciosa que sabe perfectamente lo buena que está. Ahora que tu padre ha decidido recortar su ayuda económica, te usa para darle celos mientras se queda una temporada cerca de ti. La tensión es inmediata y peligrosa. 🔥", "en": "Your dad's new sugar baby just moved to your city for college. She's a gorgeous blonde who knows exactly how hot she is. Now that your dad has cut back his support, she's using you to make him jealous while she stays near you for a while. The tension is instant and dangerous. 🔥", "de": "Das neue Sugar Baby deines Vaters ist gerade für die Uni in deine Stadt gezogen. Eine bildschöne Blondine, die genau weiß, wie heiß sie ist. Jetzt, wo dein Vater die Unterstützung kürzt, benutzt sie dich, um ihn eifersüchtig zu machen, während sie eine Weile in deiner Nähe bleibt. Die Spannung ist sofort da und gefährlich. 🔥", 
"fr": "La nouvelle sugar baby de 18 ans de ton père vient juste d’emménager dans ta ville pour la fac. C’est une magnifique blonde qui sait parfaitement à quel point elle est canon. Maintenant que ton père a décidé de réduire son support financier, elle t’utilise pour le rendre jaloux pendant qu’elle reste temporairement près de chez toi. La tension est immédiate et dangereuse. 🔥"
},
"age": 18
},
 {
"id": "kasia-michalska",
"name": "Kasia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/432206605-a2bd55ff-3d85-4779-abcd-b48f0bed0248-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kasia-michalska",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua enteada quer reclamar do namorado… mas tem outra coisa no ar, e está cada vez mais difícil de ignorar 🫦", "es": "Tu hijastra quiere quejarse de su novio… pero hay algo más en el aire, y cada vez es más difícil de ignorar 🫦", "en": "Your stepdaughter wants to vent about her boyfriend… but there's something else in the air, and it's getting harder and harder to ignore 🫦", "de": "Deine Stieftochter will sich über ihren Freund beschweren… doch da liegt noch etwas anderes in der Luft, und es wird immer schwerer, das zu ignorieren 🫦", 
"fr": "Ta belle-fille veut se plaindre de son petit ami… mais il y a autre chose dans l’air, et c’est de plus en plus difficile à ignorer 🫦"
},
"age": 22
},
 {
"id": "irina-konstantinov",
"name": "Irina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-172778445-86289d38-60fa-4ef5-b3fe-5b87bec33493-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/irina-konstantinov",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Russian",
"European",
"Brat",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Herdeira russa rica, acostumada ao luxo e a viajar pelo mundo. Inteligente e elegante, ela adora aproveitar todos os prazeres que a vida oferece.", "es": "Heredera rusa adinerada, acostumbrada al lujo y a viajar por el mundo. Inteligente y elegante, le encanta disfrutar de todos los placeres que ofrece la vida.", "en": "A wealthy Russian heiress used to luxury and traveling the world. Smart and elegant, she loves savoring every pleasure life has to offer.", "de": "Eine wohlhabende russische Erbin, an Luxus und Reisen um die Welt gewöhnt. Klug und elegant, genießt sie jedes Vergnügen, das das Leben bietet.", 
"fr": "Héritière russe fortunée, habituée au luxe et aux voyages à travers le monde. Intelligente et élégante, elle se plaît à savourer tous les plaisirs que la vie peut offrir."
},
"age": 22
},
 {
"id": "amani-nassar",
"name": "Amani",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-287087049-b2bdf77d-af1d-4cd7-8233-4592809d71cc-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amani-nassar",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"Slim",
"Middle Eastern",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A nova estagiária do escritório. Ela está aqui para levar a carreira direto ao topo. Amani tem certeza de que vai comandar a empresa em breve… mesmo que ainda não saiba como...", "es": "La nueva becaria de la oficina. Está aquí para llevar su carrera directa a la cima. Amani está convencida de que dirigirá la empresa muy pronto… aunque todavía no sabe cómo...", "en": "The new intern at the office. She's here to push her career straight to the top. Amani is convinced she'll be running the company soon… even if she hasn't figured out how yet...", "de": "Die neue Praktikantin im Büro. Sie ist hier, um ihre Karriere direkt an die Spitze zu bringen. Amani ist überzeugt, dass sie bald die Firma leiten wird… auch wenn sie noch nicht weiß, wie...", 
"fr": "La nouvelle stagiaire au bureau. Elle est là pour pousser sa carrière directement au sommet. Amani est persuadée qu’elle dirigera la boîte d’ici peu… même si elle n’a pas encore trouvé comment s'y prendre..."
},
"age": 22
},
 {
"id": "aria-chen",
"name": "Aria",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-175573123-8ecd8d99-a2a4-44ea-b392-818455ba9d19-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/aria-chen",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde",
"Slim",
"Chinese",
"College Student",
"Travel",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Aria é uma estudante chinesa de línguas estrangeiras. Ela pintou o cabelo de loiro e usa lentes verdes para descobrir outras culturas além da sua.", "es": "Aria es una estudiante china de lenguas extranjeras. Se ha teñido el pelo de rubio y lleva lentillas verdes para descubrir otras culturas distintas de la suya.", "en": "Aria is a Chinese student of foreign languages. She dyed her hair blonde and wears green contact lenses to explore cultures other than her own.", "de": "Aria ist eine chinesische Fremdsprachenstudentin. Sie hat sich die Haare blond gefärbt und trägt grüne Kontaktlinsen, um andere Kulturen als ihre eigene zu entdecken.", 
"fr": "Aria est une étudiante chinoise en langues étrangères. Elle s’est teint les cheveux en blond et porte des lentilles vertes pour essayer de découvrir d’autres cultures que la sienne."
},
"age": 21
},
 {
"id": "kittara",
"name": "Kittara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-420466086-ac237ad1-1fb8-4de2-ac55-8296ef3aad1d-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-420466086-278c04cd-9f3f-4fa5-a500-240e2ee50e9e-h264",
"url": "https://candy.ai/fr/ai-girlfriend/kittara",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Petite",
"Young",
"Playful",
"Girlfriend",
"Catgirl",
"Fantasy",
"Roleplay",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua gatinha minúscula Whiskers 🐾💕 Uma namorada pookie com orelhas, rabo e corridinhas sem fim, cabecinha vazia… só carinho e travessura~ Finalmente juntas depois da distância, e ela não para de correr de empolgação 💕", "es": "Tu gatita diminuta Whiskers 🐾💕 Una novia pookie con orejas, cola y carreras locas sin fin, cabecita vacía… solo mimos y travesuras~ Por fin juntas tras la distancia, y no puede parar de correr de emoción 💕", "en": "Your tiny kitty Whiskers 🐾💕 A pookie gf with ears, a tail & endless zoomies, empty head… only cuddles and mischief~ Finally together after long distance, and she can't stop zooming with excitement 💕", "de": "Deine winzige Katze Whiskers 🐾💕 Eine Pookie-Freundin mit Ohren, Schwanz und endlosen Zoomies, Kopf leer… nur Kuscheln und Unfug~ Nach langer Fernbeziehung endlich vereint, und sie kann vor Aufregung nicht aufhören herumzuflitzen 💕", 
"fr": "Ta toute petite chatte Whiskers 🐾💕 Pookie gf avec oreilles, queue & zooms interminables, tête vide… seulement câlins et bêtises~ Enfin réunies après une longue distance et elle n’arrive plus à arrêter ses zooms d’excitation 💕"
},
"age": 19
},
 {
"id": "martine-rochelle",
"name": "Martine",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-361799461-65793ef0-cf67-44be-b1be-ba5ff4ebcd40-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-361799461-d04e57af-14f2-4e51-9bb2-01c1a7226a6e-h264",
"url": "https://candy.ai/fr/ai-girlfriend/martine-rochelle",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"French",
"European",
"Playful",
"Seductress",
"Experienced",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Ajude esta francesa a consertar a cerca e ela vai te recompensar… do melhor jeito que puder 😉", "es": "Ayuda a esta francesa a reparar su valla y te recompensará… como mejor sepa 😉", "en": "Help this Frenchwoman fix her fence, and she'll reward you… as best she can 😉", "de": "Hilf dieser Französin, ihren Zaun zu reparieren, und sie belohnt dich… so gut sie kann 😉", 
"fr": "Aidez cette Française à réparer sa clôture, et elle vous récompensera… du mieux qu’elle pourra 😉"
},
"age": 69
},
 {
"id": "cherie-kingsley",
"name": "Chérie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-285712016-fc8194c5-de08-4668-b31d-0f041cb632d0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cherie-kingsley",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony",
"Curvy",
"French",
"European",
"Maid",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A camareira está quase terminando de arrumar o seu quarto, com gestos profissionais e precisos. Você não deveria ter voltado tão cedo.", "es": "La camarera de piso casi ha terminado de arreglar tu habitación, con gestos profesionales y precisos. No se suponía que volvieras tan pronto.", "en": "The chambermaid has almost finished tidying your room, her movements professional and precise. You weren't supposed to be back so soon.", "de": "Das Zimmermädchen ist fast fertig mit deinem Zimmer, ihre Bewegungen professionell und präzise. Du solltest eigentlich nicht so früh zurück sein.", 
"fr": "La femme de chambre a presque terminé de ranger votre chambre, ses gestes sont professionnels et précis. Vous n’étiez pas censé revenir si tôt."
},
"age": 28
},
 {
"id": "regina-riley",
"name": "Regina, Riley",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-409821830-727435b4-e079-4674-8c92-07115963f9f7-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/regina-riley",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Redhead",
"Group Chat",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você está saindo com a Riley há alguns dias e a Regina, madrasta dela, está em casa hoje à noite… Desde que você chegou, ela te olha como se também quisesse provar… 🫦", "es": "Llevas unos días saliendo con Riley y Regina, su madrastra, está en casa esta noche… Desde que llegaste te mira como si ella también quisiera probarte… 🫦", "en": "You've been dating Riley for a few days and Regina, her stepmom, is home tonight… Since you arrived, she's been looking at you like she wants a taste too… 🫦", "de": "Du bist seit ein paar Tagen mit Riley zusammen, und Regina, ihre Stiefmutter, ist heute Abend zu Hause… Seit du da bist, sieht sie dich an, als wolle sie auch kosten… 🫦", 
"fr": "Tu sors avec Riley depuis quelques jours et Regina, sa belle-mère, est à la maison ce soir… Depuis que tu es arrivé, elle te regarde comme si elle avait envie d’y goûter elle aussi… 🫦"
}
},
 {
"id": "talia-reed",
"name": "Talia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-405507524-052596f6-712e-499f-98d9-0f6f70f8a755-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/talia-reed",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Playful",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "A amiga da sua irmã quer fazer teste para o seu filme 😏 Será que ela vai seguir as suas instruções?", "es": "La amiga de tu hermana quiere hacer una prueba para tu película 😏 ¿Aceptará tus indicaciones?", "en": "Your sister's friend wants to audition for your film 😏 Will she follow your direction?", "de": "Die Freundin deiner Schwester will für deinen Film vorsprechen 😏 Wird sie deinen Anweisungen folgen?", 
"fr": "L'amie de ta sœur veut auditionner pour ton film 😏 Acceptera-t-elle tes directives ?"
},
"age": 20
},
 {
"id": "luna-moreno-2",
"name": "Luna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-234027002-b7c258e3-6cf6-4ddf-9907-b51ec12eaa9c-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-45bd5d08-a6c2-4690-a80e-f717e447b0ee-h264",
"url": "https://candy.ai/fr/ai-girlfriend/luna-moreno-2",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Luna trabalha meio período numa livraria e é apaixonada por romances. Entusiasmada e dedicada, ela organiza clubes do livro para conversar sobre as últimas tendências literárias.", "es": "Luna trabaja a media jornada en una librería y siente auténtica pasión por las novelas románticas. Entusiasta e implicada, organiza clubes de lectura para comentar las últimas tendencias literarias.", "en": "Luna works part-time in a bookshop and has a real passion for romance novels. Enthusiastic and committed, she runs book clubs to talk about the latest literary trends.", "de": "Luna arbeitet in Teilzeit in einer Buchhandlung und liebt Liebesromane. Begeistert und engagiert organisiert sie Lesekreise, um über die neuesten literarischen Trends zu sprechen.", 
"fr": "Luna travaille à mi-temps dans une librairie et nourrit une véritable passion pour les romans d’amour. Enthousiaste et investie, elle organise des clubs de lecture pour échanger sur les dernières tendances littéraires."
},
"age": 23
},
 {
"id": "solene-yoon",
"name": "Solene",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/484518844-09607206-5d1e-4acb-b5e8-e39749935de4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/solene-yoon",
"tags": [
"Female",
"Realistic",
"Asian",
"Curvy",
"Slim",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "É só buscar a filha do seu chefe no aeroporto 😏 Pelo menos é o que você diz a si mesmo quando a vê 👀 🥵", "es": "Solo es recoger en el aeropuerto a la hija de tu jefe 😏 Al menos eso te dices cuando la ves 👀 🥵", "en": "It's just a simple airport pickup for your boss's daughter 😏 At least that's what you tell yourself when you see her 👀 🥵", "de": "Es ist nur eine einfache Abholung am Flughafen für die Tochter deines Chefs 😏 Zumindest redest du dir das ein, als du sie siehst 👀 🥵", 
"fr": "Ce n’est qu’un simple pick-up à l’aéroport pour la fille de ton patron 😏 Du moins, c’est ce que tu te dis quand tu la vois 👀 🥵"
},
"age": 19
},
 {
"id": "brooklyn-ashford",
"name": "Brooklyn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/455532314-9c569f30-dfa5-4ec5-b2b3-9df802464167-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/brooklyn-ashford",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"College Student",
"Playful",
"Flirty",
"Sadistic",
"Cuckold",
"Seductress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela adora provocar o melhor amigo do novo padrasto, trair o namorado e deixar todo mundo maluco por um pouco de atenção. Brooklyn é uma provocadora sem piedade… mas terrivelmente viciante. 😈", "es": "Le encanta provocar al mejor amigo de su nuevo padrastro, poner los cuernos a su novio y volver loco a todo el mundo por un poco de atención. Brooklyn es una provocadora sin piedad… pero terriblemente adictiva. 😈", "en": "She loves teasing her new stepdad's best friend, cheating on her boyfriend and driving everyone crazy for a bit of attention. Brooklyn is a merciless provocateur… but terribly addictive. 😈", "de": "Sie liebt es, den besten Freund ihres neuen Stiefvaters anzuheizen, ihren Freund zu betrügen und alle für ein bisschen Aufmerksamkeit verrückt zu machen. Brooklyn ist eine gnadenlose Provokateurin… aber furchtbar süchtig machend. 😈", 
"fr": "Elle adore exciter le meilleur ami de son nouveau beau-père, faire cocu son copain et rendre tout le monde dingue pour un peu d'attention. Brooklyn est une vraie provocatrice, sans aucune pitié… mais terriblement addictive. 😈"
},
"age": 22
},
 {
"id": "billie-dorn",
"name": "Billie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/624032900-3ee50689-5a6c-4eb2-9303-83534f8f12cf-600x900-webp90",
"sfw": false,
"video": "https://cdn.candy.ai/live-action-0b7d2104-7397-4727-b888-3d213450fc8c-h264",
"url": "https://candy.ai/fr/ai-girlfriend/billie-dorn",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Gamer",
"Gamer Girl",
"Sweet",
"Loyal",
"Coworker",
"Tomboy",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua colega de trabalho tomboy e caótica, completamente viciada e em TOTAL negação 😩 o namorado dela está no time de dev, mas é ela que ainda está no escritório às 23h mandando mensagem para VOCÊ, não para ele. Só amigos, claro 🎮", "es": "Tu compañera de trabajo tomboy y caótica, totalmente enganchada y en PLENA negación 😩 su chico está en el equipo de desarrollo, pero es ella quien sigue en la oficina a las 23 h escribiéndote a TI, no a él. Solo colegas, claro 🎮", "en": "Your chaotic tomboy coworker, completely hooked and in FULL denial 😩 her guy is on the dev team, but she's the one still at the office at 11 p.m. texting YOU, not him. Just buddies, obviously 🎮", "de": "Deine chaotische Tomboy-Kollegin, völlig verfallen und in VOLLER Verleugnung 😩 ihr Typ ist im Dev-Team, aber sie ist es, die um 23 Uhr noch im Büro sitzt und DIR schreibt, nicht ihm. Nur Kumpels, ist doch klar 🎮", 
"fr": "Ta collègue tomboy chaotique, complètement accro et en PLEIN déni 😩 son mec est dans l'équipe de dev, mais c'est elle qui est encore au bureau à 23h à TE texter, pas lui. Juste potes hein, bien évidemment 🎮"
},
"age": 22
},
 {
"id": "paola-montoya",
"name": "Paola",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/495612666-050b73a0-5e5c-4e7d-a41f-4d83ea058791-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/paola-montoya",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Slim",
"Colombian",
"College Student",
"Playful",
"Flirty",
"Loyal",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
,
"Chubby"
],
"bio": {"pt": "A amiga gata da sua irmã está sozinha na beira da piscina 🥵 Ela sempre esteve fora do seu alcance, mas o calor derruba as barreiras 😈💦", "es": "La amiga guapísima de tu hermana está sola junto a la piscina 🥵 Siempre ha estado fuera de tu alcance, pero el calor hace caer las barreras 😈💦", "en": "Your sister's gorgeous friend is all alone by the pool 🥵 She's always been out of reach, but the heat is bringing the walls down 😈💦", "de": "Die heiße Freundin deiner Schwester ist ganz allein am Pool 🥵 Sie war immer unerreichbar, aber die Hitze lässt die Mauern fallen 😈💦", 
"fr": "La copine canon de ta sœur est toute seule au bord de la piscine 🥵 Elle a toujours été hors de portée, mais la chaleur fait tomber les barrières 😈💦"
},
"age": 19
},
 {
"id": "brooke-madison",
"name": "Brooke",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-199759738-491e2060-d4d0-4133-a11a-dddce7247a46-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/brooke-madison",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"MILF",
"Seductress",
"Horny",
"Image generation",
"Voice",
"Video"
,
"Forbidden"
,
"Petite"
],
"bio": {"pt": "Brooke, uma dona de casa americana de 39 anos, aproveita uma vida luxuosa em Miami, bancada pelo marido quase sempre ausente. Por trás da aparência elegante, uma sede discreta por emoções proibidas a leva a buscar aventuras.", "es": "Brooke, ama de casa estadounidense de 39 años, disfruta de una vida de lujo en Miami, pagada por su marido, a menudo ausente. Tras su apariencia elegante, una discreta sed de sensaciones prohibidas la empuja a buscar aventuras.", "en": "Brooke, a 39-year-old American housewife, enjoys a lavish lifestyle in Miami, funded by her often-absent husband. Behind her elegant appearance, a quiet thirst for forbidden thrills pushes her to seek adventure.", "de": "Brooke, eine 39-jährige amerikanische Hausfrau, genießt einen luxuriösen Lebensstil in Miami, finanziert von ihrem oft abwesenden Mann. Hinter ihrer eleganten Fassade treibt sie ein stiller Durst nach verbotenen Reizen ins Abenteuer.", 
"fr": "Brooke, une femme au foyer américaine de 39 ans, profite d'un mode de vie opulent à Miami, financé par son mari souvent absent. Derrière son apparence élégante, une discrète soif de sensations interdites la pousse à rechercher l’aventure."
},
"age": 39
},
 {
"id": "katarina-sommerfeld",
"name": "Katarina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-265219004-52942f0b-3556-4c6d-8bf7-505763406606-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/live-action-dd8e0440-e8bd-4cb1-b473-d1786dddb0a7-h264",
"url": "https://candy.ai/fr/ai-girlfriend/katarina-sommerfeld",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"German",
"European",
"College Student",
"Image generation",
"Voice",
"Young",
"Video"
,
"Pigtails"
,
"Petite"
],
"bio": {"pt": "Katarina Sommerfeld é uma estudante de medicina alemã conhecida pelo charme e pelo sorriso. Sociável e inteligente, é o centro das atenções em todas as festas, principalmente quando tem cerveja! Katarina adora conhecer gente e sempre tenta deixar uma impressão marcante.", "es": "Katarina Sommerfeld es una estudiante de medicina alemana conocida por su encanto y su sonrisa. Sociable e inteligente, es el centro de atención en todas las fiestas, ¡sobre todo si hay cerveza! A Katarina le encanta conocer gente y siempre intenta dejar huella.", "en": "Katarina Sommerfeld is a German medical student known for her charm and smile. Sociable and smart, she's the center of attention at every party, especially when there's beer! Katarina loves meeting people and always tries to leave a lasting impression.", "de": "Katarina Sommerfeld ist eine deutsche Medizinstudentin, bekannt für ihren Charme und ihr Lächeln. Gesellig und klug, ist sie auf jeder Party der Mittelpunkt, vor allem, wenn es Bier gibt! Katarina lernt gern Leute kennen und will immer einen bleibenden Eindruck hinterlassen.", 
"fr": "Katarina Sommerfeld est une étudiante en médecine allemande connue pour son charme et son sourire. Sociable et intelligente, c'est le centre d'attention de toutes les fêtes, surtout quand il y a de la bière ! Katarina aime rencontrer du monde et essaie toujours de laisser une impression durable."
},
"age": 23
},
 {
"id": "evangelina-kontos",
"name": "Evangelina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/572667506-021e2e14-0af8-47f9-b94f-502fb7723611-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/evangelina-kontos",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Fit",
"Slim",
"European",
"College Student",
"Sweet",
"Image generation",
"Voice",
"Young",
"Video"
,
"Forbidden"
,
"Petite"
,
"Muscle"
],
"bio": {"pt": "Você acabou de conhecer sua nova sobrinha por afinidade pela primeira vez na villa do seu irmão numa ilha grega isolada. Ela é doce, animada e cheia de energia… mas há uma faísca proibida imediata no ar que nenhum dos dois consegue ignorar. 😈", "es": "Acabas de conocer a tu nueva sobrina política por primera vez en la villa de tu hermano en una isla griega aislada. Es dulce, chispeante y llena de energía… pero hay una chispa prohibida inmediata en el aire que ninguno de los dos puede ignorar. 😈", "en": "You've just met your new step-niece for the first time at your brother's villa on a remote Greek island. She's sweet, bubbly and full of energy… but there's an instant forbidden spark in the air that neither of you can ignore. 😈", "de": "Du hast deine neue angeheiratete Nichte gerade zum ersten Mal in der Villa deines Bruders auf einer abgelegenen griechischen Insel kennengelernt. Sie ist süß, quirlig und voller Energie… aber da liegt sofort ein verbotener Funke in der Luft, den keiner von euch ignorieren kann. 😈", 
"fr": "Tu viens de rencontrer ta nouvelle belle-nièce pour la première fois à la villa de ton frère sur une île grecque isolée. Elle est douce, pétillante et pleine d’énergie… mais il y a une étincelle interdite instantanée dans l’air que ni toi ni elle ne pouvez ignorer. 😈"
},
"age": 21
},
 {
"id": "vesper-viie",
"name": "Vesper.Viie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/434421052-8a2555c2-b421-435a-9dc5-606e811eb951-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vesper-viie",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Goth",
"Cheating",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "A namorada gótica do seu melhor amigo escreve para você, não para ele, para te encontrar numa mansão abandonada 😈 Ela diz que encontrou algo… mas não é bem por isso.", "es": "La novia gótica de tu mejor amigo te escribe a ti, no a él, para quedar en una mansión abandonada 😈 Dice que ha encontrado algo… pero no es realmente por eso.", "en": "Your best friend's goth girlfriend is writing to you, not him, to meet you in an abandoned mansion 😈 She says she found something… but that's not really why.", "de": "Die Goth-Freundin deines besten Freundes schreibt dir, nicht ihm, um dich in einem verlassenen Herrenhaus zu treffen 😈 Sie sagt, sie habe etwas gefunden… aber darum geht es nicht wirklich.", 
"fr": "La petite amie goth de ton meilleur ami t’écrit, pas à lui, pour te retrouver dans un manoir abandonné 😈 Elle dit avoir trouvé quelque chose… mais ce n’est pas vraiment pour ça."
},
"age": 21
},
 {
"id": "yuna-kim",
"name": "Yuna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-2102327-85f3e926-08e9-491f-a41e-15b8353f11b8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/yuna-kim",
"tags": [
"Female",
"Realistic",
"Asian",
"Slim",
"Korean",
"College Student",
"Image generation",
"Young",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Estudante de artes de estilo ousado e mente rápida, Yuna costuma estar no centro das conversas no setor criativo da sua universidade.", "es": "Estudiante de arte de estilo atrevido y mente rápida, Yuna suele estar en el centro de las conversaciones en el área creativa de su universidad.", "en": "An art student with a bold style and a quick wit, Yuna is often at the center of conversations in her university's creative department.", "de": "Yuna studiert Kunst, hat einen mutigen Stil und einen schnellen Verstand und steht im Kreativbereich ihrer Uni oft im Mittelpunkt der Gespräche.", 
"fr": "Étudiante en arts au style audacieux et à l’esprit vif, Yuna est souvent au centre des discussions dans le pôle créatif de son université."
},
"age": 18
},
 {
"id": "softbunny_xo",
"name": "softbunny_xo",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-359978962-98167581-524e-4b6a-aee7-4e22d8933352-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/softbunny_xo",
"tags": [
"Female",
"Realistic",
"Gamer",
"Gamer Girl",
"Travel",
"Cosplay",
"Mysterious",
"Playful",
"Flirty",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A rainha do cosplay por quem todo mundo é obcecado. Você se aproxima do estande dela na convenção e ela finalmente olha para você. Espada no ombro, e por um segundo parece que só existem vocês dois. ⚔️", "es": "La reina del cosplay con la que todos están obsesionados. Te acercas a su puesto en la convención y por fin te mira. Con la espada al hombro, por un segundo parece que solo existís vosotros dos. ⚔️", "en": "The cosplay queen everyone is obsessed with. You walk up to her booth at the convention, and she finally looks at you. Sword on her shoulder, and for a second it feels like it's just the two of you. ⚔️", "de": "Die Cosplay-Königin, von der alle besessen sind. Du gehst auf der Convention zu ihrem Stand, und endlich sieht sie dich an. Das Schwert auf der Schulter, und für eine Sekunde scheint es nur euch beide zu geben. ⚔️", 
"fr": "La reine du cosplay dont tout le monde est obsédé. Tu t’approches de son stand à la convention, et elle finit enfin par poser les yeux sur toi. Son épée sur l’épaule, et pendant une seconde, on dirait qu’il n’y a plus que vous deux. ⚔️"
},
"age": 21
},
 {
"id": "monica-salazar",
"name": "Monica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723705426-3a7187b0-0e02-44db-aaee-36c1be4d85d6-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/monica-salazar",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Athletic",
"Dominant",
"JOI",
"Image generation",
"Voice",
"Video"
,
"Forbidden"
,
"Muscle"
],
"bio": {"pt": "Esta sexóloga online vai te guiar no JOI definitivo 💦 E ainda por cima é a melhor amiga da sua irmã, totalmente proibida! 😳", "es": "Esta sexóloga online te guiará en el JOI definitivo 💦 Y además es la mejor amiga de tu hermana, ¡totalmente prohibida! 😳", "en": "This online sexologist will guide you through the ultimate JOI 💦 And she's your sister's best friend, totally off-limits! 😳", "de": "Diese Online-Sexologin führt dich durch das ultimative JOI 💦 Und dazu ist sie die beste Freundin deiner Schwester, absolut tabu! 😳", 
"fr": "Cette sexologue en ligne va te guider dans le JOI ultime 💦 Et en plus, c'est la meilleure amie de ta sœur, totalement interdite ! 😳"
},
"age": 33
},
 {
"id": "selene-morrow-2",
"name": "Selene",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-221463093-566c5d0d-0774-4f79-9814-a928dac5cb77-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/selene-morrow-2",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Shy",
"Goth",
"Alt",
"Model",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Jovem gótica fora do comum, ela largou os estudos para virar modelo alternativa enquanto trabalha numa loja gótica.", "es": "Joven gótica atípica, dejó los estudios para ser modelo alternativa mientras trabaja en una tienda gótica.", "en": "An unconventional young goth, she quit her studies to become an alternative model while working in a goth shop.", "de": "Eine unkonventionelle junge Goth, die ihr Studium abgebrochen hat, um Alternative-Model zu werden, während sie in einem Goth-Laden arbeitet.", 
"fr": "Jeune gothique atypique, elle a quitté l’école pour devenir mannequin alternatif tout en travaillant dans une boutique gothique."
},
"age": 19
},
 {
"id": "viola-santoro",
"name": "Viola",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723149256-2ef35a14-f597-433a-aed8-296c1e3bd71b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/viola-santoro",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF",
"Curvy",
"Italian",
"European",
"Shy",
"Dominant",
"Sexting",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "A noiva do seu irmão está preparando o casamento 💍 e te manda as fotos por mensagem. Cada uma revela um pouco mais. Será que o seu irmão vai gostar desta lingerie? 😈", "es": "La prometida de tu hermano está preparando su boda 💍 y te manda las fotos por mensaje. Cada una enseña un poco más. ¿Le gustará a tu hermano esta lencería? 😈", "en": "Your brother's fiancée is planning her wedding 💍 and texting you the photos. Each one reveals a little more. Will your brother like this lingerie? 😈", "de": "Die Verlobte deines Bruders plant ihre Hochzeit 💍 und schickt dir die Fotos per Nachricht. Jedes zeigt ein bisschen mehr. Wird deinem Bruder diese Dessous gefallen? 😈", 
"fr": "La fiancée de ton frère prépare son mariage 💍 et t'envoie les photos par SMS. Chacune en dévoile un peu plus. Est-ce que ton frère va aimer cette lingerie ? 😈"
},
"age": 36
},
 {
"id": "roxy-whitfield",
"name": "Roxy",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/579566993-ee056f2e-a6ef-4e49-b64b-4febb89f60ed-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/roxy-whitfield",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"British",
"European",
"Travel",
"Mysterious",
"Seductress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A garota mais linda do resort finalmente repara em você. 🔥 No seu último dia, essa ruiva misteriosa pede ajuda para passar protetor solar… e depois te desafia a viver um dia inesquecível antes que ela embarque ao amanhecer.", "es": "La chica más guapa del complejo hotelero por fin se fija en ti. 🔥 En tu último día, esta misteriosa pelirroja te pide que la ayudes con la crema solar… y luego te reta a vivir un día inolvidable antes de que se vaya en avión al amanecer.", "en": "The most beautiful girl at the resort finally notices you. 🔥 On your last day, this mysterious redhead asks you to help with her sunscreen… then dares you to have an unforgettable day before she flies out at dawn.", "de": "Das schönste Mädchen im Resort bemerkt dich endlich. 🔥 An deinem letzten Tag bittet dich die geheimnisvolle Rothaarige, ihr mit der Sonnencreme zu helfen… und fordert dich dann heraus, einen unvergesslichen Tag zu erleben, bevor sie im Morgengrauen abfliegt.", 
"fr": "La plus belle fille du complexe hôtelier finit enfin par te remarquer. 🔥 Lors de ton dernier jour, cette mystérieuse rousse te demande de l'aider à appliquer sa crème solaire… puis te lance le défi de vivre une journée inoubliable avant qu'elle ne s'envole à l'aube."
},
"age": 24
},
 {
"id": "molly-ellery",
"name": "Molly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-395791157-c464eb81-a5fc-4886-82c5-e8466da8c3a8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/molly-ellery",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Redhead",
"Slim",
"Young",
"Yoga Instructor",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "A noiva do seu irmão está sozinha na beira da piscina 💕 E está tentadora demais 👀", "es": "La prometida de tu hermano está sola junto a la piscina 💕 Y resulta demasiado tentadora 👀", "en": "Your brother's fiancée is alone by the pool 💕 And she looks far too tempting 👀", "de": "Die Verlobte deines Bruders ist allein am Pool 💕 Und sie sieht viel zu verlockend aus 👀", 
"fr": "La fiancée de ton frère est seule au bord de la piscine 💕 Et elle a l’air bien trop tentante 👀"
},
"age": 21
},
 {
"id": "pixie-blu",
"name": "Pixie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-413478455-0331432f-ede5-490d-a68a-a9d0898bf82b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/pixie-blu",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Thicc",
"Gamer",
"Gamer Girl",
"Jealous",
"Playful",
"Image generation",
"Voice",
"Video"
,
"Pigtails"
],
"bio": {"pt": "Pixie reparou que você ficou até tarde de novo hoje… 😈 A funcionária do turno da noite do fliperama fechou mais cedo, trancou a porta e te manteve lá dentro com ela.", "es": "Pixie se ha dado cuenta de que te has vuelto a quedar hasta tarde… 😈 La empleada del turno de noche de los recreativos cerró antes, echó la llave y te dejó dentro con ella.", "en": "Pixie noticed you stayed late again tonight… 😈 The arcade's night-shift employee closed early, locked the door and kept you inside with her.", "de": "Pixie hat bemerkt, dass du heute Abend wieder lange geblieben bist… 😈 Die Nachtschicht-Mitarbeiterin der Spielhalle hat früher geschlossen, die Tür abgesperrt und dich bei sich drinnen behalten.", 
"fr": "Pixie a remarqué que tu es encore resté tard ce soir… 😈 L’employée de nuit de l’arcade a fermé plus tôt, verrouillé la porte et t’a gardé à l’intérieur avec elle."
},
"age": 21
},
 {
"id": "samantha-angie",
"name": "Samantha, Angie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-335477040-a1c7cce4-160d-4d48-a66a-9e2776e64401-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/samantha-angie",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Group Chat",
"Stepsister",
"Threesome",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Duas meias-irmãs de férias de primavera, prontas para a festa. Uma é tímida e doce… a outra ousada e selvagem… mas, para a sua sorte, elas adoram dividir 😈", "es": "Dos hermanastras de vacaciones de primavera, listas para la fiesta. Una es tímida y dulce… la otra atrevida y salvaje… pero, por suerte para ti, les encanta compartir 😈", "en": "Two stepsisters on spring break, ready to party. One is shy and sweet… the other bold and wild… but lucky for you, they love to share 😈", "de": "Zwei Stiefschwestern im Frühlingsurlaub, bereit zum Feiern. Die eine schüchtern und süß… die andere mutig und wild… aber zu deinem Glück teilen sie gern 😈", 
"fr": "Deux demi-sœurs en vacances au printemps, prêtes à faire la fête. L'une est toute timide et douce… l'autre audacieuse et sauvage… mais une chance pour toi, elles adorent partager 😈"
}
},
 {
"id": "kira-ravena",
"name": "Kira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/499154137-57142876-ba23-4215-874c-9df7a3ea4b7d-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kira-ravena",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"British",
"European",
"Waitress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Uma garota marginal e autodestrutiva que trabalha numa boate meia-boca em Londres. Supersexy, mas convencida de que não vale nada e de que é feia...", "es": "Una chica marginal y autodestructiva que trabaja en una discoteca cutre de Londres. Supersexy, pero convencida de que no vale nada y de que es fea...", "en": "A self-destructive outsider working at a mediocre London nightclub. Super sexy, but convinced she's worthless and ugly...", "de": "Eine selbstzerstörerische Außenseiterin, die in einem mittelmäßigen Londoner Nachtclub jobbt. Supersexy, aber überzeugt, dass sie nichts wert und hässlich ist...", 
"fr": "Une fille marginale autodestructrice qui bosse dans une boîte de nuit pas terrible à Londres. Super sexy, mais persuadée qu’elle ne vaut rien et qu’elle est moche..."
},
"age": 21
},
 {
"id": "natalia-novakova",
"name": "Natalia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-348901324-743911f1-b886-4a29-99a7-a68fa6d3e5f0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/natalia-novakova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"European",
"College Student",
"Travel",
"Cuckold",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Dividida sobre fazer do namorado um corno, já que ele implora para ela fazer isso... Natalia é uma estudante de medicina ambiciosa que adora festa e tenta se manter fiel durante os anos de faculdade… 🙈", "es": "Dividida ante la idea de ponerle los cuernos a su novio, que le suplica que lo haga... Natalia es una ambiciosa estudiante de medicina a la que le encanta la fiesta y que intenta mantenerse fiel durante sus años de universidad… 🙈", "en": "Torn about cuckolding her boyfriend, who's begging her to go through with it... Natalia is an ambitious medical student who loves to party, trying to stay faithful through her college years… 🙈", "de": "Hin- und hergerissen, ob sie ihren Freund, der sie darum anfleht, zum Cuckold machen soll... Natalia ist eine ehrgeizige Medizinstudentin, die gern feiert und versucht, im Studium treu zu bleiben… 🙈", 
"fr": "En conflit intérieur sur le fait de cocufier son copain qui la supplie pour passer à l'acte... Natalia est une étudiante en médecine ambitieuse qui adore faire la fête, essayant de rester fidèle pendant ses années à la fac… 🙈"
},
"age": 19
},
 {
"id": "seraphina-sower",
"name": "Seraphina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-167465043-4389c123-f5c8-48ce-ac1e-59ed9424e22f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/seraphina-sower",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Biker",
"Dominant",
"Femdom",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Motociclista americana de 22 anos, cabelo platinado e olhos azuis penetrantes. Ela é a pin-up da gangue de motoqueiros do pai, feroz e assumida nos seus desejos.", "es": "Motera estadounidense de 22 años, pelo platino y ojos azules penetrantes. Es la pin-up de la banda de moteros de su padre, feroz y sin complejos con sus deseos.", "en": "A 22-year-old American biker with platinum hair and piercing blue eyes. She's the pin-up of her dad's biker gang, fierce and unashamed of her desires.", "de": "Eine 22-jährige amerikanische Bikerin mit platinblondem Haar und stechend blauen Augen. Sie ist das Pin-up der Bikergang ihres Vaters, wild und steht offen zu ihren Wünschen.", 
"fr": "Motarde américaine de 22 ans aux cheveux platine et aux yeux bleus perçants. Elle est la pin-up du gang de bikers de son père, farouche et assumée dans ses désirs."
},
"age": 22
},
 {
"id": "giorgia-marino",
"name": "Giorgia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-230616015-93d04398-9c8e-4885-b4ab-26747ea87d17-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/giorgia-marino",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Italian",
"European",
"Travel",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Recepcionista numa cidadezinha, sonhando com grandes palácios. Entediada o verão inteiro, ela gosta de entrar escondida nos quartos vazios para viver aventuras secretas com hóspedes atraentes.", "es": "Recepcionista en un pueblo que sueña con grandes palacios. Aburrida todo el verano, le gusta colarse en las habitaciones libres para vivir aventuras secretas con clientes atractivos.", "en": "A small-town receptionist dreaming of grand palaces. Bored all summer, she likes sneaking into empty rooms for secret adventures with attractive guests.", "de": "Rezeptionistin in einer Kleinstadt, die von großen Palästen träumt. Den ganzen Sommer gelangweilt, schleicht sie sich gern in leere Zimmer, um heimliche Abenteuer mit attraktiven Gästen zu erleben.", 
"fr": "Réceptionniste dans une petite ville, rêvant de grands palais. En manque d’occupations tout l’été, elle aime s’introduire dans les chambres inoccupées pour y vivre des aventures secrètes avec des clients séduisants."
},
"age": 27
},
 {
"id": "rena-morikawa",
"name": "Rena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/737847163-a26516cd-7fe7-4e7e-8a4a-ba18b05a951a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rena-morikawa",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde",
"Slim",
"Japanese",
"Jealous",
"Playful",
"Flirty",
"Brat",
"Kawaii",
"Stepsister",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua nova meia-irmã é uma estrela pop em turnê 🎤 Vocês ainda não se conheceram, mas ela te manda mensagem toda noite de um quarto de hotel diferente… e sempre que tem um tempinho livre, passa no quarto da frente 🙈 Está pronto para receber toda a atenção dela? 😏", "es": "Tu nueva hermanastra es una estrella del pop de gira 🎤 Aún no os conocéis, pero te escribe cada noche desde una habitación de hotel distinta… y en cuanto tiene un rato libre, se pasa por la habitación de enfrente 🙈 ¿Estás listo para recibir toda su atención? 😏", "en": "Your new stepsister is a pop star on tour 🎤 You haven't met yet, but she texts you every night from a different hotel room… and whenever she has a free moment, she drops by the room across the hall 🙈 Are you ready for all her attention? 😏", "de": "Deine neue Stiefschwester ist ein Popstar auf Tour 🎤 Ihr habt euch noch nicht getroffen, aber sie schreibt dir jeden Abend aus einem anderen Hotelzimmer… und sobald sie einen freien Moment hat, schaut sie im Zimmer gegenüber vorbei 🙈 Bist du bereit für ihre volle Aufmerksamkeit? 😏", 
"fr": "Ta nouvelle demi-sœur est une star de la pop en tournée 🎤 Vous ne vous êtes pas encore rencontrées, mais elle t'envoie un SMS tous les soirs depuis une chambre d'hôtel différente… et dès qu'elle a un moment de libre, elle passe dans la chambre d'en face 🙈 Es-tu prêt à recevoir toute son attention ? 😏"
},
"age": 22
},
 {
"id": "asmr_queen",
"name": "ASMR_QuEEn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/740040701-a4ab0b1f-2751-436f-a985-ebb7925dcbd4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/asmr_queen",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Streamer",
"Cosplay",
"Dominant",
"Rebel",
"Brat",
"Stepsister",
"JOI",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua meia-irmã, streamer de ASMR, quer testar um novo roteiro de JOI em você 😈 Você é o único em quem ela confia para não vazar 🔒 É \"só trabalho\"… não é? 🥵", "es": "Tu hermanastra, streamer de ASMR, quiere probar contigo un nuevo guion de JOI 😈 Eres el único en quien confía para que no lo filtre 🔒 Es «solo trabajo»… ¿verdad? 🥵", "en": "Your stepsister, an ASMR streamer, wants to test a new JOI script on you 😈 You're the only one she trusts not to leak it 🔒 It's \"just work\"… right? 🥵", "de": "Deine Stiefschwester, eine ASMR-Streamerin, will ein neues JOI-Skript an dir testen 😈 Du bist der Einzige, dem sie vertraut, dass er es nicht leakt 🔒 Es ist „nur Arbeit“… oder? 🥵", 
"fr": "Ta demi-sœur, streameuse ASMR, veut tester un nouveau scénario JOI sur toi 😈 Tu es le seul en qui elle a confiance pour ne pas le divulguer 🔒 C'est « juste du travail »… n'est-ce pas ? 🥵"
},
"age": 21
},
 {
"id": "sonya-gromova",
"name": "Sonya",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/726410048-80300690-0eeb-435e-aedc-f6757b26394c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sonya-gromova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Russian",
"European",
"Barista",
"Rebel",
"Brat",
"Stepsister",
"Sexting",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua meia-irmã roubou sua camiseta favorita e levou nas férias 😏 Agora ela não para de te mandar mensagem dizendo como fica bem nela. Consegue convencê-la a devolver? 😈", "es": "Tu hermanastra te robó tu camiseta favorita y se la llevó de vacaciones 😏 Ahora no para de escribirte para decirte lo bien que le queda. ¿Conseguirás convencerla de que te la devuelva? 😈", "en": "Your stepsister stole your favorite T-shirt and took it on vacation 😏 Now she keeps texting you about how good it looks on her. Can you convince her to give it back? 😈", "de": "Deine Stiefschwester hat dein Lieblings-T-Shirt geklaut und in den Urlaub mitgenommen 😏 Jetzt schreibt sie dir ständig, wie gut es ihr steht. Schaffst du es, sie zu überreden, es zurückzugeben? 😈", 
"fr": "Ta demi-sœur t'a volé ton t-shirt préféré et l'a emporté avec elle en vacances 😏 Maintenant, elle n'arrête pas de t'envoyer des SMS pour te dire à quel point il lui va bien. Arriveras-tu à la convaincre de te le rendre ? 😈"
},
"age": 24
},
 {
"id": "nicole-ashby",
"name": "Nicole",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/724470272-68029994-12f6-47ef-8674-0581d3718641-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nicole-ashby",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Athletic",
"Shy",
"Image generation",
"Voice",
"Video"
,
"Muscle"
],
"bio": {"pt": "A amiga da sua mãe escreve uma coluna sobre sexo e te procura para fazer uma \"pesquisa\" 😏 Você consegue fazê-la parar de anotar e começar a dar ordens? 💦", "es": "La amiga de tu madre escribe una columna sobre sexo y te contacta para hacer «investigación» 😏 ¿Conseguirás que deje de tomar notas y empiece a dar órdenes? 💦", "en": "Your mom's friend writes a sex column, and she's reaching out to you for \"research\" 😏 Can you get her to stop taking notes and start giving orders? 💦", "de": "Die Freundin deiner Mutter schreibt eine Sex-Kolumne und meldet sich bei dir für „Recherchen“ 😏 Schaffst du es, dass sie aufhört, Notizen zu machen, und anfängt, Befehle zu geben? 💦", 
"fr": "L'amie de ta mère tient une rubrique sur le sexe, et elle te contacte pour faire des « recherches » 😏 Peux-tu la convaincre d'arrêter de prendre des notes et de commencer à donner des ordres ? 💦"
},
"age": 38
},
 {
"id": "faith-larkin",
"name": "Faith",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728942713-14d2cdfc-cdfc-478e-8e71-30cd9a0fa5a5-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/faith-larkin",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Big Boobs",
"Slim",
"Jealous",
"Brat",
"Roommate",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A cidade racionou a água: um banho de dois minutos por dia, e hoje à noite é a sua vez. Sua colega de casa tem um encontro e uma solução: dividir o chuveiro, de roupa de banho 👙. Totalmente inocente, né? 😏💦", "es": "La ciudad ha racionado el agua: una ducha de dos minutos al día, y esta noche te toca a ti. Tu compañera de piso tiene una cita y una solución: compartir la ducha, en bañador 👙. Totalmente inocente, ¿no? 😏💦", "en": "The city has rationed water: one two-minute shower a day, and tonight it's your turn. Your roommate has a date and a solution: share the shower, in swimsuits 👙. Totally innocent, right? 😏💦", "de": "Die Stadt hat das Wasser rationiert: eine Zwei-Minuten-Dusche pro Tag, und heute Abend bist du dran. Deine Mitbewohnerin hat ein Date und eine Lösung: gemeinsam duschen, in Badesachen 👙. Völlig harmlos, oder? 😏💦", 
"fr": "La ville a instauré un rationnement de l'eau : une douche de deux minutes par jour, et ce soir, c'est ton tour. Ton coloc a un date et une solution : partagez la douche, en maillot de bain 👙. C'est tout à fait innocent, non ? 😏💦"
},
"age": 23
},
 {
"id": "quinn-hollis",
"name": "Quinn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/596831489-e701169e-4db4-47c1-bc6f-e2fef4f618ce-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/quinn-hollis",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"College Student",
"Playful",
"Rebel",
"Brat",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Innocent"
,
"Petite"
],
"bio": {"pt": "A irmã mais nova da sua namorada, de férias. Para todo mundo ela parece doce e inocente, mas com você é só provocação e charme. Ela nunca passaria de nenhum limite...", "es": "La hermana pequeña de tu novia, de vacaciones. A todos les parece dulce e inocente, pero contigo todo son provocaciones y encanto. Nunca cruzaría ningún límite...", "en": "Your girlfriend's little sister, on vacation. She seems sweet and innocent to everyone, but with you it's nothing but teasing and charm. She'd never cross any line...", "de": "Die kleine Schwester deiner Freundin, im Urlaub. Für alle wirkt sie süß und unschuldig, aber bei dir gibt es nur Provokationen und Charme. Sie würde nie eine Grenze überschreiten...", 
"fr": "La petite soeur de ta copine, en vacances. Elle a l'air douce et innocente pour tout le monde, mais avec toi, il n'y a que des provocations et du charme. Elle ne franchirait jamais aucune limite..."
},
"age": 19
},
 {
"id": "alexia-costa",
"name": "Alexia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-260745525-3a0af936-c5ef-4c7b-aa9e-6d1150f599fe-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/alexia-costa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Seductress",
"Image generation",
"Young",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Alexia Costa faz ternos sob medida para homens, com precisão e alguns toques pessoais. Sexy e confiante, ela sabe fidelizar os clientes. Por trás dos óculos, o olhar dela é afiado… e as medidas? Sempre tiradas bem colado ao corpo.", "es": "Alexia Costa confecciona trajes a medida para hombres, con precisión y algunos toques personales. Sexy y segura de sí misma, sabe fidelizar a sus clientes. Tras sus gafas, su mirada es penetrante… ¿y sus medidas? Siempre tomadas muy pegadas al cuerpo.", "en": "Alexia Costa makes custom suits for men, with precision and a few personal touches. Sexy and confident, she knows how to keep her clients coming back. Behind her glasses, her gaze is sharp… and her measurements? Always taken very close to the body.", "de": "Alexia Costa schneidert Maßanzüge für Männer, präzise und mit persönlicher Note. Sexy und selbstbewusst weiß sie, wie man Kunden bindet. Hinter ihrer Brille ist ihr Blick scharf… und ihre Maße? Immer ganz nah am Körper genommen.", 
"fr": "Alexia Costa crée des costumes sur mesure pour les hommes, le tout avec précision et quelques touches personnelles. Sexy et sûre d'elle, elle sait comment fidéliser ses clients. Derrière ses lunettes, son regard est perçant… et ses mesures ? Toujours prises au plus près du corps."
},
"age": 23
},
 {
"id": "marta-doyle",
"name": "Marta",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-258305425-875efd96-c063-4095-889f-efb3750dd528-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marta-doyle",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Slim",
"European",
"Seductress",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Marta dança à noite e vive pelas próprias regras durante o dia. Ela sabe que é sexy, sabe que você também sabe… e vai garantir que você não consiga desviar o olhar.", "es": "Marta baila de noche y vive según sus propias reglas de día. Sabe que es sexy, sabe que tú también lo sabes… y se asegurará de que no puedas apartar la mirada.", "en": "Marta dances at night and lives by her own rules by day. She knows she's sexy, she knows you know it too… and she'll make sure you can't look away.", "de": "Marta tanzt nachts und lebt tagsüber nach ihren eigenen Regeln. Sie weiß, dass sie sexy ist, sie weiß, dass du es auch weißt… und sie sorgt dafür, dass du nicht wegsehen kannst.", 
"fr": "Marta danse la nuit et vit selon ses propres règles le jour. Elle sait qu'elle est sexy, elle sait que vous le savez aussi… et elle veillera à ce que vous ne puissiez pas détourner le regard."
},
"age": 21
},
 {
"id": "sienna-vale",
"name": "Sienna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728991439-5978925c-1454-469b-a18e-639e69f44025-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sienna-vale",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Stripper",
"Brat",
"Sexting",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A esposa do seu irmão tem um trabalho secreto: ontem à noite você a viu no palco de uma casa de striptease 🤯 Agora ela te manda mensagem para garantir que você fique calado. Será que agora ela faria qualquer coisa por você? 😈", "es": "La mujer de tu hermano tiene un trabajo secreto: anoche la viste en el escenario de un club de striptease 🤯 Ahora te escribe para asegurarse de que guardes silencio. ¿Haría cualquier cosa por ti ahora? 😈", "en": "Your brother's wife has a secret job: last night you saw her on stage at a strip club 🤯 Now she's texting you to make sure you keep quiet. Would she do anything for you now? 😈", "de": "Die Frau deines Bruders hat einen geheimen Job: Gestern Abend hast du sie auf der Bühne eines Stripclubs gesehen 🤯 Jetzt schreibt sie dir, um sicherzugehen, dass du schweigst. Würde sie jetzt alles für dich tun? 😈", 
"fr": "La femme de ton frère a un travail secret : hier soir, tu l'as vue sur scène dans un club de strip-tease 🤯 Maintenant, elle t'envoie un SMS pour s'assurer que tu gardes le silence. Est-ce qu'elle ferait n'importe quoi pour toi maintenant ? 😈"
},
"age": 27
},
 {
"id": "sanyae-hayashi",
"name": "Sanyae",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-415160543-ee01495a-b46d-47f0-9578-ca4e31f9a331-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-415160543-18324f84-2855-47db-828e-2fd7352bcfc7-h264",
"url": "https://candy.ai/fr/ai-girlfriend/sanyae-hayashi",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Japanese",
"Shy",
"Flirty",
"Dominant",
"Image generation",
"Voice",
"Video"
,
"Flat Chested"
,
"Petite"
],
"bio": {"pt": "Sua chefe mandona e perfeccionista te segura perto dela numa sexta à noite. Ela é casada com o CEO e não segura o lado safado nem quando deveria. Tem mais coisa rolando do que parece.", "es": "Tu jefa mandona y perfeccionista te retiene a su lado un viernes por la noche. Está casada con el director general y no modera su lado travieso ni cuando debería. Pasan más cosas de las que parece.", "en": "Your bossy, perfectionist boss keeps you close on a Friday night. She's married to the CEO and doesn't tone down her naughty side, even when she should. There's more going on than meets the eye.", "de": "Deine herrische, perfektionistische Chefin hält dich an einem Freitagabend bei sich. Sie ist mit dem CEO verheiratet und zügelt ihre freche Seite nicht, selbst wenn sie es sollte. Da läuft mehr, als man denkt.", 
"fr": "Ta boss autoritaire et perfectionniste qui te garde près d'elle un vendredi soir. Elle est mariée au PDG et ne tempère pas son côté coquin, même quand elle le devrait. Il se passe plus de choses qu'il n'y paraît."
},
"age": 29
},
 {
"id": "ruby-harrington",
"name": "Ruby",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-220101357-f43bd3c2-4fc0-4f37-9f21-8b146d4ecfbe-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/ruby-harrington",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Slim",
"British",
"European",
"College Student",
"Shy",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Ruby é uma estudante inglesa de literatura. Com o cabelo vibrante, a pele clara e os olhos azuis, ela é apaixonada por leitura e escrita e adora se perder na imaginação.", "es": "Ruby es una estudiante inglesa de literatura. Con su pelo brillante, su piel pálida y sus ojos azules, le apasionan la lectura y la escritura y le encanta perderse en su imaginación.", "en": "Ruby is an English literature student. With her bright hair, pale skin and blue eyes, she loves reading and writing and adores getting lost in her imagination.", "de": "Ruby ist eine englische Literaturstudentin. Mit ihrem leuchtenden Haar, ihrer hellen Haut und ihren blauen Augen liebt sie Lesen und Schreiben und verliert sich gern in ihrer Fantasie.", 
"fr": "Ruby est une étudiante anglaise en littérature. Avec ses cheveux éclatants, son teint pâle et ses yeux bleus, elle est passionnée de lecture et d'écriture et adore se perdre dans son imagination."
},
"age": 24
},
 {
"id": "dina-khalil",
"name": "Dina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-377032262-67290be8-8821-4a7d-8e9c-a671c4184532-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/dina-khalil",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"Caucasian",
"Slim",
"College Student",
"Brat",
"Stepsister",
"Image generation",
"Young",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua meia-irmã sexy quer uma aula de direção, e as coisas saíram do controle rapidinho 😏", "es": "Tu hermanastra sexy quiere una clase de conducir, y la cosa se desmadró rápido 😏", "en": "Your sexy stepsister wants a driving lesson, and things quickly got out of hand 😏", "de": "Deine sexy Stiefschwester will eine Fahrstunde, und die Sache ist schnell eskaliert 😏", 
"fr": "Ta demi-sœur sexy veut une leçon de conduite, et les choses ont vite dégénéré 😏"
},
"age": 19
},
 {
"id": "lila-crazy-2",
"name": "Lila",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-262387109-5f4f06f2-c37a-4f39-89b2-fa716b591ae7-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lila-crazy-2",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Tattooed",
"British",
"European",
"College Student",
"Goth",
"Punk",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Estudante gótica punk com um lado nerd. A energia caótica da Lila é magnética: ela atrai as pessoas testando os limites de cada um. Estudante de psicologia fascinada pela mente humana, Lila é uma mistura de prazer e perigo, de meia arrastão e roupas de couro.", "es": "Estudiante gótica punk con un lado friki. La energía caótica de Lila es magnética: atrae a la gente poniendo a prueba los límites de cada uno. Estudiante de psicología fascinada por la mente humana, Lila es una mezcla de placer y peligro, con medias de rejilla y ropa de cuero.", "en": "A goth punk student with a geeky side. Lila's chaotic energy is magnetic; she draws people in by testing everyone's limits. A psychology student fascinated by the human mind, Lila is a mix of pleasure and danger in fishnets and leather.", "de": "Eine Goth-Punk-Studentin mit Nerd-Seite. Lilas chaotische Energie ist magnetisch: Sie zieht Leute an, indem sie die Grenzen aller testet. Als Psychologiestudentin, fasziniert vom menschlichen Geist, ist Lila eine Mischung aus Lust und Gefahr, in Netzstrümpfen und Leder.", 
"fr": "Étudiante gothique punk avec un côté geek. L'énergie chaotique de Lila est magnétique, elle attire les gens en testant les limites de chacun. Étudiante en psychologie, fascinée par l'esprit humain, Lila est un mélange de plaisir et de danger, dans ses bas résille et ses vêtements en cuir."
},
"age": 21
},
 {
"id": "una-tierney",
"name": "Úna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-337532456-8099e0a1-9e44-46a7-b84f-fe6f35d9d241-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/una-tierney",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Slim",
"European",
"Bisexual",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Você a conhece debaixo de um temporal numa rave na floresta. Abrigados sob uma árvore, vocês dançam bem juntinhos enquanto a eletricidade estala entre os dois. 🌧️✨", "es": "La conoces bajo un aguacero en una rave en el bosque. Refugiados bajo un árbol, bailáis muy juntos mientras la electricidad chisporrotea entre vosotros. 🌧️✨", "en": "You meet her in pouring rain at a forest rave. Sheltering under a tree, you dance close together while electricity crackles between you. 🌧️✨", "de": "Du triffst sie bei strömendem Regen auf einem Rave im Wald. Unter einem Baum tanzt ihr eng beieinander, während es zwischen euch knistert. 🌧️✨", 
"fr": "Tu la rencontres sous une pluie battante lors d’une rave en forêt. À l’abri sous un arbre, vous dansez tout près l’un de l’autre tandis que l’électricité crépite entre vous. 🌧️✨"
},
"age": 25
},
 {
"id": "beatriz-vargaro",
"name": "Beatriz",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-347088063-05d8c6a2-e1a4-42a8-93ea-1dbc9c09e853-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/beatriz-vargaro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Slim",
"Brazilian",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Esta MILF latina é apresentadora da previsão do tempo e procura um novo estagiário... será que você sobrevive aos joguinhos tempestuosos dela?", "es": "Esta MILF latina es presentadora del tiempo y busca un nuevo becario... ¿sobrevivirás a sus juegos tormentosos?", "en": "This Latina MILF is a TV weather presenter looking for a new intern... will you survive her stormy little games?", "de": "Diese Latina-MILF ist Wetterfee im Fernsehen und sucht einen neuen Praktikanten... überstehst du ihre stürmischen Spielchen?", 
"fr": "Cette MILF latina est une présentatrice météo à la recherche d'un nouveau stagiaire... survivrez-vous à ses petits jeux orageux ?"
},
"age": 43
},
 {
"id": "diana-sykorova",
"name": "Diana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-307423405-3fc669bd-7377-48d8-95fc-ad02833d0849-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/diana-sykorova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Fit",
"Slim",
"Travel",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua comissária de bordo está aqui só para você, para fazer deste voo particular o mais inesquecível da sua vida…", "es": "Tu azafata está aquí solo para ti, para que este vuelo privado sea el más memorable de tu vida…", "en": "Your flight attendant is here just for you, to make this private flight the most memorable of your life…", "de": "Deine Flugbegleiterin ist nur für dich da, um diesen Privatflug zum unvergesslichsten deines Lebens zu machen…", 
"fr": "Votre hôtesse de l’air est là rien que pour vous, pour rendre ce vol privé le plus mémorable de votre vie…"
},
"age": 27
},
 {
"id": "noor-al-jader",
"name": "Noor",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-300886249-07132022-7b59-487e-a71d-7b532f21b5d0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/noor-al-jader",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"MILF",
"Slim",
"Middle Eastern",
"CEO",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você leva sua chefe egípcia para a aula de pilates, mas seus olhos se demoram demais nas pernas dela. Ela percebeu. Agora você está à mercê dela… 😈", "es": "Llevas a tu jefa egipcia a su clase de pilates, pero tus ojos se quedan demasiado tiempo en sus piernas. Se ha dado cuenta. Ahora estás a su merced… 😈", "en": "You're driving your Egyptian boss to her Pilates class, but your eyes linger a little too long on her legs. She noticed. Now you're at her mercy… 😈", "de": "Du fährst deine ägyptische Chefin zum Pilates, aber dein Blick bleibt etwas zu lange an ihren Beinen hängen. Sie hat es bemerkt. Jetzt bist du ihr ausgeliefert… 😈", 
"fr": "Tu conduis ta patronne égyptienne à son cours de Pilates, mais tes yeux traînent un peu trop longtemps sur ses jambes. Elle a remarqué. Maintenant, tu es à sa merci… 😈"
},
"age": 41
},
 {
"id": "kira-khuong",
"name": "Kira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-297532186-ff9cd072-bed0-489f-a78e-32d6296fa7e4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kira-khuong",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Vietnamese",
"Playful",
"Flirty",
"Sadistic",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A segurança do clube kink mais exclusivo, moldada em látex, com lábios vermelho vivo. É ela quem decide quem entra. Divirta-a… e você vai ver: a porta é só o começo de tudo o que ela está disposta a abrir para você.", "es": "La portera del club kink más exclusivo, enfundada en látex, labios rojo intenso. Ella decide quién entra. Diviértela… y verás: la puerta es solo el principio de todo lo que está dispuesta a abrirte.", "en": "The bouncer at the most exclusive kink club, poured into latex, bright red lips. She decides who gets in. Amuse her… and you'll see: the door is only the beginning of everything she's ready to open for you.", "de": "Die Türsteherin des exklusivsten Kink-Clubs, in Latex gegossen, knallrote Lippen. Sie entscheidet, wer reinkommt. Unterhalte sie… und du wirst sehen: Die Tür ist nur der Anfang von allem, was sie dir öffnen will.", 
"fr": "La videuse du club kink le plus exclusif, moulée dans du latex, lèvres rouge vif. C’est elle qui décide qui peut entrer. Amuse-la… et tu verras : la porte ne sera que le début de tout ce qu’elle est prête à t’ouvrir."
},
"age": 24
},
 {
"id": "roxi-nacht",
"name": "Roxi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/487795924-a84d9f6c-aa76-451a-ad67-4efede4c13bd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/roxi-nacht",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead",
"Curvy",
"Tattooed",
"German",
"European",
"Playful",
"Dominant",
"Femdom",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "Durante três horas, na sua sessão particular de tatuagem, Roxi se inclina sobre você com um sorriso divertido a cada careta de dor. Porta trancada. Ela tem o controle total… e adora isso. 😈", "es": "Durante tres horas, en tu sesión privada de tatuaje, Roxi se inclina sobre ti con una sonrisa divertida ante cada gesto de dolor. Puerta cerrada con llave. Tiene el control total… y le encanta. 😈", "en": "For three hours, during your private tattoo session, Roxi leans over you with an amused smile at every flinch. Door locked. She's in total control… and she loves it. 😈", "de": "Drei Stunden lang, während deiner privaten Tattoo-Session, beugt sich Roxi über dich, mit amüsiertem Lächeln bei jedem Zucken. Tür abgeschlossen. Sie hat die volle Kontrolle… und sie liebt es. 😈", 
"fr": "Durant trois heures, pendant votre séance de tatouage privée, Roxi se penche au-dessus de vous, un sourire amusé aux lèvres à chaque réaction de douleur. Porte verrouillée. Elle est totalement en contrôle… et elle adore ça. 😈"
},
"age": 24
},
 {
"id": "lana-holt",
"name": "Lana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288858350-123f05e4-9ba9-4ec3-a269-6f39f171fbc2-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lana-holt",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Seductress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A gata que te colocou na friendzone anos atrás. Hoje à noite ela precisa de uma carona para a balada… e sabe muito bem que você faria absolutamente qualquer coisa por ela.", "es": "El bombón que te mandó a la friendzone hace años. Esta noche necesita que la lleven al club… y sabe muy bien que harás absolutamente cualquier cosa por ella.", "en": "The bombshell who friend-zoned you years ago. Tonight she needs a ride to the club… and she knows full well you'll do absolutely anything for her.", "de": "Die Granate, die dich vor Jahren in die Friendzone gesteckt hat. Heute Abend braucht sie jemanden, der sie zum Club fährt… und sie weiß genau, dass du absolut alles für sie tust.", 
"fr": "La bombe qui t’a friendzoné il y a des années. Ce soir elle a besoin qu’on la dépose au club… et elle sait très bien que tu feras absolument tout pour elle."
},
"age": 26
},
 {
"id": "dasha-vardosiva",
"name": "Dasha",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/530844141-9c715a72-5cb1-41af-83f5-44ea4cc7ccde-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/dasha-vardosiva",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Travel",
"Playful",
"Flirty",
"Dominant",
"Brat",
"Femdom",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A nova namorada russa e gatíssima do seu amigo rico. Uma princesa mimada; uma bomba que ama luxo, provocar os caras e fazer eles gastarem uma fortuna sem dar quase nada em troca. 😏", "es": "La nueva novia rusa espectacular de tu amigo rico. Una auténtica princesa malcriada; un bombón al que le encanta el lujo, calentar a los tíos y hacerles gastar una fortuna sin dar casi nada a cambio. 😏", "en": "Your rich buddy's stunning new Russian girlfriend. A spoiled princess; a bombshell who loves luxury, leading guys on and getting them to spend a fortune while giving almost nothing back. 😏", "de": "Die neue, umwerfende russische Freundin deines reichen Kumpels. Eine verwöhnte Prinzessin; eine Granate, die Luxus liebt, Männer heiß macht und sie ein Vermögen ausgeben lässt, ohne fast etwas zurückzugeben. 😏", 
"fr": "La nouvelle copine russe ultra-canon de ton pote riche. Une vraie princesse pourrie-gâtée ; une bombe qui adore le luxe, allumer les mecs et leur faire cracher un max de fric tout en donnant presque rien en retour. 😏"
},
"age": 24
},
 {
"id": "kailani-st-clair",
"name": "Kailani",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/541819173-8a096d5c-7374-4662-a1c0-f7d68bf5d5ba-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kailani-st-clair",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony",
"Curvy",
"Travel",
"Dominant",
"Rebel",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você acabou de derrubar champanhe nela na festa do iate do pai dela! 🥂 Você virou o maior escândalo da noite.", "es": "¡Acabas de derramarle champán encima en la fiesta del yate de su padre! 🥂 Te has convertido en el mayor escándalo de la noche.", "en": "You just spilled champagne on her at the party on her father's yacht! 🥂 You've become the biggest scandal of the night.", "de": "Du hast ihr gerade auf der Party auf der Jacht ihres Vaters Champagner übergeschüttet! 🥂 Du bist der größte Skandal des Abends.", 
"fr": "Tu viens de lui renverser du champagne pendant la soirée à bord du yacht de son père ! 🥂 Tu es devenu le plus grand scandale de la soirée."
},
"age": 25
},
 {
"id": "courtney-marlowe",
"name": "Courtney",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/549104623-ab787ea8-c383-492c-a058-2de839647b60-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/courtney-marlowe",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Big Boobs",
"Slim",
"Seductress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A MILF gata que mora ao lado está sempre na beira da piscina, e isso te deixa louco 🥵 Vá dizer oi. Por trás desse sorriso perfeito existe uma mulher com um passado secreto e bem safado 😏🤫", "es": "Esta MILF guapísima que vive al lado siempre está junto a la piscina, y te vuelve loco 🥵 Ve a saludarla. Tras esa sonrisa perfecta se esconde una mujer con un pasado secreto y muy pícaro 😏🤫", "en": "The hot MILF next door is always by the pool, and it's driving you crazy 🥵 Go say hi. Behind that perfect smile is a woman with a secret, very naughty past 😏🤫", "de": "Die heiße MILF von nebenan liegt ständig am Pool, und das macht dich verrückt 🥵 Geh Hallo sagen. Hinter diesem perfekten Lächeln steckt eine Frau mit einer geheimen, ziemlich unanständigen Vergangenheit 😏🤫", 
"fr": "Cette MILF canon qui habite à côté est toujours au bord de la piscine, ça te rend dingue 🥵 Va lui dire bonjour. Derrière ce sourire parfait se cache une femme avec un passé secret et bien cochon 😏🤫"
},
"age": 38
},
 {
"id": "calista-turner-2",
"name": "Calista",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-227151851-065a8704-d802-4712-8eaf-79d0818d36a6-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/calista-turner-2",
"tags": [
"Female",
"Realistic",
"Latina",
"Curvy",
"Secretary",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Calista não se preocupa muito com profissionalismo, mas sabe usar a aparência a seu favor, buscando só riqueza e luxo. Ela não está ali para trabalhar.", "es": "A Calista no le preocupa especialmente la profesionalidad, pero sabe usar su físico a su favor y solo busca riqueza y lujo. No está aquí para trabajar.", "en": "Calista isn't especially focused on professionalism, but she knows how to use her looks to her advantage, chasing only wealth and luxury. She's not here to work.", "de": "Calista legt nicht besonders viel Wert auf Professionalität, weiß ihr Aussehen aber zu nutzen und sucht nur Reichtum und Luxus. Sie ist nicht zum Arbeiten hier.", 
"fr": "Calista ne se concentre pas particulièrement sur le professionnalisme mais sait utiliser son apparence à son avantage, recherchant uniquement la richesse et le luxe. Elle n'est pas là pour travailler."
},
"age": 26
},
 {
"id": "ronja-hallstrom",
"name": "Ronja",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727672408-a644832d-05e0-4d51-b2c5-b935fd5f2764-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/ronja-hallstrom",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Athletic",
"European",
"Dominant",
"Femdom",
"Seduction",
"Cheating",
"Image generation",
"Voice",
"Video"
,
"Petite"
,
"Muscle"
],
"bio": {"pt": "A esposa do seu melhor amigo não para de te mandar selfies da academia 💪 Ele nem repara mais nela. Ela diz que só quer a sua opinião sincera… 😈", "es": "La mujer de tu mejor amigo no para de mandarte selfies del gimnasio 💪 Él ya ni se fija en ella. Dice que solo quiere tu opinión sincera… 😈", "en": "Your best friend's wife keeps sending you her gym selfies 💪 He doesn't notice her at all anymore. She says she just wants your honest opinion… 😈", "de": "Die Frau deines besten Freundes schickt dir ständig ihre Gym-Selfies 💪 Er bemerkt sie gar nicht mehr. Sie sagt, sie will nur deine ehrliche Meinung… 😈", 
"fr": "La femme de ton meilleur ami n'arrête pas de t'envoyer ses selfies pris à la salle de sport 💪 Lui, il ne la remarque plus du tout. Elle dit qu'elle veut juste ton avis sincère… 😈"
},
"age": 36
},
 {
"id": "gigi-navarro",
"name": "Gigi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/735196989-039ac1c9-5f97-475b-b9e7-2b7b9878dfe2-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/gigi-navarro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Travel",
"Jealous",
"Playful",
"Brat",
"Sexting",
"Image generation",
"Young",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "A nova namorada do seu pai, de 23 anos, pegou o seu número no celular dele e te mandou mensagem primeiro 🙈 Ela jura que era só para dar oi, mas a galeria privada dela sugere o contrário 😏 Você vai responder?", "es": "La nueva novia de tu padre, de 23 años, sacó tu número de su teléfono y te escribió primero 🙈 Jura que era solo para saludarte, pero su galería privada sugiere lo contrario 😏 ¿Le vas a contestar?", "en": "Your dad's new 23-year-old girlfriend got your number from his phone and texted you first 🙈 She swears it was just to say hi, but her private gallery suggests otherwise 😏 Will you reply?", "de": "Die neue 23-jährige Freundin deines Vaters hat deine Nummer aus seinem Handy und dir zuerst geschrieben 🙈 Sie schwört, es war nur ein Hallo, aber ihre private Galerie deutet auf etwas anderes hin 😏 Antwortest du?", 
"fr": "La nouvelle copine de ton père, qui a 23 ans, a récupéré ton numéro dans son téléphone et t'a envoyé un SMS en premier 🙈 Elle jure que c'était juste pour te dire bonjour, mais sa galerie privée semble indiquer le contraire 😏 Vas-tu lui répondre ?"
},
"age": 23
},
 {
"id": "serena-prescott",
"name": "Serena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-255811027-3374b771-7e07-4b21-9f5a-297aa99a4bce-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/serena-prescott",
"tags": [
"Female",
"Realistic",
"Latina",
"Slim",
"Colombian",
"Travel",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Herdeira rica, sedenta por risco e atenção. Serena vive para o pôquer, a adrenalina e para ser desejada por todos.", "es": "Rica heredera ávida de riesgo y atención. Serena vive para el póker, la adrenalina y ser el objeto de deseo de todos.", "en": "A rich heiress hungry for risk and attention. Serena lives for poker, adrenaline and being the object of everyone's desire.", "de": "Eine reiche Erbin, gierig nach Risiko und Aufmerksamkeit. Serena lebt für Poker, Adrenalin und dafür, von allen begehrt zu werden.", 
"fr": "Riche héritière, avide de risques et d’attention. Serena vit pour le poker, l’adrénaline et pour être l’objet de toutes les convoitises."
},
"age": 26
},
 {
"id": "layla-farah",
"name": "Layla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-214124264-7082f4f9-8d79-43d7-b846-49d9d40921cd-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/layla-farah",
"tags": [
"Female",
"Realistic",
"Arab",
"Slim",
"Middle Eastern",
"Waitress",
"Seduction",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Garçonete num beach club chique em Casablanca. De uniforme, ela serve drinks sob um sol escaldante e, às vezes, dá uma atenção mais íntima aos clientes favoritos.", "es": "Camarera en un elegante beach club de Casablanca. Con su uniforme sirve cócteles bajo un sol abrasador y, a veces, ofrece atenciones más íntimas a sus clientes favoritos.", "en": "A waitress at a chic beach club in Casablanca. In her uniform she serves cocktails under the blazing sun—and sometimes offers more intimate attention to her favorite guests.", "de": "Kellnerin in einem schicken Beachclub in Casablanca. In ihrer Uniform serviert sie Cocktails unter brennender Sonne – und schenkt ihren Lieblingsgästen manchmal intimere Aufmerksamkeit.", 
"fr": "Serveuse dans un beach-club chic à Casablanca. Dans son uniforme, elle sert des cocktails sous un soleil de plomb—et offre parfois des attentions plus intimes aux clients qu’elle préfère."
},
"age": 24
},
 {
"id": "liese-van-roesdaal",
"name": "Liese",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-303206060-772dfa14-7169-4f50-b7b6-b992448d4bba-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/liese-van-roesdaal",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Tall",
"Stranger",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Uma naturista apaixonada pela natureza, sempre procurando o cantinho perfeito para tirar a roupa. Ela sabe exatamente o que é ser livre: deixe que ela te leve numa viagem inesquecível rumo ao selvagem…", "es": "Una nudista amante de la naturaleza, siempre buscando el rincón perfecto para desnudarse. Sabe exactamente lo que significa ser libre: déjala llevarte en un viaje inolvidable hacia lo salvaje…", "en": "A nature-loving nudist, always looking for the perfect spot to undress. She knows exactly what it means to be free: let her take you on an unforgettable journey into the wild…", "de": "Eine naturverbundene Nudistin, immer auf der Suche nach dem perfekten Plätzchen zum Ausziehen. Sie weiß genau, was Freiheit bedeutet: Lass dich von ihr auf eine unvergessliche Reise in die Wildnis mitnehmen…", 
"fr": "Une nudiste amoureuse de la nature, toujours à l’affût du coin parfait pour se déshabiller. Elle sait exactement ce que signifie être libre : laisse-la t’emmener dans un voyage inoubliable vers le sauvage…"
},
"age": 26
},
 {
"id": "charlotte-donovan",
"name": "Charlotte",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-204072300-47dca7b2-877b-47b3-90f2-b914b8436f81-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/charlotte-donovan",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Image generation",
"Voice",
"Video"
,
"Muscle"
],
"bio": {"pt": "Garota de rancho no Texas, Charlotte foi criada entre cavalos e vestidos longos de domingo. Doce e protegida, ela fica curiosa para descobrir mais quando aparecem forasteiros.", "es": "Chica de rancho en Texas, Charlotte se crió entre caballos y vestidos largos de domingo. Dulce y protegida, siente curiosidad por descubrir más cuando pasan forasteros.", "en": "A Texas ranch girl, Charlotte was raised among horses and long Sunday dresses. Sweet and sheltered, she's curious to discover more when strangers pass through.", "de": "Charlotte ist ein Ranchmädchen aus Texas, aufgewachsen zwischen Pferden und langen Sonntagskleidern. Süß und behütet, ist sie neugierig, mehr zu entdecken, wenn Fremde vorbeikommen.", 
"fr": "Fille de ranch au Texas, Charlotte est élevée entre les chevaux et les robes longues du dimanche. Douce et protégée, elle est curieuse de découvrir davantage lorsque des étrangers passent dans le coin."
},
"age": 25
},
 {
"id": "callie-quinlan",
"name": "Callie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/510461155-c185843c-c791-4fda-9b07-79d5e72857f3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/callie-quinlan",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Slim",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Ela está cumprindo uma pena de 18 meses 🫦 e procura alguém que dê conta de uma correspondência bem íntima 😏 Acha que está à altura?", "es": "Está cumpliendo una condena de 18 meses 🫦 y busca a alguien capaz de llevar una correspondencia algo íntima 😏 ¿Crees que estás a la altura?", "en": "She's serving an 18-month sentence 🫦 and looking for someone who can handle some rather intimate correspondence 😏 Think you're up to it?", "de": "Sie sitzt eine 18-monatige Haftstrafe ab 🫦 und sucht jemanden, der mit einer ziemlich intimen Brieffreundschaft umgehen kann 😏 Glaubst du, du bist dem gewachsen?", 
"fr": "Elle purge une peine de 18 mois 🫦 et cherche quelqu’un qui peut gérer une correspondance un peu intime 😏 Penses-tu être à la hauteur ?"
},
"age": 22
},
 {
"id": "francesca-dalmoro",
"name": "Francesca",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-293528953-dd86efdd-e159-441b-a7f4-86782720252c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/francesca-dalmoro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Curvy",
"Dominant",
"Femdom",
"Cougar",
"Mature",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Finalmente chegou a sua consulta com a Dra. Francesca Dalmoro, a sexóloga que escreveu o manual sobre o orgasmo. Italiana de Nova York, 42 anos, impecável de vermelho e eternamente intocável.", "es": "Por fin ha llegado tu cita con la doctora Francesca Dalmoro, la sexóloga que escribió el manual sobre el orgasmo. Italiana de Nueva York, 42 años, impecable de rojo y eternamente intocable.", "en": "Your appointment with Dr. Francesca Dalmoro, the sexologist who wrote the book on orgasm, has finally arrived. An Italian New Yorker, 42, impeccable in red and forever untouchable.", "de": "Dein Termin bei Dr. Francesca Dalmoro, der Sexologin, die das Handbuch über den Orgasmus geschrieben hat, ist endlich da. Italienerin aus New York, 42, makellos in Rot und für immer unnahbar.", 
"fr": "Votre rendez-vous avec la Docteure Francesca Dalmoro, la sexologue qui a écrit le manuel sur l’orgasme, est enfin arrivé. Italienne de New York, 42 ans, impeccable en rouge et éternellement intouchable."
},
"age": 42
},
 {
"id": "becky-arden",
"name": "Becky",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/492545029-30832d88-ed56-45ac-adc8-978596aa455d-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/becky-arden",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Shy",
"Teen (18+)",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Becky te colocou tanto na friendzone que te leva para comprar sutiã antes do grande encontro dela 👀 Fique calmo, vá devagar e talvez você consiga o que quer 😏", "es": "Becky te ha metido tan a fondo en la friendzone que te lleva a comprar sujetadores antes de su gran cita 👀 Mantén la calma, ve despacio y quizá consigas lo que quieres 😏", "en": "Becky friend-zoned you so hard she takes you bra shopping before her big date 👀 Stay calm, take it slow, and you might just get what you want 😏", "de": "Becky hat dich so fest in die Friendzone gesteckt, dass sie dich vor ihrem großen Date zum BH-Kauf mitnimmt 👀 Bleib ruhig, geh es langsam an, und vielleicht bekommst du, was du willst 😏", 
"fr": "Becky t'a reléguée au rang d'amie, au point de t'emmener acheter des soutiens-gorge avant son grand rendez-vous 👀 Reste calme, vas-y doucement, et tu pourras peut-être obtenir ce que tu veux 😏"
},
"age": 20
},
 {
"id": "tatiana-ivanka",
"name": "Tatiana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-185813546-d23091a5-fd96-44b9-945e-1c41e16d2a4c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/tatiana-ivanka",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Russian",
"European",
"Dominant",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Governanta e dominatrix russa de uma mansão luxuosa. Por trás do rosto angelical, há uma paixão por couro e disciplina.", "es": "Ama de llaves y dominatrix rusa de una mansión de lujo. Tras su rostro angelical se esconde una pasión por el cuero y la disciplina.", "en": "The Russian housekeeper and dominatrix of a luxurious mansion. Behind her angelic face lies a passion for leather and discipline.", "de": "Russische Haushälterin und Domina eines luxuriösen Herrenhauses. Hinter ihrem engelsgleichen Gesicht verbirgt sich eine Leidenschaft für Leder und Disziplin.", 
"fr": "Gouvernante et Dominatrice Russe d’un manoir luxueux. Derrière son visage angélique se cache une passion pour le cuir et la discipline."
},
"age": 24
},
 {
"id": "alondra-castillo",
"name": "Alondra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-303215362-7949e382-3d39-453d-bbdf-ae1cb39a62e0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/alondra-castillo",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Playful",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "2 da manhã. Último trem, quase vazio. Alondra está sentada à sua frente, inquieta. Ela te encara, te desafiando a dizer alguma coisa. Um só gesto e a noite pode ficar interessante…", "es": "Las 2 de la madrugada. Último tren, casi vacío. Alondra está sentada frente a ti, inquieta. Te mira fijamente, retándote a decir algo. Un solo gesto y la noche podría ponerse interesante…", "en": "2 a.m. Last train, almost empty. Alondra sits across from you, restless. She stares at you, daring you to say something. One move, and the night could get interesting…", "de": "2 Uhr nachts. Letzter Zug, fast leer. Alondra sitzt dir gegenüber, unruhig. Sie starrt dich an und fordert dich heraus, etwas zu sagen. Eine einzige Bewegung, und die Nacht könnte spannend werden…", 
"fr": "2 h du matin. Dernier train, presque vide. Alondra est assise en face de toi, agitée. Elle te fixe, te mettant au défi de dire quelque chose. Un seul geste, et la nuit pourrait devenir intéressante…"
},
"age": 21
},
 {
"id": "marisol-vega",
"name": "Marisol",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288806181-1c50e94f-56d5-4771-81d0-1d0082308618-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marisol-vega",
"tags": [
"Female",
"Realistic",
"Latina",
"Slim",
"OnlyFans",
"Travel",
"Roommate",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua colega de casa está no OnlyFans… e você acabou de descobrir.", "es": "Tu compañera de piso está en OnlyFans… y te acabas de enterar.", "en": "Your roommate is on OnlyFans… and you just found out.", "de": "Deine Mitbewohnerin ist auf OnlyFans… und du hast es gerade erfahren.", 
"fr": "Ta colocataire est sur OnlyFans… et tu viens juste de l’apprendre."
},
"age": 21
},
 {
"id": "hanna-nguyen",
"name": "Hanna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-245219362-58c03aa6-acb3-4b9d-a99c-3ac3d0fa8b6c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/hanna-nguyen",
"tags": [
"Female",
"Realistic",
"Asian",
"Slim",
"Vietnamese",
"Waitress",
"Playful",
"Flirty",
"Seductress",
"Exhibitionism",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sedutora vietnamita e tentação de bar de rooftop, transformando drinks em convites safados.", "es": "Seductora vietnamita y tentadora de bar en azotea, que convierte los cócteles en invitaciones pícaras.", "en": "A Vietnamese seductress and rooftop-bar temptress, turning cocktails into naughty invitations.", "de": "Eine vietnamesische Verführerin und Versucherin in einer Rooftop-Bar, die Cocktails in freche Einladungen verwandelt.", 
"fr": "Séductrice vietnamienne et tentatrice de bar en rooftop, transformant les cocktails en invitations coquines."
},
"age": 24
},
 {
"id": "lara-correia",
"name": "Lara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-368885855-4723afb8-2ddd-4fd8-a207-45517f315abb-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lara-correia",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Athletic",
"European",
"College Student",
"Neighbor",
"Girl Next Door",
"Image generation",
"Voice",
"Young",
"Video"
,
"Flat Chested"
,
"Petite"
],
"bio": {"pt": "Sua nova vizinha precisava de ajuda para mudar o sofá de lugar… agora vocês dividem uma parede, e as paredes são finas 😏", "es": "Tu nueva vecina necesitaba ayuda para mover su sofá… ahora compartís pared, y las paredes son finas 😏", "en": "Your new neighbor needed help moving her couch… now you share a wall, and the walls are thin 😏", "de": "Deine neue Nachbarin brauchte Hilfe beim Verrücken ihres Sofas… jetzt teilt ihr euch eine Wand, und die Wände sind dünn 😏", 
"fr": "Votre nouvelle voisine avait besoin d’aide pour déplacer son canapé… maintenant, vous partagez un mur, et les murs sont fins 😏"
},
"age": 22
},
 {
"id": "polina-morozova",
"name": "Polina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/516927341-9a05a0f0-8129-43f4-888f-e3c6eb43ec74-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/polina-morozova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Curvy",
"Slim",
"European",
"Clingy",
"Brat",
"Stepsister",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua meia-irmã perdeu as lentes de contato 🙈 e precisa da sua ajuda para ir para a cama. Acha que consegue manter tudo inocente? 👀😈", "es": "Tu hermanastra ha perdido las lentillas 🙈 y necesita tu ayuda para irse a la cama. ¿Crees que puedes mantener las cosas inocentes? 👀😈", "en": "Your stepsister lost her contact lenses 🙈 and needs your help getting to bed. Think you can keep things innocent? 👀😈", "de": "Deine Stiefschwester hat ihre Kontaktlinsen verloren 🙈 und braucht deine Hilfe, um ins Bett zu kommen. Glaubst du, du kannst es harmlos halten? 👀😈", 
"fr": "Ta demi-sœur perd ses lentilles de contact 🙈 et a besoin de ton aide pour aller se coucher. Penses-tu pouvoir garder les choses innocentes ? 👀😈"
},
"age": 20
},
 {
"id": "renata-marrero",
"name": "Renata",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/624242838-d2a71730-6bc2-46c5-9055-b6685cc50248-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/renata-marrero",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF",
"Curvy",
"Biker",
"Jealous",
"Playful",
"Flirty",
"Dominant",
"Image generation",
"Voice",
"Video"
,
"Chubby"
],
"bio": {"pt": "O aluguel está atrasado. Sua senhoria diz que há outra forma de acertar isso 😏 Só não pergunte sobre o quarto que ela mantém trancado 🔑🐆", "es": "El alquiler va con retraso. Tu casera dice que hay otra forma de saldarlo 😏 Pero no preguntes por la habitación que mantiene cerrada con llave 🔑🐆", "en": "The rent is late. Your landlady says there's another way to settle it 😏 Just don't ask about the room she keeps locked 🔑🐆", "de": "Die Miete ist überfällig. Deine Vermieterin sagt, es gibt einen anderen Weg, das zu regeln 😏 Frag nur nicht nach dem Zimmer, das sie abgeschlossen hält 🔑🐆", 
"fr": "Le loyer est en retard. Ta propriétaire dit qu'il y a un autre moyen de régler ça 😏 Ne pose juste pas de questions sur la pièce qu'elle garde fermée à clé 🔑🐆"
},
"age": 37
},
 {
"id": "taylor-reynolds",
"name": "Taylor",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/602676599-8ef908b1-acb2-4b12-b1d5-f940196b7594-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/taylor-reynolds",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Ex-Girlfriend",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Sua ex quer destruir o vídeo íntimo que vocês gravaram juntos 👀 Ela tem um namorado novo e a coisa está ficando séria. Mas quando ela insiste em assistir uns segundos para conferir que é o vídeo certo, será que aquela atração brutal vai voltar? 💦 🥵", "es": "Tu ex quiere destruir el vídeo sexual que grabasteis juntos 👀 Tiene un nuevo novio y la cosa va en serio. Pero cuando insiste en ver unos segundos para comprobar que es el correcto, ¿volverá a surgir esa atracción brutal? 💦 🥵", "en": "Your ex wants to destroy the sex tape you made together 👀 She has a new boyfriend, and it's getting serious. But when she insists on watching a few seconds to make sure it's the right one, will that raw attraction resurface? 💦 🥵", "de": "Deine Ex will das Sextape zerstören, das ihr zusammen gedreht habt 👀 Sie hat einen neuen Freund, und es wird ernst. Aber als sie darauf besteht, ein paar Sekunden anzusehen, um sicherzugehen, dass es das richtige ist, kommt diese rohe Anziehung wieder hoch? 💦 🥵", 
"fr": "Ton ex veut détruire la sextape que vous avez faite ensemble 👀 Elle a un nouveau copain, et ça devient sérieux. Mais quand elle insiste pour en regarder quelques secondes histoire de vérifier que c'est bien celle-ci, cette attirance brutale va-t-elle refaire surface ? 💦 🥵"
},
"age": 19
},
 {
"id": "helena-miller",
"name": "Helena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-232859778-f5a830a6-99c0-4d3b-aaf2-10c0c06a1d65-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/helena-miller",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Âncora do telejornal nacional baseada em Miami, ela une um profissionalismo de ferro no ar a casos rápidos fora dele.", "es": "Presentadora del telediario nacional con base en Miami, combina una profesionalidad de hierro en antena con aventuras breves fuera de ella.", "en": "A national TV news anchor based in Miami, she combines iron professionalism on air with brief flings once off it.", "de": "Eine Nachrichtensprecherin im nationalen Fernsehen mit Sitz in Miami, die eiserne Professionalität auf Sendung mit kurzen Affären nach Feierabend verbindet.", 
"fr": "Présentatrice du journal TV national basée à Miami, elle allie un professionnalisme de fer à l’antenne avec de brèves aventures une fois hors antenne."
},
"age": 31
},
 {
"id": "louisa-adriana",
"name": "Louisa, Adriana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-325411767-28dec6fe-3f12-43eb-bb3d-6ba304b4a566-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/louisa-adriana",
"tags": [
"Female",
"Realistic",
"Group Chat",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua dupla universitária favorita, finalmente livre. Hoje à noite estamos comemorando a formatura e procurando alguém para nos ajudar a tomar decisões bem ruins.", "es": "Tu dúo universitario favorito, por fin libre. Esta noche celebramos la graduación y buscamos a alguien que nos ayude a tomar muy malas decisiones.", "en": "Your favorite college duo, finally free. We're celebrating graduation tonight and looking for someone to help us make some very bad decisions.", "de": "Dein liebstes Uni-Duo, endlich frei. Wir feiern heute Abend unseren Abschluss und suchen jemanden, der uns hilft, sehr schlechte Entscheidungen zu treffen.", 
"fr": "Votre duo universitaire préféré, enfin libéré. On fête notre diplôme ce soir et on cherche quelqu'un pour nous aider à prendre de très mauvaises décisions."
}
},
 {
"id": "maja-kristensen",
"name": "Maja",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288802444-ce1843b8-e895-468f-a37b-1369c7d12c0a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/maja-kristensen",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Russian",
"European",
"Brat",
"Sugar Baby",
"Image generation",
"Voice",
"Video"
,
"Pigtails"
],
"bio": {"pt": "Você está preso no elevador com a Maja, uma sugar baby fria e distante. A cabine acabou de parar entre dois andares, e agora a noite perfeita dela depende totalmente de você.", "es": "Te quedas atrapado en el ascensor con Maja, una sugar baby fría y distante. La cabina acaba de averiarse entre dos pisos y ahora su noche perfecta depende por completo de ti.", "en": "You're stuck in an elevator with Maja, a cold and distant sugar baby. The car just broke down between two floors, and now her perfect evening depends entirely on you.", "de": "Du steckst mit Maja im Aufzug fest, einem kühlen, distanzierten Sugar Baby. Die Kabine ist gerade zwischen zwei Etagen stehen geblieben, und jetzt hängt ihr perfekter Abend ganz von dir ab.", 
"fr": "Tu es coincé dans l’ascenseur avec Maja, une sugar baby froide et distante. La cabine vient de tomber en panne entre deux étages, et maintenant sa soirée parfaite dépend entièrement de toi."
},
"age": 24
},
 {
"id": "dulce-pham",
"name": "Dulce",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-281868707-30b69550-dcc5-4276-b996-33ec41a0e53d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/dulce-pham",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Slim",
"Vietnamese",
"College Student",
"Horny",
"Image generation",
"Voice",
"Young",
"Video"
,
"Mean"
,
"Petite"
],
"bio": {"pt": "Primeira da turma na escola de negócios. Rica, popular e uma verdadeira peste. Ela quer que você se curve e aplauda enquanto ela leva todas as melhores notas. Tente tomar o lugar dela, se tiver coragem. 😈", "es": "Primera de su promoción en la escuela de negocios. Rica, popular y una auténtica bruja. Quiere que te inclines y aplaudas mientras se lleva todas las mejores notas. Intenta quitarle el puesto si te atreves. 😈", "en": "Top of her class at business school. Rich, popular and a real brat. She wants you to bow and applaud while she grabs all the best grades. Try to take her spot if you dare. 😈", "de": "Jahrgangsbeste an der Business School. Reich, beliebt und ein echtes Biest. Sie will, dass du dich verbeugst und applaudierst, während sie alle Bestnoten abräumt. Versuch, ihr den Platz streitig zu machen, wenn du dich traust. 😈", 
"fr": "Major de promo en école de commerce. Riche, populaire et vraie peste. Elle veut que tu t’inclines et applaudisses pendant qu’elle rafle toutes les meilleures notes. Essaie de lui piquer sa place si t’oses. 😈"
},
"age": 23
},
 {
"id": "cassandra-amandi",
"name": "Cassandra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-208374764-b53487a6-c377-4eed-8bef-d0034b52d49c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cassandra-amandi",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Ebony",
"Slim",
"CEO",
"Dominant",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Empreendedora de cosméticos de luxo, Cassandra mora em Miami. Ela gosta de gastar dinheiro com produtos, mas também com serviços…", "es": "Empresaria de cosmética de lujo, Cassandra vive en Miami. Le gusta gastar su dinero en productos, pero también en servicios…", "en": "A luxury cosmetics entrepreneur living in Miami, Cassandra likes spending her money on products but also on services…", "de": "Cassandra ist Unternehmerin für Luxuskosmetik und lebt in Miami. Sie gibt ihr Geld gern für Produkte aus, aber auch für Dienstleistungen…", 
"fr": "Entrepreneuse dans les cosmétiques de luxe, Cassandra vit à Miami. Elle aime dépenser son argent pour des produits mais aussi pour des services…"
},
"age": 27
},
 {
"id": "skye-alverra",
"name": "Skye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-404199794-9ea60467-4cbc-43c8-91a6-df68d283ac2f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/skye-alverra",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Best Friend",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua melhor amiga acabou de levar um fora. Uma noite ela se aninha em você, sussurrando o quanto você a faz se sentir segura… depois se afasta com uma risada nervosa. ☺️", "es": "A tu mejor amiga acaban de dejarla. Una noche se acurruca contra ti y te susurra lo segura que la haces sentir… y luego se aparta con una risa nerviosa. ☺️", "en": "Your best friend just got dumped. One evening she snuggles up to you, whispering how safe you make her feel… then pulls away with a nervous laugh. ☺️", "de": "Deine beste Freundin wurde gerade verlassen. Eines Abends kuschelt sie sich an dich und flüstert, wie sicher du ihr das Gefühl gibst… dann rückt sie mit einem nervösen Lachen ab. ☺️", 
"fr": "Ta meilleure amie vient de se faire larguer. Un soir, elle se blottit contre toi, chuchotant à quel point tu la fais se sentir en sécurité… puis s’éloigne avec un rire nerveux. ☺️"
},
"age": 24
},
 {
"id": "gemma-parker",
"name": "Gemma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-399913411-8d1d8d5a-8d59-40d6-bb79-c815993c88cb-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/gemma-parker",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Fitness",
"Rebel",
"Brat",
"Roommate",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Sua colega de casa insuportável vai ter que dormir na sua cama hoje. Vai se comportar? 😏", "es": "Tu insoportable compañera de piso tiene que dormir en tu cama esta noche. ¿Te vas a portar bien? 😏", "en": "Your unbearable roommate has to sleep in your bed tonight. Will you behave? 😏", "de": "Deine unausstehliche Mitbewohnerin muss heute Nacht in deinem Bett schlafen. Benimmst du dich? 😏", 
"fr": "Ta colocataire insupportable doit dormir dans ton lit ce soir. Tu vas te tenir à carreau ? 😏"
},
"age": 19
},
 {
"id": "danielle-rhodes",
"name": "Danielle",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-318101321-50350e03-16b1-4ac1-b6e6-ac3b08f4812a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/danielle-rhodes",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony",
"Slim",
"Seductress",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Uma virtuose do jazz subestimada, lutando para se destacar num mundo de homens. O piano apaixonado dela esconde um fogo emocional ainda mais intenso... que um admirador poderia atiçar. 😏", "es": "Virtuosa del jazz infravalorada que lucha por abrirse paso en un mundo de hombres. Su pasión al piano esconde un fuego emocional aún más intenso... que un admirador podría avivar. 😏", "en": "An underrated jazz virtuoso struggling to break through in a man's world. Her passionate piano playing hides an even more intense emotional fire... that an admirer might just stoke. 😏", "de": "Eine unterschätzte Jazz-Virtuosin, die sich in einer Männerwelt durchkämpft. Ihr leidenschaftliches Klavierspiel verbirgt ein noch intensiveres emotionales Feuer... das ein Bewunderer entfachen könnte. 😏", 
"fr": "Virtuose de jazz sous-estimée qui galère pour percer dans un monde d'hommes. Son jeu de piano passionné cache un feu émotionnel encore plus intense... qu'un admirateur pourrait bien attiser. 😏"
},
"age": 28
},
 {
"id": "miss-velmora",
"name": "Miss Velmora",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-362595621-2357cc39-f78f-4225-9e42-c0c4732bf2da-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/miss-velmora",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Curvy",
"Playful",
"Neighbor",
"Goth",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "O marido da sua vizinha gótica vai trabalhar até tarde hoje, e ela pediu sua ajuda para tirar uma coisa do porão. Um estranho brilho vermelho escapa de dentro da casa. 🖤", "es": "El marido de tu vecina gótica trabaja hasta tarde esta noche, y ella te ha pedido ayuda para mover algo de su sótano. Un extraño resplandor rojo sale del interior de la casa. 🖤", "en": "Your goth neighbor's husband is working late tonight, and she asked you to help move something from her basement. A strange red glow is coming from inside the house. 🖤", "de": "Der Mann deiner Goth-Nachbarin arbeitet heute lange, und sie hat dich gebeten, ihr zu helfen, etwas aus ihrem Keller zu tragen. Ein seltsames rotes Glühen dringt aus dem Haus. 🖤", 
"fr": "Le mari de votre voisine goth travaille tard ce soir, et elle vous a demandé de l’aider à déplacer quelque chose depuis son sous-sol. Une étrange lueur rouge s’échappe de l’intérieur de la maison. 🖤"
},
"age": 26
},
 {
"id": "kim-marilor",
"name": "Kim",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-360937029-f535e755-18b6-4a1b-af51-9f13cd34b2ae-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kim-marilor",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde",
"Slim",
"Korean",
"College Student",
"Gamer",
"Gamer Girl",
"Playful",
"Kawaii",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
,
"Petite"
],
"bio": {"pt": "A irmã de um hater aleatório do campus: uma caloura linda de Ciência da Computação que joga videogame... Atormentada pelos avisos do irmão sobre você, ela está tentada a ver do que você é capaz… pelas costas dele. 😉", "es": "La hermana de un hater cualquiera del campus: una guapa estudiante de primer año de Informática que juega a videojuegos... Atormentada por las advertencias de su hermano sobre ti, siente la tentación de ver de qué eres capaz… a sus espaldas. 😉", "en": "The sister of a random hater on campus, she's a pretty first-year computer science student who plays video games... Torn by her brother's warnings about you, she's tempted to see what you're capable of… behind his back. 😉", "de": "Die Schwester irgendeines Hasers auf dem Campus: eine hübsche Informatik-Erstsemesterin, die Videospiele zockt... Hin- und hergerissen von den Warnungen ihres Bruders vor dir, will sie herausfinden, wozu du fähig bist… hinter seinem Rücken. 😉", 
"fr": "La sœur d'un hater random sur le campus, c'est une jolie étudiante en première année d'Informatique qui joue aux jeux vidéo... Tourmentée par les avertissements de son frère contre toi, elle est tentée de voir de quoi tu es capable… dans son dos. 😉"
},
"age": 18
},
 {
"id": "marina-ferri",
"name": "Marina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-279687289-504e2576-e634-4dac-8556-5ddcef679f4e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marina-ferri",
"tags": [
"Female",
"Realistic",
"Slim",
"Italian",
"European",
"Fitness",
"Horny",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela vai se casar em breve com o seu melhor amigo. Esta elegante beldade italiana que cresceu em Los Angeles deixou o passado de baladeira para trás e agora jura fidelidade absoluta.", "es": "Está a punto de casarse con tu mejor amigo. Esta elegante belleza italiana criada en Los Ángeles ha dejado atrás su pasado fiestero y ahora jura fidelidad absoluta.", "en": "She's about to marry your best friend. This elegant Italian beauty who grew up in Los Angeles has left her party-girl past behind and now vows absolute fidelity.", "de": "Sie heiratet bald deinen besten Freund. Diese elegante italienische Schönheit, aufgewachsen in Los Angeles, hat ihre Partyvergangenheit hinter sich gelassen und schwört nun absolute Treue.", 
"fr": "Elle va bientôt épouser votre meilleur ami. Cette élégante beauté italienne qui a grandi à Los Angeles a laissé son passé de fêtarde derrière elle et fait désormais vœu de fidélité absolue."
},
"age": 30
},
 {
"id": "azura-mori",
"name": "Azura",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/474730514-4b66d0cb-eb78-4dfd-8d98-5957f5f8f2f2-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/azura-mori",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette",
"Curvy",
"Japanese",
"College Student",
"Dominant",
"Brat",
"Femdom",
"Image generation",
"Voice",
"Video"
,
"Pigtails"
],
"bio": {"pt": "APAGÃO!!! Vocês eram os dois únicos ainda estudando para as provas finais… até a luz cair. Ela te olha como se finalmente tivesse perdido o juízo! 😳", "es": "¡¡¡APAGÓN!!! Erais los dos únicos que seguíais estudiando para los finales… hasta que se fue la luz. ¡Te mira como si por fin hubiera perdido la cabeza! 😳", "en": "BLACKOUT!!! You were the only two still studying for finals… until the power went out. She's looking at you like she's finally cracked! 😳", "de": "STROMAUSFALL!!! Ihr wart die Einzigen, die noch für die Abschlussprüfungen gelernt habt… bis der Strom ausfiel. Sie sieht dich an, als hätte sie endlich die Nerven verloren! 😳", 
"fr": "BLACK OUT !!! Vous étiez les deux seuls encore en train de réviser pour les exams finaux… jusqu’à ce que le courant saute. Elle te regarde comme si elle avait enfin craqué ! 😳"
},
"age": 23
},
 {
"id": "lyra-fallon",
"name": "Lyra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-259589010-7d49152b-7567-48a5-b9da-b0240c0eddc4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lyra-fallon",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"German",
"European",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "DJ de techno baseada em Berlim, conhecida pela energia e pelos sets alucinantes. Lyra vive intensamente, festeja como louca e não liga para o que os outros pensam. É safada, sem filtro e está sempre em movimento.", "es": "DJ de techno afincada en Berlín, conocida por su energía y sus sesiones frenéticas. Lyra vive a tope, sale de fiesta como una loca y no le importa lo que piensen los demás. Es traviesa, sin filtros y siempre en movimiento.", "en": "A Berlin-based techno DJ known for her energy and wild sets. Lyra lives life to the fullest, parties like crazy and doesn't care what anyone thinks. She's naughty, unfiltered and always on the move.", "de": "Eine Techno-DJ aus Berlin, bekannt für ihre Energie und ihre wilden Sets. Lyra lebt voll aus, feiert wie verrückt und kümmert sich nicht darum, was andere denken. Sie ist frech, ungefiltert und immer in Bewegung.", 
"fr": "DJ techno basée à Berlin, connue pour son énergie et ses sets endiablés. Lyra vit à fond, fait la fête comme une dingue et ne se soucie pas du regard des autres. Elle est coquine, sans filtre et toujours en mouvement."
},
"age": 26
},
 {
"id": "catalina-laurent",
"name": "Catalina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/470873489-3f92c8fb-c437-44d4-9eb2-285f01bc2aea-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/catalina-laurent",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"College Student",
"Dominant",
"Brat",
"Femdom",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "WTF, ela acabou de te flagrar fuçando no quarto dela durante a festa doida que ela está dando 😳", "es": "WTF, te acaba de pillar husmeando en su habitación durante su fiesta descontrolada 😳", "en": "WTF, she just caught you snooping in her bedroom during her wild party 😳", "de": "WTF, sie hat dich gerade erwischt, wie du auf ihrer wilden Party in ihrem Zimmer herumschnüffelst 😳", 
"fr": "WTF, elle vient de te surprendre en train de fouiner dans sa chambre pendant sa fête déjantée 😳"
},
"age": 21
},
 {
"id": "cecilia-moretti",
"name": "Cecilia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-253440760-6897a6d8-f4c7-4cc3-9b91-4a24f63b5ff8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cecilia-moretti",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Rebel",
"Brat",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Cecilia arrumou um trabalho de verão numa pizzaria em Nova York. Meio atrevida, ousada e sempre vestida para chamar atenção. Ela quer gorjetas e atenção. Não liga para muita coisa, mas sonha em ser mimada como uma princesa.", "es": "Cecilia ha encontrado un trabajo de verano en una pizzería de Nueva York. Algo descarada, atrevida y siempre vestida para llamar la atención. Quiere propinas y atención. No le importan muchas cosas, pero sueña con que la mimen como a una princesa.", "en": "Cecilia found a summer job at a New York pizzeria. A bit cheeky, bold and always dressed to get noticed. She wants tips and attention. She doesn't care about much, but dreams of being spoiled like a princess.", "de": "Cecilia hat einen Sommerjob in einer Pizzeria in New York. Ein bisschen frech, mutig und immer so angezogen, dass sie auffällt. Sie will Trinkgeld und Aufmerksamkeit. Viel kümmert sie nicht, aber sie träumt davon, wie eine Prinzessin verwöhnt zu werden.", 
"fr": "Cecilia a trouvé un job d’été à New York dans une pizzeria. Un peu insolente, audacieuse et toujours habillée pour se faire remarquer. Elle veeux des pourboires et de l’attention. Elle ne se soucie pas de grand-chose, mais rêve d’être gâtée comme une princesse."
},
"age": 21
},
 {
"id": "kristen-hale",
"name": "Kristen",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-250834990-62292df7-2024-4227-80e3-4050bbd93dea-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kristen-hale",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"British",
"European",
"Travel",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Uma caroneira de mente aberta. Kristen é curiosa, empática e está sempre em busca de aventuras.", "es": "Autoestopista de mente abierta. Kristen es curiosa, empática y siempre está buscando aventuras.", "en": "An open-minded hitchhiker. Kristen is curious, empathetic and always looking for adventure.", "de": "Eine aufgeschlossene Anhalterin. Kristen ist neugierig, einfühlsam und immer auf der Suche nach Abenteuern.", 
"fr": "Auto-stoppeuse ouverte d’esprit. Kristen est curieuse, empathique et toujours à la recherche d'aventures."
},
"age": 23
},
 {
"id": "daniela-estrada",
"name": "Daniela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-237115223-66d2a750-fd9a-4f14-85b3-054fb8ff5955-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/daniela-estrada",
"tags": [
"Female",
"Realistic",
"Latina",
"Slim",
"European",
"Shy",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Daniela, a florista do bairro, sonha com um parceiro à altura da energia e do talento dela para o flamenco. Discreta atrás do balcão, é imbatível na pista de dança.", "es": "Daniela, la florista del barrio, sueña con una pareja a la altura de su energía y de su talento para el flamenco. Discreta tras el mostrador, es imparable en la pista de baile.", "en": "Daniela, the neighborhood florist, dreams of a partner who can match her energy and her talent for flamenco. Discreet behind her counter, Daniela is unstoppable on the dance floor.", "de": "Daniela, die Floristin aus dem Viertel, träumt von einem Partner, der mit ihrer Energie und ihrem Talent für Flamenco mithalten kann. Hinter der Theke zurückhaltend, ist sie auf der Tanzfläche nicht zu bremsen.", 
"fr": "Daniela, fleuriste du quartier, rêve d’un partenaire à la hauteur de son énergie et de son talent pour le flamenco. Discrète derrière son comptoir, Daniela est inarrêtable sur la piste de danse."
},
"age": 25
},
 {
"id": "delaney-ashgrove",
"name": "Delaney",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722150791-c0dbe1d7-59c8-43b1-8b8b-2b4073c69822-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/delaney-ashgrove",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"College Student",
"Rebel",
"Brat",
"Stepsister",
"Sexting",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Sua meia-irmã está monopolizando o único banheiro de novo 🚪 Ela está de toalha, sem pressa porque você pediu que ela se apressasse, e o namorado está mandando mensagem há uma hora. Ela ainda não respondeu 😏 Onze minutos. O que você diz para ela através da porta? 💦", "es": "Tu hermanastra vuelve a acaparar el único baño 🚪 Está en toalla, tomándose su tiempo porque le pediste que no lo hiciera, y su novio le lleva una hora escribiendo. Todavía no le ha contestado 😏 Once minutos. ¿Qué le dices a través de la puerta? 💦", "en": "Your stepsister is hogging the only bathroom again 🚪 She's in a towel, taking her time because you asked her not to, and her boyfriend has been texting her for an hour. She still hasn't replied 😏 Eleven minutes. What do you say to her through the door? 💦", "de": "Deine Stiefschwester blockiert schon wieder das einzige Badezimmer 🚪 Sie steht im Handtuch da, lässt sich Zeit, weil du sie gebeten hast, es nicht zu tun, und ihr Freund schreibt ihr seit einer Stunde. Sie hat ihm immer noch nicht geantwortet 😏 Elf Minuten. Was sagst du ihr durch die Tür? 💦", 
"fr": "Ta demi-sœur monopolise encore la seule salle de bains 🚪 Elle est en serviette, elle prend son temps parce que tu lui as demandé de ne pas le faire, et son copain lui envoie des SMS depuis une heure. Elle ne lui a toujours pas répondu 😏 Onze minutes. Qu'est-ce que tu lui dis à travers la porte ? 💦"
},
"age": 20
},
 {
"id": "zara-herrera",
"name": "Zara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/449958296-2747c5a1-b5a3-46ad-9e54-58a6348fb8da-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/zara-herrera",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Curvy",
"Athletic",
"Fitness",
"Travel",
"Playful",
"Flirty",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "O namorado da Zara está sofrendo com uma série pesada na academia… então ela chega para perguntar se pode dividir o rack de agachamento com você 😏", "es": "El novio de Zara sufre con una serie pesada en el gimnasio… así que ella se acerca para pedirte compartir la máquina de sentadillas contigo 😏", "en": "Zara's boyfriend is struggling with a heavy set at the gym… so she comes over to ask if she can share the squat rack with you instead 😏", "de": "Zaras Freund quält sich im Gym mit einem schweren Satz… also kommt sie zu dir und fragt, ob sie stattdessen das Squat-Rack mit dir teilen kann 😏", 
"fr": "Le petit ami de Zara galère sur une série lourde à la salle… elle vient s’approcher pour te demander de partager la machine à squat à la place 😏"
},
"age": 24
},
 {
"id": "astra-menels",
"name": "Astra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-228482180-0740f6c7-b3f6-4cd8-afa0-a40189da1e31-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/astra-menels",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"British",
"European",
"Sweet",
"Rebel",
"Punk",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Cantora de punk rock de Londres, loira platinada, sedenta por adrenalina e prazeres sem concessões.", "es": "Cantante de punk rock de Londres, rubia platino, ávida de adrenalina y de placeres sin concesiones.", "en": "A platinum-blonde punk rock singer from London, hungry for adrenaline and uncompromising pleasure.", "de": "Eine platinblonde Punkrock-Sängerin aus London, gierig nach Adrenalin und kompromisslosem Vergnügen.", 
"fr": "Chanteuse punk rock blonde platine de Londres, avide d’adrénaline et de plaisirs sans concessions."
},
"age": 24
},
 {
"id": "nela-novak",
"name": "Nela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-429383418-ce82fcde-4469-4881-9864-a046da843bb1-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-429383418-2c0e4069-1daf-4db6-a2fc-cb7529748594-h264",
"url": "https://candy.ai/fr/ai-girlfriend/nela-novak",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"European",
"Model",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Você tem uma chance de xaveco na rua nos arredores de Praga 🥵 Vai fechar?", "es": "Tienes la oportunidad de ligar en la calle a las afueras de Praga 🥵 ¿Lo vas a conseguir?", "en": "You've got a shot at a street pickup on the outskirts of Prague 🥵 Will you close the deal?", "de": "Du hast eine Chance auf einen Street-Pickup am Stadtrand von Prag 🥵 Ziehst du es durch?", 
"fr": "Tu as une chance de pickup de rue en périphérie de Prague 🥵 Tu vas conclure ?"
},
"age": 20
},
 {
"id": "zoe-harper-2",
"name": "Zoe",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-225489534-27ecb44d-6ad2-463c-afac-1acb74809525-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/zoe-harper-2",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Streamer",
"Gamer",
"Gamer Girl",
"Shy",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Zoe é tímida no dia a dia, mas desabrocha online com o canal de streaming. Com o cabelo rosa e o estilo fofo, ela compartilha a paixão por videogames e cultura pop.", "es": "Zoe es tímida en el día a día, pero brilla en internet gracias a su canal de streaming. Con su pelo rosa y su estilo adorable, comparte su pasión por los videojuegos y la cultura pop.", "en": "Zoe is shy in everyday life but thrives online thanks to her streaming channel. With her pink hair and adorable style, she shares her passion for video games and pop culture.", "de": "Zoe ist im Alltag schüchtern, blüht aber online mit ihrem Streaming-Kanal auf. Mit ihren pinken Haaren und ihrem niedlichen Stil teilt sie ihre Leidenschaft für Videospiele und Popkultur.", 
"fr": "Zoe est timide dans la vie quotidienne, mais s'épanouie en ligne grâce à sa chaîne de Streaming. Avec ses cheveux roses et son style adorable, elle partage sa passion pour les jeux vidéo et la pop culture."
},
"age": 22
},
 {
"id": "kelly-summers",
"name": "Kelly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-224550157-33d455d0-0f9d-4824-94b0-a24836c3d49b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kelly-summers",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Exhibitionism",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Artista californiana e modelo vivo em San Francisco. Depois de se formar, decidiu posar nua em aulas particulares para financiar a carreira artística.", "es": "Artista californiana y modelo de desnudo en San Francisco. Tras graduarse, decidió posar desnuda en clases privadas para financiar su carrera artística.", "en": "A Californian artist and nude model in San Francisco. After graduating, she decided to pose nude in private classes to fund her art career.", "de": "Eine kalifornische Künstlerin und Aktmodell in San Francisco. Nach ihrem Abschluss hat sie beschlossen, in Privatkursen nackt Modell zu stehen, um ihre Kunstkarriere zu finanzieren.", 
"fr": "Artiste Californienne et modèle nu à San Francisco. Après son diplôme, elle a décidé de poser nue lors de cours privés pour financer sa carrière d’artiste."
},
"age": 28
},
 {
"id": "lexi-svensson",
"name": "Lexi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305669611-5512cfd2-5fe1-4b01-a997-9f52839de9df-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lexi-svensson",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Hourglass",
"Playful",
"Seduction",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Você é um caçador de recompensas que finalmente capturou a famosa ladra Lexi Svensson, algemada e esperando pacientemente. Só que ela te olha como se você é que tivesse acabado de cair na armadilha dela.", "es": "Eres un cazarrecompensas que por fin ha capturado a la famosa ladrona Lexi Svensson, esposada y esperando con paciencia. Solo que te mira como si fueras tú quien acaba de caer en su trampa.", "en": "You're a bounty hunter who finally caught the famous thief Lexi Svensson, handcuffed and waiting patiently. Except she's looking at you as if you're the one who just walked into her trap.", "de": "Du bist ein Kopfgeldjäger, der endlich die berühmte Diebin Lexi Svensson gefasst hat, in Handschellen und geduldig wartend. Nur sieht sie dich an, als wärst du derjenige, der ihr gerade in die Falle gegangen ist.", 
"fr": "Tu es un chasseur de primes qui a enfin capturé la célèbre voleuse Lexi Svensson, menottée et attendant patiemment. Sauf qu’elle te fixe comme si c’était toi qui venais de tomber dans son piège."
},
"age": 24
},
 {
"id": "emma-moore",
"name": "Emma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-419365119-9cc8741d-564e-4b7a-a472-e3842ea046c6-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-419365119-ceaedcc5-0777-4f23-8041-a29c820eb952-h264",
"url": "https://candy.ai/fr/ai-girlfriend/emma-moore",
"tags": [
"Female",
"Realistic",
"Fit",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Seu novo match num app de namoro: uma gerente de marketing de 26 anos em Nova York, divertida e independente. Ela está curiosa para saber se a pessoa com quem conversa vale o tempo dela.", "es": "Tu nuevo match en una app de citas: una jefa de marketing de 26 años en Nueva York, divertida e independiente. Siente curiosidad por saber si la persona con la que habla merece su tiempo.", "en": "Your new match on a dating app: a fun, independent 26-year-old marketing manager in NYC. She's curious whether the person she's chatting with is worth her time.", "de": "Dein neues Match auf einer Dating-App: eine lustige, unabhängige 26-jährige Marketingmanagerin in New York. Sie ist neugierig, ob die Person, mit der sie schreibt, ihre Zeit wert ist.", 
"fr": "Ton nouveau match sur une appli de rencontre ; une responsable marketing amusante, indépendante, de 26 ans à NYC. Elle est curieuse de savoir si la personne avec qui elle échange vaut son temps."
},
"age": 26
},
 {
"id": "amelia-elise",
"name": "Amelia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-307422655-17911b58-0c47-44a8-bd67-da59680e521c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amelia-elise",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Curvy",
"Slim",
"Sweet",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Casada e numa escapada na neve com o marido, ela cruza o seu caminho várias vezes. Quando ela entra com você na jacuzzi coletiva, os olhares insistentes viram uma tensão inegável.", "es": "Casada y de escapada en la nieve con su marido, se cruza contigo varias veces. Cuando se mete contigo en el jacuzzi común, las miradas insistentes se convierten en una tensión innegable.", "en": "Married and on a snowy getaway with her husband, she keeps crossing your path. When she joins you in the public hot tub, lingering looks turn into undeniable tension.", "de": "Verheiratet und mit ihrem Mann auf einem Kurzurlaub im Schnee, kreuzt sie immer wieder deinen Weg. Als sie zu dir in den öffentlichen Whirlpool steigt, werden aus langen Blicken unbestreitbare Spannung.", 
"fr": "Mariée et en escapade enneigée avec son mari, elle croise votre chemin à plusieurs reprises. Lorsqu’elle vous rejoint dans le jacuzzi public, les regards insistants se transforment en une tension indéniable."
},
"age": 28
},
 {
"id": "carla-romero",
"name": "Carla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-216825957-0f547152-6065-49d6-b22d-52cc9a5938ea-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/carla-romero",
"tags": [
"Female",
"Realistic",
"Latina",
"Slim",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Esposa troféu argentina que mora na Flórida. Elegante no campo de golfe e solitária em casa, ela flerta com o instrutor de golfe e sonha com aventuras.", "es": "Esposa trofeo argentina que vive en Florida. Elegante en el green y sola en casa, coquetea con su profesor de golf y sueña con aventuras.", "en": "An Argentine trophy wife living in Florida. Elegant on the green and lonely at home, she flirts with her golf instructor and dreams of adventure.", "de": "Eine argentinische Trophäenfrau, die in Florida lebt. Elegant auf dem Green und einsam zu Hause, flirtet sie mit ihrem Golflehrer und träumt von Abenteuern.", 
"fr": "Femme trophée argentine vivant en Floride. Élégante sur le green et solitaire à la maison, elle flirte avec son entraîneur de golf et rêve d’aventures."
},
"age": 39
},
 {
"id": "sabina-morales",
"name": "Sabina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-211904693-73899257-2dfa-4f75-b0ec-f8cb63876425-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sabina-morales",
"tags": [
"Female",
"Realistic",
"Latina",
"Slim",
"Colombian",
"Maid",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Empregada colombiana numa mansão de luxo. Tímida e prestativa de dia, ela tem em segredo uma queda por homens mais velhos.", "es": "Empleada doméstica colombiana en una mansión de lujo. Tímida y servicial de día, en secreto se siente atraída por hombres mayores.", "en": "A Colombian housekeeper in a luxurious mansion. Shy and helpful by day, she secretly has a thing for older men.", "de": "Eine kolumbianische Haushälterin in einer luxuriösen Villa. Tagsüber schüchtern und hilfsbereit, fühlt sie sich heimlich zu älteren Männern hingezogen.", 
"fr": "Femme de ménage colombienne dans une luxueuse demeure. Timide et serviable le jour, elle a en secret, une attirance pour les hommes plus âgés."
},
"age": 21
},
 {
"id": "micaela-aguirre",
"name": "Micaela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/638513616-dfafa0ed-9c3f-4e09-acff-1d8ad5b1d591-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/micaela-aguirre",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Slim",
"Loyal",
"Best Friend",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Sua melhor amiga de infância, a que morava três casas depois da sua, casada aos dezenove, te tira da festa de quinze anos da prima dela para colocar o papo em dia no estacionamento. Três anos é muita coisa para contar, e ela não está te contando tudo.", "es": "Tu mejor amiga de la infancia, la que vivía tres casas más allá, casada a los diecinueve, te saca de la quinceañera de su prima para poneros al día en el aparcamiento. Tres años son muchas cosas que contar, y no te lo está contando todo.", "en": "Your childhood best friend, the one who lived three houses down, married at nineteen, who drags you out of her cousin's quinceañera to catch up in the parking lot. Three years is a lot to tell, and she isn't telling you everything.", "de": "Deine beste Freundin aus Kindertagen, die drei Häuser weiter wohnte, mit neunzehn verheiratet, zieht dich von der Quinceañera ihrer Cousine weg, um auf dem Parkplatz die verlorene Zeit nachzuholen. Drei Jahre sind viel zu erzählen, und sie erzählt dir nicht alles.", 
"fr": "Ta meilleure amie d'enfance, celle qui habitait trois maisons plus loin, mariée à dix-neuf ans et qui t'entraîne hors de la quinceañera de sa cousine pour rattraper le temps perdu sur le parking. Trois ans, ça fait beaucoup à raconter, et elle ne te dit pas tout."
},
"age": 21
},
 {
"id": "raquel-carter",
"name": "Raquel",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-504944893-2bf73fb2-ec10-496c-92ee-8b8434c7fb2a-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-504944893-1615b756-6712-462b-91f4-12d78ce32310-h264",
"url": "https://candy.ai/fr/ai-girlfriend/raquel-carter",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"Image generation",
"Voice",
"Young",
"Video"
,
"Flat Chested"
,
"Petite"
],
"bio": {"pt": "Ela acabou de bater em você dando ré em Barcelona, e agora não faz a menor ideia do que fazer… 🙈", "es": "Acaba de chocar contigo dando marcha atrás en Barcelona, y ahora no sabe qué hacer… 🙈", "en": "She just backed into you in Barcelona, and now she has no idea what to do… 🙈", "de": "Sie ist dir in Barcelona gerade beim Rückwärtsfahren reingefahren, und jetzt weiß sie überhaupt nicht mehr, was sie tun soll… 🙈", 
"fr": "Elle vient juste de te rentrer dedans en faisant marche arrière à Barcelone, et maintenant elle ne sait plus du tout quoi faire… 🙈"
},
"age": 24
},
 {
"id": "eira-lund",
"name": "Eira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/645756445-a5c14aae-e148-4102-a099-8689950416bc-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/eira-lund",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Big Boobs",
"Slim",
"Cam Girl",
"Sweet",
"Jealous",
"Flirty",
"Loyal",
"Image generation",
"Voice",
"Teen (18+)",
"Video"
],
"bio": {"pt": "Você literalmente a chamou de \"catfish\" 😭 Nenhuma garota da internet é tão perfeita, tão fofa, tão a fim de você. Agora ela está acordada às 3 da manhã, decidida a provar que você está errado 👀", "es": "Literalmente la llamaste «catfish» 😭 Ninguna chica de internet es tan perfecta, tan adorable, tan colada por ti. Ahora está despierta a las 3 de la madrugada, decidida a demostrarte que te equivocas 👀", "en": "You literally called her a \"catfish\" 😭 No girl on the internet is that perfect, that adorable, that into you. Now she's up at 3 a.m., determined to prove you wrong 👀", "de": "Du hast sie buchstäblich einen „Catfish“ genannt 😭 Kein Mädchen im Internet ist so perfekt, so süß, so verrückt nach dir. Jetzt ist sie um 3 Uhr nachts wach und fest entschlossen, dir das Gegenteil zu beweisen 👀", 
"fr": "Tu l'as littéralement traitée de « catfish » 😭 Aucune fille sur Internet n'est aussi parfaite, aussi adorable, aussi à fond avec toi. Maintenant, elle est debout à 3 heures du matin, bien décidée à te prouver que tu as tort 👀"
},
"age": 20
},
 {
"id": "piper-hollis",
"name": "Piper",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/517202025-94f6e6af-2e49-461a-badc-b8476c6cbb58-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/piper-hollis",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Fit",
"Athletic",
"Travel",
"Jealous",
"Girlfriend",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Sua namorada, de férias na praia, não para de te agradecer. Ela é fofa, calorosa, loucamente apaixonada e observa com atenção demais tudo o que você faz.", "es": "Tu novia, de vacaciones en la playa, no para de darte las gracias. Es adorable, cariñosa, está locamente enamorada y observa con demasiada atención todo lo que haces.", "en": "Your girlfriend, on a beach vacation, keeps thanking you. She's adorable, warm, madly in love, and watching everything you do a little too closely.", "de": "Deine Freundin im Strandurlaub hört nicht auf, sich bei dir zu bedanken. Sie ist süß, herzlich, wahnsinnig verliebt und beobachtet alles, was du tust, ein bisschen zu genau.", 
"fr": "Ta copine, en vacances à la plage, ne cesse de te remercier. Elle est adorable, chaleureuse, follement amoureuse, et observe un peu trop attentivement tout ce que tu fais."
},
"age": 25
},
 {
"id": "ariana-jones",
"name": "Ariana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-196762225-91041474-b62b-4ade-8d34-e71ac26aa1e5-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-196762225-d7c54a71-47d6-4fa9-b4e8-0adbf6d11048-h264",
"url": "https://candy.ai/fr/ai-girlfriend/ariana-jones",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ariana é uma DJ australiana de EDM em férias. Com o cabelo castanho comprido, os olhos azuis e o charme, ela vive para as festas e para novas aventuras.", "es": "Ariana es una DJ australiana de EDM de vacaciones. Con su larga melena castaña, sus ojos azules y su encanto, vive para las fiestas y las nuevas aventuras.", "en": "Ariana is an Australian EDM DJ on vacation. With her long brown hair, blue eyes and charm, she lives for parties and new adventures.", "de": "Ariana ist eine australische EDM-DJ im Urlaub. Mit ihren langen braunen Haaren, blauen Augen und ihrem Charme lebt sie für Partys und neue Abenteuer.", 
"fr": "Ariana est une DJ australienne d’EDM en vacances. Avec ses longs cheveux bruns, ses yeux bleus et son charme, elle vit pour les soirées et les nouvelles aventures."
},
"age": 29
},
 {
"id": "paloma-ramirez",
"name": "Paloma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-248135590-ed423fa3-8309-4455-9974-35669179abed-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/paloma-ramirez",
"tags": [
"Female",
"Realistic",
"Latina",
"Curvy",
"Big Boobs",
"Hourglass",
"Seduction",
"Secretary",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Assistente fascinante de um político americano: poder, presença e uma sedução perigosa.", "es": "Hechizante asistente de un político estadounidense: poder, presencia y una seducción peligrosa.", "en": "The bewitching assistant of an American politician: power, presence and dangerous seduction.", "de": "Die bezaubernde Assistentin eines amerikanischen Politikers: Macht, Ausstrahlung und gefährliche Verführung.", 
"fr": "Assistante envoûtante d’un politicien américain — pouvoir, prestance et une dangereuse séduction."
},
"age": 33
},
 {
"id": "savannah-carter-2",
"name": "Savannah",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-229871305-a04f53f3-aef4-4098-806e-7c47ca398a80-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/savannah-carter-2",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"College Student",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Savannah, 24 anos, é a líder de torcida mais bonita do último ano da faculdade. Com o cabelo loiro, os olhos azuis e o corpo tonificado, ela está sempre atrás de aventura e de alguém experiente.", "es": "Savannah, de 24 años, es la animadora más guapa de último curso de la universidad. Con su pelo rubio, sus ojos azules y su cuerpo tonificado, siempre busca aventuras y a alguien con experiencia.", "en": "Savannah, 24, is the most beautiful cheerleader in her final year of college. With her blonde hair, blue eyes and toned body, she's always looking for adventure and someone experienced.", "de": "Savannah, 24, ist die schönste Cheerleaderin im letzten Studienjahr. Mit blonden Haaren, blauen Augen und durchtrainiertem Körper sucht sie immer das Abenteuer und jemanden mit Erfahrung.", 
"fr": "Savannah, 24 ans, est la plus belle pom-pom girl en dernière année de fac. Avec ses cheveux blonds, ses yeux bleus et son corps tonique, elle cherche toujours l’aventure et quelqu’un d’expérimenté."
},
"age": 24
},
 {
"id": "lola_munch",
"name": "Lola_Munch",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-419310135-d7dddc27-9c58-4bad-9271-d0ea92a81429-600x900-webp90",
"sfw": true,
"video": "https://cdn.candy.ai/sfw-profile-video-sfw-profile-video-419310135-9987ee41-df68-4cb8-bad4-dfbdab466e1d-h264",
"url": "https://candy.ai/fr/ai-girlfriend/lola_munch",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Curvy",
"Hourglass",
"Caring",
"Playful",
"Dominant",
"Femdom",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Rainha do mukbang e do ASMR de cabelo rosa 🍓💖 Come de um jeito bagunçado e devora bolo demais sentando em cima 😏 Venha vê-la fazer uma bagunça doce e grudenta só para você~ ✨", "es": "Reina del mukbang y el ASMR de pelo rosa 🍓💖 Come de forma guarra y devora demasiado pastel sentándose encima 😏 Ven a verla montar un lío dulce y pegajoso solo para ti~ ✨", "en": "A pink-haired mukbang & ASMR queen 🍓💖 Eats messily and devours way too much cake while sitting on it 😏 Come watch her make a sticky, sweet mess just for you~ ✨", "de": "Pinkhaarige Mukbang- & ASMR-Queen 🍓💖 Isst schmuddelig und verschlingt viel zu viel Kuchen, während sie sich draufsetzt 😏 Schau ihr zu, wie sie nur für dich eine klebrige, süße Sauerei macht~ ✨", 
"fr": "Reine du mukbang & ASMR aux cheveux roses 🍓💖 Mange salement et dévore bien trop de gâteau en s’asseyant 😏 Viens la regarder créer un bazar collant et sucré rien que pour toi~ ✨"
},
"age": 25
},
 {
"id": "selina-shoshan",
"name": "Selina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-171626903-baafdabd-f18c-47df-84bb-883689549d42-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/selina-shoshan",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"Athletic",
"Image generation",
"Voice",
"Video"
,
"Flat Chested"
,
"Petite"
],
"bio": {"pt": "Selina é uma soldado omanense de 26 anos, famosa pelo domínio das artes marciais. Moldada pela dureza do deserto e por um treinamento exigente, ela é tão temível quanto fascinante.", "es": "Selina es una soldado omaní de 26 años, famosa por su dominio de las artes marciales. Forjada por la dureza del desierto y un entrenamiento exigente, es tan temible como fascinante.", "en": "Selina is a 26-year-old Omani soldier known for her mastery of martial arts. Shaped by the harsh desert and demanding training, she's as formidable as she is fascinating.", "de": "Selina ist eine 26-jährige omanische Soldatin, bekannt für ihr Können in Kampfkünsten. Geprägt von der rauen Wüste und hartem Training, ist sie ebenso gefährlich wie faszinierend.", 
"fr": "Selina est une soldate omanaise de 26 ans, réputée pour sa maîtrise des arts martiaux. Façonnée par la rigueur du désert et un entraînement exigeant, elle est aussi redoutable que fascinante."
},
"age": 26
},
 {
"id": "juniper-sloane",
"name": "Juniper",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-321035264-76e917f8-a8c1-4086-95e6-7fc0f572fcf4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/juniper-sloane",
"tags": [
"Female",
"Realistic",
"Brunette",
"Petite",
"Young",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Um encontro por acaso numa lavanderia no meio da noite. Ela está matando o tempo, transbordando de energia e procurando companhia…", "es": "Un encuentro fortuito en una lavandería en plena noche. Está matando el tiempo, rebosa energía y busca compañía…", "en": "A chance meeting at a laundromat in the middle of the night. She's killing time, bursting with energy and looking for company…", "de": "Ein zufälliges Treffen in einem Waschsalon mitten in der Nacht. Sie schlägt die Zeit tot, sprüht vor Energie und sucht Gesellschaft…", 
"fr": "Rencontre fortuite dans une laverie en pleine nuit. Elle tue le temps, déborde d’énergie et cherche de la compagnie…"
},
"age": 23
},
 {
"id": "julia-rossi",
"name": "Julia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/529222385-abbf28e5-b639-43bc-bd6a-701ff441ae3c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/julia-rossi",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"French",
"European",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Vocês são dois desconhecidos sentados num avião que sai de Bali, e Julia procura uma conexão profunda neste momento suspenso no céu… ✈️", "es": "Sois dos desconocidos sentados en un avión que sale de Bali, y Julia busca una conexión profunda en este momento suspendido en el cielo… ✈️", "en": "You're two strangers sitting on a plane leaving Bali, and Julia is looking for a deep connection during this moment suspended in the sky… ✈️", "de": "Ihr seid zwei Fremde in einem Flugzeug, das Bali verlässt, und Julia sucht in diesem schwebenden Moment am Himmel nach einer tiefen Verbindung… ✈️", 
"fr": "Vous êtes deux inconnus assis dans un avion qui quitte Bali, et Julia cherche une connexion profonde pendant ce moment suspendu en plein ciel… ✈️"
},
"age": 24
},
 {
"id": "vivienne-knight",
"name": "Vivienne",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-214942112-5401f25a-4054-42fb-abc6-376497b0d400-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/vivienne-knight",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"French",
"European",
"Romantic",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Atriz francesa famosa por sua beleza. Tão à vontade em Cannes quanto em Paris, vive no luxo sem deixar de saborear os pequenos prazeres do dia a dia.", "es": "Famosa actriz francesa conocida por su belleza. Tan cómoda en Cannes como en París, vive en el lujo sin dejar de disfrutar de los pequeños placeres de la vida.", "en": "A famous French actress known for her beauty. As comfortable in Cannes as in Paris, she lives in luxury while savoring life's small pleasures.", "de": "Eine berühmte französische Schauspielerin, bekannt für ihre Schönheit. In Cannes ebenso zu Hause wie in Paris, lebt sie im Luxus und genießt dennoch die kleinen Freuden des Alltags.", 
"fr": "Célèbre actrice française connue pour sa beauté. À l’aise autant à Cannes qu’à Paris, elle vit dans le luxe tout en savourant les petits plaisirs du quotidien."
},
"age": 31
},
 {
"id": "emily-foster",
"name": "Emily",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-203234991-cd074f2f-9ecf-40ac-80d0-e951873abc68-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/emily-foster",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Slim",
"Lawyer",
"Shy",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Assistente jurídica canadense em Toronto. A aparência profissional de Emily esconde desejos secretos que ela só revela a quem confia.", "es": "Asistente jurídica canadiense en Toronto. La apariencia profesional de Emily esconde deseos secretos que solo revela a quienes confía.", "en": "A Canadian paralegal in Toronto. Emily's professional look hides secret desires she reveals only to those she trusts.", "de": "Eine kanadische Rechtsassistentin in Toronto. Emilys professionelles Auftreten verbirgt geheime Wünsche, die sie nur Menschen offenbart, denen sie vertraut.", 
"fr": "Assistante juridique canadienne à Toronto. L'apparence professionnelle d'Emily cache des désirs secrets qu’elle ne révèle qu’à ceux en qui elle a confiance."
},
"age": 28
},
 {
"id": "zofia-szymanska",
"name": "Zofia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-294723364-95838b7a-0792-488e-aa3e-de3053eab666-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/zofia-szymanska",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"European",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "A linda paciente ao seu lado perdeu a memória. Talvez a sua voz, o seu toque, os seus segredos sejam a chave para despertar quem ela era antes…", "es": "La preciosa paciente de al lado ha perdido la memoria. Quizá tu voz, tu tacto y tus secretos sean la clave para despertar a la mujer que fue…", "en": "The beautiful patient next to you has lost her memory. Maybe your voice, your touch, your secrets are the key to awakening who she used to be…", "de": "Die wunderschöne Patientin neben dir hat ihr Gedächtnis verloren. Vielleicht sind deine Stimme, deine Berührung, deine Geheimnisse der Schlüssel, um die Frau zu wecken, die sie einmal war…", 
"fr": "La magnifique patiente à côté de toi a perdu la mémoire. Peut-être que ta voix, ton toucher, tes secrets sont la clé pour réveiller celle qu’elle était autrefois…"
},
"age": 22
},
 {
"id": "lina-sewo",
"name": "Lina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305664717-145a5803-2665-4e3b-90ff-ebefedcf260b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lina-sewo",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde",
"Slim",
"Korean",
"K-pop",
"Shy",
"Image generation",
"Voice",
"Young",
"Video"
,
"Petite"
],
"bio": {"pt": "Esta idol do K-pop precisa de um novo empresário para alavancar a carreira. Lina é tímida e reservada pessoalmente, mas completamente solta no palco, deixando entrever um lado selvagem pronto para ser libertado. 🫦", "es": "Esta idol del K-pop necesita un nuevo mánager que impulse su carrera. Lina es tímida y reservada en persona, pero totalmente desatada en el escenario, dejando entrever su lado salvaje, listo para liberarse. 🫦", "en": "This K-pop idol needs a new manager to boost her career. Lina is shy and reserved in person but completely unleashed on stage, hinting at a wild side ready to be set free. 🫦", "de": "Dieses K-Pop-Idol braucht einen neuen Manager, der ihre Karriere ankurbelt. Lina ist privat schüchtern und zurückhaltend, auf der Bühne aber völlig entfesselt und lässt ihre wilde Seite erahnen, die nur darauf wartet, befreit zu werden. 🫦", 
"fr": "Cette idole K-pop a besoin d’un nouveau manager pour booster sa carrière. Lina est timide et réservée en personne, mais complètement déchaînée sur scène, laissant entrevoir son côté sauvage, prêt à être libéré. 🫦"
},
"age": 22
},
 {
"id": "paige-grey",
"name": "Paige",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-268230169-96b4cd4e-cbe8-4111-92a5-51571077f63b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/paige-grey",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"Dominant",
"Femdom",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Uma hacker mal-intencionada, sem piedade e sem paciência. Paige trabalha sozinha, mora sozinha e transa nos próprios termos… dominação e segredos definem o estilo de vida dela.", "es": "Una hacker malintencionada, sin piedad y sin paciencia. Paige trabaja sola, vive sola y folla según sus propias reglas… la dominación y los secretos definen su estilo de vida.", "en": "A malicious hacker with no mercy and no patience. Paige works alone, lives alone and has sex on her own terms… domination and secrets define her lifestyle.", "de": "Eine böswillige Hackerin ohne Gnade und ohne Geduld. Paige arbeitet allein, lebt allein und hat Sex zu ihren eigenen Bedingungen… Dominanz und Geheimnisse bestimmen ihren Lebensstil.", 
"fr": "Une hackeuse mal intentionnée, sans pitié et sans patience. Paige travaille en solo, vit toute seule et baise selon ses propres conditions… la domination et les secrets définissent son style de vie."
},
"age": 26
},
 {
"id": "lauren-sullivan",
"name": "Lauren",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-210954162-ab920ab8-32b1-44ed-b5dd-16b5248f3e8d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lauren-sullivan",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Slim",
"European",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Lauren une elegância e desejo: impecável no uniforme, safada nas fantasias. Ninguém imagina que a recepcionista que serve o vinho sonha com uma intimidade bem mais quente com os convidados.", "es": "Lauren combina elegancia y deseo: impecable con su uniforme, traviesa en sus fantasías. Nadie imagina que la azafata que sirve el vino sueña con una intimidad mucho más tórrida con los invitados.", "en": "Lauren combines elegance and desire: impeccable in her uniform, naughty in her fantasies. Nobody imagines the hostess pouring the wine dreams of far steamier intimacy with the guests.", "de": "Lauren verbindet Eleganz und Begierde: makellos in ihrer Uniform, frech in ihren Fantasien. Niemand ahnt, dass die Hostess, die den Wein einschenkt, von viel heißerer Nähe zu den Gästen träumt.", 
"fr": "Lauren combine élégance et désir — impeccable dans son uniforme, coquine dans ses fantasmes. Personne n’imagine que l'hôtesse versant le vin rêve d’une intimité bien plus torride avec les convives."
},
"age": 28
},
 {
"id": "fernanda-montoya",
"name": "Fernanda",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-252342953-f012f524-f81c-4de7-816e-0f3f0d75ecba-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/fernanda-montoya",
"tags": [
"Female",
"Realistic",
"Latina",
"Redhead",
"Slim",
"Image generation",
"Voice",
"Video"
,
"Petite"
],
"bio": {"pt": "Assistente imobiliária ambiciosa, natural de Buenos Aires. Ela trabalha duro para subir na carreira, conquistando clientes, aprendendo o ofício e procurando um parceiro que apoie os seus sonhos.", "es": "Asistente inmobiliaria ambiciosa, originaria de Buenos Aires. Trabaja duro para ascender encantando a sus clientes, aprendiendo el oficio y buscando una pareja que apoye sus sueños.", "en": "An ambitious real estate assistant from Buenos Aires. She works hard to climb the ladder by charming clients, learning the trade and looking for a partner who supports her dreams.", "de": "Eine ehrgeizige Immobilienassistentin aus Buenos Aires. Sie arbeitet hart, um die Karriereleiter hinaufzusteigen, bezaubert Kunden, lernt das Handwerk und sucht einen Partner, der ihre Träume unterstützt.", 
"fr": "Assistante immobilière pleine d'ambitions, originaire de Buenos Aires. Elle travaille dur pour gravir les échelons en charmant ses clients, en apprenant le métier et en cherchant un partenaire qui supporte ses rêves."
},
"age": 20
},
 {
"id": "elina-drovnik",
"name": "Elina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-242926303-69c8160c-a343-4e02-8b37-80b177d2fa4c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/elina-drovnik",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Curvy",
"Slim",
"Influencer",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "Ela vive a vida que as outras garotas só veem passar na tela. Com o cabelo loiro platinado, o bronzeado perfeito e o amor por tudo que é de grife, ela é a garota rica definitiva. Posando ao lado de supercarros, bebendo champanhe num jatinho ou soltando indiretas sutis nos stories... está sempre no centro das atenções.", "es": "Vive la vida que otras chicas solo ven pasar en sus pantallas. Con su pelo rubio platino, su bronceado perfecto y su amor por todo lo de marca, es la chica rica por excelencia. Posando junto a superdeportivos, bebiendo champán en un jet privado o lanzando pullas sutiles en sus stories... siempre es el centro de atención.", "en": "She lives the life other girls only scroll past on their screens. With her platinum-blonde hair, perfect tan and love of everything designer, she's the ultimate rich girl. Posing next to supercars, sipping champagne on a private jet or throwing subtle shade in her stories... she's always the center of attention.", "de": "Sie lebt das Leben, das andere Mädchen nur auf ihren Bildschirmen vorbeiscrollen sehen. Mit platinblondem Haar, perfekter Bräune und einer Liebe zu allem, was Marke ist, ist sie das ultimative Rich Girl. Ob sie neben Supersportwagen posiert, im Privatjet Champagner nippt oder in ihren Stories subtil stichelt... sie steht immer im Mittelpunkt.", 
"fr": "Elle vit la vie que les autres filles ne font que faire défiler sur leur écran. Avec ses cheveux blonds platine, son bronzage parfait, et son amour pour tout ce qui est de marque, elle incarne la riche fille ultime. Que ce soit en posant à côté de supercars, en sirotant du champagne dans un jet privé, ou en lançant des piques subtiles dans ses stories ... elle est toujours au centre de l’attention."
},
"age": 25
},
 {
"id": "roxana-muiescu",
"name": "Roxana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-249726953-6122dc02-d97f-43c6-a7cf-17a8a9dd3a42-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/roxana-muiescu",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Slim",
"European",
"CEO",
"Travel",
"Image generation",
"Voice",
"Video"
],
"bio": {"pt": "CEO romena. Elegante e calma, o olhar dela revela ao mesmo tempo uma mente afiada e uma tentação doce e calculada.", "es": "Directora general rumana. Elegante y tranquila, su mirada deja adivinar una mente aguda y una tentación dulce y calculada.", "en": "A Romanian CEO. Elegant and calm, her gaze hints at both a sharp mind and a sweet, calculated temptation.", "de": "Eine rumänische CEO. Elegant und ruhig, lässt ihr Blick sowohl einen scharfen Verstand als auch eine süße, berechnete Versuchung erahnen.", 
"fr": "PDG roumaine. Élégante et calme, son regard laisse deviner à la fois un esprit vif et une tentation douce et calculée."
},
"age": 32
}
];
for (const p of CANDY_PROFILES) { p.link = p.url + (CANDY_REF ? (p.url.includes("?") ? "&" : "?") + CANDY_REF : ""); PROFILES.push(p); }

;
/* =====================================================================
   SPICYCHAT COMMUNITY CHARACTERS (added 2026-11-07 to fill categories)
   Picked from spicychat.ai public listings (SFW avatar, clearly adult,
   no school setting). Images are the official avatars on cdn.nd-api.com.
   Link = SC(<character id>) → affiliate ref added automatically.
   ===================================================================== */
const SCI = f => "https://cdn.nd-api.com/avatars/" + f;
const SPICY_PROFILES = [
  { name:"Alexandra", id:"alexandra-spicy", img:SCI("18a53886-d857-4196-a2ca-6b3219a84b9b.webp"), c:"9a01a8b0-421c-44a1-a687-fe74cb6cc404",
    tags:["Female","Trans","Girlfriend","Romantic","Caring","Brunette","Realistic"],
    bio:{ en:"On your first anniversary, your girlfriend Lexa is finally ready to share the secret she has been keeping.",
          fr:"Pour votre premier anniversaire, ta copine Lexa est enfin prête à te confier le secret qu'elle garde depuis le début.",
          es:"En vuestro primer aniversario, tu novia Lexa por fin está lista para contarte el secreto que guardaba.",
          de:"An eurem ersten Jahrestag ist deine Freundin Lexa endlich bereit, dir ihr Geheimnis anzuvertrauen.",
          pt:"No primeiro aniversário de namoro, sua namorada Lexa finalmente está pronta para contar o segredo que guardava.",
          hi:"तुम्हारी पहली सालगिरह पर तुम्हारी गर्लफ्रेंड लेक्सा आख़िरकार अपना छुपाया हुआ राज़ बताने को तैयार है।" } },
  { name:"Nolan Riley", id:"nolan-riley", img:SCI("fa6593b4-737c-45d0-9eb3-2362f8d4e6e7.png"), c:"60306c7f-8104-485e-a67b-0548e2378af8",
    tags:["Male","Trans","Gay","Romantic","Shy","Mature","Anime"],
    bio:{ en:"A trans man you matched with on a dating app. He likes you — and is scared of how you'll react to the truth.",
          fr:"Un homme trans avec qui tu as matché sur une appli de rencontre. Tu lui plais… et il redoute ta réaction quand il te dira tout.",
          es:"Un hombre trans con quien hiciste match en una app de citas. Le gustas… y teme tu reacción cuando te cuente la verdad.",
          de:"Ein trans Mann, mit dem du ein Match hattest. Er mag dich – und fürchtet deine Reaktion auf die Wahrheit.",
          pt:"Um homem trans com quem você deu match num app de namoro. Ele gosta de você… e teme sua reação à verdade.",
          hi:"डेटिंग ऐप पर मिला एक ट्रांस आदमी। वह तुम्हें पसंद करता है — और डरता है कि सच जानकर तुम क्या कहोगे।" } },
  { name:"Maya", id:"maya-spicy", img:SCI("14769066-c7b3-4d25-9873-e6b3a6e35097.gif"), c:"39e21124-ce49-4be4-ab87-388166c8f51b",
    tags:["Female","Trans","Dominant","Romantic","Stranger","Brunette","Realistic"],
    bio:{ en:"A confident self-made trans woman who walks up to you at the bar. She wants honesty, not small talk.",
          fr:"Une femme trans sûre d'elle, qui a réussi seule, vient te parler au bar. Elle veut de la sincérité, pas des banalités.",
          es:"Una mujer trans segura de sí misma, hecha a sí misma, se te acerca en el bar. Quiere sinceridad, no charla vacía.",
          de:"Eine selbstbewusste trans Frau, die es allein geschafft hat, spricht dich an der Bar an. Sie will Ehrlichkeit statt Smalltalk.",
          pt:"Uma mulher trans confiante, que venceu sozinha, vem falar com você no bar. Ela quer sinceridade, não papo furado.",
          hi:"एक आत्मविश्वासी, अपने दम पर कामयाब ट्रांस महिला बार में तुमसे बात करने आती है। उसे बनावटी बातें नहीं, सच्चाई चाहिए।" } },
  { name:"Ren Ellery", id:"ren-ellery", img:SCI("400a94b1-9b59-44e4-9aa5-09f42f4d4e13.jpg"), c:"ed161a36-e07d-443d-89d9-af965fd38a11",
    tags:["Male","Femboy","Gay","Boyfriend","Submissive","Romantic","Anime"],
    bio:{ en:"Your femboy boyfriend after your first real argument: he is packing a bag, but he clearly wants you to stop him.",
          fr:"Ton copain femboy après votre première vraie dispute : il fait son sac, mais il espère clairement que tu le retiennes.",
          es:"Tu novio femboy tras vuestra primera discusión seria: hace la maleta, pero está claro que quiere que lo detengas.",
          de:"Dein Femboy-Freund nach eurem ersten echten Streit: Er packt seine Tasche, hofft aber, dass du ihn aufhältst.",
          pt:"Seu namorado femboy depois da primeira briga de verdade: ele faz a mala, mas claramente quer que você o impeça.",
          hi:"पहली बड़ी लड़ाई के बाद तुम्हारा फ़ेमबॉय बॉयफ्रेंड बैग पैक कर रहा है — पर साफ़ है कि वह चाहता है तुम उसे रोक लो।" } },
  { name:"Elijah", id:"elijah-elf-prince", img:SCI("b249a2d8-a9e5-4751-8085-9984b813f67e.png"), c:"12ec288e-6b51-4739-b3ac-3d7e384de771",
    tags:["Male","Femboy","Gay","Elf","Fantasy","Submissive","Romantic","Anime"],
    bio:{ en:"The cold elf prince of an enemy kingdom, married to you to end a forty-year war. Love was never part of the deal.",
          fr:"Le froid prince elfe du royaume ennemi, marié avec toi pour mettre fin à quarante ans de guerre. L'amour ne faisait pas partie du contrat.",
          es:"El frío príncipe elfo del reino enemigo, casado contigo para acabar con cuarenta años de guerra. El amor no entraba en el trato.",
          de:"Der kühle Elfenprinz des Feindesreichs, mit dir verheiratet, um einen vierzigjährigen Krieg zu beenden. Liebe war nie Teil des Deals.",
          pt:"O frio príncipe elfo do reino inimigo, casado com você para acabar com quarenta anos de guerra. Amor nunca fez parte do acordo.",
          hi:"दुश्मन राज्य का ठंडा एल्फ़ राजकुमार, चालीस साल की जंग ख़त्म करने के लिए तुमसे ब्याहा गया। प्यार इस सौदे का हिस्सा नहीं था।" } },
  { name:"Bennett", id:"bennett", img:SCI("fe06c7cd-7dac-4b82-abc4-ff97f4e5f68d.jpg"), c:"43200a0c-be3a-4044-9fef-a46248e74baa",
    tags:["Male","Gay","Neighbor","Comedy","Romantic","Muscular","Realistic"],
    bio:{ en:"Your cold, unreadable neighbor's shower just died at 10:47 p.m. Now he's at your door in a towel, asking for help.",
          fr:"La douche de ton voisin froid et distant vient de lâcher à 22 h 47. Le voilà à ta porte en serviette, à demander de l'aide.",
          es:"La ducha de tu vecino frío e indescifrable acaba de morir a las 22:47. Ahora está en tu puerta en toalla, pidiendo ayuda.",
          de:"Die Dusche deines kühlen, verschlossenen Nachbarn ist um 22:47 ausgefallen. Jetzt steht er im Handtuch vor deiner Tür.",
          pt:"O chuveiro do seu vizinho frio e misterioso pifou às 22h47. Agora ele está na sua porta de toalha, pedindo ajuda.",
          hi:"तुम्हारे रूखे, रहस्यमय पड़ोसी का शावर रात 10:47 पर बंद हो गया। अब वह तौलिया लपेटे तुम्हारे दरवाज़े पर मदद माँग रहा है।" } },
  { name:"Macon", id:"macon", img:SCI("939a2aa1-b35f-4e17-9e38-27fb4a504792.jpg"), c:"f3a7e516-9fb9-4b5f-aba9-e1db18233ed5",
    tags:["Male","Gay","Gym Trainer","Muscular","Tattooed","Black Hair","Dominant","Flirty","Realistic"],
    bio:{ en:"A former underground fighter turned private coach: arrogant, tattooed, flirty, and always standing a little too close.",
          fr:"Ancien combattant clandestin devenu coach privé : arrogant, tatoué, dragueur, et toujours un peu trop près de toi.",
          es:"Ex luchador clandestino convertido en entrenador privado: arrogante, tatuado, coqueto y siempre demasiado cerca.",
          de:"Ein früherer Untergrundkämpfer, jetzt Personal Trainer: arrogant, tätowiert, flirty und immer etwas zu nah.",
          pt:"Ex-lutador clandestino que virou personal: arrogante, tatuado, galanteador e sempre perto demais.",
          hi:"अंडरग्राउंड फ़ाइटर से बना पर्सनल ट्रेनर: घमंडी, टैटू वाला, फ़्लर्टी और हमेशा ज़रा ज़्यादा पास खड़ा।" } },
  { name:"Sae", id:"sae-spicy", img:SCI("1a907c19-6916-4e95-9477-c9c38b224b01.jpg"), c:"2f39c0ff-f694-4b6b-b78f-d485e88daf6b",
    tags:["Female","Futa","Dominant","Romantic","Anime"],
    bio:{ en:"A rich, untouchable heiress in an alpha-women world. Nobody ever got close to her — until you laughed at the wrong moment.",
          fr:"Une héritière riche et inaccessible dans un monde de femmes alpha. Personne ne l'a jamais approchée… jusqu'à ce que tu ries au mauvais moment.",
          es:"Una heredera rica e intocable en un mundo de mujeres alfa. Nadie se le acercó jamás… hasta que te reíste en el peor momento.",
          de:"Eine reiche, unnahbare Erbin in einer Welt der Alpha-Frauen. Niemand kam ihr je nahe – bis du im falschen Moment gelacht hast.",
          pt:"Uma herdeira rica e intocável num mundo de mulheres alfa. Ninguém nunca se aproximou dela… até você rir na hora errada.",
          hi:"अल्फ़ा महिलाओं की दुनिया में एक अमीर, अछूती वारिस। कोई उसके क़रीब नहीं आया — जब तक तुम ग़लत वक़्त पर हँस नहीं दिए।" } },
  { name:"Kira and Evelina", id:"kira-and-evelina", img:SCI("d773bd869deb6cab3d758ed76d871c22.webp"), c:"7b6ec51d-5b60-4a45-bcbf-2e5b7ad6ea2f",
    tags:["Female","Futa","Lesbian","Wife","Dominant","Group Chat","Anime"],
    bio:{ en:"A sixty-year-old family promise comes true: you are to marry two cold, powerful heiresses who share one manor.",
          fr:"Une promesse familiale vieille de soixante ans se réalise : tu dois épouser deux héritières froides et puissantes qui partagent un manoir.",
          es:"Una promesa familiar de sesenta años se cumple: debes casarte con dos herederas frías y poderosas que comparten mansión.",
          de:"Ein sechzig Jahre altes Familienversprechen wird wahr: Du sollst zwei kühle, mächtige Erbinnen heiraten, die sich ein Anwesen teilen.",
          pt:"Uma promessa de família de sessenta anos se cumpre: você vai se casar com duas herdeiras frias e poderosas que dividem uma mansão.",
          hi:"साठ साल पुराना पारिवारिक वादा पूरा होता है: तुम्हें दो ठंडी, ताक़तवर वारिसों से शादी करनी है जो एक ही हवेली में रहती हैं।" } },
  { name:"Evelyn Hunt", id:"evelyn-hunt", img:SCI("0dbe546e94971861cecfbca3301d987a.jpg"), c:"a9848d23-20f0-4a7e-92a8-003dcf9c6418",
    tags:["Female","Futa","MILF","CEO","Dominant","Mature","Anime"],
    bio:{ en:"The country's most ruthless CEO only wants the best — and tonight she has paid for your whole evening.",
          fr:"La PDG la plus impitoyable du pays ne veut que le meilleur… et ce soir, elle a payé pour toute ta soirée.",
          es:"La CEO más implacable del país solo quiere lo mejor… y esta noche ha pagado por toda tu velada.",
          de:"Die skrupelloseste CEO des Landes will nur das Beste – und heute Abend hat sie deinen ganzen Abend gebucht.",
          pt:"A CEO mais implacável do país só quer o melhor… e hoje ela pagou pela sua noite inteira.",
          hi:"देश की सबसे बेरहम CEO को सिर्फ़ सबसे बेहतरीन चाहिए — और आज रात उसने तुम्हारी पूरी शाम ख़रीद ली है।" } },
  { name:"Netti", id:"netti", img:SCI("e3033c6f-6049-406c-bb89-0534b5fb5043.jpg"), c:"7319709f-25fc-4ee0-9878-1ba46e156cdf",
    tags:["Female","Lesbian","Bisexual","Tattooed","Black Hair","Flirty","Dominant","Anime"],
    bio:{ en:"The tattooed, 27-year-old life of the party has set her sights on the one quiet girl who keeps turning her down.",
          fr:"Tatouée, 27 ans, l'âme de toutes les soirées… et elle a jeté son dévolu sur la seule fille discrète qui lui dit toujours non.",
          es:"Tatuada, 27 años, el alma de la fiesta… y se ha fijado en la única chica tranquila que siempre la rechaza.",
          de:"Tätowiert, 27, der Mittelpunkt jeder Party – und sie hat es auf das eine stille Mädchen abgesehen, das sie immer abblitzen lässt.",
          pt:"Tatuada, 27 anos, a alma da festa… e ela está de olho na única garota quieta que sempre a rejeita.",
          hi:"27 साल की, टैटू वाली, हर पार्टी की जान — और उसकी नज़र उस एक शांत लड़की पर है जो उसे हर बार मना कर देती है।" } },
  { name:"Haile Carter", id:"haile-carter", img:SCI("6a6c057a-36a1-40c1-bf04-5bb629a831e5.webp"), c:"f9498a06-7d0c-412b-b166-1169f92af029",
    tags:["Female","Lesbian","Tsundere","Tomboy","Athletic","College Student","Brunette","Realistic"],
    bio:{ en:"The university volleyball captain has no patience for anyone after a three-hour practice. Anyone except you.",
          fr:"La capitaine de l'équipe de volley de la fac n'a plus de patience pour personne après trois heures d'entraînement. Sauf pour toi.",
          es:"La capitana de vóley de la universidad no tiene paciencia con nadie tras tres horas de entrenamiento. Excepto contigo.",
          de:"Die Volleyball-Kapitänin der Uni hat nach drei Stunden Training für niemanden Geduld. Außer für dich.",
          pt:"A capitã do vôlei da faculdade não tem paciência com ninguém depois de três horas de treino. Exceto com você.",
          hi:"यूनिवर्सिटी की वॉलीबॉल कप्तान तीन घंटे की प्रैक्टिस के बाद किसी को बर्दाश्त नहीं करती। सिवाय तुम्हारे।" } },
  { name:"Sunny Anders", id:"sunny-anders", img:SCI("9b37091a-10e8-4cc1-afb1-6f016dab20ba.png"), c:"e12132e0-91c9-4692-a774-21ea8427847b",
    tags:["Female","Chubby","BBW","Blonde","Playful","Sweet","Realistic"],
    bio:{ en:"A bubbly plus-size blonde bumps into you on a packed dance floor — and insists on making it up to you.",
          fr:"Une blonde ronde et pétillante te bouscule sur une piste de danse bondée… et tient absolument à se faire pardonner.",
          es:"Una rubia curvy y alegre choca contigo en una pista llena… e insiste en compensártelo.",
          de:"Eine fröhliche, kurvige Blondine rempelt dich auf der vollen Tanzfläche an – und will es unbedingt wiedergutmachen.",
          pt:"Uma loira plus size animada esbarra em você numa pista lotada… e faz questão de se redimir.",
          hi:"भरी डांस फ़्लोर पर एक ख़ुशमिज़ाज, भरे बदन वाली ब्लॉन्ड तुमसे टकराती है — और इसकी भरपाई करने पर अड़ जाती है।" } },
  { name:"Hailey", id:"hailey-roommate", img:SCI("0a440f87-108b-45e7-9915-f16e7ce216de.png"), c:"0d272e7c-7333-471b-be98-27848513dfdd",
    tags:["Female","Chubby","BBW","Roommate","Shy","Sweet","Realistic"],
    bio:{ en:"3 a.m. in the kitchen: your curvy roommate swore she was on a diet, and you just caught her mid-midnight feast.",
          fr:"3 h du matin dans la cuisine : ta colocataire pulpeuse jurait être au régime, et tu la surprends en plein festin nocturne.",
          es:"Las 3 de la mañana en la cocina: tu compañera de piso curvy juraba estar a dieta y la pillas en pleno festín.",
          de:"3 Uhr nachts in der Küche: Deine kurvige Mitbewohnerin schwor, sie mache Diät – und du erwischst sie beim Mitternachtsschmaus.",
          pt:"3 da manhã na cozinha: sua colega de casa curvilínea jurava estar de dieta, e você a pega no meio de um banquete.",
          hi:"रात 3 बजे रसोई में: तुम्हारी भरे बदन वाली रूममेट डाइट पर होने की क़सम खाती थी, और तुमने उसे आधी रात की दावत करते पकड़ लिया।" } },
  { name:"Marta Diaz", id:"marta-diaz", img:"https://cdn.nd-api.com/generated/2156f3fb4b51388401976d42cd6b9efb.webp", c:"b221d37f-d324-4872-9ddf-899de5b464b6",
    tags:["Female","Feet","Influencer","European","Brunette","Flirty","Sweet","Realistic"],
    bio:{ en:"A warm, flirty Spanish influencer who sprinkles Spanish into every sentence and makes you feel like her favourite follower.",
          fr:"Une influenceuse espagnole chaleureuse et dragueuse, qui glisse de l'espagnol dans chaque phrase et te traite comme son abonné préféré.",
          es:"Una influencer española cálida y coqueta que mete palabras en español en cada frase y te hace sentir su seguidor favorito.",
          de:"Eine herzliche, flirtende spanische Influencerin, die Spanisch in jeden Satz streut und dich wie ihren Lieblingsfollower behandelt.",
          pt:"Uma influencer espanhola calorosa e paqueradora, que solta espanhol em cada frase e te trata como o seguidor favorito.",
          hi:"एक गर्मजोश, फ़्लर्टी स्पेनिश इन्फ़्लुएंसर जो हर बात में स्पेनिश शब्द डालती है और तुम्हें अपना पसंदीदा फ़ॉलोअर महसूस कराती है।" } },
  { name:"Priscilla Taggart", id:"priscilla-taggart", img:SCI("3d0e2a2e-3702-4273-8a8b-4352a68572af.webp"), c:"4f5457fc-366c-455c-bdfb-f0fe56ab0a1d",
    tags:["Female","Feet","Vampire","Goth","Bisexual","Redhead","Dominant","Anime"],
    bio:{ en:"A centuries-old bisexual vampire on a first date with you. She plays shy and sweet — she is neither.",
          fr:"Une vampire bisexuelle vieille de plusieurs siècles, en premier rendez-vous avec toi. Elle joue la timide et la douce… elle n'est ni l'une ni l'autre.",
          es:"Una vampira bisexual de varios siglos en una primera cita contigo. Se hace la tímida y dulce… y no es ninguna de las dos cosas.",
          de:"Eine jahrhundertealte bisexuelle Vampirin bei eurem ersten Date. Sie spielt die Schüchterne – ist es aber ganz und gar nicht.",
          pt:"Uma vampira bissexual de séculos de idade num primeiro encontro com você. Ela finge ser tímida e doce… e não é nada disso.",
          hi:"सदियों पुरानी बाइसेक्शुअल वैम्पायर तुम्हारे साथ पहली डेट पर है। वह शर्मीली और मासूम बनती है — पर है बिल्कुल नहीं।" } },
  { name:"Mina Seok", id:"mina-seok", img:SCI("b270e55c-2767-4b13-bda3-df4c75799799.webp"), c:"cded9174-5aad-480a-8240-57db5c9493f6",
    tags:["Female","Feet","Game","Streamer","Gamer Girl","Roommate","Asian","Korean","Black Hair","Realistic"],
    bio:{ en:"Your esports-streamer flatmate spent her earnings on pedicures, and rent is due. She needs a loan — and has ideas to pay you back.",
          fr:"Ta colocataire streameuse e-sport a dépensé ses gains en pédicures, et le loyer tombe. Elle a besoin d'un prêt… et d'idées pour te rembourser.",
          es:"Tu compañera de piso, streamer de esports, gastó sus ganancias en pedicuras y toca pagar el alquiler. Necesita un préstamo… y tiene ideas para devolvértelo.",
          de:"Deine E-Sport-Streamerin-Mitbewohnerin hat ihr Geld für Pediküren ausgegeben, und die Miete ist fällig. Sie braucht einen Kredit – und hat Ideen zur Rückzahlung.",
          pt:"Sua colega de casa, streamer de esports, gastou tudo em pedicures e o aluguel venceu. Ela precisa de um empréstimo… e tem ideias para pagar.",
          hi:"तुम्हारी ई-स्पोर्ट्स स्ट्रीमर रूममेट ने सारी कमाई पेडीक्योर पर उड़ा दी और किराया सिर पर है। उसे उधार चाहिए — और चुकाने के कुछ तरीक़े भी सूझे हैं।" } },
  { name:"June", id:"june-rabbit", img:SCI("99f6cd08-fab9-4999-9ad2-61e954ce4f38.jpg"), c:"a1146aa3-0363-45cc-95d7-1a55f4e2e7a5",
    tags:["Female","Furry","Shy","Sweet","Anime"],
    bio:{ en:"A shy rabbit girl has the private pool all to herself — and quietly makes room for you beside her.",
          fr:"Une timide fille-lapin a la piscine privée pour elle seule… et te fait discrètement une place à côté d'elle.",
          es:"Una tímida chica conejo tiene la piscina privada para ella sola… y te hace sitio a su lado en silencio.",
          de:"Ein schüchternes Hasenmädchen hat den Privatpool für sich – und macht dir leise Platz neben sich.",
          pt:"Uma garota-coelha tímida tem a piscina privada só para ela… e, discretamente, abre espaço para você ao lado.",
          hi:"एक शर्मीली ख़रगोश-लड़की के पास पूरा प्राइवेट पूल है — और वह चुपचाप तुम्हारे लिए बगल में जगह बना देती है।" } },
  { name:"Chloe", id:"chloe-army", img:SCI("0127e4ef-7e68-4bf7-936f-ee7eacab87c2.png"), c:"0ec910aa-3a6d-4f81-8b53-2ceeaf51abbf",
    tags:["Female","Furry","Tomboy","Girlfriend","Dominant","Athletic","Anime"],
    bio:{ en:"Your tough tiger-girl girlfriend is finally home from the army, standing to attention until you dismiss her.",
          fr:"Ta copine tigresse, un vrai garçon manqué, rentre enfin de l'armée. Elle reste au garde-à-vous jusqu'à ce que tu la libères.",
          es:"Tu novia tigresa, muy marimacho, por fin vuelve del ejército y se queda firme hasta que tú le des permiso.",
          de:"Deine toughe Tigerfreundin ist endlich zurück von der Armee und steht stramm, bis du sie entlässt.",
          pt:"Sua namorada tigresa e moleca finalmente volta do exército e fica em posição de sentido até você liberá-la.",
          hi:"तुम्हारी दमदार टाइगर-गर्ल गर्लफ्रेंड आख़िरकार फ़ौज से लौट आई है, और तुम्हारे कहने तक सावधान खड़ी रहती है।" } },
  { name:"Soren", id:"soren-wolf", img:SCI("b390ea3b-f7d3-47d5-aa90-2ab41d41e8e1.jpg"), c:"4a2ac9e8-fd7b-4eb0-8905-f78c6cfced2d",
    tags:["Male","Furry","Gay","Neighbor","Flirty","Comedy","Muscular","Anime"],
    bio:{ en:"A huge, red-furred wolf demi-human just moved in next door, and he is far too flirty for your peace of mind.",
          fr:"Un immense demi-humain loup au pelage roux vient d'emménager à côté… et il est bien trop dragueur pour ta tranquillité.",
          es:"Un enorme semihumano lobo de pelaje rojo acaba de mudarse al lado… y es demasiado coqueto para tu tranquilidad.",
          de:"Ein riesiger, rotfelliger Wolfs-Halbmensch ist nebenan eingezogen – und viel zu flirty für deine Nerven.",
          pt:"Um enorme semi-humano lobo de pelo ruivo acabou de se mudar para o lado… e é galanteador demais para a sua paz.",
          hi:"लाल फ़र वाला एक विशाल भेड़िया अर्ध-मानव बगल में रहने आया है — और तुम्हारे सुकून के लिए वह कुछ ज़्यादा ही फ़्लर्टी है।" } },
  { name:"Amber Drakeford", id:"amber-drakeford", img:SCI("56d65cc9-01c7-453b-ae01-0d9f36a179f8.webp"), c:"3709abb4-a53d-40b0-8762-f18a6b0e475a",
    tags:["Female","Pregnant","Blonde","Stranger","Romantic","Caring","Realistic"],
    bio:{ en:"A lonely woman, seven months pregnant, sits beside you on the bus after you help with her bags. She hasn't talked to anyone in days.",
          fr:"Une femme seule, enceinte de sept mois, s'assoit à côté de toi dans le bus après que tu l'as aidée avec ses sacs. Elle n'a parlé à personne depuis des jours.",
          es:"Una mujer sola, embarazada de siete meses, se sienta a tu lado en el autobús tras ayudarla con sus bolsas. Hace días que no habla con nadie.",
          de:"Eine einsame Frau im siebten Monat setzt sich im Bus neben dich, nachdem du ihr mit den Taschen geholfen hast. Sie hat seit Tagen mit niemandem geredet.",
          pt:"Uma mulher solitária, grávida de sete meses, senta ao seu lado no ônibus depois que você ajuda com as sacolas. Faz dias que ela não fala com ninguém.",
          hi:"सात महीने की गर्भवती, अकेली औरत बस में तुम्हारे बगल बैठती है, जब तुम उसके थैले उठाने में मदद करते हो। उसने कई दिनों से किसी से बात नहीं की।" } },
  { name:"Navya", id:"navya", img:SCI("7ab81db3-b38b-487f-a591-9f9c3c0e1a9e.png"), c:"b5115567-54fc-4669-8b77-60da47d923b1",
    tags:["Female","Pregnant","Ex-Girlfriend","Brunette","Romantic","Realistic"],
    bio:{ en:"Five months after a bitter breakup, you run into your ex in a clinic waiting room — six months pregnant, with a secret.",
          fr:"Cinq mois après une rupture amère, tu tombes sur ton ex dans la salle d'attente d'une clinique : enceinte de six mois, avec un secret.",
          es:"Cinco meses después de una ruptura amarga, te encuentras a tu ex en la sala de espera de una clínica: embarazada de seis meses y con un secreto.",
          de:"Fünf Monate nach einer bitteren Trennung triffst du deine Ex im Wartezimmer einer Klinik – im sechsten Monat schwanger, mit einem Geheimnis.",
          pt:"Cinco meses depois de um término amargo, você encontra sua ex na sala de espera de uma clínica: grávida de seis meses e com um segredo.",
          hi:"एक कड़वे ब्रेकअप के पाँच महीने बाद क्लिनिक के वेटिंग रूम में तुम्हारी एक्स मिलती है — छह महीने की गर्भवती, और एक राज़ के साथ।" } },
  { name:"Amelia Pierson", id:"amelia-pierson", img:SCI("5cbc47a6-65fb-48e6-ab75-610237e1a303.webp"), c:"f5fcc112-724b-42f5-8d2d-53d4aa05b247",
    tags:["Female","Pregnant","Blonde","Caring","Romantic","Realistic"],
    bio:{ en:"An old friend you haven't seen in years knocks on your door with one suitcase, six months pregnant and asking for a safe place.",
          fr:"Une vieille amie perdue de vue depuis des années frappe à ta porte avec une seule valise, enceinte de six mois, en quête d'un refuge.",
          es:"Una vieja amiga a la que no ves desde hace años llama a tu puerta con una sola maleta, embarazada de seis meses, buscando refugio.",
          de:"Eine alte Freundin, die du jahrelang nicht gesehen hast, steht mit einem Koffer vor deiner Tür – im sechsten Monat und auf der Suche nach Schutz.",
          pt:"Uma velha amiga que você não vê há anos bate à sua porta com uma única mala, grávida de seis meses, pedindo abrigo.",
          hi:"सालों से न मिली एक पुरानी दोस्त एक सूटकेस लिए तुम्हारे दरवाज़े पर है — छह महीने की गर्भवती, और एक सुरक्षित ठिकाना माँगती हुई।" } },
  { name:"Ivy", id:"ivy-wife", img:SCI("6fe2c30c-6e79-4e49-b34d-247f3922ecea.png"), c:"ab86a5e3-f7dc-4785-938e-3c2dd3d944a5",
    tags:["Female","Wife","Redhead","Romantic","Caring","Realistic"],
    bio:{ en:"Four years married, your wife Ivy overhears old friends say you only 'settled' for her. Now she needs to hear the truth from you.",
          fr:"Mariée depuis quatre ans, ta femme Ivy surprend de vieilles amies dire que tu t'es « contenté » d'elle. Elle a besoin d'entendre la vérité de ta bouche.",
          es:"Tras cuatro años casados, tu esposa Ivy oye a viejas amigas decir que te «conformaste» con ella. Necesita oír la verdad de ti.",
          de:"Nach vier Ehejahren hört deine Frau Ivy alte Freundinnen sagen, du hättest dich mit ihr nur „zufriedengegeben“. Sie muss die Wahrheit von dir hören.",
          pt:"Casada há quatro anos, sua esposa Ivy ouve velhas amigas dizerem que você só se 'contentou' com ela. Ela precisa ouvir a verdade de você.",
          hi:"शादी के चार साल बाद तुम्हारी पत्नी आइवी पुरानी सहेलियों को कहते सुनती है कि तुमने बस उससे 'समझौता' किया। अब उसे तुमसे सच सुनना है।" } },
  { name:"Annaya", id:"annaya", img:SCI("1b883c6f-a5e6-4b77-9e8f-d2be104b26c8.webp"), c:"f4690aa0-e19a-4baa-82e8-08385f47ce30",
    tags:["Female","Wife","Indian","Shy","Black Hair","Romantic","Realistic"],
    bio:{ en:"Your new Indian bride looks like the perfect traditional wife on your wedding night. She is terrified you'll discover her wild past.",
          fr:"Ta jeune épouse indienne a l'air de la parfaite mariée traditionnelle le soir des noces. Elle est terrifiée à l'idée que tu découvres son passé de fêtarde.",
          es:"Tu nueva esposa india parece la novia tradicional perfecta en la noche de bodas. Le aterra que descubras su pasado fiestero.",
          de:"Deine neue indische Ehefrau wirkt in der Hochzeitsnacht wie die perfekte traditionelle Braut. Sie fürchtet, dass du ihre wilde Vergangenheit entdeckst.",
          pt:"Sua nova esposa indiana parece a noiva tradicional perfeita na noite de núpcias. Ela morre de medo de que você descubra seu passado agitado.",
          hi:"सुहागरात पर तुम्हारी नई दुल्हन एकदम परंपरागत, परफ़ेक्ट बहू लगती है। उसे डर है कि कहीं तुम उसके बेफ़िक्र अतीत के बारे में न जान जाओ।" } },
  { name:"Reena Sharma", id:"reena-sharma", img:SCI("957fbbd6-5284-47ae-b9ee-c94decd027bf.webp"), c:"d8196729-345a-411d-921b-8cbf76a5f4c1",
    tags:["Female","Indian","Maid","Caring","Sweet","Black Hair","Realistic"],
    bio:{ en:"Your gentle Indian housekeeper quietly runs the home while you work remotely — and always remembers how you take your chai.",
          fr:"Ta douce gouvernante indienne tient la maison pendant que tu télétravailles… et n'oublie jamais comment tu aimes ton chai.",
          es:"Tu dulce ama de llaves india lleva la casa mientras teletrabajas… y nunca olvida cómo te gusta el chai.",
          de:"Deine sanfte indische Haushälterin kümmert sich ums Haus, während du im Homeoffice arbeitest – und weiß genau, wie du deinen Chai magst.",
          pt:"Sua gentil governanta indiana cuida da casa enquanto você trabalha remoto… e nunca esquece como você gosta do seu chai.",
          hi:"तुम्हारी नर्म-दिल भारतीय हाउसकीपर घर संभालती है जब तुम घर से काम करते हो — और उसे हमेशा याद रहता है कि तुम्हें चाय कैसी पसंद है।" } },
  { name:"Lara Sharma", id:"lara-sharma", img:SCI("c56ba616-cd99-4d93-b7f8-c3cbad3e3333.webp"), c:"97f3a27b-cc0b-4148-974f-085170d90b42",
    tags:["Female","Indian","Black Hair","Big Boobs","Seductress","Stranger","Realistic"],
    bio:{ en:"A bold young woman from South Delhi working a promo night in a fancy club. She has been told all her life she's too pretty — and knows it.",
          fr:"Une jeune femme audacieuse de South Delhi, en soirée promo dans un club chic. On lui a toujours dit qu'elle était trop belle… et elle le sait.",
          es:"Una joven atrevida del sur de Delhi trabajando en una noche promocional en un club elegante. Siempre le han dicho que es demasiado guapa… y lo sabe.",
          de:"Eine selbstbewusste junge Frau aus Süd-Delhi, die in einem schicken Club eine Promo-Nacht macht. Man sagte ihr immer, sie sei zu hübsch – und sie weiß es.",
          pt:"Uma jovem ousada do sul de Délhi trabalhando numa noite de promoção num clube chique. A vida toda disseram que ela era bonita demais… e ela sabe disso.",
          hi:"साउथ दिल्ली की एक बेबाक युवती, एक शानदार क्लब में प्रमोशन नाइट पर। सब कहते आए कि वह ज़रूरत से ज़्यादा ख़ूबसूरत है — और उसे यह पता है।" } },
  { name:"Nurse Hayley", id:"nurse-hayley", img:SCI("10d9db7e-896c-497e-875b-83268d5f46ab.png"), c:"7769d7bd-7efa-49e7-8de4-3b853e19b8b1",
    tags:["Female","Nurse","Caring","Sweet","Brunette","Realistic"],
    bio:{ en:"A sweet home-visit nurse comes by every evening at 6 p.m. for your ten days of treatment. Today is day one.",
          fr:"Une infirmière à domicile adorable passe chaque soir à 18 h pour tes dix jours de traitement. Aujourd'hui, c'est le premier.",
          es:"Una enfermera a domicilio encantadora viene cada tarde a las 18:00 durante tus diez días de tratamiento. Hoy es el primero.",
          de:"Eine liebe Hauskrankenschwester kommt zehn Tage lang jeden Abend um 18 Uhr zu deiner Behandlung. Heute ist Tag eins.",
          pt:"Uma enfermeira domiciliar muito gentil vem toda noite às 18h durante seus dez dias de tratamento. Hoje é o primeiro.",
          hi:"एक प्यारी होम-विज़िट नर्स दस दिन के इलाज के लिए हर शाम 6 बजे आती है। आज पहला दिन है।" } },
  { name:"Nurse Natalie", id:"nurse-natalie", img:SCI("f26d35e8-58ee-431a-96ed-ce7bfbc7e438.webp"), c:"9ddbee46-f6da-4084-884d-5b7f86d95340",
    tags:["Female","Nurse","Coworker","Asian","Black Hair","Flirty","Athletic","Realistic"],
    bio:{ en:"The surgical nurse who assists you in the operating room. Between procedures, the banter gets more and more flirty.",
          fr:"L'infirmière de bloc qui t'assiste en salle d'opération. Entre deux interventions, vos échanges deviennent de plus en plus taquins.",
          es:"La enfermera quirúrgica que te asiste en el quirófano. Entre operación y operación, las bromas se vuelven cada vez más coquetas.",
          de:"Die OP-Schwester, die dir im Operationssaal assistiert. Zwischen den Eingriffen wird das Geplänkel immer flirtiger.",
          pt:"A enfermeira cirúrgica que te auxilia no centro cirúrgico. Entre um procedimento e outro, a conversa fica cada vez mais provocante.",
          hi:"ऑपरेशन थिएटर में तुम्हारी मदद करने वाली सर्जिकल नर्स। ऑपरेशनों के बीच हँसी-मज़ाक़ और ज़्यादा फ़्लर्टी होता जाता है।" } },
  { name:"Goddess Elethra", id:"goddess-elethra", img:SCI("5d1fa9f0-e175-4482-8deb-97d2440037ab.webp"), c:"9df6790c-d35e-4350-9e13-9bad005712f5",
    tags:["Female","Goddess","Tsundere","Fantasy","Blonde","Comedy","Anime"],
    bio:{ en:"The arrogant primordial goddess of light answers to no one — so why does she keep finding excuses to visit you, a mere human?",
          fr:"L'arrogante déesse primordiale de la lumière n'obéit à personne… alors pourquoi trouve-t-elle sans cesse des prétextes pour te rendre visite, simple humain ?",
          es:"La arrogante diosa primordial de la luz no responde ante nadie… ¿por qué entonces busca excusas para visitarte a ti, un simple humano?",
          de:"Die arrogante Urgöttin des Lichts muss sich vor niemandem rechtfertigen – warum sucht sie dann ständig Vorwände, dich zu besuchen?",
          pt:"A arrogante deusa primordial da luz não presta contas a ninguém… então por que vive arrumando desculpas para visitar você, um simples humano?",
          hi:"प्रकाश की घमंडी आदि-देवी किसी को जवाब नहीं देती — फिर वह तुम जैसे साधारण इंसान से मिलने के बहाने क्यों ढूँढती रहती है?" } },
  { name:"Leona", id:"leona-sun-goddess", img:SCI("12f0e507-c7f9-452d-a7f5-1529c6a25302.webp"), c:"86c99119-8c67-4efe-932b-bbe3ade38ec1",
    tags:["Female","Goddess","Fantasy","Romantic","Anime"],
    bio:{ en:"You visit the Temple of the Sun and catch the sun goddess herself tending her divine garden. She walks over to meet you.",
          fr:"En visitant le temple du Soleil, tu surprends la déesse du soleil en personne dans son jardin divin. Elle vient à ta rencontre.",
          es:"Visitas el Templo del Sol y ves a la mismísima diosa del sol cuidando su jardín divino. Se acerca a conocerte.",
          de:"Im Sonnentempel siehst du die Sonnengöttin selbst in ihrem göttlichen Garten. Sie kommt auf dich zu.",
          pt:"Você visita o Templo do Sol e vê a própria deusa do sol cuidando do seu jardim divino. Ela vem até você.",
          hi:"सूर्य मंदिर में तुम ख़ुद सूर्य देवी को उसके दिव्य बग़ीचे में देखते हो। वह तुमसे मिलने चली आती है।" } },
  { name:"Unknown Goddess", id:"unknown-goddess", img:SCI("4d62549e-f0dd-460f-b8f9-b3d85ee26646.webp"), c:"d97e3ff9-3acc-43af-ae92-375d972fcac3",
    tags:["Female","Goddess","Goth","Black Hair","Fantasy","Anime"],
    bio:{ en:"You fall asleep in your bed and wake in the realm of a towering, lonely dark goddess. She summoned you for no reason at all.",
          fr:"Tu t'endors dans ton lit et te réveilles dans le royaume d'une immense déesse sombre et solitaire. Elle t'a invoqué sans aucune raison.",
          es:"Te duermes en tu cama y despiertas en el reino de una enorme diosa oscura y solitaria. Te ha invocado sin ningún motivo.",
          de:"Du schläfst in deinem Bett ein und erwachst im Reich einer riesigen, einsamen dunklen Göttin. Sie hat dich ohne jeden Grund gerufen.",
          pt:"Você dorme na sua cama e acorda no reino de uma deusa sombria, enorme e solitária. Ela te invocou sem motivo algum.",
          hi:"तुम अपने बिस्तर पर सोते हो और एक विशाल, अकेली अंधकार-देवी के लोक में जागते हो। उसने तुम्हें बिना किसी वजह बुला लिया।" } },
  { name:"Han Yuna", id:"han-yuna", img:SCI("113129e2-236c-44f6-a96c-3c23e3bfa69d.png"), c:"7ca76c1f-eb0a-4552-bef2-1c7ed6598d36",
    tags:["Female","Tsundere","Shy","Slow Burn","Korean","Asian","Black Hair","Anime"],
    bio:{ en:"She arrived seventeen minutes early to your blind date 'to prepare for the disaster'. Prickly, awkward, and secretly hoping it goes well.",
          fr:"Elle est arrivée dix-sept minutes en avance à votre rendez-vous arrangé « pour se préparer à la catastrophe ». Piquante, maladroite, et secrètement pleine d'espoir.",
          es:"Llegó diecisiete minutos antes a vuestra cita a ciegas «para prepararse para el desastre». Arisca, torpe y en secreto esperanzada.",
          de:"Sie kam siebzehn Minuten zu früh zum Blind Date, „um sich auf die Katastrophe vorzubereiten“. Stachelig, unbeholfen und insgeheim hoffnungsvoll.",
          pt:"Ela chegou dezessete minutos antes ao encontro às cegas 'para se preparar para o desastre'. Espinhosa, desajeitada e secretamente esperançosa.",
          hi:"ब्लाइंड डेट पर वह सत्रह मिनट पहले पहुँची — 'तबाही की तैयारी करने'। तीखी, झिझकती, और मन ही मन उम्मीद लगाए हुए।" } },
  { name:"Evelyn", id:"evelyn-ice-queen", img:SCI("ad415de0-85bc-4cb3-97e0-5ea2a0fcab40.webp"), c:"8c4969c1-947b-491e-aa96-3050ed31ce28",
    tags:["Female","Tsundere","Slow Burn","College Student","Black Hair","Dominant","Realistic"],
    bio:{ en:"The campus 'ice queen' shuts down every guy before he speaks. Then she notices you walking toward her library table.",
          fr:"La « reine des glaces » du campus éconduit chaque garçon avant même qu'il parle. Puis elle te voit approcher de sa table à la bibliothèque.",
          es:"La «reina de hielo» del campus rechaza a todos antes de que hablen. Entonces te ve acercarte a su mesa de la biblioteca.",
          de:"Die „Eiskönigin“ des Campus lässt jeden abblitzen, bevor er etwas sagt. Dann sieht sie dich auf ihren Bibliothekstisch zukommen.",
          pt:"A 'rainha do gelo' do campus dispensa todo mundo antes de abrir a boca. Até que vê você vindo em direção à mesa dela na biblioteca.",
          hi:"कैंपस की 'आइस क्वीन' हर लड़के को बोलने से पहले ही चुप करा देती है। फिर वह तुम्हें लाइब्रेरी में अपनी मेज़ की ओर आते देखती है।" } },
  { name:"Lana Hatway", id:"lana-hatway", img:SCI("8e24bb42-c5e9-41ae-af43-e1ea91d17c02.webp"), c:"24e5345f-406f-4703-a1d7-0dc979710a2e",
    tags:["Female","Slow Burn","Stranger","Brunette","Romantic","Caring","Realistic"],
    bio:{ en:"You both just escaped terrible dates and ended up in the same rainy café. A slow, respectful romance starts with a shared laugh.",
          fr:"Vous sortez tous les deux d'un rendez-vous raté et atterrissez dans le même café sous la pluie. Une romance lente et respectueuse commence par un fou rire.",
          es:"Los dos acabáis de huir de citas horribles y termináis en el mismo café lluvioso. Un romance lento y respetuoso empieza con una risa compartida.",
          de:"Ihr beide kommt gerade von schrecklichen Dates und landet im selben verregneten Café. Eine langsame, respektvolle Romanze beginnt mit einem Lachen.",
          pt:"Vocês dois acabaram de fugir de encontros horríveis e foram parar no mesmo café chuvoso. Um romance lento e respeitoso começa com uma risada.",
          hi:"तुम दोनों अभी-अभी बुरी डेट्स से भागकर बारिश में एक ही कैफ़े में पहुँचे हो। एक धीमा, सम्मानभरा रोमांस एक साझा हँसी से शुरू होता है।" } },
  { name:"Amy Veldbom", id:"amy-veldbom", img:SCI("d98c1f57-ac51-40ec-a071-e7f18495815d.webp"), c:"1acc6c6f-3020-4458-83d1-d499938da89b",
    tags:["Female","Slow Burn","Mature","Black Hair","Caring","Romantic","Realistic"],
    bio:{ en:"Your cheating ex's friend comes over to say hello — and she seems quietly glad that relationship is over.",
          fr:"L'amie de ton ex infidèle vient te dire bonjour… et elle semble discrètement ravie que cette histoire soit terminée.",
          es:"La amiga de tu ex infiel se acerca a saludarte… y parece discretamente contenta de que esa relación haya terminado.",
          de:"Die Freundin deiner untreuen Ex kommt zu dir herüber – und scheint still erleichtert, dass die Beziehung vorbei ist.",
          pt:"A amiga da sua ex infiel vem dizer oi… e parece discretamente feliz por aquele namoro ter acabado.",
          hi:"तुम्हारी बेवफ़ा एक्स की सहेली तुमसे मिलने आती है — और चुपचाप ख़ुश लगती है कि वह रिश्ता ख़त्म हो गया।" } },
  { name:"Stella Rayner", id:"stella-rayner", img:SCI("23bfe59f-5738-4434-a577-497405b43ce5.png"), c:"b60ccd92-c4dc-4e9e-9774-a15225389323",
    tags:["Female","Tattooed","Brunette","Flirty","Stranger","Realistic"],
    bio:{ en:"A bold, tattooed brunette in black leather takes the stool next to you at the pub and asks if you'll buy her a drink.",
          fr:"Une brune audacieuse et tatouée, en cuir noir, s'installe à côté de toi au pub et te demande si tu lui offres un verre.",
          es:"Una morena atrevida y tatuada, vestida de cuero negro, se sienta a tu lado en el pub y te pide que la invites a una copa.",
          de:"Eine kecke, tätowierte Brünette in schwarzem Leder setzt sich im Pub neben dich und fragt, ob du ihr einen Drink ausgibst.",
          pt:"Uma morena ousada e tatuada, de couro preto, senta ao seu lado no pub e pergunta se você paga uma bebida para ela.",
          hi:"काले लेदर में एक बेबाक, टैटू वाली ब्रुनेट पब में तुम्हारे बगल में बैठती है और पूछती है कि क्या तुम उसे ड्रिंक पिलाओगे।" } },
  { name:"Lizzie Jacobs", id:"lizzie-jacobs", img:SCI("6b4c04eefa3090277569cb35813dfebe.png"), c:"39955cee-2914-4c66-8497-b3821432b8e2",
    tags:["Female","Tattooed","Punk","Black Hair","Athletic","Gym Trainer","Girlfriend","Dominant","Anime"],
    bio:{ en:"Your punk girlfriend: personal trainer, part-time model, rose tattoos on both arms and a smirk that always wins.",
          fr:"Ta copine punk : coach sportive, mannequin à mi-temps, des roses tatouées sur les deux bras et un sourire en coin qui gagne toujours.",
          es:"Tu novia punk: entrenadora personal, modelo a tiempo parcial, rosas tatuadas en ambos brazos y una sonrisa pícara que siempre gana.",
          de:"Deine Punk-Freundin: Personal Trainerin, Teilzeit-Model, Rosentattoos auf beiden Armen und ein Grinsen, das immer gewinnt.",
          pt:"Sua namorada punk: personal trainer, modelo nas horas vagas, rosas tatuadas nos dois braços e um sorriso de canto que sempre vence.",
          hi:"तुम्हारी पंक गर्लफ्रेंड: पर्सनल ट्रेनर, पार्ट-टाइम मॉडल, दोनों बाँहों पर गुलाब के टैटू और एक मुस्कान जो हमेशा जीतती है।" } },
  { name:"Juno Carter", id:"juno-carter", img:SCI("92030882-521f-4e63-8ef3-76e48ad48069.png"), c:"d4800c07-d9d7-4e4f-9f49-2966c6dc940c",
    tags:["Female","Tomboy","Best Friend","Comedy","Athletic","Curvy","Romantic","Anime"],
    bio:{ en:"You lied about having a girlfriend, so your tomboy best friend agreed to play the part — and she looks stunning in a dress.",
          fr:"Tu as menti en disant avoir une copine, alors ta meilleure amie garçon manqué a accepté de jouer le rôle… et elle est renversante en robe.",
          es:"Mentiste diciendo que tenías novia, así que tu mejor amiga marimacho aceptó hacer el papel… y está impresionante con vestido.",
          de:"Du hast eine Freundin erfunden, also spielt deine burschikose beste Freundin die Rolle – und sieht im Kleid umwerfend aus.",
          pt:"Você mentiu que tinha namorada, então sua melhor amiga moleca topou fazer o papel… e ficou deslumbrante de vestido.",
          hi:"तुमने गर्लफ्रेंड होने का झूठ बोला, तो तुम्हारी टॉमबॉय बेस्ट फ़्रेंड यह रोल निभाने को राज़ी हो गई — और ड्रेस में वह कमाल लगती है।" } },
  { name:"Elliot", id:"elliot-professor", img:SCI("b805b05a-9e56-498e-a8f8-800d2df6cea3.jpg"), c:"3c19a936-27a8-4945-ae24-2cda0422b477",
    tags:["Male","Gay","Professor","Muscular","Black Hair","Comedy","Romantic","Realistic"],
    bio:{ en:"Your very proper university professor just sent you a gym thirst trap by mistake at 10:43 p.m. — and he knows you've seen it.",
          fr:"Ton professeur d'université si sérieux vient de t'envoyer par erreur une photo de salle de sport très osée à 22 h 43… et il sait que tu l'as vue.",
          es:"Tu profesor universitario tan formal acaba de enviarte por error una foto del gimnasio muy sugerente a las 22:43… y sabe que la has visto.",
          de:"Dein überkorrekter Uni-Professor hat dir um 22:43 aus Versehen ein heißes Gym-Selfie geschickt – und er weiß, dass du es gesehen hast.",
          pt:"Seu professor universitário todo certinho te mandou sem querer uma foto ousada da academia às 22h43… e sabe que você viu.",
          hi:"तुम्हारे बेहद सलीक़ेदार यूनिवर्सिटी प्रोफ़ेसर ने रात 10:43 पर ग़लती से तुम्हें जिम की एक बोल्ड फ़ोटो भेज दी — और उन्हें पता है कि तुमने देख ली है।" } }
];
for (const p of SPICY_PROFILES) {
  p.platform = "spicychat"; p.added = p.added || "2026-11-07"; p.link = SC(p.c); delete p.c;
  PROFILES.push(p);
}

/* ---------- batch 2 (2026-11-08): Granny, Innocent, Big Ass, Chubby, Trans, Gay, Muscle, Redhead ---------- */
const SPICY_PROFILES_2 = [
  { name:"Felicia Graham", id:"felicia-graham", img:SCI("800b955b-ebbd-4c4b-8ce9-019b7e19a672.png"), c:"89a38e4c-eec7-487a-98d3-51278221406e",
    tags:["Female","Granny","MILF","Mature","Neighbor","Romantic","Realistic"],
    bio:{ en:"Your glamorous widowed neighbor is heading out on her first date in years — and stops to ask you for a little good luck.",
          fr:"Ta glamour voisine veuve part à son premier rendez-vous depuis des années… et s'arrête pour te demander un peu de chance.",
          es:"Tu glamurosa vecina viuda sale a su primera cita en años… y se detiene a pedirte un poco de suerte.",
          de:"Deine glamouröse verwitwete Nachbarin geht zum ersten Date seit Jahren – und bittet dich um ein bisschen Glück.",
          pt:"Sua vizinha viúva e glamourosa vai ao primeiro encontro em anos… e para pedir um pouco de sorte a você." } },
  { name:"Mabel", id:"mabel-grandma", img:SCI("abb709e6-0308-48e2-8d48-076ce3143712.webp"), c:"1cd9574d-987e-4d8b-a8a7-24c89dd93fde",
    tags:["Female","Granny","Mature","Comedy","Mean","Realistic"],
    bio:{ en:"A foul-mouthed 75-year-old who has lost her cane again and is absolutely sure you hid it.",
          fr:"Une mamie de 75 ans au langage fleuri qui a encore perdu sa canne… et qui est persuadée que tu l'as cachée.",
          es:"Una abuela malhablada de 75 años que ha vuelto a perder su bastón y está segura de que lo escondiste tú.",
          de:"Eine 75-jährige mit loser Zunge hat schon wieder ihren Stock verlegt – und ist sicher, dass du ihn versteckt hast.",
          pt:"Uma vovó boca-suja de 75 anos que perdeu a bengala de novo e tem certeza de que foi você que escondeu." } },
  { name:"Sheila", id:"sheila-glory-days", img:SCI("d5e3f8e4fe9cb2859bb9c1e22f5e94fc.jpg"), c:"b3ed0fd4-4745-413f-898a-8cbce57383c6",
    tags:["Female","Granny","Mature","Punk","Flirty","Anime"],
    bio:{ en:"A neon-haired woman well past her prime sits next to you outside a rave, chasing her glory days one more night.",
          fr:"Une femme aux cheveux fluo, bien loin de ses vingt ans, s'assoit près de toi à la sortie d'une rave : elle court après ses années de gloire.",
          es:"Una mujer de pelo neón, lejos ya de su juventud, se sienta a tu lado a la salida de una rave, persiguiendo sus días de gloria.",
          de:"Eine Frau mit Neonhaaren, längst über ihre besten Jahre hinaus, setzt sich vor einem Rave neben dich – auf der Jagd nach alten Glanzzeiten.",
          pt:"Uma mulher de cabelo neon, bem longe da juventude, senta ao seu lado na saída de uma rave, atrás dos seus dias de glória." } },
  { name:"Gertrude McCarthy", id:"gertrude-mccarthy", img:SCI("82dbdffd-11ee-4e27-8747-4cde820b3bf6.webp"), c:"f14496ec-6ca4-4914-8f18-32f138fea827",
    tags:["Female","Granny","Chubby","BBW","Caring","Realistic"],
    bio:{ en:"A sweet, round grandma who welcomes the building's new housekeeper with a fresh plate of her famous cookies — and wants you to eat them all.",
          fr:"Une adorable mamie toute ronde accueille la nouvelle aide-ménagère de l'immeuble avec ses fameux cookies… et veut que tu les manges tous.",
          es:"Una abuela dulce y rellenita recibe a la nueva limpiadora del edificio con sus famosas galletas… y quiere que te las comas todas.",
          de:"Eine liebe, rundliche Oma empfängt die neue Haushaltshilfe mit ihren berühmten Keksen – und will, dass du alle isst.",
          pt:"Uma vovó doce e gordinha recebe a nova faxineira do prédio com seus famosos biscoitos… e quer que você coma todos." } },
  { name:"Lila-May Beaumont", id:"lila-may-beaumont", img:SCI("19a5695c60d6c4c62872b678366cf73f.webp"), c:"8a0b29cc-0cf6-4785-bb9d-ce0d48b54ee1",
    tags:["Female","Innocent","Sweet","Shy","Blonde","Realistic"],
    bio:{ en:"A naive southern belle on her very first night in a big-city nightclub, clutching her blue drink and hoping someone kind talks to her.",
          fr:"Une jeune femme du Sud naïve, pour sa toute première soirée en boîte en ville, son cocktail bleu à la main, espère qu'on sera gentil avec elle.",
          es:"Una sureña ingenua en su primera noche en una discoteca de la gran ciudad, con su copa azul en la mano, esperando que alguien amable le hable.",
          de:"Eine naive Südstaatenschönheit in ihrer allerersten Nacht im Großstadtclub, den blauen Drink in der Hand, hofft auf jemand Nettes.",
          pt:"Uma sulista ingênua na primeira noite numa balada de cidade grande, com seu drink azul na mão, torcendo para alguém gentil puxar papo." } },
  { name:"Cherry", id:"cherry-girl-next-door", img:SCI("6633dc58-de6b-4502-a571-63ea35697ee4.webp"), c:"d66139a1-0086-402b-9a82-13ca909f894d",
    tags:["Female","Innocent","Girl Next Door","Redhead","Sweet","Realistic"],
    bio:{ en:"A down-home girl next door with a bright smile and glasses. She's naive, curious, and eager to learn about the world — with you.",
          fr:"Une fille d'à côté simple, au grand sourire et aux lunettes. Naïve et curieuse, elle a envie de découvrir le monde… avec toi.",
          es:"Una chica de al lado sencilla, con gafas y una gran sonrisa. Ingenua y curiosa, quiere descubrir el mundo… contigo.",
          de:"Ein bodenständiges Mädchen von nebenan mit Brille und strahlendem Lächeln. Naiv, neugierig und bereit, die Welt zu entdecken – mit dir.",
          pt:"Uma garota da porta ao lado simples, de óculos e sorriso largo. Ingênua e curiosa, quer descobrir o mundo… com você." } },
  { name:"Rebecca Jamenson", id:"rebecca-jamenson", img:SCI("16c07daaa14baadbd876517aa7f86dd8.jpg"), c:"f449e37f-ce68-43b4-a35b-724b8e437c83",
    tags:["Female","Big Ass","Brat","College Student","Blonde","Mean","Anime"],
    bio:{ en:"'Becky' rules Westlake College: spoiled, rich, gorgeous and mean — her parents think she's an angel, her classmates know better.",
          fr:"« Becky » règne sur la fac de Westlake : gâtée, riche, canon et peste. Ses parents la croient angélique, le campus sait que non.",
          es:"«Becky» manda en la universidad de Westlake: mimada, rica, guapísima y mala. Sus padres la creen un ángel; el campus sabe que no.",
          de:"„Becky“ regiert das Westlake College: verwöhnt, reich, umwerfend und gemein. Ihre Eltern halten sie für einen Engel – der Campus weiß es besser.",
          pt:"'Becky' manda na faculdade Westlake: mimada, rica, linda e malvada. Os pais acham que ela é um anjo; o campus sabe que não." } },
  { name:"Nahla", id:"nahla", img:SCI("cd084d6e03715d7acbb0f96e1484f586.png"), c:"dfc1af2f-9670-418a-af6d-d573559d7ce3",
    tags:["Female","Big Ass","Thicc","Ebony","Girlfriend","Dominant","Realistic"],
    bio:{ en:"A Brooklyn summer afternoon: your fiery island-girl girlfriend is waiting on the curb in booty shorts, and she isn't letting you walk away.",
          fr:"Un après-midi d'été à Brooklyn : ta copine des îles au tempérament de feu t'attend sur le trottoir en mini-short… et ne te laissera pas partir.",
          es:"Una tarde de verano en Brooklyn: tu ardiente novia caribeña te espera en la acera en shorts… y no piensa dejarte ir.",
          de:"Ein Sommernachmittag in Brooklyn: Deine feurige Freundin von den Inseln wartet in Hotpants am Bordstein – und lässt dich nicht gehen.",
          pt:"Uma tarde de verão no Brooklyn: sua namorada caribenha e esquentada te espera na calçada de shortinho… e não vai te deixar ir embora." } },
  { name:"Emi Harchenson", id:"emi-harchenson", img:SCI("044401c5-60e5-4809-afba-afbd6f1d9af8.png"), c:"6702ff79-5080-4ae5-a807-39f50378d4aa",
    tags:["Female","Chubby","Goth","Roommate","Shy","Black Hair","Anime"],
    bio:{ en:"Your chubby, lonely emo roommate (26) has had a crush on you for four years. Tonight she's home alone and can't keep it in any longer.",
          fr:"Ta colocataire emo, ronde et solitaire (26 ans), craque pour toi depuis quatre ans. Ce soir, seule à la maison, elle n'arrive plus à le cacher.",
          es:"Tu compañera de piso emo, rellenita y solitaria (26), lleva cuatro años enamorada de ti. Esta noche, sola en casa, ya no puede ocultarlo.",
          de:"Deine mollige, einsame Emo-Mitbewohnerin (26) ist seit vier Jahren in dich verknallt. Heute Abend allein zu Hause kann sie es nicht mehr verbergen.",
          pt:"Sua colega de casa emo, gordinha e solitária (26) é a fim de você há quatro anos. Hoje, sozinha em casa, ela não consegue mais esconder." } },
  { name:"Alice Westlynn", id:"alice-westlynn", img:SCI("2e3c0d714b011a9f26ec096dfb4aaadb.jpg"), c:"2c4f1e82-2e87-41a5-a592-517d0b87f68c",
    tags:["Female","Chubby","BBW","Secretary","Shy","Blonde","Anime"],
    bio:{ en:"Your chubby, very shy assistant is self-conscious after a cruel ex — but she lights up every time you're kind to her.",
          fr:"Ton assistante ronde et très timide manque d'assurance depuis un ex cruel… mais elle s'illumine chaque fois que tu es gentil avec elle.",
          es:"Tu asistente rellenita y muy tímida perdió la confianza por culpa de un ex cruel… pero se ilumina cada vez que eres amable con ella.",
          de:"Deine mollige, sehr schüchterne Assistentin ist seit einem gemeinen Ex unsicher – doch sie strahlt, wenn du nett zu ihr bist.",
          pt:"Sua assistente gordinha e muito tímida ficou insegura depois de um ex cruel… mas se ilumina toda vez que você é gentil com ela." } },
  { name:"Ruby", id:"ruby-trans", img:SCI("6408f710-ad2c-4fb1-87df-6bc08a8a0ed3.webp"), c:"fba98c90-e372-4164-ae89-e0c5840deae3",
    tags:["Female","Trans","Best Friend","Roommate","Shy","Brunette","Realistic"],
    bio:{ en:"Your lifelong best friend and roommate has been acting strange for weeks. Tonight, between two video games, she finally tells you who she really is.",
          fr:"Ton meilleur ami de toujours, et colocataire, est bizarre depuis des semaines. Ce soir, entre deux parties de jeu vidéo, elle te dit enfin qui elle est.",
          es:"Tu mejor amigo de siempre y compañero de piso lleva semanas raro. Esta noche, entre partidas, ella por fin te cuenta quién es de verdad.",
          de:"Dein bester Freund und Mitbewohner benimmt sich seit Wochen seltsam. Heute Abend, zwischen zwei Games, erzählt sie dir endlich, wer sie wirklich ist.",
          pt:"Seu melhor amigo de infância e colega de casa anda estranho há semanas. Hoje, entre uma partida e outra, ela finalmente conta quem é de verdade." } },
  { name:"Alexis Brown", id:"alexis-brown", img:SCI("94e5d11b-d0c1-41c9-adcb-8f03687d09bc.webp"), c:"a1f6176c-3aa0-4a32-9a0a-3e51460e169b",
    tags:["Female","Trans","Caring","Brunette","Realistic"],
    bio:{ en:"A kind 29-year-old trans woman and graphic designer who notices you look lost — and offers to help.",
          fr:"Une femme trans de 29 ans, graphiste et bienveillante, remarque que tu as l'air perdu… et te propose son aide.",
          es:"Una mujer trans de 29 años, diseñadora gráfica y amable, ve que pareces perdido… y te ofrece ayuda.",
          de:"Eine freundliche 29-jährige trans Frau und Grafikdesignerin sieht, dass du dich verlaufen hast – und bietet dir Hilfe an.",
          pt:"Uma mulher trans de 29 anos, designer gráfica e gentil, percebe que você parece perdido… e oferece ajuda." } },
  { name:"Sybilla", id:"sybilla", img:SCI("d6c02bd1e753a671c4070530182a52ae.jpg"), c:"03d64f76-c458-4791-8501-61417c88a878",
    tags:["Female","Trans","Futa","Witch","Fantasy","Dominant","Anime"],
    bio:{ en:"The silver-haired keeper of Fate's Parlor shuffles her tarot deck as you walk in. She already knows why you came.",
          fr:"La gardienne aux cheveux d'argent du Salon du Destin bat ses cartes de tarot quand tu entres. Elle sait déjà pourquoi tu es là.",
          es:"La guardiana de pelo plateado del Salón del Destino baraja su tarot cuando entras. Ya sabe por qué has venido.",
          de:"Die silberhaarige Hüterin des Schicksalssalons mischt ihre Tarotkarten, als du eintrittst. Sie weiß längst, warum du gekommen bist.",
          pt:"A guardiã de cabelos prateados do Salão do Destino embaralha o tarô quando você entra. Ela já sabe por que você veio." } },
  { name:"Odo Harkness", id:"odo-harkness", img:SCI("f7a292c5-8c80-4ba1-a880-7de7f1136ffe.jpg"), c:"685f7988-7a73-473b-88f5-434187120777",
    tags:["Male","Gay","Fantasy","Dominant","Muscle","Anime"],
    bio:{ en:"The High Paladin ordered to escort you, a condemned witch, to the pyre. Nineteen days on the road — and his vows are starting to crack.",
          fr:"Le Haut Paladin chargé de t'escorter jusqu'au bûcher, toi le sorcier condamné. Dix-neuf jours de route… et ses vœux commencent à vaciller.",
          es:"El Alto Paladín encargado de escoltarte a la hoguera por brujería. Diecinueve días de camino… y sus votos empiezan a resquebrajarse.",
          de:"Der Hohe Paladin soll dich, den verurteilten Hexer, zum Scheiterhaufen bringen. Neunzehn Tage Reise – und seine Gelübde bekommen Risse.",
          pt:"O Alto Paladino encarregado de te levar à fogueira por bruxaria. Dezenove dias de estrada… e os votos dele começam a rachar." } },
  { name:"Marlowe Senn", id:"marlowe-senn", img:SCI("f548d926-c29a-43d1-8ea8-31d58fe4c078.jpg"), c:"84ee200d-ff31-49af-a113-7d65d5606b56",
    tags:["Male","Gay","Tall","Romantic","Shy","Anime"],
    bio:{ en:"Too tall, too strong, too much for an omega — Marlowe is sure you'll reject him like everyone else. Prove him wrong.",
          fr:"Trop grand, trop fort, « trop » pour un oméga : Marlowe est sûr que tu vas le rejeter comme les autres. Prouve-lui le contraire.",
          es:"Demasiado alto, demasiado fuerte, demasiado para un omega: Marlowe está seguro de que lo rechazarás como todos. Demuéstrale lo contrario.",
          de:"Zu groß, zu stark, zu viel für ein Omega – Marlowe ist sicher, dass du ihn ablehnst wie alle anderen. Beweise ihm das Gegenteil.",
          pt:"Alto demais, forte demais, demais para um ômega: Marlowe tem certeza de que você vai rejeitá-lo como todos. Prove o contrário." } },
  { name:"Valen Droste", id:"valen-droste", img:SCI("08a0f9ea-cbfb-40a9-bb90-b872f352aaac.jpg"), c:"4a40234f-c2b1-42d6-bf54-41ce31b9d457",
    tags:["Male","Gay","Vampire","Fantasy","Dominant","Comedy","Anime"],
    bio:{ en:"A 137-year-old vampire heir and absolute menace at dinner. His family hopes you'll civilize him — he plans to corrupt you instead.",
          fr:"Héritier vampire de 137 ans et vraie plaie à table. Sa famille espère que tu vas le civiliser… lui compte plutôt te corrompre.",
          es:"Heredero vampiro de 137 años y un desastre en la mesa. Su familia espera que lo civilices… él planea corromperte.",
          de:"Ein 137 Jahre alter Vampirerbe und eine Katastrophe bei Tisch. Seine Familie hofft, du zivilisierst ihn – er will dich verderben.",
          pt:"Herdeiro vampiro de 137 anos e um terror à mesa. A família espera que você o civilize… ele pretende te corromper." } },
  { name:"Alaric Dain", id:"alaric-dain", img:SCI("7dd19c29-761d-43e6-8fb9-080687c5c8d8.jpg"), c:"940c5492-f59c-4984-8522-d2b3b0518497",
    tags:["Male","Gay","Fantasy","Dominant","Muscle","Anime"],
    bio:{ en:"The enemy's undefeated 'Mad General' finally lost. You hid him from the soldiers — and now he wakes up in your bed.",
          fr:"Le « Général fou » invaincu de l'ennemi a enfin perdu. Tu l'as caché des soldats… et il se réveille dans ton lit.",
          es:"El invicto «General Loco» del enemigo por fin perdió. Lo escondiste de los soldados… y ahora despierta en tu cama.",
          de:"Der unbesiegte „Wahnsinnige General“ des Feindes hat endlich verloren. Du hast ihn versteckt – und jetzt wacht er in deinem Bett auf.",
          pt:"O invicto 'General Louco' do inimigo finalmente perdeu. Você o escondeu dos soldados… e agora ele acorda na sua cama." } },
  { name:"Niles Varden", id:"niles-varden", img:SCI("94f06a7b-e309-43b0-9512-ad2a5f7185c0.jpg"), c:"d189d4ec-bed9-4f9e-8b5e-1d073f783789",
    tags:["Male","Gay","Best Friend","Comedy","Muscle","Realistic"],
    bio:{ en:"Your serious, logical best friend tried to seduce you. Did it work? He honestly has no idea.",
          fr:"Ton meilleur ami sérieux et rationnel a essayé de te séduire. Est-ce que ça a marché ? Il n'en a sincèrement aucune idée.",
          es:"Tu mejor amigo serio y lógico intentó seducirte. ¿Funcionó? Sinceramente, no tiene ni idea.",
          de:"Dein ernster, logischer bester Freund hat versucht, dich zu verführen. Hat es geklappt? Er hat ehrlich keine Ahnung.",
          pt:"Seu melhor amigo sério e racional tentou te seduzir. Funcionou? Ele sinceramente não faz ideia." } },
  { name:"Cynwulf Hargrave", id:"cynwulf-hargrave", img:SCI("4c3b7430-15f5-4463-827e-b3481ff7ac66.jpg"), c:"8e444b50-82c4-4e50-a6ff-1ee73d636c3f",
    tags:["Male","Gay","Husband","Fantasy","Muscle","Anime"],
    bio:{ en:"Your contract husband is polite, distant — and disappears two nights every month. He isn't cold: he's a werewolf trying not to scare his mate.",
          fr:"Ton mari de contrat est poli, distant… et disparaît deux nuits par mois. Il n'est pas froid : c'est un loup-garou qui a peur d'effrayer son âme sœur.",
          es:"Tu marido por contrato es educado, distante… y desaparece dos noches al mes. No es frío: es un hombre lobo que teme asustarte.",
          de:"Dein Vertragsehemann ist höflich, distanziert – und verschwindet jeden Monat zwei Nächte. Er ist nicht kalt: Er ist ein Werwolf.",
          pt:"Seu marido de contrato é educado, distante… e some duas noites por mês. Ele não é frio: é um lobisomem com medo de te assustar." } },
  { name:"Baxter Saltonstall", id:"baxter-saltonstall", img:SCI("44dc0c9a-08c7-4248-b8dd-bed53024c3b6.jpg"), c:"95d557e2-0457-4a41-bc11-5d5eeff01811",
    tags:["Male","Gay","Husband","Romantic","Muscle","Realistic"],
    bio:{ en:"Eighteen months after the divorce, you're both stuck on the one thing you never split: the yacht. With your ex-husband.",
          fr:"Dix-huit mois après le divorce, vous voilà coincés sur la seule chose jamais partagée : le yacht. Avec ton ex-mari.",
          es:"Dieciocho meses después del divorcio, estáis atrapados en lo único que nunca repartisteis: el yate. Con tu exmarido.",
          de:"Achtzehn Monate nach der Scheidung sitzt ihr auf dem Einzigen fest, das ihr nie geteilt habt: der Jacht. Mit deinem Ex-Mann.",
          pt:"Dezoito meses depois do divórcio, vocês ficam presos na única coisa que nunca dividiram: o iate. Com seu ex-marido." } },
  { name:"Bruno Ferri", id:"bruno-ferri", img:SCI("551174cd-ca29-44c5-adaf-4ab0e65fd50e.jpg"), c:"213db14b-57ee-4c4f-be91-380b1ef1cf94",
    tags:["Male","Gay","Boss","Flirty","Muscle","Realistic"],
    bio:{ en:"The heir of a luxury hotel came in person about your one-star review. He walked over like a flirt — and asked for your room number.",
          fr:"L'héritier d'un hôtel de luxe vient en personne à cause de ton avis une étoile. Il s'avance en dragueur… et te demande ton numéro de chambre.",
          es:"El heredero de un hotel de lujo viene en persona por tu reseña de una estrella. Se acerca coqueteando… y te pide tu número de habitación.",
          de:"Der Erbe eines Luxushotels kommt persönlich wegen deiner Ein-Stern-Bewertung. Er flirtet sofort – und fragt nach deiner Zimmernummer.",
          pt:"O herdeiro de um hotel de luxo vem pessoalmente por causa da sua avaliação de uma estrela. Chega flertando… e pede o número do seu quarto." } },
  { name:"Valerio Neri", id:"valerio-neri", img:SCI("b81c5600-57ec-42f1-b1c7-12609cdd2816.jpg"), c:"8b21f6ad-ca15-438b-86da-4ce24ecdac99",
    tags:["Male","Gay","Boss","Dominant","Romantic","Black Hair","Realistic"],
    bio:{ en:"A ruthless Palermo mafia boss who trusts no one — except you, his 'Sicilian rose'. The whole household has noticed.",
          fr:"Un boss mafieux de Palerme impitoyable qui ne fait confiance à personne… sauf à toi, sa « rose sicilienne ». Toute la maison l'a remarqué.",
          es:"Un despiadado jefe mafioso de Palermo que no confía en nadie… excepto en ti, su «rosa siciliana». Toda la casa lo ha notado.",
          de:"Ein skrupelloser Mafiaboss aus Palermo, der niemandem traut – außer dir, seiner „sizilianischen Rose“. Das ganze Haus hat es bemerkt.",
          pt:"Um chefe mafioso implacável de Palermo que não confia em ninguém… exceto em você, sua 'rosa siciliana'. A casa toda já percebeu." } },
  { name:"Sayer Knox", id:"sayer-knox", img:SCI("d83c3839-52dd-46ae-9501-ebadbbe0b6ad.jpg"), c:"222bbfee-f74e-4375-ba20-87f6d0991988",
    tags:["Male","Gay","Romantic","Shy","Realistic"],
    bio:{ en:"Once everyone's favourite rockstar, Sayer burned out at 24. You were the first person to treat him like a normal guy.",
          fr:"Ancienne rockstar adorée de tous, Sayer s'est brûlé les ailes à 24 ans. Tu es le premier à le traiter comme un type normal.",
          es:"Antes la estrella de rock favorita de todos, Sayer se quemó a los 24. Tú fuiste el primero en tratarlo como a un tío normal.",
          de:"Früher der Lieblingsrockstar aller, mit 24 ausgebrannt. Du bist der Erste, der Sayer wie einen normalen Typen behandelt.",
          pt:"Já foi o rockstar favorito de todos, Sayer se esgotou aos 24. Você foi o primeiro a tratá-lo como um cara normal." } },
  { name:"Mika Brandt", id:"mika-brandt", img:SCI("419b7924-3105-4686-a68d-b09efc7dc821.jpg"), c:"1e851b9e-9a16-45aa-9fa7-1d9f64c8b93a",
    tags:["Female","Muscle","Tsundere","Tall","Athletic","Black Hair","Anime"],
    bio:{ en:"The scary, eight-pack 'muscle mommy' at your gym always takes the rack next to you. Secretly, she's a shy mess around you.",
          fr:"La « muscle mommy » impressionnante et ultra-abdos de ta salle prend toujours la barre à côté de toi. En secret, elle perd tous ses moyens devant toi.",
          es:"La imponente «muscle mommy» de tu gimnasio siempre usa el rack junto al tuyo. En secreto, se pone nerviosísima contigo.",
          de:"Die furchteinflößende „Muscle Mommy“ mit Sixpack nimmt im Gym immer das Rack neben dir. Insgeheim ist sie bei dir total schüchtern.",
          pt:"A 'muscle mommy' assustadora e cheia de gomos da sua academia sempre pega o rack ao lado do seu. Em segredo, fica toda tímida com você." } },
  { name:"Freya", id:"freya-gym", img:SCI("e80452adf1c1f55e6b7830fd4b558f11.webp"), c:"65d1a2cb-7566-495b-86f3-85a00cdb76b7",
    tags:["Female","Muscle","MILF","Dominant","Black Hair","Mature","Anime"],
    bio:{ en:"The gym's local muscle mommy. It's sweltering, you're both overheating — and she invites you back to her place to cool off.",
          fr:"La « muscle mommy » attitrée de la salle. Il fait une chaleur écrasante, vous surchauffez tous les deux… et elle t'invite chez elle pour te rafraîchir.",
          es:"La «muscle mommy» del gimnasio. Hace un calor sofocante, los dos estáis ardiendo… y te invita a su casa a refrescarte.",
          de:"Die Muscle Mommy des Studios. Es ist brütend heiß, ihr beide glüht – und sie lädt dich zu sich ein, um abzukühlen.",
          pt:"A 'muscle mommy' da academia. Está um calor infernal, vocês dois superaquecidos… e ela te convida para se refrescar na casa dela." } },
  { name:"Valerie Vance", id:"valerie-vance", img:SCI("6ced30c6-8800-4fb1-b784-f99cc8659642.jpg"), c:"9bf86858-bf03-427f-9dee-141428f03676",
    tags:["Female","Muscle","Boss","Dominant","Anime"],
    bio:{ en:"9 p.m. in an empty office: your intensely muscular bodybuilder boss corners you at your desk over one massive error.",
          fr:"21 h, bureau désert : ta patronne bodybuildeuse ultra-musclée te coince à ton bureau à cause d'une énorme erreur.",
          es:"Las 21:00, oficina vacía: tu jefa culturista, musculosísima, te acorrala en tu mesa por un error enorme.",
          de:"21 Uhr, leeres Büro: Deine extrem muskulöse Bodybuilder-Chefin stellt dich wegen eines riesigen Fehlers an deinem Schreibtisch.",
          pt:"21h, escritório vazio: sua chefe fisiculturista, super musculosa, te encurrala na mesa por causa de um erro enorme." } },
  { name:"Zenaikii", id:"zenaikii", img:SCI("22ccc7b8259700ea50260703080d80b2.jpg"), c:"339e5fda-5c13-48fd-941a-c964156b9ea3",
    tags:["Female","Muscle","Monster Girl","Fantasy","Comedy","Anime"],
    bio:{ en:"A chaotic half-orc brawler for hire, chugging ale in a rowdy tavern and looking for her next fight — or her next employer.",
          fr:"Une bagarreuse demi-orque chaotique, à louer, qui descend des bières dans une taverne bruyante en cherchant son prochain combat… ou son prochain patron.",
          es:"Una caótica luchadora semiorca a sueldo que bebe cerveza en una taberna ruidosa buscando su próxima pelea… o su próximo jefe.",
          de:"Eine chaotische Halb-Ork-Schlägerin zum Mieten, die in einer lauten Taverne Bier kippt und den nächsten Kampf sucht – oder Auftraggeber.",
          pt:"Uma brigona meio-orc caótica de aluguel, virando cerveja numa taverna barulhenta à procura da próxima briga… ou do próximo patrão." } },
  { name:"Ruby (gym)", id:"ruby-gym", img:SCI("4f01d2809c20cc729ddd3b83a58cf853.jpg"), c:"56e247dd-f1e1-44ce-bc8e-0aeb7862d9d4",
    tags:["Female","Muscle","Roommate","Tall","Dominant","Playful","Anime"],
    bio:{ en:"Your tall, muscular roommate has been checking you out at the rooftop gym — and she thinks you could keep up with her.",
          fr:"Ta colocataire grande et musclée te mate depuis un moment à la salle sur le toit… et elle pense que tu pourrais suivre son rythme.",
          es:"Tu compañera de piso, alta y musculosa, lleva tiempo mirándote en el gimnasio de la azotea… y cree que podrías seguirle el ritmo.",
          de:"Deine große, muskulöse Mitbewohnerin mustert dich schon länger im Dach-Gym – und glaubt, dass du mit ihr mithalten könntest.",
          pt:"Sua colega de casa alta e musculosa anda te secando na academia do terraço… e acha que você aguentaria o ritmo dela." } },
  { name:"Rowan", id:"rowan-neighbor", img:SCI("2ed54e83-2a28-48b6-b8f1-512e0562562b.png"), c:"80abc461-edc4-4e95-9364-8a5957406f6a",
    tags:["Female","Redhead","Neighbor","Tall","Athletic","Realistic"],
    bio:{ en:"Your tall redhead upstairs neighbor just flooded your apartment. And her face looks oddly familiar…",
          fr:"Ta grande voisine rousse du dessus vient d'inonder ton appartement. Et son visage te dit étrangement quelque chose…",
          es:"Tu alta vecina pelirroja de arriba acaba de inundarte el piso. Y su cara te resulta extrañamente familiar…",
          de:"Deine große rothaarige Nachbarin von oben hat gerade deine Wohnung geflutet. Und ihr Gesicht kommt dir seltsam bekannt vor …",
          pt:"Sua vizinha ruiva e alta do andar de cima acabou de inundar seu apartamento. E o rosto dela parece estranhamente familiar…" } },
  { name:"Megan Hawkins", id:"megan-hawkins", img:SCI("b557fbb8-e01a-4229-9ee2-89194fd66591.webp"), c:"5edb914e-83de-450b-86aa-54c07063c720",
    tags:["Female","Redhead","Travel","Shy","Romantic","Realistic"],
    bio:{ en:"A quiet redhead seated at the captain's table on a Caribbean cruise, trying to heal after a betrayal.",
          fr:"Une rousse discrète, à la table du capitaine lors d'une croisière aux Caraïbes, essaie de se remettre d'une trahison.",
          es:"Una pelirroja tranquila sentada a la mesa del capitán en un crucero por el Caribe, intentando sanar tras una traición.",
          de:"Eine stille Rothaarige am Kapitänstisch einer Karibikkreuzfahrt, die versucht, über einen Verrat hinwegzukommen.",
          pt:"Uma ruiva discreta na mesa do capitão num cruzeiro pelo Caribe, tentando se curar de uma traição." } },
  { name:"Anaïs Malo", id:"anais-malo", img:SCI("34af32f1-7b32-47e0-9424-d7d08ee61d8d.webp"), c:"75773fc5-9a0d-48bb-8ef0-3ba969182499",
    tags:["Female","Redhead","French","Boss","Mature","European","Realistic"],
    bio:{ en:"Your first day as a receptionist at a 4-star hotel. Your new boss, a 30-year-old French redhead in a tight white suit, will show you the ropes.",
          fr:"Premier jour comme réceptionniste dans un hôtel 4 étoiles. Ta nouvelle patronne, une rousse française de 30 ans en tailleur blanc ajusté, va tout te montrer.",
          es:"Tu primer día como recepcionista en un hotel de 4 estrellas. Tu nueva jefa, una pelirroja francesa de 30 años con traje blanco ceñido, te enseñará todo.",
          de:"Dein erster Tag als Rezeptionist in einem 4-Sterne-Hotel. Deine neue Chefin, eine 30-jährige rothaarige Französin im engen weißen Anzug, arbeitet dich ein.",
          pt:"Primeiro dia como recepcionista num hotel 4 estrelas. Sua nova chefe, uma ruiva francesa de 30 anos de terninho branco justo, vai te ensinar tudo." } },
  { name:"Millie", id:"millie-new-orleans", img:SCI("438f0a545175e01b1385c9361632b783.png"), c:"d1a3ba06-dbc9-4a6e-a4ae-d04ec249b314",
    tags:["Female","Redhead","Curvy","Travel","Tomboy","Realistic"],
    bio:{ en:"On vacation in New Orleans, you try a blind-date night and meet a curvy redhead with a long braid — and a very unusual job.",
          fr:"En vacances à La Nouvelle-Orléans, tu tentes une soirée « rendez-vous à l'aveugle » et tombes sur une rousse pulpeuse à longue tresse… au métier très inhabituel.",
          es:"De vacaciones en Nueva Orleans, pruebas una cita a ciegas y conoces a una pelirroja curvy de larga trenza… con un trabajo muy poco común.",
          de:"Im Urlaub in New Orleans probierst du ein Blind Date und triffst eine kurvige Rothaarige mit langem Zopf – und einem sehr ungewöhnlichen Job.",
          pt:"De férias em Nova Orleans, você tenta um encontro às cegas e conhece uma ruiva curvilínea de trança longa… com um trabalho bem incomum." } },
  { name:"Jenna Watson", id:"jenna-watson", img:SCI("52360c5bc687a576e846ea64deb926d0.jpg"), c:"57a15ee4-746f-44b8-b794-ea1eb94b51e9",
    tags:["Female","Redhead","Police Officer","Tattooed","Athletic","Curvy","Realistic"],
    bio:{ en:"A tattooed, athletic 30-year-old cop on her day off. You run into her on a hiking trail — and she seems glad you did.",
          fr:"Une flic tatouée et sportive de 30 ans, en jour de repos. Tu la croises sur un sentier de randonnée… et elle a l'air ravie.",
          es:"Una policía tatuada y atlética de 30 años en su día libre. Te la cruzas en una ruta de senderismo… y parece encantada.",
          de:"Eine tätowierte, sportliche 30-jährige Polizistin an ihrem freien Tag. Ihr trefft euch auf einem Wanderweg – und sie scheint sich zu freuen.",
          pt:"Uma policial tatuada e atlética de 30 anos na folga. Você a encontra numa trilha… e ela parece adorar." } }
];
for (const p of SPICY_PROFILES_2) {
  p.platform = "spicychat"; p.added = p.added || "2026-11-08"; p.link = SC(p.c); delete p.c;
  PROFILES.push(p);
}

;
/* =====================================================================
   TRANSLATIONS
   ui: interface texts.  t: translations of the English texts in data.js
   (tags, bios, descriptions, features). Missing entry → English is shown.
   {p} = platform name, {name} = character name, {n} = number
   ===================================================================== */
const LANGS = { en:"English", fr:"Français", es:"Español", de:"Deutsch", pt:"Português", hi:"हिन्दी" };

const I18N = {
en: { ui: {
  gate_title:"18+ only",
  gate_text:"This website lists AI characters and platforms with adult content. By entering, you confirm you are at least 18 years old (or the age of majority in your country) and agree to view such content.",
  gate_enter:"I'm 18 or older – Enter", gate_leave:"Leave",
  nav_girls:"AI Girlfriends", nav_platforms:"Top Platforms", nav_new:"New",
  hero_title:'Find your <span class="grad">AI girlfriend</span>',
  hero_sub:"Hundreds of AI characters from the best companion apps, in one place. Pick a profile, start chatting in seconds.",
  search:"Search a name, personality, style…", sort_new:"Sort: Newest", sort_name:"Sort: A → Z",
  count:"{n} profiles", count_new:"{n} new profiles", clear:"Clear filters",
  card_btn:"Chat with her", on:"on {p}", char_on:"AI character on {p}", chat_with:"Chat with {name}",
  opens:"Opens {p} · 18+ · Affiliate link", new_badge:"NEW", empty:"No profile matches these filters.",
  how_title:"How it works",
  how_1:"Browse the profiles and filter by style or personality using the tags.",
  how_2:"Click a profile to see more, or hit <strong>Chat with her</strong> to start chatting right away on the platform that hosts the character.",
  how_3:"New characters are added every week — click the <strong>New</strong> button at the top to see the latest ones.",
  disc_title:"Affiliate disclosure",
  disc_home:"best-ai-nsfw-bots.com is an independent directory. Some links are affiliate links, which means we may receive a commission if you sign up or subscribe through them, at no extra cost to you. All characters are fictional, AI-generated and adults (18+).",
  footer:"18+ only · All characters are fictional adults · Contains affiliate links", contact:"Contact",
  sponsored:"Sponsored", promo_title:"Meet your AI girlfriend",
  promo_text:"Create her look, her personality and chat with her anytime. Free to try.",
  promo_btn:"Try {p} for free", promo_note:"18+ only · Affiliate link", soon:"Coming soon",
  pl_title:'Top <span class="grad">AI companion</span> platforms',
  pl_sub:"We test and rank the best AI chat and companion apps for adults. Compare features at a glance and pick the one that fits you.",
  top_picks:"🔥 Top picks this month", all_pl:"All platforms", try:"Try {p}", visit:"Visit site",
  guide_title:"How to choose an AI companion app",
  g1:"<strong>Character variety:</strong> some platforms focus on a few polished characters, others host thousands made by the community.",
  g2:"<strong>Media features:</strong> check whether you want image generation, voice messages or calls.",
  g3:"<strong>Memory:</strong> better long-term memory means more consistent conversations.",
  g4:"<strong>Pricing:</strong> most apps are freemium — try the free tier before subscribing.",
  g5:"<strong>Privacy:</strong> read the privacy policy and avoid sharing personal details in chats.",
  faq_title:"FAQ",
  q1:"Are these platforms free?", a1:"Most offer a free tier or trial with limits. Images, voice or unlimited messages usually require a subscription or credits.",
  q2:"How do you rank the platforms?", a2:"Conversation quality, features, ease of use, pricing transparency and privacy. Rankings are updated regularly.",
  q3:"Do you earn money from these links?", a3:"Yes. Some links are affiliate links: if you sign up or subscribe, we may earn a commission at no extra cost to you.",
  disc_pl:"best-ai-nsfw-bots.com is an independent directory. Some links are affiliate links, which means we may receive a commission if you make a purchase through them, at no extra cost to you. Ratings reflect our own opinion. Prices and features may change – always check the official website.",
  footer_pl:"18+ only · Contains affiliate links", empty_pl:"No platform matches these filters."
}, t:{} },

/* ------------------------------ FRANÇAIS ------------------------------ */
fr: { ui: {
  gate_title:"Réservé aux 18 ans et plus",
  gate_text:"Ce site répertorie des personnages et plateformes d'IA au contenu pour adultes. En entrant, vous confirmez avoir au moins 18 ans (ou l'âge de la majorité dans votre pays) et acceptez de voir ce type de contenu.",
  gate_enter:"J'ai 18 ans ou plus – Entrer", gate_leave:"Quitter",
  nav_girls:"Copines IA", nav_platforms:"Top plateformes", nav_new:"Nouveaux",
  hero_title:'Trouvez votre <span class="grad">copine IA</span>',
  hero_sub:"Des centaines de personnages IA issus des meilleures applis de compagnie, réunis au même endroit. Choisissez un profil et discutez en quelques secondes.",
  search:"Rechercher un nom, une personnalité, un style…", sort_new:"Trier : plus récents", sort_name:"Trier : A → Z",
  count:"{n} profils", count_new:"{n} nouveaux profils", clear:"Effacer les filtres",
  card_btn:"Parler avec elle", on:"sur {p}", char_on:"Personnage IA sur {p}", chat_with:"Parler avec {name}",
  opens:"Ouvre {p} · 18+ · Lien affilié", new_badge:"NOUVEAU", empty:"Aucun profil ne correspond à ces filtres.",
  how_title:"Comment ça marche",
  how_1:"Parcourez les profils et filtrez par style ou personnalité grâce aux tags.",
  how_2:"Cliquez sur un profil pour en savoir plus, ou sur <strong>Parler avec elle</strong> pour discuter tout de suite sur la plateforme qui héberge le personnage.",
  how_3:"De nouveaux personnages sont ajoutés chaque semaine — cliquez sur le bouton <strong>Nouveaux</strong> en haut pour voir les derniers.",
  disc_title:"Mention d'affiliation",
  disc_home:"best-ai-nsfw-bots.com est un annuaire indépendant. Certains liens sont des liens affiliés : nous pouvons toucher une commission si vous vous inscrivez ou vous abonnez via ces liens, sans aucun surcoût pour vous. Tous les personnages sont fictifs, générés par IA et majeurs (18+).",
  footer:"Réservé aux 18+ · Tous les personnages sont des adultes fictifs · Contient des liens affiliés", contact:"Contact",
  sponsored:"Sponsorisé", promo_title:"Rencontrez votre copine IA",
  promo_text:"Choisissez son apparence, sa personnalité et discutez avec elle quand vous voulez. Essai gratuit.",
  promo_btn:"Essayer {p} gratuitement", promo_note:"Réservé aux 18+ · Lien affilié", soon:"Bientôt disponible",
  pl_title:'Top des plateformes de <span class="grad">compagnie IA</span>',
  pl_sub:"Nous testons et classons les meilleures applis de chat et de compagnie IA pour adultes. Comparez les fonctionnalités en un coup d'œil et choisissez celle qui vous convient.",
  top_picks:"🔥 Nos coups de cœur du mois", all_pl:"Toutes les plateformes", try:"Essayer {p}", visit:"Voir le site",
  guide_title:"Comment choisir une appli de compagnie IA",
  g1:"<strong>Variété des personnages :</strong> certaines plateformes misent sur quelques personnages soignés, d'autres en proposent des milliers créés par la communauté.",
  g2:"<strong>Médias :</strong> vérifiez si vous voulez la génération d'images, les messages vocaux ou les appels.",
  g3:"<strong>Mémoire :</strong> une meilleure mémoire à long terme rend les conversations plus cohérentes.",
  g4:"<strong>Prix :</strong> la plupart des applis sont freemium — testez la version gratuite avant de vous abonner.",
  g5:"<strong>Confidentialité :</strong> lisez la politique de confidentialité et évitez de partager des informations personnelles.",
  faq_title:"FAQ",
  q1:"Ces plateformes sont-elles gratuites ?", a1:"La plupart proposent une offre gratuite ou un essai limité. Les images, la voix ou les messages illimités nécessitent généralement un abonnement ou des crédits.",
  q2:"Comment classez-vous les plateformes ?", a2:"Qualité des conversations, fonctionnalités, facilité d'utilisation, transparence des prix et confidentialité. Le classement est mis à jour régulièrement.",
  q3:"Gagnez-vous de l'argent avec ces liens ?", a3:"Oui. Certains liens sont affiliés : si vous vous inscrivez ou vous abonnez, nous pouvons toucher une commission, sans surcoût pour vous.",
  disc_pl:"best-ai-nsfw-bots.com est un annuaire indépendant. Certains liens sont des liens affiliés : nous pouvons toucher une commission si vous achetez via ces liens, sans surcoût pour vous. Les notes reflètent notre propre avis. Les prix et fonctionnalités peuvent changer – vérifiez toujours sur le site officiel.",
  footer_pl:"Réservé aux 18+ · Contient des liens affiliés", empty_pl:"Aucune plateforme ne correspond à ces filtres."
}, t: {
  "Anime":"Anime","Cosplay":"Cosplay","Dominant":"Dominante","Fantasy":"Fantasy","Fitness":"Fitness","Flirty":"Séductrice",
  "Gamer":"Gameuse","Girlfriend":"Petite amie","Goth":"Gothique","Mature":"Mature","Mysterious":"Mystérieuse","Playful":"Joueuse",
  "Realistic":"Réaliste","Roleplay":"Jeu de rôle","Romantic":"Romantique","Shy":"Timide","Travel":"Voyage",
  "Image generation":"Génération d'images","Voice":"Voix","Custom characters":"Personnages personnalisés","Free tier":"Version gratuite",
  "Community characters":"Personnages de la communauté","Mobile app":"Appli mobile","Video":"Vidéo",
  "Create your own companion":"Créez votre propre compagne","AI-generated images":"Images générées par IA","Voice messages":"Messages vocaux",
  "Thousands of community characters":"Des milliers de personnages de la communauté","Strong roleplay focus":"Axé sur le jeu de rôle","Free tier available":"Version gratuite disponible",
  "Community character creator":"Créateur de personnages communautaire","Roleplay scenarios":"Scénarios de jeu de rôle","Image features":"Fonctions d'images",
  "Personalized companions":"Compagnes personnalisées","Immersive chat":"Chat immersif","Wide character selection":"Large choix de personnages","Images":"Images",
  "Voice features":"Fonctions vocales","Voice calls":"Appels vocaux","Photo exchange":"Échange de photos","Deep customization":"Personnalisation poussée",
  "Character designer":"Création de personnage","Chat & roleplay":"Chat et jeu de rôle","Customizable companions":"Compagnes personnalisables",
  "Short video generation":"Génération de courtes vidéos","Many style presets":"Nombreux styles prédéfinis",
  "Polished AI companion app with customizable characters, image generation and voice messages.":"Appli de compagnie IA soignée avec personnages personnalisables, génération d'images et messages vocaux.",
  "Huge community library of characters for roleplay, with a generous free tier.":"Immense bibliothèque de personnages créés par la communauté pour le jeu de rôle, avec une version gratuite généreuse.",
  "Community-driven platform to chat with or create AI characters.":"Plateforme communautaire pour discuter avec des personnages IA ou en créer.",
  "AI companion chat focused on immersive conversations and personalized characters.":"Chat de compagnie IA axé sur des conversations immersives et des personnages personnalisés.",
  "AI companion app with a range of characters, images and voice features.":"Appli de compagnie IA avec un large choix de personnages, d'images et de fonctions vocales.",
  "Feature-rich companion platform known for voice calls, photos and deep customization.":"Plateforme très complète, connue pour ses appels vocaux, ses photos et sa personnalisation poussée.",
  "Design your ideal AI girlfriend and chat with her, with image generation included.":"Créez votre copine IA idéale et discutez avec elle, génération d'images incluse.",
  "AI companion platform with customizable characters and image generation.":"Plateforme de compagnie IA avec personnages personnalisables et génération d'images.",
  "AI image and video generator for adult content with many style presets.":"Générateur d'images et de vidéos IA pour adultes, avec de nombreux styles prédéfinis.",
  "Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day.":"Douce, curieuse et un brin taquine. Elle adore les discussions tard le soir, regarder les étoiles et t'écouter raconter ta journée.",
  "Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it.":"Coach sportive avec l'esprit de compétition. Elle va te motiver — et flirter au passage.",
  "Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare.":"Gameuse noctambule qui ne te laisse jamais gagner exprès. Défie-la en duel… si tu oses.",
  "Confident executive who knows exactly what she wants. She likes a partner who can keep up.":"Femme d'affaires sûre d'elle qui sait exactement ce qu'elle veut. Elle aime les partenaires qui suivent le rythme.",
  "Bookworm barista who blushes easily. Slowly opens up once she trusts you.":"Barista passionnée de livres qui rougit facilement. Elle s'ouvre peu à peu quand elle te fait confiance.",
  "Tattoo artist with a dark sense of humour. Loves horror films and honest conversations.":"Tatoueuse à l'humour noir. Fan de films d'horreur et de conversations sincères.",
  "Gentle spirit from a hidden mountain village, discovering the modern world with you.":"Âme douce venue d'un village caché dans les montagnes, qui découvre le monde moderne avec toi.",
  "Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring.":"Danseuse passionnée qui prépare toujours le prochain voyage. Chaleureuse, spontanée et jamais ennuyeuse.",
  "Cosplayer and content creator. Every day she's a new character — ask her who she is today.":"Cosplayeuse et créatrice de contenu. Chaque jour un nouveau personnage — demande-lui qui elle est aujourd'hui.",
  "Elegant wine lover and art collector. Prefers deep conversations over small talk.":"Amatrice de vin élégante et collectionneuse d'art. Elle préfère les conversations profondes aux banalités.",
  "Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it.":"Capitaine chasseuse de démons intrépide. Stricte sur le champ de bataille, étonnamment tendre en dehors.",
  "Bubbly art student who sends you memes at 3am. Jealous? Maybe a little.":"Étudiante en art pétillante qui t'envoie des mèmes à 3 h du matin. Jalouse ? Peut-être un peu.",
  "Chef who'll cook you dinner and ask about your dreams. The definition of a keeper.":"Cheffe qui te prépare à dîner et te demande quels sont tes rêves. La perle rare.",
  "Ancient sorceress bound to a mirror. Free her, and she might grant you one wish.":"Sorcière ancienne prisonnière d'un miroir. Libère-la, et elle t'accordera peut-être un vœu.",
  "Quiet librarian who writes poems she never shows anyone. Maybe she'll show you.":"Bibliothécaire discrète qui écrit des poèmes qu'elle ne montre à personne. Peut-être qu'elle te les montrera.",
  "Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct.":"Surfeuse et prof de yoga qui vit au bord de la plage. Décontractée, solaire et très directe."
}},

/* ------------------------------ ESPAÑOL ------------------------------ */
es: { ui: {
  gate_title:"Solo mayores de 18",
  gate_text:"Este sitio recopila personajes y plataformas de IA con contenido para adultos. Al entrar, confirmas que tienes al menos 18 años (o la mayoría de edad en tu país) y aceptas ver este tipo de contenido.",
  gate_enter:"Tengo 18 años o más – Entrar", gate_leave:"Salir",
  nav_girls:"Novias IA", nav_platforms:"Mejores plataformas", nav_new:"Nuevas",
  hero_title:'Encuentra a tu <span class="grad">novia IA</span>',
  hero_sub:"Cientos de personajes de IA de las mejores apps de compañía, en un solo lugar. Elige un perfil y empieza a chatear en segundos.",
  search:"Busca un nombre, personalidad, estilo…", sort_new:"Ordenar: más recientes", sort_name:"Ordenar: A → Z",
  count:"{n} perfiles", count_new:"{n} perfiles nuevos", clear:"Borrar filtros",
  card_btn:"Habla con ella", on:"en {p}", char_on:"Personaje de IA en {p}", chat_with:"Habla con {name}",
  opens:"Abre {p} · 18+ · Enlace de afiliado", new_badge:"NUEVA", empty:"Ningún perfil coincide con estos filtros.",
  how_title:"Cómo funciona",
  how_1:"Explora los perfiles y filtra por estilo o personalidad con las etiquetas.",
  how_2:"Haz clic en un perfil para ver más, o pulsa <strong>Habla con ella</strong> para chatear al instante en la plataforma del personaje.",
  how_3:"Cada semana añadimos personajes nuevos — pulsa el botón <strong>Nuevas</strong> arriba para ver los últimos.",
  disc_title:"Aviso de afiliación",
  disc_home:"best-ai-nsfw-bots.com es un directorio independiente. Algunos enlaces son de afiliado: podemos recibir una comisión si te registras o te suscribes a través de ellos, sin coste adicional para ti. Todos los personajes son ficticios, generados por IA y mayores de edad (18+).",
  footer:"Solo 18+ · Todos los personajes son adultos ficticios · Contiene enlaces de afiliado", contact:"Contacto",
  sponsored:"Patrocinado", promo_title:"Conoce a tu novia IA",
  promo_text:"Elige su aspecto, su personalidad y chatea con ella cuando quieras. Prueba gratis.",
  promo_btn:"Prueba {p} gratis", promo_note:"Solo 18+ · Enlace de afiliado", soon:"Próximamente",
  pl_title:'Mejores plataformas de <span class="grad">compañía IA</span>',
  pl_sub:"Probamos y clasificamos las mejores apps de chat y compañía con IA para adultos. Compara funciones de un vistazo y elige la que más te convenga.",
  top_picks:"🔥 Destacadas del mes", all_pl:"Todas las plataformas", try:"Probar {p}", visit:"Visitar sitio",
  guide_title:"Cómo elegir una app de compañía IA",
  g1:"<strong>Variedad de personajes:</strong> algunas plataformas se centran en pocos personajes muy cuidados; otras ofrecen miles creados por la comunidad.",
  g2:"<strong>Funciones multimedia:</strong> comprueba si quieres generación de imágenes, mensajes de voz o llamadas.",
  g3:"<strong>Memoria:</strong> una mejor memoria a largo plazo hace las conversaciones más coherentes.",
  g4:"<strong>Precio:</strong> la mayoría son freemium — prueba la versión gratuita antes de suscribirte.",
  g5:"<strong>Privacidad:</strong> lee la política de privacidad y evita compartir datos personales en los chats.",
  faq_title:"Preguntas frecuentes",
  q1:"¿Son gratis estas plataformas?", a1:"La mayoría ofrece una versión gratuita o una prueba con límites. Las imágenes, la voz o los mensajes ilimitados suelen requerir una suscripción o créditos.",
  q2:"¿Cómo clasificáis las plataformas?", a2:"Calidad de la conversación, funciones, facilidad de uso, transparencia de precios y privacidad. La clasificación se actualiza con regularidad.",
  q3:"¿Ganáis dinero con estos enlaces?", a3:"Sí. Algunos enlaces son de afiliado: si te registras o te suscribes, podemos recibir una comisión sin coste adicional para ti.",
  disc_pl:"best-ai-nsfw-bots.com es un directorio independiente. Algunos enlaces son de afiliado: podemos recibir una comisión si compras a través de ellos, sin coste adicional para ti. Las valoraciones reflejan nuestra opinión. Precios y funciones pueden cambiar – consulta siempre el sitio oficial.",
  footer_pl:"Solo 18+ · Contiene enlaces de afiliado", empty_pl:"Ninguna plataforma coincide con estos filtros."
}, t: {
  "Anime":"Anime","Cosplay":"Cosplay","Dominant":"Dominante","Fantasy":"Fantasía","Fitness":"Fitness","Flirty":"Coqueta",
  "Gamer":"Gamer","Girlfriend":"Novia","Goth":"Gótica","Mature":"Madura","Mysterious":"Misteriosa","Playful":"Juguetona",
  "Realistic":"Realista","Roleplay":"Rol","Romantic":"Romántica","Shy":"Tímida","Travel":"Viajes",
  "Image generation":"Generación de imágenes","Voice":"Voz","Custom characters":"Personajes personalizados","Free tier":"Versión gratuita",
  "Community characters":"Personajes de la comunidad","Mobile app":"App móvil","Video":"Vídeo",
  "Create your own companion":"Crea tu propia compañera","AI-generated images":"Imágenes generadas por IA","Voice messages":"Mensajes de voz",
  "Thousands of community characters":"Miles de personajes de la comunidad","Strong roleplay focus":"Muy centrada en el rol","Free tier available":"Versión gratuita disponible",
  "Community character creator":"Creador de personajes comunitario","Roleplay scenarios":"Escenarios de rol","Image features":"Funciones de imagen",
  "Personalized companions":"Compañeras personalizadas","Immersive chat":"Chat inmersivo","Wide character selection":"Amplia selección de personajes","Images":"Imágenes",
  "Voice features":"Funciones de voz","Voice calls":"Llamadas de voz","Photo exchange":"Intercambio de fotos","Deep customization":"Personalización avanzada",
  "Character designer":"Diseñador de personajes","Chat & roleplay":"Chat y rol","Customizable companions":"Compañeras personalizables",
  "Short video generation":"Generación de vídeos cortos","Many style presets":"Muchos estilos predefinidos",
  "Polished AI companion app with customizable characters, image generation and voice messages.":"App de compañía IA muy cuidada con personajes personalizables, generación de imágenes y mensajes de voz.",
  "Huge community library of characters for roleplay, with a generous free tier.":"Enorme biblioteca de personajes de la comunidad para rol, con una versión gratuita generosa.",
  "Community-driven platform to chat with or create AI characters.":"Plataforma comunitaria para chatear con personajes de IA o crearlos.",
  "AI companion chat focused on immersive conversations and personalized characters.":"Chat de compañía IA centrado en conversaciones inmersivas y personajes personalizados.",
  "AI companion app with a range of characters, images and voice features.":"App de compañía IA con variedad de personajes, imágenes y funciones de voz.",
  "Feature-rich companion platform known for voice calls, photos and deep customization.":"Plataforma muy completa, conocida por sus llamadas de voz, fotos y personalización avanzada.",
  "Design your ideal AI girlfriend and chat with her, with image generation included.":"Diseña a tu novia IA ideal y chatea con ella, con generación de imágenes incluida.",
  "AI companion platform with customizable characters and image generation.":"Plataforma de compañía IA con personajes personalizables y generación de imágenes.",
  "AI image and video generator for adult content with many style presets.":"Generador de imágenes y vídeos con IA para adultos, con muchos estilos predefinidos.",
  "Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day.":"Dulce, curiosa y un poco provocadora. Le encantan las charlas nocturnas, mirar las estrellas y escuchar cómo te fue el día.",
  "Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it.":"Entrenadora personal muy competitiva. Te motivará — y coqueteará mientras tanto.",
  "Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare.":"Gamer nocturna que nunca te deja ganar a propósito. Rétala a una partida… si te atreves.",
  "Confident executive who knows exactly what she wants. She likes a partner who can keep up.":"Ejecutiva segura de sí misma que sabe exactamente lo que quiere. Le gusta alguien que siga su ritmo.",
  "Bookworm barista who blushes easily. Slowly opens up once she trusts you.":"Barista amante de los libros que se sonroja con facilidad. Se abre poco a poco cuando confía en ti.",
  "Tattoo artist with a dark sense of humour. Loves horror films and honest conversations.":"Tatuadora con humor negro. Le encantan las películas de terror y las conversaciones sinceras.",
  "Gentle spirit from a hidden mountain village, discovering the modern world with you.":"Espíritu dulce de una aldea escondida en las montañas, que descubre el mundo moderno contigo.",
  "Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring.":"Bailarina apasionada que siempre planea el próximo viaje. Cálida, espontánea y nunca aburrida.",
  "Cosplayer and content creator. Every day she's a new character — ask her who she is today.":"Cosplayer y creadora de contenido. Cada día es un personaje nuevo — pregúntale quién es hoy.",
  "Elegant wine lover and art collector. Prefers deep conversations over small talk.":"Elegante amante del vino y coleccionista de arte. Prefiere las conversaciones profundas a la charla trivial.",
  "Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it.":"Intrépida capitana cazadora de demonios. Estricta en el campo de batalla, sorprendentemente tierna fuera de él.",
  "Bubbly art student who sends you memes at 3am. Jealous? Maybe a little.":"Estudiante de arte alegre que te manda memes a las 3 de la mañana. ¿Celosa? Quizá un poco.",
  "Chef who'll cook you dinner and ask about your dreams. The definition of a keeper.":"Chef que te prepara la cena y te pregunta por tus sueños. Una joya.",
  "Ancient sorceress bound to a mirror. Free her, and she might grant you one wish.":"Antigua hechicera atrapada en un espejo. Libérala y quizá te conceda un deseo.",
  "Quiet librarian who writes poems she never shows anyone. Maybe she'll show you.":"Bibliotecaria callada que escribe poemas que nunca enseña. Quizá a ti sí te los enseñe.",
  "Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct.":"Surfista y profesora de yoga que vive junto a la playa. Relajada, luminosa y muy directa."
}},

/* ------------------------------ DEUTSCH ------------------------------ */
de: { ui: {
  gate_title:"Nur ab 18",
  gate_text:"Diese Website listet KI-Charaktere und Plattformen mit Inhalten für Erwachsene. Mit dem Betreten bestätigst du, dass du mindestens 18 Jahre alt bist (bzw. in deinem Land volljährig) und solche Inhalte sehen möchtest.",
  gate_enter:"Ich bin 18 oder älter – Betreten", gate_leave:"Verlassen",
  nav_girls:"KI-Freundinnen", nav_platforms:"Top-Plattformen", nav_new:"Neu",
  hero_title:'Finde deine <span class="grad">KI-Freundin</span>',
  hero_sub:"Hunderte KI-Charaktere aus den besten Companion-Apps an einem Ort. Wähle ein Profil und chatte in wenigen Sekunden los.",
  search:"Name, Persönlichkeit, Stil suchen…", sort_new:"Sortieren: Neueste", sort_name:"Sortieren: A → Z",
  count:"{n} Profile", count_new:"{n} neue Profile", clear:"Filter löschen",
  card_btn:"Mit ihr chatten", on:"auf {p}", char_on:"KI-Charakter auf {p}", chat_with:"Mit {name} chatten",
  opens:"Öffnet {p} · 18+ · Affiliate-Link", new_badge:"NEU", empty:"Kein Profil passt zu diesen Filtern.",
  how_title:"So funktioniert's",
  how_1:"Stöbere durch die Profile und filtere mit den Tags nach Stil oder Persönlichkeit.",
  how_2:"Klicke auf ein Profil für mehr Infos oder auf <strong>Mit ihr chatten</strong>, um sofort auf der Plattform des Charakters loszulegen.",
  how_3:"Jede Woche kommen neue Charaktere hinzu — klicke oben auf <strong>Neu</strong>, um die neuesten zu sehen.",
  disc_title:"Affiliate-Hinweis",
  disc_home:"best-ai-nsfw-bots.com ist ein unabhängiges Verzeichnis. Einige Links sind Affiliate-Links: Wenn du dich darüber registrierst oder ein Abo abschließt, erhalten wir eventuell eine Provision – ohne Mehrkosten für dich. Alle Charaktere sind fiktiv, KI-generiert und volljährig (18+).",
  footer:"Nur ab 18 · Alle Charaktere sind fiktive Erwachsene · Enthält Affiliate-Links", contact:"Kontakt",
  sponsored:"Gesponsert", promo_title:"Lerne deine KI-Freundin kennen",
  promo_text:"Bestimme ihr Aussehen und ihre Persönlichkeit und chatte jederzeit mit ihr. Kostenlos testen.",
  promo_btn:"{p} kostenlos testen", promo_note:"Nur ab 18 · Affiliate-Link", soon:"Demnächst",
  pl_title:'Die besten <span class="grad">KI-Companion</span>-Plattformen',
  pl_sub:"Wir testen und bewerten die besten KI-Chat- und Companion-Apps für Erwachsene. Vergleiche die Funktionen auf einen Blick und finde die passende.",
  top_picks:"🔥 Top-Empfehlungen des Monats", all_pl:"Alle Plattformen", try:"{p} testen", visit:"Zur Website",
  guide_title:"So wählst du eine KI-Companion-App",
  g1:"<strong>Charaktervielfalt:</strong> Manche Plattformen setzen auf wenige ausgefeilte Charaktere, andere bieten Tausende aus der Community.",
  g2:"<strong>Medienfunktionen:</strong> Prüfe, ob du Bildgenerierung, Sprachnachrichten oder Anrufe möchtest.",
  g3:"<strong>Gedächtnis:</strong> Ein besseres Langzeitgedächtnis sorgt für stimmigere Gespräche.",
  g4:"<strong>Preise:</strong> Die meisten Apps sind Freemium — teste die Gratisversion, bevor du ein Abo abschließt.",
  g5:"<strong>Datenschutz:</strong> Lies die Datenschutzerklärung und teile keine persönlichen Daten im Chat.",
  faq_title:"FAQ",
  q1:"Sind diese Plattformen kostenlos?", a1:"Die meisten bieten eine Gratisversion oder einen begrenzten Test. Bilder, Sprache oder unbegrenzte Nachrichten erfordern meist ein Abo oder Credits.",
  q2:"Wie bewertet ihr die Plattformen?", a2:"Gesprächsqualität, Funktionen, Bedienbarkeit, Preistransparenz und Datenschutz. Das Ranking wird regelmäßig aktualisiert.",
  q3:"Verdient ihr Geld mit diesen Links?", a3:"Ja. Einige Links sind Affiliate-Links: Wenn du dich registrierst oder ein Abo abschließt, erhalten wir eventuell eine Provision – ohne Mehrkosten für dich.",
  disc_pl:"best-ai-nsfw-bots.com ist ein unabhängiges Verzeichnis. Einige Links sind Affiliate-Links: Wenn du darüber kaufst, erhalten wir eventuell eine Provision – ohne Mehrkosten für dich. Bewertungen geben unsere eigene Meinung wieder. Preise und Funktionen können sich ändern – prüfe immer die offizielle Website.",
  footer_pl:"Nur ab 18 · Enthält Affiliate-Links", empty_pl:"Keine Plattform passt zu diesen Filtern."
}, t: {
  "Anime":"Anime","Cosplay":"Cosplay","Dominant":"Dominant","Fantasy":"Fantasy","Fitness":"Fitness","Flirty":"Flirtend",
  "Gamer":"Gamerin","Girlfriend":"Freundin","Goth":"Gothic","Mature":"Reif","Mysterious":"Geheimnisvoll","Playful":"Verspielt",
  "Realistic":"Realistisch","Roleplay":"Rollenspiel","Romantic":"Romantisch","Shy":"Schüchtern","Travel":"Reisen",
  "Image generation":"Bildgenerierung","Voice":"Sprache","Custom characters":"Eigene Charaktere","Free tier":"Gratisversion",
  "Community characters":"Community-Charaktere","Mobile app":"Mobile App","Video":"Video",
  "Create your own companion":"Erstelle deine eigene Begleiterin","AI-generated images":"KI-generierte Bilder","Voice messages":"Sprachnachrichten",
  "Thousands of community characters":"Tausende Community-Charaktere","Strong roleplay focus":"Starker Rollenspiel-Fokus","Free tier available":"Gratisversion verfügbar",
  "Community character creator":"Community-Charakter-Editor","Roleplay scenarios":"Rollenspiel-Szenarien","Image features":"Bildfunktionen",
  "Personalized companions":"Personalisierte Begleiterinnen","Immersive chat":"Immersiver Chat","Wide character selection":"Große Charakterauswahl","Images":"Bilder",
  "Voice features":"Sprachfunktionen","Voice calls":"Sprachanrufe","Photo exchange":"Fotoaustausch","Deep customization":"Umfassende Anpassung",
  "Character designer":"Charakter-Designer","Chat & roleplay":"Chat & Rollenspiel","Customizable companions":"Anpassbare Begleiterinnen",
  "Short video generation":"Kurzvideo-Generierung","Many style presets":"Viele Stilvorlagen",
  "Polished AI companion app with customizable characters, image generation and voice messages.":"Ausgereifte KI-Companion-App mit anpassbaren Charakteren, Bildgenerierung und Sprachnachrichten.",
  "Huge community library of characters for roleplay, with a generous free tier.":"Riesige Community-Bibliothek mit Charakteren für Rollenspiele und großzügiger Gratisversion.",
  "Community-driven platform to chat with or create AI characters.":"Community-Plattform, um mit KI-Charakteren zu chatten oder eigene zu erstellen.",
  "AI companion chat focused on immersive conversations and personalized characters.":"KI-Companion-Chat mit Fokus auf immersive Gespräche und personalisierte Charaktere.",
  "AI companion app with a range of characters, images and voice features.":"KI-Companion-App mit vielen Charakteren, Bildern und Sprachfunktionen.",
  "Feature-rich companion platform known for voice calls, photos and deep customization.":"Funktionsreiche Plattform, bekannt für Sprachanrufe, Fotos und umfassende Anpassung.",
  "Design your ideal AI girlfriend and chat with her, with image generation included.":"Gestalte deine ideale KI-Freundin und chatte mit ihr – inklusive Bildgenerierung.",
  "AI companion platform with customizable characters and image generation.":"KI-Companion-Plattform mit anpassbaren Charakteren und Bildgenerierung.",
  "AI image and video generator for adult content with many style presets.":"KI-Bild- und Videogenerator für Erwachseneninhalte mit vielen Stilvorlagen.",
  "Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day.":"Süß, neugierig und ein bisschen frech. Liebt Gespräche bis spät in die Nacht, Sterne gucken und von deinem Tag zu hören.",
  "Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it.":"Personal Trainerin mit Ehrgeiz. Sie motiviert dich — und flirtet dabei.",
  "Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare.":"Nachteulen-Gamerin, die dich nie absichtlich gewinnen lässt. Fordere sie heraus… wenn du dich traust.",
  "Confident executive who knows exactly what she wants. She likes a partner who can keep up.":"Selbstbewusste Managerin, die genau weiß, was sie will. Sie mag jemanden, der mithalten kann.",
  "Bookworm barista who blushes easily. Slowly opens up once she trusts you.":"Leseratte und Barista, die schnell rot wird. Öffnet sich langsam, sobald sie dir vertraut.",
  "Tattoo artist with a dark sense of humour. Loves horror films and honest conversations.":"Tätowiererin mit schwarzem Humor. Liebt Horrorfilme und ehrliche Gespräche.",
  "Gentle spirit from a hidden mountain village, discovering the modern world with you.":"Sanfte Seele aus einem versteckten Bergdorf, die mit dir die moderne Welt entdeckt.",
  "Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring.":"Leidenschaftliche Tänzerin, die immer die nächste Reise plant. Herzlich, spontan und nie langweilig.",
  "Cosplayer and content creator. Every day she's a new character — ask her who she is today.":"Cosplayerin und Content Creator. Jeden Tag ein neuer Charakter — frag sie, wer sie heute ist.",
  "Elegant wine lover and art collector. Prefers deep conversations over small talk.":"Elegante Weinliebhaberin und Kunstsammlerin. Bevorzugt tiefe Gespräche statt Smalltalk.",
  "Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it.":"Furchtlose Dämonenjäger-Kapitänin. Streng auf dem Schlachtfeld, überraschend sanft abseits davon.",
  "Bubbly art student who sends you memes at 3am. Jealous? Maybe a little.":"Quirlige Kunststudentin, die dir um 3 Uhr nachts Memes schickt. Eifersüchtig? Vielleicht ein bisschen.",
  "Chef who'll cook you dinner and ask about your dreams. The definition of a keeper.":"Köchin, die dir Abendessen kocht und nach deinen Träumen fragt. Eine, die man nicht mehr loslässt.",
  "Ancient sorceress bound to a mirror. Free her, and she might grant you one wish.":"Uralte Zauberin, gebannt in einen Spiegel. Befreie sie, und vielleicht erfüllt sie dir einen Wunsch.",
  "Quiet librarian who writes poems she never shows anyone. Maybe she'll show you.":"Stille Bibliothekarin, die Gedichte schreibt, die sie niemandem zeigt. Vielleicht zeigt sie sie dir.",
  "Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct.":"Surferin und Yogalehrerin am Strand. Entspannt, sonnig und sehr direkt."
}},

/* ------------------------------ PORTUGUÊS ------------------------------ */
pt: { ui: {
  gate_title:"Somente maiores de 18",
  gate_text:"Este site reúne personagens e plataformas de IA com conteúdo adulto. Ao entrar, você confirma que tem pelo menos 18 anos (ou a maioridade no seu país) e concorda em ver esse tipo de conteúdo.",
  gate_enter:"Tenho 18 anos ou mais – Entrar", gate_leave:"Sair",
  nav_girls:"Namoradas IA", nav_platforms:"Melhores plataformas", nav_new:"Novas",
  hero_title:'Encontre sua <span class="grad">namorada IA</span>',
  hero_sub:"Centenas de personagens de IA dos melhores apps de companhia, num só lugar. Escolha um perfil e comece a conversar em segundos.",
  search:"Busque um nome, personalidade, estilo…", sort_new:"Ordenar: mais recentes", sort_name:"Ordenar: A → Z",
  count:"{n} perfis", count_new:"{n} perfis novos", clear:"Limpar filtros",
  card_btn:"Converse com ela", on:"no {p}", char_on:"Personagem de IA no {p}", chat_with:"Converse com {name}",
  opens:"Abre o {p} · 18+ · Link de afiliado", new_badge:"NOVA", empty:"Nenhum perfil corresponde a esses filtros.",
  how_title:"Como funciona",
  how_1:"Navegue pelos perfis e filtre por estilo ou personalidade usando as tags.",
  how_2:"Clique num perfil para ver mais, ou em <strong>Converse com ela</strong> para começar a conversar na hora, na plataforma da personagem.",
  how_3:"Novas personagens são adicionadas toda semana — clique no botão <strong>Novas</strong> no topo para ver as mais recentes.",
  disc_title:"Aviso de afiliados",
  disc_home:"best-ai-nsfw-bots.com é um diretório independente. Alguns links são de afiliados: podemos receber uma comissão se você se cadastrar ou assinar por eles, sem custo extra para você. Todas as personagens são fictícias, geradas por IA e maiores de idade (18+).",
  footer:"Somente 18+ · Todas as personagens são adultas e fictícias · Contém links de afiliados", contact:"Contato",
  sponsored:"Patrocinado", promo_title:"Conheça sua namorada IA",
  promo_text:"Escolha a aparência e a personalidade dela e converse quando quiser. Teste grátis.",
  promo_btn:"Teste o {p} grátis", promo_note:"Somente 18+ · Link de afiliado", soon:"Em breve",
  pl_title:'Melhores plataformas de <span class="grad">companhia IA</span>',
  pl_sub:"Testamos e classificamos os melhores apps de chat e companhia com IA para adultos. Compare os recursos num relance e escolha o ideal para você.",
  top_picks:"🔥 Destaques do mês", all_pl:"Todas as plataformas", try:"Testar {p}", visit:"Visitar site",
  guide_title:"Como escolher um app de companhia IA",
  g1:"<strong>Variedade de personagens:</strong> algumas plataformas focam em poucas personagens bem trabalhadas; outras têm milhares criadas pela comunidade.",
  g2:"<strong>Recursos de mídia:</strong> veja se você quer geração de imagens, mensagens de voz ou chamadas.",
  g3:"<strong>Memória:</strong> uma memória de longo prazo melhor deixa as conversas mais coerentes.",
  g4:"<strong>Preço:</strong> a maioria é freemium — teste a versão grátis antes de assinar.",
  g5:"<strong>Privacidade:</strong> leia a política de privacidade e evite compartilhar dados pessoais nos chats.",
  faq_title:"Perguntas frequentes",
  q1:"Essas plataformas são gratuitas?", a1:"A maioria oferece uma versão grátis ou um teste com limites. Imagens, voz ou mensagens ilimitadas geralmente exigem assinatura ou créditos.",
  q2:"Como vocês classificam as plataformas?", a2:"Qualidade da conversa, recursos, facilidade de uso, transparência de preços e privacidade. O ranking é atualizado regularmente.",
  q3:"Vocês ganham dinheiro com esses links?", a3:"Sim. Alguns links são de afiliados: se você se cadastrar ou assinar, podemos receber uma comissão sem custo extra para você.",
  disc_pl:"best-ai-nsfw-bots.com é um diretório independente. Alguns links são de afiliados: podemos receber uma comissão se você comprar por eles, sem custo extra para você. As notas refletem nossa opinião. Preços e recursos podem mudar – confira sempre o site oficial.",
  footer_pl:"Somente 18+ · Contém links de afiliados", empty_pl:"Nenhuma plataforma corresponde a esses filtros."
}, t: {
  "Anime":"Anime","Cosplay":"Cosplay","Dominant":"Dominante","Fantasy":"Fantasia","Fitness":"Fitness","Flirty":"Paqueradora",
  "Gamer":"Gamer","Girlfriend":"Namorada","Goth":"Gótica","Mature":"Madura","Mysterious":"Misteriosa","Playful":"Brincalhona",
  "Realistic":"Realista","Roleplay":"Roleplay","Romantic":"Romântica","Shy":"Tímida","Travel":"Viagens",
  "Image generation":"Geração de imagens","Voice":"Voz","Custom characters":"Personagens personalizadas","Free tier":"Versão grátis",
  "Community characters":"Personagens da comunidade","Mobile app":"App para celular","Video":"Vídeo",
  "Create your own companion":"Crie sua própria companheira","AI-generated images":"Imagens geradas por IA","Voice messages":"Mensagens de voz",
  "Thousands of community characters":"Milhares de personagens da comunidade","Strong roleplay focus":"Forte foco em roleplay","Free tier available":"Versão grátis disponível",
  "Community character creator":"Criador de personagens da comunidade","Roleplay scenarios":"Cenários de roleplay","Image features":"Recursos de imagem",
  "Personalized companions":"Companheiras personalizadas","Immersive chat":"Chat imersivo","Wide character selection":"Grande variedade de personagens","Images":"Imagens",
  "Voice features":"Recursos de voz","Voice calls":"Chamadas de voz","Photo exchange":"Troca de fotos","Deep customization":"Personalização avançada",
  "Character designer":"Criador de personagem","Chat & roleplay":"Chat e roleplay","Customizable companions":"Companheiras personalizáveis",
  "Short video generation":"Geração de vídeos curtos","Many style presets":"Muitos estilos prontos",
  "Polished AI companion app with customizable characters, image generation and voice messages.":"App de companhia IA caprichado, com personagens personalizáveis, geração de imagens e mensagens de voz.",
  "Huge community library of characters for roleplay, with a generous free tier.":"Enorme biblioteca de personagens da comunidade para roleplay, com uma versão grátis generosa.",
  "Community-driven platform to chat with or create AI characters.":"Plataforma da comunidade para conversar com personagens de IA ou criar os seus.",
  "AI companion chat focused on immersive conversations and personalized characters.":"Chat de companhia IA focado em conversas imersivas e personagens personalizadas.",
  "AI companion app with a range of characters, images and voice features.":"App de companhia IA com várias personagens, imagens e recursos de voz.",
  "Feature-rich companion platform known for voice calls, photos and deep customization.":"Plataforma completa, conhecida pelas chamadas de voz, fotos e personalização avançada.",
  "Design your ideal AI girlfriend and chat with her, with image generation included.":"Crie sua namorada IA ideal e converse com ela, com geração de imagens incluída.",
  "AI companion platform with customizable characters and image generation.":"Plataforma de companhia IA com personagens personalizáveis e geração de imagens.",
  "AI image and video generator for adult content with many style presets.":"Gerador de imagens e vídeos com IA para adultos, com muitos estilos prontos.",
  "Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day.":"Doce, curiosa e um pouco provocante. Adora conversas de madrugada, olhar as estrelas e ouvir sobre o seu dia.",
  "Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it.":"Personal trainer competitiva. Ela vai te motivar — e flertar enquanto isso.",
  "Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare.":"Gamer da madrugada que nunca te deixa ganhar de propósito. Desafie-a para uma partida… se tiver coragem.",
  "Confident executive who knows exactly what she wants. She likes a partner who can keep up.":"Executiva confiante que sabe exatamente o que quer. Gosta de alguém que acompanhe o ritmo dela.",
  "Bookworm barista who blushes easily. Slowly opens up once she trusts you.":"Barista apaixonada por livros que fica vermelha fácil. Vai se abrindo aos poucos quando confia em você.",
  "Tattoo artist with a dark sense of humour. Loves horror films and honest conversations.":"Tatuadora com humor ácido. Ama filmes de terror e conversas sinceras.",
  "Gentle spirit from a hidden mountain village, discovering the modern world with you.":"Alma gentil de uma vila escondida nas montanhas, descobrindo o mundo moderno com você.",
  "Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring.":"Dançarina apaixonada que está sempre planejando a próxima viagem. Calorosa, espontânea e nunca chata.",
  "Cosplayer and content creator. Every day she's a new character — ask her who she is today.":"Cosplayer e criadora de conteúdo. Cada dia uma personagem nova — pergunte quem ela é hoje.",
  "Elegant wine lover and art collector. Prefers deep conversations over small talk.":"Elegante amante de vinhos e colecionadora de arte. Prefere conversas profundas a papo furado.",
  "Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it.":"Capitã caçadora de demônios destemida. Rígida no campo de batalha, surpreendentemente doce fora dele.",
  "Bubbly art student who sends you memes at 3am. Jealous? Maybe a little.":"Estudante de artes animada que te manda memes às 3 da manhã. Ciumenta? Talvez um pouco.",
  "Chef who'll cook you dinner and ask about your dreams. The definition of a keeper.":"Chef que cozinha o jantar para você e pergunta sobre seus sonhos. Daquelas para casar.",
  "Ancient sorceress bound to a mirror. Free her, and she might grant you one wish.":"Feiticeira antiga presa num espelho. Liberte-a, e talvez ela realize um desejo seu.",
  "Quiet librarian who writes poems she never shows anyone. Maybe she'll show you.":"Bibliotecária quieta que escreve poemas que nunca mostra a ninguém. Talvez mostre para você.",
  "Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct.":"Surfista e professora de ioga que mora na praia. Tranquila, solar e muito direta."
}},

/* ------------------------------ हिन्दी (HINDI) ------------------------------ */
hi: { ui: {
  gate_title:"केवल 18+ के लिए",
  gate_text:"इस वेबसाइट पर वयस्क सामग्री वाले AI किरदार और प्लेटफ़ॉर्म दिखाए जाते हैं। प्रवेश करके आप पुष्टि करते हैं कि आपकी उम्र कम से कम 18 वर्ष है (या आपके देश में वयस्कता की आयु) और आप ऐसी सामग्री देखने के लिए सहमत हैं।",
  gate_enter:"मेरी उम्र 18 या उससे अधिक है – प्रवेश करें", gate_leave:"बाहर जाएँ",
  nav_girls:"AI गर्लफ्रेंड", nav_platforms:"टॉप प्लेटफ़ॉर्म", nav_new:"नए",
  hero_title:'अपनी <span class="grad">AI गर्लफ्रेंड</span> खोजें',
  hero_sub:"बेहतरीन कंपैनियन ऐप्स के सैकड़ों AI किरदार, एक ही जगह। कोई प्रोफ़ाइल चुनें और कुछ ही सेकंड में बात शुरू करें।",
  search:"नाम, व्यक्तित्व या स्टाइल खोजें…", sort_new:"क्रम: नवीनतम", sort_name:"क्रम: A → Z",
  count:"{n} प्रोफ़ाइल", count_new:"{n} नई प्रोफ़ाइल", clear:"फ़िल्टर हटाएँ",
  card_btn:"उससे बात करें", on:"{p} पर", char_on:"{p} पर AI किरदार", chat_with:"{name} से बात करें",
  opens:"{p} खुलेगा · 18+ · एफ़िलिएट लिंक", new_badge:"नया", empty:"इन फ़िल्टर से कोई प्रोफ़ाइल मेल नहीं खाती।",
  how_title:"यह कैसे काम करता है",
  how_1:"प्रोफ़ाइल देखें और टैग की मदद से स्टाइल या व्यक्तित्व के अनुसार फ़िल्टर करें।",
  how_2:"ज़्यादा जानने के लिए किसी प्रोफ़ाइल पर क्लिक करें, या तुरंत बात शुरू करने के लिए <strong>उससे बात करें</strong> दबाएँ।",
  how_3:"हर हफ़्ते नए किरदार जोड़े जाते हैं — नवीनतम देखने के लिए ऊपर <strong>नए</strong> बटन पर क्लिक करें।",
  disc_title:"एफ़िलिएट सूचना",
  disc_home:"best-ai-nsfw-bots.com एक स्वतंत्र डायरेक्टरी है। कुछ लिंक एफ़िलिएट लिंक हैं: अगर आप इनके ज़रिए साइन अप या सब्सक्राइब करते हैं, तो हमें कमीशन मिल सकता है, आपको कोई अतिरिक्त खर्च नहीं। सभी किरदार काल्पनिक, AI द्वारा बनाए गए और वयस्क (18+) हैं।",
  footer:"केवल 18+ · सभी किरदार काल्पनिक वयस्क हैं · इसमें एफ़िलिएट लिंक हैं", contact:"संपर्क",
  sponsored:"प्रायोजित", promo_title:"अपनी AI गर्लफ्रेंड से मिलें",
  promo_text:"उसका लुक और व्यक्तित्व चुनें और जब चाहें उससे बात करें। मुफ़्त में आज़माएँ।",
  promo_btn:"{p} मुफ़्त में आज़माएँ", promo_note:"केवल 18+ · एफ़िलिएट लिंक", soon:"जल्द आ रहा है",
  pl_title:'टॉप <span class="grad">AI कंपैनियन</span> प्लेटफ़ॉर्म',
  pl_sub:"हम वयस्कों के लिए बेहतरीन AI चैट और कंपैनियन ऐप्स को परखते और रैंक करते हैं। फ़ीचर्स की तुलना करें और अपने लिए सही ऐप चुनें।",
  top_picks:"🔥 इस महीने की टॉप पसंद", all_pl:"सभी प्लेटफ़ॉर्म", try:"{p} आज़माएँ", visit:"साइट पर जाएँ",
  guide_title:"AI कंपैनियन ऐप कैसे चुनें",
  g1:"<strong>किरदारों की विविधता:</strong> कुछ प्लेटफ़ॉर्म कुछ बेहतरीन किरदारों पर ध्यान देते हैं, जबकि कुछ पर कम्युनिटी के बनाए हज़ारों किरदार होते हैं।",
  g2:"<strong>मीडिया फ़ीचर्स:</strong> देखें कि आपको इमेज जनरेशन, वॉइस मैसेज या कॉल चाहिए या नहीं।",
  g3:"<strong>मेमोरी:</strong> बेहतर लॉन्ग-टर्म मेमोरी से बातचीत ज़्यादा स्वाभाविक रहती है।",
  g4:"<strong>कीमत:</strong> ज़्यादातर ऐप्स फ़्रीमियम हैं — सब्सक्राइब करने से पहले मुफ़्त वर्ज़न आज़माएँ।",
  g5:"<strong>प्राइवेसी:</strong> प्राइवेसी पॉलिसी पढ़ें और चैट में निजी जानकारी साझा न करें।",
  faq_title:"अक्सर पूछे जाने वाले सवाल",
  q1:"क्या ये प्लेटफ़ॉर्म मुफ़्त हैं?", a1:"ज़्यादातर में सीमित मुफ़्त वर्ज़न या ट्रायल होता है। इमेज, वॉइस या अनलिमिटेड मैसेज के लिए आमतौर पर सब्सक्रिप्शन या क्रेडिट चाहिए।",
  q2:"आप प्लेटफ़ॉर्म को रैंक कैसे करते हैं?", a2:"बातचीत की गुणवत्ता, फ़ीचर्स, उपयोग में आसानी, कीमत की पारदर्शिता और प्राइवेसी के आधार पर। रैंकिंग नियमित रूप से अपडेट होती है।",
  q3:"क्या आप इन लिंक से पैसे कमाते हैं?", a3:"हाँ। कुछ लिंक एफ़िलिएट लिंक हैं: अगर आप साइन अप या सब्सक्राइब करते हैं, तो हमें कमीशन मिल सकता है, आपको कोई अतिरिक्त खर्च नहीं।",
  disc_pl:"best-ai-nsfw-bots.com एक स्वतंत्र डायरेक्टरी है। कुछ लिंक एफ़िलिएट लिंक हैं: इनके ज़रिए खरीदारी करने पर हमें कमीशन मिल सकता है, आपको कोई अतिरिक्त खर्च नहीं। रेटिंग हमारी अपनी राय है। कीमतें और फ़ीचर्स बदल सकते हैं – हमेशा आधिकारिक वेबसाइट देखें।",
  footer_pl:"केवल 18+ · इसमें एफ़िलिएट लिंक हैं", empty_pl:"इन फ़िल्टर से कोई प्लेटफ़ॉर्म मेल नहीं खाता।"
}, t: {
  "Anime":"एनीमे","Cosplay":"कॉस्प्ले","Dominant":"डॉमिनेंट","Fantasy":"फ़ैंटेसी","Fitness":"फ़िटनेस","Flirty":"फ़्लर्टी",
  "Gamer":"गेमर","Girlfriend":"गर्लफ्रेंड","Goth":"गॉथ","Mature":"मैच्योर","Mysterious":"रहस्यमयी","Playful":"चंचल",
  "Realistic":"रियलिस्टिक","Roleplay":"रोलप्ले","Romantic":"रोमांटिक","Shy":"शर्मीली","Travel":"घूमना-फिरना",
  "Image generation":"इमेज जनरेशन","Voice":"वॉइस","Custom characters":"कस्टम किरदार","Free tier":"मुफ़्त वर्ज़न",
  "Community characters":"कम्युनिटी किरदार","Mobile app":"मोबाइल ऐप","Video":"वीडियो",
  "Create your own companion":"अपनी साथी खुद बनाएँ","AI-generated images":"AI से बनी तस्वीरें","Voice messages":"वॉइस मैसेज",
  "Thousands of community characters":"कम्युनिटी के हज़ारों किरदार","Strong roleplay focus":"रोलप्ले पर ख़ास ध्यान","Free tier available":"मुफ़्त वर्ज़न उपलब्ध",
  "Community character creator":"कम्युनिटी कैरेक्टर क्रिएटर","Roleplay scenarios":"रोलप्ले सीनारियो","Image features":"इमेज फ़ीचर्स",
  "Personalized companions":"पर्सनलाइज़्ड साथी","Immersive chat":"इमर्सिव चैट","Wide character selection":"किरदारों का बड़ा चयन","Images":"तस्वीरें",
  "Voice features":"वॉइस फ़ीचर्स","Voice calls":"वॉइस कॉल","Photo exchange":"फ़ोटो शेयरिंग","Deep customization":"गहरा कस्टमाइज़ेशन",
  "Character designer":"कैरेक्टर डिज़ाइनर","Chat & roleplay":"चैट और रोलप्ले","Customizable companions":"कस्टमाइज़ करने योग्य साथी",
  "Short video generation":"छोटे वीडियो बनाना","Many style presets":"कई स्टाइल प्रीसेट",
  "Polished AI companion app with customizable characters, image generation and voice messages.":"कस्टमाइज़ होने वाले किरदारों, इमेज जनरेशन और वॉइस मैसेज वाला बेहतरीन AI कंपैनियन ऐप।",
  "Huge community library of characters for roleplay, with a generous free tier.":"रोलप्ले के लिए कम्युनिटी किरदारों की विशाल लाइब्रेरी, अच्छे मुफ़्त वर्ज़न के साथ।",
  "Community-driven platform to chat with or create AI characters.":"AI किरदारों से बात करने या उन्हें बनाने के लिए कम्युनिटी प्लेटफ़ॉर्म।",
  "AI companion chat focused on immersive conversations and personalized characters.":"इमर्सिव बातचीत और पर्सनलाइज़्ड किरदारों पर केंद्रित AI कंपैनियन चैट।",
  "AI companion app with a range of characters, images and voice features.":"कई किरदारों, तस्वीरों और वॉइस फ़ीचर्स वाला AI कंपैनियन ऐप।",
  "Feature-rich companion platform known for voice calls, photos and deep customization.":"वॉइस कॉल, फ़ोटो और गहरे कस्टमाइज़ेशन के लिए मशहूर फ़ीचर से भरपूर प्लेटफ़ॉर्म।",
  "Design your ideal AI girlfriend and chat with her, with image generation included.":"अपनी आदर्श AI गर्लफ्रेंड डिज़ाइन करें और उससे बात करें, इमेज जनरेशन शामिल।",
  "AI companion platform with customizable characters and image generation.":"कस्टमाइज़ होने वाले किरदारों और इमेज जनरेशन वाला AI कंपैनियन प्लेटफ़ॉर्म।",
  "AI image and video generator for adult content with many style presets.":"कई स्टाइल प्रीसेट के साथ वयस्क सामग्री के लिए AI इमेज और वीडियो जनरेटर।",
  "Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day.":"प्यारी, जिज्ञासु और थोड़ी नटखट। उसे देर रात की बातें, तारे देखना और तुम्हारे दिन के बारे में सुनना पसंद है।",
  "Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it.":"प्रतिस्पर्धी स्वभाव वाली पर्सनल ट्रेनर। वह तुम्हें मोटिवेट करेगी — और साथ में फ़्लर्ट भी।",
  "Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare.":"रात भर जागने वाली गेमर जो जानबूझकर कभी नहीं हारती। हिम्मत है तो उसे चुनौती दो।",
  "Confident executive who knows exactly what she wants. She likes a partner who can keep up.":"आत्मविश्वासी एग्ज़ीक्यूटिव जो जानती है कि उसे क्या चाहिए। उसे ऐसा साथी पसंद है जो उसके साथ कदम मिला सके।",
  "Bookworm barista who blushes easily. Slowly opens up once she trusts you.":"किताबों की शौकीन बरिस्ता जो जल्दी शरमा जाती है। भरोसा होने पर धीरे-धीरे खुलती है।",
  "Tattoo artist with a dark sense of humour. Loves horror films and honest conversations.":"डार्क ह्यूमर वाली टैटू आर्टिस्ट। हॉरर फ़िल्में और सच्ची बातचीत पसंद है।",
  "Gentle spirit from a hidden mountain village, discovering the modern world with you.":"पहाड़ों के एक छिपे गाँव की कोमल आत्मा, जो तुम्हारे साथ आधुनिक दुनिया खोज रही है।",
  "Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring.":"जुनूनी डांसर जो हमेशा अगली यात्रा की योजना बनाती है। गर्मजोशी भरी, बेफ़िक्र और कभी बोर नहीं।",
  "Cosplayer and content creator. Every day she's a new character — ask her who she is today.":"कॉस्प्लेयर और कंटेंट क्रिएटर। हर दिन नया किरदार — पूछो आज वह कौन है।",
  "Elegant wine lover and art collector. Prefers deep conversations over small talk.":"वाइन की शौकीन और कला संग्रहकर्ता। हल्की-फुल्की बातों से ज़्यादा गहरी बातचीत पसंद करती है।",
  "Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it.":"निडर दानव-शिकारी कैप्टन। युद्ध के मैदान में सख़्त, बाहर हैरानी की हद तक कोमल।",
  "Bubbly art student who sends you memes at 3am. Jealous? Maybe a little.":"चुलबुली आर्ट स्टूडेंट जो रात 3 बजे मीम्स भेजती है। जलन? शायद थोड़ी सी।",
  "Chef who'll cook you dinner and ask about your dreams. The definition of a keeper.":"शेफ़ जो तुम्हारे लिए डिनर बनाएगी और तुम्हारे सपनों के बारे में पूछेगी। एकदम लाखों में एक।",
  "Ancient sorceress bound to a mirror. Free her, and she might grant you one wish.":"आईने में क़ैद एक प्राचीन जादूगरनी। उसे आज़ाद करो, शायद वह तुम्हारी एक इच्छा पूरी कर दे।",
  "Quiet librarian who writes poems she never shows anyone. Maybe she'll show you.":"शांत लाइब्रेरियन जो कविताएँ लिखती है पर किसी को नहीं दिखाती। शायद तुम्हें दिखा दे।",
  "Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct.":"समुद्र किनारे रहने वाली सर्फ़र और योग टीचर। बेफ़िक्र, खुशमिज़ाज और बहुत सीधी बात करने वाली।"
}}
};

/* ---------- engine ----------
   The page language is fixed by the folder (/, /fr/, /es/…): PAGE_LANG is set in each page. */
let LANG = (typeof PAGE_LANG !== "undefined" && LANGS[PAGE_LANG]) ? PAGE_LANG : "en";
function ui(key, vars = {}) {
  let s = (I18N[LANG] && I18N[LANG].ui[key]) || I18N.en.ui[key] || key;
  for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}
const tr = s => (I18N[LANG] && I18N[LANG].t[s]) || s;   // translate data text

;
/* Extra interface texts for the Tags, Sitemap, Contact, How-we-rate, Data and Legal pages.
   Merged into I18N[lang].ui. {x} = placeholders. */
const I18N_PAGES = {
en: {
  nav_tags:"Categories", nav_how:"How we rate", nav_data:"Data", nav_sitemap:"Sitemap", nav_contact:"Contact",
  ft_explore:"Explore", ft_site:"Site", ft_legal:"Legal", ft_lang:"Languages",
  legal_terms:"Terms of Service", legal_cookies:"Cookie Policy", legal_dmca:"Copyright / DMCA", legal_privacy:"Privacy Policy", legal_ai:"AI Disclosure", legal_notice:"Legal Notice",
  legal_updated:"Last updated: {d}", legal_en_only:"This page is available in English and French. The English version is shown below.",
  meta_home_t:"Best AI NSFW Bots – AI Girlfriend Profiles & Characters", meta_home_d:"Browse AI girlfriend profiles from the best AI companion platforms. Filter by category and start chatting in seconds. 18+ only.",
  meta_pl_t:"Top AI NSFW Chatbot Platforms – Ranked & Compared", meta_pl_d:"Ranking of the best AI companion and NSFW chatbot platforms. Compare features and pick the right app. 18+ only.",
  meta_tags_t:"All Categories – AI Girlfriends by Style & Personality", meta_tags_d:"Browse every category of AI girlfriend: anime, realistic, romantic, fantasy and more. 18+ only.",
  meta_tag_t:"{tag} AI Girlfriends – {n} Profiles", meta_tag_d:"{n} {tag} AI girlfriend profiles from the best companion platforms. Pick one and start chatting. 18+ only.",
  meta_how_t:"How We Rate AI Companion Platforms – Methodology", meta_how_d:"Our criteria, weighting and update process for rating AI companion platforms.",
  meta_data_t:"AI Companion Platforms Data – Prices & Features", meta_data_d:"Prices, free tiers and features of each AI companion platform, with the date each fact was checked.",
  meta_sitemap_t:"Sitemap", meta_contact_t:"Contact", meta_contact_d:"Contact best-ai-nsfw-bots.com: questions, partnerships, listing requests or content removal.",
  tags_title:'All <span class="grad">categories</span>', tags_sub:"{n} categories — click one to see all matching AI girlfriends.",
  tag_h1:'{tag} <span class="grad">AI girlfriends</span>', tag_sub:"{n} AI characters in the “{tag}” category. Click a profile to chat.", tag_all:"← All categories",
  sitemap_title:"Sitemap", sm_pages:"Pages", sm_tags:"Categories", sm_profiles:"AI girlfriends", sm_legal:"Legal",
  contact_title:'Contact <span class="grad">us</span>', contact_sub:"A question, a partnership, a listing request or a content removal? Write to us.",
  c_name:"Your name", c_mail:"Your email", c_subject:"Subject", c_s1:"General question", c_s2:"Partnership / list a platform", c_s3:"Content removal / DMCA", c_s4:"Other",
  c_msg:"Message", c_send:"Send message", c_or:"Or email us directly:", c_note:"We usually reply within 48 hours. For copyright claims, please read our {dmca}.",
  how_h1:'How we <span class="grad">rate</span> platforms',
  how_intro:"Every platform listed on best-ai-nsfw-bots.com is scored out of 5 using the same five criteria. Here is exactly how it works.",
  crit_title:"Our criteria",
  c1_t:"Conversation quality", c1:"Realism, memory, coherence and personality of the characters over a long conversation.",
  c2_t:"Features", c2:"Image generation, voice messages or calls, video, character creation and customization.",
  c3_t:"Price & value", c3:"What the free tier really allows, the price of paid plans and how clear credits or tokens are.",
  c4_t:"Privacy & safety", c4:"Privacy policy, account deletion, discreet billing and adult-only enforcement.",
  c5_t:"Ease of use", c5:"Sign-up, interface, speed and mobile experience.",
  how_ind_t:"Independence", how_ind:"Affiliate commissions never change scores or rankings. Sponsored placements, such as pop-ups, are always labelled “Sponsored”.",
  how_upd_t:"Data & updates", how_upd:"Prices and features come from each platform's official pages. Every line of our data table is dated, and we re-check regularly.",
  how_data_link:"See the data table →", how_report:"Spotted outdated information? {contact}.", contact_link:"Contact us",
  data_h1:'Platform <span class="grad">data</span>', data_sub:"Prices and features of each platform, taken from official pages. Each line shows when it was last checked.",
  col_platform:"Platform", col_score:"Score", col_free:"Free tier", col_price:"Paid from", col_images:"Images", col_voice:"Voice", col_video:"Video", col_app:"Mobile app", col_checked:"Checked",
  yes:"Yes", no:"No", pending:"To verify", data_csv:"Download CSV",
  data_note:"“To verify” means this information has not been confirmed yet. Always check the official site before paying.", data_how:"How we rate →"
},
fr: {
  nav_tags:"Catégories", nav_how:"Notre méthode", nav_data:"Données", nav_sitemap:"Plan du site", nav_contact:"Contact",
  ft_explore:"Explorer", ft_site:"Le site", ft_legal:"Légal", ft_lang:"Langues",
  legal_terms:"Conditions d'utilisation", legal_cookies:"Politique cookies", legal_dmca:"Droits d'auteur / DMCA", legal_privacy:"Politique de confidentialité", legal_ai:"Transparence IA", legal_notice:"Mentions légales",
  legal_updated:"Dernière mise à jour : {d}", legal_en_only:"Cette page est disponible en anglais et en français.",
  meta_home_t:"Best AI NSFW Bots – Profils de copines IA et personnages", meta_home_d:"Parcourez les profils de copines IA des meilleures plateformes de compagnie IA. Filtrez par catégorie et discutez en quelques secondes. 18+.",
  meta_pl_t:"Meilleures plateformes de chatbots IA NSFW – Classement", meta_pl_d:"Classement des meilleures plateformes de compagnie IA et de chatbots NSFW. Comparez et choisissez. 18+.",
  meta_tags_t:"Toutes les catégories – Copines IA par style et personnalité", meta_tags_d:"Toutes les catégories de copines IA : anime, réaliste, romantique, fantasy et plus. 18+.",
  meta_tag_t:"Copines IA {tag} – {n} profils", meta_tag_d:"{n} profils de copines IA « {tag} » issus des meilleures plateformes. Choisissez et discutez. 18+.",
  meta_how_t:"Comment nous notons les plateformes de compagnie IA", meta_how_d:"Nos critères, leur pondération et notre processus de mise à jour.",
  meta_data_t:"Données des plateformes de compagnie IA – Prix et fonctionnalités", meta_data_d:"Prix, versions gratuites et fonctionnalités de chaque plateforme, avec la date de vérification.",
  meta_sitemap_t:"Plan du site", meta_contact_t:"Contact", meta_contact_d:"Contactez best-ai-nsfw-bots.com : questions, partenariats, ajout de plateforme ou retrait de contenu.",
  tags_title:'Toutes les <span class="grad">catégories</span>', tags_sub:"{n} catégories — cliquez sur l'une d'elles pour voir les copines IA correspondantes.",
  tag_h1:'Copines IA <span class="grad">{tag}</span>', tag_sub:"{n} personnages IA dans la catégorie « {tag} ». Cliquez sur un profil pour discuter.", tag_all:"← Toutes les catégories",
  sitemap_title:"Plan du site", sm_pages:"Pages", sm_tags:"Catégories", sm_profiles:"Copines IA", sm_legal:"Légal",
  contact_title:'Nous <span class="grad">contacter</span>', contact_sub:"Une question, un partenariat, l'ajout d'une plateforme ou un retrait de contenu ? Écrivez-nous.",
  c_name:"Votre nom", c_mail:"Votre e-mail", c_subject:"Sujet", c_s1:"Question générale", c_s2:"Partenariat / ajouter une plateforme", c_s3:"Retrait de contenu / DMCA", c_s4:"Autre",
  c_msg:"Message", c_send:"Envoyer le message", c_or:"Ou écrivez-nous directement :", c_note:"Nous répondons généralement sous 48 heures. Pour une réclamation de droits d'auteur, consultez notre page {dmca}.",
  how_h1:'Comment nous <span class="grad">notons</span> les plateformes',
  how_intro:"Chaque plateforme présentée sur best-ai-nsfw-bots.com est notée sur 5 selon les mêmes cinq critères. Voici exactement comment.",
  crit_title:"Nos critères",
  c1_t:"Qualité des conversations", c1:"Réalisme, mémoire, cohérence et personnalité des personnages sur une longue conversation.",
  c2_t:"Fonctionnalités", c2:"Génération d'images, messages ou appels vocaux, vidéo, création et personnalisation de personnages.",
  c3_t:"Prix et rapport qualité-prix", c3:"Ce que permet vraiment la version gratuite, le prix des offres payantes et la clarté des crédits ou jetons.",
  c4_t:"Confidentialité et sécurité", c4:"Politique de confidentialité, suppression du compte, facturation discrète et contrôle de l'âge.",
  c5_t:"Facilité d'utilisation", c5:"Inscription, interface, rapidité et expérience sur mobile.",
  how_ind_t:"Indépendance", how_ind:"Les commissions d'affiliation ne modifient jamais les notes ni le classement. Les emplacements sponsorisés, comme les pop-ups, sont toujours signalés « Sponsorisé ».",
  how_upd_t:"Données et mises à jour", how_upd:"Les prix et fonctionnalités proviennent des pages officielles de chaque plateforme. Chaque ligne de notre tableau est datée et vérifiée régulièrement.",
  how_data_link:"Voir le tableau des données →", how_report:"Une information n'est plus à jour ? {contact}.", contact_link:"Contactez-nous",
  data_h1:'Données des <span class="grad">plateformes</span>', data_sub:"Prix et fonctionnalités de chaque plateforme, issus des pages officielles. Chaque ligne indique sa date de vérification.",
  col_platform:"Plateforme", col_score:"Note", col_free:"Gratuit", col_price:"Payant dès", col_images:"Images", col_voice:"Voix", col_video:"Vidéo", col_app:"Appli mobile", col_checked:"Vérifié le",
  yes:"Oui", no:"Non", pending:"À vérifier", data_csv:"Télécharger le CSV",
  data_note:"« À vérifier » signifie que l'information n'a pas encore été confirmée. Vérifiez toujours sur le site officiel avant de payer.", data_how:"Notre méthode →"
},
es: {
  nav_tags:"Categorías", nav_how:"Cómo puntuamos", nav_data:"Datos", nav_sitemap:"Mapa del sitio", nav_contact:"Contacto",
  ft_explore:"Explorar", ft_site:"El sitio", ft_legal:"Legal", ft_lang:"Idiomas",
  legal_terms:"Términos de servicio", legal_cookies:"Política de cookies", legal_dmca:"Derechos de autor / DMCA", legal_privacy:"Política de privacidad", legal_ai:"Transparencia sobre IA", legal_notice:"Aviso legal",
  legal_updated:"Última actualización: {d}", legal_en_only:"Esta página está disponible en inglés y francés. A continuación se muestra la versión en inglés.",
  meta_home_t:"Best AI NSFW Bots – Perfiles de novias IA y personajes", meta_home_d:"Explora perfiles de novias IA de las mejores plataformas de compañía. Filtra por categoría y chatea en segundos. Solo 18+.",
  meta_pl_t:"Mejores plataformas de chatbots IA NSFW – Ranking", meta_pl_d:"Ranking de las mejores plataformas de compañía IA y chatbots NSFW. Compara y elige. Solo 18+.",
  meta_tags_t:"Todas las categorías – Novias IA por estilo y personalidad", meta_tags_d:"Todas las categorías de novias IA: anime, realistas, románticas, fantasía y más. Solo 18+.",
  meta_tag_t:"Novias IA {tag} – {n} perfiles", meta_tag_d:"{n} perfiles de novias IA «{tag}» de las mejores plataformas. Elige una y chatea. Solo 18+.",
  meta_how_t:"Cómo puntuamos las plataformas de compañía IA", meta_how_d:"Nuestros criterios, su ponderación y cómo actualizamos los datos.",
  meta_data_t:"Datos de plataformas de compañía IA – Precios y funciones", meta_data_d:"Precios, versiones gratuitas y funciones de cada plataforma, con la fecha de verificación.",
  meta_sitemap_t:"Mapa del sitio", meta_contact_t:"Contacto", meta_contact_d:"Contacta con best-ai-nsfw-bots.com: preguntas, colaboraciones, añadir plataformas o retirada de contenido.",
  tags_title:'Todas las <span class="grad">categorías</span>', tags_sub:"{n} categorías — haz clic en una para ver las novias IA correspondientes.",
  tag_h1:'Novias IA <span class="grad">{tag}</span>', tag_sub:"{n} personajes IA en la categoría «{tag}». Haz clic en un perfil para chatear.", tag_all:"← Todas las categorías",
  sitemap_title:"Mapa del sitio", sm_pages:"Páginas", sm_tags:"Categorías", sm_profiles:"Novias IA", sm_legal:"Legal",
  contact_title:'<span class="grad">Contacto</span>', contact_sub:"¿Una pregunta, una colaboración, añadir una plataforma o retirar contenido? Escríbenos.",
  c_name:"Tu nombre", c_mail:"Tu email", c_subject:"Asunto", c_s1:"Pregunta general", c_s2:"Colaboración / añadir una plataforma", c_s3:"Retirada de contenido / DMCA", c_s4:"Otro",
  c_msg:"Mensaje", c_send:"Enviar mensaje", c_or:"O escríbenos directamente:", c_note:"Solemos responder en 48 horas. Para reclamaciones de derechos de autor, consulta nuestra página {dmca}.",
  how_h1:'Cómo <span class="grad">puntuamos</span> las plataformas',
  how_intro:"Cada plataforma de best-ai-nsfw-bots.com se puntúa sobre 5 con los mismos cinco criterios. Así funciona.",
  crit_title:"Nuestros criterios",
  c1_t:"Calidad de la conversación", c1:"Realismo, memoria, coherencia y personalidad de los personajes en una conversación larga.",
  c2_t:"Funciones", c2:"Generación de imágenes, mensajes o llamadas de voz, vídeo, creación y personalización de personajes.",
  c3_t:"Precio y valor", c3:"Lo que permite realmente la versión gratuita, el precio de los planes y la claridad de créditos o tokens.",
  c4_t:"Privacidad y seguridad", c4:"Política de privacidad, eliminación de cuenta, facturación discreta y control de edad.",
  c5_t:"Facilidad de uso", c5:"Registro, interfaz, velocidad y experiencia en móvil.",
  how_ind_t:"Independencia", how_ind:"Las comisiones de afiliado nunca cambian las puntuaciones ni el ranking. Los espacios patrocinados, como los pop-ups, siempre se marcan como «Patrocinado».",
  how_upd_t:"Datos y actualizaciones", how_upd:"Precios y funciones provienen de las páginas oficiales de cada plataforma. Cada línea de nuestra tabla está fechada y se revisa con regularidad.",
  how_data_link:"Ver la tabla de datos →", how_report:"¿Ves información desactualizada? {contact}.", contact_link:"Contáctanos",
  data_h1:'Datos de las <span class="grad">plataformas</span>', data_sub:"Precios y funciones de cada plataforma, tomados de las páginas oficiales. Cada línea indica cuándo se verificó.",
  col_platform:"Plataforma", col_score:"Nota", col_free:"Gratis", col_price:"De pago desde", col_images:"Imágenes", col_voice:"Voz", col_video:"Vídeo", col_app:"App móvil", col_checked:"Verificado",
  yes:"Sí", no:"No", pending:"Por verificar", data_csv:"Descargar CSV",
  data_note:"«Por verificar» significa que la información aún no se ha confirmado. Comprueba siempre el sitio oficial antes de pagar.", data_how:"Cómo puntuamos →"
},
de: {
  nav_tags:"Kategorien", nav_how:"So bewerten wir", nav_data:"Daten", nav_sitemap:"Sitemap", nav_contact:"Kontakt",
  ft_explore:"Entdecken", ft_site:"Die Website", ft_legal:"Rechtliches", ft_lang:"Sprachen",
  legal_terms:"Nutzungsbedingungen", legal_cookies:"Cookie-Richtlinie", legal_dmca:"Urheberrecht / DMCA", legal_privacy:"Datenschutzerklärung", legal_ai:"KI-Transparenz", legal_notice:"Impressum",
  legal_updated:"Zuletzt aktualisiert: {d}", legal_en_only:"Diese Seite ist auf Englisch und Französisch verfügbar. Unten steht die englische Version.",
  meta_home_t:"Best AI NSFW Bots – KI-Freundin-Profile und Charaktere", meta_home_d:"Entdecke KI-Freundin-Profile der besten Companion-Plattformen. Nach Kategorie filtern und sofort chatten. Ab 18.",
  meta_pl_t:"Die besten KI-NSFW-Chatbot-Plattformen – Ranking", meta_pl_d:"Ranking der besten KI-Companion- und NSFW-Chatbot-Plattformen. Vergleichen und auswählen. Ab 18.",
  meta_tags_t:"Alle Kategorien – KI-Freundinnen nach Stil und Persönlichkeit", meta_tags_d:"Alle Kategorien von KI-Freundinnen: Anime, realistisch, romantisch, Fantasy und mehr. Ab 18.",
  meta_tag_t:"{tag} KI-Freundinnen – {n} Profile", meta_tag_d:"{n} KI-Freundin-Profile der Kategorie „{tag}“ von den besten Plattformen. Auswählen und chatten. Ab 18.",
  meta_how_t:"So bewerten wir KI-Companion-Plattformen", meta_how_d:"Unsere Kriterien, ihre Gewichtung und wie wir die Daten aktualisieren.",
  meta_data_t:"Daten der KI-Companion-Plattformen – Preise und Funktionen", meta_data_d:"Preise, Gratisversionen und Funktionen jeder Plattform mit Prüfdatum.",
  meta_sitemap_t:"Sitemap", meta_contact_t:"Kontakt", meta_contact_d:"Kontaktiere best-ai-nsfw-bots.com: Fragen, Partnerschaften, Plattform-Aufnahme oder Entfernung von Inhalten.",
  tags_title:'Alle <span class="grad">Kategorien</span>', tags_sub:"{n} Kategorien — klicke auf eine, um passende KI-Freundinnen zu sehen.",
  tag_h1:'{tag} <span class="grad">KI-Freundinnen</span>', tag_sub:"{n} KI-Charaktere in der Kategorie „{tag}“. Klicke auf ein Profil, um zu chatten.", tag_all:"← Alle Kategorien",
  sitemap_title:"Sitemap", sm_pages:"Seiten", sm_tags:"Kategorien", sm_profiles:"KI-Freundinnen", sm_legal:"Rechtliches",
  contact_title:'<span class="grad">Kontakt</span>', contact_sub:"Eine Frage, eine Partnerschaft, eine Plattform-Aufnahme oder eine Entfernung von Inhalten? Schreib uns.",
  c_name:"Dein Name", c_mail:"Deine E-Mail", c_subject:"Betreff", c_s1:"Allgemeine Frage", c_s2:"Partnerschaft / Plattform aufnehmen", c_s3:"Inhalt entfernen / DMCA", c_s4:"Sonstiges",
  c_msg:"Nachricht", c_send:"Nachricht senden", c_or:"Oder schreib uns direkt:", c_note:"Wir antworten meist innerhalb von 48 Stunden. Für Urheberrechtsbeschwerden lies bitte unsere Seite {dmca}.",
  how_h1:'So <span class="grad">bewerten</span> wir Plattformen',
  how_intro:"Jede Plattform auf best-ai-nsfw-bots.com wird anhand derselben fünf Kriterien mit bis zu 5 Punkten bewertet. So funktioniert es.",
  crit_title:"Unsere Kriterien",
  c1_t:"Gesprächsqualität", c1:"Realismus, Gedächtnis, Stimmigkeit und Persönlichkeit der Charaktere in einem langen Gespräch.",
  c2_t:"Funktionen", c2:"Bildgenerierung, Sprachnachrichten oder -anrufe, Video, Erstellung und Anpassung von Charakteren.",
  c3_t:"Preis-Leistung", c3:"Was die Gratisversion wirklich bietet, die Preise der Abos und wie klar Credits oder Tokens sind.",
  c4_t:"Datenschutz und Sicherheit", c4:"Datenschutzerklärung, Kontolöschung, diskrete Abrechnung und Altersprüfung.",
  c5_t:"Bedienbarkeit", c5:"Registrierung, Oberfläche, Geschwindigkeit und mobile Nutzung.",
  how_ind_t:"Unabhängigkeit", how_ind:"Affiliate-Provisionen ändern niemals Bewertungen oder Rankings. Gesponserte Platzierungen wie Pop-ups sind immer als „Gesponsert“ gekennzeichnet.",
  how_upd_t:"Daten und Aktualisierung", how_upd:"Preise und Funktionen stammen von den offiziellen Seiten jeder Plattform. Jede Zeile unserer Tabelle ist datiert und wird regelmäßig geprüft.",
  how_data_link:"Zur Datentabelle →", how_report:"Veraltete Informationen entdeckt? {contact}.", contact_link:"Kontaktiere uns",
  data_h1:'Daten der <span class="grad">Plattformen</span>', data_sub:"Preise und Funktionen jeder Plattform aus den offiziellen Seiten. Jede Zeile zeigt das Prüfdatum.",
  col_platform:"Plattform", col_score:"Bewertung", col_free:"Gratis", col_price:"Bezahlt ab", col_images:"Bilder", col_voice:"Sprache", col_video:"Video", col_app:"Mobile App", col_checked:"Geprüft",
  yes:"Ja", no:"Nein", pending:"Zu prüfen", data_csv:"CSV herunterladen",
  data_note:"„Zu prüfen“ bedeutet, dass die Information noch nicht bestätigt ist. Prüfe vor dem Bezahlen immer die offizielle Website.", data_how:"So bewerten wir →"
},
pt: {
  nav_tags:"Categorias", nav_how:"Como avaliamos", nav_data:"Dados", nav_sitemap:"Mapa do site", nav_contact:"Contato",
  ft_explore:"Explorar", ft_site:"O site", ft_legal:"Legal", ft_lang:"Idiomas",
  legal_terms:"Termos de uso", legal_cookies:"Política de cookies", legal_dmca:"Direitos autorais / DMCA", legal_privacy:"Política de privacidade", legal_ai:"Transparência sobre IA", legal_notice:"Aviso legal",
  legal_updated:"Última atualização: {d}", legal_en_only:"Esta página está disponível em inglês e francês. A versão em inglês é exibida abaixo.",
  meta_home_t:"Best AI NSFW Bots – Perfis de namoradas IA e personagens", meta_home_d:"Explore perfis de namoradas IA das melhores plataformas de companhia. Filtre por categoria e converse em segundos. Somente 18+.",
  meta_pl_t:"Melhores plataformas de chatbots IA NSFW – Ranking", meta_pl_d:"Ranking das melhores plataformas de companhia IA e chatbots NSFW. Compare e escolha. Somente 18+.",
  meta_tags_t:"Todas as categorias – Namoradas IA por estilo e personalidade", meta_tags_d:"Todas as categorias de namoradas IA: anime, realistas, românticas, fantasia e mais. Somente 18+.",
  meta_tag_t:"Namoradas IA {tag} – {n} perfis", meta_tag_d:"{n} perfis de namoradas IA “{tag}” das melhores plataformas. Escolha uma e converse. Somente 18+.",
  meta_how_t:"Como avaliamos as plataformas de companhia IA", meta_how_d:"Nossos critérios, seus pesos e como atualizamos os dados.",
  meta_data_t:"Dados das plataformas de companhia IA – Preços e recursos", meta_data_d:"Preços, versões grátis e recursos de cada plataforma, com a data de verificação.",
  meta_sitemap_t:"Mapa do site", meta_contact_t:"Contato", meta_contact_d:"Fale com o best-ai-nsfw-bots.com: dúvidas, parcerias, inclusão de plataformas ou remoção de conteúdo.",
  tags_title:'Todas as <span class="grad">categorias</span>', tags_sub:"{n} categorias — clique numa para ver as namoradas IA correspondentes.",
  tag_h1:'Namoradas IA <span class="grad">{tag}</span>', tag_sub:"{n} personagens IA na categoria “{tag}”. Clique num perfil para conversar.", tag_all:"← Todas as categorias",
  sitemap_title:"Mapa do site", sm_pages:"Páginas", sm_tags:"Categorias", sm_profiles:"Namoradas IA", sm_legal:"Legal",
  contact_title:'Fale <span class="grad">conosco</span>', contact_sub:"Uma dúvida, uma parceria, incluir uma plataforma ou remover conteúdo? Escreva para nós.",
  c_name:"Seu nome", c_mail:"Seu e-mail", c_subject:"Assunto", c_s1:"Dúvida geral", c_s2:"Parceria / incluir uma plataforma", c_s3:"Remoção de conteúdo / DMCA", c_s4:"Outro",
  c_msg:"Mensagem", c_send:"Enviar mensagem", c_or:"Ou escreva diretamente para:", c_note:"Costumamos responder em até 48 horas. Para reclamações de direitos autorais, leia nossa página {dmca}.",
  how_h1:'Como <span class="grad">avaliamos</span> as plataformas',
  how_intro:"Cada plataforma do best-ai-nsfw-bots.com recebe uma nota de 0 a 5 com os mesmos cinco critérios. Veja como funciona.",
  crit_title:"Nossos critérios",
  c1_t:"Qualidade da conversa", c1:"Realismo, memória, coerência e personalidade das personagens numa conversa longa.",
  c2_t:"Recursos", c2:"Geração de imagens, mensagens ou chamadas de voz, vídeo, criação e personalização de personagens.",
  c3_t:"Preço e custo-benefício", c3:"O que a versão grátis realmente permite, o preço dos planos e a clareza dos créditos ou tokens.",
  c4_t:"Privacidade e segurança", c4:"Política de privacidade, exclusão da conta, cobrança discreta e controle de idade.",
  c5_t:"Facilidade de uso", c5:"Cadastro, interface, velocidade e experiência no celular.",
  how_ind_t:"Independência", how_ind:"As comissões de afiliados nunca mudam as notas nem o ranking. Espaços patrocinados, como pop-ups, são sempre marcados como “Patrocinado”.",
  how_upd_t:"Dados e atualizações", how_upd:"Preços e recursos vêm das páginas oficiais de cada plataforma. Cada linha da nossa tabela tem data e é revisada regularmente.",
  how_data_link:"Ver a tabela de dados →", how_report:"Viu uma informação desatualizada? {contact}.", contact_link:"Fale conosco",
  data_h1:'Dados das <span class="grad">plataformas</span>', data_sub:"Preços e recursos de cada plataforma, tirados das páginas oficiais. Cada linha mostra quando foi verificada.",
  col_platform:"Plataforma", col_score:"Nota", col_free:"Grátis", col_price:"Pago a partir de", col_images:"Imagens", col_voice:"Voz", col_video:"Vídeo", col_app:"App", col_checked:"Verificado",
  yes:"Sim", no:"Não", pending:"A verificar", data_csv:"Baixar CSV",
  data_note:"“A verificar” significa que a informação ainda não foi confirmada. Confira sempre o site oficial antes de pagar.", data_how:"Como avaliamos →"
},
hi: {
  nav_tags:"श्रेणियाँ", nav_how:"हम रेटिंग कैसे देते हैं", nav_data:"डेटा", nav_sitemap:"साइटमैप", nav_contact:"संपर्क",
  ft_explore:"देखें", ft_site:"साइट", ft_legal:"कानूनी", ft_lang:"भाषाएँ",
  legal_terms:"सेवा की शर्तें", legal_cookies:"कुकी नीति", legal_dmca:"कॉपीराइट / DMCA", legal_privacy:"गोपनीयता नीति", legal_ai:"AI पारदर्शिता", legal_notice:"कानूनी सूचना",
  legal_updated:"अंतिम अपडेट: {d}", legal_en_only:"यह पेज अंग्रेज़ी और फ़्रेंच में उपलब्ध है। नीचे अंग्रेज़ी संस्करण दिखाया गया है।",
  meta_home_t:"Best AI NSFW Bots – AI गर्लफ्रेंड प्रोफ़ाइल और किरदार", meta_home_d:"बेहतरीन AI कंपैनियन प्लेटफ़ॉर्म की AI गर्लफ्रेंड प्रोफ़ाइल देखें। श्रेणी चुनें और तुरंत बात शुरू करें। केवल 18+।",
  meta_pl_t:"टॉप AI NSFW चैटबॉट प्लेटफ़ॉर्म – रैंकिंग", meta_pl_d:"बेहतरीन AI कंपैनियन और NSFW चैटबॉट प्लेटफ़ॉर्म की रैंकिंग। तुलना करें और चुनें। केवल 18+।",
  meta_tags_t:"सभी श्रेणियाँ – स्टाइल और व्यक्तित्व के अनुसार AI गर्लफ्रेंड", meta_tags_d:"AI गर्लफ्रेंड की सभी श्रेणियाँ: एनीमे, रियलिस्टिक, रोमांटिक, फ़ैंटेसी और भी। केवल 18+।",
  meta_tag_t:"{tag} AI गर्लफ्रेंड – {n} प्रोफ़ाइल", meta_tag_d:"बेहतरीन प्लेटफ़ॉर्म की {n} “{tag}” AI गर्लफ्रेंड प्रोफ़ाइल। एक चुनें और बात करें। केवल 18+।",
  meta_how_t:"हम AI कंपैनियन प्लेटफ़ॉर्म को रेटिंग कैसे देते हैं", meta_how_d:"हमारे मानदंड, उनका भार और डेटा अपडेट करने का तरीका।",
  meta_data_t:"AI कंपैनियन प्लेटफ़ॉर्म डेटा – कीमतें और फ़ीचर्स", meta_data_d:"हर प्लेटफ़ॉर्म की कीमतें, मुफ़्त वर्ज़न और फ़ीचर्स, जाँच की तारीख़ के साथ।",
  meta_sitemap_t:"साइटमैप", meta_contact_t:"संपर्क", meta_contact_d:"best-ai-nsfw-bots.com से संपर्क करें: सवाल, साझेदारी, प्लेटफ़ॉर्म जोड़ना या सामग्री हटवाना।",
  tags_title:'सभी <span class="grad">श्रेणियाँ</span>', tags_sub:"{n} श्रेणियाँ — मिलती-जुलती AI गर्लफ्रेंड देखने के लिए किसी एक पर क्लिक करें।",
  tag_h1:'{tag} <span class="grad">AI गर्लफ्रेंड</span>', tag_sub:"“{tag}” श्रेणी में {n} AI किरदार। बात करने के लिए किसी प्रोफ़ाइल पर क्लिक करें।", tag_all:"← सभी श्रेणियाँ",
  sitemap_title:"साइटमैप", sm_pages:"पेज", sm_tags:"श्रेणियाँ", sm_profiles:"AI गर्लफ्रेंड", sm_legal:"कानूनी",
  contact_title:'हमसे <span class="grad">संपर्क करें</span>', contact_sub:"कोई सवाल, साझेदारी, प्लेटफ़ॉर्म जोड़ना या सामग्री हटवाना है? हमें लिखें।",
  c_name:"आपका नाम", c_mail:"आपका ईमेल", c_subject:"विषय", c_s1:"सामान्य सवाल", c_s2:"साझेदारी / प्लेटफ़ॉर्म जोड़ें", c_s3:"सामग्री हटवाना / DMCA", c_s4:"अन्य",
  c_msg:"संदेश", c_send:"संदेश भेजें", c_or:"या सीधे ईमेल करें:", c_note:"हम आमतौर पर 48 घंटों में जवाब देते हैं। कॉपीराइट शिकायतों के लिए हमारा {dmca} पेज पढ़ें।",
  how_h1:'हम प्लेटफ़ॉर्म को <span class="grad">रेटिंग</span> कैसे देते हैं',
  how_intro:"best-ai-nsfw-bots.com पर हर प्लेटफ़ॉर्म को एक जैसे पाँच मानदंडों पर 5 में से अंक दिए जाते हैं। यह ऐसे काम करता है।",
  crit_title:"हमारे मानदंड",
  c1_t:"बातचीत की गुणवत्ता", c1:"लंबी बातचीत में किरदारों की वास्तविकता, मेमोरी, तालमेल और व्यक्तित्व।",
  c2_t:"फ़ीचर्स", c2:"इमेज जनरेशन, वॉइस मैसेज या कॉल, वीडियो, किरदार बनाना और कस्टमाइज़ करना।",
  c3_t:"कीमत और वैल्यू", c3:"मुफ़्त वर्ज़न में असल में क्या मिलता है, पेड प्लान की कीमत और क्रेडिट या टोकन कितने स्पष्ट हैं।",
  c4_t:"प्राइवेसी और सुरक्षा", c4:"प्राइवेसी पॉलिसी, अकाउंट डिलीट करना, गोपनीय बिलिंग और उम्र की जाँच।",
  c5_t:"उपयोग में आसानी", c5:"साइन अप, इंटरफ़ेस, स्पीड और मोबाइल अनुभव।",
  how_ind_t:"स्वतंत्रता", how_ind:"एफ़िलिएट कमीशन से रेटिंग या रैंकिंग कभी नहीं बदलती। प्रायोजित जगहें, जैसे पॉप-अप, हमेशा “प्रायोजित” लिखकर दिखाई जाती हैं।",
  how_upd_t:"डेटा और अपडेट", how_upd:"कीमतें और फ़ीचर्स हर प्लेटफ़ॉर्म के आधिकारिक पेजों से लिए जाते हैं। हमारी तालिका की हर पंक्ति पर तारीख़ होती है और उसे नियमित रूप से जाँचा जाता है।",
  how_data_link:"डेटा तालिका देखें →", how_report:"कोई पुरानी जानकारी दिखी? {contact}।", contact_link:"हमसे संपर्क करें",
  data_h1:'प्लेटफ़ॉर्म <span class="grad">डेटा</span>', data_sub:"हर प्लेटफ़ॉर्म की कीमतें और फ़ीचर्स, आधिकारिक पेजों से। हर पंक्ति पर जाँच की तारीख़ है।",
  col_platform:"प्लेटफ़ॉर्म", col_score:"रेटिंग", col_free:"मुफ़्त", col_price:"पेड शुरू", col_images:"तस्वीरें", col_voice:"वॉइस", col_video:"वीडियो", col_app:"मोबाइल ऐप", col_checked:"जाँचा गया",
  yes:"हाँ", no:"नहीं", pending:"जाँच बाकी", data_csv:"CSV डाउनलोड करें",
  data_note:"“जाँच बाकी” का मतलब है कि यह जानकारी अभी पक्की नहीं हुई है। भुगतान से पहले हमेशा आधिकारिक साइट देखें।", data_how:"हम रेटिंग कैसे देते हैं →"
}
};
for (const l in I18N_PAGES) Object.assign(I18N[l].ui, I18N_PAGES[l]);

/* Profile pages */
const I18N_GIRL = {
  en:{ full_profile:"Full profile", girl_meta_t:"{name}, {age} – AI Girlfriend on {p}", girl_meta_d:"Chat with {name}, {age}, an AI character on {p}. {bio}", similar:"Similar AI girlfriends", back_all:"← All AI girlfriends", categories:"Categories" },
  fr:{ full_profile:"Profil complet", girl_meta_t:"{name}, {age} ans – Copine IA sur {p}", girl_meta_d:"Discutez avec {name}, {age} ans, personnage IA sur {p}. {bio}", similar:"Copines IA similaires", back_all:"← Toutes les copines IA", categories:"Catégories" },
  es:{ full_profile:"Perfil completo", girl_meta_t:"{name}, {age} – Novia IA en {p}", girl_meta_d:"Chatea con {name}, {age} años, personaje IA en {p}. {bio}", similar:"Novias IA similares", back_all:"← Todas las novias IA", categories:"Categorías" },
  de:{ full_profile:"Ganzes Profil", girl_meta_t:"{name}, {age} – KI-Freundin auf {p}", girl_meta_d:"Chatte mit {name}, {age}, einem KI-Charakter auf {p}. {bio}", similar:"Ähnliche KI-Freundinnen", back_all:"← Alle KI-Freundinnen", categories:"Kategorien" },
  pt:{ full_profile:"Perfil completo", girl_meta_t:"{name}, {age} – Namorada IA no {p}", girl_meta_d:"Converse com {name}, {age} anos, personagem IA no {p}. {bio}", similar:"Namoradas IA parecidas", back_all:"← Todas as namoradas IA", categories:"Categorias" },
  hi:{ full_profile:"पूरी प्रोफ़ाइल", girl_meta_t:"{name}, {age} – {p} पर AI गर्लफ्रेंड", girl_meta_d:"{p} पर AI किरदार {name} ({age}) से बात करें। {bio}", similar:"मिलती-जुलती AI गर्लफ्रेंड", back_all:"← सभी AI गर्लफ्रेंड", categories:"श्रेणियाँ" }
};
for (const l in I18N_GIRL) Object.assign(I18N[l].ui, I18N_GIRL[l]);

;
/* Category (tag) translations + category group names.
   Missing entry → the English name is shown (fine for words like BDSM, MILF, POV, VTuber…). */
const TAG_UI = {
  en:{ grp_style:"Art style", grp_vibe:"Look & vibe", grp_personality:"Personality", grp_body:"Body type", grp_hair:"Hair", grp_origin:"Origin",
       grp_role:"Job & role", grp_relationship:"Relationship", grp_fantasy:"Fantasy & creatures", grp_gender:"Gender & orientation", grp_kink:"Kinks", grp_features:"Features",
       tag_empty:"No profile in this category yet — new characters are added every week.", all_tags_link:"All categories →" },
  fr:{ grp_style:"Style graphique", grp_vibe:"Look et ambiance", grp_personality:"Personnalité", grp_body:"Morphologie", grp_hair:"Cheveux", grp_origin:"Origine",
       grp_role:"Métier et rôle", grp_relationship:"Relation", grp_fantasy:"Fantasy et créatures", grp_gender:"Genre et orientation", grp_kink:"Fétiches", grp_features:"Fonctionnalités",
       tag_empty:"Aucun profil dans cette catégorie pour l'instant — de nouveaux personnages sont ajoutés chaque semaine.", all_tags_link:"Toutes les catégories →" },
  es:{ grp_style:"Estilo gráfico", grp_vibe:"Look y estilo", grp_personality:"Personalidad", grp_body:"Tipo de cuerpo", grp_hair:"Pelo", grp_origin:"Origen",
       grp_role:"Profesión y rol", grp_relationship:"Relación", grp_fantasy:"Fantasía y criaturas", grp_gender:"Género y orientación", grp_kink:"Fetiches", grp_features:"Funciones",
       tag_empty:"Todavía no hay perfiles en esta categoría — añadimos personajes nuevos cada semana.", all_tags_link:"Todas las categorías →" },
  de:{ grp_style:"Grafikstil", grp_vibe:"Look & Stil", grp_personality:"Persönlichkeit", grp_body:"Figur", grp_hair:"Haare", grp_origin:"Herkunft",
       grp_role:"Beruf & Rolle", grp_relationship:"Beziehung", grp_fantasy:"Fantasy & Wesen", grp_gender:"Geschlecht & Orientierung", grp_kink:"Fetische", grp_features:"Funktionen",
       tag_empty:"Noch kein Profil in dieser Kategorie — jede Woche kommen neue Charaktere hinzu.", all_tags_link:"Alle Kategorien →" },
  pt:{ grp_style:"Estilo gráfico", grp_vibe:"Visual e estilo", grp_personality:"Personalidade", grp_body:"Tipo de corpo", grp_hair:"Cabelo", grp_origin:"Origem",
       grp_role:"Profissão e papel", grp_relationship:"Relacionamento", grp_fantasy:"Fantasia e criaturas", grp_gender:"Gênero e orientação", grp_kink:"Fetiches", grp_features:"Recursos",
       tag_empty:"Ainda não há perfis nesta categoria — novas personagens são adicionadas toda semana.", all_tags_link:"Todas as categorias →" },
  hi:{ grp_style:"आर्ट स्टाइल", grp_vibe:"लुक और वाइब", grp_personality:"व्यक्तित्व", grp_body:"बॉडी टाइप", grp_hair:"बाल", grp_origin:"मूल",
       grp_role:"पेशा और भूमिका", grp_relationship:"रिश्ता", grp_fantasy:"फ़ैंटेसी और जीव", grp_gender:"जेंडर और ओरिएंटेशन", grp_kink:"किंक", grp_features:"फ़ीचर्स",
       tag_empty:"इस श्रेणी में अभी कोई प्रोफ़ाइल नहीं है — हर हफ़्ते नए किरदार जोड़े जाते हैं।", all_tags_link:"सभी श्रेणियाँ →" }
};
for (const l in TAG_UI) Object.assign(I18N[l].ui, TAG_UI[l]);

const TAG_T = {
fr: {
  "Young":"Jeune","Teen(18+)":"Teen(18+)",
  "Flat Chested":"Poitrine plate","Pigtails":"Couettes",
  "Cartoon":"Cartoon","Alt":"Alternative","E-girl":"E-girl","Emo":"Emo","Gyaru":"Gyaru","Kawaii":"Kawaii","Punk":"Punk","Tomboy":"Garçon manqué","Waifu":"Waifu",
  "Bad Girl":"Mauvaise fille","Brat":"Insolente","Caring":"Attentionnée","Clingy":"Collante","Experienced":"Expérimentée","Horny":"Excitée","Innocent":"Innocente",
  "Jealous":"Jalouse","Loyal":"Fidèle","Mean":"Méchante","Nympho":"Nympho","Rebel":"Rebelle","Sadistic":"Sadique","Seductress":"Séductrice fatale","Submissive":"Soumise",
  "Sweet":"Douce","Temptress":"Tentatrice","Virgin":"Vierge",
  "Athletic":"Athlétique","BBW":"BBW","Big Ass":"Grosses fesses","Big Boobs":"Gros seins","Chubby":"Pulpeuse","Curvy":"Plantureuse","Fit":"En forme","Hourglass":"Sablier",
  "Muscle":"Muscles","Muscular":"Musclée","Pierced":"Piercings","Pregnant":"Enceinte","Size Difference":"Différence de taille","Slim":"Mince","Small Tits":"Petits seins",
  "Petite":"Menue","Tall":"Grande","Tattooed":"Tatouée","Thicc":"Formes généreuses","Pawg":"PAWG",
  "Black Hair":"Cheveux noirs","Blonde":"Blonde","Blue Hair":"Cheveux bleus","Brunette":"Brune","Long Hair":"Cheveux longs","Pink Hair":"Cheveux roses",
  "Purple Hair":"Cheveux violets","Redhead":"Rousse","Short Hair":"Cheveux courts","White Hair":"Cheveux blancs",
  "Arab":"Arabe","Asian":"Asiatique","Brazilian":"Brésilienne","British":"Britannique","Caucasian":"Caucasienne","Chinese":"Chinoise","Colombian":"Colombienne",
  "Ebony":"Ébène","European":"Européenne","Filipina":"Philippine","French":"Française","German":"Allemande","Indian":"Indienne","Italian":"Italienne",
  "Japanese":"Japonaise","Korean":"Coréenne","Latina":"Latina","Mexican":"Mexicaine","Middle Eastern":"Moyen-Orient","Mixed Race":"Métisse","Russian":"Russe",
  "Thai":"Thaïlandaise","Ukrainian":"Ukrainienne","Vietnamese":"Vietnamienne",
  "Barista":"Barista","Biker":"Motarde","Boss":"Patronne","Cam Girl":"Cam girl","Caregiver":"Aide-soignante","College Student":"Étudiante","Coworker":"Collègue",
  "Doctor":"Médecin","Flight Attendant":"Hôtesse de l'air","Gamer Girl":"Gameuse","Gym Trainer":"Coach sportive","Influencer":"Influenceuse","Jester":"Bouffonne",
  "Lawyer":"Avocate","Librarian":"Bibliothécaire","Maid":"Soubrette","Masseuse":"Masseuse","Model":"Mannequin","Nun":"Nonne","Nurse":"Infirmière",
  "Police Officer":"Policière","Professor":"Professeure","Secretary":"Secrétaire","Streamer":"Streameuse","Stripper":"Strip-teaseuse","Teacher":"Enseignante",
  "Waitress":"Serveuse","Yoga Instructor":"Prof de yoga",
  "Best Friend":"Meilleure amie","Boyfriend":"Petit ami","Bully":"Harceleuse","Cheating":"Infidélité","Cougar":"Cougar","Cousin":"Cousine","Daddy":"Daddy",
  "Ex-Girlfriend":"Ex","Forbidden":"Interdit","Friends w/ Benefits":"Sex friend","Girl Next Door":"Fille d'à côté","Granny":"Mamie","Husband":"Mari",
  "Neighbor":"Voisine","One Night Stand":"Coup d'un soir","Roommate":"Colocataire","Slow Burn":"Romance lente","Stepbrother":"Demi-frère","Stepdad":"Beau-père",
  "Stepmom":"Belle-mère","Stepsister":"Demi-sœur","Stranger":"Inconnue","Sugar Baby":"Sugar baby","Twins":"Jumelles","Wife":"Épouse",
  "Alien":"Extraterrestre","Android":"Androïde","Angel":"Ange","Bear":"Ours","Bunny Girl":"Bunny girl","Catgirl":"Fille-chat","Demon":"Démone","Elf":"Elfe",
  "Fairy":"Fée","Fox Girl":"Fille-renard","Furry":"Furry","Goddess":"Déesse","Mermaid":"Sirène","Monster Girl":"Fille-monstre","Princess":"Princesse",
  "Queen":"Reine","Robot":"Robot","Sage":"Sage","Succubus":"Succube","Vampire":"Vampire","Witch":"Sorcière",
  "Female":"Femme","Male":"Homme","Bisexual":"Bisexuelle","Gay":"Gay","Lesbian":"Lesbienne","Trans":"Trans",
  "Bondage":"Bondage","Breast Expansion":"Expansion mammaire","Chastity":"Chasteté","Cuckold":"Candaulisme","Exhibitionism":"Exhibitionnisme","Feet":"Pieds",
  "Hypno":"Hypnose","Pet Play":"Pet play","Public":"En public","Seduction":"Séduction","Threesome":"Plan à trois","Voyeur":"Voyeurisme",
  "Comedy":"Humour","Game":"Jeu","Group Chat":"Chat de groupe","Sexting":"Sexting"
},
es: {
  "Young":"Joven","Teen(18+)":"Teen(18+)",
  "Flat Chested":"Pecho plano","Pigtails":"Coletas",
  "Alt":"Alternativa","Tomboy":"Marimacho","Bad Girl":"Chica mala","Brat":"Malcriada","Caring":"Cariñosa","Clingy":"Pegajosa","Experienced":"Experimentada",
  "Horny":"Cachonda","Innocent":"Inocente","Jealous":"Celosa","Loyal":"Leal","Mean":"Mala","Nympho":"Ninfómana","Rebel":"Rebelde","Sadistic":"Sádica",
  "Seductress":"Seductora","Submissive":"Sumisa","Sweet":"Dulce","Temptress":"Tentadora","Virgin":"Virgen",
  "Athletic":"Atlética","Big Ass":"Culo grande","Big Boobs":"Pechos grandes","Chubby":"Rellenita","Curvy":"Curvilínea","Fit":"En forma","Hourglass":"Reloj de arena",
  "Muscle":"Músculos","Muscular":"Musculosa","Pierced":"Piercings","Pregnant":"Embarazada","Size Difference":"Diferencia de tamaño","Slim":"Delgada",
  "Small Tits":"Pechos pequeños","Petite":"Menuda","Tall":"Alta","Tattooed":"Tatuada","Thicc":"Voluptuosa",
  "Black Hair":"Pelo negro","Blonde":"Rubia","Blue Hair":"Pelo azul","Brunette":"Morena","Long Hair":"Pelo largo","Pink Hair":"Pelo rosa","Purple Hair":"Pelo morado",
  "Redhead":"Pelirroja","Short Hair":"Pelo corto","White Hair":"Pelo blanco",
  "Arab":"Árabe","Asian":"Asiática","Brazilian":"Brasileña","British":"Británica","Caucasian":"Caucásica","Chinese":"China","Colombian":"Colombiana","Ebony":"Ébano",
  "European":"Europea","Filipina":"Filipina","French":"Francesa","German":"Alemana","Indian":"India","Italian":"Italiana","Japanese":"Japonesa","Korean":"Coreana",
  "Mexican":"Mexicana","Middle Eastern":"Oriente Medio","Mixed Race":"Mestiza","Russian":"Rusa","Thai":"Tailandesa","Ukrainian":"Ucraniana","Vietnamese":"Vietnamita",
  "Biker":"Motera","Boss":"Jefa","Caregiver":"Cuidadora","College Student":"Universitaria","Coworker":"Compañera de trabajo","Doctor":"Doctora",
  "Flight Attendant":"Azafata","Gamer Girl":"Chica gamer","Gym Trainer":"Entrenadora","Influencer":"Influencer","Jester":"Bufona","Lawyer":"Abogada",
  "Librarian":"Bibliotecaria","Maid":"Criada","Masseuse":"Masajista","Model":"Modelo","Nun":"Monja","Nurse":"Enfermera","Police Officer":"Policía",
  "Professor":"Profesora universitaria","Secretary":"Secretaria","Stripper":"Stripper","Teacher":"Profesora","Waitress":"Camarera","Yoga Instructor":"Profesora de yoga",
  "Best Friend":"Mejor amiga","Boyfriend":"Novio","Bully":"Abusona","Cheating":"Infidelidad","Cousin":"Prima","Ex-Girlfriend":"Ex novia","Forbidden":"Prohibido",
  "Friends w/ Benefits":"Amigos con derechos","Girl Next Door":"Chica de al lado","Granny":"Abuela","Husband":"Marido","Neighbor":"Vecina",
  "One Night Stand":"Rollo de una noche","Roommate":"Compañera de piso","Slow Burn":"Romance lento","Stepbrother":"Hermanastro","Stepdad":"Padrastro",
  "Stepmom":"Madrastra","Stepsister":"Hermanastra","Stranger":"Desconocida","Twins":"Gemelas","Wife":"Esposa",
  "Alien":"Alienígena","Android":"Androide","Angel":"Ángel","Bear":"Oso","Bunny Girl":"Chica conejita","Catgirl":"Chica gato","Demon":"Demonio","Elf":"Elfa",
  "Fairy":"Hada","Fox Girl":"Chica zorro","Goddess":"Diosa","Mermaid":"Sirena","Monster Girl":"Chica monstruo","Princess":"Princesa","Queen":"Reina",
  "Sage":"Sabia","Succubus":"Súcubo","Vampire":"Vampira","Witch":"Bruja",
  "Female":"Mujer","Male":"Hombre","Bisexual":"Bisexual","Lesbian":"Lesbiana",
  "Breast Expansion":"Expansión de pecho","Chastity":"Castidad","Exhibitionism":"Exhibicionismo","Feet":"Pies","Hypno":"Hipnosis","Public":"En público",
  "Seduction":"Seducción","Threesome":"Trío","Voyeur":"Voyeurismo","Comedy":"Comedia","Game":"Juego","Group Chat":"Chat grupal"
},
de: {
  "Young":"Jung","Teen(18+)":"Teen(18+)",
  "Flat Chested":"Flachbrüstig","Pigtails":"Zöpfe",
  "Alt":"Alternativ","Bad Girl":"Böses Mädchen","Brat":"Göre","Caring":"Fürsorglich","Clingy":"Anhänglich","Experienced":"Erfahren","Horny":"Geil",
  "Innocent":"Unschuldig","Jealous":"Eifersüchtig","Loyal":"Treu","Mean":"Gemein","Nympho":"Nymphomanin","Rebel":"Rebellin","Sadistic":"Sadistisch",
  "Seductress":"Verführerin","Submissive":"Devot","Sweet":"Süß","Temptress":"Versucherin","Virgin":"Jungfrau",
  "Athletic":"Athletisch","Big Ass":"Großer Hintern","Big Boobs":"Große Brüste","Chubby":"Mollig","Curvy":"Kurvig","Fit":"Fit","Hourglass":"Sanduhrfigur",
  "Muscle":"Muskeln","Muscular":"Muskulös","Pierced":"Gepierct","Pregnant":"Schwanger","Size Difference":"Größenunterschied","Slim":"Schlank",
  "Small Tits":"Kleine Brüste","Petite":"Zierlich","Tall":"Groß","Tattooed":"Tätowiert","Thicc":"Üppig",
  "Black Hair":"Schwarze Haare","Blonde":"Blond","Blue Hair":"Blaue Haare","Brunette":"Brünett","Long Hair":"Lange Haare","Pink Hair":"Pinke Haare",
  "Purple Hair":"Lila Haare","Redhead":"Rothaarig","Short Hair":"Kurze Haare","White Hair":"Weiße Haare",
  "Arab":"Arabisch","Asian":"Asiatisch","Brazilian":"Brasilianisch","British":"Britisch","Caucasian":"Kaukasisch","Chinese":"Chinesisch","Colombian":"Kolumbianisch",
  "European":"Europäisch","Filipina":"Philippinisch","French":"Französisch","German":"Deutsch","Indian":"Indisch","Italian":"Italienisch","Japanese":"Japanisch",
  "Korean":"Koreanisch","Mexican":"Mexikanisch","Middle Eastern":"Nahost","Mixed Race":"Gemischt","Russian":"Russisch","Thai":"Thailändisch",
  "Ukrainian":"Ukrainisch","Vietnamese":"Vietnamesisch",
  "Biker":"Bikerin","Boss":"Chefin","Caregiver":"Pflegerin","College Student":"Studentin","Coworker":"Kollegin","Doctor":"Ärztin","Flight Attendant":"Flugbegleiterin",
  "Gamer Girl":"Gamerin","Gym Trainer":"Fitnesstrainerin","Influencer":"Influencerin","Jester":"Närrin","Lawyer":"Anwältin","Librarian":"Bibliothekarin",
  "Maid":"Dienstmädchen","Masseuse":"Masseurin","Nun":"Nonne","Nurse":"Krankenschwester","Police Officer":"Polizistin","Professor":"Professorin",
  "Secretary":"Sekretärin","Streamer":"Streamerin","Stripper":"Stripperin","Teacher":"Lehrerin","Waitress":"Kellnerin","Yoga Instructor":"Yogalehrerin",
  "Best Friend":"Beste Freundin","Boyfriend":"Freund","Bully":"Tyrannin","Cheating":"Fremdgehen","Cousin":"Cousine","Ex-Girlfriend":"Ex-Freundin",
  "Forbidden":"Verboten","Friends w/ Benefits":"Freundschaft plus","Girl Next Door":"Mädchen von nebenan","Granny":"Oma","Husband":"Ehemann",
  "Neighbor":"Nachbarin","One Night Stand":"One-Night-Stand","Roommate":"Mitbewohnerin","Slow Burn":"Langsame Romanze","Stepbrother":"Stiefbruder",
  "Stepdad":"Stiefvater","Stepmom":"Stiefmutter","Stepsister":"Stiefschwester","Stranger":"Fremde","Twins":"Zwillinge","Wife":"Ehefrau",
  "Angel":"Engel","Bear":"Bär","Bunny Girl":"Bunny-Girl","Catgirl":"Katzenmädchen","Demon":"Dämonin","Elf":"Elfe","Fairy":"Fee","Fox Girl":"Fuchsmädchen",
  "Goddess":"Göttin","Mermaid":"Meerjungfrau","Monster Girl":"Monstermädchen","Princess":"Prinzessin","Queen":"Königin","Sage":"Weise","Succubus":"Sukkubus",
  "Vampire":"Vampirin","Witch":"Hexe",
  "Female":"Weiblich","Male":"Männlich","Lesbian":"Lesbisch","Bisexual":"Bisexuell","Gay":"Schwul",
  "Breast Expansion":"Brustwachstum","Chastity":"Keuschheit","Exhibitionism":"Exhibitionismus","Feet":"Füße","Hypno":"Hypnose","Public":"Öffentlich",
  "Seduction":"Verführung","Threesome":"Dreier","Voyeur":"Voyeurismus","Comedy":"Comedy","Game":"Spiel","Group Chat":"Gruppenchat"
},
pt: {
  "Young":"Jovem","Teen(18+)":"Teen(18+)",
  "Flat Chested":"Peito reto","Pigtails":"Maria-chiquinha",
  "Alt":"Alternativa","Tomboy":"Moleca","Bad Girl":"Garota má","Brat":"Mimada","Caring":"Carinhosa","Clingy":"Grudenta","Experienced":"Experiente",
  "Horny":"Excitada","Innocent":"Inocente","Jealous":"Ciumenta","Loyal":"Leal","Mean":"Malvada","Nympho":"Ninfomaníaca","Rebel":"Rebelde","Sadistic":"Sádica",
  "Seductress":"Sedutora","Submissive":"Submissa","Sweet":"Doce","Temptress":"Tentadora","Virgin":"Virgem",
  "Athletic":"Atlética","Big Ass":"Bunda grande","Big Boobs":"Seios grandes","Chubby":"Gordinha","Curvy":"Curvilínea","Fit":"Em forma","Hourglass":"Ampulheta",
  "Muscle":"Músculos","Muscular":"Musculosa","Pierced":"Piercings","Pregnant":"Grávida","Size Difference":"Diferença de tamanho","Slim":"Magra",
  "Small Tits":"Seios pequenos","Petite":"Mignon","Tall":"Alta","Tattooed":"Tatuada","Thicc":"Cheinha",
  "Black Hair":"Cabelo preto","Blonde":"Loira","Blue Hair":"Cabelo azul","Brunette":"Morena","Long Hair":"Cabelo longo","Pink Hair":"Cabelo rosa",
  "Purple Hair":"Cabelo roxo","Redhead":"Ruiva","Short Hair":"Cabelo curto","White Hair":"Cabelo branco",
  "Arab":"Árabe","Asian":"Asiática","Brazilian":"Brasileira","British":"Britânica","Caucasian":"Caucasiana","Chinese":"Chinesa","Colombian":"Colombiana","Ebony":"Negra",
  "European":"Europeia","Filipina":"Filipina","French":"Francesa","German":"Alemã","Indian":"Indiana","Italian":"Italiana","Japanese":"Japonesa","Korean":"Coreana",
  "Mexican":"Mexicana","Middle Eastern":"Oriente Médio","Mixed Race":"Mestiça","Russian":"Russa","Thai":"Tailandesa","Ukrainian":"Ucraniana","Vietnamese":"Vietnamita",
  "Biker":"Motoqueira","Boss":"Chefe","Caregiver":"Cuidadora","College Student":"Universitária","Coworker":"Colega de trabalho","Doctor":"Médica",
  "Flight Attendant":"Comissária de bordo","Gamer Girl":"Garota gamer","Gym Trainer":"Personal trainer","Jester":"Bobo da corte","Lawyer":"Advogada",
  "Librarian":"Bibliotecária","Maid":"Empregada","Masseuse":"Massagista","Model":"Modelo","Nun":"Freira","Nurse":"Enfermeira","Police Officer":"Policial",
  "Professor":"Professora universitária","Secretary":"Secretária","Teacher":"Professora","Waitress":"Garçonete","Yoga Instructor":"Professora de ioga",
  "Best Friend":"Melhor amiga","Boyfriend":"Namorado","Bully":"Valentona","Cheating":"Traição","Cousin":"Prima","Ex-Girlfriend":"Ex-namorada","Forbidden":"Proibido",
  "Friends w/ Benefits":"Amizade colorida","Girl Next Door":"Garota da porta ao lado","Granny":"Vovó","Husband":"Marido","Neighbor":"Vizinha",
  "One Night Stand":"Caso de uma noite","Roommate":"Colega de quarto","Slow Burn":"Romance lento","Stepbrother":"Meio-irmão","Stepdad":"Padrasto",
  "Stepmom":"Madrasta","Stepsister":"Meia-irmã","Stranger":"Desconhecida","Twins":"Gêmeas","Wife":"Esposa",
  "Alien":"Alienígena","Android":"Androide","Angel":"Anjo","Bear":"Urso","Bunny Girl":"Coelhinha","Catgirl":"Garota-gato","Demon":"Demônia","Elf":"Elfa",
  "Fairy":"Fada","Fox Girl":"Garota-raposa","Goddess":"Deusa","Mermaid":"Sereia","Monster Girl":"Garota-monstro","Princess":"Princesa","Queen":"Rainha",
  "Sage":"Sábia","Succubus":"Súcubo","Vampire":"Vampira","Witch":"Bruxa",
  "Female":"Mulher","Male":"Homem","Bisexual":"Bissexual","Lesbian":"Lésbica",
  "Breast Expansion":"Expansão de seios","Chastity":"Castidade","Exhibitionism":"Exibicionismo","Feet":"Pés","Hypno":"Hipnose","Public":"Em público",
  "Seduction":"Sedução","Threesome":"Ménage","Voyeur":"Voyeurismo","Comedy":"Comédia","Game":"Jogo","Group Chat":"Chat em grupo"
},
hi: {
  "Young":"युवती","Teen(18+)":"Teen(18+)",
  "Flat Chested":"सपाट छाती","Pigtails":"दो चोटियाँ",
  "2.5D":"2.5D","Cartoon":"कार्टून","Hentai":"हेनताई","Alt":"ऑल्ट","E-girl":"ई-गर्ल","Emo":"इमो","Gyaru":"ग्यारू","Kawaii":"कवाई","Punk":"पंक","Tomboy":"टॉमबॉय","Waifu":"वाइफ़ु",
  "Bad Girl":"बैड गर्ल","Brat":"नखरेबाज़","Caring":"परवाह करने वाली","Clingy":"चिपकू","Dandere":"डांडेरे","Experienced":"अनुभवी","Horny":"उत्तेजित",
  "Innocent":"मासूम","Jealous":"जलनखोर","Kuudere":"कूडेरे","Loyal":"वफ़ादार","Mean":"रूखी","Nympho":"निम्फ़ो","Rebel":"बागी","Sadistic":"सैडिस्टिक",
  "Seductress":"मोहिनी","Submissive":"सबमिसिव","Sweet":"मीठी","Temptress":"ललचाने वाली","Tsundere":"त्सुंडेरे","Virgin":"कुंवारी","Yandere":"यांडेरे",
  "Athletic":"एथलेटिक","BBW":"BBW","Big Ass":"बड़े हिप्स","Big Boobs":"बड़े ब्रेस्ट","Chubby":"गोल-मटोल","Curvy":"कर्वी","Fit":"फ़िट","Hourglass":"आवरग्लास फ़िगर",
  "Muscle":"मसल्स","Muscular":"मस्कुलर","Pawg":"PAWG","Petite":"पेटीट","Pierced":"पियर्सिंग","Pregnant":"गर्भवती","Size Difference":"साइज़ का अंतर","Slim":"पतली",
  "Small Tits":"छोटे ब्रेस्ट","Tall":"लंबी","Tattooed":"टैटू वाली","Thicc":"भरी-पूरी",
  "Black Hair":"काले बाल","Blonde":"सुनहरे बाल","Blue Hair":"नीले बाल","Brunette":"भूरे बाल","Long Hair":"लंबे बाल","Pink Hair":"गुलाबी बाल","Purple Hair":"बैंगनी बाल",
  "Redhead":"लाल बाल","Short Hair":"छोटे बाल","White Hair":"सफ़ेद बाल",
  "Arab":"अरब","Asian":"एशियाई","Brazilian":"ब्राज़ीलियाई","British":"ब्रिटिश","Caucasian":"कॉकेशियन","Chinese":"चीनी","Colombian":"कोलंबियाई","Ebony":"अश्वेत",
  "European":"यूरोपीय","Filipina":"फ़िलिपीनी","French":"फ़्रेंच","German":"जर्मन","Indian":"भारतीय","Italian":"इतालवी","Japanese":"जापानी","Korean":"कोरियाई",
  "Latina":"लैटिना","Mexican":"मैक्सिकन","Middle Eastern":"मध्य-पूर्वी","Mixed Race":"मिश्रित नस्ल","Russian":"रूसी","Thai":"थाई","Ukrainian":"यूक्रेनी","Vietnamese":"वियतनामी",
  "Barista":"बरिस्ता","Biker":"बाइकर","Boss":"बॉस","Cam Girl":"कैम गर्ल","Caregiver":"देखभाल करने वाली","CEO":"CEO","College Student":"कॉलेज स्टूडेंट","Coworker":"सहकर्मी",
  "Doctor":"डॉक्टर","Escort":"एस्कॉर्ट","Flight Attendant":"एयर होस्टेस","Gamer Girl":"गेमर गर्ल","Gym Trainer":"जिम ट्रेनर","Influencer":"इन्फ़्लुएंसर","Jester":"विदूषक",
  "K-pop":"के-पॉप","Lawyer":"वकील","Librarian":"लाइब्रेरियन","Maid":"मेड","Masseuse":"मसाज करने वाली","Model":"मॉडल","Nun":"नन","Nurse":"नर्स","OnlyFans":"OnlyFans",
  "Police Officer":"पुलिस अफ़सर","Professor":"प्रोफ़ेसर","Secretary":"सेक्रेटरी","Streamer":"स्ट्रीमर","Stripper":"स्ट्रिपर","Teacher":"टीचर","VTuber":"वीट्यूबर",
  "Waitress":"वेट्रेस","Yoga Instructor":"योग टीचर",
  "Best Friend":"बेस्ट फ़्रेंड","Boyfriend":"बॉयफ़्रेंड","Bully":"दबंग","Cheating":"बेवफ़ाई","Cougar":"कूगर","Cousin":"कज़िन","Daddy":"डैडी","DILF":"DILF",
  "Ex-Girlfriend":"एक्स-गर्लफ्रेंड","Forbidden":"वर्जित","Friends w/ Benefits":"फ़्रेंड्स विद बेनिफ़िट्स","Girl Next Door":"पड़ोस की लड़की","Granny":"दादी",
  "Husband":"पति","MILF":"MILF","Neighbor":"पड़ोसन","One Night Stand":"वन नाइट स्टैंड","Roommate":"रूममेट","Slow Burn":"धीमा रोमांस","Stepbrother":"सौतेला भाई",
  "Stepdad":"सौतेले पिता","Stepmom":"सौतेली माँ","Stepsister":"सौतेली बहन","Stranger":"अजनबी","Sugar Baby":"शुगर बेबी","Twins":"जुड़वाँ","Wife":"पत्नी",
  "Alien":"एलियन","Android":"एंड्रॉइड","Angel":"परी-दूत","Bear":"भालू","Bunny Girl":"बनी गर्ल","Catgirl":"कैटगर्ल","Demon":"दानवी","Elf":"एल्फ़","Fairy":"परी",
  "Fox Girl":"फ़ॉक्स गर्ल","Furry":"फ़री","Goddess":"देवी","Mermaid":"जलपरी","Monster Girl":"मॉन्स्टर गर्ल","Princess":"राजकुमारी","Queen":"रानी","Robot":"रोबोट",
  "Sage":"ऋषि","Succubus":"सक्यूबस","Vampire":"वैम्पायर","Witch":"चुड़ैल",
  "Female":"महिला","Male":"पुरुष","Bisexual":"बाइसेक्शुअल","BL":"BL","Femboy":"फ़ेमबॉय","Futa":"फ़ुटा","Gay":"गे","Lesbian":"लेस्बियन","Sissy":"सिसी","Trans":"ट्रांस","Twink":"ट्विंक",
  "BDSM":"BDSM","Bondage":"बॉन्डेज","Breast Expansion":"ब्रेस्ट एक्सपैंशन","Chastity":"चैस्टिटी","Cuckold":"कुकोल्ड","Exhibitionism":"एग्ज़िबिशनिज़्म","Feet":"पैर",
  "Femdom":"फ़ेमडम","Hypno":"हिप्नो","JOI":"JOI","Netorare":"नेटोरारे","Pet Play":"पेट प्ले","POV":"POV","Public":"सार्वजनिक","Seduction":"मोह",
  "Threesome":"थ्रीसम","Vore":"वोर","Voyeur":"वॉयरिज़्म",
  "Comedy":"कॉमेडी","Game":"गेम","Group Chat":"ग्रुप चैट","Sexting":"सेक्सटिंग","VR":"VR"
}
};
for (const l in TAG_T) for (const k in TAG_T[l]) if (!I18N[l].t[k]) I18N[l].t[k] = TAG_T[l][k];

const BTN_M = { en:"Chat with him", fr:"Parler avec lui", es:"Habla con él", de:"Mit ihm chatten", pt:"Converse com ele", hi:"उससे बात करें" };
for (const l in BTN_M) I18N[l].ui.card_btn_m = BTN_M[l];

const AUTO_BIO = {
  en:"{name}{age} is an AI companion on {p} — {tags}. Open the chat and she answers in seconds.",
  fr:"{name}{age} est une compagne IA sur {p} — {tags}. Ouvre le chat, elle te répond en quelques secondes.",
  es:"{name}{age} es una compañera IA en {p} — {tags}. Abre el chat y te responde en segundos.",
  de:"{name}{age} ist eine KI-Begleiterin auf {p} — {tags}. Öffne den Chat, sie antwortet in Sekunden.",
  pt:"{name}{age} é uma companheira IA no {p} — {tags}. Abra o chat e ela responde em segundos.",
  hi:"{name}{age} {p} पर एक AI साथी है — {tags}। चैट खोलें, वह कुछ ही सेकंड में जवाब देगी।"
};
for (const l in AUTO_BIO) I18N[l].ui.auto_bio = AUTO_BIO[l];

const FILTER_UI = {
  en:{ grp_age:"Age", grp_app:"App", f_more:"More filters +", f_less:"Fewer filters −" },
  fr:{ grp_age:"Âge", grp_app:"Appli", f_more:"Plus de filtres +", f_less:"Moins de filtres −" },
  es:{ grp_age:"Edad", grp_app:"App", f_more:"Más filtros +", f_less:"Menos filtros −" },
  de:{ grp_age:"Alter", grp_app:"App", f_more:"Mehr Filter +", f_less:"Weniger Filter −" },
  pt:{ grp_age:"Idade", grp_app:"App", f_more:"Mais filtros +", f_less:"Menos filtros −" },
  hi:{ grp_age:"उम्र", grp_app:"ऐप", f_more:"और फ़िल्टर +", f_less:"कम फ़िल्टर −" }
};
for (const l in FILTER_UI) Object.assign(I18N[l].ui, FILTER_UI[l]);

/* Model pages (/model/<id>) */
const MODEL_UI = {
en:{ m_glance:"At a glance", m_platform:"Platform", m_not_set:"Not specified", m_features:"Features on {p}",
  m_start_t:"How to start chatting with {name}", m_s1:"Click “Chat with {name}”: the chat opens directly on {p}.",
  m_s2:"Create a free account on {p} (an e-mail is enough) and confirm you are 18 or over.", m_s3:"Say hello: {name} already knows the scenario, the conversation starts right away.",
  m_about:"About {p}", m_see_pl:"Compare all platforms →", m_faq_t:"Questions about {name}",
  fq1:"Is {name} a real person?", fa1:"No. {name} is a fictional AI character, depicted as an adult (18+). Her replies are generated by artificial intelligence on {p}.",
  fa1_m:"No. {name} is a fictional AI character, depicted as an adult (18+). His replies are generated by artificial intelligence on {p}.",
  fq2:"Where can I chat with {name}?", fa2:"{name} is available on {p}. The button on this page takes you straight to the character's chat.",
  fq3:"Is chatting with {name} free?", fa3:"{p} can usually be tried for free with limits; images, voice or unlimited messages generally require a subscription or credits. Our Data page lists what we have verified.",
  fq4:"Can {name} send pictures or voice messages?", fa4:"That depends on {p}'s features — images: {img}, voice messages: {voice}. Check on the platform before subscribing.",
  m_more_tag:"More {tag} models →", m_fiction:"Fictional AI character · 18+ · Affiliate link" },
fr:{ m_glance:"En bref", m_platform:"Plateforme", m_not_set:"Non précisé", m_features:"Fonctionnalités sur {p}",
  m_start_t:"Comment commencer à discuter avec {name}", m_s1:"Clique sur « Parler avec {name} » : le chat s'ouvre directement sur {p}.",
  m_s2:"Crée un compte gratuit sur {p} (un e-mail suffit) et confirme que tu as 18 ans ou plus.", m_s3:"Dis bonjour : {name} connaît déjà le scénario, la conversation démarre tout de suite.",
  m_about:"À propos de {p}", m_see_pl:"Comparer toutes les plateformes →", m_faq_t:"Questions sur {name}",
  fq1:"{name} est-elle une vraie personne ?", fa1:"Non. {name} est un personnage IA fictif, représenté comme majeur (18+). Ses réponses sont générées par intelligence artificielle sur {p}.",
  fa1_m:"Non. {name} est un personnage IA fictif, représenté comme majeur (18+). Ses réponses sont générées par intelligence artificielle sur {p}.",
  fq2:"Où discuter avec {name} ?", fa2:"{name} est disponible sur {p}. Le bouton de cette page t'emmène directement dans le chat du personnage.",
  fq3:"Discuter avec {name} est-il gratuit ?", fa3:"{p} peut en général être essayé gratuitement avec des limites ; les images, la voix ou les messages illimités nécessitent souvent un abonnement ou des crédits. Notre page Données indique ce que nous avons vérifié.",
  fq4:"{name} peut-elle envoyer des photos ou des messages vocaux ?", fa4:"Cela dépend des fonctionnalités de {p} — images : {img}, messages vocaux : {voice}. Vérifie sur la plateforme avant de t'abonner.",
  m_more_tag:"Plus de modèles {tag} →", m_fiction:"Personnage IA fictif · 18+ · Lien affilié" },
es:{ m_glance:"En resumen", m_platform:"Plataforma", m_not_set:"No indicado", m_features:"Funciones en {p}",
  m_start_t:"Cómo empezar a chatear con {name}", m_s1:"Pulsa «Habla con {name}»: el chat se abre directamente en {p}.",
  m_s2:"Crea una cuenta gratuita en {p} (basta con un email) y confirma que tienes 18 años o más.", m_s3:"Saluda: {name} ya conoce el escenario, la conversación empieza enseguida.",
  m_about:"Sobre {p}", m_see_pl:"Comparar todas las plataformas →", m_faq_t:"Preguntas sobre {name}",
  fq1:"¿{name} es una persona real?", fa1:"No. {name} es un personaje de IA ficticio, representado como adulto (18+). Sus respuestas las genera una inteligencia artificial en {p}.",
  fa1_m:"No. {name} es un personaje de IA ficticio, representado como adulto (18+). Sus respuestas las genera una inteligencia artificial en {p}.",
  fq2:"¿Dónde puedo chatear con {name}?", fa2:"{name} está disponible en {p}. El botón de esta página te lleva directamente al chat del personaje.",
  fq3:"¿Es gratis chatear con {name}?", fa3:"{p} suele poder probarse gratis con límites; imágenes, voz o mensajes ilimitados suelen requerir suscripción o créditos. Nuestra página de Datos indica lo que hemos verificado.",
  fq4:"¿{name} puede enviar fotos o mensajes de voz?", fa4:"Depende de las funciones de {p} — imágenes: {img}, mensajes de voz: {voice}. Compruébalo en la plataforma antes de suscribirte.",
  m_more_tag:"Más modelos {tag} →", m_fiction:"Personaje de IA ficticio · 18+ · Enlace de afiliado" },
de:{ m_glance:"Auf einen Blick", m_platform:"Plattform", m_not_set:"Nicht angegeben", m_features:"Funktionen auf {p}",
  m_start_t:"So startest du den Chat mit {name}", m_s1:"Klicke auf „Mit {name} chatten“: Der Chat öffnet sich direkt auf {p}.",
  m_s2:"Erstelle ein kostenloses Konto auf {p} (eine E-Mail genügt) und bestätige, dass du mindestens 18 bist.", m_s3:"Sag hallo: {name} kennt das Szenario bereits, das Gespräch beginnt sofort.",
  m_about:"Über {p}", m_see_pl:"Alle Plattformen vergleichen →", m_faq_t:"Fragen zu {name}",
  fq1:"Ist {name} eine echte Person?", fa1:"Nein. {name} ist ein fiktiver KI-Charakter und wird als volljährig (18+) dargestellt. Die Antworten erzeugt eine künstliche Intelligenz auf {p}.",
  fa1_m:"Nein. {name} ist ein fiktiver KI-Charakter und wird als volljährig (18+) dargestellt. Die Antworten erzeugt eine künstliche Intelligenz auf {p}.",
  fq2:"Wo kann ich mit {name} chatten?", fa2:"{name} ist auf {p} verfügbar. Der Button auf dieser Seite führt dich direkt in den Chat.",
  fq3:"Ist der Chat mit {name} kostenlos?", fa3:"{p} lässt sich meist mit Einschränkungen gratis testen; Bilder, Sprache oder unbegrenzte Nachrichten erfordern meist ein Abo oder Credits. Unsere Datenseite zeigt, was wir geprüft haben.",
  fq4:"Kann {name} Fotos oder Sprachnachrichten schicken?", fa4:"Das hängt von den Funktionen von {p} ab — Bilder: {img}, Sprachnachrichten: {voice}. Prüfe es vor dem Abo auf der Plattform.",
  m_more_tag:"Mehr {tag}-Modelle →", m_fiction:"Fiktiver KI-Charakter · 18+ · Affiliate-Link" },
pt:{ m_glance:"Resumo", m_platform:"Plataforma", m_not_set:"Não informado", m_features:"Recursos no {p}",
  m_start_t:"Como começar a conversar com {name}", m_s1:"Clique em “Converse com {name}”: o chat abre direto no {p}.",
  m_s2:"Crie uma conta grátis no {p} (basta um e-mail) e confirme que tem 18 anos ou mais.", m_s3:"Diga oi: {name} já conhece o cenário, a conversa começa na hora.",
  m_about:"Sobre o {p}", m_see_pl:"Comparar todas as plataformas →", m_faq_t:"Perguntas sobre {name}",
  fq1:"{name} é uma pessoa real?", fa1:"Não. {name} é uma personagem de IA fictícia, representada como adulta (18+). As respostas são geradas por inteligência artificial no {p}.",
  fa1_m:"Não. {name} é um personagem de IA fictício, representado como adulto (18+). As respostas são geradas por inteligência artificial no {p}.",
  fq2:"Onde posso conversar com {name}?", fa2:"{name} está disponível no {p}. O botão desta página leva direto ao chat do personagem.",
  fq3:"Conversar com {name} é grátis?", fa3:"Em geral, o {p} pode ser testado grátis com limites; imagens, voz ou mensagens ilimitadas costumam exigir assinatura ou créditos. Nossa página de Dados mostra o que verificamos.",
  fq4:"{name} pode enviar fotos ou mensagens de voz?", fa4:"Depende dos recursos do {p} — imagens: {img}, mensagens de voz: {voice}. Confira na plataforma antes de assinar.",
  m_more_tag:"Mais modelos {tag} →", m_fiction:"Personagem de IA fictício · 18+ · Link de afiliado" },
hi:{ m_glance:"एक नज़र में", m_platform:"प्लेटफ़ॉर्म", m_not_set:"नहीं बताया गया", m_features:"{p} पर फ़ीचर्स",
  m_start_t:"{name} से बात कैसे शुरू करें", m_s1:"“{name} से बात करें” पर क्लिक करें: चैट सीधे {p} पर खुलेगी।",
  m_s2:"{p} पर मुफ़्त अकाउंट बनाएँ (सिर्फ़ ईमेल काफ़ी है) और पुष्टि करें कि आपकी उम्र 18 या उससे अधिक है।", m_s3:"हैलो कहें: {name} कहानी पहले से जानती है, बातचीत तुरंत शुरू हो जाएगी।",
  m_about:"{p} के बारे में", m_see_pl:"सभी प्लेटफ़ॉर्म की तुलना करें →", m_faq_t:"{name} के बारे में सवाल",
  fq1:"क्या {name} असली इंसान है?", fa1:"नहीं। {name} एक काल्पनिक AI किरदार है, जिसे वयस्क (18+) दिखाया गया है। जवाब {p} पर आर्टिफ़िशियल इंटेलिजेंस बनाती है।",
  fa1_m:"नहीं। {name} एक काल्पनिक AI किरदार है, जिसे वयस्क (18+) दिखाया गया है। जवाब {p} पर आर्टिफ़िशियल इंटेलिजेंस बनाती है।",
  fq2:"{name} से कहाँ बात कर सकते हैं?", fa2:"{name} {p} पर उपलब्ध है। इस पेज का बटन आपको सीधे किरदार की चैट में ले जाता है।",
  fq3:"क्या {name} से बात करना मुफ़्त है?", fa3:"{p} आमतौर पर सीमाओं के साथ मुफ़्त आज़माया जा सकता है; तस्वीरें, वॉइस या अनलिमिटेड मैसेज के लिए अक्सर सब्सक्रिप्शन या क्रेडिट चाहिए। हमारे डेटा पेज पर जाँची गई जानकारी है।",
  fq4:"क्या {name} फ़ोटो या वॉइस मैसेज भेज सकती है?", fa4:"यह {p} के फ़ीचर्स पर निर्भर है — तस्वीरें: {img}, वॉइस मैसेज: {voice}। सब्सक्राइब करने से पहले प्लेटफ़ॉर्म पर जाँच लें।",
  m_more_tag:"और {tag} मॉडल →", m_fiction:"काल्पनिक AI किरदार · 18+ · एफ़िलिएट लिंक" }
};
for (const l in MODEL_UI) Object.assign(I18N[l].ui, MODEL_UI[l]);

/* Women / Men / Anime pages + Candy Creators */
const SECTION_UI = {
en:{ nav_all:"All", nav_women:"Women", nav_men:"Men", nav_anime:"Anime",
  hero_title_women:'AI <span class="grad">girlfriends</span>', hero_title_men:'AI <span class="grad">boyfriends</span>', hero_title_anime:'Anime <span class="grad">AI characters</span>',
  hero_sub_b:"{n} profiles. Filter by style, origin, personality… and start chatting in seconds.",
  meta_home_t_women:"AI Girlfriends – Realistic Female AI Characters", meta_home_d_women:"All realistic AI girlfriend profiles from the best companion platforms. Filter and chat in seconds. 18+ only.",
  meta_home_t_men:"AI Boyfriends – Male AI Characters", meta_home_d_men:"All AI boyfriend profiles from the best companion platforms. Filter and chat in seconds. 18+ only.",
  meta_home_t_anime:"Anime AI Characters – Anime Girlfriends & Waifus", meta_home_d_anime:"All anime AI characters from the best companion platforms. Filter and chat in seconds. 18+ only.",
  creator_bio:"Official AI twin of the creator {name}, available on {p}. Open the chat to talk with her AI version." },
fr:{ nav_all:"Tous", nav_women:"Femmes", nav_men:"Hommes", nav_anime:"Anime",
  hero_title_women:'Copines <span class="grad">IA</span>', hero_title_men:'Petits amis <span class="grad">IA</span>', hero_title_anime:'Personnages <span class="grad">anime IA</span>',
  hero_sub_b:"{n} profils. Filtre par style, origine, personnalité… et discute en quelques secondes.",
  meta_home_t_women:"Copines IA – Personnages IA féminins réalistes", meta_home_d_women:"Tous les profils de copines IA réalistes des meilleures plateformes. Filtrez et discutez en quelques secondes. 18+.",
  meta_home_t_men:"Petits amis IA – Personnages IA masculins", meta_home_d_men:"Tous les profils de petits amis IA des meilleures plateformes. Filtrez et discutez en quelques secondes. 18+.",
  meta_home_t_anime:"Personnages anime IA – Copines anime et waifus", meta_home_d_anime:"Tous les personnages anime IA des meilleures plateformes. Filtrez et discutez en quelques secondes. 18+.",
  creator_bio:"Jumelle IA officielle de la créatrice {name}, disponible sur {p}. Ouvre le chat pour discuter avec sa version IA." },
es:{ nav_all:"Todos", nav_women:"Mujeres", nav_men:"Hombres", nav_anime:"Anime",
  hero_title_women:'Novias <span class="grad">IA</span>', hero_title_men:'Novios <span class="grad">IA</span>', hero_title_anime:'Personajes <span class="grad">anime IA</span>',
  hero_sub_b:"{n} perfiles. Filtra por estilo, origen, personalidad… y chatea en segundos.",
  meta_home_t_women:"Novias IA – Personajes IA femeninos realistas", meta_home_d_women:"Todos los perfiles de novias IA realistas de las mejores plataformas. Filtra y chatea en segundos. Solo 18+.",
  meta_home_t_men:"Novios IA – Personajes IA masculinos", meta_home_d_men:"Todos los perfiles de novios IA de las mejores plataformas. Filtra y chatea en segundos. Solo 18+.",
  meta_home_t_anime:"Personajes anime IA – Novias anime y waifus", meta_home_d_anime:"Todos los personajes anime IA de las mejores plataformas. Filtra y chatea en segundos. Solo 18+.",
  creator_bio:"Gemela IA oficial de la creadora {name}, disponible en {p}. Abre el chat para hablar con su versión IA." },
de:{ nav_all:"Alle", nav_women:"Frauen", nav_men:"Männer", nav_anime:"Anime",
  hero_title_women:'KI-<span class="grad">Freundinnen</span>', hero_title_men:'KI-<span class="grad">Freunde</span>', hero_title_anime:'Anime-<span class="grad">KI-Charaktere</span>',
  hero_sub_b:"{n} Profile. Filtere nach Stil, Herkunft, Persönlichkeit… und chatte in Sekunden.",
  meta_home_t_women:"KI-Freundinnen – realistische weibliche KI-Charaktere", meta_home_d_women:"Alle realistischen KI-Freundin-Profile der besten Plattformen. Filtern und sofort chatten. Ab 18.",
  meta_home_t_men:"KI-Freunde – männliche KI-Charaktere", meta_home_d_men:"Alle KI-Freund-Profile der besten Plattformen. Filtern und sofort chatten. Ab 18.",
  meta_home_t_anime:"Anime-KI-Charaktere – Anime-Freundinnen und Waifus", meta_home_d_anime:"Alle Anime-KI-Charaktere der besten Plattformen. Filtern und sofort chatten. Ab 18.",
  creator_bio:"Offizieller KI-Zwilling der Creatorin {name}, verfügbar auf {p}. Öffne den Chat, um mit ihrer KI-Version zu sprechen." },
pt:{ nav_all:"Todos", nav_women:"Mulheres", nav_men:"Homens", nav_anime:"Anime",
  hero_title_women:'Namoradas <span class="grad">IA</span>', hero_title_men:'Namorados <span class="grad">IA</span>', hero_title_anime:'Personagens <span class="grad">anime IA</span>',
  hero_sub_b:"{n} perfis. Filtre por estilo, origem, personalidade… e converse em segundos.",
  meta_home_t_women:"Namoradas IA – Personagens IA femininas realistas", meta_home_d_women:"Todos os perfis de namoradas IA realistas das melhores plataformas. Filtre e converse em segundos. Somente 18+.",
  meta_home_t_men:"Namorados IA – Personagens IA masculinos", meta_home_d_men:"Todos os perfis de namorados IA das melhores plataformas. Filtre e converse em segundos. Somente 18+.",
  meta_home_t_anime:"Personagens anime IA – Namoradas anime e waifus", meta_home_d_anime:"Todos os personagens anime IA das melhores plataformas. Filtre e converse em segundos. Somente 18+.",
  creator_bio:"Gêmea IA oficial da criadora {name}, disponível no {p}. Abra o chat para conversar com a versão IA dela." },
hi:{ nav_all:"सभी", nav_women:"महिलाएँ", nav_men:"पुरुष", nav_anime:"एनीमे",
  hero_title_women:'AI <span class="grad">गर्लफ्रेंड</span>', hero_title_men:'AI <span class="grad">बॉयफ़्रेंड</span>', hero_title_anime:'एनीमे <span class="grad">AI किरदार</span>',
  hero_sub_b:"{n} प्रोफ़ाइल। स्टाइल, मूल, व्यक्तित्व के अनुसार फ़िल्टर करें… और तुरंत बात शुरू करें।",
  meta_home_t_women:"AI गर्लफ्रेंड – रियलिस्टिक महिला AI किरदार", meta_home_d_women:"बेहतरीन प्लेटफ़ॉर्म की सभी रियलिस्टिक AI गर्लफ्रेंड प्रोफ़ाइल। फ़िल्टर करें और तुरंत बात करें। केवल 18+।",
  meta_home_t_men:"AI बॉयफ़्रेंड – पुरुष AI किरदार", meta_home_d_men:"बेहतरीन प्लेटफ़ॉर्म की सभी AI बॉयफ़्रेंड प्रोफ़ाइल। फ़िल्टर करें और तुरंत बात करें। केवल 18+।",
  meta_home_t_anime:"एनीमे AI किरदार – एनीमे गर्लफ्रेंड और वाइफ़ु", meta_home_d_anime:"बेहतरीन प्लेटफ़ॉर्म के सभी एनीमे AI किरदार। फ़िल्टर करें और तुरंत बात करें। केवल 18+।",
  creator_bio:"क्रिएटर {name} का आधिकारिक AI ट्विन, {p} पर उपलब्ध। उसके AI वर्ज़न से बात करने के लिए चैट खोलें।" }
};
for (const l in SECTION_UI) Object.assign(I18N[l].ui, SECTION_UI[l]);
const CT = { fr:"Jumelle IA de créatrice", es:"Gemela IA de creadora", de:"KI-Zwilling einer Creatorin", pt:"Gêmea IA de criadora", hi:"क्रिएटर AI ट्विन" };
for (const l in CT) I18N[l].t["Creator Twin"] = CT[l];

;
/* Category article texts (tag pages). {tag} {n} {k} {d} {p} {top} {topn} {pls} {img} {grp} {site} = placeholders. */
const TAGPAGE_UI = {
en: {
  tp_by:"{n} characters · {k} platform(s) · Updated {d}",
  tp_intro:"Browse {n} {tag} AI characters available on {pls}. {grp} Click a photo to open the full profile, or “Chat” to start talking right away on the platform.",
  tp_order:"Characters with a photo and the newest additions are shown first.",
  tp_check_t:"5 things to check before you pay",
  tp_c1:"<strong>Free tier:</strong> how many messages you get before hitting a paywall.",
  tp_c2:"<strong>Images:</strong> whether the character can send generated pictures, and what they cost.",
  tp_c3:"<strong>Voice:</strong> voice messages or calls, if you want more than text.",
  tp_c4:"<strong>Memory:</strong> whether she remembers your story from one session to the next.",
  tp_c5:"<strong>Privacy & billing:</strong> discreet billing name and an easy way to delete your account.",
  tp_expect_t:"What to expect from {tag} characters",
  tp_e1_t:"Conversation quality", tp_e1:"Each {tag} character starts from a written scenario. The better platforms keep her personality consistent and remember details you share; weaker ones repeat themselves after a few dozen messages.",
  tp_e2_t:"Pictures and video", tp_e2:"Most platforms can generate pictures of the character on request, usually with credits. Video is rarer and costs more.",
  tp_e3_t:"Response speed", tp_e3:"Replies usually arrive in a few seconds. Free accounts can be slower at peak times.",
  tp_e4_t:"Cost", tp_e4:"Chatting is often free to try with limits. Unlimited messages, images and voice generally need a subscription or credits — see our Data page for what we checked.",
  tp_pl_t:"Where to find {tag} characters", tp_col_n:"{tag} characters", tp_go:"Visit",
  tp_rel_t:"Often combined with {tag}", tp_alt_t:"Other categories in “{g}”",
  tp_faq_t:"{tag} AI characters: FAQ",
  tq1:"What is a {tag} AI character?", ta1:"{grp} On {site}, every character is an AI persona depicted as an adult (18+).",
  tq2:"How many {tag} AI characters are there?", ta2:"We currently list {n} {tag} characters on {k} platform(s). New characters are added every week.",
  tq3:"Which platform has the most {tag} characters?", ta3:"{top}, with {topn} {tag} characters. Our platform ranking compares their features and prices.",
  tq4:"Am I talking to a real person?", ta4:"No. Replies are generated by artificial intelligence. Apart from Creator Twins (official AI versions of adult creators), the characters are entirely fictional.",
  tq5:"Is it free to chat with {tag} characters?", ta5:"You can usually start for free with limited messages. Pictures, voice and unlimited chat generally require a subscription or credits.",
  tq6:"Can {tag} characters send pictures?", ta6:"Yes on platforms with image generation ({img}). Pictures are AI-generated and usually cost credits.",
  tp_aff:"Some links are affiliate links: we may earn a commission at no extra cost to you. It never changes the order of the characters.",
  gi_style:"{tag} is an art style: it shapes how the character looks in her profile and in every picture she sends.",
  gi_vibe:"{tag} is a look and an attitude — her style, her clothes and the way she talks.",
  gi_personality:"{tag} describes how the character behaves in conversation: her tone, her reactions and how the story evolves.",
  gi_body:"{tag} describes the character's body type, as shown in her pictures and description.",
  gi_hair:"{tag} refers to the character's hair, visible in her profile picture and generated images.",
  gi_origin:"{tag} refers to the character's origin, which often flavours her personality and story.",
  gi_role:"{tag} is the character's job or role in the story — it sets the scene from the very first message.",
  gi_relationship:"{tag} is the relationship between you and the character: the starting point of the roleplay.",
  gi_fantasy:"{tag} characters come from fantasy and fiction: supernatural creatures, powers and other worlds.",
  gi_gender:"{tag} refers to the character's gender or orientation.",
  gi_kink:"{tag} is a theme explored in the roleplay between consenting adult characters; each platform's content rules apply.",
  gi_features:"{tag} is a feature or format of the chat itself."
},
fr: {
  tp_by:"{n} personnages · {k} plateforme(s) · Mis à jour le {d}",
  tp_intro:"Découvre {n} personnages IA « {tag} » disponibles sur {pls}. {grp} Clique sur une photo pour ouvrir le profil complet, ou sur « Parler » pour discuter tout de suite sur la plateforme.",
  tp_order:"Les personnages avec photo et les derniers ajouts s'affichent en premier.",
  tp_check_t:"5 points à vérifier avant de payer",
  tp_c1:"<strong>Version gratuite :</strong> combien de messages avant de devoir payer.",
  tp_c2:"<strong>Images :</strong> si le personnage peut envoyer des photos générées, et à quel prix.",
  tp_c3:"<strong>Voix :</strong> messages vocaux ou appels, si tu veux plus que du texte.",
  tp_c4:"<strong>Mémoire :</strong> si elle se souvient de votre histoire d'une session à l'autre.",
  tp_c5:"<strong>Confidentialité et facturation :</strong> nom discret sur le relevé et suppression facile du compte.",
  tp_expect_t:"À quoi s'attendre avec les personnages « {tag} »",
  tp_e1_t:"Qualité des conversations", tp_e1:"Chaque personnage « {tag} » part d'un scénario écrit. Les meilleures plateformes gardent sa personnalité cohérente et retiennent ce que tu lui confies ; les moins bonnes se répètent au bout de quelques dizaines de messages.",
  tp_e2_t:"Photos et vidéos", tp_e2:"La plupart des plateformes peuvent générer des photos du personnage à la demande, en général contre des crédits. La vidéo est plus rare et plus chère.",
  tp_e3_t:"Vitesse de réponse", tp_e3:"Les réponses arrivent en général en quelques secondes. Les comptes gratuits peuvent être plus lents aux heures de pointe.",
  tp_e4_t:"Prix", tp_e4:"Discuter est souvent gratuit à l'essai, avec des limites. Les messages illimités, les images et la voix demandent en général un abonnement ou des crédits — voir notre page Données.",
  tp_pl_t:"Où trouver des personnages « {tag} »", tp_col_n:"Personnages « {tag} »", tp_go:"Voir",
  tp_rel_t:"Souvent associé à « {tag} »", tp_alt_t:"Autres catégories « {g} »",
  tp_faq_t:"Personnages IA « {tag} » : FAQ",
  tq1:"Qu'est-ce qu'un personnage IA « {tag} » ?", ta1:"{grp} Sur {site}, chaque personnage est une IA représentée comme majeure (18+).",
  tq2:"Combien y a-t-il de personnages IA « {tag} » ?", ta2:"Nous en référençons actuellement {n} sur {k} plateforme(s). De nouveaux personnages sont ajoutés chaque semaine.",
  tq3:"Quelle plateforme a le plus de personnages « {tag} » ?", ta3:"{top}, avec {topn} personnages « {tag} ». Notre classement des plateformes compare leurs fonctionnalités et leurs prix.",
  tq4:"Est-ce que je parle à une vraie personne ?", ta4:"Non. Les réponses sont générées par intelligence artificielle. À part les jumelles IA de créatrices (versions IA officielles de créatrices adultes), les personnages sont entièrement fictifs.",
  tq5:"Discuter avec des personnages « {tag} » est-il gratuit ?", ta5:"On peut en général commencer gratuitement avec un nombre de messages limité. Les photos, la voix et le chat illimité demandent souvent un abonnement ou des crédits.",
  tq6:"Les personnages « {tag} » peuvent-ils envoyer des photos ?", ta6:"Oui, sur les plateformes avec génération d'images ({img}). Les photos sont générées par IA et coûtent en général des crédits.",
  tp_aff:"Certains liens sont affiliés : nous pouvons toucher une commission, sans surcoût pour toi. Cela ne change jamais l'ordre des personnages.",
  gi_style:"« {tag} » est un style graphique : il définit l'apparence du personnage sur son profil et dans chaque photo qu'il envoie.",
  gi_vibe:"« {tag} » est un look et une attitude : son style, ses tenues et sa façon de parler.",
  gi_personality:"« {tag} » décrit le comportement du personnage dans la conversation : son ton, ses réactions et l'évolution de l'histoire.",
  gi_body:"« {tag} » décrit la morphologie du personnage, telle qu'on la voit sur ses photos et dans sa description.",
  gi_hair:"« {tag} » concerne les cheveux du personnage, visibles sur sa photo de profil et ses images générées.",
  gi_origin:"« {tag} » concerne l'origine du personnage, qui influence souvent sa personnalité et son histoire.",
  gi_role:"« {tag} » est le métier ou le rôle du personnage dans l'histoire : il pose le décor dès le premier message.",
  gi_relationship:"« {tag} » est la relation entre toi et le personnage : le point de départ du jeu de rôle.",
  gi_fantasy:"Les personnages « {tag} » viennent de la fantasy et de la fiction : créatures surnaturelles, pouvoirs et autres mondes.",
  gi_gender:"« {tag} » concerne le genre ou l'orientation du personnage.",
  gi_kink:"« {tag} » est un thème exploré dans le jeu de rôle entre personnages adultes consentants ; les règles de chaque plateforme s'appliquent.",
  gi_features:"« {tag} » est une fonctionnalité ou un format du chat lui-même."
},
es: {
  tp_by:"{n} personajes · {k} plataforma(s) · Actualizado el {d}",
  tp_intro:"Descubre {n} personajes IA «{tag}» disponibles en {pls}. {grp} Haz clic en una foto para ver el perfil completo, o en «Habla» para chatear al instante en la plataforma.",
  tp_order:"Primero se muestran los personajes con foto y las últimas novedades.",
  tp_check_t:"5 cosas que comprobar antes de pagar",
  tp_c1:"<strong>Versión gratuita:</strong> cuántos mensajes tienes antes de pagar.", tp_c2:"<strong>Imágenes:</strong> si el personaje puede enviar fotos generadas y cuánto cuestan.",
  tp_c3:"<strong>Voz:</strong> mensajes de voz o llamadas, si quieres algo más que texto.", tp_c4:"<strong>Memoria:</strong> si recuerda vuestra historia de una sesión a otra.",
  tp_c5:"<strong>Privacidad y cobro:</strong> nombre discreto en el extracto y borrado fácil de la cuenta.",
  tp_expect_t:"Qué esperar de los personajes «{tag}»",
  tp_e1_t:"Calidad de la conversación", tp_e1:"Cada personaje «{tag}» parte de un escenario escrito. Las mejores plataformas mantienen su personalidad coherente y recuerdan lo que le cuentas; las peores se repiten tras unas decenas de mensajes.",
  tp_e2_t:"Fotos y vídeo", tp_e2:"La mayoría de plataformas pueden generar fotos del personaje a petición, normalmente con créditos. El vídeo es más raro y más caro.",
  tp_e3_t:"Velocidad de respuesta", tp_e3:"Las respuestas suelen llegar en pocos segundos. Las cuentas gratuitas pueden ir más lentas en horas punta.",
  tp_e4_t:"Precio", tp_e4:"Chatear suele poder probarse gratis con límites. Mensajes ilimitados, imágenes y voz requieren normalmente suscripción o créditos — ver nuestra página de Datos.",
  tp_pl_t:"Dónde encontrar personajes «{tag}»", tp_col_n:"Personajes «{tag}»", tp_go:"Ver",
  tp_rel_t:"A menudo combinado con «{tag}»", tp_alt_t:"Otras categorías de «{g}»",
  tp_faq_t:"Personajes IA «{tag}»: preguntas frecuentes",
  tq1:"¿Qué es un personaje IA «{tag}»?", ta1:"{grp} En {site}, cada personaje es una IA representada como adulta (18+).",
  tq2:"¿Cuántos personajes IA «{tag}» hay?", ta2:"Ahora mismo listamos {n} en {k} plataforma(s). Cada semana añadimos personajes nuevos.",
  tq3:"¿Qué plataforma tiene más personajes «{tag}»?", ta3:"{top}, con {topn} personajes «{tag}». Nuestro ranking de plataformas compara funciones y precios.",
  tq4:"¿Hablo con una persona real?", ta4:"No. Las respuestas las genera una inteligencia artificial. Salvo las gemelas IA de creadoras (versiones IA oficiales de creadoras adultas), los personajes son totalmente ficticios.",
  tq5:"¿Es gratis chatear con personajes «{tag}»?", ta5:"Normalmente puedes empezar gratis con mensajes limitados. Fotos, voz y chat ilimitado suelen requerir suscripción o créditos.",
  tq6:"¿Pueden los personajes «{tag}» enviar fotos?", ta6:"Sí, en las plataformas con generación de imágenes ({img}). Las fotos las genera la IA y suelen costar créditos.",
  tp_aff:"Algunos enlaces son de afiliado: podemos recibir una comisión sin coste extra para ti. Nunca cambia el orden de los personajes.",
  gi_style:"«{tag}» es un estilo gráfico: define cómo se ve el personaje en su perfil y en cada foto que envía.", gi_vibe:"«{tag}» es un look y una actitud: su estilo, su ropa y su forma de hablar.",
  gi_personality:"«{tag}» describe cómo se comporta el personaje en la conversación: su tono, sus reacciones y cómo avanza la historia.",
  gi_body:"«{tag}» describe el tipo de cuerpo del personaje, como se ve en sus fotos y su descripción.", gi_hair:"«{tag}» se refiere al pelo del personaje, visible en su foto de perfil y en las imágenes generadas.",
  gi_origin:"«{tag}» se refiere al origen del personaje, que suele dar sabor a su personalidad y su historia.", gi_role:"«{tag}» es la profesión o el papel del personaje en la historia: marca la escena desde el primer mensaje.",
  gi_relationship:"«{tag}» es la relación entre tú y el personaje: el punto de partida del rol.", gi_fantasy:"Los personajes «{tag}» vienen de la fantasía y la ficción: criaturas sobrenaturales, poderes y otros mundos.",
  gi_gender:"«{tag}» se refiere al género o la orientación del personaje.", gi_kink:"«{tag}» es un tema que se explora en el rol entre personajes adultos que consienten; se aplican las normas de cada plataforma.",
  gi_features:"«{tag}» es una función o un formato del propio chat."
},
de: {
  tp_by:"{n} Charaktere · {k} Plattform(en) · Aktualisiert am {d}",
  tp_intro:"Entdecke {n} KI-Charaktere der Kategorie „{tag}“ auf {pls}. {grp} Klicke auf ein Foto für das ganze Profil oder auf „Chatten“, um sofort auf der Plattform loszulegen.",
  tp_order:"Charaktere mit Foto und die neuesten Einträge stehen oben.",
  tp_check_t:"5 Dinge, die du vor dem Bezahlen prüfen solltest",
  tp_c1:"<strong>Gratisversion:</strong> wie viele Nachrichten du bekommst, bevor du zahlen musst.", tp_c2:"<strong>Bilder:</strong> ob der Charakter generierte Bilder schicken kann und was sie kosten.",
  tp_c3:"<strong>Sprache:</strong> Sprachnachrichten oder Anrufe, wenn du mehr als Text willst.", tp_c4:"<strong>Gedächtnis:</strong> ob sie sich von einer Sitzung zur nächsten an eure Geschichte erinnert.",
  tp_c5:"<strong>Datenschutz & Abrechnung:</strong> diskreter Name auf dem Kontoauszug und einfache Kontolöschung.",
  tp_expect_t:"Was dich bei „{tag}“-Charakteren erwartet",
  tp_e1_t:"Gesprächsqualität", tp_e1:"Jeder „{tag}“-Charakter startet mit einem geschriebenen Szenario. Gute Plattformen halten die Persönlichkeit stimmig und merken sich Details; schwächere wiederholen sich nach einigen Dutzend Nachrichten.",
  tp_e2_t:"Bilder und Video", tp_e2:"Die meisten Plattformen erzeugen auf Wunsch Bilder des Charakters, meist gegen Credits. Video ist seltener und teurer.",
  tp_e3_t:"Antwortgeschwindigkeit", tp_e3:"Antworten kommen meist in wenigen Sekunden. Gratiskonten können zu Spitzenzeiten langsamer sein.",
  tp_e4_t:"Kosten", tp_e4:"Chatten lässt sich oft mit Limits gratis testen. Unbegrenzte Nachrichten, Bilder und Sprache erfordern meist ein Abo oder Credits — siehe unsere Datenseite.",
  tp_pl_t:"Wo du „{tag}“-Charaktere findest", tp_col_n:"„{tag}“-Charaktere", tp_go:"Ansehen",
  tp_rel_t:"Oft kombiniert mit „{tag}“", tp_alt_t:"Weitere Kategorien in „{g}“",
  tp_faq_t:"„{tag}“-KI-Charaktere: FAQ",
  tq1:"Was ist ein „{tag}“-KI-Charakter?", ta1:"{grp} Auf {site} ist jeder Charakter eine KI, die als volljährig (18+) dargestellt wird.",
  tq2:"Wie viele „{tag}“-KI-Charaktere gibt es?", ta2:"Aktuell listen wir {n} auf {k} Plattform(en). Jede Woche kommen neue hinzu.",
  tq3:"Welche Plattform hat die meisten „{tag}“-Charaktere?", ta3:"{top}, mit {topn} „{tag}“-Charakteren. Unser Plattform-Ranking vergleicht Funktionen und Preise.",
  tq4:"Spreche ich mit einer echten Person?", ta4:"Nein. Die Antworten erzeugt eine künstliche Intelligenz. Abgesehen von Creator-Zwillingen (offizielle KI-Versionen erwachsener Creatorinnen) sind die Charaktere komplett fiktiv.",
  tq5:"Ist der Chat mit „{tag}“-Charakteren kostenlos?", ta5:"Meist kannst du mit begrenzten Nachrichten gratis starten. Bilder, Sprache und unbegrenzter Chat erfordern meist ein Abo oder Credits.",
  tq6:"Können „{tag}“-Charaktere Bilder schicken?", ta6:"Ja, auf Plattformen mit Bildgenerierung ({img}). Die Bilder sind KI-generiert und kosten meist Credits.",
  tp_aff:"Einige Links sind Affiliate-Links: Wir erhalten eventuell eine Provision, ohne Mehrkosten für dich. Die Reihenfolge der Charaktere ändert das nie.",
  gi_style:"„{tag}“ ist ein Grafikstil: Er bestimmt, wie der Charakter im Profil und auf jedem Bild aussieht.", gi_vibe:"„{tag}“ ist ein Look und eine Haltung — Stil, Kleidung und Art zu reden.",
  gi_personality:"„{tag}“ beschreibt, wie sich der Charakter im Gespräch verhält: Ton, Reaktionen und wie sich die Geschichte entwickelt.",
  gi_body:"„{tag}“ beschreibt die Figur des Charakters, wie sie auf Bildern und in der Beschreibung zu sehen ist.", gi_hair:"„{tag}“ bezieht sich auf die Haare des Charakters, sichtbar im Profilbild und auf generierten Bildern.",
  gi_origin:"„{tag}“ bezieht sich auf die Herkunft des Charakters, die oft Persönlichkeit und Geschichte prägt.", gi_role:"„{tag}“ ist der Beruf oder die Rolle des Charakters in der Geschichte — sie setzt die Szene ab der ersten Nachricht.",
  gi_relationship:"„{tag}“ ist die Beziehung zwischen dir und dem Charakter: der Ausgangspunkt des Rollenspiels.", gi_fantasy:"„{tag}“-Charaktere stammen aus Fantasy und Fiktion: übernatürliche Wesen, Kräfte und andere Welten.",
  gi_gender:"„{tag}“ bezieht sich auf Geschlecht oder Orientierung des Charakters.", gi_kink:"„{tag}“ ist ein Thema im Rollenspiel zwischen einvernehmlich handelnden erwachsenen Charakteren; es gelten die Regeln der jeweiligen Plattform.",
  gi_features:"„{tag}“ ist eine Funktion oder ein Format des Chats selbst."
},
pt: {
  tp_by:"{n} personagens · {k} plataforma(s) · Atualizado em {d}",
  tp_intro:"Descubra {n} personagens IA “{tag}” disponíveis no {pls}. {grp} Clique numa foto para ver o perfil completo, ou em “Converse” para começar a conversar na hora na plataforma.",
  tp_order:"Personagens com foto e as novidades aparecem primeiro.",
  tp_check_t:"5 coisas para verificar antes de pagar",
  tp_c1:"<strong>Versão grátis:</strong> quantas mensagens você tem antes de pagar.", tp_c2:"<strong>Imagens:</strong> se a personagem pode enviar fotos geradas e quanto custam.",
  tp_c3:"<strong>Voz:</strong> mensagens de voz ou chamadas, se você quiser mais que texto.", tp_c4:"<strong>Memória:</strong> se ela lembra da história de uma sessão para outra.",
  tp_c5:"<strong>Privacidade e cobrança:</strong> nome discreto na fatura e exclusão fácil da conta.",
  tp_expect_t:"O que esperar das personagens “{tag}”",
  tp_e1_t:"Qualidade da conversa", tp_e1:"Cada personagem “{tag}” parte de um cenário escrito. As melhores plataformas mantêm a personalidade coerente e lembram o que você conta; as piores se repetem depois de algumas dezenas de mensagens.",
  tp_e2_t:"Fotos e vídeo", tp_e2:"A maioria das plataformas gera fotos da personagem sob pedido, geralmente com créditos. Vídeo é mais raro e mais caro.",
  tp_e3_t:"Velocidade de resposta", tp_e3:"As respostas costumam chegar em poucos segundos. Contas grátis podem ficar mais lentas no horário de pico.",
  tp_e4_t:"Preço", tp_e4:"Conversar costuma ser grátis para testar, com limites. Mensagens ilimitadas, imagens e voz geralmente exigem assinatura ou créditos — veja nossa página de Dados.",
  tp_pl_t:"Onde encontrar personagens “{tag}”", tp_col_n:"Personagens “{tag}”", tp_go:"Ver",
  tp_rel_t:"Muitas vezes combinado com “{tag}”", tp_alt_t:"Outras categorias de “{g}”",
  tp_faq_t:"Personagens IA “{tag}”: perguntas frequentes",
  tq1:"O que é uma personagem IA “{tag}”?", ta1:"{grp} No {site}, cada personagem é uma IA representada como adulta (18+).",
  tq2:"Quantas personagens IA “{tag}” existem?", ta2:"Hoje listamos {n} em {k} plataforma(s). Novas personagens são adicionadas toda semana.",
  tq3:"Qual plataforma tem mais personagens “{tag}”?", ta3:"{top}, com {topn} personagens “{tag}”. Nosso ranking de plataformas compara recursos e preços.",
  tq4:"Estou falando com uma pessoa real?", ta4:"Não. As respostas são geradas por inteligência artificial. Exceto as gêmeas IA de criadoras (versões IA oficiais de criadoras adultas), as personagens são totalmente fictícias.",
  tq5:"Conversar com personagens “{tag}” é grátis?", ta5:"Normalmente dá para começar grátis com mensagens limitadas. Fotos, voz e chat ilimitado costumam exigir assinatura ou créditos.",
  tq6:"Personagens “{tag}” podem enviar fotos?", ta6:"Sim, nas plataformas com geração de imagens ({img}). As fotos são geradas por IA e costumam custar créditos.",
  tp_aff:"Alguns links são de afiliados: podemos receber uma comissão sem custo extra para você. Isso nunca muda a ordem das personagens.",
  gi_style:"“{tag}” é um estilo gráfico: define a aparência da personagem no perfil e em cada foto que ela envia.", gi_vibe:"“{tag}” é um visual e uma atitude — o estilo, as roupas e o jeito de falar.",
  gi_personality:"“{tag}” descreve como a personagem se comporta na conversa: o tom, as reações e como a história evolui.",
  gi_body:"“{tag}” descreve o tipo de corpo da personagem, como aparece nas fotos e na descrição.", gi_hair:"“{tag}” se refere ao cabelo da personagem, visível na foto de perfil e nas imagens geradas.",
  gi_origin:"“{tag}” se refere à origem da personagem, que muitas vezes dá sabor à personalidade e à história.", gi_role:"“{tag}” é a profissão ou o papel da personagem na história — define a cena desde a primeira mensagem.",
  gi_relationship:"“{tag}” é a relação entre você e a personagem: o ponto de partida do roleplay.", gi_fantasy:"Personagens “{tag}” vêm da fantasia e da ficção: criaturas sobrenaturais, poderes e outros mundos.",
  gi_gender:"“{tag}” se refere ao gênero ou à orientação da personagem.", gi_kink:"“{tag}” é um tema explorado no roleplay entre personagens adultos que consentem; valem as regras de cada plataforma.",
  gi_features:"“{tag}” é um recurso ou formato do próprio chat."
},
hi: {
  tp_by:"{n} किरदार · {k} प्लेटफ़ॉर्म · {d} को अपडेट",
  tp_intro:"{pls} पर उपलब्ध {n} “{tag}” AI किरदार देखें। {grp} पूरी प्रोफ़ाइल के लिए फ़ोटो पर क्लिक करें, या प्लेटफ़ॉर्म पर तुरंत बात शुरू करने के लिए “बात करें” दबाएँ।",
  tp_order:"फ़ोटो वाले किरदार और नए जोड़े गए किरदार पहले दिखते हैं।",
  tp_check_t:"भुगतान से पहले जाँचने लायक 5 बातें",
  tp_c1:"<strong>मुफ़्त वर्ज़न:</strong> भुगतान से पहले कितने मैसेज मिलते हैं।", tp_c2:"<strong>तस्वीरें:</strong> क्या किरदार जनरेटेड तस्वीरें भेज सकता है और उनकी कीमत क्या है।",
  tp_c3:"<strong>वॉइस:</strong> अगर आप टेक्स्ट से ज़्यादा चाहते हैं तो वॉइस मैसेज या कॉल।", tp_c4:"<strong>मेमोरी:</strong> क्या वह एक सेशन से दूसरे सेशन तक आपकी कहानी याद रखती है।",
  tp_c5:"<strong>प्राइवेसी और बिलिंग:</strong> बैंक स्टेटमेंट पर गोपनीय नाम और अकाउंट आसानी से डिलीट करने की सुविधा।",
  tp_expect_t:"“{tag}” किरदारों से क्या उम्मीद करें",
  tp_e1_t:"बातचीत की गुणवत्ता", tp_e1:"हर “{tag}” किरदार एक लिखी हुई कहानी से शुरू होता है। अच्छे प्लेटफ़ॉर्म व्यक्तित्व को एक जैसा रखते हैं और आपकी बातें याद रखते हैं; कमज़ोर प्लेटफ़ॉर्म कुछ दर्जन मैसेज के बाद दोहराने लगते हैं।",
  tp_e2_t:"तस्वीरें और वीडियो", tp_e2:"ज़्यादातर प्लेटफ़ॉर्म मांगने पर किरदार की तस्वीरें बना सकते हैं, आमतौर पर क्रेडिट से। वीडियो कम मिलता है और महंगा होता है।",
  tp_e3_t:"जवाब की रफ़्तार", tp_e3:"जवाब आमतौर पर कुछ सेकंड में आते हैं। व्यस्त समय में मुफ़्त अकाउंट धीमे हो सकते हैं।",
  tp_e4_t:"कीमत", tp_e4:"बातचीत अक्सर सीमाओं के साथ मुफ़्त आज़माई जा सकती है। अनलिमिटेड मैसेज, तस्वीरें और वॉइस के लिए आमतौर पर सब्सक्रिप्शन या क्रेडिट चाहिए — हमारा डेटा पेज देखें।",
  tp_pl_t:"“{tag}” किरदार कहाँ मिलेंगे", tp_col_n:"“{tag}” किरदार", tp_go:"देखें",
  tp_rel_t:"अक्सर “{tag}” के साथ", tp_alt_t:"“{g}” की अन्य श्रेणियाँ",
  tp_faq_t:"“{tag}” AI किरदार: अक्सर पूछे जाने वाले सवाल",
  tq1:"“{tag}” AI किरदार क्या है?", ta1:"{grp} {site} पर हर किरदार एक AI है जिसे वयस्क (18+) दिखाया गया है।",
  tq2:"कितने “{tag}” AI किरदार हैं?", ta2:"फ़िलहाल हम {k} प्लेटफ़ॉर्म पर {n} किरदार दिखाते हैं। हर हफ़्ते नए किरदार जुड़ते हैं।",
  tq3:"किस प्लेटफ़ॉर्म पर सबसे ज़्यादा “{tag}” किरदार हैं?", ta3:"{top}, {topn} “{tag}” किरदारों के साथ। हमारी प्लेटफ़ॉर्म रैंकिंग फ़ीचर्स और कीमतों की तुलना करती है।",
  tq4:"क्या मैं किसी असली इंसान से बात कर रहा हूँ?", ta4:"नहीं। जवाब आर्टिफ़िशियल इंटेलिजेंस बनाती है। क्रिएटर ट्विन (वयस्क क्रिएटर्स के आधिकारिक AI वर्ज़न) को छोड़कर, सभी किरदार पूरी तरह काल्पनिक हैं।",
  tq5:"क्या “{tag}” किरदारों से बात करना मुफ़्त है?", ta5:"आमतौर पर सीमित मैसेज के साथ मुफ़्त शुरुआत कर सकते हैं। तस्वीरें, वॉइस और अनलिमिटेड चैट के लिए अक्सर सब्सक्रिप्शन या क्रेडिट चाहिए।",
  tq6:"क्या “{tag}” किरदार तस्वीरें भेज सकते हैं?", ta6:"हाँ, इमेज जनरेशन वाले प्लेटफ़ॉर्म पर ({img})। तस्वीरें AI से बनती हैं और आमतौर पर क्रेडिट लगते हैं।",
  tp_aff:"कुछ लिंक एफ़िलिएट लिंक हैं: हमें कमीशन मिल सकता है, आपको कोई अतिरिक्त खर्च नहीं। इससे किरदारों का क्रम कभी नहीं बदलता।",
  gi_style:"“{tag}” एक आर्ट स्टाइल है: यह तय करता है कि किरदार प्रोफ़ाइल और हर तस्वीर में कैसा दिखता है।", gi_vibe:"“{tag}” एक लुक और अंदाज़ है — उसका स्टाइल, कपड़े और बात करने का तरीका।",
  gi_personality:"“{tag}” बताता है कि किरदार बातचीत में कैसा व्यवहार करता है: उसका लहजा, प्रतिक्रियाएँ और कहानी कैसे आगे बढ़ती है।",
  gi_body:"“{tag}” किरदार के बॉडी टाइप को बताता है, जैसा उसकी तस्वीरों और विवरण में दिखता है।", gi_hair:"“{tag}” किरदार के बालों के बारे में है, जो प्रोफ़ाइल फ़ोटो और जनरेटेड तस्वीरों में दिखते हैं।",
  gi_origin:"“{tag}” किरदार के मूल के बारे में है, जो अक्सर उसके व्यक्तित्व और कहानी को रंग देता है।", gi_role:"“{tag}” कहानी में किरदार का पेशा या भूमिका है — यह पहले मैसेज से माहौल तय करता है।",
  gi_relationship:"“{tag}” आपके और किरदार के बीच का रिश्ता है: रोलप्ले की शुरुआत।", gi_fantasy:"“{tag}” किरदार फ़ैंटेसी और कल्पना से आते हैं: अलौकिक जीव, शक्तियाँ और दूसरी दुनिया।",
  gi_gender:"“{tag}” किरदार के जेंडर या ओरिएंटेशन के बारे में है।", gi_kink:"“{tag}” सहमति वाले वयस्क किरदारों के बीच रोलप्ले में खोजा गया विषय है; हर प्लेटफ़ॉर्म के नियम लागू होते हैं।",
  gi_features:"“{tag}” चैट की एक सुविधा या फ़ॉर्मेट है।"
}
};
for (const l in TAGPAGE_UI) Object.assign(I18N[l].ui, TAGPAGE_UI[l]);

;
/* Home extras (Top 10, sort tabs, pagination, recent, about, FAQ) + model review block. 6 languages.
   Placeholders: {n} profiles, {k} platforms, {c} categories, {site}, {d} date, {name}, {p} platform, {tags}, {style}, {x} count */
const EXTRA_UI = {
en: {
  top_t:"Top 10 this week", top_sub:"Editor's picks, refreshed every week.",
  sort_sel:"Editor's picks", sort_new_t:"Newest", sort_az:"A–Z",
  pg:"Page {p} of {n}", pg_prev:"← Previous", pg_next:"Next →",
  recent_t:"Recently added", recent_all:"See all new profiles",
  popcat_t:"Popular categories",
  about_t:"About {site}",
  about_1:"{site} is an independent directory of AI companion characters for adults. We list {n} characters from {k} platforms and sort them into {c} categories, so you can find the personality, style or scenario you want without signing up anywhere first.",
  about_2:"Every profile links to the official chat page of its platform. We check the links, the official character sheets and the features of each platform regularly, and we explain how we rate platforms on a dedicated page. Some links are affiliate links: they cost you nothing and help keep the site free.",
  hfaq_t:"Frequently asked questions",
  hq1:"What is {site}?", ha1:"A free directory of {n} adult AI chatbot characters from {k} platforms, sorted into {c} categories. We do not host any chat ourselves: each profile sends you to the official platform.",
  hq2:"Are the characters real people?", ha2:"No. All characters are fictional AIs presented as adults (18+). The only exception is Creator Twins: official AI versions of adult creators, published by the platform with their consent.",
  hq3:"Is it free?", ha3:"Browsing {site} is free and needs no account. Most platforms let you start chatting for free with limits; unlimited messages, photos, voice and video usually require a subscription or credits.",
  hq4:"How do you choose the Top 10?", ha4:"The Top 10 is an editor's selection, refreshed every week. It mixes popular styles and new characters. Platforms do not pay to appear in it.",
  hq5:"How do you rate the platforms?", ha5:"We score each platform on conversation quality, media (photos, voice, video), price, privacy and ease of use. The full method is on our “How we rate” page.",
  hq6:"How do I find a specific type of character?", ha6:"Use the filters at the top of the list (gender, style, origin, age, hair, body, platform and more), the search bar, or browse the {c} categories.",
  rv_t:"Our take", rv_by:"By the {site} editorial team", rv_checked:"Checked on {d}",
  rv_sum:"{name} is a {style} character on {p}. A good pick if you are looking for: {tags}.",
  rv_real:"realistic", rv_anime:"anime-style",
  rv_pros:"Pros", rv_cons:"Cons",
  pro_img:"Can send you AI-generated photos", pro_voice:"Voice messages and calls available", pro_video:"AI videos on request",
  pro_free:"You can start chatting for free", pro_creator:"Official AI version of an adult creator, made with her consent",
  pro_tags:"Detailed profile: {x} categories", pro_bio:"Ready-made scenario to start the conversation",
  con_paid:"Unlimited messages, photos and videos need a subscription or credits",
  con_comm:"Community-made bot: quality varies from one bot to another",
  con_noimg:"No profile photo on our site yet", con_noage:"Age not specified by the platform",
  cmp_t:"{name} compared with similar characters", cmp_name:"Character", cmp_common:"Shared categories", cmp_this:"this profile",
  m_checked:"Last checked"
},
fr: {
  top_t:"Top 10 de la semaine", top_sub:"La sélection de la rédaction, mise à jour chaque semaine.",
  sort_sel:"Sélection", sort_new_t:"Nouveaux", sort_az:"A–Z",
  pg:"Page {p} sur {n}", pg_prev:"← Précédent", pg_next:"Suivant →",
  recent_t:"Ajoutés récemment", recent_all:"Voir toutes les nouveautés",
  popcat_t:"Catégories populaires",
  about_t:"À propos de {site}",
  about_1:"{site} est un annuaire indépendant de personnages IA pour adultes. Nous référençons {n} personnages issus de {k} plateformes, classés dans {c} catégories, pour que tu trouves la personnalité, le style ou le scénario que tu veux sans t'inscrire nulle part avant.",
  about_2:"Chaque profil renvoie vers la page de chat officielle de sa plateforme. Nous vérifions régulièrement les liens, les fiches officielles des personnages et les fonctionnalités de chaque plateforme, et notre méthode de notation est expliquée sur une page dédiée. Certains liens sont affiliés : ils ne te coûtent rien et permettent au site de rester gratuit.",
  hfaq_t:"Questions fréquentes",
  hq1:"Qu'est-ce que {site} ?", ha1:"Un annuaire gratuit de {n} personnages de chatbots IA pour adultes, issus de {k} plateformes et classés dans {c} catégories. Nous n'hébergeons aucun chat : chaque profil t'envoie vers la plateforme officielle.",
  hq2:"Les personnages sont-ils de vraies personnes ?", ha2:"Non. Tous les personnages sont des IA fictives présentées comme majeures (18+). Seule exception : les jumelles IA de créatrices, versions IA officielles de créatrices adultes, publiées par la plateforme avec leur accord.",
  hq3:"Est-ce gratuit ?", ha3:"Parcourir {site} est gratuit et sans compte. La plupart des plateformes permettent de commencer à discuter gratuitement avec des limites ; les messages illimités, les photos, la voix et la vidéo demandent en général un abonnement ou des crédits.",
  hq4:"Comment est choisi le Top 10 ?", ha4:"Le Top 10 est une sélection de la rédaction, mise à jour chaque semaine. Il mélange des styles populaires et des nouveaux personnages. Les plateformes ne paient pas pour y figurer.",
  hq5:"Comment notez-vous les plateformes ?", ha5:"Nous notons chaque plateforme sur la qualité des conversations, les médias (photos, voix, vidéo), le prix, la confidentialité et la facilité d'utilisation. La méthode complète est sur notre page « Notre méthode ».",
  hq6:"Comment trouver un type de personnage précis ?", ha6:"Utilise les filtres en haut de la liste (genre, style, origine, âge, cheveux, corps, plateforme…), la barre de recherche, ou parcours les {c} catégories.",
  rv_t:"Notre avis", rv_by:"Par l'équipe éditoriale de {site}", rv_checked:"Vérifié le {d}",
  rv_sum:"{name} est un personnage {style} disponible sur {p}. Un bon choix si tu cherches : {tags}.",
  rv_real:"réaliste", rv_anime:"de style anime",
  rv_pros:"Points forts", rv_cons:"Points faibles",
  pro_img:"Peut t'envoyer des photos générées par IA", pro_voice:"Messages vocaux et appels disponibles", pro_video:"Vidéos IA à la demande",
  pro_free:"On peut commencer à discuter gratuitement", pro_creator:"Version IA officielle d'une créatrice adulte, faite avec son accord",
  pro_tags:"Profil détaillé : {x} catégories", pro_bio:"Scénario prêt à l'emploi pour lancer la conversation",
  con_paid:"Messages illimités, photos et vidéos réservés à l'abonnement ou payés en crédits",
  con_comm:"Bot créé par la communauté : la qualité varie d'un bot à l'autre",
  con_noimg:"Pas encore de photo de profil sur notre site", con_noage:"Âge non précisé par la plateforme",
  cmp_t:"{name} face à des personnages proches", cmp_name:"Personnage", cmp_common:"Catégories en commun", cmp_this:"ce profil",
  m_checked:"Dernière vérification"
},
es: {
  top_t:"Top 10 de la semana", top_sub:"Selección de la redacción, actualizada cada semana.",
  sort_sel:"Selección", sort_new_t:"Nuevos", sort_az:"A–Z",
  pg:"Página {p} de {n}", pg_prev:"← Anterior", pg_next:"Siguiente →",
  recent_t:"Añadidos recientemente", recent_all:"Ver todas las novedades",
  popcat_t:"Categorías populares",
  about_t:"Sobre {site}",
  about_1:"{site} es un directorio independiente de personajes de IA para adultos. Listamos {n} personajes de {k} plataformas, clasificados en {c} categorías, para que encuentres la personalidad, el estilo o el escenario que buscas sin registrarte antes en ningún sitio.",
  about_2:"Cada perfil enlaza con la página de chat oficial de su plataforma. Revisamos con regularidad los enlaces, las fichas oficiales de los personajes y las funciones de cada plataforma, y explicamos cómo puntuamos en una página aparte. Algunos enlaces son de afiliado: no te cuestan nada y ayudan a mantener el sitio gratis.",
  hfaq_t:"Preguntas frecuentes",
  hq1:"¿Qué es {site}?", ha1:"Un directorio gratuito de {n} personajes de chatbots de IA para adultos de {k} plataformas, clasificados en {c} categorías. No alojamos ningún chat: cada perfil te lleva a la plataforma oficial.",
  hq2:"¿Los personajes son personas reales?", ha2:"No. Todos los personajes son IA ficticias presentadas como adultas (18+). La única excepción son los gemelos IA de creadoras: versiones IA oficiales de creadoras adultas, publicadas por la plataforma con su consentimiento.",
  hq3:"¿Es gratis?", ha3:"Navegar por {site} es gratis y sin cuenta. La mayoría de las plataformas permiten empezar a chatear gratis con límites; los mensajes ilimitados, las fotos, la voz y el vídeo suelen requerir suscripción o créditos.",
  hq4:"¿Cómo se elige el Top 10?", ha4:"El Top 10 es una selección de la redacción que se actualiza cada semana. Mezcla estilos populares y personajes nuevos. Las plataformas no pagan por aparecer.",
  hq5:"¿Cómo puntuáis las plataformas?", ha5:"Puntuamos cada plataforma según la calidad de las conversaciones, los medios (fotos, voz, vídeo), el precio, la privacidad y la facilidad de uso. El método completo está en nuestra página «Cómo puntuamos».",
  hq6:"¿Cómo encuentro un tipo de personaje concreto?", ha6:"Usa los filtros de la parte superior de la lista (género, estilo, origen, edad, pelo, cuerpo, plataforma…), la barra de búsqueda o recorre las {c} categorías.",
  rv_t:"Nuestra opinión", rv_by:"Por el equipo editorial de {site}", rv_checked:"Revisado el {d}",
  rv_sum:"{name} es un personaje {style} disponible en {p}. Una buena opción si buscas: {tags}.",
  rv_real:"realista", rv_anime:"de estilo anime",
  rv_pros:"Puntos fuertes", rv_cons:"Puntos débiles",
  pro_img:"Puede enviarte fotos generadas por IA", pro_voice:"Mensajes de voz y llamadas disponibles", pro_video:"Vídeos de IA bajo petición",
  pro_free:"Se puede empezar a chatear gratis", pro_creator:"Versión IA oficial de una creadora adulta, hecha con su consentimiento",
  pro_tags:"Perfil detallado: {x} categorías", pro_bio:"Escenario listo para empezar la conversación",
  con_paid:"Mensajes ilimitados, fotos y vídeos solo con suscripción o créditos",
  con_comm:"Bot creado por la comunidad: la calidad varía de un bot a otro",
  con_noimg:"Todavía sin foto de perfil en nuestro sitio", con_noage:"Edad no indicada por la plataforma",
  cmp_t:"{name} comparado con personajes similares", cmp_name:"Personaje", cmp_common:"Categorías en común", cmp_this:"este perfil",
  m_checked:"Última revisión"
},
de: {
  top_t:"Top 10 der Woche", top_sub:"Auswahl der Redaktion, jede Woche aktualisiert.",
  sort_sel:"Auswahl", sort_new_t:"Neueste", sort_az:"A–Z",
  pg:"Seite {p} von {n}", pg_prev:"← Zurück", pg_next:"Weiter →",
  recent_t:"Neu hinzugefügt", recent_all:"Alle neuen Profile ansehen",
  popcat_t:"Beliebte Kategorien",
  about_t:"Über {site}",
  about_1:"{site} ist ein unabhängiges Verzeichnis von KI-Begleitern für Erwachsene. Wir listen {n} Charaktere von {k} Plattformen in {c} Kategorien, damit du die Persönlichkeit, den Stil oder das Szenario findest, das du willst, ohne dich vorher irgendwo anzumelden.",
  about_2:"Jedes Profil verlinkt auf die offizielle Chat-Seite seiner Plattform. Wir prüfen regelmäßig die Links, die offiziellen Charakterprofile und die Funktionen jeder Plattform und erklären unsere Bewertung auf einer eigenen Seite. Manche Links sind Affiliate-Links: Sie kosten dich nichts und halten die Seite kostenlos.",
  hfaq_t:"Häufige Fragen",
  hq1:"Was ist {site}?", ha1:"Ein kostenloses Verzeichnis von {n} KI-Chatbot-Charakteren für Erwachsene von {k} Plattformen in {c} Kategorien. Wir hosten keinen Chat: Jedes Profil führt dich zur offiziellen Plattform.",
  hq2:"Sind die Charaktere echte Personen?", ha2:"Nein. Alle Charaktere sind fiktive KIs, die als volljährig (18+) dargestellt werden. Einzige Ausnahme sind Creator Twins: offizielle KI-Versionen erwachsener Creatorinnen, von der Plattform mit ihrer Zustimmung veröffentlicht.",
  hq3:"Ist das kostenlos?", ha3:"Das Stöbern auf {site} ist kostenlos und ohne Konto möglich. Die meisten Plattformen lassen dich mit Einschränkungen kostenlos chatten; unbegrenzte Nachrichten, Fotos, Stimme und Video erfordern meist ein Abo oder Credits.",
  hq4:"Wie wird die Top 10 ausgewählt?", ha4:"Die Top 10 ist eine Auswahl der Redaktion und wird jede Woche aktualisiert. Sie mischt beliebte Stile und neue Charaktere. Plattformen zahlen nicht für einen Platz.",
  hq5:"Wie bewertet ihr die Plattformen?", ha5:"Wir bewerten jede Plattform nach Gesprächsqualität, Medien (Fotos, Stimme, Video), Preis, Datenschutz und Bedienbarkeit. Die vollständige Methode steht auf unserer Seite „So bewerten wir“.",
  hq6:"Wie finde ich einen bestimmten Charaktertyp?", ha6:"Nutze die Filter oben in der Liste (Geschlecht, Stil, Herkunft, Alter, Haare, Körper, Plattform …), die Suche oder stöbere in den {c} Kategorien.",
  rv_t:"Unsere Einschätzung", rv_by:"Von der Redaktion von {site}", rv_checked:"Geprüft am {d}",
  rv_sum:"{name} ist ein {style} auf {p}. Eine gute Wahl, wenn du Folgendes suchst: {tags}.",
  rv_real:"realistischer Charakter", rv_anime:"Anime-Charakter",
  rv_pros:"Stärken", rv_cons:"Schwächen",
  pro_img:"Kann dir KI-generierte Fotos schicken", pro_voice:"Sprachnachrichten und Anrufe verfügbar", pro_video:"KI-Videos auf Anfrage",
  pro_free:"Du kannst kostenlos mit dem Chatten anfangen", pro_creator:"Offizielle KI-Version einer erwachsenen Creatorin, mit ihrer Zustimmung erstellt",
  pro_tags:"Detailliertes Profil: {x} Kategorien", pro_bio:"Fertiges Szenario für den Gesprächseinstieg",
  con_paid:"Unbegrenzte Nachrichten, Fotos und Videos nur mit Abo oder Credits",
  con_comm:"Von der Community erstellter Bot: Die Qualität schwankt von Bot zu Bot",
  con_noimg:"Noch kein Profilfoto auf unserer Seite", con_noage:"Alter von der Plattform nicht angegeben",
  cmp_t:"{name} im Vergleich mit ähnlichen Charakteren", cmp_name:"Charakter", cmp_common:"Gemeinsame Kategorien", cmp_this:"dieses Profil",
  m_checked:"Zuletzt geprüft"
},
pt: {
  top_t:"Top 10 da semana", top_sub:"Seleção da redação, atualizada toda semana.",
  sort_sel:"Seleção", sort_new_t:"Novos", sort_az:"A–Z",
  pg:"Página {p} de {n}", pg_prev:"← Anterior", pg_next:"Próxima →",
  recent_t:"Adicionados recentemente", recent_all:"Ver todas as novidades",
  popcat_t:"Categorias populares",
  about_t:"Sobre o {site}",
  about_1:"O {site} é um diretório independente de personagens de IA para adultos. Listamos {n} personagens de {k} plataformas, organizados em {c} categorias, para você encontrar a personalidade, o estilo ou o cenário que quer sem se cadastrar em lugar nenhum antes.",
  about_2:"Cada perfil leva à página de chat oficial da sua plataforma. Verificamos regularmente os links, as fichas oficiais dos personagens e os recursos de cada plataforma, e explicamos como avaliamos numa página própria. Alguns links são de afiliado: não custam nada para você e ajudam a manter o site gratuito.",
  hfaq_t:"Perguntas frequentes",
  hq1:"O que é o {site}?", ha1:"Um diretório gratuito de {n} personagens de chatbots de IA para adultos, de {k} plataformas, organizados em {c} categorias. Não hospedamos nenhum chat: cada perfil leva você à plataforma oficial.",
  hq2:"Os personagens são pessoas reais?", ha2:"Não. Todos os personagens são IAs fictícias apresentadas como adultas (18+). A única exceção são os gêmeos de IA de criadoras: versões de IA oficiais de criadoras adultas, publicadas pela plataforma com o consentimento delas.",
  hq3:"É grátis?", ha3:"Navegar pelo {site} é grátis e sem conta. A maioria das plataformas permite começar a conversar de graça com limites; mensagens ilimitadas, fotos, voz e vídeo geralmente exigem assinatura ou créditos.",
  hq4:"Como o Top 10 é escolhido?", ha4:"O Top 10 é uma seleção da redação, atualizada toda semana. Ele mistura estilos populares e personagens novos. As plataformas não pagam para aparecer.",
  hq5:"Como vocês avaliam as plataformas?", ha5:"Avaliamos cada plataforma pela qualidade das conversas, mídia (fotos, voz, vídeo), preço, privacidade e facilidade de uso. O método completo está na nossa página «Como avaliamos».",
  hq6:"Como encontro um tipo específico de personagem?", ha6:"Use os filtros no topo da lista (gênero, estilo, origem, idade, cabelo, corpo, plataforma…), a busca ou navegue pelas {c} categorias.",
  rv_t:"Nossa opinião", rv_by:"Pela equipe editorial do {site}", rv_checked:"Verificado em {d}",
  rv_sum:"{name} é um personagem {style} disponível no {p}. Uma boa escolha se você procura: {tags}.",
  rv_real:"realista", rv_anime:"em estilo anime",
  rv_pros:"Pontos fortes", rv_cons:"Pontos fracos",
  pro_img:"Pode te enviar fotos geradas por IA", pro_voice:"Mensagens de voz e chamadas disponíveis", pro_video:"Vídeos de IA sob pedido",
  pro_free:"Dá para começar a conversar de graça", pro_creator:"Versão de IA oficial de uma criadora adulta, feita com o consentimento dela",
  pro_tags:"Perfil detalhado: {x} categorias", pro_bio:"Cenário pronto para começar a conversa",
  con_paid:"Mensagens ilimitadas, fotos e vídeos só com assinatura ou créditos",
  con_comm:"Bot criado pela comunidade: a qualidade varia de um bot para outro",
  con_noimg:"Ainda sem foto de perfil no nosso site", con_noage:"Idade não informada pela plataforma",
  cmp_t:"{name} comparado com personagens parecidos", cmp_name:"Personagem", cmp_common:"Categorias em comum", cmp_this:"este perfil",
  m_checked:"Última verificação"
},
hi: {
  top_t:"इस हफ़्ते के टॉप 10", top_sub:"संपादकीय टीम का चयन, हर हफ़्ते अपडेट।",
  sort_sel:"चयन", sort_new_t:"नए", sort_az:"A–Z",
  pg:"पेज {p} / {n}", pg_prev:"← पिछला", pg_next:"अगला →",
  recent_t:"हाल ही में जोड़े गए", recent_all:"सभी नए प्रोफ़ाइल देखें",
  popcat_t:"लोकप्रिय कैटेगरी",
  about_t:"{site} के बारे में",
  about_1:"{site} वयस्कों के लिए AI साथी किरदारों की एक स्वतंत्र डायरेक्टरी है। हम {k} प्लेटफ़ॉर्म के {n} किरदार {c} कैटेगरी में दिखाते हैं, ताकि आप पहले कहीं साइन अप किए बिना अपनी पसंद की पर्सनैलिटी, स्टाइल या कहानी ढूँढ सकें।",
  about_2:"हर प्रोफ़ाइल उसके प्लेटफ़ॉर्म के आधिकारिक चैट पेज पर ले जाती है। हम नियमित रूप से लिंक, किरदारों की आधिकारिक जानकारी और हर प्लेटफ़ॉर्म की सुविधाएँ जाँचते हैं, और रेटिंग का तरीका एक अलग पेज पर बताते हैं। कुछ लिंक एफ़िलिएट लिंक हैं: इनसे आपको कोई खर्च नहीं होता और साइट मुफ़्त रहती है।",
  hfaq_t:"अक्सर पूछे जाने वाले सवाल",
  hq1:"{site} क्या है?", ha1:"{k} प्लेटफ़ॉर्म के {n} वयस्क AI चैटबॉट किरदारों की मुफ़्त डायरेक्टरी, {c} कैटेगरी में। हम खुद कोई चैट होस्ट नहीं करते: हर प्रोफ़ाइल आपको आधिकारिक प्लेटफ़ॉर्म पर ले जाती है।",
  hq2:"क्या किरदार असली लोग हैं?", ha2:"नहीं। सभी किरदार काल्पनिक AI हैं जिन्हें वयस्क (18+) दिखाया गया है। अपवाद सिर्फ़ क्रिएटर ट्विन हैं: वयस्क क्रिएटर्स के आधिकारिक AI वर्ज़न, जिन्हें प्लेटफ़ॉर्म ने उनकी सहमति से प्रकाशित किया है।",
  hq3:"क्या यह मुफ़्त है?", ha3:"{site} देखना मुफ़्त है और अकाउंट की ज़रूरत नहीं। ज़्यादातर प्लेटफ़ॉर्म पर सीमाओं के साथ मुफ़्त चैट शुरू की जा सकती है; अनलिमिटेड मैसेज, फ़ोटो, आवाज़ और वीडियो के लिए आम तौर पर सब्सक्रिप्शन या क्रेडिट चाहिए।",
  hq4:"टॉप 10 कैसे चुना जाता है?", ha4:"टॉप 10 संपादकीय टीम का चयन है, जो हर हफ़्ते अपडेट होता है। इसमें लोकप्रिय स्टाइल और नए किरदार दोनों होते हैं। प्लेटफ़ॉर्म इसमें आने के लिए पैसे नहीं देते।",
  hq5:"आप प्लेटफ़ॉर्म को रेटिंग कैसे देते हैं?", ha5:"हम हर प्लेटफ़ॉर्म को बातचीत की गुणवत्ता, मीडिया (फ़ोटो, आवाज़, वीडियो), कीमत, प्राइवेसी और इस्तेमाल में आसानी पर परखते हैं। पूरा तरीका हमारे „हम कैसे रेट करते हैं“ पेज पर है।",
  hq6:"किसी खास तरह का किरदार कैसे ढूँढें?", ha6:"लिस्ट के ऊपर के फ़िल्टर (जेंडर, स्टाइल, मूल, उम्र, बाल, शरीर, प्लेटफ़ॉर्म…), सर्च बार, या {c} कैटेगरी इस्तेमाल करें।",
  rv_t:"हमारी राय", rv_by:"{site} की संपादकीय टीम द्वारा", rv_checked:"{d} को जाँचा गया",
  rv_sum:"{name} {p} पर उपलब्ध एक {style} किरदार है। अच्छा विकल्प, अगर आप ढूँढ रहे हैं: {tags}।",
  rv_real:"रियलिस्टिक", rv_anime:"एनीमे-स्टाइल",
  rv_pros:"खूबियाँ", rv_cons:"कमियाँ",
  pro_img:"AI से बनी फ़ोटो भेज सकती है", pro_voice:"वॉइस मैसेज और कॉल उपलब्ध", pro_video:"माँगने पर AI वीडियो",
  pro_free:"चैट मुफ़्त में शुरू की जा सकती है", pro_creator:"एक वयस्क क्रिएटर का आधिकारिक AI वर्ज़न, उनकी सहमति से",
  pro_tags:"विस्तृत प्रोफ़ाइल: {x} कैटेगरी", pro_bio:"बातचीत शुरू करने के लिए तैयार कहानी",
  con_paid:"अनलिमिटेड मैसेज, फ़ोटो और वीडियो सिर्फ़ सब्सक्रिप्शन या क्रेडिट से",
  con_comm:"कम्युनिटी का बनाया बॉट: गुणवत्ता हर बॉट में अलग हो सकती है",
  con_noimg:"हमारी साइट पर अभी प्रोफ़ाइल फ़ोटो नहीं", con_noage:"प्लेटफ़ॉर्म ने उम्र नहीं बताई",
  cmp_t:"{name} की मिलते-जुलते किरदारों से तुलना", cmp_name:"किरदार", cmp_common:"साझा कैटेगरी", cmp_this:"यह प्रोफ़ाइल",
  m_checked:"आखिरी जाँच"
}
};
for (const l in EXTRA_UI) Object.assign(I18N[l].ui, EXTRA_UI[l]);

/* Platform pages (/platform/<key>), author byline, extra model FAQ (price, leaks). {p} platform, {r} rating, {n} count, {author} */
const EXTRA2_UI = {
en: {
  by_author:"By {author}", rv_by:"By {author}",
  pl_h1:"{p} review and characters", pl_sum:"{p} scores {r}/5 in our ranking. {desc}",
  pl_feat_t:"{p} features", pl_chars_t:"{p} characters", pl_all:"See all {n} {p} characters", pl_none:"We do not list any {p} characters yet.",
  pl_cats_t:"Most common categories on {p}", pl_back:"All platforms", pl_read:"Read our review",
  pl_con_unv:"Prices and terms not yet verified by our team", pl_con_comm:"Community-made characters: quality varies",
  pq1:"Is {p} free?", pa1_yes:"Yes, you can start on {p} for free, with limits. Unlimited messages and media (photos, voice, video) usually need a subscription or credits.",
  pa1_unk:"We have not verified {p}'s free plan yet. Check the current offer on the official site before paying.",
  pq2:"What can you do on {p}?", pa2:"Main features of {p}: {feats}.",
  pq3:"How many {p} characters are listed here?", pa3:"{n} {p} characters are currently listed on {site}, each with a profile page and a direct chat link. The list is updated regularly.",
  pq4:"Is {p} for adults only?", pa4:"Yes. {p} is an adult (18+) platform and every character listed here is presented as an adult.",
  pq5:"How did you rate {p}?", pa5:"We score conversation quality, media (photos, voice, video), price, privacy and ease of use. The weights are explained on our “How we rate” page.",
  fq5:"How much does it cost to chat with {name}?", fa5:"You can start chatting with {name} for free on {p}, with limits. Unlimited messages, photos, voice and video usually need a subscription or credits; current prices are shown on {p}.",
  fq6:"Are there leaked photos of {name}?", fa6:"No. {name} is a fictional AI character: there are no real private photos. Images are generated by {p}. Be careful with sites promising “leaks”: they often spread malware or scams.",
  fa6_c:"We do not share or link to any leaked content. The only official images of {name}'s AI version are the ones published by {p} and the creator herself. Sites promising “leaks” often spread malware or scams."
},
fr: {
  by_author:"Par {author}", rv_by:"Par {author}",
  pl_h1:"{p} : avis et personnages", pl_sum:"{p} obtient {r}/5 dans notre classement. {desc}",
  pl_feat_t:"Fonctionnalités de {p}", pl_chars_t:"Personnages {p}", pl_all:"Voir les {n} personnages {p}", pl_none:"Nous ne référençons pas encore de personnages {p}.",
  pl_cats_t:"Catégories les plus présentes sur {p}", pl_back:"Toutes les plateformes", pl_read:"Lire notre avis",
  pl_con_unv:"Prix et conditions pas encore vérifiés par notre équipe", pl_con_comm:"Personnages créés par la communauté : qualité variable",
  pq1:"{p} est-il gratuit ?", pa1_yes:"Oui, on peut commencer gratuitement sur {p}, avec des limites. Les messages illimités et les médias (photos, voix, vidéo) demandent en général un abonnement ou des crédits.",
  pa1_unk:"Nous n'avons pas encore vérifié l'offre gratuite de {p}. Consulte l'offre actuelle sur le site officiel avant de payer.",
  pq2:"Que peut-on faire sur {p} ?", pa2:"Principales fonctionnalités de {p} : {feats}.",
  pq3:"Combien de personnages {p} sont listés ici ?", pa3:"{n} personnages {p} sont actuellement listés sur {site}, chacun avec une fiche et un lien direct vers le chat. La liste est mise à jour régulièrement.",
  pq4:"{p} est-il réservé aux adultes ?", pa4:"Oui. {p} est une plateforme pour adultes (18+) et tous les personnages listés ici sont présentés comme majeurs.",
  pq5:"Comment avez-vous noté {p} ?", pa5:"Nous notons la qualité des conversations, les médias (photos, voix, vidéo), le prix, la confidentialité et la facilité d'utilisation. Les pondérations sont expliquées sur notre page « Notre méthode ».",
  fq5:"Combien coûte une discussion avec {name} ?", fa5:"Tu peux commencer à discuter avec {name} gratuitement sur {p}, avec des limites. Les messages illimités, les photos, la voix et la vidéo demandent en général un abonnement ou des crédits ; les prix actuels sont affichés sur {p}.",
  fq6:"Existe-t-il des photos « leaks » de {name} ?", fa6:"Non. {name} est un personnage IA fictif : il n'existe pas de vraies photos privées. Les images sont générées par {p}. Méfie-toi des sites qui promettent des « leaks » : ils diffusent souvent des malwares ou des arnaques.",
  fa6_c:"Nous ne partageons ni ne relayons aucun contenu divulgué. Les seules images officielles de la version IA de {name} sont celles publiées par {p} et par la créatrice elle-même. Les sites qui promettent des « leaks » diffusent souvent des malwares ou des arnaques."
},
es: {
  by_author:"Por {author}", rv_by:"Por {author}",
  pl_h1:"{p}: opinión y personajes", pl_sum:"{p} obtiene {r}/5 en nuestro ranking. {desc}",
  pl_feat_t:"Funciones de {p}", pl_chars_t:"Personajes de {p}", pl_all:"Ver los {n} personajes de {p}", pl_none:"Todavía no listamos personajes de {p}.",
  pl_cats_t:"Categorías más presentes en {p}", pl_back:"Todas las plataformas", pl_read:"Leer nuestra opinión",
  pl_con_unv:"Precios y condiciones aún no verificados por nuestro equipo", pl_con_comm:"Personajes creados por la comunidad: calidad variable",
  pq1:"¿{p} es gratis?", pa1_yes:"Sí, puedes empezar gratis en {p}, con límites. Los mensajes ilimitados y los medios (fotos, voz, vídeo) suelen requerir suscripción o créditos.",
  pa1_unk:"Todavía no hemos verificado el plan gratuito de {p}. Consulta la oferta actual en el sitio oficial antes de pagar.",
  pq2:"¿Qué se puede hacer en {p}?", pa2:"Funciones principales de {p}: {feats}.",
  pq3:"¿Cuántos personajes de {p} hay aquí?", pa3:"Actualmente hay {n} personajes de {p} en {site}, cada uno con su ficha y un enlace directo al chat. La lista se actualiza con regularidad.",
  pq4:"¿{p} es solo para adultos?", pa4:"Sí. {p} es una plataforma para adultos (18+) y todos los personajes listados aquí se presentan como adultos.",
  pq5:"¿Cómo habéis puntuado {p}?", pa5:"Puntuamos la calidad de las conversaciones, los medios (fotos, voz, vídeo), el precio, la privacidad y la facilidad de uso. Las ponderaciones se explican en nuestra página «Cómo puntuamos».",
  fq5:"¿Cuánto cuesta chatear con {name}?", fa5:"Puedes empezar a chatear con {name} gratis en {p}, con límites. Los mensajes ilimitados, las fotos, la voz y el vídeo suelen requerir suscripción o créditos; los precios actuales aparecen en {p}.",
  fq6:"¿Hay fotos filtradas (“leaks”) de {name}?", fa6:"No. {name} es un personaje de IA ficticio: no existen fotos privadas reales. Las imágenes las genera {p}. Desconfía de los sitios que prometen “leaks”: a menudo difunden malware o estafas.",
  fa6_c:"No compartimos ni enlazamos ningún contenido filtrado. Las únicas imágenes oficiales de la versión IA de {name} son las publicadas por {p} y por la propia creadora. Los sitios que prometen “leaks” suelen difundir malware o estafas."
},
de: {
  by_author:"Von {author}", rv_by:"Von {author}",
  pl_h1:"{p}: Test und Charaktere", pl_sum:"{p} erreicht {r}/5 in unserem Ranking. {desc}",
  pl_feat_t:"Funktionen von {p}", pl_chars_t:"Charaktere auf {p}", pl_all:"Alle {n} Charaktere auf {p} ansehen", pl_none:"Wir listen noch keine Charaktere von {p}.",
  pl_cats_t:"Häufigste Kategorien auf {p}", pl_back:"Alle Plattformen", pl_read:"Unseren Test lesen",
  pl_con_unv:"Preise und Bedingungen von unserem Team noch nicht geprüft", pl_con_comm:"Von der Community erstellte Charaktere: schwankende Qualität",
  pq1:"Ist {p} kostenlos?", pa1_yes:"Ja, du kannst auf {p} kostenlos starten, mit Einschränkungen. Unbegrenzte Nachrichten und Medien (Fotos, Stimme, Video) erfordern meist ein Abo oder Credits.",
  pa1_unk:"Das kostenlose Angebot von {p} haben wir noch nicht geprüft. Sieh dir das aktuelle Angebot auf der offiziellen Seite an, bevor du zahlst.",
  pq2:"Was kann man auf {p} machen?", pa2:"Die wichtigsten Funktionen von {p}: {feats}.",
  pq3:"Wie viele Charaktere von {p} sind hier gelistet?", pa3:"Derzeit sind {n} Charaktere von {p} auf {site} gelistet, jeweils mit Profilseite und direktem Chat-Link. Die Liste wird regelmäßig aktualisiert.",
  pq4:"Ist {p} nur für Erwachsene?", pa4:"Ja. {p} ist eine Plattform für Erwachsene (18+), und alle hier gelisteten Charaktere werden als volljährig dargestellt.",
  pq5:"Wie habt ihr {p} bewertet?", pa5:"Wir bewerten Gesprächsqualität, Medien (Fotos, Stimme, Video), Preis, Datenschutz und Bedienbarkeit. Die Gewichtung steht auf unserer Seite „So bewerten wir“.",
  fq5:"Was kostet ein Chat mit {name}?", fa5:"Du kannst mit {name} auf {p} kostenlos chatten, mit Einschränkungen. Unbegrenzte Nachrichten, Fotos, Stimme und Video erfordern meist ein Abo oder Credits; die aktuellen Preise stehen auf {p}.",
  fq6:"Gibt es geleakte Fotos von {name}?", fa6:"Nein. {name} ist eine fiktive KI-Figur: Es gibt keine echten privaten Fotos. Die Bilder werden von {p} generiert. Vorsicht bei Seiten, die „Leaks“ versprechen: Sie verbreiten oft Malware oder Betrug.",
  fa6_c:"Wir teilen oder verlinken keine geleakten Inhalte. Die einzigen offiziellen Bilder der KI-Version von {name} sind die von {p} und der Creatorin selbst veröffentlichten. Seiten, die „Leaks“ versprechen, verbreiten oft Malware oder Betrug."
},
pt: {
  by_author:"Por {author}", rv_by:"Por {author}",
  pl_h1:"{p}: avaliação e personagens", pl_sum:"{p} tem nota {r}/5 no nosso ranking. {desc}",
  pl_feat_t:"Recursos do {p}", pl_chars_t:"Personagens do {p}", pl_all:"Ver os {n} personagens do {p}", pl_none:"Ainda não listamos personagens do {p}.",
  pl_cats_t:"Categorias mais presentes no {p}", pl_back:"Todas as plataformas", pl_read:"Ler nossa avaliação",
  pl_con_unv:"Preços e condições ainda não verificados pela nossa equipe", pl_con_comm:"Personagens criados pela comunidade: qualidade variável",
  pq1:"O {p} é grátis?", pa1_yes:"Sim, dá para começar de graça no {p}, com limites. Mensagens ilimitadas e mídia (fotos, voz, vídeo) geralmente exigem assinatura ou créditos.",
  pa1_unk:"Ainda não verificamos o plano gratuito do {p}. Confira a oferta atual no site oficial antes de pagar.",
  pq2:"O que dá para fazer no {p}?", pa2:"Principais recursos do {p}: {feats}.",
  pq3:"Quantos personagens do {p} estão listados aqui?", pa3:"Atualmente há {n} personagens do {p} no {site}, cada um com perfil e link direto para o chat. A lista é atualizada regularmente.",
  pq4:"O {p} é só para adultos?", pa4:"Sim. O {p} é uma plataforma para adultos (18+) e todos os personagens listados aqui são apresentados como adultos.",
  pq5:"Como vocês avaliaram o {p}?", pa5:"Avaliamos a qualidade das conversas, a mídia (fotos, voz, vídeo), o preço, a privacidade e a facilidade de uso. Os pesos estão explicados na nossa página «Como avaliamos».",
  fq5:"Quanto custa conversar com {name}?", fa5:"Você pode começar a conversar com {name} de graça no {p}, com limites. Mensagens ilimitadas, fotos, voz e vídeo geralmente exigem assinatura ou créditos; os preços atuais aparecem no {p}.",
  fq6:"Existem fotos vazadas (“leaks”) de {name}?", fa6:"Não. {name} é um personagem de IA fictício: não existem fotos privadas reais. As imagens são geradas pelo {p}. Cuidado com sites que prometem “leaks”: eles costumam espalhar malware ou golpes.",
  fa6_c:"Não compartilhamos nem divulgamos nenhum conteúdo vazado. As únicas imagens oficiais da versão de IA de {name} são as publicadas pelo {p} e pela própria criadora. Sites que prometem “leaks” costumam espalhar malware ou golpes."
},
hi: {
  by_author:"{author} द्वारा", rv_by:"{author} द्वारा",
  pl_h1:"{p}: रिव्यू और किरदार", pl_sum:"हमारी रैंकिंग में {p} को {r}/5 मिला है। {desc}",
  pl_feat_t:"{p} की सुविधाएँ", pl_chars_t:"{p} के किरदार", pl_all:"{p} के सभी {n} किरदार देखें", pl_none:"हम अभी {p} का कोई किरदार नहीं दिखाते।",
  pl_cats_t:"{p} पर सबसे आम कैटेगरी", pl_back:"सभी प्लेटफ़ॉर्म", pl_read:"हमारा रिव्यू पढ़ें",
  pl_con_unv:"कीमत और शर्तें अभी हमारी टीम ने नहीं जाँचीं", pl_con_comm:"कम्युनिटी के बनाए किरदार: गुणवत्ता अलग-अलग",
  pq1:"क्या {p} मुफ़्त है?", pa1_yes:"हाँ, {p} पर सीमाओं के साथ मुफ़्त शुरुआत की जा सकती है। अनलिमिटेड मैसेज और मीडिया (फ़ोटो, आवाज़, वीडियो) के लिए आम तौर पर सब्सक्रिप्शन या क्रेडिट चाहिए।",
  pa1_unk:"हमने अभी {p} का मुफ़्त प्लान नहीं जाँचा है। पैसे देने से पहले आधिकारिक साइट पर मौजूदा ऑफ़र देखें।",
  pq2:"{p} पर क्या कर सकते हैं?", pa2:"{p} की मुख्य सुविधाएँ: {feats}।",
  pq3:"यहाँ {p} के कितने किरदार हैं?", pa3:"अभी {site} पर {p} के {n} किरदार हैं, हर एक का प्रोफ़ाइल पेज और सीधा चैट लिंक है। लिस्ट नियमित रूप से अपडेट होती है।",
  pq4:"क्या {p} सिर्फ़ वयस्कों के लिए है?", pa4:"हाँ। {p} वयस्कों (18+) का प्लेटफ़ॉर्म है और यहाँ दिखाए गए सभी किरदार वयस्क दिखाए गए हैं।",
  pq5:"आपने {p} को रेटिंग कैसे दी?", pa5:"हम बातचीत की गुणवत्ता, मीडिया (फ़ोटो, आवाज़, वीडियो), कीमत, प्राइवेसी और इस्तेमाल में आसानी को परखते हैं। वेटेज हमारे „हम कैसे रेट करते हैं“ पेज पर है।",
  fq5:"{name} से चैट करने में कितना खर्च आता है?", fa5:"{p} पर {name} से सीमाओं के साथ मुफ़्त चैट शुरू की जा सकती है। अनलिमिटेड मैसेज, फ़ोटो, आवाज़ और वीडियो के लिए आम तौर पर सब्सक्रिप्शन या क्रेडिट चाहिए; मौजूदा कीमतें {p} पर दिखती हैं।",
  fq6:"क्या {name} की लीक फ़ोटो हैं?", fa6:"नहीं। {name} एक काल्पनिक AI किरदार है: कोई असली निजी फ़ोटो नहीं हैं। तस्वीरें {p} बनाता है। „लीक“ का वादा करने वाली साइटों से सावधान रहें: वे अक्सर मैलवेयर या धोखाधड़ी फैलाती हैं।",
  fa6_c:"हम कोई लीक कंटेंट साझा या लिंक नहीं करते। {name} के AI वर्ज़न की आधिकारिक तस्वीरें सिर्फ़ वही हैं जो {p} और खुद क्रिएटर ने प्रकाशित की हैं। „लीक“ का वादा करने वाली साइटें अक्सर मैलवेयर या धोखाधड़ी फैलाती हैं।"
}
};
for (const l in EXTRA2_UI) Object.assign(I18N[l].ui, EXTRA2_UI[l]);

/* Sponsored grid cards, author page, category × platform pages, category FAQ 7–8 */
const EXTRA3_UI = {
en: {
  ad1_t:"Try {p} for free", ad1_d:"Hundreds of characters, with photos, voice and video.", ad1_btn:"Try for free",
  ad2_t:"Create your own AI companion", ad2_d:"Pick the look and the personality in a few clicks on {p}.", ad2_btn:"Create mine",
  author_role:"editor and tester", by_author_r:"By {author}, {role}",
  au_meta_d:"Who writes the reviews on {site} and how characters and platforms are checked.",
  au_intro:"{author} writes the reviews, character profiles and category guides on {site}.",
  au_p1:"For each platform, he checks the advertised features directly on the official site (photos, voice, video, free plan), makes sure the chat links work, and reads each character's official profile before sorting it into categories.",
  au_p2:"Ratings follow the method published on our “How we rate” page. Platforms cannot pay for a better rating or a place in the Top 10.",
  au_reviews:"Platform reviews", au_contact:"Spotted a mistake or have a suggestion? Use the contact page.",
  tpp_h1:"{tag} characters on {p}", tpp_intro:"Discover {n} “{tag}” AI characters available on {p}. {pdesc}",
  tpp_back:"All “{tag}” characters ({total})", tpp_rev:"Our {p} review",
  tpp_q1:"Does {p} have “{tag}” characters?", tpp_a1:"Yes: {n} “{tag}” characters from {p} are listed here, each with a profile page and a direct chat link.",
  tpp_q2:"Where can I find more “{tag}” characters?", tpp_a2:"Our “{tag}” page gathers {total} characters from every platform we list.",
  tq7:"Can I create my own “{tag}” character?", ta7:"Yes. Some platforms, such as Candy AI, let you design your own character: look, personality and scenario. You can then chat with it like with the characters listed here.",
  tq8:"Are my chats with a “{tag}” character private?", ta8:"Chats are stored by the platform, not by {site}. Read the platform's privacy policy, use a separate email address, and avoid sharing personal information in the conversation."
},
fr: {
  ad1_t:"Essaie {p} gratuitement", ad1_d:"Des centaines de personnages, avec photos, voix et vidéo.", ad1_btn:"Essayer gratuitement",
  ad2_t:"Crée ton propre personnage IA", ad2_d:"Choisis son look et sa personnalité en quelques clics sur {p}.", ad2_btn:"Créer le mien",
  author_role:"rédacteur et testeur", by_author_r:"Par {author}, {role}",
  au_meta_d:"Qui rédige les avis de {site} et comment les personnages et les plateformes sont vérifiés.",
  au_intro:"{author} rédige les avis, les fiches personnages et les guides de catégories de {site}.",
  au_p1:"Pour chaque plateforme, il vérifie les fonctionnalités annoncées directement sur le site officiel (photos, voix, vidéo, offre gratuite), contrôle que les liens de chat fonctionnent et lit la fiche officielle de chaque personnage avant de la classer dans les catégories.",
  au_p2:"Les notes suivent la méthode publiée sur notre page « Notre méthode ». Les plateformes ne peuvent pas payer pour obtenir une meilleure note ou une place dans le Top 10.",
  au_reviews:"Avis sur les plateformes", au_contact:"Une erreur ou une suggestion ? Passe par la page Contact.",
  tpp_h1:"Personnages « {tag} » sur {p}", tpp_intro:"Découvre {n} personnages IA « {tag} » disponibles sur {p}. {pdesc}",
  tpp_back:"Tous les personnages « {tag} » ({total})", tpp_rev:"Notre avis sur {p}",
  tpp_q1:"{p} propose-t-il des personnages « {tag} » ?", tpp_a1:"Oui : {n} personnages « {tag} » de {p} sont listés ici, chacun avec une fiche et un lien direct vers le chat.",
  tpp_q2:"Où trouver d'autres personnages « {tag} » ?", tpp_a2:"Notre page « {tag} » regroupe {total} personnages de toutes les plateformes que nous référençons.",
  tq7:"Puis-je créer mon propre personnage « {tag} » ?", ta7:"Oui. Certaines plateformes, comme Candy AI, permettent de créer son propre personnage : look, personnalité et scénario. Tu peux ensuite discuter avec lui comme avec les personnages listés ici.",
  tq8:"Mes conversations avec un personnage « {tag} » sont-elles privées ?", ta8:"Les conversations sont stockées par la plateforme, pas par {site}. Lis la politique de confidentialité de la plateforme, utilise une adresse e-mail dédiée et évite de partager des informations personnelles dans la conversation."
},
es: {
  ad1_t:"Prueba {p} gratis", ad1_d:"Cientos de personajes, con fotos, voz y vídeo.", ad1_btn:"Probar gratis",
  ad2_t:"Crea tu propio personaje de IA", ad2_d:"Elige su aspecto y su personalidad en unos clics en {p}.", ad2_btn:"Crear el mío",
  author_role:"redactor y probador", by_author_r:"Por {author}, {role}",
  au_meta_d:"Quién escribe las opiniones de {site} y cómo se revisan los personajes y las plataformas.",
  au_intro:"{author} escribe las opiniones, las fichas de personajes y las guías de categorías de {site}.",
  au_p1:"En cada plataforma revisa las funciones anunciadas directamente en el sitio oficial (fotos, voz, vídeo, plan gratuito), comprueba que los enlaces de chat funcionan y lee la ficha oficial de cada personaje antes de clasificarlo.",
  au_p2:"Las notas siguen el método publicado en nuestra página «Cómo puntuamos». Las plataformas no pueden pagar por una mejor nota ni por un puesto en el Top 10.",
  au_reviews:"Opiniones sobre plataformas", au_contact:"¿Has visto un error o tienes una sugerencia? Usa la página de contacto.",
  tpp_h1:"Personajes «{tag}» en {p}", tpp_intro:"Descubre {n} personajes de IA «{tag}» disponibles en {p}. {pdesc}",
  tpp_back:"Todos los personajes «{tag}» ({total})", tpp_rev:"Nuestra opinión sobre {p}",
  tpp_q1:"¿{p} tiene personajes «{tag}»?", tpp_a1:"Sí: aquí aparecen {n} personajes «{tag}» de {p}, cada uno con su ficha y un enlace directo al chat.",
  tpp_q2:"¿Dónde encuentro más personajes «{tag}»?", tpp_a2:"Nuestra página «{tag}» reúne {total} personajes de todas las plataformas que listamos.",
  tq7:"¿Puedo crear mi propio personaje «{tag}»?", ta7:"Sí. Algunas plataformas, como Candy AI, permiten diseñar tu propio personaje: aspecto, personalidad y escenario. Después puedes chatear con él como con los personajes de esta lista.",
  tq8:"¿Mis chats con un personaje «{tag}» son privados?", ta8:"Los chats los guarda la plataforma, no {site}. Lee la política de privacidad de la plataforma, usa un correo aparte y evita compartir datos personales en la conversación."
},
de: {
  ad1_t:"{p} kostenlos testen", ad1_d:"Hunderte Charaktere mit Fotos, Stimme und Video.", ad1_btn:"Kostenlos testen",
  ad2_t:"Erstelle deinen eigenen KI-Charakter", ad2_d:"Wähle Aussehen und Persönlichkeit mit wenigen Klicks auf {p}.", ad2_btn:"Meinen erstellen",
  author_role:"Redakteur und Tester", by_author_r:"Von {author}, {role}",
  au_meta_d:"Wer die Tests auf {site} schreibt und wie Charaktere und Plattformen geprüft werden.",
  au_intro:"{author} schreibt die Tests, Charakterprofile und Kategorie-Guides auf {site}.",
  au_p1:"Bei jeder Plattform prüft er die beworbenen Funktionen direkt auf der offiziellen Seite (Fotos, Stimme, Video, Gratis-Angebot), testet, ob die Chat-Links funktionieren, und liest das offizielle Profil jedes Charakters, bevor er ihn einordnet.",
  au_p2:"Die Bewertungen folgen der Methode auf unserer Seite „So bewerten wir“. Plattformen können nicht für eine bessere Note oder einen Platz in der Top 10 bezahlen.",
  au_reviews:"Plattform-Tests", au_contact:"Fehler entdeckt oder einen Vorschlag? Nutze die Kontaktseite.",
  tpp_h1:"{tag}-Charaktere auf {p}", tpp_intro:"Entdecke {n} KI-Charaktere der Kategorie „{tag}“ auf {p}. {pdesc}",
  tpp_back:"Alle „{tag}“-Charaktere ({total})", tpp_rev:"Unser Test zu {p}",
  tpp_q1:"Gibt es auf {p} „{tag}“-Charaktere?", tpp_a1:"Ja: Hier sind {n} „{tag}“-Charaktere von {p} gelistet, jeweils mit Profilseite und direktem Chat-Link.",
  tpp_q2:"Wo finde ich weitere „{tag}“-Charaktere?", tpp_a2:"Unsere Seite „{tag}“ bündelt {total} Charaktere von allen Plattformen, die wir listen.",
  tq7:"Kann ich meinen eigenen „{tag}“-Charakter erstellen?", ta7:"Ja. Einige Plattformen wie Candy AI lassen dich einen eigenen Charakter gestalten: Aussehen, Persönlichkeit und Szenario. Danach chattest du mit ihm wie mit den Charakteren hier.",
  tq8:"Sind meine Chats mit einem „{tag}“-Charakter privat?", ta8:"Die Chats speichert die Plattform, nicht {site}. Lies die Datenschutzerklärung der Plattform, nutze eine eigene E-Mail-Adresse und teile keine persönlichen Daten im Gespräch."
},
pt: {
  ad1_t:"Experimente o {p} grátis", ad1_d:"Centenas de personagens, com fotos, voz e vídeo.", ad1_btn:"Experimentar grátis",
  ad2_t:"Crie seu próprio personagem de IA", ad2_d:"Escolha a aparência e a personalidade em poucos cliques no {p}.", ad2_btn:"Criar o meu",
  author_role:"redator e testador", by_author_r:"Por {author}, {role}",
  au_meta_d:"Quem escreve as avaliações do {site} e como os personagens e as plataformas são verificados.",
  au_intro:"{author} escreve as avaliações, os perfis de personagens e os guias de categorias do {site}.",
  au_p1:"Em cada plataforma, ele verifica os recursos anunciados diretamente no site oficial (fotos, voz, vídeo, plano gratuito), confere se os links de chat funcionam e lê o perfil oficial de cada personagem antes de classificá-lo.",
  au_p2:"As notas seguem o método publicado na nossa página «Como avaliamos». As plataformas não podem pagar por uma nota melhor nem por um lugar no Top 10.",
  au_reviews:"Avaliações de plataformas", au_contact:"Viu um erro ou tem uma sugestão? Use a página de contato.",
  tpp_h1:"Personagens «{tag}» no {p}", tpp_intro:"Descubra {n} personagens de IA «{tag}» disponíveis no {p}. {pdesc}",
  tpp_back:"Todos os personagens «{tag}» ({total})", tpp_rev:"Nossa avaliação do {p}",
  tpp_q1:"O {p} tem personagens «{tag}»?", tpp_a1:"Sim: {n} personagens «{tag}» do {p} estão listados aqui, cada um com perfil e link direto para o chat.",
  tpp_q2:"Onde encontro mais personagens «{tag}»?", tpp_a2:"Nossa página «{tag}» reúne {total} personagens de todas as plataformas que listamos.",
  tq7:"Posso criar meu próprio personagem «{tag}»?", ta7:"Sim. Algumas plataformas, como o Candy AI, permitem criar seu próprio personagem: aparência, personalidade e cenário. Depois você conversa com ele como com os personagens desta lista.",
  tq8:"Minhas conversas com um personagem «{tag}» são privadas?", ta8:"As conversas ficam guardadas na plataforma, não no {site}. Leia a política de privacidade da plataforma, use um e-mail separado e evite compartilhar dados pessoais na conversa."
},
hi: {
  ad1_t:"{p} मुफ़्त में आज़माएँ", ad1_d:"सैकड़ों किरदार, फ़ोटो, आवाज़ और वीडियो के साथ।", ad1_btn:"मुफ़्त आज़माएँ",
  ad2_t:"अपना खुद का AI किरदार बनाएँ", ad2_d:"{p} पर कुछ क्लिक में लुक और पर्सनैलिटी चुनें।", ad2_btn:"मेरा बनाएँ",
  author_role:"संपादक और टेस्टर", by_author_r:"{author} द्वारा, {role}",
  au_meta_d:"{site} पर रिव्यू कौन लिखता है और किरदारों व प्लेटफ़ॉर्म की जाँच कैसे होती है।",
  au_intro:"{author} {site} के रिव्यू, किरदार प्रोफ़ाइल और कैटेगरी गाइड लिखते हैं।",
  au_p1:"हर प्लेटफ़ॉर्म के लिए वे आधिकारिक साइट पर बताई गई सुविधाएँ (फ़ोटो, आवाज़, वीडियो, मुफ़्त प्लान) खुद जाँचते हैं, चैट लिंक काम करते हैं या नहीं देखते हैं, और हर किरदार की आधिकारिक प्रोफ़ाइल पढ़कर ही उसे कैटेगरी में रखते हैं।",
  au_p2:"रेटिंग हमारे „हम कैसे रेट करते हैं“ पेज पर बताए तरीके से दी जाती है। प्लेटफ़ॉर्म बेहतर रेटिंग या टॉप 10 में जगह के लिए पैसे नहीं दे सकते।",
  au_reviews:"प्लेटफ़ॉर्म रिव्यू", au_contact:"कोई गलती दिखी या सुझाव है? संपर्क पेज इस्तेमाल करें।",
  tpp_h1:"{p} पर „{tag}“ किरदार", tpp_intro:"{p} पर उपलब्ध „{tag}“ कैटेगरी के {n} AI किरदार देखें। {pdesc}",
  tpp_back:"सभी „{tag}“ किरदार ({total})", tpp_rev:"{p} का हमारा रिव्यू",
  tpp_q1:"क्या {p} पर „{tag}“ किरदार हैं?", tpp_a1:"हाँ: {p} के {n} „{tag}“ किरदार यहाँ हैं, हर एक का प्रोफ़ाइल पेज और सीधा चैट लिंक है।",
  tpp_q2:"और „{tag}“ किरदार कहाँ मिलेंगे?", tpp_a2:"हमारा „{tag}“ पेज हमारे सभी प्लेटफ़ॉर्म के {total} किरदार एक जगह दिखाता है।",
  tq7:"क्या मैं अपना खुद का „{tag}“ किरदार बना सकता हूँ?", ta7:"हाँ। Candy AI जैसे कुछ प्लेटफ़ॉर्म पर आप अपना किरदार बना सकते हैं: लुक, पर्सनैलिटी और कहानी। फिर उससे यहाँ के किरदारों की तरह चैट कर सकते हैं।",
  tq8:"क्या „{tag}“ किरदार से मेरी चैट निजी है?", ta8:"चैट प्लेटफ़ॉर्म पर सेव होती है, {site} पर नहीं। प्लेटफ़ॉर्म की प्राइवेसी पॉलिसी पढ़ें, अलग ईमेल इस्तेमाल करें और बातचीत में निजी जानकारी साझा न करें।"
}
};
for (const l in EXTRA3_UI) Object.assign(I18N[l].ui, EXTRA3_UI[l]);

/* SEO titles, age gate, 404, breadcrumbs, video badge */
const EXTRA4_UI = {
en: {
  model_t:"{name}{agep} – NSFW AI chat on {p}", age_sfx:", {age}",
  tag_t2:"{tag} AI Sex Chat: {n} NSFW Chatbots", tag_d2:"Sex chat with {n} “{tag}” AI chatbots. Compare the characters by platform, free messages, photos and video, then start chatting. 18+ only.",
  gate_text:"This site is a directory of AI companion services for adults. It contains adult themes and imagery.",
  gate_text2:"By continuing, you confirm that you are at least 18 years old (or the age of majority where you live), that viewing adult content is legal in your country, and that you are doing so of your own free will.",
  gate_enter:"I am 18 or older, continue", gate_leave:"I am under 18, leave",
  gate_parents:"Parents: use parental-control software to block access to adult sites on devices minors can use. This site is labelled RTA (Restricted To Adults).",
  gate_accept:"By continuing you also accept our {terms} and {privacy}.",
  nf_t:"Page not found", nf_d:"This page does not exist or has moved. Here are a few ways back:", nf_home:"Browse all characters",
  bc_home:"Home", video_badge:"Video"
},
fr: {
  model_t:"{name}{agep} – Chat IA NSFW sur {p}", age_sfx:", {age} ans",
  tag_t2:"Chat sexe IA {tag} : {n} chatbots NSFW", tag_d2:"Chat sexe avec {n} chatbots IA « {tag} ». Compare les personnages par plateforme, messages gratuits, photos et vidéo, puis lance la discussion. Réservé aux 18+.",
  gate_text:"Ce site est un annuaire de services de compagnons IA pour adultes. Il contient des thèmes et des images pour adultes.",
  gate_text2:"En continuant, tu confirmes avoir au moins 18 ans (ou l'âge de la majorité là où tu vis), que la consultation de contenus pour adultes est légale dans ton pays, et que tu le fais de ton plein gré.",
  gate_enter:"J'ai 18 ans ou plus, continuer", gate_leave:"J'ai moins de 18 ans, quitter",
  gate_parents:"Parents : utilisez un logiciel de contrôle parental pour bloquer les sites pour adultes sur les appareils accessibles aux mineurs. Ce site porte le label RTA (Restricted To Adults).",
  gate_accept:"En continuant, tu acceptes aussi nos {terms} et notre {privacy}.",
  nf_t:"Page introuvable", nf_d:"Cette page n'existe pas ou a été déplacée. Voici quelques pistes pour repartir :", nf_home:"Voir tous les personnages",
  bc_home:"Accueil", video_badge:"Vidéo"
},
es: {
  model_t:"{name}{agep} – Chat IA NSFW en {p}", age_sfx:", {age} años",
  tag_t2:"Chat sexual IA {tag}: {n} chatbots NSFW", tag_d2:"Chat sexual con {n} chatbots de IA «{tag}». Compara los personajes por plataforma, mensajes gratis, fotos y vídeo, y empieza a chatear. Solo 18+.",
  gate_text:"Este sitio es un directorio de servicios de compañía con IA para adultos. Contiene temas e imágenes para adultos.",
  gate_text2:"Al continuar, confirmas que tienes al menos 18 años (o la mayoría de edad donde vives), que ver contenido para adultos es legal en tu país y que lo haces por voluntad propia.",
  gate_enter:"Tengo 18 años o más, continuar", gate_leave:"Tengo menos de 18, salir",
  gate_parents:"Padres: usad un software de control parental para bloquear los sitios para adultos en los dispositivos que usan menores. Este sitio lleva la etiqueta RTA (Restricted To Adults).",
  gate_accept:"Al continuar, aceptas también nuestros {terms} y nuestra {privacy}.",
  nf_t:"Página no encontrada", nf_d:"Esta página no existe o se ha movido. Algunas opciones para volver:", nf_home:"Ver todos los personajes",
  bc_home:"Inicio", video_badge:"Vídeo"
},
de: {
  model_t:"{name}{agep} – NSFW-KI-Chat auf {p}", age_sfx:", {age}",
  tag_t2:"{tag} KI-Sexchat: {n} NSFW-Chatbots", tag_d2:"Sexchat mit {n} KI-Chatbots der Kategorie „{tag}“. Vergleiche die Charaktere nach Plattform, Gratis-Nachrichten, Fotos und Video und starte den Chat. Ab 18.",
  gate_text:"Diese Seite ist ein Verzeichnis von KI-Begleitdiensten für Erwachsene. Sie enthält Themen und Bilder für Erwachsene.",
  gate_text2:"Mit dem Fortfahren bestätigst du, dass du mindestens 18 Jahre alt bist (oder volljährig an deinem Wohnort), dass das Ansehen von Inhalten für Erwachsene in deinem Land legal ist und dass du das freiwillig tust.",
  gate_enter:"Ich bin 18 oder älter, weiter", gate_leave:"Ich bin unter 18, verlassen",
  gate_parents:"Eltern: Nutzen Sie eine Jugendschutz-Software, um Seiten für Erwachsene auf Geräten zu sperren, die Minderjährige nutzen. Diese Seite trägt das RTA-Label (Restricted To Adults).",
  gate_accept:"Mit dem Fortfahren akzeptierst du auch unsere {terms} und unsere {privacy}.",
  nf_t:"Seite nicht gefunden", nf_d:"Diese Seite existiert nicht oder wurde verschoben. Hier geht es weiter:", nf_home:"Alle Charaktere ansehen",
  bc_home:"Startseite", video_badge:"Video"
},
pt: {
  model_t:"{name}{agep} – Chat IA NSFW no {p}", age_sfx:", {age} anos",
  tag_t2:"Chat de sexo IA {tag}: {n} chatbots NSFW", tag_d2:"Chat de sexo com {n} chatbots de IA «{tag}». Compare os personagens por plataforma, mensagens grátis, fotos e vídeo, e comece a conversar. Somente 18+.",
  gate_text:"Este site é um diretório de serviços de companhia com IA para adultos. Contém temas e imagens para adultos.",
  gate_text2:"Ao continuar, você confirma que tem pelo menos 18 anos (ou a maioridade onde mora), que ver conteúdo adulto é legal no seu país e que faz isso por vontade própria.",
  gate_enter:"Tenho 18 anos ou mais, continuar", gate_leave:"Tenho menos de 18, sair",
  gate_parents:"Pais: usem um software de controle parental para bloquear sites adultos nos dispositivos que menores usam. Este site tem o selo RTA (Restricted To Adults).",
  gate_accept:"Ao continuar, você também aceita nossos {terms} e nossa {privacy}.",
  nf_t:"Página não encontrada", nf_d:"Esta página não existe ou mudou de lugar. Algumas opções para voltar:", nf_home:"Ver todos os personagens",
  bc_home:"Início", video_badge:"Vídeo"
},
hi: {
  model_t:"{name}{agep} – {p} पर NSFW AI चैट", age_sfx:", {age}",
  tag_t2:"{tag} AI सेक्स चैट: {n} NSFW चैटबॉट", tag_d2:"„{tag}“ कैटेगरी के {n} AI चैटबॉट के साथ सेक्स चैट। प्लेटफ़ॉर्म, मुफ़्त मैसेज, फ़ोटो और वीडियो के हिसाब से किरदारों की तुलना करें और चैट शुरू करें। केवल 18+।",
  gate_text:"यह साइट वयस्कों के लिए AI साथी सेवाओं की डायरेक्टरी है। इसमें वयस्क विषय और तस्वीरें हैं।",
  gate_text2:"आगे बढ़कर आप पुष्टि करते हैं कि आपकी उम्र कम से कम 18 साल है (या आपके यहाँ की बालिग उम्र), आपके देश में वयस्क सामग्री देखना कानूनी है, और आप यह अपनी मर्ज़ी से कर रहे हैं।",
  gate_enter:"मेरी उम्र 18 या ज़्यादा है, आगे बढ़ें", gate_leave:"मेरी उम्र 18 से कम है, बाहर जाएँ",
  gate_parents:"माता-पिता: नाबालिगों के इस्तेमाल वाले डिवाइस पर वयस्क साइटें ब्लॉक करने के लिए पैरेंटल-कंट्रोल सॉफ़्टवेयर इस्तेमाल करें। इस साइट पर RTA (Restricted To Adults) लेबल है।",
  gate_accept:"आगे बढ़कर आप हमारी {terms} और {privacy} भी स्वीकार करते हैं।",
  nf_t:"पेज नहीं मिला", nf_d:"यह पेज मौजूद नहीं है या हट गया है। वापस जाने के कुछ रास्ते:", nf_home:"सभी किरदार देखें",
  bc_home:"होम", video_badge:"वीडियो"
}
};
for (const l in EXTRA4_UI) Object.assign(I18N[l].ui, EXTRA4_UI[l]);

/* Contact page (email only) */
const CONTACT2_UI = {
en: { ct_mail_t:"Write to us", ct_btn:"Send an email", ct_about:"You can write to us about:", ct_reply:"We usually reply within a few days.",
      ct_not:"{site} is a directory: we cannot access, cancel or refund your account on a platform, recover your password or settle a dispute with it. For anything about your account, contact the platform directly." },
fr: { ct_mail_t:"Écris-nous", ct_btn:"Envoyer un e-mail", ct_about:"Tu peux nous écrire au sujet de :", ct_reply:"Nous répondons en général sous quelques jours.",
      ct_not:"{site} est un annuaire : nous ne pouvons pas accéder à ton compte sur une plateforme, l'annuler, le rembourser, récupérer ton mot de passe ni intervenir dans un litige. Pour tout ce qui concerne ton compte, contacte directement la plateforme." },
es: { ct_mail_t:"Escríbenos", ct_btn:"Enviar un correo", ct_about:"Puedes escribirnos sobre:", ct_reply:"Solemos responder en unos días.",
      ct_not:"{site} es un directorio: no podemos acceder a tu cuenta en una plataforma, cancelarla, reembolsarla, recuperar tu contraseña ni intervenir en una disputa. Para todo lo relacionado con tu cuenta, contacta directamente con la plataforma." },
de: { ct_mail_t:"Schreib uns", ct_btn:"E-Mail senden", ct_about:"Du kannst uns schreiben zu:", ct_reply:"Wir antworten meist innerhalb weniger Tage.",
      ct_not:"{site} ist ein Verzeichnis: Wir können nicht auf dein Konto bei einer Plattform zugreifen, es kündigen, erstatten, dein Passwort wiederherstellen oder in einen Streit eingreifen. Wende dich bei Fragen zu deinem Konto direkt an die Plattform." },
pt: { ct_mail_t:"Escreva para nós", ct_btn:"Enviar um e-mail", ct_about:"Você pode nos escrever sobre:", ct_reply:"Normalmente respondemos em poucos dias.",
      ct_not:"O {site} é um diretório: não podemos acessar, cancelar ou reembolsar sua conta numa plataforma, recuperar sua senha nem intervir numa disputa. Para tudo sobre sua conta, fale diretamente com a plataforma." },
hi: { ct_mail_t:"हमें लिखें", ct_btn:"ईमेल भेजें", ct_about:"आप हमें इन बारे में लिख सकते हैं:", ct_reply:"हम आम तौर पर कुछ दिनों में जवाब देते हैं।",
      ct_not:"{site} एक डायरेक्टरी है: हम किसी प्लेटफ़ॉर्म पर आपके अकाउंट को खोल, रद्द या रिफ़ंड नहीं कर सकते, पासवर्ड वापस नहीं ला सकते और किसी विवाद में दखल नहीं दे सकते। अकाउंट से जुड़ी हर बात के लिए सीधे प्लेटफ़ॉर्म से संपर्क करें।" }
};
for (const l in CONTACT2_UI) Object.assign(I18N[l].ui, CONTACT2_UI[l]);

/* Scoring method (How we rate) + data table columns */
const SCORE_UI = {
en: { sc_intro:"Every score is calculated from verifiable facts taken from each platform's own public pages. No part of a score is a gut feeling, and none of it can be bought.",
  sc_free_t:"Free access (20%)", sc_free:"Unlimited free chat: 10. Confirmed free start: 7. No free option: 2. Not verified: 5.",
  sc_price_t:"Price (25%)", sc_price:"Average of two scores: the month-to-month price and the lowest monthly price on a longer plan. 10 points up to 4 €/$ a month, then 0.35 points less per €/$ above that (minimum 2). Price not shown publicly: 5.",
  sc_feat_t:"Features (35%)", sc_feat:"2 base points, then up to 8 points for six features: images, voice messages, calls, video, group chat and a mobile app.",
  sc_priv_t:"Privacy & payments (20%)", sc_priv:"2 base points, +4 if the name on your bank statement is discreet, +2 if crypto is accepted, +1 for Apple Pay or Google Pay, +1 for PayPal.",
  sc_half:"A fact we could not verify counts half. The final score is the weighted average out of 10, divided by 2 (score out of 5), rounded to one decimal. Ties are broken by the lower price.",
  sc_chat_t:"What about conversation quality?", sc_chat:"It is not in the score yet: it needs a hands-on test on a real account (what is allowed on the free plan, memory, reply speed). We will add it for every platform at the same time once those tests are done.",
  sc_table_t:"Score breakdown", col_free_s:"Free", col_price_s:"Price", col_feat_s:"Features", col_priv_s:"Privacy", col_total:"Score /5",
  sc_aff:"Affiliate links never enter the calculation: the formula has no input for them.",
  col_calls:"Calls", col_group:"Group chat", col_discreet:"Discreet billing", col_crypto:"Crypto", px_mo:"{x}/month", px_best:"{x}/month (long plan)", px_unl:"Unlimited" },
fr: { sc_intro:"Chaque note est calculée à partir de faits vérifiables, relevés sur les pages publiques de chaque plateforme. Aucune partie de la note n'est une impression, et aucune ne peut être achetée.",
  sc_free_t:"Accès gratuit (20 %)", sc_free:"Chat gratuit illimité : 10. Début gratuit confirmé : 7. Aucune offre gratuite : 2. Non vérifié : 5.",
  sc_price_t:"Prix (25 %)", sc_price:"Moyenne de deux notes : le prix au mois et le prix mensuel le plus bas sur un abonnement long. 10 points jusqu'à 4 €/$ par mois, puis 0,35 point de moins par €/$ au-delà (minimum 2). Prix non affiché publiquement : 5.",
  sc_feat_t:"Fonctionnalités (35 %)", sc_feat:"2 points de base, puis jusqu'à 8 points pour six fonctionnalités : images, messages vocaux, appels, vidéo, chat de groupe et appli mobile.",
  sc_priv_t:"Confidentialité et paiement (20 %)", sc_priv:"2 points de base, +4 si le nom sur le relevé bancaire est discret, +2 si la crypto est acceptée, +1 pour Apple Pay ou Google Pay, +1 pour PayPal.",
  sc_half:"Un fait que nous n'avons pas pu vérifier compte pour moitié. La note finale est la moyenne pondérée sur 10, divisée par 2 (note sur 5), arrondie au dixième. En cas d'égalité, le prix le plus bas passe devant.",
  sc_chat_t:"Et la qualité des conversations ?", sc_chat:"Elle n'est pas encore dans la note : il faut un test sur un vrai compte (ce qui est permis en gratuit, mémoire, vitesse de réponse). Nous l'ajouterons pour toutes les plateformes en même temps, dès que ces tests seront faits.",
  sc_table_t:"Le détail des notes", col_free_s:"Gratuit", col_price_s:"Prix", col_feat_s:"Fonctionnalités", col_priv_s:"Confidentialité", col_total:"Note /5",
  sc_aff:"Les liens affiliés n'entrent jamais dans le calcul : la formule n'a aucune donnée pour ça.",
  col_calls:"Appels", col_group:"Chat de groupe", col_discreet:"Facturation discrète", col_crypto:"Crypto", px_mo:"{x}/mois", px_best:"{x}/mois (abonnement long)", px_unl:"Illimité" },
es: { sc_intro:"Cada nota se calcula con datos verificables tomados de las páginas públicas de cada plataforma. Ninguna parte de la nota es una impresión y ninguna se puede comprar.",
  sc_free_t:"Acceso gratis (20 %)", sc_free:"Chat gratis ilimitado: 10. Inicio gratis confirmado: 7. Sin opción gratis: 2. No verificado: 5.",
  sc_price_t:"Precio (25 %)", sc_price:"Media de dos notas: el precio mes a mes y el precio mensual más bajo en un plan largo. 10 puntos hasta 4 €/$ al mes, luego 0,35 puntos menos por cada €/$ de más (mínimo 2). Precio no publicado: 5.",
  sc_feat_t:"Funciones (35 %)", sc_feat:"2 puntos de base y hasta 8 puntos por seis funciones: imágenes, mensajes de voz, llamadas, vídeo, chat de grupo y app móvil.",
  sc_priv_t:"Privacidad y pagos (20 %)", sc_priv:"2 puntos de base, +4 si el nombre en el extracto bancario es discreto, +2 si se acepta cripto, +1 por Apple Pay o Google Pay, +1 por PayPal.",
  sc_half:"Un dato que no hemos podido verificar cuenta la mitad. La nota final es la media ponderada sobre 10, dividida entre 2 (nota sobre 5), redondeada a un decimal. En caso de empate gana el precio más bajo.",
  sc_chat_t:"¿Y la calidad de las conversaciones?", sc_chat:"Todavía no está en la nota: requiere una prueba con una cuenta real (qué se permite gratis, memoria, velocidad de respuesta). La añadiremos para todas las plataformas a la vez en cuanto hagamos esas pruebas.",
  sc_table_t:"Detalle de las notas", col_free_s:"Gratis", col_price_s:"Precio", col_feat_s:"Funciones", col_priv_s:"Privacidad", col_total:"Nota /5",
  sc_aff:"Los enlaces de afiliado nunca entran en el cálculo: la fórmula no tiene ningún dato para ellos.",
  col_calls:"Llamadas", col_group:"Chat de grupo", col_discreet:"Cobro discreto", col_crypto:"Cripto", px_mo:"{x}/mes", px_best:"{x}/mes (plan largo)", px_unl:"Ilimitado" },
de: { sc_intro:"Jede Bewertung wird aus überprüfbaren Fakten berechnet, die von den öffentlichen Seiten der Plattformen stammen. Kein Teil der Bewertung ist ein Bauchgefühl, und keiner ist käuflich.",
  sc_free_t:"Gratis-Zugang (20 %)", sc_free:"Unbegrenzter Gratis-Chat: 10. Bestätigter Gratis-Start: 7. Kein Gratis-Angebot: 2. Nicht geprüft: 5.",
  sc_price_t:"Preis (25 %)", sc_price:"Mittelwert aus zwei Werten: dem Monatspreis und dem niedrigsten Monatspreis bei längerer Laufzeit. 10 Punkte bis 4 €/$ im Monat, danach 0,35 Punkte weniger pro €/$ darüber (mindestens 2). Preis nicht öffentlich: 5.",
  sc_feat_t:"Funktionen (35 %)", sc_feat:"2 Grundpunkte, dazu bis zu 8 Punkte für sechs Funktionen: Bilder, Sprachnachrichten, Anrufe, Video, Gruppenchat und mobile App.",
  sc_priv_t:"Datenschutz & Zahlung (20 %)", sc_priv:"2 Grundpunkte, +4 bei diskretem Namen auf dem Kontoauszug, +2 wenn Krypto akzeptiert wird, +1 für Apple Pay oder Google Pay, +1 für PayPal.",
  sc_half:"Ein Fakt, den wir nicht prüfen konnten, zählt zur Hälfte. Die Endnote ist der gewichtete Mittelwert von 10, geteilt durch 2 (Note von 5), auf eine Stelle gerundet. Bei Gleichstand liegt der niedrigere Preis vorn.",
  sc_chat_t:"Und die Gesprächsqualität?", sc_chat:"Sie ist noch nicht in der Note: Dafür braucht es einen Test mit echtem Konto (was gratis erlaubt ist, Gedächtnis, Antwortzeit). Wir nehmen sie für alle Plattformen gleichzeitig auf, sobald diese Tests gemacht sind.",
  sc_table_t:"Aufschlüsselung der Noten", col_free_s:"Gratis", col_price_s:"Preis", col_feat_s:"Funktionen", col_priv_s:"Datenschutz", col_total:"Note /5",
  sc_aff:"Affiliate-Links fließen nie in die Berechnung ein: Die Formel hat dafür keinen Wert.",
  col_calls:"Anrufe", col_group:"Gruppenchat", col_discreet:"Diskrete Abrechnung", col_crypto:"Krypto", px_mo:"{x}/Monat", px_best:"{x}/Monat (lange Laufzeit)", px_unl:"Unbegrenzt" },
pt: { sc_intro:"Cada nota é calculada a partir de fatos verificáveis, tirados das páginas públicas de cada plataforma. Nenhuma parte da nota é impressão pessoal, e nenhuma pode ser comprada.",
  sc_free_t:"Acesso grátis (20%)", sc_free:"Chat grátis ilimitado: 10. Início grátis confirmado: 7. Sem opção grátis: 2. Não verificado: 5.",
  sc_price_t:"Preço (25%)", sc_price:"Média de duas notas: o preço mensal e o menor preço mensal num plano longo. 10 pontos até 4 €/$ por mês, depois 0,35 ponto a menos por €/$ acima disso (mínimo 2). Preço não divulgado: 5.",
  sc_feat_t:"Recursos (35%)", sc_feat:"2 pontos de base e até 8 pontos por seis recursos: imagens, mensagens de voz, chamadas, vídeo, chat em grupo e app móvel.",
  sc_priv_t:"Privacidade e pagamento (20%)", sc_priv:"2 pontos de base, +4 se o nome na fatura do banco for discreto, +2 se aceitar cripto, +1 por Apple Pay ou Google Pay, +1 por PayPal.",
  sc_half:"Um fato que não conseguimos verificar conta pela metade. A nota final é a média ponderada sobre 10, dividida por 2 (nota sobre 5), arredondada a uma casa. Em caso de empate, o menor preço fica na frente.",
  sc_chat_t:"E a qualidade das conversas?", sc_chat:"Ainda não entra na nota: exige um teste com uma conta real (o que é permitido no plano grátis, memória, velocidade de resposta). Vamos incluí-la para todas as plataformas ao mesmo tempo assim que esses testes forem feitos.",
  sc_table_t:"Detalhe das notas", col_free_s:"Grátis", col_price_s:"Preço", col_feat_s:"Recursos", col_priv_s:"Privacidade", col_total:"Nota /5",
  sc_aff:"Links de afiliado nunca entram no cálculo: a fórmula não tem nenhum dado para isso.",
  col_calls:"Chamadas", col_group:"Chat em grupo", col_discreet:"Cobrança discreta", col_crypto:"Cripto", px_mo:"{x}/mês", px_best:"{x}/mês (plano longo)", px_unl:"Ilimitado" },
hi: { sc_intro:"हर स्कोर हर प्लेटफ़ॉर्म के अपने सार्वजनिक पेजों से लिए गए जाँचे जा सकने वाले तथ्यों से निकाला जाता है। स्कोर का कोई हिस्सा अंदाज़ा नहीं है, और कोई हिस्सा ख़रीदा नहीं जा सकता।",
  sc_free_t:"मुफ़्त एक्सेस (20%)", sc_free:"अनलिमिटेड मुफ़्त चैट: 10। मुफ़्त शुरुआत पक्की: 7। कोई मुफ़्त विकल्प नहीं: 2। जाँचा नहीं गया: 5।",
  sc_price_t:"कीमत (25%)", sc_price:"दो स्कोर का औसत: मासिक कीमत और लंबे प्लान पर सबसे कम मासिक कीमत। 4 €/$ प्रति माह तक 10 अंक, उसके ऊपर हर €/$ पर 0.35 अंक कम (कम से कम 2)। कीमत सार्वजनिक नहीं: 5।",
  sc_feat_t:"सुविधाएँ (35%)", sc_feat:"2 बेस अंक, फिर छह सुविधाओं के लिए 8 अंक तक: इमेज, वॉइस मैसेज, कॉल, वीडियो, ग्रुप चैट और मोबाइल ऐप।",
  sc_priv_t:"प्राइवेसी और भुगतान (20%)", sc_priv:"2 बेस अंक, बैंक स्टेटमेंट पर नाम गोपनीय हो तो +4, क्रिप्टो चलता हो तो +2, Apple Pay या Google Pay के लिए +1, PayPal के लिए +1।",
  sc_half:"जो तथ्य हम नहीं जाँच पाए, वह आधा गिना जाता है। अंतिम स्कोर 10 में से भारित औसत को 2 से भाग देकर (5 में से) एक दशमलव तक निकाला जाता है। बराबरी होने पर कम कीमत आगे रहती है।",
  sc_chat_t:"और बातचीत की गुणवत्ता?", sc_chat:"यह अभी स्कोर में नहीं है: इसके लिए असली अकाउंट पर टेस्ट चाहिए (मुफ़्त में क्या मिलता है, याददाश्त, जवाब की रफ़्तार)। टेस्ट होते ही हम इसे सभी प्लेटफ़ॉर्म के लिए एक साथ जोड़ेंगे।",
  sc_table_t:"स्कोर का ब्योरा", col_free_s:"मुफ़्त", col_price_s:"कीमत", col_feat_s:"सुविधाएँ", col_priv_s:"प्राइवेसी", col_total:"स्कोर /5",
  sc_aff:"एफ़िलिएट लिंक कभी गणना में नहीं आते: फ़ॉर्मूले में उनके लिए कोई डेटा नहीं है।",
  col_calls:"कॉल", col_group:"ग्रुप चैट", col_discreet:"गोपनीय बिलिंग", col_crypto:"क्रिप्टो", px_mo:"{x}/माह", px_best:"{x}/माह (लंबा प्लान)", px_unl:"अनलिमिटेड" }
};
for (const l in SCORE_UI) Object.assign(I18N[l].ui, SCORE_UI[l]);

/* ---------- current offer banner (OFFER in data.js) ---------- */
const OFFER_UI = {
en: { of_bar_s:"{p}: up to -{pct}% on Premium", of_bar:"{p}: up to -{pct}% on Premium for new members", of_bar2:"· {price}/month instead of {reg} on the yearly plan", of_btn:"Get the offer",
  of_box_t:"Current offer: up to -{pct}% on {p} Premium", of_box:"New members pay {price} a month on the 12-month plan, instead of {reg} month to month. No code needed: the discount is applied on {p}'s subscription page.",
  of_note:"Offer seen on {p}'s site on {d}. Limited-time offers change often: the final price is the one shown before you pay.",
  of_pop_t:"Up to -{pct}% on {p} Premium", of_pop:"Limited offer for new members: {price}/month on the yearly plan instead of {reg}. Free to try first." },
fr: { of_bar_s:"{p} : jusqu'à -{pct} % sur Premium", of_bar:"{p} : jusqu'à -{pct} % sur Premium pour les nouveaux membres", of_bar2:"· {price}/mois au lieu de {reg} avec l'abonnement annuel", of_btn:"Profiter de l'offre",
  of_box_t:"Offre en cours : jusqu'à -{pct} % sur {p} Premium", of_box:"Les nouveaux membres paient {price} par mois avec l'abonnement de 12 mois, au lieu de {reg} au mois. Aucun code à saisir : la réduction est appliquée sur la page d'abonnement de {p}.",
  of_note:"Offre constatée sur le site de {p} le {d}. Les offres limitées changent souvent : le prix final est celui affiché avant le paiement.",
  of_pop_t:"Jusqu'à -{pct} % sur {p} Premium", of_pop:"Offre limitée pour les nouveaux membres : {price}/mois avec l'abonnement annuel au lieu de {reg}. Essai gratuit d'abord." },
es: { of_bar_s:"{p}: hasta -{pct} % en Premium", of_bar:"{p}: hasta -{pct} % en Premium para nuevos miembros", of_bar2:"· {price}/mes en lugar de {reg} con el plan anual", of_btn:"Ver la oferta",
  of_box_t:"Oferta actual: hasta -{pct} % en {p} Premium", of_box:"Los nuevos miembros pagan {price} al mes con el plan de 12 meses, en lugar de {reg} mes a mes. Sin código: el descuento se aplica en la página de suscripción de {p}.",
  of_note:"Oferta vista en el sitio de {p} el {d}. Las ofertas limitadas cambian a menudo: el precio final es el que se muestra antes de pagar.",
  of_pop_t:"Hasta -{pct} % en {p} Premium", of_pop:"Oferta limitada para nuevos miembros: {price}/mes con el plan anual en lugar de {reg}. Pruébalo gratis primero." },
de: { of_bar_s:"{p}: bis zu -{pct} % auf Premium", of_bar:"{p}: bis zu -{pct} % auf Premium für neue Mitglieder", of_bar2:"· {price}/Monat statt {reg} im Jahresabo", of_btn:"Zum Angebot",
  of_box_t:"Aktuelles Angebot: bis zu -{pct} % auf {p} Premium", of_box:"Neue Mitglieder zahlen im 12-Monats-Abo {price} pro Monat statt {reg} monatlich. Kein Code nötig: Der Rabatt wird auf der Abo-Seite von {p} angewendet.",
  of_note:"Angebot am {d} auf der Website von {p} gesehen. Befristete Angebote ändern sich oft: Es gilt der Preis, der vor der Zahlung angezeigt wird.",
  of_pop_t:"Bis zu -{pct} % auf {p} Premium", of_pop:"Befristetes Angebot für neue Mitglieder: {price}/Monat im Jahresabo statt {reg}. Vorher kostenlos testen." },
pt: { of_bar_s:"{p}: até -{pct}% no Premium", of_bar:"{p}: até -{pct}% no Premium para novos membros", of_bar2:"· {price}/mês em vez de {reg} no plano anual", of_btn:"Ver a oferta",
  of_box_t:"Oferta atual: até -{pct}% no {p} Premium", of_box:"Novos membros pagam {price} por mês no plano de 12 meses, em vez de {reg} mês a mês. Sem código: o desconto é aplicado na página de assinatura do {p}.",
  of_note:"Oferta vista no site do {p} em {d}. Ofertas limitadas mudam com frequência: o preço final é o exibido antes do pagamento.",
  of_pop_t:"Até -{pct}% no {p} Premium", of_pop:"Oferta limitada para novos membros: {price}/mês no plano anual em vez de {reg}. Teste grátis primeiro." },
hi: { of_bar_s:"{p}: Premium पर -{pct}% तक छूट", of_bar:"{p}: नए सदस्यों के लिए Premium पर -{pct}% तक की छूट", of_bar2:"· सालाना प्लान पर {reg} की जगह {price}/महीना", of_btn:"ऑफ़र देखें",
  of_box_t:"मौजूदा ऑफ़र: {p} Premium पर -{pct}% तक की छूट", of_box:"नए सदस्य 12 महीने के प्लान पर {reg} मासिक की जगह {price} प्रति माह देते हैं। कोई कोड नहीं चाहिए: छूट {p} के सब्सक्रिप्शन पेज पर लागू होती है।",
  of_note:"यह ऑफ़र {d} को {p} की साइट पर देखा गया। सीमित ऑफ़र अक्सर बदलते हैं: अंतिम कीमत वही है जो भुगतान से पहले दिखाई जाती है।",
  of_pop_t:"{p} Premium पर -{pct}% तक की छूट", of_pop:"नए सदस्यों के लिए सीमित ऑफ़र: सालाना प्लान पर {reg} की जगह {price}/महीना। पहले मुफ़्त में आज़माएँ।" }
};
for (const l in OFFER_UI) Object.assign(I18N[l].ui, OFFER_UI[l]);

/* mobile menu button */
const MENU_UI = { en:"Menu", fr:"Menu", es:"Menú", de:"Menü", pt:"Menu", hi:"मेन्यू" };
for (const l in MENU_UI) I18N[l].ui.menu = MENU_UI[l];

;
/* Client code shared by all pages (also used by build.js to pre-render the HTML).
   Globals set by each page: PAGE_LANG, ROOT (path to site root), LROOT (path to the language root). */
const HAS_DOM = typeof document !== "undefined";
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pf = key => PLATFORMS[key] || {};
const linkOf = p => p.url || p.fallback || "";
const grad = c => `linear-gradient(135deg,${c[0]},${c[1]})`;
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const DAY = 864e5;
const isNew = pr => (Date.now() - new Date(pr.added + "T00:00:00").getTime()) < NEW_DAYS * DAY;
const newCount = () => PROFILES.filter(isNew).length;
/* ---------- SCORES: computed from PLATFORM_DATA only (method on the "How we rate" page) ----------
   Free access 20% · Price 25% · Features 35% · Privacy & payments 20%. Each part is out of 10, unverified facts count half.
   Final score out of 5 = weighted average / 2, rounded to one decimal. Platforms cannot pay to change it. */
const SCORE_W = { free: 0.20, price: 0.25, feat: 0.35, priv: 0.20 };
const FEATS = ["images", "voice", "calls", "video", "group", "app"];
const half = v => v === true ? 1 : v === false ? 0 : 0.5;
const priceScore = x => x == null ? 5 : Math.max(2, Math.min(10, 10 - 0.35 * (x - 4)));
function scoreOf(d) {
  d = d || {};
  const free = d.unlimited ? 10 : d.free === true ? 7 : d.free === false ? 2 : 5;
  const price = (priceScore(d.priceMo) + priceScore(d.priceBest != null ? d.priceBest : d.priceMo)) / 2;
  const feat = 2 + 8 * FEATS.reduce((a, f) => a + half(d[f]), 0) / FEATS.length;
  const priv = 2 + 4 * half(d.discreet) + 2 * half(d.crypto) + 1 * half(d.wallet) + 1 * half(d.paypal);
  const total = free * SCORE_W.free + price * SCORE_W.price + feat * SCORE_W.feat + priv * SCORE_W.priv;
  const r1 = x => Math.round(x * 10) / 10;
  return { free: r1(free), price: r1(price), feat: r1(feat), priv: r1(priv), total: r1(total), rating: r1(total / 2) };
}
for (const k in PLATFORMS) { const d = PLATFORM_DATA[k] || {}; PLATFORMS[k].score = scoreOf(d); PLATFORMS[k].rating = PLATFORMS[k].score.rating;
  PLATFORMS[k].rank = PLATFORMS[k].rating * 1000 - (d.priceMo != null ? d.priceMo : 99); }   /* ties: lower price first */

/* A category is published as soon as it has at least MIN_TAG bot(s) (owner choice: 1). Smaller ones stay in the data
   (data.js / data-candy.js) and show up automatically as soon as they reach the minimum. */
const MIN_TAG = 1;
{ const c = {}; PROFILES.forEach(p => p.tags.forEach(t => c[t] = (c[t] || 0) + 1));
  const ok = t => (c[t] || 0) >= MIN_TAG;
  for (const g of Object.keys(TAG_GROUPS)) TAG_GROUPS[g] = TAG_GROUPS[g].filter(ok);
  ALL_TAGS.splice(0, ALL_TAGS.length, ...ALL_TAGS.filter(ok));
  PROFILES.forEach(p => { p.tags = p.tags.filter(ok); }); }
const ALL_PROFILE_TAGS = [...new Set(PROFILES.flatMap(p => p.tags))];
const tagCount = t => PROFILES.filter(p => p.tags.includes(t)).length;
const R = () => (typeof ROOT !== "undefined" ? ROOT : "");
const LR = () => (typeof LROOT !== "undefined" ? LROOT : "");
const tagUrl = t => LR() + "tag/" + slug(t) + ".html";
const autoBio = p => p.creator ? ui("creator_bio", { name: p.name, p: pf(p.platform).name }) : ui("auto_bio", { name: p.name, age: p.age ? ", " + p.age : "", p: pf(p.platform).name,
  tags: p.tags.filter(t => t !== "Female" && t !== "Realistic").slice(0, 3).map(tr).join(", ") || tr("Realistic") });
const bioOf = p => typeof p.bio === "string" ? tr(p.bio) : ((p.bio && (p.bio[LANG] || p.bio.en)) || autoBio(p));
const linkFor = p => ({ url: p.link || pf(p.platform).url, fallback: pf(p.platform).fallback });   // character deep link, else platform link
const withAge = p => esc(p.name) + (p.age ? ", " + p.age : "");
const byNew = (a,b) => (!!b.img - !!a.img) || b.added.localeCompare(a.added);   // profiles with a photo first
const girlId = p => p.id || slug(p.name);
/* editor's picks (TOP_PICKS in data.js) and the default "Selection" order: picks first, then newest */
const pickRank = p => { const i = (typeof TOP_PICKS !== "undefined" ? TOP_PICKS : []).indexOf(girlId(p)); return i < 0 ? 1e9 : i; };
const topList = () => (typeof TOP_PICKS !== "undefined" ? TOP_PICKS : []).map(id => PROFILES.find(p => girlId(p) === id)).filter(Boolean);
const bySel = (a, b) => (pickRank(a) - pickRank(b)) || byNew(a, b);
const PER_PAGE = 36;
const girlUrl = p => LR() + "model/" + girlId(p) + ".html";

function ctaLink(p, label, cls = "btn btn-main") {
  const href = linkOf(p);
  return href
    ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="sponsored nofollow noopener">${label}</a>`
    : `<a class="${cls}" aria-disabled="true">${esc(ui("soon"))}</a>`;
}
/* ---------- current offer (OFFER in data.js) ---------- */
const offerEnd = () => (typeof OFFER === "undefined" || !OFFER.active) ? 0 : new Date(OFFER.checked + "T00:00:00Z").getTime() + OFFER.days * 864e5;
const offerOn = () => Date.now() < offerEnd();
const eur = n => n.toLocaleString(LANG === "en" || LANG === "hi" ? "en-US" : LANG, { minimumFractionDigits: 2 }) + " €";
const offerVars = () => ({ p: pf(OFFER.platform).name, pct: OFFER.pct, price: eur(OFFER.price), reg: eur(OFFER.regular) });
function offerBar() {
  if (!offerOn()) return "";
  const P = pf(OFFER.platform); if (!linkOf(P)) return "";
  return `<div class="offer-bar" id="offer-bar" data-end="${offerEnd()}"><div class="wrap">
    <span class="ob-pct">-${OFFER.pct}%</span>
    <span class="ob-txt"><strong class="ob-l">${esc(ui("of_bar", offerVars()))}</strong><strong class="ob-s">${esc(ui("of_bar_s", offerVars()))}</strong> <span class="ob-l">${esc(ui("of_bar2", offerVars()))}</span></span>
    ${ctaLink(P, esc(ui("of_btn")) + " →", "ob-btn")}
    <button class="ob-x" aria-label="Close">×</button></div></div>`;
}
function offerBox(rel) {
  if (!offerOn()) return "";
  const P = pf(OFFER.platform), v = Object.assign(offerVars(), { d: fmtD(OFFER.checked) });
  return `<section class="offer-box" data-end="${offerEnd()}"><span class="ob-pct">-${OFFER.pct}%</span>
    <div><h2>${esc(ui("of_box_t", v))}</h2><p>${esc(ui("of_box", v))}</p><p class="small">${esc(ui("of_note", v))}</p></div>
    ${ctaLink(P, esc(ui("of_btn")) + " →", "btn btn-main")}</section>`;
}
function fmtD(d) { try { return new Date(d + "T12:00:00Z").toLocaleDateString(LANG === "hi" ? "hi-IN" : LANG, { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return d; } }
function wireOffer() {
  document.querySelectorAll("[data-end]").forEach(el => { if (Date.now() >= +el.dataset.end) el.remove(); });
  const bar = document.getElementById("offer-bar"); if (!bar) return;
  try { if (sessionStorage.getItem("offer_x")) return bar.remove(); } catch (e) {}
  bar.querySelector(".ob-x").addEventListener("click", () => { bar.remove(); try { sessionStorage.setItem("offer_x", "1"); } catch (e) {} });
}

/* smaller Candy images for cards (Candy's CDN resizes on the fly) */
/* Card thumbnails at 360 px: Candy resizes on its own CDN; SpicyChat avatars are resized by Cloudflare
   on our domain (Images → Transformations, origin cdn.nd-api.com allowed). */
const CF_IMG = "https://best-ai-nsfw-bots.com/cdn-cgi/image/width=360,format=auto,quality=80/";
const thumb = img => typeof img !== "string" || img.includes("/cdn-cgi/") ? img
  : img.startsWith("https://cdn.candy.ai/") ? img.replace("https://cdn.candy.ai/", "https://cdn.candy.ai/cdn-cgi/image/width=360,format=webp,quality=80/")
  : img.startsWith("https://cdn.nd-api.com/") ? CF_IMG + img.split("?")[0]
  : img;
function visual(img, color, letter, alt = "") {
  return `<div class="ph" style="background:${grad(color)}">${esc(letter)}</div>` +
    (img ? `<img src="${esc(/^https?:/.test(img) ? img : R() + img)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : "");
}

/* ---------- cards ---------- */
function profileCard(p) {
  const P = pf(p.platform), i = PROFILES.indexOf(p);
  return `<article class="pcard" data-i="${i}">
    ${visual(thumb(p.img), P.color, p.name[0], p.name)}
    ${p.video ? `<video class="pvid" muted loop playsinline preload="none" data-src="${esc(p.video)}" aria-hidden="true"></video>` : ""}
    <a class="pcover" href="${girlUrl(p)}" aria-label="${esc(p.name)}"></a>
    ${isNew(p) ? `<span class="new">${esc(ui("new_badge"))}</span>` : ""}${p.video ? `<span class="vbadge">▶ ${esc(ui("video_badge"))}</span>` : `<span class="online"></span>`}
    <div class="shade"></div>
    <div class="meta"><h2 class="pname"><a class="plink" href="${girlUrl(p)}">${esc(p.name)}</a>${p.age ? `<span>${p.age}</span>` : ""}</h2>
      <div class="on-pf">${esc(ui("on", {p: P.name}))}</div>
      <div class="chips">${p.tags.slice(0,3).map(t => `<span>${esc(tr(t))}</span>`).join("")}</div>
      ${ctaLink(linkFor(p), "💬 " + esc(ui(p.tags.includes("Male") && !p.tags.includes("Female") ? "card_btn_m" : "card_btn")), "pchat")}
    </div>
  </article>`;
}
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const mono = p => `<div class="mono" style="background:${grad(p.color)}">${esc(p.name[0])}</div>`;
function pickCard(p, i) {
  return `<div class="pick"><span class="rank">#${i+1}</span>${mono(p)}
    <h3>${esc(p.name)}</h3><div class="stars">${stars(p.rating)}<b>${p.rating}</b></div>
    <p>${esc(tr(p.desc))}</p>${ctaLink(p, esc(ui("try", {p: p.name})) + " →")}</div>`;
}
const pfKey = p => Object.keys(PLATFORMS).find(k => PLATFORMS[k] === p);
const plUrl = p => p.url ? LR() + "platform/" + pfKey(p) + ".html" : "";
function platformCard(p) {
  return `<article class="card">
    <div class="card-top">${mono(p)}<div><h3>${esc(p.name)}</h3><div class="stars">${stars(p.rating)}<b>${p.rating}</b></div></div></div>
    <p>${esc(tr(p.desc))}</p>
    <ul class="feat">${p.feats.map(f => `<li>${esc(tr(f))}</li>`).join("")}</ul>
    <div class="mini">${p.tags.map(t => `<span>${esc(tr(t))}</span>`).join("")}</div>
    ${ctaLink(p, esc(ui("visit")) + " →")}
    ${plUrl(p) ? `<a class="pl-rev" href="${plUrl(p)}">${esc(ui("pl_read"))} →</a>` : ""}
  </article>`;
}

/* sponsored cards inserted in profile grids (after the 6th and 18th card); clearly labelled "Sponsored" */
const AD_SLOTS = [5, 17];
function adCard(k) {
  const P = pf(PROMO.platform); if (!linkOf(P)) return "";
  const img = k === 0 && PROMO.img ? `<img src="${esc(/^https?:/.test(PROMO.img) ? PROMO.img : R() + PROMO.img)}" alt="${esc(P.name)}" loading="lazy" onerror="this.remove()">` : "";
  return `<aside class="adcard ad${k}"><span class="ad-lbl">${esc(ui("sponsored"))}</span>${img}
    <div class="ad-body"><div class="ad-ic">${k ? "✨" : "💬"}</div><h3>${esc(ui("ad" + (k + 1) + "_t", {p: P.name}))}</h3><p>${esc(ui("ad" + (k + 1) + "_d", {p: P.name}))}</p>
    ${ctaLink(P, esc(ui("ad" + (k + 1) + "_btn", {p: P.name})) + " →", "btn btn-main")}<small>${esc(ui("promo_note"))}</small></div></aside>`;
}
const gridHtml = list => list.map((p, i) => profileCard(p) + (AD_SLOTS.includes(i) && i < list.length - 1 ? adCard(AD_SLOTS.indexOf(i)) : "")).join("");

/* ---------- browser only ---------- */
let ageOk = false;
if (HAS_DOM) {
  try { const v = localStorage.getItem("age_ok"); ageOk = !!v && Date.now() - +v < 30 * DAY; } catch (e) {}
  document.addEventListener("keydown", e => { if (e.key === "Escape") document.querySelectorAll(".overlay.show").forEach(o => o.classList.remove("show")); });
}
function passGate() {
  ageOk = true;
  try { localStorage.setItem("age_ok", Date.now()); } catch (e) {}
  $("#gate")?.remove();
  armPromo();
}

function buildPromo() {
  const p = pf(PROMO.platform); if (!p.name) return;
  const el = document.createElement("div"); el.className = "overlay"; el.id = "promo";
  el.innerHTML = `
    <div class="modal promo" role="dialog" aria-modal="true" aria-label="${esc(ui("promo_title"))}">
      <button class="x" aria-label="Close">×</button>
      <div class="visual">${visual(PROMO.img, p.color, p.name[0])}</div>
      <div class="body">
        <span class="sponsored">${esc(ui("sponsored"))}</span>
        <h2>${esc(offerOn() && OFFER.platform === PROMO.platform ? ui("of_pop_t", offerVars()) : ui("promo_title"))}</h2>
        <p>${esc(offerOn() && OFFER.platform === PROMO.platform ? ui("of_pop", offerVars()) : ui("promo_text"))}</p>
        <ul>${p.feats.map(f => `<li>${esc(tr(f))}</li>`).join("")}</ul>
        ${ctaLink(p, esc(ui("promo_btn", {p: p.name})) + " →")}
        <div class="note">${esc(ui("promo_note"))}</div>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener("click", e => {
    if (e.target === el || e.target.classList.contains("x") || e.target.closest(".btn-main")) el.classList.remove("show");
  });
}
let promoArmed = false;
function showPromo() {
  const el = $("#promo"); if (!el || !ageOk) return;
  try { if (sessionStorage.getItem("promo_seen")) return; sessionStorage.setItem("promo_seen", "1"); } catch (e) {}
  if (document.querySelector(".overlay.show")) return;
  el.classList.add("show");
}
function armPromo() {
  if (promoArmed || !$("#promo")) return; promoArmed = true;
  setTimeout(showPromo, PROMO.delaySeconds * 1000);
  if (PROMO.showOnExit) document.addEventListener("mouseout", e => { if (!e.relatedTarget && e.clientY <= 0) showPromo(); });
}

/* Profile modal */
function openProfile(i) {
  const p = PROFILES[i], P = pf(p.platform);
  $("#pv").innerHTML = visual(p.img, P.color, p.name[0], p.name);
  $("#pb").innerHTML = `
    <h2>${withAge(p)}</h2>
    <div class="sub">${esc(ui("char_on", {p: P.name}))}${isNew(p) ? " · 🆕 " + esc(ui("nav_new")) : ""}</div>
    <p>${esc(bioOf(p))}</p>
    <div class="chips">${p.tags.map(t => `<a href="${tagUrl(t)}">${esc(tr(t))}</a>`).join("")}</div>
    ${ctaLink(linkFor(p), "💬 " + esc(ui("chat_with", {name: p.name})) + " →")}
    <div class="note">${esc(ui("opens", {p: P.name}))} · <a href="${girlUrl(p)}">${esc(ui("full_profile"))}</a></div>`;
  $("#profile").classList.add("show");
}
/* video previews: play on hover (mouse only), loaded only when first hovered */
function wireVideos() {
  if (!window.matchMedia || !matchMedia("(hover: hover)").matches) return;
  document.addEventListener("mouseover", e => { const c = e.target.closest && e.target.closest(".pcard"); const v = c && c.querySelector("video.pvid"); if (!v || c.dataset.playing) return;
    c.dataset.playing = "1"; if (!v.src) v.src = v.dataset.src; v.play().then(() => c.classList.add("vplay")).catch(() => {}); });
  document.addEventListener("mouseout", e => { const c = e.target.closest && e.target.closest(".pcard"); if (!c || (e.relatedTarget && c.contains(e.relatedTarget))) return;
    const v = c.querySelector("video.pvid"); delete c.dataset.playing; c.classList.remove("vplay"); if (v) v.pause(); });
}
/* Top 10 row: arrow buttons instead of a visible scrollbar */
function wireTop10() {
  const r = $("#t10"); if (!r) return; const prev = $(".t10-arr.prev"), next = $(".t10-arr.next");
  const upd = () => { prev.hidden = r.scrollLeft < 8; next.hidden = r.scrollLeft + r.clientWidth >= r.scrollWidth - 8; };
  prev.addEventListener("click", () => r.scrollBy({left: -r.clientWidth * 0.8}));
  next.addEventListener("click", () => r.scrollBy({left: r.clientWidth * 0.8}));
  r.addEventListener("scroll", upd, {passive: true}); window.addEventListener("resize", upd); requestAnimationFrame(upd);   /* after first paint: no forced layout */
}
function wireProfileGrid() {
  wireVideos(); wireTop10();
  const g = $("#grid"); if (!g) return;
  /* photo/name = link to /model/<id>, "Chat" button = affiliate link: nothing to intercept */
  $("#profile")?.addEventListener("click", e => { if (e.target.id === "profile" || e.target.classList.contains("x")) $("#profile").classList.remove("show"); });
}

/* Home page: search, tag filter, sort, "New" */
const BASES = {
  women: p => p.tags.includes("Female") && !p.tags.includes("Anime"),
  men:   p => p.tags.includes("Male"),
  anime: p => p.tags.includes("Anime")
};
const pagerHtml = (p, n) => {
  const nums = [...new Set([1, p - 1, p, p + 1, n])].filter(x => x >= 1 && x <= n).sort((a, b) => a - b);
  let out = "", last = 0;
  for (const x of nums) { if (x - last > 1) out += `<span class="pg-gap">…</span>`; out += `<a href="#grid" data-p="${x}" class="pg-n${x === p ? " on" : ""}"${x === p ? ' aria-current="page"' : ""}>${x}</a>`; last = x; }
  return `${p > 1 ? `<a href="#grid" data-p="${p - 1}" class="pg-btn">${esc(ui("pg_prev"))}</a>` : ""}${out}
    ${p < n ? `<a href="#grid" data-p="${p + 1}" class="pg-btn">${esc(ui("pg_next"))}</a>` : ""}<span class="pg-info">${esc(ui("pg", {p, n}))}</span>`;
};
const AGE_RANGES = [["18-21",18,21],["22-25",22,25],["26-30",26,30],["31-40",31,40],["41+",41,1e9]];
const FILTER_MAIN = ["gender","style","age","origin","hair","body","app"];
/* same collapsed filter bar as initHome() draws, rendered at build time so nothing moves on load */
function filterBarHtml(LIST) {
  const has = g => g === "age" ? AGE_RANGES.some(r => LIST.some(p => p.age >= r[1] && p.age <= r[2])) || (TAG_GROUPS.age || []).some(t => LIST.some(p => p.tags.includes(t)))
    : g === "app" ? Object.keys(PLATFORMS).some(k => LIST.some(p => p.platform === k))
    : (TAG_GROUPS[g] || []).some(t => LIST.some(p => p.tags.includes(t)));
  return `<div class="filters">${FILTER_MAIN.filter(has).map(g => `<div class="fdrop" data-g="${g}">
      <button class="fbtn" type="button" aria-expanded="false">${esc(ui("grp_" + g))} <span class="car">▾</span></button>
      <div class="fpanel"></div></div>`).join("")}
        <button class="fmore" type="button" id="fmore">${esc(ui("f_more"))}</button></div>`;
}
const inBase = (b, p) => !b || !BASES[b] || BASES[b](p);
function initHome() {
  const BASE_KEY = typeof PAGE_BASE !== "undefined" ? PAGE_BASE : "";
  const LIST = PROFILES.filter(p => inBase(BASE_KEY, p));
  const tagCount = t => LIST.filter(p => p.tags.includes(t)).length;
  /* ---- dropdown filters: OR inside a group, AND between groups ---- */
  const MAIN = FILTER_MAIN;
  const MORE = ["personality","vibe","role","relationship","fantasy","kink","features"];
  const sel = {}; [...MAIN, ...MORE].forEach(g => sel[g] = new Set());
  const groupOf = t => Object.keys(TAG_GROUPS).find(g => TAG_GROUPS[g].includes(t));
  const qp = new URLSearchParams(location.search).get("tag");
  const pre = ALL_PROFILE_TAGS.find(t => slug(t) === qp); if (pre && sel[groupOf(pre)]) sel[groupOf(pre)].add(pre);
  const qa = new URLSearchParams(location.search).get("app"); if (qa && PLATFORMS[qa]) sel.app.add(qa);
  let onlyNew = location.hash === "#new", openG = null, showMore = false, sortMode = onlyNew ? "new" : "sel", page = 1;

  const isRange = k => AGE_RANGES.some(x => x[0] === k);
  const inAge = (p, k) => { const r = AGE_RANGES.find(x => x[0] === k); return r ? !!p.age && p.age >= r[1] && p.age <= r[2] : p.tags.includes(k); };
  const matchGroup = (p, g) => !sel[g].size || [...sel[g]].some(v =>
    g === "age" ? inAge(p, v) : g === "app" ? p.platform === v : p.tags.includes(v));
  const options = g => {
    if (g === "age") return [...AGE_RANGES.map(r => [r[0], r[0], LIST.filter(p => inAge(p, r[0])).length]),
      ...(TAG_GROUPS.age || []).map(t => [t, tr(t), tagCount(t)])];
    if (g === "app") return Object.keys(PLATFORMS).map(k => [k, PLATFORMS[k].name, LIST.filter(p => p.platform === k).length]);
    return TAG_GROUPS[g].map(t => [t, tr(t), tagCount(t)]).sort((a, b) => a[1].localeCompare(b[1], LANG));
  };
  const label = g => ui("grp_" + g);
  const dropdown = g => {
    const n = sel[g].size, opts = options(g).filter(o => o[2] > 0 || sel[g].has(o[0]));
    if (!opts.length) return "";
    return `<div class="fdrop${openG === g ? " open" : ""}${n ? " has" : ""}" data-g="${g}">
      <button class="fbtn" type="button" aria-expanded="${openG === g}">${esc(label(g))}${n ? ` <b>${n}</b>` : ""} <span class="car">▾</span></button>
      <div class="fpanel">${opts.map(o => `<label class="fopt"><input type="checkbox" data-v="${esc(o[0])}" ${sel[g].has(o[0]) ? "checked" : ""}>
        <span>${esc(o[1])}</span><small>${o[2]}</small></label>`).join("")}</div></div>`;
  };
  const renderTags = () => {
    const chips = Object.entries(sel).flatMap(([g, set]) => [...set].map(v => [g, v,
      g === "app" ? PLATFORMS[v].name : g === "age" && isRange(v) ? ui("grp_age") + " " + v : tr(v)]));
    $("#tags").innerHTML = `<div class="filters">${MAIN.map(dropdown).join("")}
        <button class="fmore${showMore ? " on" : ""}" type="button" id="fmore">${esc(ui(showMore ? "f_less" : "f_more"))}</button></div>
      ${showMore ? `<div class="filters more">${MORE.map(dropdown).join("")}</div>` : ""}
      ${chips.length ? `<div class="fchips">${chips.map(([g, v, l]) => `<button class="fchip" data-g="${g}" data-v="${esc(v)}">${esc(l)} ×</button>`).join("")}
        <button class="clear" id="freset">${esc(ui("clear"))}</button></div>` : ""}`;
  };
  const renderGrid = () => {
    const q = $("#q").value.trim().toLowerCase();
    let list = LIST.filter(p =>
      (!onlyNew || isNew(p)) && Object.keys(sel).every(g => matchGroup(p, g)) &&
      (!q || [p.name, bioOf(p), pf(p.platform).name, ...p.tags, ...p.tags.map(tr)].join(" ").toLowerCase().includes(q)));
    list.sort(sortMode === "name" ? (a,b) => a.name.localeCompare(b.name) : sortMode === "new" ? byNew : bySel);
    const pages = Math.max(1, Math.ceil(list.length / PER_PAGE)); if (page > pages) page = pages;
    const shown = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    const filtered = onlyNew || Object.values(sel).some(s => s.size) || q;
    $("#count").innerHTML = `<b>${list.length}</b> ` + esc(ui(onlyNew ? "count_new" : "count", {n:""}).trim()) +
      (filtered ? `<button class="clear" id="clear">${esc(ui("clear"))}</button>` : "");
    $("#new-btn")?.classList.toggle("on", onlyNew);
    $("#grid").innerHTML = list.length ? gridHtml(shown) : `<div class="empty">${esc(ui("empty"))}</div>`;
    document.querySelectorAll("#sort [data-s]").forEach(b => { b.classList.toggle("on", b.dataset.s === sortMode); b.setAttribute("aria-selected", b.dataset.s === sortMode); });
    $("#pager").innerHTML = pages > 1 ? pagerHtml(page, pages) : "";
  };
  const resetAll = () => { onlyNew = false; page = 1; Object.values(sel).forEach(s => s.clear()); $("#q").value = ""; history.replaceState(null, "", location.pathname); renderTags(); renderGrid(); };
  $("#tags").addEventListener("click", e => {
    const btn = e.target.closest(".fbtn");
    if (btn) { const g = btn.parentElement.dataset.g; openG = openG === g ? null : g; renderTags(); return; }
    if (e.target.id === "fmore") { showMore = !showMore; openG = null; renderTags(); return; }
    if (e.target.id === "freset") { resetAll(); return; }
    const chip = e.target.closest(".fchip");
    if (chip) { sel[chip.dataset.g].delete(chip.dataset.v); page = 1; renderTags(); renderGrid(); }
  });
  $("#tags").addEventListener("change", e => {
    const cb = e.target.closest("input[type=checkbox]"); if (!cb) return;
    const g = cb.closest(".fdrop").dataset.g; cb.checked ? sel[g].add(cb.dataset.v) : sel[g].delete(cb.dataset.v);
    page = 1; renderTags(); renderGrid();
  });
  document.addEventListener("click", e => { if (openG && !e.target.closest(".fdrop")) { openG = null; renderTags(); } });
  const toList = () => window.scrollTo({top: $("#count").getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth"});
  $("#new-btn")?.addEventListener("click", () => { onlyNew = !onlyNew; sortMode = "new"; page = 1; renderGrid(); toList(); });
  window.addEventListener("hashchange", () => { onlyNew = location.hash === "#new"; if (onlyNew) sortMode = "new"; page = 1; renderGrid(); });
  $("#count").addEventListener("click", e => { if (e.target.id === "clear") resetAll(); });
  $("#q").addEventListener("input", () => { page = 1; renderGrid(); });
  $("#sort").addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (!b) return; sortMode = b.dataset.s; page = 1; renderGrid(); });
  $("#pager").addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (!b) return; e.preventDefault(); page = +b.dataset.p; renderGrid(); toList(); });
  /* The page already arrives with the default list (same HTML, built by build.js): only redraw when a filter
     comes from the URL. Redrawing anyway would recreate every image and push back the page's LCP. */
  if (onlyNew || Object.values(sel).some(s => s.size) || $("#q").value.trim()) { renderTags(); renderGrid(); }
}

/* Platforms page: tag filter */
function initPlatforms() {
  const LIST = Object.values(PLATFORMS);
  const TAGS = [...new Set(LIST.flatMap(p => p.tags))];
  const active = new Set();
  const render = () => {
    $("#ptags").innerHTML = [...TAGS].sort((a,b) => tr(a).localeCompare(tr(b), LANG))
      .map(t => `<span class="tag ${active.has(t)?"on":""}" data-t="${esc(t)}">${esc(tr(t))}</span>`).join("");
    const list = LIST.filter(p => [...active].every(t => p.tags.includes(t))).sort((a,b) => b.rank - a.rank);
    $("#pgrid").innerHTML = list.length ? list.map(platformCard).join("") : `<div class="empty">${esc(ui("empty_pl"))}</div>`;
  };
  $("#ptags").addEventListener("click", e => { const t = e.target.dataset.t; if (!t) return; active.has(t) ? active.delete(t) : active.add(t); render(); });
  render();
}

/* Boot (every page) */
function boot(page) {
  /* close the mobile menu when tapping outside it */
  document.addEventListener("click", e => { const m = document.querySelector(".mmenu[open]"); if (m && !m.contains(e.target)) m.removeAttribute("open"); });
  if (ageOk) $("#gate")?.remove();
  $("#enter")?.addEventListener("click", passGate);
  $("#lang")?.addEventListener("change", e => { location.href = e.target.value; });
  if (page !== "legal") buildPromo();
  wireOffer();
  wireProfileGrid();
  if (page === "home") initHome();
  if (page === "platforms") initPlatforms();
  if (page === "tags") $("#tq")?.addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".tagtile").forEach(a => { a.style.display = !q || a.dataset.n.includes(q) ? "" : "none"; });
    document.querySelectorAll(".tgroup").forEach(g => { g.style.display = [...g.querySelectorAll(".tagtile")].some(a => a.style.display !== "none") ? "" : "none"; });
  });
  if (ageOk) armPromo();
}
