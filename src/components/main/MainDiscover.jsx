import "./MainDiscover.css"
import Charts from "../../assets/Charts.svg"
import Albums from "../../assets/Albums-container.svg"
import More from "../../assets/more-container.svg"
import Covers from "../../assets/covers.jpg"

export default function MainDiscover(){
    return(
        <div className="maindiscover-container">
        <div className="text-container">
            <h3>Discover new music</h3>
            <div className="icons-container">
                <img src= {Charts}  alt="Icono microfono" />
                <img src= {Albums}  alt="Icono Albums" />
                <img src= {More}  alt="Icono More" />
            </div>
            <p>By joing you can benefit by listening to the latest albums released</p>
        </div>
        <div className="covers-img">
            <img src= {Covers} alt="Covers" />
        </div>
        </div>
    )  
}

