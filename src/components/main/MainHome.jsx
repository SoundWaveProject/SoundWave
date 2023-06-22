import "./MainHome.css";
import img from "../../assets/landing-page-girl.png" 
import {Link} from "react-router-dom"
import CircleOneHome from "../circles/CircleOneHome";
import CircleTwoHome from "../circles/CircleTwoHome";

export default function Main() {
    return ( 
        <div className="main-home-container">
            <div className="img-principal">
                <img className="img-girl"src= {img} alt="imagen principal, mujer de perfil" />
                <CircleOneHome/>
                <CircleTwoHome/>
            </div>

            <div className="container-title-btn">
                <h1 className="title">Feel The Music</h1>
                <h4 className="subtitle">Stream over 20 thousand songs with one click</h4>
                <button className="btn-primary"> 
                    <Link className="link-btn" to="/join">Join Now</Link>
                </button>
            </div>
       </div>
       
    )
}