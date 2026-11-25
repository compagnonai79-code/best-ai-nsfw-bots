/* Hot AI Companions — "Find your companion in 3 questions": scores every companion on the tags behind each answer */
(function () {
  var quiz = document.getElementById("fun-quiz");
  if (!quiz) return;
  var lang = document.documentElement.lang, pre = "/hot-ai-companions" + (lang === "en" ? "" : "/" + lang);
  var qs = quiz.querySelectorAll(".q"), res = quiz.querySelector(".q-res"), picks = {}, all = null;
  fetch("/hot-ai-companions/idx.json").then(function (r) { return r.json(); }).then(function (d) { all = d.filter(function (p) { return p.g === "f"; }); show(); });
  qs.forEach(function (q) {
    q.querySelectorAll("button").forEach(function (b) {
      b.type = "button";
      b.addEventListener("click", function () {
        q.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
        picks[q.getAttribute("data-k")] = b.getAttribute("data-t").split(" ");
        show();
      });
    });
  });
  function show() {
    if (!all || Object.keys(picks).length < qs.length) return;
    var want = [].concat.apply([], Object.keys(picks).map(function (k) { return picks[k]; }));
    var top = all.map(function (p) {
      var sc = 0; Object.keys(picks).forEach(function (k) { if (picks[k].some(function (t) { return p.t.indexOf(t) > -1; })) sc += 10; });
      want.forEach(function (t) { if (p.t.indexOf(t) > -1) sc += 1; });
      return [sc + Math.random(), p];
    }).sort(function (a, b) { return b[0] - a[0]; }).slice(0, 3).map(function (x) { return x[1]; });
    res.hidden = false;
    res.innerHTML = "<p class='q-t'>" + quiz.getAttribute("data-result") + "</p><div class='q-cards'>" + top.map(function (p) {
      return "<a class='q-card' href='" + pre + "/model/" + p.i + "/'><img src='" + p.img + "' alt='" + p.f + "' width='300' height='450' loading='lazy'><b>" + p.n + (p.a ? ", " + p.a : "") + "</b><span>" + quiz.getAttribute("data-open") + " →</span></a>";
    }).join("") + "</div><button type='button' class='q-again'>" + quiz.getAttribute("data-again") + "</button>";
    res.querySelector(".q-again").addEventListener("click", function () { picks = {}; res.hidden = true; quiz.querySelectorAll("button.on").forEach(function (x) { x.classList.remove("on"); }); quiz.scrollIntoView({ behavior: "smooth" }); });
    res.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
})();
