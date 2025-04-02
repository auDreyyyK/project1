import React, {useState} from "react";
import { Header } from "../components/Header";
import {SearchBar} from "../components/SearchBar";
import {AlertList} from "../components/AlertList";
import {alertsData} from "../data/alerts"

const HomePage = () => {
    const [alerts, setAlerts] = useState(alertsData);

    return(
        <div>
        <h2>
            <SearchFilter/>
            <AlertList alerts={alerts}/>
        </h2></div>
    );
};

export default HomePage;
