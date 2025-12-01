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
// Dictionnaire des textes
const skillTexts = {
    "service-client": {
        title: "Service client",
        text: "Gestion des demandes, explications claires aux utilisateurs, résolution efficace même en situation tendue."
    },
    "gestion-equipe": {
        title: "Gestion d’équipe",
        text: "Organisation du travail, coordination, priorisation et maintien d’un cadre stable sous pression."
    },
    "mao": {
        title: "MAO / Home-studio",
        text: "Montage, optimisation et dépannage d’un setup complet : drivers, VST, CPU, latence, stabilité."
    },
    "optimisation": {
        title: "Optimisation système",
        text: "Diagnostic, nettoyage et configuration avancée pour garantir stabilité et performance."
    },
    "support-it": {
        title: "Support IT",
        text: "Analyse d’incidents, résolution technique et documentation claire en environnement critique."
    },
    "admin-cloud": {
        title: "Admin systèmes & cloud",
        text: "Bases AD, DNS, virtualisation et environnements hybrides orientés fiabilité et sécurité."
    }
};

// Sélecteurs
const modal = document.getElementById("skill-modal");
const modalTitle = modal.querySelector(".skill-title");
const modalText = modal.querySelector(".skill-description");
const closeBtn = modal.querySelector(".skill-close");

// Ouvrir modal
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.skill;
        const data = skillTexts[key];

        modalTitle.textContent = data.title;
        modalText.textContent = data.text;

        modal.classList.add("show");
        document.body.classList.add("modal-open");
    });
});

// Fermer modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
});

// Fermer en cliquant à l'extérieur
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("skill-modal");
    if (!modal) return;

    const modalTitle = modal.querySelector(".skill-title");
    const modalText  = modal.querySelector(".skill-description");
    const closeBtn   = modal.querySelector(".skill-close");

    function openModal(title, text) {
        modalTitle.textContent = title;
        modalText.textContent  = text;

        modal.classList.add("show");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }

    // Clic sur les pastilles
    document.querySelectorAll(".skill-card").forEach(card => {
        // Clic souris
        card.addEventListener("click", () => {
            const titleNode = card.childNodes[0]; // texte "Service client", etc.
            const title = titleNode ? titleNode.textContent.trim() : "";
            const tooltip = card.querySelector(".skill-tooltip");
            const text = tooltip ? tooltip.textContent.trim() : "";

            openModal(title, text);
        });

        // Entrée / barre espace au clavier
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const titleNode = card.childNodes[0];
                const title = titleNode ? titleNode.textContent.trim() : "";
                const tooltip = card.querySelector(".skill-tooltip");
                const text = tooltip ? tooltip.textContent.trim() : "";

                openModal(title, text);
            }
        });
    });

    // Bouton X
    closeBtn.addEventListener("click", closeModal);

    // Clic en dehors de la carte => ferme le modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Touche Échap pour fermer
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
});

