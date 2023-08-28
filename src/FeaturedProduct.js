import React from "react";
import { useProductContext } from "./contex/ProductContex";
import Product from "./Product";

function FeaturedProduct() {
    const { isLoading, featuredProducts } = useProductContext();
    if (isLoading) {
        return <div>...LOADING</div>
    }
    return (
        <div className="container-5">
            <div className="intro-data-1">CHECK NOW!</div>
            <div >
                <h1 className="common-heading-1">OUR FEATURED SERVICES</h1>
            </div>
            <div className="grid-three-column-1">
                {featuredProducts.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />;
                })}
            </div>
        </div>
    );
}

export default FeaturedProduct;