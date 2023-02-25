import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`} className="product">
            <div className="card">
                <figure>
                    <img className="card-img" src={image} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3 className="card-data-heading">{name}</h3>
                        <p className="card-data-price"><FormatPrice price={price} /></p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;