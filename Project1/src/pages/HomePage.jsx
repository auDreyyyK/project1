import React, { useState }from "react";
import alerts from "../data/alerts"
import AlertItem from "../components/AlertItem";
import SearchBar from "../components/SearchBar"
import Subscribe from "../components/Subscribe"
import FilteredArrondissement from "../components/FilteredArrondissement";
import FilteredSubject from "../components/FilteredSubject";
import dayjs from "dayjs";


const HomePage = () => {

    // const pour la barre de recherche
    const [searchField, setSearchField] = useState("")
    const handleSearchChange = (value) => {
        setSearchField(value);
    };

    // const pour filtrer par arrondissement
    const [selectedArrondissement, setSelectedArrondissement] = useState("All");
    const handleArrondissementChange = (value) => {
        setSelectedArrondissement(value);
    };

    // const pour filtrer par date
    const [selectedDate, setSelectedDate] = useState("All");
    const handleDateChange = (value) => {
        setSelectedDate(value);
    }
    // const pour filtrer par sujet
    const [selectedSubject, setSelectedSubject] = useState("All");
    const handleSubjectChange = (value) => {
        setSelectedSubject(value);
    }


    const filteredAlerts = alerts.filter((alert) => {
        const matchTitle = alert.title.toLowerCase().includes(searchField.toLowerCase())
        const matchArrondissement = selectedArrondissement === "All" || alert.arrondissement === selectedArrondissement;
        const matchSubject = selectedSubject === "All" || alert.sujet === selectedSubject;
        return matchTitle && matchArrondissement && matchSubject;
    })
    .sort((a, b) => {
        const dateA = dayjs(a.date, 'DD/MM/YYYY');
        const dateB = dayjs(b.date, 'DD/MM/YYYY');
        return dateB - dateA;
    });


    return(
        <div>
            <>
                <SearchBar onSearchChange={handleSearchChange} />
                <div className="filter">

{/* -------------Filtre arrondissement ------------------*/}
                    <div >
                        <FilteredArrondissement 
                            arrondissement={alerts}
                            selectedArrondissement={selectedArrondissement}
                            onArrondissementChange={handleArrondissementChange}
                        />
                    </div>


{/* -------------Filtre sujet ------------------*/}
                   <div>
                        <FilteredSubject 
                            subject={alerts}
                            selectedSubject={selectedSubject}
                            onSubjectChange={handleSubjectChange}
                        />
                    </div>
                </div>
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
            </>
        </div>
    );
};

export default HomePage;
