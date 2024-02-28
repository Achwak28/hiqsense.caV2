
import { useState, useEffect } from "react";
// eslint-disable-next-line no-undef
//const imagePath = `${process.env.REACT_APP_PUBLIC_URL}/assets/images/service_img/hero/hero.png`;

const imagePath = "/assets/images/service_img/hero/hero.png"


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animatedHero');
      const position = element.getBoundingClientRect();
      
      // Check if element is within viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    // Trigger once on load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden h-full w-full bg-hero bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-hero via-hero to-hero-bottom-gradient">
      <div id="animatedHero" className="inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_4px,transparent_4px),linear-gradient(to_top,#80808012_4px,transparent_4px)] bg-[size:80px_80px] flex">
        <div className="w-full justify-center pb-16 sm:px-4 md:px-8 lg:px-10 xl:px-16 max-w-10xl flex flex-col-reverse items-center lg:flex-row md:flex-row sm:flex-row sm:items-center">
          <div className={`flex flex-col px-2 text-white lg:gap-y-8 md:gap-y-4 sm:gap-y-2 gap-y-1 transition-transform duration-500 ${isVisible ? 'animate-slideRight' : 'translate-x-full'}`}>
            <h1 className="font-body font-bold font-ebgaramond lg:text-custom-large md:text-[32px] sm:text-[28px] text-[24px] w-full lg:leading-[64px] md:leading-[48px] sm:leading-[32px] text-center md:text-left sm:text-left">Unleash the Power of Your Digital Experiences</h1>
            <p className="font-subTitle font-opensanshebrew text-center md:text-custom-regular sm:text-[14px] text-[12px] sm:text-left">
              Join us on a journey where your digital presence is not just
              enhanced but elevated, shaping the urban landscape in ways that are
              both visually stunning and strategically impactful.
            </p>
          </div>
          <div className={`transition-transform duration-500 ${isVisible ? 'animate-slideLeft' : 'translate-x-full'}`}>
            <img alt="service hero image" src={imagePath} />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
