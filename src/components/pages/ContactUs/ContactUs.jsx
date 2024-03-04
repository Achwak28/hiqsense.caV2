import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Banner } from "./components/Banner";
import { ContactForm } from "./components/Form";
import { Container } from "./components/Container";

import mailIcon from "../../images/ContactUs/mailIcon.png";
import phoneIcon from "../../images/ContactUs/phoneIcon.png";
import facebookIcon from "../../images/ContactUs/facebookIcon.png";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const ContactInfo = ({ icon, title, text }) => (
    <div className="flex gap-4 items-center h-10">
      <img src={icon} alt="phoneIcon" className="h-7" />
      <div className="flex flex-col items-start text-xs lg:text-sm">
        <span className="text-[#0A0628] font-semibold"> {title} </span>
        <span className="text-[#F6393D]"> {text} </span>
      </div>
    </div>
  );

  return (
    <main className="bg-[#F9F9F9] flex-1 min-h-[100dvh] w-full flex flex-col">
      <Banner />
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-start px-1 md:px-3 py-9 lg:p-16 lg:pb-20">
          <div className="flex flex-col pt-5">
            <h1 className="text-4xl text-left font-bold text-[#0A0628]">
              Get in
              <span className="text-[#F6393D]">Touch</span>
            </h1>
            <ContactForm />
            <div className="flex flex-wrap items-start justify-around gap-4 pt-10">
              <ContactInfo icon={phoneIcon} title="PHONE" text="03 5432 1234" />
              <ContactInfo
                icon={facebookIcon}
                title="FACEBOOK"
                text="facebook.com/abc"
              />
              <ContactInfo icon={mailIcon} title="EMAIL" text="abc@gmail.com" />
            </div>
          </div>
          {isDesktop && (
            <div className="h-full w-full flex items-center justify-center flex-col pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18276991.720435414!2d-95.99999999999999!3d56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sus!4v1709143313203!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          )}
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
              className="w-[137px] flex items-center justify-center rounded h-12 bg-[#F6393D] text-base font-bold mt-5 m-10 "
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
