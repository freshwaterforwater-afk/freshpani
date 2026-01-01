import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kni2afi",
        "template_pfonznj",
        formRef.current,
        "CEMN5uMsfsgtIGnwH"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again.");
        }
      );
  };
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* contact form */}
      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have you any question?</h2>
                <p>
                  Whether you are looking for advice on the best purification
                  technology for your home or need support with an existing
                  installation, our water experts are here to help.
                </p>
              </div>

              <div className="contact-form">
                <form ref={formRef} onSubmit={sendEmail}>
                  <p>
                    <input
                      className="mx-2 rounded"
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </p>

                  <p>
                    <input
                      className="mx-2"
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </p>

                  <p>
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      required
                    />
                  </p>

                  <p>
                    <input type="submit" value="Submit" />
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map" />  Address
                  </h4>
                  <p>
                    Jakkur   <br /> Yelahanka-Bangalore <br />560061
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock" /> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 6 PM <br /> SAT - SUN: 10 to 4 PM{" "}
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book" /> Contact
                  </h4>
                  <p>
                    <a href="tel:+919886485518">
                      +91 98864 85518
                    </a> <br />
                    <a href="tel:+918970178864">
                      +918970178864
                    </a>
                    <br /> <a
                      href="mailto:freshwaterforwater@gmail.com?subject=Aqua%20Guard%20Enquiry&body=Hello%20Fresh%20Water%20Team,%0A%0AI%20am%20interested%20in%20your%20Aqua%20Guard%20water%20purifiers.%20Please%20contact%20me.%0A%0AThanks."
                    >
                      freshwaterforwater@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact