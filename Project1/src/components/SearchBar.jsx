import React, {useState} from "react";
import "./SearchBar.css";
import Scroll from "./Scroll";
import AlertList from "./AlertList";
import { FaChevronDown} from "react-icons/fa";

function SearchBar({ details = [] }) {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const filteredAlerts =Array.isArray(details)? details.filter(alert => 
            alert.title.toLowerCase().includes(searchField.toLowerCase())
    ) : [];
    const handleChange = (e) => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };

    function searchList(){
        if(searchShow){
            return(
                <Scroll>
                    <AlertList 
                    filteredAlerts={filteredAlerts} 
                    isSearchMode={true} />
                </Scroll>
            )
        }
        return null;
    }

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
                    />
                    <div className="scrollSection">
                    {searchList()}
                
                    </div>
                </div>
            </div>
            <div className="filter">
                <button>
                    Arrondissement <FaChevronDown className="chevron" />
                </button>
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