import React from "react";
import map from "../../../../assets/pricing/map.png";
import email from "../../../../assets/pricing/email.png";
import facebook from "../../../../assets/pricing/facebook.png";
import phone from "../../../../assets/pricing/phone.png";
import mapMarker from "../../../../assets/pricing/map-marker.png"
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="pricing-contact-us">
      <div className="pricing-contact-left">
        <h1
          style={{ fontSize: "3.3rem", marginBottom: "3rem" }}
          className="contact-us-title font-subTitle font-bold text-left"
        >
          Get in <span style={{ color: "#ef4444" }}>Touch</span>
        </h1>

        <form>
          <div className="inputs">
            <input type="name" id="user-name" placeholder="Name" />
          </div>
          <div className="inputs">
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div className="inputs">
            <input type="text" id="user-name" placeholder="Phone Number" />
          </div>

          <div className="inputs">
            <select data-aos="fade-up" data-aos-duration="1500">
              <option value="0">How did you find us?</option>
              <option value="1">...</option>
              <option value="2">...</option>
              <option value="3">...</option>
              <option value="4">...</option>
              <option value="5">...</option>
            </select>
          </div>
          <button className="pricing-contact-btn font-bold font-subTitle">
            Send
          </button>
        </form>

        <div className="pricing-contact-info">
          <div className="social-info">
            <img className="social-info-icon" src={phone} alt="phone" />
            <div className="social-info-text">
              <p className=" font-subTitle">PHONE</p>
              <p className=" font-subTitle subtitle">03 5432 1234</p>
            </div>
          </div>
          <div className="social-info">
            <img
              style={{ width: "0.9rem", height: "1.8rem" }}
              className="social-info-icon"
              src={facebook}
              alt="facebook"
            />
            <div className="social-info-text">
              <p className=" font-subTitle">FACEBOOK</p>
              <p className=" font-subTitle">facebook.com/abc</p>
            </div>
          </div>
          <div className="social-info">
            <img className="social-info-icon" src={email} alt="email" />
            <div className="social-info-text">
              <p className=" font-subTitle">EMAIL</p>
              <p className=" font-subTitle">abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-contact-right">
      <img className="pricing-map-marker " src={mapMarker} alt="mapMarker" />
        <img className="map " src={map} alt="map" />
      </div>
    </div>
  );
};

export default ContactUs;
