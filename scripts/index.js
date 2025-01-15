const menuBtn = document.querySelector(".menuBtn");

const navItems = document.querySelectorAll(".nav-li");

menuBtn.addEventListener("click", () => {
  if (navItems.forEach((navItem) => navItem.style.display === "hidden")) {
    navItems.forEach((navItem) => (navItem.style.display = "inline-block"));
  } else {
    navItems.forEach((navItem) => (navItem.style.display = "inline-block"));
  }
});
