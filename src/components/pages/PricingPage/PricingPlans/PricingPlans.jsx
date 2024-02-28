import React from "react";
import "./PricingPlans.css";
import PricingCard from "../PricingCard/PricingCard";
import ellipses1 from "../../../../assets/pricing/bg-ellipses1.png";
import PricingItem from "../PricingItem/PricingItem";
import { pricing_plans } from "../../../../constants";

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container">
      <div style={{ width: "65%" }} className="pricing-plans-text">
        {" "}
        <p
          style={{ fontSize: "3.5rem", marginTop: "5rem" }}
          className="font-body font-bold text-6xl"
        >
          Pricing Plans
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
          className="font-normal font-subTitle"
        >
          {" "}
          Discover a range of tailored solutions designed to meet the unique
          needs of your digital journey. Choose the package that aligns with
          your goals and let&apos;s embark on a transformative journey together.
        </p>
      </div>

      <div className="pricing-plan1">
        <img className="pricing-plan-bg " src={ellipses1} alt="ellipse" />
        <PricingCard
          key={pricing_plans[0].id}
          title={pricing_plans[0].title}
          packageName={pricing_plans[0].packageName}
          price={pricing_plans[0].price}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12"
          >
            {" "}
            Launching your online presence has never been more accessible. Our
            Web Design Start-Up Plan at $100 is curated for entrepreneurs and
            small businesses ready to make a digital impact. This comprehensive
            package includes:
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[0].features.map((feature) => (
            <PricingItem
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>

      <div className="pricing-plan2">
        <PricingCard
          key={pricing_plans[1].id}
          title={pricing_plans[1].title}
          packageName={pricing_plans[1].packageName}
          price={pricing_plans[1].price}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12"
          >
            {" "}
            Launching your online presence has never been more accessible. Our
            Web Design Start-Up Plan at $100 is curated for entrepreneurs and
            small businesses ready to make a digital impact. This comprehensive
            package includes:
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[1].features.map((feature) => (
            <PricingItem className="pricing-feature"
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
