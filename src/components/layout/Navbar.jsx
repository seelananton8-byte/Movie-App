import { GoChevronDown } from "react-icons/go"
import { CiSearch} from "react-icons/ci"
import { UI_TEXT } from "../../constants/Strings"

function Navbar() {
    return(
        <nav  className="navbar">
            <ul className="menu" role="menubar">
                <li><a href="#home" role="none" aria-label="Go to home page" className="nav-text">HOME</a><span className="divider">|</span></li>
                <li><a href="/movie" role="none"aria-label="Browse movies" className="nav-text">MOVIE</a><span className="divider">|</span></li>
                <li><a href="/tvshow" role="none"aria-label="watch next shows" className="nav-text">TV SHOW</a><span className="divider">|</span></li>
                <li><a href="/webseries" role="none" aria-label="watch web series" className="nav-text">WEB SERIES</a><span className="divider">|</span></li>
                <li><a href="/premium" role="none" aria-label="purchase premium packs" className="nav-text">PREMIUM</a></li>
            </ul>

            <span className="nav-text"><CiSearch/></span>
            <span className="divider">|</span>
            <span className="nav-text">
                <span className="world-emoji">🌍</span>
            </span>
            <span className="divider" style={{marginRight: "10px", color: "white"}}>EN <GoChevronDown/></span>
            <button className="signin">{UI_TEXT.SIGN_IN}</button>
        </nav>
    )
}
export default Navbar