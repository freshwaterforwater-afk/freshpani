import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Banner from './components/Banner';
import Copyright from './components/Copyright';
import Deal from './components/Deal';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Section from './components/Section';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Products from './components/Sections/Products';
import SingleProduct from './components/Sections/SingleProduct';
import Cart from './components/Sections/Cart';
import Checkout from './components/Sections/Checkout';
import "./App.css"
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {



  return (
    <Router>
      <ScrollToTop/>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Product />
            <Deal />
            <Banner />
            <Section />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
};

export default App;