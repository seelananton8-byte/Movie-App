import PropTypes from 'prop-types'
import { SlControlPlay } from "react-icons/sl"
import { UI_TEXT } from "../../constants/Strings"
import { TMDB_BASE_URL } from "../../constants/api"

function Banner({ movie }) {
    return(
        <div className="banner"
        style={{backgroundImage: `url(${TMDB_BASE_URL}/original/${movie.backdrop_path})`}}
        >
            <div className="banner-content">
                <h1>{movie.title || movie.name}</h1>
                    <p>{movie.overview}</p>
                    <button className="play-btn"><span><SlControlPlay/>{UI_TEXT.PLAY_NOW}</span></button>
            </div>
        </div>
    )
}
Banner.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        overview: PropTypes.string,
        backdrop_path: PropTypes.string
    }).isRequired
}
export default Banner