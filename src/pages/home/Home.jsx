import "../home/Home.css"
import Header from "../../components/header/Header"

export default function Home() {
    return (
        <div className="home">
            <h4>Home</h4>
            <div className="home-header">
                <Header />
            </div>
        </div>
    )
}