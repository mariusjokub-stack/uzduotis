
/*********************** *
const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const moviesContainer =
    document.getElementById("moviesContainer");

const favoritesContainer =
    document.getElementById("favoritesContainer");

const loading =
    document.getElementById("loading");

const message =
    document.getElementById("message");

const themeBtn =
    document.getElementById("themeBtn");

const topRatedBtn =
    document.getElementById("topRatedBtn");

const sortSelect =
    document.getElementById("sortSelect");

const favoritesCount =
    document.getElementById("favoritesCount");

const topMovie =
    document.getElementById("topMovie");

const averageRating =
    document.getElementById("averageRating");


// FAVORITES
let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];


// CURRENT MOVIES
let currentMovies = [];


// SEARCH
searchBtn.addEventListener(
    "click",
    searchMovies
);


// ENTER SEARCH
searchInput.addEventListener(
    "keypress",
    function(event) {

        if(event.key === "Enter") {

            searchMovies();
        }
    }
);


// DARK/LIGHT
themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light-mode"
        );
    }
);


// SORT
sortSelect.addEventListener(
    "change",
    sortMovies
);


// TOP RATED
topRatedBtn.addEventListener(
    "click",
    function() {

        const filtered =
            currentMovies.filter(item =>

                (item.show.rating.average || 0)
                >= 8
            );

        moviesContainer.innerHTML = "";

        displayMovies(filtered);
    }
);


// SEARCH MOVIES
async function searchMovies() {

    const query =
        searchInput.value.trim();

    moviesContainer.innerHTML = "";

    message.textContent = "";

    if(query === "") {

        message.textContent =
            "Įveskite filmo pavadinimą";

        return;
    }

    loading.classList.remove("hidden");

    try {

        const response = await fetch(

            `https://api.tvmaze.com/search/shows?q=${query}`
        );

        if(!response.ok) {

            throw new Error("API klaida");
        }

        const data =
            await response.json();

        currentMovies = data;

        loading.classList.add("hidden");

        if(data.length === 0) {

            message.textContent =
                "Nieko nerasta";

            return;
        }

        displayMovies(data);

    } catch(error) {

        loading.classList.add("hidden");

        message.textContent =
            "Nepavyko gauti duomenų";

        console.log(error);
    }
}


// DISPLAY MOVIES
function displayMovies(movies) {

    movies.forEach(item => {

        const movie = item.show;

        const card =
            createMovieCard(movie, true);

        moviesContainer.appendChild(card);
    });
}


// CREATE CARD
function createMovieCard(
    movie,
    favoriteButton
) {

    const card =
        document.createElement("div");

    card.classList.add("movie-card");


    // IMAGE
    let image =
        "https://via.placeholder.com/300x450";

    if(movie.image) {

        image =
            movie.image.medium;
    }


    // RATING
    const rating =
        movie.rating.average || "Nėra";


    // YEAR
    const year =
        movie.premiered
        ? movie.premiered.split("-")[0]
        : "Nėra";


    // SUMMARY
    const summary =
        movie.summary
        ? movie.summary.replace(/<[^>]*>/g, "")
        : "Aprašymo nėra";


    // HTML
    card.innerHTML = `

        <img src="${image}">

        <div class="movie-content">

            <h3>${movie.name}</h3>

            <p class="rating">
                ⭐ ${rating}
            </p>

            <p>
                📅 ${year}
            </p>

            <p class="summary">
                ${summary}
            </p>

        </div>
    `;


    // BUTTON
    const btn =
        document.createElement("button");


    if(favoriteButton) {

        btn.textContent =
            "Add to Favorites";

        btn.classList.add(
            "favorite-btn"
        );

        btn.addEventListener(
            "click",
            function() {

                addToFavorites(movie);
            }
        );

    } else {

        btn.textContent =
            "Remove";

        btn.classList.add(
            "remove-btn"
        );

        btn.addEventListener(
            "click",
            function() {

                removeFavorite(movie.id);
            }
        );
    }


    card.querySelector(".movie-content")
        .appendChild(btn);

    return card;
}


// FAVORITES
function addToFavorites(movie) {

    const exists =
        favorites.find(fav =>

            fav.id === movie.id
        );

    if(exists) {

        alert("Filmas jau pridėtas");

        return;
    }

    favorites.push(movie);

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)
    );

    displayFavorites();

    updateDashboard();
}


function removeFavorite(id) {

    favorites =
        favorites.filter(movie =>

            movie.id !== id
        );

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)
    );

    displayFavorites();

    updateDashboard();
}


// DISPLAY FAVORITES
function displayFavorites() {

    favoritesContainer.innerHTML = "";

    favorites.forEach(movie => {

        const card =
            createMovieCard(movie, false);

        favoritesContainer.appendChild(card);
    });
}


// DASHBOARD
function updateDashboard() {

    favoritesCount.textContent =
        favorites.length;


    if(favorites.length > 0) {

        const bestMovie =
            favorites.reduce((best, movie) =>

                (movie.rating.average || 0)
                >
                (best.rating.average || 0)

                ? movie
                : best
            );

        topMovie.textContent =
            bestMovie.name;


        const total =
            favorites.reduce((sum, movie) =>

                sum +
                (movie.rating.average || 0)

            , 0);

        averageRating.textContent =
            (total / favorites.length)
            .toFixed(1);

    } else {

        topMovie.textContent = "-";

        averageRating.textContent = "0";
    }
}


// SORT MOVIES
function sortMovies() {

    let sorted =
        [...currentMovies];


    // NAME
    if(sortSelect.value === "name") {

        sorted.sort((a, b) =>

            a.show.name.localeCompare(
                b.show.name
            )
        );
    }


    // RATING
    if(sortSelect.value === "rating") {

        sorted.sort((a, b) =>

            (b.show.rating.average || 0)

            -

            (a.show.rating.average || 0)
        );
    }


    // YEAR
    if(sortSelect.value === "year") {

        sorted.sort((a, b) =>

            parseInt(
                b.show.premiered || 0
            )

            -

            parseInt(
                a.show.premiered || 0
            )
        );
    }


    moviesContainer.innerHTML = "";

    displayMovies(sorted);
}
sortSelect.addEventListener(
    "change",
    sortMovies
);

// LOAD
displayFavorites();

updateDashboard();
*/////////////////////////////////////////////////////////


