import React from "react";

const NavLink = ({ children }) => (
  <div className="grow">{children}</div>
);

const NavigationBar = () => (
  <nav className="flex gap-5 justify-between pr-8">
    <NavLink>About Us</NavLink>
    <NavLink>Services</NavLink>
    <NavLink>Portfolio</NavLink>
    <NavLink>Contact Us</NavLink>
  </nav>
);

const Header = () => (
  <header className="flex flex-row gap-5 justify-between self-center px-20 w-full text-sm bg-indigo-700 border-b border-solid 
  shadow border-b-slate-800 border-b-opacity-10 text-stone-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between py-5 tracking-wide leading-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bb48ea2e0ce7936ae3b35ffc1023004fda6b609c8aa7a9ed59f44db3c4370cd?apiKey=80a5e28f4487459e9fd570b5e7227164&" 
        alt="Company Logo"
        className="my-auto max-w-full aspect-[7.69] w-[153px]" />
      <NavigationBar />
    </div>
    <div className="flex gap-5 justify-between px-0.5 py-1 my-auto leading-[143%]">
      <div className="my-auto tracking-wide">Learn more</div>
      <button className="grow justify-center px-6 py-2.5 font-bold tracking-normal whitespace-nowrap bg-red-500 rounded max-md:px-5">
        Get started
      </button>
    </div>
  </header>
);

export default Header;