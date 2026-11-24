/* Long-tail article (English only): "candy ai shorts for free", "candy ai full episodes free", "your girlfriend's younger sister candy shorts".
   Facts seen on candy.ai/candy-shorts and series pages on 2026-11-24: categories, episode counts, episodes 1-2 at 0 tokens,
   later episodes locked (12 tokens; 30 on some newer series), subtitles (en, fr…), "chat with the characters". */
const T = (h, r) => `<div class="tablewrap"><table class="data avis-t"><thead><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>
${r.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join("")}</tr>`).join("\n")}
</tbody></table></div>`;
module.exports = {
date: "2026-11-24", file: "guide/candy-ai-shorts.html", platforms: ["candy"], langs: ["en"],
en: {
  meta_t: "Candy AI Shorts: How to Watch Free & Full Episodes (2026 Guide)",
  meta_d: "What Candy Shorts are, which episodes are free, what full episodes cost in tokens, the most popular series and how to chat with the characters after watching.",
  crumb: "Candy AI Shorts", h1: "Candy AI Shorts: Free Episodes, Full Episodes and Prices",
  pl_link: "Candy AI Shorts: free & full episodes",
  intro: "Candy Shorts are short vertical series made with Candy AI's characters: one- to two-minute episodes, cliffhangers, and a button to chat with the character right after. People search for \"Candy AI shorts for free\" and \"full episodes free\", so we went through the series pages to see exactly what is free and what is paid.",
  box_t: "In short",
  box: "Episodes 1 and 2 of every series are free. From episode 3, episodes are locked for free accounts and cost 12 tokens each (30 on some newer series) with Premium. Premium includes 100 tokens a month, so about 8 episodes, on top of unlimited chat with the same characters.",
  checked: "Checked on candy.ai on 24 November 2026",
  cta: "Watch Candy Shorts", cta_note: "Affiliate link · 18+",
  toc_t: "Contents",
  sections: [
  { id: "what", h2: "1. What are Candy Shorts?", body: `
<p>Candy Shorts is the series section of Candy AI (the \"Shorts\" tab). Each series follows one of Candy's characters through a short story told in vertical episodes, with subtitles in several languages including English and French. There is also a \"clips\" feed with standalone videos.</p>
<p>The library is sorted by category: New, Hot, Romantic, Fantasy, MILF, Wife, Stepmom, Stepsister, Teacher, Maid, Taboo, Cuckold and more. All characters are fictional adults. What makes it different from a normal video site: on each series page there is a <strong>\"chat with the characters\"</strong> button, so you can continue the story in a private conversation with her.</p>` },
  { id: "free", h2: "2. Which episodes are free?", body: `
${T(["Episode", "Free account", "Premium"], [
  ["Episodes 1 and 2", "<strong>Free</strong>", "<strong>Free</strong>"],
  ["Episode 3 onwards", "Locked", "12 tokens each (30 on some newer series)"]])}
<p>We checked several series (Mona's Worst Enemy, Mona's Obsession, Colette Ramsey S1, Yes Ma'am, Your New Stepsister, Cabana Couple's Therapy): the pattern was the same everywhere. The first two episodes cost 0 tokens; RoboRhythms also reports that they play without an account.</p>
<p><strong>About \"full episodes free\":</strong> there is no free way to watch the locked episodes on candy.ai. Sites that claim to host them for free are reuploads or bait; avoid them, especially if they ask you to download something or enter card details.</p>` },
  { id: "cost", h2: "3. What full episodes really cost", body: `
<p>Premium includes <strong>100 tokens a month</strong> (from €3.99/month on the 12-month plan). At 12 tokens per episode, that is about 8 locked episodes a month if you spend your tokens only on Shorts. Some examples:</p>
${T(["Series", "Episodes", "Locked episodes", "Tokens to finish"], [
  ["Mona's Worst Enemy", "15", "13", "156"],
  ["Mona's Obsession", "5", "3", "36"],
  ["Colette Ramsey S1", "6", "4", "48"],
  ["Yes Ma'am (Diana Demont)", "40", "38", "456"],
  ["Your Girlfriend's Younger Sister", "5", "3", "36"]])}
<p>Critical point: short series are cheap to finish, long ones are not. Finishing a 40-episode series would take more than four months of included tokens, and tokens are also what you use for photos and calls. Our advice: watch the two free episodes of several series, then only spend tokens on the ones you really want to finish. Episode counts and prices can change; Candy shows the token price on each episode before you unlock it.</p>
<p>[[btn:candy|See Candy AI's Premium plans]]</p>` },
  { id: "popular", h2: "4. Popular series", body: `
<ul><li><strong>Mona's Worst Enemy</strong>: Mona has to share a house with the stepbrother she can't stand. 15 episodes, by far the most searched. Our full guide: [[p:guide/monas-worst-enemy.html|Mona's Worst Enemy episodes]]. Chat with her: [[p:model/mona-newman.html|Mona Newman]].</li>
<li><strong>Yes Ma'am</strong>: the longest one we found (40 episodes), with Sergeant [[p:model/diana-demont.html|Diana Demont]] on a military base.</li>
<li><strong>Your Girlfriend's Younger Sister</strong>: [[p:model/mila-nowak.html|Mila Nowak]] (21) and a secret attraction to her sister's boyfriend. 5 episodes.</li>
<li><strong>Colette Ramsey S1</strong>: [[p:model/colette-ramsey.html|Colette]], your dad's much younger girlfriend (21). 6 episodes.</li></ul>
<p>Each of these characters can also be chatted with directly. You will find them, and 300 more, in [[p:index.html|our directory of Candy characters]].</p>` },
  { id: "chat", h2: "5. Shorts or chat: which is better value?", body: `
<p>Shorts are a passive experience: you watch a story someone else wrote. The chat is where Candy AI is strongest: unlimited messages with Premium, she answers in character, sends photos (2–3 tokens) and can call you (3 tokens/minute). If you liked a character in a series, chatting with her costs fewer tokens than unlocking 30 episodes. More on this in [[p:guide/is-candy-ai-worth-it.html|is Candy AI worth it?]].</p>` },
  ],
  faq_t: "FAQ",
  faq: [
    ["Are Candy AI Shorts free?", "The first two episodes of every series are free. From episode 3, episodes are locked for free accounts and cost tokens with Premium (12 tokens each, 30 on some newer series, checked 24 November 2026)."],
    ["How can I watch Candy AI full episodes for free?", "There is no free way to watch locked episodes on candy.ai. Sites claiming to offer them free are reuploads or scams. Premium includes 100 tokens a month, about 8 episodes."],
    ["How long is a Candy Shorts episode?", "Around one to two minutes. The first episode of Mona's Worst Enemy, for example, lasts 1 minute 26."],
    ["Can I talk to the characters from Candy Shorts?", "Yes. Each series page has a button to chat with the characters, and they all have a profile on Candy AI."],
    ["Do I need an account to watch Candy Shorts?", "Not for the first two episodes according to RoboRhythms; you need an account, Premium and tokens for later episodes."],
  ],
  end_t: "Our advice",
  end: "Watch the free episodes of a few series, then pick: finish one short series with your monthly tokens, or spend them chatting with the character you liked. With Premium at €3.99/month on 12 months, you can do a bit of both.",
  src: "Sources: candy.ai/candy-shorts and series pages (checked 24 November 2026), RoboRhythms \"Is Candy AI free\" (updated 29 October 2026), our Candy AI test (11 November 2026).",
},
};
