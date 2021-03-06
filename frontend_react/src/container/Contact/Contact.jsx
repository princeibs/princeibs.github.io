import React, { useState } from "react";

import { client } from "../../client";
import { images } from "../../constants";
import appContent from "../../content/appContent";
import "./Contact.scss";

const Contact = (props) => {
  const content = appContent.contactContent;
  const smLinks = [Object.values(content.sm)][0];
  const smLiinksImg = [Object.keys(content.sm)][0];

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;
  const btnActive =
    formData.name && formData.email && formData.message ? false : true;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="contact" onClick={() => props.setIsNavOpen(false)}>
      <div className={`app__contact ${props.themeMode}`}>
        <h2 className="head-text color-text">Connect with me</h2>

        <div className="app__contact-cards">
          <div className="app__contact-card">
            <img src={images.email} alt="email" />
            <a
              href={`mailto:${appContent.contactContent.email}`}
              className="p-text"
            >
              {content.email}
            </a>
          </div>
          <div className="app__contact-icons">
            {smLinks.map((link, index) => (
              <a href={link}>
                <img src={`${images[smLiinksImg[index]]}`} alt={link} />
              </a>
            ))}
          </div>
        </div>

        {!isFormSubmitted ? (
          <div className="app__contact-form app__flex">
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
            <button
              disabled={btnActive}
              type="button"
              className="p-text"
              onClick={handleSubmit}
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thanks for connecting</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
