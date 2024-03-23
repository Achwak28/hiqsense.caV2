import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import waves from "../../../../assets/privacy/waves.png";
import "./PrivacyHero.css";

const PrivacyHero = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div className="privacy-hero-container">
      <div className="overlay"></div>
      <img className="waves-bg" src={waves} alt="waves" />
      <img className="bottom-waves-bg" src={waves} alt="waves" />

      <div
        data-aos="fade-right"
        className="text-center md:text-left justify-center h-full z-50 md:w-3/4 flex flex-col mb-72 md:mb-32 mt-40 md:mt:0"
      >
        <p
          style={{
            fontSize: "3.5rem",
            lineHeight: "4.56rem",
            fontWeight: "800",
          }}
          className="font-body pt-10"
        >
          HIQSense Privacy Policy <br />
          Terms & Conditions
        </p>
        <p className="py-8 font-subTitle text-lg font-normal">
          We value your privacy
        </p>
      </div>
    </div>
  );
};

export default PrivacyHero;
