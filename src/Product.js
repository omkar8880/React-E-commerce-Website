import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";

function Product(curElem) {
    const { id, image, name, category, price } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`} className="product-link">
            <div className="card">
                <figure className="product-figure">
                    <img src={image} alt={name} className="product-image"/>
                    <figcaption className="caption">{category}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3 style ={{fontSize: "1.2rem" , color : "rgba(29 ,29, 29, .8)"}}>{name}</h3>
                        <p className="card-data--price">{<FormatPrice price = {price} />}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Product;