import React from "react";
import { useState, NavLink } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import CartButton from "./cartButton";


function AddToCart({ product }) {
    const { id, stock, colors } = product;
    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <>
            <div className="colors">
                <p className="single-product-p" style={{ fontSize: "0.9rem", color: "#6d7d8b" }}>
                    Colors:
                    {colors.map((curColor, index) => {
                        return (
                            <button
                                key={index}
                                style={{ backgroundColor: curColor }}
                                className={color === curColor ? "color-btnStyle color-active" : "color-btnStyle"}
                                onClick={() => setColor(curColor)}>
                                {color === curColor ? <FaCheck className="checkStyle" /> : null}
                            </button>
                        );
                    })}
                </p>
            </div>
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <CartButton />
        </>
    );
}

export default AddToCart;