import "../home/Home.css"
import Header from "../../components/header/Header"
import MainHome from "../../components/main/MainHome"
// import CircleOne from 
// import CircleTwo from 

export default function Home() {
    return (
        <div className="home-container"> 
            <div>
                <Header />
            </div>

            <div>
                <MainHome/>
                {/* <CircleOne/>
                <CircleTwo/> */}
            </div>
        </div>
    )
}