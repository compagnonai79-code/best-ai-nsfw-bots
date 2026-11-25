/* Spicy AI Girlfriend — "Swipe to match": a dating-app deck (buttons or drag), matches kept in this browser's local storage */
(function () {
  var box = document.getElementById("fun-swipe");
  if (!box) return;
  var lang = document.documentElement.lang, pre = "/spicy-aigirlfriend" + (lang === "en" ? "" : "/" + lang), KEY = "sagf-matches";
  var A = function (k) { return box.getAttribute("data-" + k); }, deck = [], byId = {}, matches = [];
  try { matches = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(matches)); } catch (e) {} }
  box.innerHTML = "<div class='sw-stage'></div><div class='sw-btns'><button type='button' class='sw-pass' aria-label='" + A("pass") + "'>✕</button><button type='button' class='sw-like' aria-label='" + A("like") + "'>❤</button></div><div class='sw-matches'></div>";
  var stage = box.querySelector(".sw-stage"), list = box.querySelector(".sw-matches");
  fetch("/spicy-aigirlfriend/idx.json").then(function (r) { return r.json(); }).then(function (d) {
    d.forEach(function (p) { byId[p.i] = p; });
    deck = d.filter(function (p) { return p.g === "f" && matches.indexOf(p.i) < 0; }).map(function (p) { return [Math.random(), p]; }).sort(function (a, b) { return a[0] - b[0]; }).map(function (x) { return x[1]; });
    top(); renderMatches();
  });
  function top() {
    var p = deck[0];
    if (!p) { stage.innerHTML = "<p class='sw-done'>" + A("done") + "</p>"; return; }
    stage.innerHTML = "<div class='sw-card'><img src='" + p.img + "' alt='" + p.f + "' width='300' height='450' draggable='false'><div class='sw-info'><b>" + p.n + (p.a ? ", " + p.a : "") + "</b></div><span class='sw-tag sw-yes'>❤</span><span class='sw-tag sw-no'>✕</span></div>";
    if (deck[1]) { var pre1 = new Image(); pre1.src = deck[1].img; }
    drag(stage.querySelector(".sw-card"));
  }
  function decide(like) {
    var p = deck.shift(), c = stage.querySelector(".sw-card");
    if (like && p) { matches.unshift(p.i); save(); renderMatches(); }
    if (c) { c.style.transition = "transform .25s, opacity .25s"; c.style.transform = "translateX(" + (like ? 140 : -140) + "%) rotate(" + (like ? 18 : -18) + "deg)"; c.style.opacity = "0"; }
    setTimeout(top, 220);
  }
  box.querySelector(".sw-like").addEventListener("click", function () { decide(true); });
  box.querySelector(".sw-pass").addEventListener("click", function () { decide(false); });
  function drag(c) {
    var x0 = null, dx = 0;
    c.addEventListener("pointerdown", function (e) { x0 = e.clientX; c.setPointerCapture(e.pointerId); c.style.transition = "none"; });
    c.addEventListener("pointermove", function (e) { if (x0 === null) return; dx = e.clientX - x0; c.style.transform = "translateX(" + dx + "px) rotate(" + dx / 20 + "deg)"; c.classList.toggle("yes", dx > 40); c.classList.toggle("no", dx < -40); });
    c.addEventListener("pointerup", function () { if (x0 === null) return; x0 = null; if (Math.abs(dx) > 90) decide(dx > 0); else { c.style.transition = "transform .2s"; c.style.transform = ""; c.classList.remove("yes", "no"); } dx = 0; });
  }
  function renderMatches() {
    var ms = matches.map(function (i) { return byId[i]; }).filter(Boolean);
    list.innerHTML = "<p class='sw-h'>" + A("matches") + " (" + ms.length + ")</p>" + (ms.length ? "<div class='sw-grid'>" + ms.map(function (p) {
      return "<a href='" + pre + "/model/" + p.i + "/'><img src='" + p.img + "' alt='" + p.f + "' width='300' height='450' loading='lazy'><span>" + p.n + " · " + A("open") + " →</span></a>";
    }).join("") + "</div><button type='button' class='sw-clear'>" + A("clear") + "</button>" : "<p class='sw-none'>" + A("none") + "</p>");
    var cl = list.querySelector(".sw-clear");
    if (cl) cl.addEventListener("click", function () { matches = []; save(); location.reload(); });
  }
})();
