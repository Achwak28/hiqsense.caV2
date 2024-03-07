import React from "react";
import arrowDown from "../../../../../assets/FAQ/arrowDown.png";
import "./Item.css";

const Item = ({ title, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };
  return (
    <div className="py-4 px-6 item-container">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full items-center"
      >
        <span className="font-subTitle font-extrabold text-2xl">{title}</span>

        <img
          src={arrowDown}
          alt="arrow"
          style={{
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.3s ease-out",
          }}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-left pt-2 text-black font-normal text-lg ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-left">{answer}</div>
      </div>
    </div>
  );
};

export default Item;
