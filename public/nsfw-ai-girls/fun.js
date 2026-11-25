/* NSFW AI Girls — "This or that?": 10 rounds of two portraits, the chosen one stays, the last one standing is your favourite */
(function () {
  var box = document.getElementById("fun-duel");
  if (!box) return;
  var lang = document.documentElement.lang, pre = "/nsfw-ai-girls" + (lang === "en" ? "" : "/" + lang), all = [], pool = [], keep = null, round = 0, ROUNDS = 10;
  var A = function (k) { return box.getAttribute("data-" + k); };
  fetch("/nsfw-ai-girls/idx.json").then(function (r) { return r.json(); }).then(function (d) { all = d.filter(function (p) { return p.g === "f"; }); start(); });
  function draw() { return pool.splice(Math.floor(Math.random() * pool.length), 1)[0]; }
  function start() { pool = all.slice(); round = 1; keep = draw(); show(keep, draw()); }
  function face(p, side) {
    return "<button type='button' class='duel-f' data-side='" + side + "'><img src='" + p.img + "' alt='" + p.f + "' width='300' height='450'><span>" + p.n + (p.a ? ", " + p.a : "") + "</span></button>";
  }
  function show(a, b) {
    box.innerHTML = "<p class='duel-r'>" + A("round") + " " + round + " / " + ROUNDS + "</p><div class='duel-pair'>" + face(a, "a") + "<span class='duel-vs'>VS</span>" + face(b, "b") + "</div>";
    box.querySelectorAll(".duel-f").forEach(function (el) {
      el.addEventListener("click", function () {
        keep = el.getAttribute("data-side") === "a" ? a : b;
        if (round >= ROUNDS || !pool.length) return win();
        round++; show(keep, draw());
      });
    });
  }
  function win() {
    box.innerHTML = "<div class='duel-win'><img src='" + keep.img + "' alt='" + keep.f + "' width='300' height='450'><div><p class='duel-r'>" + A("win") + "</p><p class='duel-name'>" + keep.f + (keep.a ? ", " + keep.a : "") + "</p><a class='cta' href='" + pre + "/model/" + keep.i + "/'>" + A("open") + " →</a> <button type='button' class='duel-again'>" + A("again") + "</button></div></div>";
    box.querySelector(".duel-again").addEventListener("click", start);
  }
})();
