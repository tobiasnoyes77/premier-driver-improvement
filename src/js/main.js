/* Mobile nav toggle */
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isOpen);
    navToggle.classList.toggle("is-open");
    navMenu.classList.toggle("is-open");
  });
}

/* FAQ accordion */
document.querySelectorAll(".faq__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq__item");
    const content = item.querySelector(".faq__content");
    const isOpen = item.classList.contains("is-open");

    item.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", !isOpen);
    content.setAttribute("aria-hidden", isOpen);
  });
});

/* Fade-in / slide-in on scroll */
const fadeEls = document.querySelectorAll(".fade-in, .slide-in");

if (fadeEls.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeEls.forEach((el) => observer.observe(el));
}
