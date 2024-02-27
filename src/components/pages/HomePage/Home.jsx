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
