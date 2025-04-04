import React from "react";
import { Link  } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { FaRegCalendar } from "react-icons/fa";

const AlertItem = ({alert}) => {
    // Formater la date avec dayjs
    const formattedDate = dayjs(alert.date,'DD/MM/YYYY').locale('fr').format('dddd D MMMM YYYY');
    return (
        <div className="alertItem">
            <Link to={`/alert/${alert.id}`}>{alert.title}</Link>
            <p className="subject">{alert.sujet}</p>
            <div className="date">
                <FaRegCalendar className="calendar" /> 
                <p >{formattedDate}</p>
            </div>
            
        </div>
    );
};

export default AlertItem;