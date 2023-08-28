import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars, reviews }) {
    const ratingStar = Array.from({ length: 5 }, (curElem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className="star-icon" />
                ) : stars >= number ? (
                    <FaStarHalfAlt className="star-icon" />
                ) : (
                    <AiOutlineStar className="star-icon" />
                )}
            </span>
        )
    })
    return (
        <div className="icon-style"> 
            {ratingStar}
        <p className = "star-reviews">({reviews} customer reviews)</p>
        </div>
    );
}

export default Star;