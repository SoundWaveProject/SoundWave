import "./Header.css";
import logo from "../../assets/logo.svg"
export default function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="img-logo" src={logo} alt="Logo Sound waves" />
                <p className="text-logo">SoundWave</p>
            </div>
            <div className="buttons-container">
                <button className="header-btn">Discover</button>
                <button className="header-btn">Join</button>
            </div>
        </div>
    )
}