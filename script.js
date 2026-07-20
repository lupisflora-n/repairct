(() => {
  const getPrefersReducedMotion = () => {
    try {
      return (
        typeof window.matchMedia !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    } catch (error) {
      return true;
    }
  };
  const prefersReducedMotion = getPrefersReducedMotion();
  const pageIntro = document.querySelector("[data-page-intro]");
  const finalIntroElement = pageIntro?.querySelector("[data-intro-final]");
  const pageRevealDelay = 920;
  const fallbackIntroDuration = 3800;
  const fadeDuration = 1120;
  let introCompleted = false;

  const revealAllSections = () => {
    document.querySelectorAll(".reveal").forEach((target) => target.classList.add("is-visible"));
  };

  const completeIntro = () => {
    if (introCompleted) {
      return;
    }

    introCompleted = true;
    if (window.__repairctIntroFallback) {
      window.clearTimeout(window.__repairctIntroFallback);
      window.__repairctIntroFallback = null;
    }

    document.body.classList.add("is-intro-fading");
    document.body.classList.add("is-ready");
    revealAllSections();

    if (pageIntro) {
      const removeIntro = () => {
        document.body.classList.remove("is-intro-playing", "is-intro-fading");
        pageIntro.remove();
      };

      pageIntro.classList.add("is-complete");
      pageIntro.addEventListener("transitionend", (event) => {
        if (event.propertyName === "opacity") {
          removeIntro();
        }
      }, { once: true });
      window.setTimeout(removeIntro, fadeDuration);
    } else {
      document.body.classList.remove("is-intro-playing", "is-intro-fading");
    }
  };
  window.__repairctShowPage = completeIntro;

  if (prefersReducedMotion || !pageIntro) {
    completeIntro();
  } else if (finalIntroElement) {
    finalIntroElement.addEventListener("animationend", () => {
      window.setTimeout(completeIntro, pageRevealDelay);
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
