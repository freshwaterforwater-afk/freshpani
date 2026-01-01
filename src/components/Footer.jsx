import React from 'react'

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-box about-widget">
              <h2 className="widget-title">About us</h2>
              <p>
                We provide reliable Aqua Guard water purifiers designed to deliver safe, clean, and healthy drinking water for every home. Quality, trust, and customer satisfaction are at the core of what we do.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-box get-in-touch">
              <h2 className="widget-title">Get in Touch</h2>
              <ul>
                <li>Jakkur, Yelahanka – 560061</li>

                <li>
                  <a
                    href="mailto:freshwaterforwater@gmail.com?subject=Aqua%20Guard%20Enquiry&body=Hello%20Fresh%20Water%20Team,%0A%0AI%20am%20interested%20in%20your%20Aqua%20Guard%20water%20purifiers.%20Please%20contact%20me.%0A%0AThanks."
                  >
                    freshwaterforwater@gmail.com
                  </a>
                </li>


                <li>
                  <a href="tel:+919886485518">
                    +91 98864 85518
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-box subscribe">
              <h2 className="widget-title">Subscribe</h2>
              <p>Subscribe to our mailing list to get the latest updates.</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                <button type="submit">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer