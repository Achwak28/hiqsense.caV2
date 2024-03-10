import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import pcImg from "../../../images/why-choose-us/pcImg.svg";
import WhyChooseBoxes from "../../../ui/WhyChooseBoxes";
import creativeImg from "../../../images/why-choose-us/creativeImg.png";
import webStrategyimg from "../../../images/why-choose-us/webStrategy.png";
import dedicatedImg from "../../../images/why-choose-us/dedicated.png";
import quickImg from "../../../images/why-choose-us/quick.png";
import maintenanceImg from "../../../images/why-choose-us/maintenance.png";
import whyLargeEllipse from "../../../images/why-choose-us/whyLargeEllipse.svg";
function WhyChooseUs() {
  return (
    <>
      <section className="px-4 lg:px-40 py-10 lg:py-20 overflow-hidden">
        <PrimaryHeading headingText="Why Choose Us?" />
        <PrimarySubHeading 
        subText="
        Elevating Your Business with Exceptional Design, Unmatched Support, and Strategic Expertise" />

        <div className="grid grid-cols-1 whyChooseAfter pt-10 lg:grid-cols-2">
          <div
            className="whyLargeEllipseBlock"
            data-aos="zoom-out"
            data-aos-duration="3000"
            data-aos-easing="linear"
          >
            <img
              src={whyLargeEllipse}
              alt="whyLargeEllipse"
              className="lg:w-[100%]"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="1500">
            <img src={pcImg} alt="PC Image" className="mb-10 md:mx-auto" />
          </div>
          <div className="whyChooseParent">
            <WhyChooseBoxes whyImg={creativeImg} altText="Creative Design" heading = "Creative Design" 
            subHeading= "Our innovative designs are not just visually stunning, but also strategically crafted to engage and captivate your audience."/>
            <WhyChooseBoxes whyImg={webStrategyimg} altText="Web Strategy" heading = "Web Strategy" 
            subHeading= "We don't just build websites; we provide a complete web strategy to ensure your online presence is effective and impactful." />
            <WhyChooseBoxes whyImg={dedicatedImg} altText="Dedicated Support" heading = "Customer Service" 
            subHeading= "Prioritizing our clients with responsive, professional support tailored to your unique needs." />
            <WhyChooseBoxes whyImg={quickImg} altText="Quick Turnover"  heading = "Quick Turnove" 
            subHeading= "We value your time, ensuring speedy delivery without compromising on quality, so your vision is brought to life efficiently."/>
            <WhyChooseBoxes whyImg={maintenanceImg} altText="Maintenance"  heading = "Free Maintenance" 
            subHeading= "Offering post-launch adjustments for a month, because we know you might change your mind. Perfecting your vision is our commitment."/>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
