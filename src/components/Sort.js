import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../contex/filterContext";


function Sort() {
    const { filter_products, grid_view, setGridView, setListView } =
    useFilterContext();
    return (
        <div className="grid-sort-list">
            <div className="sorting-list--grid">
                <button
                    className={grid_view ? "active-sort-btn sort-btn" : "sort-btn"}
                    onClick={setGridView}>
                    <BsFillGridFill className="list-grid-icon" />
                </button>

                <button
                    className={!grid_view ? "active-sort-btn sort-btn" : " sort-btn"}
                    onClick={setListView}>
                    <BsList className="list-grid-icon" />
                </button>
            </div>
            {/* 2nd column  */}
            <div className="product-data-sort">
                <p>{`${filter_products.length} Product Available`}</p>
            </div>
            <div>
                Sort
            </div>
        </div>
    );
}

export default Sort;