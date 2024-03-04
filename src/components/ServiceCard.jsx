import React from "react";

const ServiceCard = ({ image, text, title }) => {
  return (
    <div
      
      style={{
       
        width: "12.5rem",
        height: "15.87rem",
        margin: "2rem",
        borderRadius: "0.625rem",
        border:"1px solid white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <img
        style={{ height: "70px", width: "70px" }}
        src={image}
        alt={title}
      />
      <p
        className="font-bold text-2xl font-otherFont"
        style={{ color: "#E4E4E4", margin: "1rem", textShadow: "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}
      >
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
/*
import React from "react";

const ServiceCard = ({ image, text, title }) => {
  return (
    <div
      
      style={{
       
        width: "12.5rem",
        height: "15.87rem",
        margin: "2rem",
        borderRadius: "0.625rem",
        border:"1px solid white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <img
        style={{ height: "70px", width: "70px" }}
        src={image}
        alt={title}
      />
      <p
        className="font-bold text-2xl font-otherFont"
        style={{ color: "#E4E4E4", margin: "1rem", textShadow: "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}
      >
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
>>>>>>> bd1b83fc564dea4c71742e7d8dcf1277bdebd6dd
*/
