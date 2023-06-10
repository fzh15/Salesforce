//new code ---------







//old code-------
//read data results 


//aaply them to function and go through a looop that will apply it to each card made 


const apiKey = "92e0489f41b248b8bdda68b2fda302cd"
const addMovie = (MovieObj) => {

    const Movie = docuemnt.querySelector('#movies-grid')
    const btn = document.createElement('#load-more-movies-btn')
    li.innerHTML = "${MovieObj}"
    Movie.appendChild(li)
}

const apiCall = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=92e0489f41b248b8bdda68b2fda302cd")
    const data = await res.json()
    console.log(`The data is ${data.data[0].type}`)
}

const GMovieElement =  document.querySelector('#movies-grid')



async function getData(){

    //drill into data thats giveen by url; read data then put into a general array 

    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=92e0489f41b248b8bdda68b2fda302cd")
    const jsonrespose = await response.json();
    console.log(jsonrespose.results)


    // able to manipulate using let type
    let movies = jsonrespose.results
    movies.forEach(movie => {

        //code 
       // generateMovieCard(movie.title,movie.poster_path, movie.votes_average )
        const MElement = generateMovieCard(movie.title,movie.poster_path, movie.vote_average )

        GMovieElement.innerHTML += MElement;

    }
    )


    // .then((response) => response.json())
    // .then((json) => console.log("1", json));
}

getData()

//stores the information from api in the movie card 
function generateMovieCard(title, img, votes)
{
    return ` 
    <div class = "movie-card">
            <p class="movie-title">${title}</p> 
            <img src="https://image.tmdb.org/t/p/w342${img}" alt="image of movie" class="movie-postee"><br><br>
            <p class="movie-votes">${votes}</sp><br><br><br>
            <!--rating incremnetation-->
            </div>
    `
};


// generateMovieCard.ForEach(movie => {
    

// console.log(generateMovieCard("title", "www.google.com", 4))


// })



// MovieCard("title", "img", "votes")

// async function MoreMovies(){
//     currentPage++;
//     apiCall = newU(currentPage)
//     getData(apiCall)

// }


// const Dform = document.querySelector('#search-input')
// document.getElementbyId(formbuttn).addEventListener("submit", (incident)=> {

//         incident.preventdefault();
//         const sTerm= Dform.value;
//         console.log(sTerm);
         
// } )


/// load more button 






async function loadMovies(){
    currentPage++;
    apiUrl = newUrl(currentPage)
    fetchMovies(apiUrl);

    document.addEventListener('load', async() => {
    const movies = await fetchMovies(currentPage);
    generateMovieCards(movies);
    3});

    const loadMoreButton = document.getElement('load-more-movies-btn');
    loadMoreButton.addEventListener('click', loadMovies);

    const searchI = document.getElementById( 'search-input') ;
    const searchB = document. getElementById( 'search-button' );
    const submittB = document.getElementById( 'search-form' );

    submitBtn.addEventListener('submit', (incident) => {
    const moviesGrid = document.getElementById( 'movies-grid');
    moviesGrid.innerHTML = ' '
    incident.preventDefault();
    const searchH = incident.target.search.value;
    fetchMovies('https://api.themoviedb.org/3/search/movie?&page=*+currentPage+"Gguery=*+searchNow+Â°&apikey='+ currentPage + '&query='+ apikey)
    })
}


