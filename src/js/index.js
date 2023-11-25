const apiKey = '3a14960836b94154986115033232311';
const btnSearch = document.querySelector(".btn-search");
//console.log(btnSearch);

btnSearch.addEventListener('click', async () => {

  const city = document.getElementById("input-search").value;
  //console.log(city);

  const data = await searchDataCity(city);
  //console.log(data);

  //FILL DATA IN HTML
  if(data) fillData(data, city);
});

async function searchDataCity(city) {
  const apiUrl = 
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`;
  
  //console.log(apiUrl);
  const response = await fetch(apiUrl);
  if(response.status !== 200) return;

  const data =response.json();

  return data;
}

function fillData(data, city) {
  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
  document.getElementById("iconWeather").src = data.current.condition.icon;
  document.getElementById("condition").textContent = data.current.condition.text;

  document.getElementById("humidity").textContent = `${data.current.humidity}%`;
  document.getElementById("wind").textContent = `${data.current.wind_kph} km/h`;
}