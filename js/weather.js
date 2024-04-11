const apiKey = "e09cfe1ab0f24a8f8ae121854240804";
let city = document.getElementById("citySearch").value
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    while (hoursList.firstChild) {
        hoursList.removeChild(hoursList.firstChild)
    }
    displayWeather();

})


async function currentWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=e09cfe1ab0f24a8f8ae121854240804&q=${city}&aqi=${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function forecastWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e09cfe1ab0f24a8f8ae121854240804&q=${city}&days=1&aqi=no&alerts=${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function displayWeather() {
  let city = document.getElementById("citySearch").value

  const data = await currentWeather(city);

  document.getElementById("condition").textContent = data.current.condition.text;
  document.getElementById("image").src = `https:${data.current.condition.icon}`;
  document.getElementById("city").textContent = data.location.name;
  document.getElementById("country").textContent = data.location.country;
  document.getElementById("temperature").textContent = data.current.temp_c;
  document.getElementById("precipitation").textContent = data.current.precip_mm;
  document.getElementById("humidity").textContent = data.current.humidity;
  document.getElementById("wind").textContent = data.current.wind_kph;

  const data2 = await forecastWeather(city);
    console.log(data2);
  const hoursList = document.getElementById("hoursList")
  for (let i = 0; i < 24; i++) {
    const divHours = document.createElement("div");
    divHours.setAttribute("id", "hours");
    const hourData = data2.forecast.forecastday[0].hour[i];
    const time = hourData.time;
    const hours = time.split("")[11] + time.split("")[12] + ":" + time.split("")[14] + time.split("")[15];
    divHours.innerHTML = `<p>${hours}</p><img src="https:${hourData.condition.icon}">
    <p>${hourData.temp_c}°C</p>
    `;
    hoursList.appendChild(divHours)
    console.log(hourData)
  }

  console.log(data2.forecast.forecastday[0].hour[2]);
}

displayWeather();
