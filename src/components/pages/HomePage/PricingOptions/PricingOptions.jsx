import { useEffect } from "react";
import PricingCard from "../../../ui/PricingCard";
import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";

const pricingObj = [
  {
    service: "Web Design",
    package: "Startup Package",
    cost: "$100",
    list: [
      "Domain Name - 1 Year",
      "4-Static Pages Web Design",
      "Hosting - 1 Year",
      "5 Business Email Accounts",
    ],
  },
  {
    service: "Web Design",
    package: "E-Commerce Package",
    cost: "$100",
    list: [
      "Domain Name - 1 Year",
      "Fully Functional E-Commerce with Admin Portal",
      "Online Payment Integration",
      "Hosting - 1 Year",
      "5 Business Email Accounts",
    ],
  },
  {
    service: "Graphic Design",
    package: "Logo and Graphic Design Package",
    cost: "$100",
    list: [
      "Logo Design",
      "Social Media Kit",
      "3 Concepts",
      "Stationary Design",
    ],
  },
  {
    service: "SEO",
    package: "Take Your Business to the Next Level with Business Plan",
    cost: "Custom",
    list: [
      "Page Audit",
      "Research Keywords",
      "Title Optimization",
      "Meta Description",
      "Site Map for Search Engines",
    ],
  },
];

function PricingOptions() {
  useEffect(() => {}, [pricingObj]);
  return (
    <>
      <section className="px-4 py-10 relative overflow-hidden">
        <PrimaryHeading headingText="Pricing Options" />
        <PrimarySubHeading subText="Choose the plan that fits your budget" />

        <div className="grid grid-cols-1 pricingContainer">
          {/* Map over pricingObj and pass object keys as props */}
          {pricingObj.map((pricing, index) => (
            <PricingCard
              key={index}
              serviceName={pricing.service}
              packageName={pricing.package}
              priceTag={pricing.cost}
              serviceList={pricing.list}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingOptions;
