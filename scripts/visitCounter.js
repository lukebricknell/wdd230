const visitDisplay = document.querySelector(".num-visits");

let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (visits !== 0) {
  visitDisplay.textContent = visits;
} else {
  visitDisplay.textContent = `0 - Welcome to our site!`;
}

visits++;

localStorage.setItem("visits-ls", visits);
