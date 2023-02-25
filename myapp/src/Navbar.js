import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

function Navbar() {
    const [menu, setMenu] = useState()

    return (
        <div className={menu ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to={"/"} className="nav" onClick={() => setMenu(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className="nav" onClick={() => setMenu(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} className="nav" onClick={() => setMenu(false)}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"} className="nav" onClick={() => setMenu(false)}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={"/cart"} className="nav cart-trolley-link">
                        <AiOutlineShoppingCart className="cart-trolley" />
                        <span className="cart-total-items">10</span>
                    </NavLink>
                </li>
            </ul>
            <div className="mobile-nav-btn ">
                <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenu(true)} />
                <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenu(false)} />
            </div>
        </div>
    )
}

export default Navbar;