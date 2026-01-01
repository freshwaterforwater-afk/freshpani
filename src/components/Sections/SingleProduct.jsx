import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsData } from '../../Data/productdata';
import { addToCart } from '../Cart';

const SingleProduct = () => {
  const { productId } = useParams();
  
  // Find the product that matches the URL ID
  const product = productsData?.find(p => p.id === productId);

    const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // optional redirect
  };

  // If product not found
  if (!product) return <div className="mt-150 mb-150 text-center">Product Not Found</div>;

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>See more Details</p>
                <h1>{product.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>{product.name}</h3>
                <p className="single-product-pricing">
                  <span>{product.capacity} Capacity</span> ₹{product.price}
                </p>
                <p><strong>Purification Process:</strong> {product.description}</p>

                <div className="highlights mb-4">
                  <h4 className="h5">Top Highlights:</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2' }}>
                    {productsData?.features?.map((feat, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle orange-text"></i> {feat}
                      </li>
                    ))}
                    <li><i className="fas fa-check-circle orange-text"></i> <strong>Dimensions:</strong> {product.dimensions}</li>
                  </ul>
                </div>

                <div className="single-product-form">
                  <input type="number" defaultValue="1" min="1" />
                  <div>
                    
                  <button 
                 className="cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;