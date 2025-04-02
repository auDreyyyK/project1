import React from "react";
import AlertItem from "./AlertItem";

const AlertList = ({alerts}) =>{
    return(
        <div>
            {alerts.map(alert =>(
                <AlertItem key={alert.id} alert={alert}/>
            ))}
        </div>
    );
};

export default AlertList;