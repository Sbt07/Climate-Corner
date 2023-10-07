const apiKey = "99bcc3d39738b11853eec35e03aeb631";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const weatherMain = data.weather[0].main.toLowerCase();

    if (weatherMain === "clouds") {
      weatherIcon.src = "clouds.png";
    } else if (weatherMain === "clear") {
      weatherIcon.src = "clear.png";
    } else if (weatherMain === "rain") {
      weatherIcon.src = "rain.png";
    } else if (weatherMain === "drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (weatherMain === "mist") {
      weatherIcon.src = "mist.png";
    } else if (weatherMain === "snow") {
      weatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
