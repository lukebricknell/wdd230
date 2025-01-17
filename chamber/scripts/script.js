const navSm = document.querySelector(".nav-sm-wrapper");
const menuBtn = document.querySelector(".menuBtn");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

document.querySelector(".last-modification").textContent =
  document.lastModified;

menuBtn.addEventListener("click", () => {
  if (navSm.style.display === "hidden") {
    line1.classList.toggle("rotate45");
    line2.classList.toggle("hidden");
    line3.classList.toggle("rotate-45");
    navSm.classList.toggle("hidden");
  } else {
    line1.classList.toggle("rotate45");
    line2.classList.toggle("hidden");
    line3.classList.toggle("rotate-45");
    navSm.classList.toggle("hidden");
  }
});
