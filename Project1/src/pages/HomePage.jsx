import React from "react";
import alerts from "../data/alerts"
import AlertItem from "../components/AlertItem";
import SearchBar from "../components/SearchBar"
import Subscribe from "../components/Subscribe"
import { data } from "react-router-dom";
const HomePage = () => {
    return(
        <div>
            <SearchBar details={alerts} />
            <main>
                <div className="alertList">
                    {alerts.length > 0 ? (
                    alerts.map(alert => (
                        <AlertItem key={alert.id} alert={alert}/>
                    ))
                    ):(
                    <p>Aucune alerte disponible</p>
                    )}
                </div>
                <Subscribe />
            </main>
        </div>
    );
};

export default HomePage;
