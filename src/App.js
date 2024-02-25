import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import CatchAllRoute from "./components/BuilderIo";
import { BrowserRouter } from "react-router-dom";
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


export default function App() {
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
          <Awards/>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
