// Mega menu: toggle open/close + 4-rail panel switching
(function () {
  var toggle = document.getElementById("mega-toggle");
  var menu = document.getElementById("mega-menu");
  if (!toggle || !menu) return;

  var caret = toggle.querySelector(".caret");
  var rails = Array.prototype.slice.call(menu.querySelectorAll(".mega-menu__rail"));
  var panels = Array.prototype.slice.call(menu.querySelectorAll(".mega-menu__panel"));
  var panelTitle = document.getElementById("mega-panel-title");
  var panelCta = document.getElementById("mega-panel-cta");
  var RAIL_TITLES = ["Services We Offer", "Specialties We Serve", "Locations We Serve", "Who We Work With"];
  var RAIL_CTAS = ["View all Services", "View all Specialties", "View all Locations", "View all Audiences"];
  var RAIL_HREFS = ["#capabilities", "#specialties", "#audit", "#why"];

  function closeMenu() {
    menu.hidden = true;
    toggle.classList.remove("is-active");
    if (caret) caret.textContent = "▼";
  }

  function openMenu() {
    menu.hidden = false;
    toggle.classList.add("is-active");
    if (caret) caret.textContent = "▲";
  }

  toggle.addEventListener("click", function () {
    if (menu.hidden) { openMenu(); } else { closeMenu(); }
  });

  document.addEventListener("click", function (e) {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  rails.forEach(function (rail, index) {
    rail.addEventListener("click", function () {
      rails.forEach(function (r) { r.classList.remove("is-active"); });
      rail.classList.add("is-active");
      panels.forEach(function (p, i) { p.hidden = i !== index; });
      if (panelTitle) panelTitle.textContent = RAIL_TITLES[index];
      if (panelCta) {
        panelCta.textContent = RAIL_CTAS[index];
        panelCta.setAttribute("href", RAIL_HREFS[index]);
      }
    });
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();

// Services explorer — 4-tab switching
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  if (!tabs.length) return;

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("is-active"); });
      panels.forEach(function (p) { p.hidden = true; });
      tab.classList.add("is-active");
      panels[index].hidden = false;
    });
  });
})();

// FAQ accordion — single-open, item 0 open on load
// Works for both the homepage's card-style FAQ (.faq-item) and the
// inner pages' centered divider-style FAQ (.faq-divider-item).
function initFaqAccordion(itemClass, triggerClass, panelClass, signClass) {
  var items = Array.prototype.slice.call(document.querySelectorAll("." + itemClass));
  if (!items.length) return;

  function setOpen(item, isOpen) {
    item.dataset.open = String(isOpen);
    var trigger = item.querySelector("." + triggerClass);
    var panel = item.querySelector("." + panelClass);
    var sign = item.querySelector("." + signClass);
    trigger.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    sign.textContent = isOpen ? "−" : "+";
  }

  items.forEach(function (item, index) {
    var trigger = item.querySelector("." + triggerClass);
    trigger.addEventListener("click", function () {
      var willOpen = item.dataset.open !== "true";
      items.forEach(function (other) { setOpen(other, false); });
      setOpen(item, willOpen);
    });
    setOpen(item, index === 0);
  });
}
initFaqAccordion("faq-item", "faq-item__trigger", "faq-item__panel", "faq-item__sign");
initFaqAccordion("faq-divider-item", "faq-divider-item__trigger", "faq-divider-item__panel", "faq-divider-item__sign");

// Free audit lead form — client-side only in this static build
function initAuditForm(formId, bodyId, successId) {
  var form = document.getElementById(formId);
  if (!form) return;
  var body = document.getElementById(bodyId);
  var success = document.getElementById(successId);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var required = form.querySelectorAll("[required]");
    for (var i = 0; i < required.length; i++) {
      if (!required[i].value.trim()) {
        required[i].focus();
        return;
      }
    }
    body.hidden = true;
    success.hidden = false;
    success.setAttribute("role", "status");
  });
}
initAuditForm("audit-form", "audit-form-body", "audit-form-success");
initAuditForm("popup-audit-form", "popup-form-body", "popup-form-success");

// CTA popup modal — opened by any "js-cta-popup" trigger, closed by the
// close button, a backdrop click, or Escape. Every trigger keeps its
// original href as a no-JS fallback.
(function () {
  var overlay = document.getElementById("cta-modal-overlay");
  if (!overlay) return;
  var dialog = overlay.querySelector(".cta-modal");
  var closeBtn = overlay.querySelector(".cta-modal__close");
  var triggers = Array.prototype.slice.call(document.querySelectorAll(".js-cta-popup"));

  function openModal(e) {
    if (e) e.preventDefault();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", openModal);
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (e) {
    if (!dialog.contains(e.target)) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
})();
