import { Fragment, useEffect, useState } from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import MovieRow from "./MovieRow"
import Button from "./Button"

const API_KEY = "eae94bbe3b15fcedc7ddf1ff309939df"

function App() {
  const [movies, setMovies] = useState([])
  const [bannerMovie, setBannerMovie] = useState(null)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
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