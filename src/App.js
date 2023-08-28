import './App.css';
import './css/header.css';
import './css/home.css';
import './css/contact.css';
import './css/footer.css';
import './css/product.css';
import './css/products.css';
import './css/singleProduct.css';
import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from './Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
        <Routes>
            <Route path = "/" element = {<Home />}></Route>
            <Route path = "/about" element = {<About />}></Route>
            <Route path = "/contact" element = {<Contact />}></Route>
            <Route path = "/products" element = {<Products />}></Route>
            <Route path = "/singleproduct/:id" element = {<SingleProduct />}></Route>
            <Route path = "/cart" element = {<Cart />}></Route>
            <Route path='*' element = {<ErrorPage />}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
