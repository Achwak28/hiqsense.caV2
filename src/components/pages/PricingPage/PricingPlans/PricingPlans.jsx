import React from "react";
import PricingCard from "../PricingCard/PricingCard";
import ellipses1 from "../../../../assets/pricing/bg-ellipses1.png";
import ellipses2 from "../../../../assets/pricing/ellipse-bg2.png";
import ellipses3 from "../../../../assets/pricing/ellipses-bg3.png";
import PricingItem from "../PricingItem/PricingItem";
import { pricing_plans } from "../../../../constants";
import "./PricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container">
      <div className="pricing-plans-text">
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
        <img
          className="ellipses-bg1 hidden md:block "
          src={ellipses1}
          alt="ellipse"
        />
        <PricingCard
          imagePosition="postion-top-right"
          image={pricing_plans[0].image}
          key={pricing_plans[0].id}
          title={pricing_plans[0].title}
          packageName={pricing_plans[0].packageName}
          price={pricing_plans[0].price}
          offers={pricing_plans[0].offers}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12 "
          >
            {" "}
            Launching your online presence has never been more accessible. Our
            Web Design Start-Up Plan at $100 is curated for entrepreneurs and
            small businesses ready to make a digital impact. This comprehensive
            package includes:
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[0].features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <PricingItem
                styles="left-right-spacing"
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan2">
        <PricingCard
          image={pricing_plans[1].image}
          imagePosition="position-left"
          key={pricing_plans[1].id}
          title={pricing_plans[1].title}
          packageName={pricing_plans[1].packageName}
          price={pricing_plans[1].price}
          offers={pricing_plans[1].offers}
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
          {pricing_plans[1].features.map((feature, index) => (
            <div
            key={feature.id}
            data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 300}`}
          >
            <PricingItem
              styles="left-right-spacing"
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan1">
        <img
          className="pricing-plan-bg2 hidden md:block "
          src={ellipses2}
          alt="ellipse"
        />
        <PricingCard
          imagePosition="postion-right"
          image={pricing_plans[2].image}
          bgColor="linear-gradient-bg"
          key={pricing_plans[2].id}
          title={pricing_plans[2].title}
          packageName={pricing_plans[2].packageName}
          price={pricing_plans[2].price}
          offers={pricing_plans[2].offers}
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
          {pricing_plans[0].features.map((feature, index) => (
            <div
            key={feature.id}
            data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 300}`}
          >
            <PricingItem
              styles="left-right-spacing"
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan2">
        <img
          className="pricing-plan-bg2 hidden md:block"
          src={ellipses3}
          alt="ellipse"
        />
        <PricingCard
          image={pricing_plans[3].image}
          imagePosition="position-top"
          bgColor="bg-transparent"
          key={pricing_plans[3].id}
          title={pricing_plans[3].title}
          packageName={pricing_plans[3].packageName}
          price={pricing_plans[3].price}
          offers={pricing_plans[3].offers}
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
          {pricing_plans[1].features.map((feature, index) => (
            <div
            key={feature.id}
            data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 300}`}
          >
            <PricingItem
              styles="left-right-spacing"
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
