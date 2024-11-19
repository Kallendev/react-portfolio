import React, { useState } from "react";
import "./contactform.css";

const Contact= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here (e.g., API call or email service)
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="a">
        <span className="White">Contact</span>
        <span className="pink"> Me</span>
      </h2>
      {/* <p>
        If you'd like to get in touch,feel free to email me at:{" "}
        <a href="mailto:kallenmugambi@gmail.com">kallenmugambi@gmail.com</a>
      </p> */}

      <div className="contact-form">
      <form className="contact-form">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    placeholder="Enter your name"
  />

  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="Enter your email"
  />

  <label htmlFor="phone">Phone:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
  />

  <label htmlFor="subject">Subject:</label>
  <input
    type="text"
    id="subject"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    placeholder="Enter subject"
  />

  <label htmlFor="message" className="message-field"></label>
  <textarea
    id="message"
    name="message"
    rows="10"
    value={formData.message}
    onChange={handleChange}
    required
    placeholder="Enter your message"
  ></textarea>

  <button type="submit">Send Message</button>
</form>

      </div>
    </div>
  );
};

export default Contact;
