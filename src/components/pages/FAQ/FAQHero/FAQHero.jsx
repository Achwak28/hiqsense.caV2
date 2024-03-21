import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import leftPerson from "../../../../assets/FAQ/personLeft2.png";
import rightPerson from "../../../../assets/FAQ/personRight.png";
import bubble1 from "../../../../assets/FAQ/bubble1.png";
import bubble4 from "../../../../assets/FAQ/bubble4.png";
import bubble3 from "../../../../assets/FAQ/bubble3.png";
import bubble7 from "../../../../assets/FAQ/bubble7.png";
import bubble8 from "../../../../assets/FAQ/bubble8.png";
import bubble9 from "../../../../assets/FAQ/bubble9.png";
import "./FAQHero.css";

const FAQHero = (props) => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="faq-container">
      <div className="big-left-bubble">
        <img
          className=" opacity-70 md:opacity-40"
          src={bubble4}
          alt="bubble4"
        />
      </div>
      <div className={`small-left-bubble ${isVisible ? "animate" : ""}`}>
        <img
          className=" opacity-20 md:opacity-40"
          src={bubble3}
          alt="bubble3"
        />
      </div>
      <div className={`middle-bubble ${isVisible ? "animate" : ""}`}>
        <img className=" opacity-40" src={bubble7} alt="bubble7" />
      </div>

      <div className="z-50 flex flex-col mb-72 md:mb-32 mt-40 md:mt:0">
        <p className="font-subTitle text-sm font-normal">FAQ</p>
        <p
          style={{
            fontSize: "3.5rem",
            lineHeight: "4.56rem",
            fontWeight: "800",
          }}
          className="font-body pt-10"
        >
          Ask us Anything
        </p>
        <p className="py-8 font-subTitle text-sm font-normal">
          Have any questions? We are here to assist you.
        </p>
        <form onSubmit={submitHandler} className="nosubmit">
          <input
            className="nosubmit text-black"
            type="search"
            placeholder="Search questions..."
            onChange={(e) => props.onSearchQuestion(e.target.value)}
          />
        </form>
      </div>
      <div data-aos="fade-up-right" className="left-person">
        <img src={leftPerson} alt="person" />
      </div>

      <div data-aos="fade-up-left" className="right-person">
        <img className=" z-50" src={rightPerson} alt="person" />
      </div>

      <div className="big-right-bubble">
        <img
          className=" opacity-40 hidden md:block"
          src={bubble1}
          alt="bubble1"
        />
      </div>

      <div className={`small-right-bubble ${isVisible ? "animate" : ""}`}>
        <img
          className=" opacity-40 hidden md:block"
          src={bubble8}
          alt="bubble8"
        />
      </div>

      <div className="bottom-right-bubble">
        <img
          className=" opacity-40 hidden md:block"
          src={bubble9}
          alt="bubble9"
        />
      </div>
    </div>
  );
};

export default FAQHero;
