import React from "react";

const Feature = ({ image, text, title }) => {
  return (
    <div
    className="hover:scale-105 hover:shadow-xl duration-300"
      
      style={{
        backgroundColor: "#4334B6",
        width: "19.19rem",
        height: "14rem",
        margin: "2rem",
        rotate: "-3deg",
        borderRadius: "0.625rem",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center" 
      }}
    >
      <img
        style={{ height: "5.31rem", width: "5.7rem", rotate: "5deg" }}
        src={image}
        alt={title}
      />
      <p
        className="font-bold text-2xl font-subTitle"
        style={{ color: "#E4E4E4", margin: "1rem", rotate: "5deg" }}
      >
        {text}
      </p>
    </div>
  );
};

export default Feature;
