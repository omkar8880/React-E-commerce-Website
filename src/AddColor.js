import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AddAmountToggler from "./AddAmountToggler";

function AddColor({ product }) {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    function setIncrease() {
        return amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    function setDecrease() {
        return amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    return (
        <div className="colors">
            <p><strong>Colors :</strong>{colors.map((curColor, index) => {
                return (
                    <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? "btnStyle active" : "btnStyle"} onClick={() => setColor(curColor)}>{color === curColor ? <FaCheck className="checkStyle" /> : null}
                    </button>
                )
            }
            )}</p>
            <div>
                <AddAmountToggler amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
            </div>
            <NavLink to={"/cart"} className="add-to-cart">
                <button className="button">ADD TO CART</button>
            </NavLink>
        </div>
    )
}

export default AddColor;