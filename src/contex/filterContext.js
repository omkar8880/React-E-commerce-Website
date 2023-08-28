import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContex";
import reducer from '../reducer/filterReducer';

const filterContext = createContext();
const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : false,
}

export function FilterContextProvider({children}){
    const {products} = useProductContext();
    const [state , dispatch] = useReducer(reducer , initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
      };

      const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
      };

    useEffect(() => {
        dispatch({type : "LOAD_FILTER_PRODUCTS" , payload : products});
    } , [products])

    
    return <filterContext.Provider value = {{...state , setGridView , setListView}}>{children}</filterContext.Provider>
}

export const useFilterContext = () =>{
    return useContext(filterContext);
}

