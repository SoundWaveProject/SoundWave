import "./Header.css";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom"


export default function Header() {

    return (
        <div className="header">
            <div className="logo-container">
                <img  className="img-logo" src={logo} alt="Logo Sound wave"/>
                <Link to="/" className="links">SoundWave</Link>
            </div>

            <div className="nav-container">
                <Link to="/discover" className="links">Discover</Link>
                <Link to="/join" className="links">Join</Link>
            </div>
        </div>
    )
}