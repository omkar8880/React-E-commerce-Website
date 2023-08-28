import React from "react";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./contex/filterContext";

function Products() {
    const { filter_products } = useFilterContext();
    console.log(filter_products);
    return (
        <div className="container-8 grid-filter-column">
            <div>
                <FilterSection />
            </div>

            <section className="product-view--sort">
                <div className="sort-filter">
                    <Sort />
                </div>
                <div className="main-product">
                    <ProductList />
                </div>
            </section>
        </div>
    );
}

export default Products;