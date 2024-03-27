import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "../hooks/useMediaQuery";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import SmallLogo from "../components/images/smallLogo.svg";
import logo from "../components/images/Logo.png";

const NavLink = ({ children }) => <div className="grow">{children}</div>;

const NavigationBar = () => (
  <nav className="flex gap-5 justify-between pr-8">
    <Link to="about">
      
      <NavLink>About Us</NavLink>
    </Link>
    <Link to="services">
   
      <NavLink>Services</NavLink>
    </Link>
    <Link to="portfolio">
   
      <NavLink>Portfolio</NavLink>
    </Link>

    <Link to="pricing">

      <NavLink>Pricing</NavLink>
    </Link>
    <Link to="contact">

      <NavLink>Contact Us</NavLink>
    </Link>
    <Link to="faq">

    <NavLink>FAQ</NavLink>
    </Link>
  </nav>
);

const navigationLinks = [
  { url: "about", label: "About Us" },
  { url: "services", label: "Services" },
  { url: "portfolio", label: "Portfolio" },

  { url: "pricing", label: "Pricing" },
  { url: "contact", label: "Contact Us" },
  { url: "faq", label: "FAQ" },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const overlayRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClick = (e) => {
    if (overlayRef.current === e.target) {
      setIsOpen(false);
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <DehazeIcon />
      </button>
      {isOpen && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/50"
            onClick={handleClick}
          />
          <div className=" fixed inset-0 w-full sm:w-[300px] h-screen p-8 bg-[#4334B6] shadow-lg text-white flex flex-col gap-5">
            <button className="ml-auto" onClick={closeMenu}>
              <CloseIcon />
            </button>
            <div className="flex text-left flex-col items-center gap-5 ">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="p-2 hover:bg-white/10 hover:text-white rounded cursor-pointer"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 910px)");

  return (
    <header
      style={{ backgroundColor: "#4334B6", position: "fixed", zIndex: "99" }}
      className="flex relative flex-row gap-5 
    justify-between self-center px-16 w-full 
    text-sm bg-indigo-700 border-b border-solid 
  shadow border-b-slate-800 border-b-opacity-10 
  text-stone-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full"
    >
      <div
        className="flex gap-5 justify-between py-3 sm:py-5 
      tracking-wide leading-5 whitespace-nowrap max-md:flex-wrap 
      max-md:max-w-full"
      >
        {isDesktop ? (
          <>
            <Link to="/">
              <img
                loading="lazy"
                src={logo}
                alt="Company Logo"
                className="my-auto max-w-full aspect-[7.69] w-[153px]"
              />
            </Link>
            <NavigationBar />
          </>
        ) : (
          <>
            <MobileNavigation />
            <Link to="/">
              <img
                loading="lazy"
                src={SmallLogo}
                alt="Company Logo"
                className="w-[50px] sm:w-[40px]  object-contain"
              />
            </Link>
          </>
        )}
      </div>
      <div className="flex gap-5 justify-between px-0.5 py-1 my-auto leading-[143%]">
        <div className="my-auto tracking-wide">Learn more</div>
        <Link to="/pricing">
          <button className="grow justify-center px-6 py-2.5 font-bold tracking-normal whitespace-nowrap bg-btn-primary rounded max-md:px-5">
            Get started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
