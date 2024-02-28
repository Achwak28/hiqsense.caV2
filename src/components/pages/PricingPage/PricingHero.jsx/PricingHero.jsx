import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../../../../assets/pricing/pricing-hero.png";
import "./PricingHero.css";

const PricingHero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div className="pricing-hero-container">
      <div data-aos="fade-right" className="pricing-hero-text">
        <p
          style={{
            fontSize: "3rem",
            marginTop: "10.56rem",
            marginLeft: "6.125rem",
            color: "#F9F9F9",
            lineHeight: "4.56rem",
          }}
          className="about-hero-text font-body font-bold text-center md:text-left text-whiteTitle"
        >
          Pricing Plans: Tailored Solutions for <br /> Your Digital
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
        style={{ marginTop: "10.56rem" }}
        className="w-[500px] mx-auto my-4 pricing-hero-img"
        src={heroImg}
        alt="heroImg"
        data-aos="fade-left"
      />
    </div>
  );
};

export default PricingHero;
