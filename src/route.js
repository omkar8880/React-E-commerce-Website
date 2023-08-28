import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

function route(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />}></Route>
            <Route path = "/about" element = {<About />}></Route>
            <Route path = "/contact" element = {<Contact />}></Route>
            <Route path = "/products" element = {<Products />}></Route>
            <Route path = "/singleproduct/:id" element = {<SingleProduct />}></Route>
            <Route path = "/cart" element = {<Cart />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default route;