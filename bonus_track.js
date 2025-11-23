document.addEventListener("DOMContentLoaded", () => {
  const punchline = document.querySelector(".punchline");
  if (!punchline) return;

  // petit délai pour laisser la vidéo/overlay se poser
  setTimeout(() => {
    punchline.classList.add("punchline-visible");
  }, 500);
});
