import React from "react";
import { useParams } from "react-router-dom";
import alerts from "../data/alerts";
import Subscribe from "../components/Subscribe";

const DetailPage = () =>{
    const {id} = useParams();
    const alert = alerts.find(a => a.id === parseInt(id));

    return alert ? (
        <div>
            <main>
                <div className="alertDetail">
                    <div>
                        <h2>{alert.title}</h2>
                        <p>Publié le {alert.date}</p>
                    </div>
                    <p>{alert.detail}</p>
                </div>
                <Subscribe />
            </main>
        </div>
    ): <p>Alerte non trouvée</p>
};

export default DetailPage;
