import "../footer/Footer.css"
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg"
import { Link } from "react-router-dom"

export default function Footer(){
return(
    <div className="footer-container">
       <div className="footer-links">
                <Link className="links about">About Us</Link>
                <Link className="links">Contact</Link>
        </div>
         <div className="footer-social-media">
            <div className="twitter-container">
                <img className ="twitter" src={Twitter} alt="Twitter icon"/>
                <Link className="links media">Twitter</Link>
                </div>
                <div className="facebook-container">
                <img className="facebook" src={Facebook} alt="Facebook icon"/>
                <Link className="links media">Facebook</Link>
                </div>
         </div>
    
    </div>
)  
}

