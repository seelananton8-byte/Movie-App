import { SlControlPlay } from "react-icons/sl"

function Banner({ movie }) {
    return(
        <div className="banner"
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}
        >
            <div className="banner-content">
                <h1>{movie.title || movie.name}</h1>
                    <p>{movie.overview}</p>
                    <button className="play-btn"><span><SlControlPlay/>PLAY NOW</span></button>
            </div>
        </div>
    )
}
export default Banner