import "./Discover.css"
import Header from "../../components/header/Header"
import MainDiscover from "../../components/main/MainDiscover"
import Footer from "../../components/footer/Footer"


export default function Discover() {
    return (
        <div className="discover-container"> 
            <div>
                <Header />
            </div>

            <div>
                <MainDiscover/>
           
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}