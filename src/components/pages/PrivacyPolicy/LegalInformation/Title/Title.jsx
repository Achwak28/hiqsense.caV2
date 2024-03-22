import React from "react";
import group_svg from "../../../../../assets/privacy/group.png";
import group_white from "../../../../../assets/privacy/group_white.png";

import "./Title.css";

const Title = ({ title, onClick, isSelected }) => {
  return (
    <div
      className={`privacy-info-title ${isSelected ? "clicked" : ""}`}
      onClick={onClick}
    >
      <div className="privacy-info-svg ">
        <img
          src={isSelected ? group_white : group_svg}
          alt="group_svg"
          className=" "
        /> 
      </div>
      <div className="privacy-info-text text-left pl-1">
        <p className="font-subTitle text-left">{title}</p>
      </div>
    </div>
  );
};

export default Title;
