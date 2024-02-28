import { Link } from "react-router-dom";
import React from "react";



const NavLink = ({ children }) => (
  <div className="grow">{children}</div>
);

const NavigationBar = () => (
  <nav className="flex gap-5 justify-between pr-8">
    <Link to="about"> <NavLink>About Us</NavLink></Link>
    <Link to="services"> <NavLink>Services</NavLink></Link>
    <Link to="portfolio"> <NavLink>Portfolio</NavLink></Link>
    <Link to="contact"> <NavLink>AContact Us</NavLink></Link>
    


  </nav>
);

const Header = () => (


    <header style={{ backgroundColor: "#4334B6", position: "fixed", zIndex: "99" }} className="md:flex relative hidden flex-row gap-5 justify-between self-center px-20 w-full text-sm bg-indigo-700 border-b border-solid 
  shadow border-b-slate-800 border-b-opacity-10 text-stone-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between py-5 tracking-wide leading-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <Link to = "/" >

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bb48ea2e0ce7936ae3b35ffc1023004fda6b609c8aa7a9ed59f44db3c4370cd?apiKey=80a5e28f4487459e9fd570b5e7227164&"
          alt="Company Logo"

          className="my-auto max-w-full aspect-[7.69] w-[153px]" />
          </Link>
        <NavigationBar />
      </div>

      <div className="flex gap-5 justify-between px-0.5 py-1 my-auto leading-[143%]">
        <div className="my-auto tracking-wide">Learn more</div>
        <button className="grow justify-center px-6 py-2.5 font-bold tracking-normal whitespace-nowrap bg-btn-primary rounded max-md:px-5">
          Get started
        </button>
      </div>

    </header>


);

export default Header;
