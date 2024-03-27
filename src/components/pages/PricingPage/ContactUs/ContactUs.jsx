import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import map from "../../../../assets/pricing/map.png";
import email from "../../../../assets/pricing/email.png";
import facebook from "../../../../assets/pricing/facebook.png";
import phone from "../../../../assets/pricing/phone.png";
import mapMarker from "../../../../assets/pricing/map-marker.png"
import "./ContactUs.css";
//import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
  return (
    <div className="pricing-contact-us">
      {/* <Helmet>
        <title> Contact Us - Hiqsense Smart Systems: Connect with Our Expert Team</title>
        <meta name= "description" content="Reach out to Hiqsense Smart Systems for all your small business technology needs.
        Our Contact Us page provides easy ways to get in touch, whether you're in Saskatoon or anywhere in Canada.
        From inquiries about our web design, graphic design, SEO, email hosting, or IT support services to scheduling a consultation,
        our dedicated team is ready to assist and guide you towards the perfect tech solutions for your business." />
        <meta name="keywords" content="Contact Hiqsense, Hiqsense support, web design inquiries, graphic design services
         contact, SEO consultation, email hosting assistance, IT support queries,
          technology help for small businesses, Saskatoon tech agency,
           Canadian business support, technology services contact,
            business technology advice, connect with tech experts." />
      </Helmet> */}
       
      <div data-aos="fade-right" className="pricing-contact-left">
        <h1
          style={{ fontSize: "3.3rem", marginBottom: "3rem" }}
          className="contact-us-title font-subTitle font-bold text-center md:text-left"
        >
          Get in <span style={{ color: "#ef4444" }}>Touch</span>
        </h1>

        <form>
          <div className="inputs">
            <input type="name" id="user-name" placeholder="Name *" />
          </div>
          <div className="inputs">
            <input type="text" id="email" placeholder="Email *" />
          </div>
          <div className="inputs">
            <input type="text" id="phone" placeholder="Phone Number *" />
          </div>

          <div className="inputs">
            <select>
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
              <p className=" font-subTitle subtitle">facebook.com/abc</p>
            </div>
          </div>
          <div className="social-info">
            <img className="social-info-icon" src={email} alt="email" />
            <div className="social-info-text">
              <p className=" font-subTitle">EMAIL</p>
              <p className=" font-subTitle subtitle">abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="pricing-contact-right">
      <img className="pricing-map-marker " src={mapMarker} alt="mapMarker" />
        <img className="map " src={map} alt="map" />
      </div>
    </div>
  );
};

export default ContactUs;
