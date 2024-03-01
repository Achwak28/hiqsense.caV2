import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import ServiceCards from "../../../ui/ServiceCards";
import webDesignImg from "../../../images/services/webDesign.jpg";
import webPng from '../../../images/services/webDesign.png'
import seoImg from "../../../images/services/seo.jpg";
import seoPng from '../../../images/services/seo.png'
import logoDesignImg from "../../../images/services/logoDesign.jpg";
import logoDesignPng from '../../../images/services/logoDesign.png'
import emailHostingImg from "../../../images/services/emailHosting.jpg";
import emailHostingPng from '../../../images/services/emailHosting.png'
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
      <PrimarySubHeading subText="Elevate your online presence with our diverse services. From captivating logo and graphic design to cutting-edge web design, we craft unique digital experiences. Boost visibility through our SEO optimization, and ensure seamless communication with our Email Hosting Configuration. Let us transform your digital presence into a powerful asset." />

      <div className="grid grid-cols-1 lg:grid-cols-custom lg:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8 lg:order-2 serviceParent ">
          
            <ServiceCards
              img1={webDesignImg}
              imgLg = {webPng}
              altText="Web design"
              cardText="Web Design"
            />
            <ServiceCards
              img1={seoImg}
              imgLg = {seoPng}
              altText="SEO Optimization"
              cardText="SEO Optimization"
            />
          
          
            <ServiceCards
              img1={logoDesignImg}
              imgLg = {logoDesignPng}
              altText="Logo & Graphic Design"
              cardText="Logo & Graphic Design"
            />
            <ServiceCards
              img1={emailHostingImg}
              imgLg = {emailHostingPng}
              altText="Email Hosting"
              cardText="Email Hosting"
            />
         
        </div>
        <div>
          <div className="rounded-[20px] h-[172px] lg:h-[57.5rem] w-[100%] bg-[#4334B6] mb-3 mt-4 flex  flex-col justify-center relative">
            <div className="diagramBlock">
              <img src={diagramImg} alt="diagramImg" />
            </div>
            <div className="graphicBlock">
              <img src={graphicImg} alt="diagramImg" />
            </div>
            <div className="telescopeBlock">
              <img src={telescopeImg} alt="diagramImg" />
            </div>
            <div className="messageBlock">
              <img src={messageImg} alt="diagramImg" />
            </div>
            <div className="calendarBlock">
              <img src={calendarImg} alt="diagramImg" />
            </div>
            <div className="gearBlock">
              <img src={gearImg} alt="diagramImg" />
            </div>
            <blockquote className="pb-4 lg:pb-96">
              <p className="text-[#FFFFFF] text-[14px] lg:text-[18px] font-hebrew-bold text-center w-4/5 mx-auto">
                We aim to deliver the best possible solutions for you.
              </p>
              <footer className="text-[#FFFFFF] text-[14px] lg:text-[18px] font-hebrew-regular text-center w-4/5 mx-auto mt-1">
                -HIQSense
              </footer>
            </blockquote>
          </div>
          <PrimaryButtonSolid
            buttonlabel="Learn More"
            custRadius="12px"
            custFontSize="18px"
            custMarg="0"
            lgPadding = "lg:py-[25px] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
