import React, { useEffect, useState, useRef } from "react";
import saly from "../../images/Saly.png";
import linear from "../../images/linear.png";
import "./style.css";

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center  ">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#0A0628] h-[750px] w-full">
        <div className="relative flex flex-col gap-4 sm:items-center md:items-start">
          <div ref={titleRef}>
            <h3
              className={`font-serif font-bold text-5xl leading-normal text-left text-[#F9F9F9] sm:text-center md:text-left pl-0 md:pl-[100px] ${isVisible ? "slide-in-left" : ""}`}
            >
              Do You Have a Project in Mind?
            </h3>
          </div>
          <p
            className={`md:w-3/4 font-sans font-semibold text-left text-[#F9F9F9] sm:text-center md:text-left pl-0 md:pl-[100px] ${isVisible ? "slide-in-left" : ""}`}
          >
            Contact us and let’s get down to business!
          </p>
          <button
            className={`z-[50] bg-[#F6393D] w-1/4 px-2 py-2 rounded-lg sm:ml-0 md:ml-[100px] ${isVisible ? "slide-in-left" : ""}`}
          >
            <p className="text-[#F9F9F9]">Get started</p>
          </button>
          <img
            src={linear}
            className={`absolute top-4 w-2/3 ${isVisible ? "slide-in-left" : ""}`}
            alt="Linear"
          />
        </div>
        <img
          src={saly}
          className={`max-w-[60%] ${isVisible ? "slide-in-right" : ""}`}
          alt="Saly"
        />
      </div>
    </div>
  );
}
