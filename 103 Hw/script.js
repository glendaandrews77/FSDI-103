// Declare and assign values to variables
let appName = "My Awesome App";
let appVersion = "1.0.0";
let isUserLoggedIn = false;
let currentUser = "Guest";
let totalMovies = 2000;
let subscriptionPrice = 9.99;
let isLoggedIn = false;
let lastWatchedMovie = "The Matrix";
let favoriteGenre = "Action";
let userLocation = "New York";
let userAge = 25;
let isNewUser = true;
let recommendedMovies = ["Inception", "Avengers", "Interstellar"];
let userPreferences = {
  autoplay: true,
  subtitles: false,
  darkMode: true,
};
let totalBooks = 3000000;
let bookPrice = 12.5;
let lastPurchasedBook = "The Catcher in the Rye";
let favoriteAuthor = "J.K. Rowling";
let userCountry = "USA";

// Display variables on the HTML using template strings
document.write(`<p>App Name: ${appName}</p>`);
document.write(`<p>App Version: ${appVersion}</p>`);
document.write(`<p>Is User Logged In: ${isUserLoggedIn}</p>`);
document.write(`<p>Current User: ${currentUser}</p>`);
document.write(`<p>Total Movies: ${totalMovies}</p>`);
document.write(`<p>Subscription Price: $${subscriptionPrice}</p>`);
document.write(`<p>Is Logged In: ${isLoggedIn}</p>`);
document.write(`<p>Last Watched Movie: ${lastWatchedMovie}</p>`);
document.write(`<p>Favorite Genre: ${favoriteGenre}</p>`);
document.write(`<p>User Location: ${userLocation}</p>`);
document.write(`<p>User Age: ${userAge}</p>`);
document.write(`<p>Is New User: ${isNewUser}</p>`);
document.write(`<p>Recommended Movies: ${recommendedMovies.join(", ")}</p>`);
document.write(`<p>User Preferences:</p>`);
document.write(`<ul>`);
document.write(`<li>Autoplay: ${userPreferences.autoplay}</li>`);
document.write(`<li>Subtitles: ${userPreferences.subtitles}</li>`);
document.write(`<li>Dark Mode: ${userPreferences.darkMode}</li>`);
document.write(`</ul>`);
document.write(`<p>Total Books: ${totalBooks}</p>`);
document.write(`<p>Book Price: $${bookPrice}</p>`);
document.write(`<p>Last Purchased Book: ${lastPurchasedBook}</p>`);
document.write(`<p>Favorite Author: ${favoriteAuthor}</p>`);
document.write(`<p>User Country: ${userCountry}</p>`);
