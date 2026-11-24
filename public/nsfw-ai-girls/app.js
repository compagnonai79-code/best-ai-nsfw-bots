/* Age gate (the only pop-up) + search/filter + "Show more" on the character grid */
(function () {
  var gate = document.getElementById("agegate");
  var ok = false;
  try { ok = localStorage.getItem("age18") === "1"; } catch (e) {}
  if (gate && !ok) {
    gate.hidden = false;
    document.documentElement.classList.add("locked");
    document.getElementById("age-yes").addEventListener("click", function () {
      try { localStorage.setItem("age18", "1"); } catch (e) {}
      gate.hidden = true;
      document.documentElement.classList.remove("locked");
    });
  }

  var q = document.getElementById("q"), sel = document.getElementById("tagsel"), count = document.getElementById("count");
  var more = document.getElementById("showmore");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".filterable .card"));
  if (!q || !cards.length) return;
  var step = cards.filter(function (c) { return !c.hasAttribute("data-more"); }).length || 48;
  var shown = step;
  function apply() {
    var term = q.value.trim().toLowerCase(), tag = sel.value, filtering = !!(term || tag), n = 0;
    cards.forEach(function (c, i) {
      var match = (!term || c.dataset.name.indexOf(term) > -1) && (!tag || (" " + c.dataset.tags + " ").indexOf(" " + tag + " ") > -1);
      var show = filtering ? match : i < shown;
      c.style.display = show ? "" : "none";
      if (match) n++;
    });
    count.textContent = n + " / " + cards.length;
    if (more) more.style.display = (!filtering && shown < cards.length) ? "" : "none";
  }
  q.addEventListener("input", apply);
  sel.addEventListener("change", apply);
  if (more) more.addEventListener("click", function () { shown += step; apply(); });
  apply();
})();
