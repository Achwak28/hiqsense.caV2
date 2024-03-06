import React from "react";
import question_svg from "../../../../../assets/FAQ/question_svg.png";
import question_white from "../../../../../assets/FAQ/question_white.png";

import "./Title.css";

const Title = ({ title, onClick, isSelected }) => {
  return (
    <div
      className={`section-title ${isSelected ? "clicked" : ""}`}
      onClick={onClick}
    >
      <div className="section-svg">
        <img
          src={isSelected ? question_white : question_svg}
          alt="question_svg"
          className="w-[2.87rem] h-[2.87rem]"
        />
      </div>
      <div className="section-title-text">
        <p className="font-subTitle">{title}</p>
      </div>
    </div>
  );
};

export default Title;
