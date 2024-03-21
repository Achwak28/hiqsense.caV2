import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import BuildingBusiness from "./BuildingBusiness"
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../components/images/Logo.png";
import { Link } from "react-router-dom";
import {  Box, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';

const NavigationLink = ({ url, label }) => (
  <a
    href={url}
    className="grow text-sm font-bold tracking-wide leading-5 text-white whitespace-nowrap "
  >
    {label}
  </a>
);

const SocialIcon = ({ Icon, className }) => (
  <Icon style={{ color: "white" }} className={className} />
);

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const navigationLinks = [
    { url: "about", label: "About Us" },
    { url: "services", label: "Services" },
    { url: "portfolio", label: "Portfolio" },
    { url: "contact", label: "Contact Us" },
  ];

  const socialIcons = [
    { Icon: FacebookIcon, className: "self-start w-[27px] h-[27px]" },
    { Icon: TwitterIcon, className: "w-[24px] h-[24px]" },
    { Icon: InstagramIcon, className: "w-[24px] h-[24px]" },
  ];
  
  return (
    <Stack direction={"column"} >

         <BuildingBusiness />
      <Box  > 
     <footer className="flex flex-col items-center px-16 w-full bg-[#31135E] py-5 max-md:px-5  max-md:max-w-full">

      <div className="flex z-10 flex-col mt-0 w-full max-w-[1188px] max-md:max-w-full">
       
        <Box> 
        <header className="flex gap-5 justify-between mt-24 text-2xl font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
       
          <Link to = "/">
          <img
            loading="lazy"
            src= {logo}
            alt="Brand logo"           
            className="my-auto max-w-full aspect-[7.69] w-[153px]"
            
          />
          </Link>
          {!isMobile && (
            <div className="flex flex-col items-center gap-2">
              <div className="self-end mt-8">Lets do it!</div>
              <div className="flex gap-4 self-end ">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>
          )}
        </header>
        </Box>

        <nav className="flex flex-col gap-5 justify-between items-center sm:items-start  my-8 w-full max-md:flex-wrap  max-md:max-w-full">
          <div className="w-full sm:w-fit sm:gap-5 flex sm:items-start justify-between sm:justify-normal mb-5 sm:mb-10 text-white whitespace-nowrap ">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.label} {...link} />
            ))}
          </div>
          {isMobile && (
            <div className="w-full flex flex-col items-center  gap-2">
              <div className="text-2xl font-bold mt-8 text-white">
                Lets do it!
              </div>
              <div className=" flex gap-4 ">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>
          )}
        </nav>

        <div className="flex flex-col items-center sm:flex-row gap-5 justify-between mt-5 w-full text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-row gap-5 justify-between items-center text-lg">
            <div className="flex-auto">Privacy Policy</div>
            <div className="flex-auto">Terms of Use</div>
          </div>
          <div className="flex-auto my-auto text-sm font-light text-right">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>


    </footer>
    
  
    </Box>

    <Divider sx = {{ position: "relative"  , bottom : "100px" , margin: "0" , padding: "0"}}/>
    </Stack>
    
  );
};

export default Footer;
