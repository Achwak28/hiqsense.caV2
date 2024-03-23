import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title/Title";
import { legal_information } from "../../../../constants";

import "./LegalInformation.css";

const LegalInformation = () => {
  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#0A0628",
    marginBottom: "2rem",
  };
  const [selectedTitle, setSelectedTitle] = useState(
    legal_information.length > 0 ? legal_information[0].title : null
  );

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
  const selectedSection = legal_information.find(
    (section) => section.title === selectedTitle
  );
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const splitTitle =(title) => {
    const words = title.split(' ');
    const result = [];
    for (let i = 0; i < words.length; i += 2) {
      result.push(words[i]);
      if (words[i + 1]) {
        result.push(' ');
        result.push(words[i + 1]);
      }
      result.push(<br key={i} />);
    }
    return result;
  }
  
  return (
    <div className="legal-information-container">
      <div className="information-titles">
        <p
          style={titleStyle}
          className="font-subTitle text-center md:text-start"
        >
          legal Information
        </p>
        <div className="information-titles-items">
          {legal_information.map((section) => (
            <div key={section.id} className="pr-2 my-2">
              <Title
                title={splitTitle(section.title)}
                onClick={() => handleTitleClick(section.title)}
                isSelected={selectedTitle === section.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="legal-info-content font-normal font-subTitle my-2">
        {selectedSection &&
          selectedSection.content.map((text, index) => (
            <div
              key={text.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 200}`}
            >
              <p className="mb-4">{text.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LegalInformation;
