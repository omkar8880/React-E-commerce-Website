import React from "react";
import { useFilterContext } from "./context/filtercontex";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList() {
    const { filter_products, setGridView } = useFilterContext();
    if (setGridView) {
        return <GridView products={filter_products} />
    }
    else {
        return <ListView products={filter_products} />
    }
}

export default ProductList