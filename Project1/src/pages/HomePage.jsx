import React, { useState }from "react";
import alerts from "../data/alerts"
import AlertItem from "../components/AlertItem";
import SearchBar from "../components/SearchBar"
import Subscribe from "../components/Subscribe"
const HomePage = () => {
    const [searchField, setSearchField] = useState("");
    const filteredAlerts = alerts.filter(alert => alert.title.toLowerCase().includes(searchField.toLowerCase()));
    return(
        <div>
            <SearchBar searchField={searchField} setSearchField={setSearchField} />
            <main>
                <div className="alertList">
                    {filteredAlerts.length > 0 ? (
                    filteredAlerts.map(alert => (
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
