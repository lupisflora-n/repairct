(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.body.classList.add("is-ready");

  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const revealTargets = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }

  document.querySelectorAll(".case-card").forEach((card) => {
    card.addEventListener("pointerdown", () => {
      card.classList.toggle("is-active");
    });
  });

  const linkStatus = document.querySelector("[data-link-status]");
  document.querySelectorAll("[data-instagram-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        if (linkStatus) {
          linkStatus.textContent = "Instagram URLは未確定です。確定後、hrefを差し替えて接続します。";
        }
      }
    });
  });
})();
