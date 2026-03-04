const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 캐릭터 디자인
const characterImgs = document.querySelectorAll(".character-img img");
let currentIdx = 0; // 현재 보여져야 하는 이미지의 인덱스
for (let i = 0; i < characterImgs.length; i++) {
  characterImgs[i].style.display = "none";
}
characterImgs[currentIdx].style.display = "block";

const characterLeftBtn = document.querySelector("#character-left-btn");
const characterRightBtn = document.querySelector("#character-right-btn");
characterLeftBtn.addEventListener("click", () => {
  if (currentIdx === 0) return;
  characterImgs[currentIdx].style.display = "none";
  characterImgs[--currentIdx].style.display = "block";
});
characterRightBtn.addEventListener("click", () => {
  if (currentIdx !== characterImgs.length - 1) {
    characterImgs[currentIdx].style.display = "none";
    characterImgs[++currentIdx].style.display = "block";
  }
});

// 일러스트
const IllustImgs = document.querySelectorAll(".illust-img img");
let currentIllustIdx = 0;
for (let i = 0; i < IllustImgs.length; i++) {
  IllustImgs[i].style.display = "none";
}
IllustImgs[currentIllustIdx].style.display = "block";

const IllustLeftBtn = document.querySelector("#illust-left-btn");
const IllustRightBtn = document.querySelector("#illust-right-btn");
IllustLeftBtn.addEventListener("click", () => {
  if (currentIllustIdx === 0) return;
  IllustImgs[currentIllustIdx].style.display = "none";
  IllustImgs[--currentIllustIdx].style.display = "block";
});
IllustRightBtn.addEventListener("click", () => {
  if (currentIllustIdx !== IllustImgs.length - 1) {
    IllustImgs[currentIllustIdx].style.display = "none";
    IllustImgs[++currentIllustIdx].style.display = "block";
  }
});
