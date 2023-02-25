import React from "react";
import { NavLink } from "react-router-dom";

function PageNavigation(props) {
    return (
        <div className="page-nav-start">
            <NavLink to={"/"} className="page-nav">
                Home
            </NavLink> / {props.title}
        </div>
    )
}

export default PageNavigation;