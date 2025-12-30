import { Fragment, useEffect, useState } from "react"
import Navbar from "./components/layout/Navbar"
import Banner from "./components/layout/Banner"
import MovieRow from "./components/movie/MovieRow"
import Button from "./components/ui/Button"
import { UI_TEXT } from "./constants/Strings"
import { TMDB_IMAGE_URL } from "./constants/api"

const apiKey = import.meta.env.VITE_API_KEY;


function App() {
  const [movies, setMovies] = useState([])
  const [bannerMovie, setBannerMovie] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${TMDB_IMAGE_URL}/trending/all/day?api_key=${apiKey}`
      )

      if (!res.ok) {
        throw new Error(`API Fetching Error: ${res.status}`);
      }

      const data = await res.json();

      if (!data.results?.length) {
        throw new Error("No data available");
      }

      setMovies(data.results);
      setBannerMovie(data.results[0]);

    } catch (err) {
      console.error(err);
      setError(err.message);
      setBannerMovie(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <Navbar />

      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!error && bannerMovie && <Banner movie={bannerMovie} />}

      {!error && (
        <>
          <p className="online-streaming-text">{UI_TEXT.ONLINE_STREAMING}</p>
          <Button />
          <MovieRow title={UI_TEXT.UPCOMING_MOVIES} movies={movies} />
        </>
      )}
    </Fragment>
  );
}
export default App