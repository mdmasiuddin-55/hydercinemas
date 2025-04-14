// Movies page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample movie data (could be fetched from an API in a real app)
    const movies = [
        {
            id: 1,
            title: "Avengers: Endgame",
            image: "avengers.jpg",
            genre: "Action, Adventure",
            duration: "3h 1m",
            trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
        },
        {
            id: 2,
            title: "The Lion King",
            image: "lion-king.jpg",
            genre: "Animation, Adventure",
            duration: "1h 58m",
            trailer: "https://www.youtube.com/embed/7TavVZMewpY"
        },
        {
            id: 3,
            title: "Joker",
            image: "joker.jpg",
            genre: "Crime, Drama",
            duration: "2h 2m",
            trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
        },
        {
            id: 4,
            title: "Black Widow",
            image: "black-widow.jpg",
            genre: "Action, Adventure",
            duration: "2h 14m",
            trailer: "https://www.youtube.com/embed/RxAtuMu_ph4"
        },
        {
            id: 5,
            title: "Dune",
            image: "dune.jpg",
            genre: "Sci-Fi, Adventure",
            duration: "2h 35m",
            trailer: "https://www.youtube.com/embed/n9xhJrPXop4"
        },
        {
            id: 6,
            title: "No Time to Die",
            image: "bond.jpg",
            genre: "Action, Thriller",
            duration: "2h 43m",
            trailer: "https://www.youtube.com/embed/N_gD9-Oa0fg"
        }
    ];
    
    // Display all movies
    const moviesContainer = document.getElementById('allMovies');
    movies.forEach(movie => {
        moviesContainer.appendChild(createMovieCard(movie));
    });
    
    // Modal functionality
    const modal = document.getElementById('trailerModal');
    const modalClose = document.querySelector('.close');
    const trailerVideo = document.getElementById('trailerVideo');
    
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        trailerVideo.src = '';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            trailerVideo.src = '';
        }
    });
    
    // Create movie card element
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        const image = document.createElement('img');
        image.src = `assets/images/${movie.image}`;
        image.alt = movie.title;
        
        const info = document.createElement('div');
        info.className = 'movie-info';
        
        const title = document.createElement('h3');
        title.textContent = movie.title;
        
        const genre = document.createElement('p');
        genre.textContent = movie.genre;
        
        const duration = document.createElement('p');
        duration.textContent = movie.duration;
        
        const actions = document.createElement('div');
        actions.className = 'movie-actions';
        
        const trailerBtn = document.createElement('button');
        trailerBtn.className = 'btn';
        trailerBtn.textContent = 'Watch Trailer';
        trailerBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            trailerVideo.src = movie.trailer;
        });
        
        const bookBtn = document.createElement('button');
        bookBtn.className = 'btn';
        bookBtn.textContent = 'Book Now';
        bookBtn.addEventListener('click', () => {
            window.location.href = `booking.html?movie=${movie.id}`;
        });
        
        actions.appendChild(trailerBtn);
        actions.appendChild(bookBtn);
        
        info.appendChild(title);
        info.appendChild(genre);
        info.appendChild(duration);
        info.appendChild(actions);
        
        card.appendChild(image);
        card.appendChild(info);
        
        return card;
    }
});