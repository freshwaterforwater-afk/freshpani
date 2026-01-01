import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Deal = () => {
  // Set the target date: 7 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 7, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="cart-banner pt-100 pb-100">
      <div className="container">
        <div className="row clearfix">
          {/*Image Column*/}
          <div className="image-column col-lg-6">
            <div className="image">
              <div className="price-box">
                <div className="inner-price">
                  <span className="price">
                    <strong>20%</strong> <br /> OFF SALE
                  </span>
                </div>
              </div>
              {/* Ensure this image is a high-quality water purifier photo */}
              <img className='rounded' width="75%" src="/img/products/product-5.jpeg" alt="Aqua Guard Special Offer" />
            </div>
          </div>

          {/*Content Column*/}
          <div className="content-column col-lg-6">
            <h3>
              <span className="orange-text">Deal</span> of the month
            </h3>
            <h4>Aqua Guard Superb RO+UV</h4>
            <div className="text">
              Upgrade your kitchen with the world's most advanced water purification
              technology. This month, get the Superb RO+UV model with Active Copper
              Zinc technology at an unbeatable price. Limited stock available!
            </div>

            <div className="time-counter">
              <div className="time-countdown clearfix">
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{String(timeLeft.days).padStart(2, '0')}</span>Days
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{String(timeLeft.hours).padStart(2, '0')}</span>Hours
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{String(timeLeft.minutes).padStart(2, '0')}</span>Mins
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{String(timeLeft.seconds).padStart(2, '0')}</span>Secs
                  </div>
                </div>
              </div>
            </div>

            {/* Changed icon to fa-arrow-right for a "Shop Now" feel */}
            <Link to="/products" className="cart-btn mt-3">
              <i className="fas fa-arrow-right" /> View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Deal