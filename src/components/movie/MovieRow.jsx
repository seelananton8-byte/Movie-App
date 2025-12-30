import PropTypes from "prop-types";

function MovieRow({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div className="movie-card" key={movie.id}>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log("Selected Successfully:", movie.title)
                    }
                  }}
                  onClick={() => 
                    console.log("Clicked Successfully:", movie.title)
                  }
                />
               <p className="movie-name">
                  {movie.title || movie.name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
MovieRow.PropTypes = {
   title: PropTypes.string.isRequired,
   movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
   ).isRequired
}
export default MovieRow;
