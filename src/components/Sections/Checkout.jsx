import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: ''
  });

  // Load cart
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.address &&
    formData.phone &&
    cartItems.length > 0;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  // 🔥 Place Order + Send Email
  const placeOrder = () => {
    if (!isFormValid) return;

    const orderItems = cartItems
      .map(
        item =>
          `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join('\n');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
  
      message: [orderItems, total],
   
    };

    emailjs
      .send(
        "service_kni2afi",
        "template_pfonznj",
        templateParams,
        "CEMN5uMsfsgtIGnwH"
      )
      .then(
        () => {
          alert('Order placed successfully! Email sent.');

          localStorage.removeItem('cart');
          setCartItems([]);
          setFormData({
            name: '',
            email: '',
            address: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          console.error('Email error:', error);
          alert('Order placed, but email failed.');
        }
      );
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>We sell reliable Aqua Guard water purifiers</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            {/* Shipping Form */}
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="card single-accordion">
                  <div className="card-header" id="headingOne"> <h5 className="mb-0"> <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" > Shipping Address </button> </h5> </div>

                  <div className="card-body">
                    <div className="billing-address-form">
                      <form action="index.html">
                        <p>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <textarea
                            name="message"
                            placeholder="Say Something"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your Order</th>
                      <th>Price</th>
                    </tr>
                  </thead>

                  <tbody className="order-details-body">
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td>
                          {item.name} × {item.quantity}
                        </td>
                        <td>₹{item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>

                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>₹{subtotal}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>₹{shipping}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>₹{total}</td>
                    </tr>
                  </tbody>
                </table>

            

                <button
                className="boxed-btn"
                disabled={!isFormValid}
                style={{
                   width: '100%',
                    marginTop: '20px',
                  opacity: isFormValid ? 1 : 0.5,
                  cursor: isFormValid ? 'pointer' : 'not-allowed'
                }}
                onClick={placeOrder}
              >
                Place Order
              </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
