import "./Discover.css"
import Header from "../../components/header/Header"
import MainDiscover from "../../components/main/MainDiscover"
import Footer from "../../components/footer/Footer"
// import CircleOne from 
// import CircleTwo from 

export default function Discover() {
    return (
        <div className="discover-container"> 
            <div>
                <Header />
            </div>

            <div>
                <MainDiscover/>
                {/* <CircleOne/>
                <CircleTwo/> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}