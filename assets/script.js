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
  });