import HeroSection from "./Hero/Hero";
//import Services from "./components/pages/HomePage/Services/Services";
import Services from "./Services/Services";
// Sections Import End
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import FeaturedWork from "./FeaturedWork/FeaturedWork";
import ClientTestimonials from "./ClientTestimonials/ClientTestimonials";
import TimelineSection from "./TimelineSection/TimelineSection";
import Awards from "./Awards/Awards";
import PricingOptions from "./PricingOptions/PricingOptions";
import Cta from "./CTA/Cta";
//import GetInTouch from "./components/pages/GetInTouch/GetInTouch";
import GetInTouch from "../GetInTouch/GetInTouch";
import { useEffect } from "react";
//import AOS from "../../../../node_modules/aos/dist/aos";
import AOS from "aos";
import "aos/dist/aos.css"; 
//import "../../../../node_modules/animate.css";
 

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <FeaturedWork />
      <ClientTestimonials />
      <TimelineSection />
      <Awards />
      <PricingOptions />
      <Cta />
      <GetInTouch />
    </div>
  );
}
