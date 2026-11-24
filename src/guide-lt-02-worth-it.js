/* Long-tail article (English only): "is candy ai subscription worth it", "candy ai what is it", "candy ai official website nsfw".
   Facts: owner's paid Candy test (11/11/2026, token costs), candy.ai/fr/subscriptions re-checked 2026-11-24 (plans, Premium perks,
   "EverAI" billing, EverAI Limited, Malta), Candy Shorts token prices seen on candy.ai on 2026-11-24. */
const T = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-24", file: "guide/is-candy-ai-worth-it.html", platforms: ["candy"], langs: ["en"],
en: {
  meta_t: "Is Candy AI Worth It? Honest Answer After Paying for Premium (2026)",
  meta_d: "Is a Candy AI subscription worth it? What Candy AI is, what Premium includes, what tokens really cost, who should pay and who should not. Tested with our own money.",
  crumb: "Is Candy AI worth it?", h1: "Is Candy AI Worth It? Our Honest Answer",
  pl_link: "Is Candy AI worth it? (honest answer)",
  intro: "Candy AI is everywhere in ads, so the real question is not \"is it good\" but \"is it worth paying for\". The owner of this site paid for Premium and used it for real: chats, photos, calls. Here is what Candy AI is, what you get for your money, where the hidden costs are, and a clear yes or no depending on what you want.",
  box_t: "Our verdict",
  box: "Yes, on the 12-month plan at €3.99/month: for the price of a coffee you get unlimited messages, realistic photos, calls and videos with 100 tokens a month. No, on the monthly plan if you plan to generate lots of images or make long calls: tokens run out fast and top-ups are expensive.",
  checked: "Plans checked on 24 November 2026",
  cta: "See Candy AI's -70% plan", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "what", h2: "1. What is Candy AI?", body: `
<p>Candy AI (candy.ai) is an 18+ AI companion app: you chat with a virtual girlfriend (or boyfriend), she answers in character, sends photos, can call you and appear in short videos. You can pick one of 300+ ready-made characters or create your own in a few minutes. It runs in the browser on computer and phone; the company behind it is <strong>EverAI Limited</strong> (Malta), which is also the name on your bank statement.</p>
<p>Beyond the chat, Candy now has <strong>Candy Shorts</strong> (short vertical series with its characters — see [[p:guide/candy-ai-shorts.html|our Candy Shorts guide]]), live "Candy Cams" shows with creators and a "private content" section.</p>` },
  { id: "premium", h2: "2. What Premium includes, and what it costs", body: `
${T(["Plan", "Price", "Discount"], [
  ["<strong>12 months</strong>", "<strong>€3.99/month</strong> instead of €13.99", "<strong>-70%</strong>"],
  ["3 months", "€8.99/month", "-35%"],
  ["1 month", "€9.99 the first month, then €13.99", "-29%"]])}
<p>All three plans include the same things: <strong>unlimited text messages</strong>, creating your own AI girlfriends and boyfriends, <strong>18+ images and videos</strong>, "live actions" and <strong>100 tokens per month</strong>. The only difference is the price per month and how long you commit. On 12 months that is €47.88 for the year, versus €167.88 at full price. No promo code is needed: the discount is applied automatically ([[p:guide/ai-girlfriend-deals.html|all current deals]]).</p>` },
  { id: "tokens", h2: "3. The hidden cost: tokens", body: `
<p>Messages are unlimited, but almost everything else is paid in tokens. What we measured during our test:</p>
${T(["Action", "Cost"], [
  ["One image", "2 to 3 tokens"],
  ["Voice call", "3 tokens per minute"],
  ["Hearing a message as audio", "0.2 token"],
  ["Candy Shorts episode (from ep. 3)", "12 tokens (30 on some newer series)"]])}
<p>In practice, 100 tokens is about <strong>30 to 40 images</strong>, or <strong>half an hour of calls</strong>, or a mix of both. A dozen images and one long call can empty the counter in under an hour. If you mostly chat in text and ask for a few pictures, 100 tokens is plenty. If you want photos all day, budget for top-ups or look at a dedicated image tool.</p>` },
  { id: "good", h2: "4. What makes it worth it", body: `
<ul><li><strong>Photos that look real</strong> on simple requests, with the same face from one image to the next.</li>
<li><strong>Unfiltered, funny conversation</strong>: she adopts the personality you give her, gets sarcasm and references.</li>
<li><strong>Calls you can interrupt</strong>, which feels much more natural than a voice note.</li>
<li><strong>The character creator</strong> is one of the most complete we have seen ([[p:guide/create-ai-girlfriend.html|step-by-step guide]]).</li>
<li><strong>Discreet billing</strong> ("EverAI"), cancel any time in settings, crypto accepted.</li></ul>` },
  { id: "bad", h2: "5. What is not worth it", body: `
<ul><li><strong>Memory</strong>: she remembers some details and forgets others in long chats. If you want a confidante with perfect recall, you will be disappointed.</li>
<li><strong>Language switches</strong>: the AI can drift back to English mid-conversation in other languages.</li>
<li><strong>Complex images</strong>: anatomy errors and ignored poses once the request gets elaborate.</li>
<li><strong>The monthly plan</strong>: €13.99 after the first month is expensive for what it is. The 12-month plan is the only one we really recommend.</li>
<li><strong>Token top-ups</strong> are expensive compared with the subscription itself.</li></ul>` },
  { id: "who", h2: "6. Who should pay, who should not", body: `
${T(["Pay for Candy AI if…", "Skip it if…"], [
  ["You want a realistic AI girlfriend who sends photos and calls", "You only want free text roleplay (take <a href=\"../platform/spicychat.html\">SpicyChat</a>)"],
  ["You will use it for several months (12-month plan)", "You want to test for one evening only"],
  ["A few images and calls a week is enough for you", "You want hundreds of images a month"],
  ["You like creating your own character", "Long-term memory is what matters most to you"]])}
<p>Still hesitating? You can create an account and send a few messages for free first: see [[p:guide/candy-ai-free-trial.html|what Candy AI's free trial really allows]].</p>
<p>[[btn:candy|Try Candy AI]]</p>` },
  ],
  faq_t: "FAQ",
  faq: [
    ["Is Candy AI worth the money?", "On the 12-month plan at €3.99/month, yes for most people who want photos, calls and chat. On the monthly plan (€13.99 after the first month), only if you use it a lot and stay light on tokens."],
    ["What is Candy AI?", "An 18+ AI companion app by EverAI Limited (Malta): you chat with a virtual girlfriend or boyfriend who answers in character, sends photos, can call you and appears in videos. It works in the browser."],
    ["Is candy.ai the official website?", "Yes, candy.ai is the official site. Be careful with look-alike apps in app stores using the word \"Candy\": many are not made by Candy AI's company."],
    ["Can I cancel Candy AI any time?", "Yes, from your account settings. Multi-month plans are paid upfront, so cancelling stops the renewal; check Candy's terms for refunds."],
    ["How many images do 100 tokens give?", "About 30 to 40 images at 2 to 3 tokens each, measured in our test. Calls cost 3 tokens per minute."],
  ],
  end_t: "Bottom line",
  end: "Candy AI is worth it if you take the 12-month plan and use it for what it does best: a realistic AI girlfriend with photos and calls. It is not worth it on the monthly plan for heavy image users, or for anyone who only wants free text chat.",
  src: "Sources: our paid Candy AI test (11 November 2026), candy.ai subscriptions page and Candy Shorts pages (24 November 2026). Prices were shown to us in euros; Candy may display your local currency.",
},
};
