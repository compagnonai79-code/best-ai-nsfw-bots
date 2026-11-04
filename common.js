/* Shared helpers: age gate, links, promo pop-up, "New" counter, language */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pf = key => PLATFORMS[key] || {};
const linkOf = p => p.url || p.fallback || "";
const grad = c => `linear-gradient(135deg,${c[0]},${c[1]})`;
const DAY = 864e5;
const isNew = pr => (Date.now() - new Date(pr.added + "T00:00:00").getTime()) < NEW_DAYS * DAY;
const newCount = () => PROFILES.filter(isNew).length;

function ctaLink(p, label, cls = "btn btn-main") {
  const href = linkOf(p);
  return href
    ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="sponsored nofollow noopener">${label}</a>`
    : `<a class="${cls}" aria-disabled="true">${esc(ui("soon"))}</a>`;
}
function visual(img, color, letter) {
  return `<div class="ph" style="background:${grad(color)}">${esc(letter)}</div>` +
    (img ? `<img src="${esc(img)}" alt="" loading="lazy" onerror="this.remove()">` : "");
}

/* ---- Age gate (remembered 30 days) ---- */
let ageOk = false;
try { const v = localStorage.getItem("age_ok"); ageOk = !!v && Date.now() - +v < 30 * DAY; } catch (e) {}
function passGate() {
  ageOk = true;
  try { localStorage.setItem("age_ok", Date.now()); } catch (e) {}
  $("#gate")?.remove();
  armPromo();
}

/* ---- Promo pop-up (once per visit) ---- */
function renderPromo() {
  const p = pf(PROMO.platform); if (!p.name) return;
  let el = $("#promo");
  if (!el) {
    el = document.createElement("div"); el.className = "overlay"; el.id = "promo";
    document.body.appendChild(el);
    el.addEventListener("click", e => {
      if (e.target === el || e.target.classList.contains("x") || e.target.closest(".btn-main")) el.classList.remove("show");
    });
  }
  el.innerHTML = `
    <div class="modal promo" role="dialog" aria-modal="true" aria-label="${esc(ui("promo_title"))}">
      <button class="x" aria-label="Close">×</button>
      <div class="visual">${visual(PROMO.img, p.color, p.name[0])}</div>
      <div class="body">
        <span class="sponsored">${esc(ui("sponsored"))}</span>
        <h2>${esc(ui("promo_title"))}</h2>
        <p>${esc(ui("promo_text"))}</p>
        <ul>${p.feats.map(f => `<li>${esc(tr(f))}</li>`).join("")}</ul>
        ${ctaLink(p, esc(ui("promo_btn", {p: p.name})) + " →")}
        <div class="note">${esc(ui("promo_note"))}</div>
      </div>
    </div>`;
}
let promoArmed = false;
function showPromo() {
  const el = $("#promo"); if (!el || !ageOk) return;
  try { if (sessionStorage.getItem("promo_seen")) return; sessionStorage.setItem("promo_seen", "1"); } catch (e) {}
  if (document.querySelector(".overlay.show")) return;
  el.classList.add("show");
}
function armPromo() {
  if (promoArmed) return; promoArmed = true;
  setTimeout(showPromo, PROMO.delaySeconds * 1000);
  if (PROMO.showOnExit) document.addEventListener("mouseout", e => { if (!e.relatedTarget && e.clientY <= 0) showPromo(); });
}
document.addEventListener("keydown", e => { if (e.key === "Escape") document.querySelectorAll(".overlay.show").forEach(o => o.classList.remove("show")); });

/* ---- Page boot: call initPage(renderFn) from each page ---- */
function initPage(render) {
  applyStatic();
  if (ageOk) $("#gate")?.remove();
  $("#enter")?.addEventListener("click", passGate);
  const n = $("#new-count"); if (n) n.textContent = newCount();
  const y = $("#yr"); if (y) y.textContent = new Date().getFullYear();
  renderPromo();
  buildLangSelect(() => { renderPromo(); render(); });
  render();
  if (ageOk) armPromo();
}
