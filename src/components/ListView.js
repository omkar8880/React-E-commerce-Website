import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import {
    NavLink
} from "react-router-dom";
function ListView({ products }) {
    return (
        <div className="container-7">
            {products.map((curElem) => {
                const { id, name, image, price, description } = curElem;
                return (
                    <div className="list-card-data grid-two-column-list-view">
                        <figure className="img-list-view">

                            <img src={image} alt={name} />
                        </figure>


                        <div className="card-data-list-view">
                            <h3 className="list-view-h3">{name}</h3>
                            <p style = {{marginTop : "-1rem" , color : "#554dd9"}}>
                                <FormatPrice price={price} />
                            </p>
                            <p style = {{color: "#3c4c5a" , fontSize : "0.9rem"}}>{description.slice(0, 98)}...</p>

                            <NavLink to={`/singleproduct/${id}`} className="btn-main">
                                <button className="btn">Read More</button>
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListView;