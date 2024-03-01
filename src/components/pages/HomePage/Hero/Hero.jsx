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
    let mm = gsap.matchMedia();
    const rotationAnimation = () => {
      // Get the total length of the path

      
      gsap.to("#rocketBlock", {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 0.1,
          end: 1,
        },
        transformOrigin: "50% 50% ",
        duration: 100,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });
      gsap.to("#handBlock", {
        motionPath: {
          path: "#path600",
          align: "#path600",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1,
          end: 0,
        },
        transformOrigin: "50% 50% ",
        duration: 180,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });
      gsap.to("#noteBlock", {
        motionPath: {
          path: "#pathNotepad",
          align: "#pathNotepad",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: -0.4,
          end: 0.5,
        },
        transformOrigin: "50% 50% ",
        duration: 180,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });
      gsap.to("#candelstickBlock", {
        motionPath: {
          path: "#pathcandelstickBlock",
          align: "#pathcandelstickBlock",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 0.8,
          end: -0.8,
        },
        transformOrigin: "50% 50% ",
        duration: 300,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });

      gsap.to("#worldBlock", {
        motionPath: {
          path: "#pathworldBlock",
          align: "#pathworldBlock",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: -0.9,
          end: 0.9,
        },
        transformOrigin: "50% 50% ",
        duration: 400,
        rotation: 0, // Rotate 360 degrees during the animation

        repeat: -1,
        repeatDelay: 0,
      });
      
      mm.add("(min-width: 767px)", () => {
        gsap.to("#rocketBlock", {
          motionPath: {
            path: "#pathMd",
            align: "#pathMd",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.1,
            end: 1,
          },
          transformOrigin: "50% 50% ",
          duration: 100,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#handBlock", {
          motionPath: {
            path: "#path600Md",
            align: "#path600Md",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 1,
            end: 0,
          },
          transformOrigin: "50% 50% ",
          duration: 180,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#noteBlock", {
          motionPath: {
            path: "#pathNotepadMd",
            align: "#pathNotepadMd",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: -0.4,
            end: 0.5,
          },
          transformOrigin: "50% 50% ",
          duration: 180,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#candelstickBlock", {
          motionPath: {
            path: "#pathcandelstickBlockMd",
            align: "#pathcandelstickBlockMd",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.8,
            end: -0.8,
          },
          transformOrigin: "50% 50% ",
          duration: 300,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
  
        gsap.to("#worldBlock", {
          motionPath: {
            path: "#pathworldBlockMd",
            align: "#pathworldBlockMd",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: -0.9,
            end: 0.9,
          },
          transformOrigin: "50% 50% ",
          duration: 400,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
      })
      mm.add("(min-width: 1024px)", () => {
        gsap.to("#rocketBlock", {
          motionPath: {
            path: "#pathLg",
            align: "#pathLg",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.1,
            end: 1,
          },
          transformOrigin: "50% 50% ",
          duration: 100,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#handBlock", {
          motionPath: {
            path: "#path600Lg",
            align: "#path600Lg",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 1,
            end: 0,
          },
          transformOrigin: "50% 50% ",
          duration: 180,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#noteBlock", {
          motionPath: {
            path: "#pathNotepadLg",
            align: "#pathNotepadLg",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: -0.4,
            end: 0.5,
          },
          transformOrigin: "50% 50% ",
          duration: 180,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
        gsap.to("#candelstickBlock", {
          motionPath: {
            path: "#pathcandelstickBlockLg",
            align: "#pathcandelstickBlockLg",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.8,
            end: -0.8,
          },
          transformOrigin: "50% 50% ",
          duration: 300,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
  
        gsap.to("#worldBlock", {
          motionPath: {
            path: "#pathworldBlockLg",
            align: "#pathworldBlockLg",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: -0.9,
            end: 0.9,
          },
          transformOrigin: "50% 50% ",
          duration: 400,
          rotation: 0, // Rotate 360 degrees during the animation
  
          repeat: -1,
          repeatDelay: 0,
        });
      })
    };

    rotationAnimation();
  }, []); // Run the animation only once when the component mounts
  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-[#4334B6] h-[620px] lg:h-screen w-100 flex flex-col justify-center items-center content-center flex-wrap px-2 relative z-[2] circleContain">
          {/* Starts Here */}
          <svg
            viewBox="0 0 1700 700"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath hidden lg:block"
          >
            <path
              id="pathLg"
              d="M850 0a850 350 0 1 0 0 700a850 350 0 1 0 0-700z"
              fill="none"
              stroke="green"
            />
          </svg>
          <svg
            viewBox="0 0 700 1700"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath block md:hidden"
          >
            <path
              id="path"
              d="M350 0a350 850 0 1 0 0 1700a350 850 0 1 0 0-1700z"
              fill="none"
              stroke="green"
            />
          </svg>
          <svg
            viewBox="0 0 1000 1700"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath hidden md:block lg:hidden"
          >
            <path
              id="pathMd"
              d="M500 0a500 850 0 1 0 0 1700a500 850 0 1 0 0-1700z"
              fill="none"
              stroke="green"
            />
          </svg>
          {/* Ends Here */}
          {/* Starts Here */}
          <svg
            viewBox="0 0 1800 800"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath600 hidden lg:block"
          >
            <path
              id="path600Lg"
              d="M900 0a900 400 0 1 0 0 800a900 400 0 1 0 0-800z"
              fill="none"
              stroke="brown"
            />
          </svg>
          <svg
            viewBox="0 0 800 1800"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath600 block md:hidden"
          >
            <path
              id="path600"
              d="M400 0a400 900 0 1 0 0 1800a400 900 0 1 0 0-1800z"
              fill="none"
              stroke="brown"
            />
          </svg>
          <svg
            viewBox="0 0 1300 1800"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePath600 hidden md:block lg:hidden"
          >
            <path
              id="path600Md"
              d="M650 0a650 900 0 1 0 0 1800a650 900 0 1 0 0-1800z"
              fill="none"
              stroke="brown"
            />
          </svg>
          {/* Ends Here */}
          {/* Starts Here */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1300 800"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathNotepad hidden lg:block"
          >
            <path
              id="pathNotepadLg"
              d="M650 0a650 400 0 1 0 0 800a650 400 0 1 0 0-800z"
              fill="none"
              stroke="pink"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 1300"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathNotepad block md:hidden"
          >
            <path
              id="pathNotepad"
              d="M400 0a400 650 0 1 0 0 1300a400 650 0 1 0 0-1300z"
              fill="none"
              stroke="pink"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 1300"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathNotepad hidden md:block lg:hidden"
          >
            <path
              id="pathNotepadMd"
              d="M600 0a600 650 0 1 0 0 1300a600 650 0 1 0 0-1300z"
              fill="none"
              stroke="pink"
            />
          </svg>
          {/* Ends Here */}
          {/* Starts Here */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1500 700"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathcandelstickBlock hidden lg:block"
          >
            <path
              id="pathcandelstickBlockLg"
              d="M750 0a750 350 0 1 0 0 700a750 350 0 1 0 0-700z"
              fill="none"
              stroke="red"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 700 1500"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathcandelstickBlock block md:hidden"
          >
            <path
              id="pathcandelstickBlock"
              d="M350 0a350 750 0 1 0 0 1500a350 750 0 1 0 0-1500z"
              fill="none"
              stroke="red"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 1500"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathcandelstickBlock hidden md:block lg:hidden"
          >
            <path
              id="pathcandelstickBlockMd"
              d="M600 0a600 750 0 1 0 0 1500a600 750 0 1 0 0-1500z"
              fill="none"
              stroke="red"
            />
          </svg>
          {/* Ends Here */}
          {/* Starts Here */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1700 800"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathworldBlock hidden lg:block"
          >
            <path
              id="pathworldBlockLg"
              d="M850 0a850 400 0 1 0 0 800a850 400 0 1 0 0-800z"
              fill="none"
              stroke="black"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 1700"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathworldBlock block md:hidden"
          >
            <path
              id="pathworldBlock"
              d="M400 0a400 850 0 1 0 0 1700a400 850 0 1 0 0-1700z"
              fill="none"
              stroke="black"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 1700"
            xmlns="http://www.w3.org/2000/svg"
            className="circlePathworldBlock hidden md:block lg:hidden"
          >
            <path
              id="pathworldBlockMd"
              d="M600 0a600 850 0 1 0 0 1700a600 850 0 1 0 0-1700z"
              fill="none"
              stroke="black"
            />
          </svg>
          {/* Ends Here */}
          <div className="rocketBlock z-10" id="rocketBlock">
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

          <div className="handBlock z-10" id="handBlock">
            <img src={handImg} alt="handImg" />
          </div>
          <div className="noteBlock z-10" id="noteBlock">
            <img src={noteImg} alt="noteImg" />
          </div>
          <div className="candelstickBlock z-10" id="candelstickBlock">
            <img src={candelsticImg} alt="candelsticImg" />
          </div>
          <div className="worldBlock z-10" id="worldBlock">
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
