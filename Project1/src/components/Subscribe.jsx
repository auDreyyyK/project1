import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const Subscribe = () =>{
    return(
        <div className="abonner">
            <h3>S'abonner aux alertes</h3>
            <p>Pour recevoir des avis et alertes par courriel ou texto, vous devez avoir créé un compte.</p>
            <Popup 
                trigger={<button className="subscribe-btn">
                    M'abonner <FaArrowRight className="arrow"/></button>}
                >
                <p className="popupMsg">Cette fonctionnalité n'est pas encore disponible</p> 
            </Popup>
        </div>
    )
}
export default Subscribe;