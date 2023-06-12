//new code ---------







//old code-------
//read data results 


//aaply them to function and go through a looop that will apply it to each card made 


const apiKey = "92e0489f41b248b8bdda68b2fda302cd";
    const moviesGrid = document.querySelector('#movies-grid');
    const loadMorebBtn = document.querySelector('#load-more-movies-btn');
    const SeachInput = document.querySelector('#search-input');
    const closeSearchBtn = document.querySelector('#close-search-btn');

let currentPage = 1;
let currentSearchItem = '';
const url= 'https://api.themoviedb.org/3/movie/now_playing?language=en-US';
const createUrl = (searchTerm, pageID) => `${url}&page=${pageID}&query=${searchTerm}&api_key=${apiKey}`;
const searchUrl = 'https://api.themoviedb.org/3/search/movie?';
const createSearchUrl = (searchTerm, pageID) =>`${searchUrl}&page=${pageID}&query=${searchTerm}&api_key=${apiKey}` ;

const addMovie = (movieObj) => {

    const MElement = generateMovieCard(movieObj.title,movieObj.poster_path, movieObj.vote_average )

    moviesGrid.innerHTML += MElement;

    // const Movie = docuemnt.querySelector('#movies-grid')
    // const btn = document.createElement('#load-more-movies-btn')
    // li.innerHTML = "${MovieObj}"
    // Movie.appendChild(li)
}



const fetchMovies = async() => {
    moviesGrid.innerHTML = ""
    if (currentSearchItem != ""){
        const res = await fetch(createSearchUrl(currentSearchItem, currentPage));
        console.log("search link: "+createSearchUrl(currentSearchItem, currentPage));
        const data = await res.json();
        data.results.forEach((movie) => {
            addMovie(movie);
            
        });
    }
else{
    const res = await fetch(createUrl(currentSearchItem, currentPage));
    console.log("link: "+createUrl(currentSearchItem, currentPage));
    // console.log(res);
    const data = await res.json();
    data.results.forEach((movie) => {
        addMovie(movie);
        
    });
}
 


    // const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=92e0489f41b248b8bdda68b2fda302cd");
    // const data = await res.json();

    // console.log(data.results);
    


    // if (data.page < data.total_pages){
    //     loadMorebBtn.style.display = "block";

    // }
    // else{
    //     loadMorebBtn.style.display = "none";
    // }

};


function generateMovieCard(title, img, votes)
{    if (!img){ // handling blank image 404 error
    return `<div class = "movie-card">
    <p class="movie-title">${title}</p> 
    <img src="/Users/fafoda/Desktop/FLEX CLASS/Project/site-week1-project1-flixster-starter-main/blank image - Google Search.html" alt="image of movie" class="movie-poster"><br><br>
    <p class="movie-votes">&#11088 ${votes}</sp><br><br><br>
    <!--rating incremnetation-->
    </div>
`
        // const MElement = generateMovieCard(movieObj.title,movieObj.poster_path, movieObj.vote_average )

    }
    return ` 
    <div class = "movie-card">
            <p class="movie-title">${title}</p> 
            <img src="https://image.tmdb.org/t/p/w342${img}" alt="image of movie" class="movie-poster"><br><br>
            <p class="movie-votes">&#11088 ${votes}</sp><br><br><br>
            <!--rating incremnetation-->
            </div>
    `
};


// SearchInput.addEventListener('submit', (event)=> {
//     if (event.key === "Enter"){
//         event.preventDefault();
//         currentPage = 1;
//         moviesGrid.innerHTML= '';
//         fetchMovies();
//     }

//     const searchI = document.getElementById( 'search-input') ;
//     currentSearchItem = searchI.value();
//     const searchB = document.getElementById( 'search-button' );
//     const submittB = document.getElementById( 'search-form' );

//     submitBtn.addEventListener('submit', (event) => {
//     const moviesGrid = document.getElementById('movies-grid');
//     moviesGrid.innerHTML = ' '
//     incident.preventDefault();
//     const searchH = event.target.search.value;
//     fetchMovies('https://api.themoviedb.org/3/search/movie?&page=${currentPage}&query=${currentSearchItem}&api_key=${apiKey}')


//     });


// });
const searchI = document.getElementById('search-input') ;
const submitForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", handleSubmit); // putting event listener on button
console.log("added event listener for search")

function handleSubmit(){
    console.log("started a search")
    // console.log(currentSearchItem);
    // console.log(searchI.value);
    currentSearchItem = searchI.value;
    console.log(currentSearchItem);
    fetchMovies();

}


closeSearchBtn.addEventListener('click', () => {

    currentSearchItem = '';
    currentPage = 1;
    moviesGrid.innerHTML = '';
    fetchMovies();


});




const loadMoreButton = document.getElementById('load-more-movies-btn');
loadMoreButton.classList.add('load-more-movies-btn')
// loadMoreButton.addEventListener('click', loadMovies);


// const loadMoreButton = document.createElement('div');
// loadMoreButton.id = 'load-more-movies-btn';
// loadMoreButton.classList.add('load-more-movies-btn');
// loadMoreButton.innnerHTML = "Load more"
// document.body.appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', loadMovies);


async function loadMovies()
{
    console.log("hello???")
    currentPage++;

    const movies = await fetchMovies(currentPage);
    generateMovieCard(movies);

    }


fetchMovies();


    




