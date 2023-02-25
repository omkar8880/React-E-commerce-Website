import React from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import { useFilterContext } from "./context/filtercontex";
import ProductList from "./ProductList";

function Products() {

    const { filter_products } = useFilterContext();
    console.log(filter_products);
    return (
        <div className="Products-main-page">
            <div><FilterSection /></div>
            <div><Sort />
                <ProductList /></div>
        </div>
    )
}

export default Products;