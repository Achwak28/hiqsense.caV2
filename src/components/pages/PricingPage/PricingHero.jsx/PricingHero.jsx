import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../../../../assets/pricing/pricing-hero.png";
import "./PricingHero.css";

const PricingHero = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="pricing-hero-container">
      <div data-aos="fade-right" className="pricing-hero-text">
        <p
      
          style={{
            fontSize: "3rem",
            marginLeft: "6.125rem",
            color: "#F9F9F9",
            lineHeight: "4.56rem",
          }}
          className="about-hero-text font-body font-bold text-center md:text-left text-whiteTitle hero-text"
        >
          Pricing Plans: Tailored Solutions for Your Digital
          Transformation
        </p>
        <p
          style={{
            marginLeft: "6.125rem",
            color: "#F9F9F9",
            fontWeight: "400",
            fontSize: "1rem",
            letter: "0.25px",
            lineHeight: "1.5rem",
          }}
          className="about-hero-text text-center md:text-left mt-4 text-whiteTitle font-subTitle"
        >
          Explore Our Flexible Packages to Elevate Your Online Presence
        </p>
      </div>
      <img
        className="w-[23.68rem] h-[23.68rem] md:w-[31.25rem] md:h-[31.25rem]  mx-auto my-4 pricing-hero-img"
        src={heroImg}
        alt="heroImg"
        data-aos="fade-left"
      />
    </div>
  );
};

export default PricingHero;
