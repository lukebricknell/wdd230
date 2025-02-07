const key = "d91df0738e1f763a78dba56404bf70c4";
const lat = "49.7501";
const lon = "6.6372";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial?appid=${key}`;

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.temperature}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${icon}.___`;
  let desc = data.weather[0].______;
  weatherIcon.setAttribute("___", _____);
  weatherIcon.setAttribute("___", _____);
  captionDesc.textContent = `${desc}`;
}
