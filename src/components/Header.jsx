import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  // This hook helps us identify which page is active to highlight the menu item
  const location = useLocation();

  return (
    <div className="top-header-area" id="sticker" style={{ backgroundColor: "#051922" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* logo */}
              <div className="site-logo">
                <Link to="/">
                  <img src="/img/logo.png" alt="Aqua Guard Logo" />
                </Link>
              </div>
              
              {/* menu start */}
              <nav className="main-menu">
                <ul>
                  <li className={location.pathname === '/' ? 'current-list-item' : ''}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={location.pathname === '/about'  ? 'current-list-item' : ''}>
                    <Link to="/about">About</Link>
                  </li>
                  {/* Changed path to match your logic */}
            <li className={location.pathname === '/products' || location.pathname === '/single-product' ? 'current-list-item' : ''}>
                    <Link to="/products">Products</Link>
                  </li>
                  <li className={location.pathname === '/contact' ? 'current-list-item' : ''}>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <div className="header-icons">
                      <Link className="shopping-cart" to="/cart">
                        <i className="fas fa-shopping-cart" />
                      </Link>
                      <a className="mobile-hide search-bar-icon" href="#search">
                        <i className="fas fa-search" />
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="#search">
                <i className="fas fa-search" />
              </a>
              <div className="mobile-menu" />
              {/* menu end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;