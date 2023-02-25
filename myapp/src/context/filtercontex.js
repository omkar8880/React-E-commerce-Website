// import React, { createContext, useContext, useReducer, useEffect } from "react";
// import { useProductContext } from "./productcontex";
// import reducer from "../reducer/filterreducer"

// const filterContext = createContext();
// const initialSate = {
//     filter_products: [],
//     all_products: []
// }

// export function filterContextProvider({ children }) {

//     const { products } = useProductContext();
//     const [state, dispatch] = useReducer(reducer, initialSate);

//     useEffect(() => {
//         dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
//     }, []);
//     return (
//         <div>
//             <filterContext.Provider value={{ ...state }}>
//                 {children}
//             </filterContext.Provider>
//         </div>
//     )
// }

// export const useFilterContext = () => {
//     return useContext(filterContext);
// }

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterreducer";
import { useProductContext } from "./productcontex";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true
};

const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView }}>{children}</FilterContext.Provider>
    );
};

// custom hooks
const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext }