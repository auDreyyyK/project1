import React from "react";
import AlertItem from "./AlertItem";

const AlertList = ({filteredAlerts}) =>{
    return(
        <div>
            <AlertItem 
            key={alert.id} 
            alert={alert} 
            />
        </div>
    );
};

export default AlertList;