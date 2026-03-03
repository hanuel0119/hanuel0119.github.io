const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsWrap = document.querySelector(".dots");

let currentIndex = 0;

function renderDots() {
  if (!dotsWrap) return;

  dotsWrap.innerHTML = "";
  slides.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `${index + 1}踰??щ씪?대뱶`);
    if (index === currentIndex) btn.classList.add("is-active");
    btn.addEventListener("click", () => goTo(index));
    dotsWrap.appendChild(btn);
  });
}

function goTo(index) {
  currentIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === currentIndex);
  });
  renderDots();
}

prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goTo(currentIndex - 1);
  if (event.key === "ArrowRight") goTo(currentIndex + 1);
});

goTo(0);

