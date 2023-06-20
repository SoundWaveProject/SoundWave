import Header from "../../components/header/Header.jsx";
import MainJoin from "../../components/main/MainJoin.jsx";
import Footer from "../../components/footer/Footer.jsx";
import CircleOne from "../../components/circles/CircleOne.jsx";
import CircleTwo from "../../components/circles/CircleTwo.jsx";
import "./Join.css";


export default function Join() {
    return (
        <div className="join-container">
            <div>
                <Header />
            </div>
            <div>
                <MainJoin />
                <CircleOne />
                <CircleTwo />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}