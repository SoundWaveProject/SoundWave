import "../home/Home.css"
import Header from "../../components/header/Header"
import MainHome from "../../components/main/MainHome"
import CircleThreeHome from "../../components/circles/CircleThreeHome"

export default function Home() {
    return (
        <div className="home-container"> 
            <div className="header-home-container">
                <Header />
            </div>

            <div className="main-container">
                <MainHome/>
                <CircleThreeHome/>
            </div>
        </div>
    )
}