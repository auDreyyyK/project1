import React from "react";

function SearchBar({onSearchChange}) {
    const handleChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
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
                    
                </div>
            </div>
            
    );
}


export default SearchBar;