import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import CatchAllRoute from "./components/BuilderIo";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Sections Import Start
import HeroSection from './components/pages/HomePage/Hero/Hero'
import Services from "./components/pages/HomePage/Services/Services";
// Sections Import End
import React from "react";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import WhyChooseUs from "./components/pages/HomePage/WhyChooseUs/WhyChooseUs";
import FeaturedWork from "./components/pages/HomePage/FeaturedWork/FeaturedWork";
import ClientTestimonials from "./components/pages/HomePage/ClientTestimonials/ClientTestimonials";
import TimelineSection from "./components/pages/HomePage/TimelineSection/TimelineSection";
import Awards from "./components/pages/HomePage/Awards/Awards";
import PricingOptions from "./components/pages/HomePage/PricingOptions/PricingOptions";
import Cta from "./components/pages/HomePage/CTA/Cta";
import GetInTouch from "./components/pages/GetInTouch/GetInTouch";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import theme from "./Theme";
import Service from "./components/Service";


export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <BrowserRouter>
          <Header />
          # add your pages here
          <HeroSection />
          <Services />
          <WhyChooseUs />
          <FeaturedWork />
          <ClientTestimonials />
          <TimelineSection />
          <Awards />
          <PricingOptions />
          <Cta/>
          <GetInTouch/>
          <Footer />
        </BrowserRouter>
      </div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/services" element={<Service />} />
          <Route path="/about" />
        </Routes>
        <Footer />
      </BrowserRouter>

    </ThemeProvider>
  );
}
