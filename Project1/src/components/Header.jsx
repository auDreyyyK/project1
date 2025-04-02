import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoMontreal.svg";
import "./Header.css";
import { FaUser, FaBars, FaSearch } from "react-icons/fa";


export function Header() { 
    return (
        <header className="header">
            {/* -------------LOGO------------*/}
           <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo de la ville de mtl" className="logo-img" />
            </Link>
           </div>

           {/* -------------MENU------------*/}
           <nav className="menu">
            <button className="menu-button">
                <FaBars className="menu-icon" />
                <span>Menu</span>
            </button>
           </nav>

           {/* -------------RECHERCHE------------*/}
           <div className="search">
            <button className="search-button">
                <FaSearch className="search-icon" />
                Recherche
            </button>
            
           </div>

           {/* -------------MON COMPTE------------*/}
           <div className="account">
            <a href="#">
                <FaUser className="account-icon" />
                Mon Compte</a>
           </div>
        
        </header>
    );
}