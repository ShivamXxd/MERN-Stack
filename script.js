const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const icon = document.querySelector(".icon");

searchBtn.addEventListener("click", async () => {
  let city = document.querySelector(".enteredCity").value;
  let url = `https://api.weatherapi.com/v1/current.json?key=83317b6e50284e48a4154447241412&q=${city}`;
  if (city) {
    let rawData = await fetch(url);
    let response = await rawData.json();
    console.log(response);
    cityName.textContent = response.location.name;
    temperature.textContent = response.current.temp_c + "deg Celsius";
    region.textContent = response.location.region;
    country.textContent = response.location.country;
    condition.textContent = response.current.condition.text;
    icon.src = response.current.condition.icon;
    icon.style.display = "block";
  }
  city = "";
});
