import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

function AddAmountToggler({ amount, setIncrease, setDecrease }) {
    return (
        <div className="add-amount">
            <button onClick={() => setDecrease()} className="amount-btn"><AiOutlineMinus className="amount-btn" /></button>
            <p>{amount}</p>
            <button onClick={() => setIncrease()} className="amount-btn"><AiOutlinePlus className="amount-btn" /></button>
        </div>
    )
}

export default AddAmountToggler;