const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const moviesContainer =
    document.getElementById("moviesContainer");

const favoritesContainer =
    document.getElementById("favoritesContainer");

const loading =
    document.getElementById("loading");

const message =
    document.getElementById("message");

const themeBtn =
    document.getElementById("themeBtn");

const topRatedBtn =
    document.getElementById("topRatedBtn");

const sortSelect =
    document.getElementById("sortSelect");

const favoritesCount =
    document.getElementById("favoritesCount");

const topMovie =
    document.getElementById("topMovie");

const averageRating =
    document.getElementById("averageRating");



let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];



let currentMovies = [];

let allMovies = [];

let visibleMovies = 100;



let debounceTimer;



searchBtn.addEventListener(
    "click",
    searchMovies
);



searchInput.addEventListener(
    "keypress",
    function(event) {

        if(event.key === "Enter") {

            searchMovies();
        }
    }
);



searchInput.addEventListener(
    "input",
    function() {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(

            function() {

                searchMovies();

            },

            500
        );
    }
);



sortSelect.addEventListener(
    "change",
    sortMovies
);



themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light-mode"
        );
    }
);



topRatedBtn.addEventListener(
    "click",
    function() {

        const filteredMovies =
            currentMovies.filter(item =>

                (item.show.rating.average || 0)
                >= 8
            );

        displayMovies(filteredMovies);
    }
);





