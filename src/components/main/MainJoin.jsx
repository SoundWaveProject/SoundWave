import Form from "./form/Form";
import "./form/Form.css";
import "./MainJoin.css";
// import useMediaQueries from "media-queries-in-react";

export default function MainJoin() {

    // const mediaQueries = useMediaQueries({
    //     mobile: "screen and (max-width: 400px)",
    // });

    return (
        <div className="main-join-container">
            <div>
                <p className="main-container-text">Join the <span>fun.</span></p>
            </div>
            <div className="main-container-form"><Form /></div>
        </div>
        
    )
}
