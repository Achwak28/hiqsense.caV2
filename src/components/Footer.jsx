import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const NavigationLink = ({ url, label }) => (
  <a
    href={url}
    className="grow text-sm tracking-wide leading-5 text-white whitespace-nowrap"
  >
    {label}
  </a>
);

const SocialIcon = ({ Icon, className }) => (
  <Icon style={{ color: "white" }} className={className} />
);

const Footer = () => {
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

  return (
    <footer
      style={{ opacity: 0.85, marginTop:"0px"}}
      className="flex flex-col items-center px-16 w-full bg-violet-950 py-10 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex z-10 flex-col mt-0 w-full max-w-[1188px] max-md:max-w-full">
        <header className="flex gap-5 justify-between mt-24 text-2xl font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0252f0cd6bb73ca83f147439ac7b044813b1f93596a85e5cc6bfc8d8242374d5?apiKey=80a5e28f4487459e9fd570b5e7227164&"
            alt="Brand logo"
            className="aspect-[7.69] w-[380px]"
          />
          <div
            className="flex-auto self-end mt-8"
            style={{ paddingRight: "10%", textAlign: "right" }}
          >
            Lets do it!
          </div>
        </header>
        <nav className="flex gap-5 justify-between items-start pr-12 my-8 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center pr-2 mt-20 text-white whitespace-nowrap max-md:mt-10">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.label} {...link} />
            ))}
          </div>
          <div className="flex gap-4 self-start">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </nav>

        <div className="flex gap-5 justify-between mt-5 w-full text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-row gap-5 justify-between text-lg">
            <div className="flex-auto">Privacy Policy</div>
            <div className="flex-auto">Terms of Use</div>
          </div>
          <div className="flex-auto my-auto text-sm font-light text-right">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center mt-5 w-full h-px bg-stone-50"
        width="100%"
        style={{
          padding: "0",
          position: "relative",
          bottom: 80,
        }}
      />
    </footer>
  );
};

export default Footer;
