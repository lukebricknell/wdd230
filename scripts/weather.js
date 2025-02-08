const key = "5a4cc54f81b8e292c3da33acb9f0d16c";
const lat = "29.85";
const lon = "31.02";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
console.log(url);

// select HTML elements in the document

const icon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".weather-desc");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayResults = (data) => {
  icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  temp.textContent = `${data.main.temp}°C`;
  const space = document.createElement("span");
  desc.textContent = data.weather[0].description;
  icon.setAttribute("height", 25);
  icon.setAttribute("width", 25);
};

apiFetch();