async function searchMovies() {

    const query =
        searchInput.value.trim();

    moviesContainer.innerHTML = "";

    message.textContent = "";

    visibleMovies = 10;


    if(query === "") {

        message.textContent =
            "Įveskite filmo pavadinimą";

        return;
    }


   showSkeletons();


   function showSkeletons() {

    moviesContainer.innerHTML = "";

    for(let i = 0; i < 6; i++) {

        const skeleton =
            document.createElement("div");

        skeleton.classList.add(
            "movie-card",
            "skeleton-card"
        );

        skeleton.innerHTML = `

            <div class="skeleton-image"></div>

            <div class="movie-content">

                <div class="skeleton-title"></div>

                <div class="skeleton-text"></div>

                <div class="skeleton-text short"></div>

            </div>
        `;

        moviesContainer.appendChild(skeleton);
    }
}


    try {

        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`
        );


        if(!response.ok) {

            throw new Error(
                "API klaida"
            );
        }


        const data =
            await response.json();


        loading.classList.add("hidden");


        if(data.length === 0) {

            message.textContent =
                "Nieko nerasta";

            return;
        }


        allMovies = data;

        currentMovies =
            allMovies.slice(0, visibleMovies);


        displayMovies(currentMovies);

    } catch(error) {

        loading.classList.add("hidden");

        message.textContent =
            "Nepavyko gauti duomenų";

        console.log(error);
    }
}



function displayMovies(movies) {

    moviesContainer.innerHTML = "";

    movies.forEach(item => {

        const movie =
            item.show;

        const card =
            createMovieCard(
                movie,
                true
            );

        moviesContainer.appendChild(card);
    });
}



function createMovieCard(
    movie,
    showFavoriteButton
) {

    const card =
        document.createElement("div");

    card.classList.add(
        "movie-card"
    );


    // IMAGE
    let image =
        "https://via.placeholder.com/300x450";

    if(movie.image) {

        image =
            movie.image.medium;
    }


    
    const rating =
        movie.rating.average || "Nėra";


    
    const year =
        movie.premiered
        ? movie.premiered.split("-")[0]
        : "Nėra";


    
    const summary =
        movie.summary
        ? movie.summary.replace(/<[^>]*>/g, "")
        : "Aprašymo nėra";


    card.innerHTML = `

        <img src="${image}">

        <div class="movie-content">

            <h3>${movie.name}</h3>

            <p class="rating">
                ⭐ ${rating}
            </p>

            <p>
                📅 ${year}
            </p>

            <p class="summary">
                ${summary}
            </p>

        </div>
    `;


    
    const btn =
        document.createElement("button");


    if(showFavoriteButton) {

        btn.textContent =
            "Add to Favorites";

        btn.classList.add(
            "favorite-btn"
        );

        btn.addEventListener(
            "click",
            function() {

                addToFavorites(movie);
            }
        );

    } else {

        btn.textContent =
            "Remove";

        btn.classList.add(
            "remove-btn"
        );

        btn.addEventListener(
            "click",
            function() {

                removeFavorite(movie.id);
            }
        );
    }


    card.querySelector(".movie-content")
        .appendChild(btn);

    return card;
}



function addToFavorites(movie) {

    const exists =
        favorites.find(fav =>

            fav.id === movie.id
        );

    if(exists) {

        alert(
            "Filmas jau pridėtas"
        );

        return;
    }


    favorites.push(movie);


    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)
    );


    displayFavorites();

    updateDashboard();
}



function removeFavorite(id) {

    favorites =
        favorites.filter(movie =>

            movie.id !== id
        );


    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)
    );


    displayFavorites();

    updateDashboard();
}



function displayFavorites() {

    favoritesContainer.innerHTML = "";


    favorites.forEach(movie => {

        const card =
            createMovieCard(
                movie,
                false
            );

        favoritesContainer.appendChild(card);
    });
}



function updateDashboard() {

    favoritesCount.textContent =
        favorites.length;


    if(favorites.length > 0) {

        const bestMovie =
            favorites.reduce((best, movie) =>

                (movie.rating.average || 0)
                >
                (best.rating.average || 0)

                ? movie
                : best
            );


        topMovie.textContent =
            bestMovie.name;


        const total =
            favorites.reduce((sum, movie) =>

                sum +
                (movie.rating.average || 0)

            , 0);


        averageRating.textContent =
            (total / favorites.length)
            .toFixed(1);

    } else {

        topMovie.textContent = "-";

        averageRating.textContent = "0";
    }
}



function sortMovies() {

    let movies =
        [...currentMovies];


    
    if(sortSelect.value === "name") {

        movies.sort((a, b) => {

            return a.show.name.localeCompare(
                b.show.name
            );
        });
    }


    
    else if(sortSelect.value === "rating") {

        movies.sort((a, b) => {

            return (b.show.rating.average || 0)
                 - (a.show.rating.average || 0);
        });
    }


    
    else if(sortSelect.value === "year") {

        movies.sort((a, b) => {

            const yearA =
                a.show.premiered
                ? Number(a.show.premiered.split("-")[0])
                : 0;

            const yearB =
                b.show.premiered
                ? Number(b.show.premiered.split("-")[0])
                : 0;

            return yearB - yearA;
        });
    }


    displayMovies(movies);
}



window.addEventListener(
    "scroll",
    function() {

        if(
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 100
        ) {

            if(
                visibleMovies >= allMovies.length
            ) {
                return;
            }


            visibleMovies += 10;


            currentMovies =
                allMovies.slice(0, visibleMovies);


            displayMovies(currentMovies);
        }
    }
);



displayFavorites();

updateDashboard();
