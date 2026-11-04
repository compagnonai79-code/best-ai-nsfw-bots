/* =====================================================================
   DATA — this is the only file you need to edit to update the site.
   ===================================================================== */

/* ---------- PLATFORMS (affiliate links) ----------
   url: your affiliate link ("" = not available yet → "Coming soon")
   top: true = shown in the Top platforms ranking highlights
*/
const PLATFORMS = {
  candy:    { name:"Candy AI",     url:"", fallback:"https://candy.ai", rating:4.8, top:true, color:["#ff3d8b","#ff8a5c"],
              desc:"Polished AI companion app with customizable characters, image generation and voice messages.",
              feats:["Create your own companion","AI-generated images","Voice messages"],
              tags:["Image generation","Voice","Custom characters","Realistic","Anime"] },
  spicychat:{ name:"SpicyChat AI", url:"https://spicychat.ai?ref=mze1zjm", rating:4.7, top:true, color:["#ff5a36","#ffb03a"],
              desc:"Huge community library of characters for roleplay, with a generous free tier.",
              feats:["Thousands of community characters","Strong roleplay focus","Free tier available"],
              tags:["Roleplay","Free tier","Community characters","Anime"] },
  gfgpt:    { name:"GirlfriendGPT", url:"https://www.gptgirlfriend.online/affiliates", rating:4.4, color:["#8b5cf6","#ec4899"],
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

/* ---------- PROMO POP-UP ---------- */
const PROMO = {
  platform: "candy",                 // which platform the pop-up promotes
  title: "Meet your AI girlfriend",
  text: "Create her look, her personality and chat with her anytime. Free to try.",
  button: "Try Candy AI for free",
  img: "images/promo-candy.jpg",     // put your promo image here (portrait, ~600×800)
  delaySeconds: 8,                   // shown after X seconds…
  showOnExit: true                   // …or when the mouse leaves the page (desktop)
};

/* ---------- AI GIRLFRIEND PROFILES (home page) ----------
   ALL characters must be adults (age 18+). Only use images of clearly adult characters.
   img:      path to the picture, e.g. "images/luna.jpg" (portrait 3:4). Empty = coloured placeholder.
   platform: key from PLATFORMS above (the "Chat with her" button uses that affiliate link)
   added:    date added "YYYY-MM-DD" — used for the "New" counter (last 14 days)
*/
const NEW_DAYS = 14;

const PROFILES = [
  { name:"Luna",     age:24, platform:"candy",     added:"2026-11-03", img:"", tags:["Realistic","Girlfriend","Romantic"],
    bio:"Sweet, curious and a little teasing. Loves late-night talks, stargazing and hearing about your day." },
  { name:"Mia",      age:27, platform:"candy",     added:"2026-11-02", img:"", tags:["Realistic","Flirty","Fitness"],
    bio:"Personal trainer with a competitive streak. She'll motivate you — and flirt while doing it." },
  { name:"Yuki",     age:23, platform:"spicychat", added:"2026-11-01", img:"", tags:["Anime","Gamer","Playful"],
    bio:"Night-owl gamer who never lets you win on purpose. Challenge her to a match… if you dare." },
  { name:"Scarlett", age:31, platform:"muah",      added:"2026-10-31", img:"", tags:["Realistic","Dominant","Mature"],
    bio:"Confident executive who knows exactly what she wants. She likes a partner who can keep up." },
  { name:"Aria",     age:25, platform:"candy",     added:"2026-10-30", img:"", tags:["Realistic","Girlfriend","Shy"],
    bio:"Bookworm barista who blushes easily. Slowly opens up once she trusts you." },
  { name:"Raven",    age:26, platform:"spicychat", added:"2026-10-28", img:"", tags:["Goth","Mysterious","Roleplay"],
    bio:"Tattoo artist with a dark sense of humour. Loves horror films and honest conversations." },
  { name:"Sakura",   age:22, platform:"aiallure",  added:"2026-10-25", img:"", tags:["Anime","Romantic","Fantasy"],
    bio:"Gentle spirit from a hidden mountain village, discovering the modern world with you." },
  { name:"Valentina",age:29, platform:"muah",      added:"2026-10-22", img:"", tags:["Realistic","Flirty","Travel"],
    bio:"Passionate dancer who's always planning the next trip. Warm, spontaneous and never boring." },
  { name:"Nova",     age:24, platform:"seduced",   added:"2026-10-18", img:"", tags:["Realistic","Cosplay","Playful"],
    bio:"Cosplayer and content creator. Every day she's a new character — ask her who she is today." },
  { name:"Elena",    age:34, platform:"candy",     added:"2026-10-15", img:"", tags:["Realistic","Mature","Romantic"],
    bio:"Elegant wine lover and art collector. Prefers deep conversations over small talk." },
  { name:"Kira",     age:25, platform:"gfgpt",     added:"2026-10-12", img:"", tags:["Anime","Dominant","Fantasy"],
    bio:"Fearless demon-hunter captain. Strict on the battlefield, surprisingly soft off it." },
  { name:"Chloe",    age:23, platform:"spicychat", added:"2026-10-10", img:"", tags:["Realistic","Girlfriend","Playful"],
    bio:"Bubbly art student who sends you memes at 3am. Jealous? Maybe a little." },
  { name:"Isabella", age:28, platform:"muah",      added:"2026-10-06", img:"", tags:["Realistic","Romantic","Girlfriend"],
    bio:"Chef who'll cook you dinner and ask about your dreams. The definition of a keeper." },
  { name:"Lilith",   age:30, platform:"aiallure",  added:"2026-10-02", img:"", tags:["Fantasy","Mysterious","Dominant"],
    bio:"Ancient sorceress bound to a mirror. Free her, and she might grant you one wish." },
  { name:"Hana",     age:24, platform:"gfgpt",     added:"2026-09-28", img:"", tags:["Anime","Shy","Romantic"],
    bio:"Quiet librarian who writes poems she never shows anyone. Maybe she'll show you." },
  { name:"Jade",     age:27, platform:"seduced",   added:"2026-09-24", img:"", tags:["Realistic","Fitness","Flirty"],
    bio:"Surfer and yoga teacher living by the beach. Laid-back, sunny and very direct." },
];
