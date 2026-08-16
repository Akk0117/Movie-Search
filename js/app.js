import "./api.js";
import { getMovie } from "./api.js";

const form = document.querySelector(".search");
const input = document.querySelector("#movieInput");
const movies = document.querySelector("#movies");

const addedMovies = new Set();

form.addEventListener("input", async (event) => {
    event.preventDefault();

    const name = input.value;

    if (!name.trim()) {
        return;
    }

    try {
        const data = await getMovie(name);

        movies.innerHTML = "";
        addedMovies.clear();

        data.docs.forEach((movie) => {
            if (!movie.name) {
                return;
            }

            if (addedMovies.has(movie.id)) {
                return;
            }

            addedMovies.add(movie.id);

            const card = document.createElement("article");
            card.classList.add("movie");

            const poster = document.createElement("img");
            poster.alt = movie.name;

            if (movie.poster?.url) {
                poster.src = movie.poster.url;
            } else {
                poster.src = "./images/images.jpg";
            }

            const info = document.createElement("div");
            info.classList.add("movie-info");

            const title = document.createElement("h2");
            title.textContent = movie.name;

            const year = document.createElement("p");
            year.textContent = `Год: ${movie.year || "не указан"}`;

            const rating = document.createElement("p");
            rating.textContent = `⭐ ${movie.rating?.kp || "нет рейтинга"}`;

            info.append(title);
            info.append(year);
            info.append(rating);

            card.append(poster);
            card.append(info);

            movies.prepend(card);
        });
    } catch (error) {
        console.log(error);
    }
});