const resumLink = document.querySelectorAll(".point-resum");

resumLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target === el) {
      window.location.hash = el.dataset.id;
    }
  });
});
