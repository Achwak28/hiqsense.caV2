import diamondImg from "../images/pricing-options/bgDiamond.svg";
import PrimaryButtonSolid from "./PrimaryButtonSolid";

function PricingCard({serviceName, packageName, priceTag, serviceList}) {
  return (
    <>
      <div
        className="w-[100%] h-[710px] rounded-[26px] bg-transparent mb-4 text-left p-5 flex flex-col justify-between"
        style={{ border: "1px solid #A9ACBB" }}
      >
        <div>
          <div className="mb-3">
            <img src={diamondImg} alt="Diamond Image" />
          </div>
          <h3 className="font-hebrew-bold text-[32px] text-txt-primary mb-4">
            {serviceName}
          </h3>
          <p className="font-hebrew-light text=[18px] text-txt-primary mb-5">
            {packageName}
          </p>
          <h4 className="font-hebrew-bold text-[40px] text-txt-primary mb-5">
            {priceTag}
          </h4>
          <ul>
            {serviceList.map((item, i) => (
              <li
                key={i}
                className="font-hebrew-regular text-[18px] text-txt-primary mb-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <PrimaryButtonSolid
            buttonlabel="Get Started"
            pricingBtnColor="#4334B6"
            pricingTxtCenter="center"
            pricingBorder="12px"
          />
        </div>
      </div>
    </>
  );
}

export default PricingCard;
