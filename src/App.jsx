import { Fragment, useEffect, useState } from "react"
import Navbar from "./components/layout/Navbar"
import Banner from "./components/layout/Banner"
import MovieRow from "./components/movie/MovieRow"
import Button from "./components/ui/Button"

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
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
      );

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
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
          <p style={{ color: "yellowgreen", marginLeft: "20px", paddingTop: "30px" }}>
            ONLINE STREAMING
          </p>
          <Button />
          <MovieRow title="Upcoming Movies" movies={movies} />
        </>
      )}
    </Fragment>
  );
}
export default App