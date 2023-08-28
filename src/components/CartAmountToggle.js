import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button className="amount-toggle-cart" onClick={() => setDecrease()}>
          <FaMinus className = "sign-toggler"/>
        </button>
        <div className="amount-style">{amount}</div>
        <button className="amount-toggle-cart" onClick={() => setIncrease()} style = {{paddingLeft: "2rem"}}>
          <FaPlus className = "sign-toggler"/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;