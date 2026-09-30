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
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  function setOpen(item, isOpen) {
    item.dataset.open = String(isOpen);
    var trigger = item.querySelector(".faq-item__trigger");
    var panel = item.querySelector(".faq-item__panel");
    var sign = item.querySelector(".faq-item__sign");
    trigger.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    sign.textContent = isOpen ? "−" : "+";
  }

  items.forEach(function (item, index) {
    var trigger = item.querySelector(".faq-item__trigger");
    trigger.addEventListener("click", function () {
      var willOpen = item.dataset.open !== "true";
      items.forEach(function (other) { setOpen(other, false); });
      setOpen(item, willOpen);
    });
    setOpen(item, index === 0);
  });
})();

// Free audit lead form — client-side only in this static build
(function () {
  var form = document.getElementById("audit-form");
  if (!form) return;
  var body = document.getElementById("audit-form-body");
  var success = document.getElementById("audit-form-success");

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
})();
