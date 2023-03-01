// Select the search form and search history elements
const searchForm = document.querySelector('#search-form');
const searchHistory = document.querySelector('#history');

// Add an event listener to the search form to handle form submissions
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

// Get the user input from the search form
   const city = document.querySelector('#search-input').value;

// Use the Fetch API to retrieve weather data for the given city
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb58fad24a6919b14a99575e19e9ae10`)
  .then(response => response.json())
  .then(data => {
    // Update the DOM with the current weather data
    const currentWeather = document.querySelector('#today');
    currentWeather.innerHTML = `
      <h2>${data.name}</h2>
      <p>${new Date().toLocaleDateString()}</p>
      <p><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon"></p>
      <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
 // Retrieve weather forecast data for the selected city and update the DOM
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=fb58fad24a6919b14a99575e19e9ae10`)
 .then(response => response.json())
 .then(data => {
   // Filter the forecast data to only include one record per day
   const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
 
     // Create an HTML string for the 5-day forecast and update the DOM
     const forecast = document.querySelector('#forecast');
     forecast.innerHTML = '';
     dailyData.forEach(day => {
       const date = new Date(day.dt_txt).toLocaleDateString();
       const icon = day.weather[0].icon;
       const temp = Math.round(day.main.temp - 273.15);
       const humidity = day.main.humidity;
       forecast.innerHTML += `
         <div class="card">
           <h3>${date}</h3>
           <p><img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon"></p>
           <p>Temperature: ${temp}°C</p>
           <p>Humidity: ${humidity}%</p>
         </div>
       `;
     });
   })
   .catch(error => console.error(error));
})
.catch(error => console.error(error));