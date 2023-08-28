import React from "react";
import { useFilterContext } from "../contex/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList(){
    const {filter_products , grid_view} = useFilterContext();
    console.log(filter_products);
    if(grid_view === true){
        return <GridView products = {filter_products}/>;
    }
    if(grid_view === false){
        return <ListView products = {filter_products}/>;
    }
}

export default ProductList;