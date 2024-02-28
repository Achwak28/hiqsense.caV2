import React from "react";
import "./PricingItem.css";

const PricingItem = ({title, content}) => {
  return (
    <div className="pricing-plan-feature">
      <div className="pricing-plan-feature-title font-subTitle">{title}</div>
      <div className="pricing-plan-feature-content font-subTitle font-bold">{content}</div>
    </div>
  );
};

export default PricingItem;
