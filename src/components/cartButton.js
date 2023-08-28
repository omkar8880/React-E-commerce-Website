import React from "react";
import { NavLink } from "react-router-dom";

function CartButton() {
    return (
        <>
            <NavLink to={"/cart"}>
                <button className="btn">Add To Cart</button>
            </NavLink>
        </>
    );
}

export default CartButton;