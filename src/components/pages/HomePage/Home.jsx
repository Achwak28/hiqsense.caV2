
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
/*
import HeroSection from "./components/pages/HomePage/Hero/Hero";
import Services from "./components/pages/HomePage/Services/Services";
// Sections Import End

import WhyChooseUs from "./components/pages/HomePage/WhyChooseUs/WhyChooseUs";
import FeaturedWork from "./components/pages/HomePage/FeaturedWork/FeaturedWork";
import ClientTestimonials from "./components/pages/HomePage/ClientTestimonials/ClientTestimonials";
import TimelineSection from "./components/pages/HomePage/TimelineSection/TimelineSection";
import Awards from "./components/pages/HomePage/Awards/Awards";
import PricingOptions from "./components/pages/HomePage/PricingOptions/PricingOptions";
import Cta from "./components/pages/HomePage/CTA/Cta";
import GetInTouch from "./components/pages/GetInTouch/GetInTouch";
import "animate.css";

export default function Home() {
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
>>>>>>> bd1b83fc564dea4c71742e7d8dcf1277bdebd6dd
*/