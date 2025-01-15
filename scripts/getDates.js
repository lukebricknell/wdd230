const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date().getFullYear();
console.log(today);

year.textContent = today;

lastMod.textContent = document.lastModified;
