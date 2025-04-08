import React, {useState} from "react";
import "./SearchBar.css";
import { FaChevronDown} from "react-icons/fa";
import FilteredArrondissement from "./FilteredArrondissement";

function SearchBar({searchField, setSearchField}) {
    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    return (
        <div>
            <div className="searchSection">
                <h1>Avis et Alertes</h1>
                <p>Trouver un avis</p>
                <div className="searchBarContainer">
                    <input
                        type="search"
                        placeholder="Que cherchez-vous?"
                        className="searchBar"
                        onChange={handleChange}
                        value={searchField}
                    />
                    
                </div>
            </div>
            <div className="filter">
                {/* <FilteredArrondissement arrondissement={details}/> */}
                <button>
                    Date <FaChevronDown className="chevron" />
                </button>
                <button>
                    Sujet <FaChevronDown className="chevron" />
                </button>
            </div>
            
        </div>
    );
}


export default SearchBar;