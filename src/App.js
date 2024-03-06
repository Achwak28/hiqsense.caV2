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


import Home from "./components/pages/HomePage/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Pricing from "./components/pages/PricingPage/Pricing";

// Sections Import Start
import theme from "./Theme";
import Service from "./components/Service";
import Portfolio from './components/pages/Portfolio'
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy'
import FAQ from './components/pages/FAQ/FAQ'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
