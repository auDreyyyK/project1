import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoMontreal.svg";
import "./Header.css";
import { FaUser} from "react-icons/fa";


export function Header() { 
    return (
        <header className="header">
            {/* -------------LOGO------------*/}
           <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo de la ville de mtl" className="logo-img" />
            </Link>
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