import React from "react";
import "./PricingItem.css";

const PricingItem = ({title, content,styles}) => {
  return (
    <div className={`pricing-plan-feature ${styles}`}  >
      <div className="pricing-plan-feature-title font-subTitle">{title}</div>
      <div className="pricing-plan-feature-content font-subTitle font-bold">{content}</div>
    </div>
  );
};

export default PricingItem;
