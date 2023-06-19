import "../home/Home.css"
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"

export default function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <Header />
                <Main />
            </div>
        </div>
    )
}