import React, {useState} from "react";

function FilteredArrondissement({arrondissement = [], selectedArrondissement, onArrondissementChange}) {

    //liste unique des arrondissements a partie de alerts.js
    const arrondissementList = [...new Set(arrondissement.map(alert => alert.arrondissement))];



    return (
            <select name="filter" onChange={(e) => onArrondissementChange(e.target.value)} value={selectedArrondissement}>
                <option value="All">Arrondissement</option>
                {arrondissementList.map((arrondissement, index) => (
                    <option key={index} value={arrondissement}>
                        {arrondissement}
                    </option>
                ))}
            </select>
            
    );
}

export default FilteredArrondissement;