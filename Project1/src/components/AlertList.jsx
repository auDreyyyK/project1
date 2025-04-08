import React from "react";
import AlertItem from "./AlertItem";

const AlertList = ({filteredAlerts, isSearchMode}) =>{
    const filtered = filteredAlerts.map(alert =>
        <AlertItem 
            key={alert.id} 
            alert={alert} 
            isSearchMode={isSearchMode}
        />
    );
    return(
        <div>
            {filtered}
        </div>
    );
};

export default AlertList;