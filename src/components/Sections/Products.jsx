import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../../Data/productdata';
import { addToCart } from '../Cart';

const Product = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // optional redirect
  };

  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                <span className="orange-text">Our</span> Products
              </h3>
              <p>
                Discover our range of advanced water purifiers, designed with cutting-edge
                RO, UV, and Copper technology.
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'contain',
                        background: '#f9f9f9',
                        padding: '10px'
                      }}
                    />
                  </Link>
                </div>

                <h3>{product.name}</h3>

                <p className="product-price">
                  <span>Final Price</span> ₹ {product.price}
                </p>

                <button 
                 className="cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
