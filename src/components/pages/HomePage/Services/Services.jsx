import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import ServiceCards from "../../../ui/ServiceCards";
import webDesignImg from "../../../images/services/webDesign.jpg";
import webPng from "../../../images/services/webDesign.png";
import seoImg from "../../../images/services/seo.jpg";
import seoPng from "../../../images/services/seo.png";
import logoDesignImg from "../../../images/services/logoDesign.jpg";
import logoDesignPng from "../../../images/services/logoDesign.png";
import emailHostingImg from "../../../images/services/emailHosting.jpg";
import emailHostingPng from "../../../images/services/emailHosting.png";
import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import diagramImg from "../../../images/services/diagram.svg";
import graphicImg from "../../../images/services/graphic.svg";
import telescopeImg from "../../../images/services/telescope.svg";
import messageImg from "../../../images/services/message.svg";
import calendarImg from "../../../images/services/calendar.svg";
import gearImg from "../../../images/services/gear.svg";

function Services() {
  return (
    <section className="px-4 lg:px-40 py-10 lg:py-20 overflow-hidden">
      <PrimaryHeading headingText="Our Services" />
      <PrimarySubHeading
        subText="
        Elevate your business with Hiqsense &trade;.
         Our budget-friendly packages offer beautifully designed websites, 
         professional domain names, and branded email services to ensure your 
         small business stands out with a polished, professional online presence. 
         Make a memorable impact without stretching your budget!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-custom lg:gap-8">
        <div className="grid two-onlyCols md:grid-cols-2 grid-cols-1 md:gap-4 lg:gap-8 lg:order-2 serviceParent ">
          <ServiceCards
            img1={webDesignImg}
            imgLg={webPng}
            altText="Web design"
            cardText="Web Design"
            href="/services#animatedOfferingCard1"
          />
          <ServiceCards
            img1={seoImg}
            imgLg={seoPng}
            altText="SEO Optimization"
            cardText="SEO Optimization"
            href="/services#animatedOfferingCard3"
          />

          <ServiceCards
            img1={logoDesignImg}
            imgLg={logoDesignPng}
            altText="Logo & Graphic Design"
            cardText="Logo & Graphic Design"
            href="/services#animatedOfferingCard2"
          />
          <ServiceCards
            img1={emailHostingImg}
            imgLg={emailHostingPng}
            altText="Email Hosting Setup"
            cardText="Email Hosting Setup"
            href="/services#animatedOfferingCard4"
          />
        </div>
        <div>
          <div className="rounded-[20px] h-[172px] lg:h-[57.5rem] w-[100%] bg-[#4334B6] mb-3 mt-4 flex  flex-col justify-center relative">
            <div className="diagramBlock">
              <img
                src={diagramImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="graphicBlock">
              <img
                src={graphicImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="telescopeBlock">
              <img
                src={telescopeImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="messageBlock">
              <img
                src={messageImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="calendarBlock">
              <img
                src={calendarImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="gearBlock">
              <img
                src={gearImg}
                alt="diagramImg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <blockquote className="pb-4 lg:pb-96">
              <p
                className="text-[#FFFFFF] text-[14px] lg:text-[18px] font-hebrew-bold text-center w-4/5 mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {
                  "Unleash Your Brand's Full Potential with Saskatchewan's Leading Web Design, UI/UX, and SEO Experts!"
                }
              </p>
              <footer
                className="text-[#FFFFFF] text-[14px] lg:text-[18px] font-hebrew-regular text-center w-4/5 mx-auto
                 mt-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hiqsense &trade; Smart Systems
              </footer>
            </blockquote>
          </div>
          <PrimaryButtonSolid
            buttonlabel="Learn More"
            custRadius="12px"
            custFontSize="18px"
            custMarg="0"
            lgPadding="lg:py-[25px] lg:w-full"
            href="/services#servicesStart"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
