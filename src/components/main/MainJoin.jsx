import Form from "./form/Form";
import "./form/Form.css";
import "./MainJoin.css";

export default function MainJoin() {
    return (
        <div className="main-join-container">
            <div>
                <p className="main-container-text">Join the <span>fun.</span></p>
            </div>
            <div className="main-container-form"><Form /></div>
        </div>  
    )
}
