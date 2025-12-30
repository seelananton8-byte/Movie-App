import { GoChevronDown } from "react-icons/go"
import { CiSearch } from "react-icons/ci"

function Navbar() {
    return(
        <nav  className="navbar">
            <ul className="menu">
                <li><span className="nav-text">HOME</span><span className="divider">|</span></li>
                <li><span className="nav-text">MOVIE</span><span className="divider">|</span></li>
                <li><span className="nav-text">TV SHOW</span><span className="divider">|</span></li>
                <li><span className="nav-text">WEB SERIES</span><span className="divider">|</span></li>
                <li><span className="nav-text">PREMIUM</span></li>
            </ul>

            <span className="nav-text"><CiSearch/></span><span className="divider">|</span>
            <span className="nav-text">&#127757;</span>
            <span className="divider" style={{marginRight: "10px", color: "white"}}>EN <GoChevronDown/></span>
            <button className="signin">Sign In</button>
        </nav>
    )
}
export default Navbar