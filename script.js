document.addEventListener('DOMContentLoaded', () => {
    /* =========================
       ANIMATION PAGE D'ACCUEIL (index)
       ========================= */
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroPunchline = document.querySelector('.hero-punchline');

    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('show'), 1300);
    }
    if (heroSubtitle) {
        setTimeout(() => heroSubtitle.classList.add('show'), 2300);
    }
    if (heroPunchline) {
        setTimeout(() => heroPunchline.classList.add('show'), 3300);
    }

    /* =========================
       ANIMATION TRACK 1 (INTRO)
       ========================= */
    const introElems = document.querySelectorAll('.intro-anim');

    if (introElems.length > 0) {
        introElems.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('show');
            }, 1000 + index * 300);
        });
    }

    /* =========================
       ANIMATION TRACK 2, 3, 4, 5 AU SCROLL
       ========================= */
    const animatedElems = document.querySelectorAll(
        '.track2-anim, .track3-anim, .track4-anim, .track5-anim'
    );

    if (animatedElems.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        animatedElems.forEach((el) => observer.observe(el));
    } else {
        // fallback : si pas d'IntersectionObserver, tout est visible
        animatedElems.forEach((el) => el.classList.add('show'));
    }
	(function () {
  const el = document.querySelector(".punchline");
  if (!el) return;

  const fullText = el.getAttribute("data-text");
  if (!fullText) return;

  el.textContent = "";
  let i = 0;

  function typeNext() {
    if (i <= fullText.length) {
      el.textContent = fullText.slice(0, i);
      i++;
      window.requestAnimationFrame(() => {
        setTimeout(typeNext, 30);
      });
    }
  }

  // petit délai pour laisser la page se poser
  setTimeout(typeNext, 400);
})();

});
