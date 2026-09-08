// FAQ accordion — single-open, item 0 open on load
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  function setOpen(item, isOpen) {
    item.dataset.open = String(isOpen);
    var trigger = item.querySelector(".faq-item__trigger");
    var sign = item.querySelector(".faq-item__sign");
    trigger.setAttribute("aria-expanded", String(isOpen));
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
