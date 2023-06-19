import "./MainHome.css";
import img from "../../assets/landing-page-girl.png" 

export default function Main() {
    return ( 
        <div className="main-container">
            <div className="img-principal">
                <img src= {img} alt="imagen principal, mujer de perfil" />
            </div>

            <div className="container-title-btn">
                <h1 className="title">Feel The Music</h1>
                <h4 className="subtitle">Stream over 20 thousand songs with one click</h4>
                <button className="btn-primay">Join Now</button>
            </div>
       </div>
    )
}