(() => {
  const prefersReducedMotion =
    typeof window.matchMedia !== "function" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pageIntro = document.querySelector("[data-page-intro]");
  const finalIntroElement = pageIntro?.querySelector("[data-intro-final]");
  const fallbackIntroDuration = 2800;
  let introCompleted = false;

  const completeIntro = () => {
    if (introCompleted) {
      return;
    }

    introCompleted = true;
    if (window.__repairctIntroFallback) {
      window.clearTimeout(window.__repairctIntroFallback);
      window.__repairctIntroFallback = null;
    }

    document.body.classList.remove("is-intro-playing");
    document.body.classList.add("is-ready");

    if (pageIntro) {
      pageIntro.classList.add("is-complete");
      pageIntro.addEventListener("transitionend", () => pageIntro.remove(), { once: true });
      window.setTimeout(() => pageIntro.remove(), 420);
    }
  };
  window.__repairctShowPage = completeIntro;

  if (prefersReducedMotion || !pageIntro) {
    completeIntro();
  } else if (finalIntroElement) {
    finalIntroElement.addEventListener("animationend", () => {
      window.setTimeout(completeIntro, 80);
    }, { once: true });
    window.setTimeout(completeIntro, fallbackIntroDuration);
  } else {
    window.setTimeout(completeIntro, fallbackIntroDuration);
  }

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
