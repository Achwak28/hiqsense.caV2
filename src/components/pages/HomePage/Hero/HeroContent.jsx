import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";



function HeroContent({ firstWord, headingText, subHeading }) {
    
  return (
    <>
      <h1 className="hero-heading-styles" data-aos="fade-up" data-aos-duration="2000">
        <span className="firstWord relative">{firstWord}</span>
        {headingText}
      </h1>
      <p className="hero-sub-heading" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700">{subHeading}</p>
      <div className="flex justify-center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
        <PrimaryButtonSolid buttonlabel="View Our Work" />
        <PrimaryButtonOutlined buttonlabel="Get in Touch" />
      </div>
    </>
  );
}

export default HeroContent;
