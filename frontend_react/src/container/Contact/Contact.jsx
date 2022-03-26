import React, { useState } from "react";

import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // send data through api
    console.log(formData);
    setIsLoading(false);
    setIsFormSubmitted(true);
  };

  return (
    <div id="contact">
         <div className="app__footer">
      <h2 className="head-text">Connect with me from here</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@princeibs.com" className="p-text">
            hello@princeibs.com
          </a>
        </div>
        <div className="app__footer-icons">
          <a href="https://twitter.com/prince_ibs"><img src={images.twitter} alt="https://twitter.com/prince_ibs" /></a>
          <a href="https://linkedin.com/in/princeibs"><img src={images.linkedin} alt="https://linkedin.com/in/princeibs" /></a>          
          <a href="https://github.com/princeibs"><img src={images.github} alt="https://github.com/princeibs" /></a>          
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks for contacting</h3>
        </div>
      )}
    </div>
    </div>
 
  );
};

export default Contact;
