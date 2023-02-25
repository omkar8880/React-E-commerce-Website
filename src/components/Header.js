import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";

function Header() {
    return (
        <div className="header">
            <NavLink to={"/"}>
                <img src="/images/omkar.png" alt="No Found" className="image" />
            </NavLink>
            <Navbar />
        </div>
    )
}

export default Header;