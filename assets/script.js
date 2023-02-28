// Select the search form and search history elements
const searchForm = document.querySelector('#search-form');
const searchHistory = document.querySelector('#history');

// Add an event listener to the search form to handle form submissions
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

// Get the user input from the search form
   const city = document.querySelector('#search-input').value;
};