import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import CatchAllRoute from "./components/BuilderIo";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import Portfolio from './components/pages/Portfolio'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Portfolio/>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
