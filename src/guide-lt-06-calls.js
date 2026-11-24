/* Long-tail article (English only): "video call with ai girlfriend", "nsfw ai text to speech", "ai text to speech nsfw".
   Facts: owner's paid Candy test (calls 3 tokens/min, interruptible, audio playback 0.2 token, voice picked at creation), Candy
   Premium perks (videos, live actions) on candy.ai 2026-11-24, our AIAllure review (Live Rooms), our SpicyChat review (TTS plan). */
const T = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-24", file: "guide/ai-girlfriend-voice-video-call.html", platforms: ["candy", "aiallure", "spicychat"], langs: ["en"],
en: {
  meta_t: "AI Girlfriend Video Call & Voice: Which Apps Really Do It (2026)",
  meta_d: "Can you video call or phone an AI girlfriend? Which apps have real voice calls, NSFW text-to-speech and video, what it costs per minute, and what we thought after testing.",
  crumb: "AI girlfriend voice & video calls", h1: "Video Call and Voice Chat With an AI Girlfriend: What Really Works",
  pl_link: "AI girlfriend voice & video calls",
  intro: "\"Video call with an AI girlfriend\" sounds like science fiction, and a lot of apps oversell it. In reality there are three different things: real-time voice calls, voice messages (text-to-speech), and generated videos. Only a few apps get close to a face-to-face video call. We tested Candy AI's calls ourselves; here is what each app actually offers and what it costs.",
  box_t: "In short",
  box: "Best voice calls: Candy AI, a real-time call you can interrupt, at 3 tokens per minute (100 tokens a month in Premium). Closest to a video call: AIAllure's Live Rooms, with her face on screen while you talk. Candy AI also generates 18+ videos, but that is not a live video call.",
  checked: "Checked on 24 November 2026",
  cta: "Call your AI girlfriend on Candy AI", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "types", h2: "1. Voice call, voice message, video: the difference", body: `
${T(["Feature", "What it is", "Who does it"], [
  ["<strong>Voice call</strong>", "You talk, she answers out loud in real time", "<strong>Candy AI</strong>, AIAllure, Muah AI"],
  ["<strong>Text-to-speech</strong>", "Her written replies read aloud in her voice", "<strong>Candy AI</strong>, SpicyChat (top plan)"],
  ["<strong>Live video room</strong>", "Her face on screen while you chat or talk", "AIAllure (Live Rooms)"],
  ["<strong>Generated video</strong>", "A short clip of her, made on request", "<strong>Candy AI</strong>, AIAllure, Seduced"]])}
<p>No app we know of offers a true two-way video call where the AI sees you through your camera, and you probably don't want that anyway. Be wary of apps that promise it.</p>` },
  { id: "candy", h2: "2. Candy AI: real voice calls, tested", body: `
<p>On Candy AI, the <strong>\"Call me\"</strong> button starts a real call, just like a phone. What we noticed during our paid test:</p>
<ul><li>✅ You can <strong>interrupt her mid-sentence</strong> to change the subject, which feels natural.</li>
<li>✅ She <strong>remembers the written chat</strong>: she brought up a detail (our dog's name) mentioned earlier in text.</li>
<li>❌ Answers are often too long, which also stretches the token counter.</li>
<li>❌ A few mispronounced words, and a username with digits got mangled.</li></ul>
${T(["Action", "Cost"], [
  ["Voice call", "3 tokens per minute"],
  ["Hearing a written message as audio", "0.2 token"],
  ["Premium tokens included", "100 per month (≈ 30 minutes of calls)"]])}
<p>You choose her <strong>voice</strong> when you create her, after listening to several. For ready-made characters, the voice comes with the character. One limit: in the written chat you cannot speak to her by voice; for that, use the call. Our calls score: 3/5, decent but improvable. More in [[p:review/candy-ai.html|our full Candy AI review]].</p>
<p>[[btn:candy|Try Candy AI's voice calls]]</p>` },
  { id: "video", h2: "3. Video: what Candy AI can and can't do", body: `
<p>Candy AI Premium includes <strong>18+ video generation</strong> and <strong>\"live actions\"</strong>: short animated clips of your character, made on request in the chat. Many ready-made characters also have a video on their profile (you can see them on [[p:tag/video.html|our video characters page]]). And the [[p:shorts/index.html|Candy Shorts]] series are full short episodes.</p>
<p>What Candy AI does <strong>not</strong> have is a live face-to-face video call. If that is specifically what you want, look at AIAllure below.</p>` },
  { id: "aiallure", h2: "4. AIAllure: the closest thing to a video call", body: `
<p>On AIAllure, the main button on a profile is <strong>\"Call\"</strong>, not \"Chat\". In a Live Room, the companion's face fills half the screen with the conversation beside it; you can turn on sound, type or speak into the microphone. It even shows missed calls. Our reviewer found it original, if a bit intrusive.</p>
<p>The trade-offs: a camera age check before some 18+ content, plans from $19.90/month (or $9.90/month on 12 months), and a $1.99 24-hour trial that becomes a monthly plan if not cancelled. See [[p:review/aiallure.html|our AIAllure review]].</p>
<p>[[btn:aiallure|Try AIAllure's Live Rooms]]</p>` },
  { id: "tts", h2: "5. NSFW AI text-to-speech", body: `
<p>If what you want is to <strong>hear</strong> her NSFW replies rather than call, text-to-speech is the cheapest way. On Candy AI, each message can be played as audio for 0.2 token, so 100 tokens covers hundreds of replies. The voice reads the same uncensored text you see in the chat.</p>
<p>On SpicyChat, voice (TTS) is only available on the I'm All In plan at €29.95/month, which makes it far more expensive for this use. Comparison in [[p:guide/candy-ai-vs-spicychat.html|Candy AI vs SpicyChat]].</p>` },
  ],
  faq_t: "FAQ",
  faq: [
    ["Can you video call an AI girlfriend?", "Not in the sense of a real two-way video call. AIAllure's Live Rooms come closest: her face is on screen while you type or talk. Candy AI has real-time voice calls and generates videos, but no live video call."],
    ["Which AI girlfriend app has the best voice calls?", "In our tests, Candy AI: a real-time call you can interrupt, which remembers the written chat. It costs 3 tokens per minute."],
    ["How much does an AI girlfriend call cost?", "On Candy AI, 3 tokens per minute. Premium (from €3.99/month on 12 months) includes 100 tokens a month, about 30 minutes of calls if you use tokens only for that."],
    ["Is there an NSFW AI text-to-speech?", "Yes. Candy AI can read any reply aloud in your character's voice for 0.2 token. SpicyChat offers voice only on its €29.95/month plan."],
    ["Can I choose my AI girlfriend's voice?", "On Candy AI, yes: when you create your own character you listen to several voices and pick one."],
  ],
  end_t: "Our pick",
  end: "For an AI girlfriend you can actually call, Candy AI is the one we tested and recommend, ideally on the 12-month plan. If seeing her face on screen during the conversation matters more than anything, try AIAllure's Live Rooms.",
  src: "Sources: our paid Candy AI test (11 November 2026), candy.ai Premium page (24 November 2026), our AIAllure and SpicyChat reviews (November 2026).",
},
};
