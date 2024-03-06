import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQFooter.css";


const FAQFooter = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div data-aos="fade-up" className="faq-footer-container">
      <div className="faq-box">
        <div className="faq-box-left">
          <p className="font-bold font-subTitle leading-5 text-sm pb-2" >
            Still have questions?
          </p>
          <p className="font-normal font-subTitle leading-5 text-sm">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <div className="faq-box-right">
          <button
            style={{ border: "1px solid white" }}
            className="faq-box-btn font-subTitle leading-5 font-bold text-sm py-2.5 px-6 rounded"
          >
            Get in Touch
          </button>
        </div>
        <div className="faq-box-right"></div>
      </div>
    </div>
  );
};

export default FAQFooter;
