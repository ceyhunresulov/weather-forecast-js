const api = {
  url: "https://api.openweathermap.org/data/2.5/weather",
  apiKey: "606fcbc2a8fb8c030bd2d0ad57bb512e",
  lang: "az",
};
const month = [
  "yanvar",
  "fervral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];
const form = document.getElementById("form-city");
const input = document.getElementById("input-city");
const cityName = document.querySelector(".city-name");
const dateMonth = document.getElementById("date-month");
const dateHours = document.getElementById("date-hours");
const degree = document.getElementById("degree");
const maxMinDegree = document.getElementById("max-min");
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const container = document.getElementById("container");

const getBakuİnfo = (name) => {
  input.value = name;
  const city = input.value;
  const url = `${api.url}?q=${city}&appid=${api.apiKey}&lang=${api.lang}&units=metric`;
  const date = {
    day: new Date().getDate(),
    month: month[new Date().getMonth()],
    year: new Date().getFullYear(),
    hours: `${
      new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours()
    }:${
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()
    }`,
  };
  dateMonth.innerHTML = `${date.day} ${date.month}, ${date.year}`;
  dateHours.innerHTML = date.hours;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.weather[0].icon == "01d") {
        document.body.style.backgroundImage = 'url("../images/img4.jpg")';
        container.style.backgroundImage = 'url("../images/img4.jpg")';
      } else if (res.weather[0].icon == "01n") {
        document.body.style.backgroundImage = 'url("../images/img5.jpg")';
        container.style.backgroundImage = 'url("../images/img5.jpg")';
      } else if (
        res.weather[0].icon == "02d" ||
        res.weather[0].icon == "03d" ||
        res.weather[0].icon == "04d"
      ) {
        document.body.style.backgroundImage = 'url("../images/imgcloud.jpg")';
        container.style.backgroundImage = 'url("../images/imgcloud.jpg")';
      } else if (
        res.weather[0].icon == "02n" ||
        res.weather[0].icon == "03n" ||
        res.weather[0].icon == "04n"
      ) {
        document.body.style.backgroundImage = 'url("../images/imgcloud.jpg")';
        container.style.backgroundImage = 'url("../images/imgcloud.jpg")';
      } else if (res.weather[0].icon == "09d" || res.weather[0].icon == "10d") {
        document.body.style.backgroundImage = 'url("../images/imgrainsky.jpg")';
        container.style.backgroundImage = 'url("../images/imgrainsky.jpg")';
      } else if (res.weather[0].icon == "09n" || res.weather[0].icon == "10n") {
        document.body.style.backgroundImage =
          'url("../images/imgrainevning.jpg")';
        container.style.backgroundImage = 'url("../images/imgrainevning.jpg")';
      } else if (res.weather[0].icon == "13d") {
        document.body.style.backgroundImage = 'url("../images/imgsnow.jpg")';
        container.style.backgroundImage = 'url("../images/imgsnow.jpg")';
      } else if (res.weather[0].icon == "13n") {
        document.body.style.backgroundImage =
          'url("../images/imgsnowmoon.jpg")';
        container.style.backgroundImage = 'url("../images/imgsnowmoon.jpg")';
      } else if (res.weather[0].icon == "50n" || res.weather[0].icon == "50d") {
        document.body.style.backgroundImage = 'url("../images/imgmist.jpg")';
        container.style.backgroundImage = 'url("../images/imgmist.jpg")';
      }

      cityName.innerHTML = res.name;
      degree.innerHTML = `${Math.round(res.main.temp)} °C`;

      maxMinDegree.innerHTML = `min ${Math.round(
        res.main.temp_min
      )} °c   /   max ${Math.round(res.main.temp_max)} °c`;

      weather.innerHTML = res.weather[0].description;

      weatherIcon.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;

      input.value = "";
    })
    .catch(() => {
      alert("şəhərin adını düzgün yazın)");
      cityName.innerHTML = "";
    });
};
getBakuİnfo("bakı");

const fetchData = (e) => {
  e.preventDefault();
  getBakuİnfo(input.value);
};

form.addEventListener("submit", fetchData);
