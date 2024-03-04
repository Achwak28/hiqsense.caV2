import HeroSection from "../HomePage/Hero/Hero";
import Services from "../HomePage/Services/Services";
// Sections Import End
import WhyChooseUs from "../HomePage/WhyChooseUs/WhyChooseUs";
import FeaturedWork from "../HomePage/FeaturedWork/FeaturedWork";
import ClientTestimonials from "../HomePage/ClientTestimonials/ClientTestimonials";
import TimelineSection from "../HomePage/TimelineSection/TimelineSection";
import Awards from "../HomePage/Awards/Awards";
import PricingOptions from "../HomePage/PricingOptions/PricingOptions";
import Cta from "../HomePage/CTA/Cta";
import GetInTouch from "../GetInTouch/GetInTouch";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

// import AOS from "../../../../node_modules/aos/dist/aos";
// import "aos/dist/aos.css";
// import "../../../../node_modules/animate.css";

export default function Home() {
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        easing: "ease-out-cubic",
      });
    };

    // Delay initialization by a short duration 
    const delay = 100;
    const timeoutId = setTimeout(initializeAOS, delay);

    // Cleanup function to clear the timeout in case the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Run this code after the component has mounted
    const images = document.querySelectorAll('img');
    
    images.forEach((image) => {
      image.draggable = false;
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
