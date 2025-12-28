import React from 'react'

const About = () => {
  return (
    <>
  <div className="breadcrumb-section breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="breadcrumb-text">
            <p>We sell reliable Aqua Guard water purifiers for healthy living</p>
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end breadcrumb section */}
  {/* featured section */}
  <div className="feature-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="featured-text">
          <h2 className="pb-3">
            Why <span className="orange-text">Aqua Guard</span>
          </h2>
          <div className="row">
            {/* Feature 1: Pure Water */}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
              <div className="list-box d-flex">
                <div className="list-icon">
                  <i className="fas fa-tint" />
                </div>
                <div className="content">
                  <h3>Advanced Purification</h3>
                  <p>
                    Multi-stage RO + UV + UF technology ensures every drop is 
                    pure, removing bacteria, viruses, and heavy metals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 2: Expert Service */}
            <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
              <div className="list-box d-flex">
                <div className="list-icon">
                  <i className="fas fa-tools" />
                </div>
                <div className="content">
                  <h3>Free Installation</h3>
                  <p>
                    Get expert doorstep installation and setup within 24 hours 
                    of purchase by our certified technicians.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 3: Mineral Guard */}
            <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
              <div className="list-box d-flex">
                <div className="list-icon">
                  <i className="fas fa-shield-alt" />
                </div>
                <div className="content">
                  <h3>Mineral Guard</h3>
                  <p>
                    Our Active Copper and Zinc technology retains essential 
                    natural minerals that other purifiers often remove.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 4: Maintenance */}
            <div className="col-lg-6 col-md-6">
              <div className="list-box d-flex">
                <div className="list-icon">
                  <i className="fas fa-sync-alt" />
                </div>
                <div className="content">
                  <h3>Smart Service</h3>
                  <p>
                    Receive automatic maintenance alerts and easy filter 
                    replacements to ensure long-lasting performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
  {/* end featured section */}
  {/* shop banner */}
  <section className="shop-banner">
    <div className="container">
      <h3>
        December sale is on! <br /> with big{" "}
        <span className="orange-text">Discount...</span>
      </h3>
      <div className="sale-percent">
        <span>
          Sale! <br /> Upto
        </span>
        50% <span>off</span>
      </div>
      <a href="shop.html" className="cart-btn btn-lg">
        Shop Now
      </a>
    </div>
  </section>
</>

  )
}

export default About