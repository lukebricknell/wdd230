const year = document.querySelector("#year");

const today = new Date().getFullYear();
console.log(today);

year.textContent = today;
