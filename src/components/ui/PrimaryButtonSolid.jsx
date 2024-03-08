
import { Link } from "react-router-dom";
function PrimaryButtonSolid({
  buttonlabel,
  pricingBorder,
  custRadius,
  custFontSize,
  custMarg,
  testimonialsMarg,
  pricingBtnColor,
  pricingTxtCenter,
  pricingLgWidth,
  lgPadding,
  href
}) {
  let btnStyle = {
    borderRadius: custRadius,
    fontSize: custFontSize,
    marginLeft: custMarg,
    marginRight: custMarg,
    marginBottom: testimonialsMarg,
    backgroundColor: pricingBtnColor,
    textAlign: pricingTxtCenter,
    borderColor: pricingBtnColor,
  };

  return (
    <>
       <Link to= {href}>
        <div
          className={`bg-btn-primary border border-btn-primary text-[#F9F9F9] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded-[${pricingBorder}] rounded text-sm mx-2 ${lgPadding} lg:inline-block lg:px-20 ${pricingLgWidth}`}
          style={btnStyle}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {buttonlabel}
        </div>
      </Link>
    </>
  );
}

export default PrimaryButtonSolid;
