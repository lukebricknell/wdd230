const menuBtn = document.querySelector(".menuBtn");

const navItems = document.querySelectorAll(".nav-li");

const line1 = document.querySelector(".menu-1");
const line2 = document.querySelector(".menu-2");
const line3 = document.querySelector(".menu-3");

menuBtn.addEventListener("click", () => {
  console.log(line2.classList);
  if (line2.classList.contains("hidden")) {
    navItems.forEach((navItem) => (navItem.style.display = "none"));
    console.log("close");
  } else {
    console.log("Open");
    navItems.forEach((navItem) => (navItem.style.display = "inline-block"));
  }
  line1.classList.toggle("rotate45");
  line2.classList.toggle("hidden");
  line3.classList.toggle("rotate-45");
  console.log(line2.classList);
});
