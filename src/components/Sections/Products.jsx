import React from 'react'
import { products } from '../../Data/productdata'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>We sell reliable Aqua Guard water purifiers for healthy living</p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* products */}
         <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row product-lists">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  {/* Link to the dynamic product details page */}
                  <Link to={product.link}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: '100%', height: '250px', objectFit: 'contain', background: '#f9f9f9' }}
                    />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">
                  <span>Final Price</span> ₹ {product.price}
                </p>
                <Link to="/cart" className="cart-btn">
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </>

    )
}

export default Products