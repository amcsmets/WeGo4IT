import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container form-container">
      <h2 className="form-title">More questions?</h2>
      <p className="form-title">Get in touch below</p>
      <p className="form-subtitle">Stay connected in your country via email</p>
      <p className="form-description">
        Thank you for your interest with us.
      </p>
      <p className="form-description">Please complete the form below and we will get in touch with you shortly</p>

      <form>
        <div>
          <label>Purpose*</label>
          <select className="form-input">
            <option>NEED SUPPORT/SERVICES</option>
            <option>GENERAL INQUIRIES</option>
            <option>OTHER</option>
          </select>
        </div>
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
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" className="checkbox-label">
              I would like to receive the newsletter emails & a free consulting
              call from our experts
            </label>
          </p>
        </div>
        <div className="checkbox-container">
          <p className="form-checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy" className="checkbox-label">
              I agree to allow the company to store and process my personal data
              following the
              <a className="text-highlight" href="#dataProtection"> Data Protection Policy</a> and
              <a className="text-highlight" href="#privacyStatement"> Privacy Statement</a>.
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

export default ContactForm;
