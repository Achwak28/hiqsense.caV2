import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Banner } from "./components/Banner";
//import { ContactForm } from './components/Form';
import { ContactForm } from "./components/FormNew";
import Map from "./components/Map";

import { Container } from "./components/Container";


const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.3,
    },
  },
};

const ContactUs = () => {


  return (
    <main className="pt-14 bg-[#F9F9F9] flex-1 min-h-[100dvh] w-full flex flex-col">
      <Banner />
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-start px-1 md:px-3 py-9 lg:p-16 lg:pb-20">
          <div className="flex flex-col pt-5">
            <h1 className="text-4xl text-left font-bold text-[#0A0628]">
              Get in
              <span className="text-[#F6393D]">Touch</span>
            </h1>
            <ContactForm />
          
          </div>
          <Map />
        </div>
      </Container>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="mt-5 px-5 h-full border-b border-white/20"
        style={{
          background: `
                        linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                        #31135E
                    `,
          backgroundSize: "30px 30px",
        }}
      >
        <motion.div
          className=" min-h-[317px] flex flex-col items-center w-full max-w-[1200px] mx-auto "
          variants={cardVariants}
        >
          <div className="w-full max-w-[755px] flex flex-col items-center gap-10 pt-4 pb-24 px-2 sm:px-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-left font-bold ">
              {" "}
              Do You Have a Question?{" "}
            </h1>
            <p className="text-base font-medium">
              {" "}
              You may go to our
              <span className="text-[#F6393D] font-bold px-1">FAQ</span>
              page and look for the answers to your inquiries or you may send us
              an email.
            </p>
            <Link
              to="/faq"
              className="w-[137px] flex items-center justify-center rounded h-12 bg-[#F6393D] text-base font-bold mt-5"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ContactUs;
