import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
//import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//import TestimonialsCard from "../../../ui/TestimonialsCard";
import bgImg from "../../../images/client-testimonials/bg.jpg";
import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import transformBusinessImg from "../../../images/client-testimonials/transformBusiness.svg";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";




function Consultation() {


  return (
    <>
      <section
        className="py-10 lg:py-20 h-auto"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
       

        <div className="px-2 py-5 lg:py-20 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-5 md:mt-10">
            <div>
              <PrimaryHeading headingText="Hiqsense : Your Comprehensive Technology Partner for Business Growth" 
              tarnsformBusinessLg="lg:w-[75%] lg:mx-auto lg:text-left"/>
            </div>
            <div>
              <PrimarySubHeading 
              subText="Based in Saskatoon, we're more than just a web design company. We're your all-encompassing technology ally,
               covering every aspect of your digital journey. From crafting a unique corporate identity and logo design to expertly
                managing your social media channels, we ensure every tech need is met. With Hiqsense, elevate your small business with customized, 
                innovative solutions that encapsulate the essence of your brand and engage your audience effectively." 
                tarnsformBusinessLg="lg:w-[75%] lg:mx-auto lg:text-left"/>
              <PrimaryButtonSolid 
              buttonlabel="About Us"
              href = "/about#root" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-5 md:mt-10">
            <div className="md:order-2" data-aos="fade-up" data-aos-duration="1500" >
              <img
                src={transformBusinessImg}
                alt="Transform Business"
                className="lg:w-[1000px]"
              />
            </div>
            <div className="md:order-1">
              <PrimaryHeading
                headingText="Transform Your Business Today"
                tarnsformBusinessLg="lg:w-[75%] lg:mx-auto lg:text-left"
              />
              <PrimarySubHeading
                subText="Schedule a free consultation or request a quote to get started."
                tarnsformBusinessLg="lg:w-[75%] lg:mx-auto lg:text-left"
              />
              <PrimaryButtonSolid
                buttonlabel="Free Consultation"
                testimonialsMarg="15px"
              />
              <PrimaryButtonOutlined buttonlabel="Request a Quote" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consultation;
