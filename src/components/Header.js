import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function Header(){
    return(
        <div className="header">
            <NavLink to = "/">
                <img src="./images/photo.png" alt="" className="logo"/>
            </NavLink>
            <Nav />
            
        </div>
    );
}

export default Header;