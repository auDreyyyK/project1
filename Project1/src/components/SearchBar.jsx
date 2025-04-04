import React from "react";
import "./SearchBar.css";
import { FaChevronDown} from "react-icons/fa";

const SearchBar = () => {
    return(
        <div>
            <div className="searchSection">
            <h1>Avis et Alertes</h1>
            <p>Trouver un avis</p>
            <input type="text" placeholder="Que cherchez-vous?" className="searchBar" />
            <button>Rechercher</button>
            </div>
            <div className="filter">
                <button>Arrondissement <FaChevronDown className="chevron"/></button>
                <button>Date <FaChevronDown className="chevron"/></button>
                <button>Sujet <FaChevronDown className="chevron"/></button>
            </div>
        </div>
    );
};

export default SearchBar;