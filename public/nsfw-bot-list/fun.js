/* NSFW Bot List — "Bot of the day" (same pick for everyone on a given day) + a random-profile button */
(function () {
  var box = document.getElementById("fun-botd"), roll = document.getElementById("fun-roll");
  if (!box) return;
  var lang = document.documentElement.lang, pre = "/nsfw-bot-list" + (lang === "en" ? "" : "/" + lang);
  function day() { var d = new Date(); return d.getUTCFullYear() * 10000 + (d.getUTCMonth() + 1) * 100 + d.getUTCDate(); }
  function hash(n) { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n = n ^ (n >>> 4); n = Math.imul(n, 0x27d4eb2d); return (n ^ (n >>> 15)) >>> 0; }
  fetch("/nsfw-bot-list/idx.json").then(function (r) { return r.json(); }).then(function (all) {
    var p = all[hash(day()) % all.length];
    box.innerHTML = '<a class="botd" href="' + pre + "/model/" + p.i + '/"><img src="' + p.img + '" alt="' + p.f + '" width="120" height="180" loading="lazy">' +
      '<span><b>' + p.f + (p.a ? " · " + p.a : "") + '</b><span class="botd-go">' + box.getAttribute("data-open") + " →</span></span></a>";
    if (roll) roll.addEventListener("click", function () { var q = all[Math.floor(Math.random() * all.length)]; location.href = pre + "/model/" + q.i + "/"; });
  });
})();
