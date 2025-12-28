import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mocking selected products (In a real app, this comes from Context or LocalStorage)
  const [cartItems, setCartItems] = useState([
    {
      id: "smart-ro",
      name: "Aqua Guard Smart RO",
      price: 5999,
      image: "/img/products/product-1.jpeg",
      quantity: 1
    },
    {
      id: "mineralizer",
      name: "Aqua Guard Mineralizer",
      price: 7999,
      image: "/img/products/product-8.jpeg",
      quantity: 1
    }
  ]);

  // Handle Quantity Change
  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(newQty) } : item
    );
    setCartItems(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0; // Flat shipping fee
  const total = subtotal + shipping;

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh & Pure Water Solutions</p>
                <h1>Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove" />
                      <th className="product-image">Product Image</th>
                      <th className="product-name">Name</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 ? cartItems.map((item) => (
                      <tr key={item.id} className="table-body-row">
                        <td className="product-remove">
                          <button onClick={() => removeItem(item.id)} style={{border: 'none', background: 'none'}}>
                            <i className="far fa-window-close" />
                          </button>
                        </td>
                        <td className="product-image">
                          <img src={item.image} alt={item.name} />
                        </td>
                        <td className="product-name">{item.name}</td>
                        <td className="product-price">₹{item.price}</td>
                        <td className="product-quantity">
                          <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          />
                        </td>
                        <td className="product-total">₹{item.price * item.quantity}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="6" className="text-center p-5">Your cart is empty</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td><strong>Subtotal: </strong></td>
                      <td>₹{subtotal}</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Shipping: </strong></td>
                      <td>₹{0}</td>
                    </tr>
                      <tr className="total-data">
                      <td><strong>Instalation: </strong></td>
                      <td>₹{0}</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Total: </strong></td>
                      <td>₹{total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <Link to="/products" className="boxed-btn">Continue Shopping</Link>
                  <Link to="/checkout" className="boxed-btn black">Check Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;