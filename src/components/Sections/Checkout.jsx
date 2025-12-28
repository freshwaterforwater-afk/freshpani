import React from 'react'

const Checkout = () => {
  return (
    <>
  <div className="breadcrumb-section breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="breadcrumb-text">
            <p>We sell reliable Aqua Guard water purifiers for healthy living</p>
            <h1>Check Out Product</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end breadcrumb section */}
  {/* check out section */}
  <div className="checkout-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="checkout-accordion-wrap">
            <div className="accordion" id="accordionExample">
              <div className="card single-accordion">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Shipping Address
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="billing-address-form">
                      <form action="index.html">
                        <p>
                          <input type="text" placeholder="Name" />
                        </p>
                        <p>
                          <input type="email" placeholder="Email" />
                        </p>
                        <p>
                          <input type="text" placeholder="Address" />
                        </p>
                        <p>
                          <input type="tel" placeholder="Phone" />
                        </p>
                        <p>
                          <textarea
                            name="bill"
                            id="bill"
                            cols={30}
                            rows={10}
                            placeholder="Say Something"
                            defaultValue={""}
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
             
          
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="order-details-wrap">
            <table className="order-details">
              <thead>
                <tr>
                  <th>Your order Details</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="order-details-body">
                <tr>
                  <td>Product</td>
                  <td>Total</td>
                </tr>
                <tr>
                  <td>Strawberry</td>
                  <td>$85.00</td>
                </tr>
                <tr>
                  <td>Berry</td>
                  <td>$70.00</td>
                </tr>
                <tr>
                  <td>Lemon</td>
                  <td>$35.00</td>
                </tr>
              </tbody>
              <tbody className="checkout-details">
                <tr>
                  <td>Subtotal</td>
                  <td>$190</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$240</td>
                </tr>
              </tbody>
            </table>
            <a href="#" className="boxed-btn">
              Place Order
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Checkout