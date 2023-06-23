import "./MainDiscover.css"
import Charts from "../../assets/Charts.svg"
import Albums from "../../assets/Albums-container.svg"
import More from "../../assets/more-container.svg"
import Covers from "../../assets/covers.jpg"

export default function MainDiscover(){
    return(
        <div className="maindiscover-container">
        <div className="text-container">
            <h3 className="title-box">Discover new music</h3>
            <div className="icons-container">
                <img className="icon" src= {Charts}  alt="Icono microfono" />
                <img className="icon" src= {Albums}  alt="Icono Albums" />
                <img className="icon" src= {More}  alt="Icono More" />
            </div>
            <p className="subtitle-box">By joing you can benefit by listening to the latest albums released</p>
        </div>
        <div>
            <img className="covers-img" src= {Covers} alt="Covers" />
        </div>
        </div>
    )  
}

