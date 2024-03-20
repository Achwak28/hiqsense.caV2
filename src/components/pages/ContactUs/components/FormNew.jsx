import React from "react";
import mailIcon from "../../../images/ContactUs/mailIcon.png";
import phoneIcon from "../../../images/ContactUs/phoneIcon.png";
import facebookIcon from "../../../images/ContactUs/facebookIcon.png";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const ContactInfo = ({ icon, title, text }) => (
    <div className="flex gap-4 items-center h-10">
      <img src={icon} alt="phoneIcon" className="h-7" />
      <div className="flex flex-col items-start text-xs lg:text-sm">
        <span className="text-[#0A0628] font-semibold"> {title} </span>
        <span className="text-[#F6393D]"> {text} </span>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <iframe
          style={{ minHeight: "595px", width: "100%", display: "flex" }}
          src="https://forms.zohopublic.ca/hiqsense/form/hiqsensecacontact/formperma/yYWROdo-WyMJMy7LDqeK4TuLBKv_gWhoojEwW2yVk18"
        ></iframe>
        <div className="flex flex-wrap items-start justify-around gap-2 ">
          <Link to="tel:3062618582">
            <ContactInfo icon={phoneIcon} text="+1 306 912 9997" />
          </Link>
          <Link to="https://www.facebook.com/hiqsense">
            <ContactInfo
              icon={facebookIcon}
              /*title='FACEBOOK'*/ text="facebook.com/hiqsense"
            />
          </Link>
          <Link to="mailto:info@hiqsense.ca">
            <ContactInfo icon={mailIcon} text="info@hiqsense.ca" />
          </Link>
        </div>
      </div>
    </>
  );
};
