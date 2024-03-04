
import React from "react";

const AboutButton = ({ text, someStyle }) => {
  return (
    <button
      style={{
        backgroundColor: "#F6393D",
        borderRadius: "4px",
        width: "8.06rem",
        height: "2.5rem",
        color:"white",
        margin:"4rem auto",
        fontWeight:"700",
        fontSize:"14px",
        lineHeight:"20px"
      }}
      className={`${someStyle} font-subTitle`}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default AboutButton;
/*
import React from "react";

const AboutButton = ({ text, someStyle }) => {
  return (
    <button
      style={{
        backgroundColor: "#F6393D",
        borderRadius: "4px",
        width: "8.06rem",
        height: "2.5rem",
        color:"white",
        margin:"4rem auto",
        fontWeight:"700",
        fontSize:"14px",
        lineHeight:"20px"
      }}
      className={`${someStyle} font-subTitle`}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default AboutButton;
>>>>>>> bd1b83fc564dea4c71742e7d8dcf1277bdebd6dd
*/