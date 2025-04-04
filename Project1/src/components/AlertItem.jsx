import React from "react";
import { Link  } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { FaRegCalendar } from "react-icons/fa";

const AlertItem = ({alert, isSearchMode}) => {
    // Formater la date avec dayjs
    const formattedDate = dayjs(alert.date,'DD/MM/YYYY').locale('fr').format('dddd D MMMM YYYY');
    
    if (isSearchMode) {
        return (
            <div className="alertItem">
                <Link to={`/alert/${alert.id}`} className="scrollAlert">{alert.title}</Link>
            </div>
        );
    }
    return (
        <div className="alertItem">
            <Link to={`/alert/${alert.id}`} className="alertTitle">{alert.title}</Link>
            <p className="subject">{alert.sujet}</p>
            <div className="date">
                <FaRegCalendar className="calendar" /> 
                <p >{formattedDate}</p>
            </div>
            
        </div>
    );
};

export default AlertItem;