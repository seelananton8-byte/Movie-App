import { Fragment, useEffect, useState } from "react"
import Navbar from "./components/layout/Navbar"
import Banner from "./components/layout/Banner"
import MovieRow from "./components/movie/MovieRow"
import Button from "./components/ui/Button"

const apiKey = import.meta.env.VITE_API_KEY;


function App() {
  const [movies, setMovies] = useState([])
  const [bannerMovie, setBannerMovie] = useState(null)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    )
    const data = await response.json()
    setMovies(data.results)
    setBannerMovie(data.results[0])
  }

  return(
    <Fragment>
      <Navbar />
      {bannerMovie && <Banner 
      movie={bannerMovie}  />}
      <p style={{color: 'yellowgreen', marginLeft: '20px', paddingTop: '30px'}}>ONLINE STREAMING</p>
      <Button />
      <MovieRow title="Upcoming Movies" movies={movies} />
    </Fragment>
  )
}
export default App