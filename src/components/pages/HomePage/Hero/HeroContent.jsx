import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";

function HeroContent({headingText, subHeading}) {
    return (
        <>
            <h1 className="hero-heading-styles">{headingText}</h1>
            <p className="hero-sub-heading">{subHeading}</p>
            <div className="flex justify-center">
            <PrimaryButtonSolid buttonlabel = "View Our Work"/>
            <PrimaryButtonOutlined buttonlabel = "Get in Touch"/>
            </div>
            
        </>

    )
}

export default HeroContent;