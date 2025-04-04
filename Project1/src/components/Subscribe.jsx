import { FaArrowRight } from "react-icons/fa";
import React from "react";


const Subscribe = () =>{
    return(
        <div className="abonner">
            <h4>S'abonner aux alertes</h4>
            <p>Pour recevoir des avis et alertes par courriel ou texto, vous devez avoir créé un compte.</p>
            <a href="#">M'abonner <FaArrowRight className="arrow"/></a>
        </div>
    )
}
export default Subscribe;