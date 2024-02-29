import HeroContent from "./HeroContent";
// import largeElipse from "../../../images/hero/largeElipse.svg";
// import mediumElipse from "../../../images/hero/mediumElipse.svg";
// import smallElispe from "../../../images/hero/smallElipse.svg";
import characterImg from "../../../images/hero/character.svg";
import rocketImg from "../../../images/hero/rocket.svg";
import handImg from "../../../images/hero/handPencil.svg";
import noteImg from "../../../images/hero/notePad.svg";
import candelsticImg from "../../../images/hero/candlesticks.png";
import worldImg from "../../../images/hero/world.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const rotationAnimation = () => {
      // Get the total length of the path

      gsap.to("#rocketBlock", {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 0.1,
        },
        transformOrigin: "50% 50% ",
        duration: 100,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });
    };

    rotationAnimation();
  }, []); // Run the animation only once when the component mounts
  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-[#4334B6] h-[620px] lg:h-screen w-100 flex flex-col justify-center items-center content-center flex-wrap px-2 relative z-[2] circleContain">
          <svg
            height="700"
            width="1700"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath"
          >
            <path
              id="path"
              d="M850,700A850,350,0,1,1,850,0A850,350,0,1,1,850,700Z"
              fill="none"
              stroke="none"
            />
          </svg>
          <div className="rocketBlock" id="rocketBlock">
            <img src={rocketImg} alt="rocketImg" />
          </div>
          {/* Circle Animation Starts here */}
          <div className="circle">
            <img
              src={characterImg}
              alt="characterImg"
              className="circleCharacter"
            />
          </div>
          {/* Circle Animation Ends here */}

          <div className="handBlock">
            <img src={handImg} alt="handImg" />
          </div>
          <div className="noteBlock">
            <img src={noteImg} alt="noteImg" />
          </div>
          <div className="candelstickBlock">
            <img src={candelsticImg} alt="candelsticImg" />
          </div>
          <div className="worldBlock">
            <img src={worldImg} alt="worldImg" />
          </div>

          <HeroContent
            firstWord="Crafting"
            headingText=" Digital Experiences That Inspire and Engage"
            subHeading="Innovative Web and Graphic Design Solutions Tailored for Your Brand"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
