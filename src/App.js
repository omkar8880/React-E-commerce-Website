import './App.css';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import About from './About';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactFooter from './components/ContactFooter';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <ContactFooter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
