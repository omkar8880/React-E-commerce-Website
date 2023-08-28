import React from "react";
import { NavLink } from "react-router-dom";

function PageNavigation({title}){
    return (
        <div className = "page-nav"> 
            <NavLink to="/" className = "page-nav-link">Home </NavLink> / {title}
        </div>
    );
}

export default PageNavigation;