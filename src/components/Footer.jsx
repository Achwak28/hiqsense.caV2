import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useMediaQuery } from "../hooks/useMediaQuery";

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
    { url: "#about", label: "About Us" },
    { url: "#services", label: "Services" },
    { url: "#portfolio", label: "Portfolio" },
    { url: "#contact", label: "Contact Us" },
  ];

  const socialIcons = [
    { Icon: FacebookIcon, className: "self-start w-[27px] h-[27px]" },
    { Icon: TwitterIcon, className: "w-[24px] h-[24px]" },
    { Icon: InstagramIcon, className: "w-[24px] h-[24px]" },
  ];

  const services = [
    "Web Design",
    "Logo and Graphic Design",
    "SEO Optimization",
    "Email Hosting",
  ];

  return (
    <footer className="flex flex-col items-center px-16 w-full bg-[#31135E] py-2 max-md:px-5  max-md:max-w-full">
      <div className="z-[0] relative w-full">
        <div className="absolute  left-1/2 p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-gradient-to-r from-red-600 via-purple-600 to-indigo-700">
          <div className="block md:flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-sans font-bold text-white text-2xl p-4 text-left">
                Start Building your Business Today
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-3 text-sm">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-1 ">
                    <TaskAltIcon className="text-white max-w-5 max-h-5" />
                    <span className="text-white">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:flex gap-2 items-center justify-center w-full md:flex gap-4 items-center justify-end md:w-1/2">
              <button className="w-1/4 bg-transparent px-2 py-2 text-white border border-white rounded-lg">
                Get in Touch
              </button>
              <button className="w-1/4 bg-[#F6393D] px-2 py-2 text-white  rounded-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col mt-0 w-full max-w-[1188px] max-md:max-w-full">
        <header className="flex gap-5 justify-between mt-24 text-2xl font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0252f0cd6bb73ca83f147439ac7b044813b1f93596a85e5cc6bfc8d8242374d5?apiKey=80a5e28f4487459e9fd570b5e7227164&"
            alt="Brand logo"
            className="aspect-[7.69] w-full sm:w-[380px] "
          />
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

      <div
        className="flex flex-col items-center sm:mt-5 w-full h-px bg-stone-50"
        width="100%"
        style={{
          padding: "0",
          position: "relative",
          bottom: 80,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
