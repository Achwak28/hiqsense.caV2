import React from "react";
import leftPerson from "../../../assets/FAQ/personLeft2.png";
import rightPerson from "../../../assets/FAQ/personRight.png";
import bubble1 from "../../../assets/FAQ/bubble1.png"
import bubble4 from "../../../assets/FAQ/bubble4.png"
import bubble3 from "../../../assets/FAQ/bubble3.png"
import bubble7 from "../../../assets/FAQ/bubble7.png"
import bubble8 from "../../../assets/FAQ/bubble8.png"
import bubble9 from "../../../assets/FAQ/bubble9.png"
import "./FAQHero.css";

const FAQHero = () => {
  return (
    <div className="faq-container">
       <img className="big-left-bubble" src={bubble4} alt="bubble4" />
      <img className="small-left-bubble" src={bubble3} alt="bubble3" />
      <img className="middle-bubble" src={bubble7} alt="bubble7" />
      <p>FAQ</p>
      <p  style={{
            fontSize: "3.5rem",
            lineHeight: "4.56rem",
            fontWeight:"800"
          }} className="font-body">Ask us Anything</p>
      <p>Have any questions? We are here to assist you.</p>
      <img className="left-person" src={leftPerson} alt="person" />
      <img className="right-person" src={rightPerson} alt="person" />
      <img className="big-right-bubble" src={bubble1} alt="bubble1" />
      <img className="small-right-bubble" src={bubble8} alt="bubble8" />
      <img className="bottom-right-bubble" src={bubble9} alt="bubble9" />
    </div>
  );
};

export default FAQHero;
