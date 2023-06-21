import "../home/Home.css"
import Header from "../../components/header/Header"
import MainHome from "../../components/main/MainHome"
import CircleOne from "../../components/circles/CircleOne"
import CircleTwo from "../../components/circles/CircleTwo"
import CircleThree from "../../components/circles/CircleTwo"

export default function Home() {
    return (
        <div className="home-container"> 
            <div className="header-home-container">
                <Header />
            </div>

            <div className="main-container">
                <MainHome/>
                <CircleOne/>
                <CircleTwo/>
                <CircleThree/>
            </div>
        </div>
    )
}