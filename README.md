# Movie Search 🎬

A simple movie search website using an API.

## Features

* 🔎 Search for movies
* 🎬 Show movie posters
* ⭐ Show ratings
* 📅 Show release years
* 🖼️ Show a default image when a poster is missing
* 🛡️ Prevent duplicate movies
* ⚠️ Handle API errors

## Built With

* HTML
* CSS
* JavaScript
* API
* Fetch
* Async / Await
* JSON

## Known Issue

Right now, the API can receive requests too frequently while searching. Because of this, it can sometimes return a `403` error.

I will fix this later by adding a delay between requests so the API doesn't get too many requests at once.
