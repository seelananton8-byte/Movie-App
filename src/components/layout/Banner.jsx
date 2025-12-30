import PropTypes from 'prop-types'
import { SlControlPlay } from "react-icons/sl"
import { UI_TEXT } from "../../constants/Strings"
import { TMDB_BASE_URL } from "../../constants/api"

function Banner({ movie }) {
    const handlePlay = () => {
    console.log("Play movie:", movie.title);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePlay();
    }
  };
    return(
        <div className="banner"
        style={{backgroundImage: `url(${TMDB_BASE_URL}/original/${movie.backdrop_path})`}}
        >
            <div className="banner-content">
                <h1>{movie.title || movie.name}</h1>
                    <p>{movie.overview}</p>
                <button 
                    tabIndex={0}
                    role='button'
                    onClick={handlePlay}
                    onKeyDown={handleKeyDown}
                    className="play-btn"
                    aria-label='play movie'
                    >
                    <span><SlControlPlay/>{UI_TEXT.PLAY_NOW}</span>
                </button>
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