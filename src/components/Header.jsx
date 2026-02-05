import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { CartContext } from '../context/CartContext'; // Assuming you have this now

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // const { cart } = useContext(CartContext);
  // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={`top-header-area ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`} id="sticker" style={{ backgroundColor: "#051922" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* logo */}
              <div className="site-logo">
                <Link to="/" onClick={closeMenu}>
                  <img src="/img/logo.png" alt="Aqua Guard Logo" style={{width:"150%"}} />
                </Link>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="mobile-menu-toggle d-lg-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"} style={{color: '#fff', fontSize: '24px'}}></i>
              </div>
              
              {/* menu start */}
              <nav className={`main-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className={isMobileMenuOpen ? 'active' : ''}>
                  <li className={location.pathname === '/' ? 'current-list-item' : ''}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                  </li>
                  <li className={location.pathname === '/about' ? 'current-list-item' : ''}>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                  </li>
                  <li className={location.pathname.includes('/product') ? 'current-list-item' : ''}>
                    <Link to="/products" onClick={closeMenu}>Products</Link>
                  </li>
                  <li className={location.pathname === '/contact' ? 'current-list-item' : ''}>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                  </li>
                  <li>
                    <div className="header-icons">
                      <Link className="shopping-cart" to="/cart" onClick={closeMenu}>
                        <i className="fas fa-shopping-cart" />
                        {/* {cartCount > 0 && <span className="cart-badge">{cartCount}</span>} */}
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* menu end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;