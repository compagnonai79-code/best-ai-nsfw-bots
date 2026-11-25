/* Spicy AI Bots — "What's your spice level?": 4 answers (0–2 points each) → a level from 1 to 5 → bots at that level */
(function () {
  var box = document.getElementById("fun-spice");
  if (!box) return;
  var lang = document.documentElement.lang, pre = "/spicy-ai-bots" + (lang === "en" ? "" : "/" + lang), all = null, ans = {};
  var qs = box.querySelectorAll(".q"), res = box.querySelector(".q-res"), labels = box.getAttribute("data-labels").split("|");
  fetch("/spicy-ai-bots/idx.json").then(function (r) { return r.json(); }).then(function (d) { all = d.filter(function (p) { return p.g === "f"; }); go(); });
  qs.forEach(function (q, i) {
    q.querySelectorAll("button").forEach(function (b) {
      b.type = "button";
      b.addEventListener("click", function () { q.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); }); ans[i] = +b.getAttribute("data-v"); go(); });
    });
  });
  function go() {
    if (!all || Object.keys(ans).length < qs.length) return;
    var pts = Object.keys(ans).reduce(function (a, k) { return a + ans[k]; }, 0);   // 0..8
    var lvl = Math.max(1, Math.min(5, Math.round(1 + pts / 2)));
    var list = all.filter(function (p) { return p.l === lvl; });
    if (list.length < 6) list = all.slice().sort(function (a, b) { return Math.abs(a.l - lvl) - Math.abs(b.l - lvl); });
    list = list.map(function (p) { return [Math.random(), p]; }).sort(function (a, b) { return a[0] - b[0]; }).slice(0, 6).map(function (x) { return x[1]; });
    res.hidden = false;
    res.innerHTML = "<p class='sp-lvl'>" + box.getAttribute("data-res") + ": <b>" + "🌶".repeat(lvl) + " " + labels[lvl - 1] + "</b></p><p class='q-t'>" + box.getAttribute("data-try") + "</p><div class='sp-cards'>" +
      list.map(function (p) { return "<a href='" + pre + "/model/" + p.i + "/'><img src='" + p.img + "' alt='" + p.f + "' width='300' height='450' loading='lazy'><span>" + p.n + " · " + p.l + "🌶" + "</span></a>"; }).join("") +
      "</div><button type='button' class='sp-again'>" + box.getAttribute("data-again") + "</button>";
    res.querySelector(".sp-again").addEventListener("click", function () { ans = {}; res.hidden = true; box.querySelectorAll("button.on").forEach(function (x) { x.classList.remove("on"); }); box.scrollIntoView({ behavior: "smooth" }); });
    res.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
})();
