import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import icon from "../../assets/pricing/icon-check.png";
import "./UpdatedFooter.css";
const SocialIcon = ({ Icon, className }) => (
  <Icon
    style={{ color: "white", marginLeft: "0.5rem" }}
    className={className}
  />
);
const Feature = ({ text }) => (
  <div className="box-item">
    <img style={{marginRight:"0.5rem"}} className="w-[12px] h-[12px] " src={icon} alt="icon" />
    <p className="font-normal font-subTitle">{text}</p>
  </div>
);

const NavigationLink = ({ url, label }) => (
  <a href={url} className="footer-navigation-link font-subTitle">
    {label}
  </a>
);
const UpdatedFooter = () => {
  const socialIcons = [
    { Icon: FacebookIcon, className: "self-start w-[27px] h-[27px]" },
    { Icon: TwitterIcon, className: "w-[24px] h-[24px]" },
    { Icon: InstagramIcon, className: "w-[24px] h-[24px]" },
  ];

  const navigationLinks = [
    { url: "#about", label: "About Us" },
    { url: "#services", label: "Services" },
    { url: "#portfolio", label: "Portfolio" },
    { url: "#contact", label: "Contact Us" },
  ];

  const features = [
    { id: "f1", title: "Web Design" },
    { id: "f2", title: "Logo and Graphic Design" },
    { id: "f3", title: "SEO Optimization" },
    { id: "f4", title: "Email Hosting" },
  ];
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-box-left">
          <p className="font-bold font-subTitle" style={{ fontSize: "1.5rem" }}>
            Start Building your Business Today
          </p>
          <div className="box-left-items">
            {features.map((feature) => (
              <Feature key={feature.id} text={feature.title} />
            ))}
          </div>
        </div>
        <div className="footer-box-right">
          <button
            style={{ border: "1px solid white", marginRight: "1rem" }}
            className="box-btn font-subTitle py-2 px-6"
          >
            Get in Touch
          </button>
          <button
            style={{ backgroundColor: "#F6393D" }}
            className="box-btn font-subTitle py-2 px-6"
          >
            About Us
          </button>
        </div>
        <div className="footer-box-right"></div>
      </div>
      <div className="footer-upper-content">
        <div className="footer-upper-content-left">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0252f0cd6bb73ca83f147439ac7b044813b1f93596a85e5cc6bfc8d8242374d5?apiKey=80a5e28f4487459e9fd570b5e7227164&"
            alt="Brand logo"
            className="aspect-[7.69] w-[380px] h-[51px] footer-logo"
          />
          <div style={{ color: "white" }} className="footer-navigation-links">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.label} {...link} />
            ))}
          </div>
        </div>
        <div className="footer-upper-content-right">
          <p
            style={{
              fontSize: "24px",
              lineHeight: "33px",
              marginBottom: "1rem",
              marginTo: "2rem",
            }}
            className="font-bold font-subTitle"
          >
            Let&apos;s do it!{" "}
          </p>
          <div>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-division-line"></div>
      <div className="footer-lower-content">
        <div style={{ display: "flex" }}>
          <p style={{marginRight:"2rem"}}>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className='right-text font-thin' style={{ color: "white" }}>© 2024 All Rights Reserved</div>
      </div>
    </div>
  );
};

export default UpdatedFooter;
