import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart, saveCart } from '../Cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    setCartItems(getCart());
  }, []);

  // Handle Quantity Change
  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(newQty) } : item
    );

    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const installation = 0;
  const total = subtotal + shipping + installation;

  return (
    <>
      {/* Breadcrumb */}
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

      {/* Cart Section */}
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            {/* Cart Table */}
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th />
                      <th>Product Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.length > 0 ? (
                      cartItems.map(item => (
                        <tr key={item.id} className="table-body-row">
                          <td>
                            <button
                              onClick={() => removeItem(item.id)}
                              style={{ border: 'none', background: 'none' }}
                            >
                              <i className="far fa-window-close" />
                            </button>
                          </td>

                         <td className="product-image"> <img src={item.image} alt={item.name} /> </td>

                          <td>{item.name}</td>

                          <td>₹{item.price}</td>

                          <td>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                            />
                          </td>

                          <td>₹{item.price * item.quantity}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center p-5">
                          Your cart is empty
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Subtotal:</strong></td>
                      <td>₹{subtotal}</td>
                    </tr>
                    <tr>
                      <td><strong>Shipping:</strong></td>
                      <td>₹{shipping}</td>
                    </tr>
                    <tr>
                      <td><strong>Installation:</strong></td>
                      <td>₹{installation}</td>
                    </tr>
                    <tr>
                      <td><strong>Total:</strong></td>
                      <td>₹{total}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="cart-buttons">
                  <Link to="/products" className="boxed-btn">
                    Continue Shopping
                  </Link>
                  {cartItems.length > 0 && (
                    <Link to="/checkout" className="boxed-btn black">
                      Check Out
                    </Link>
                  )}
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
