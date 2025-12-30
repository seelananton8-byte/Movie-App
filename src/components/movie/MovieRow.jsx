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

export default MovieRow;
