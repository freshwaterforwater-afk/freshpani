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
            <li>jakkur yelahanka-560061 </li>
            <li>freshwaterforwater@gmail.com</li>
            <li>+919886485518</li>
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