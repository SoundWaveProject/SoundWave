import "../join/Join.css"
import Header from "../../components/header/Header"
import MainJoin from "../../components/main/MainJoin"
import Footer from "../../components/footer/Footer"

export default function Join(){
return(

    <div className="join-container"> 
            <div>
                <Header />
            </div>

            <div>
                <MainJoin/>
                {/* <CircleOne/>
                <CircleTwo/> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
)

}