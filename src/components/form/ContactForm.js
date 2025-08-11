import React from "react";
import "./ContactForm.css";

const ContactUs = () => {
  return (
    <div className="container form-container">
      <p className="form-title">Contact Us</p>
      <p className="form-description">
        Please complete the form below and we will get in touch with you shortly
      </p>

      <form>
        <div>
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Your First names and Last name"
            className="form-input"
          />
        </div>
        <div>
          <label>Email*</label>
          <input
            type="email"
            placeholder="Business Email Address"
            className="form-input"
          />
        </div>
        <div>
          <label>Country Name*</label>
          <input
            type="text"
            placeholder="Select Country"
            className="form-input"
          />
        </div>
        <div>
          <label>Company Name*</label>
          <input
            type="text"
            placeholder="Your Company Name"
            className="form-input"
          />
        </div>
        <div>
          <label>Job Title*</label>
          <input
            type="text"
            placeholder="Your Job Title"
            className="form-input"
          />
        </div>
        <div>
          <label>Business Needs*</label>
          <textarea
            placeholder="Tell us more about your business needs"
            className="form-input textarea-input"
          />
        </div>
        <div className="checkbox-container">
          <p className="form-checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy" className="checkbox-label">
              I agree to allow Wego4it to store and process my personal data
              following the
              <a className="text-highlight" href="#dataProtection">
                {" "}
                Data Protection Policy
              </a>{" "}
              and
              <a className="text-highlight" href="#privacyStatement">
                {" "}
                Privacy Statement
              </a>
              .
            </label>
            <label>
              {" "}
              <p>You will receive and email confirming your submission.</p>
            </label>
          </p>
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Contact us
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
