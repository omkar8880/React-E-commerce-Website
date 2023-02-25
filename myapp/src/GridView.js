import React from "react";
import Product from "./Product";

function GridView({ products }) {
    return (
        <div className="grid-view grid-column-three">
            {products.map((curElem, id) => {
                return <Product key={curElem.id} {...curElem} />
            })}
        </div>
    )
}

export default GridView;

