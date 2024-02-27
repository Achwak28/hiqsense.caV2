import HeroContent from "./HeroContent";
import largeElipse from "../../../images/hero/largeElipse.svg";
import mediumElipse from "../../../images/hero/mediumElipse.svg";
import smallElispe from "../../../images/hero/smallElipse.svg";
import characterImg from "../../../images/hero/character.svg";
import rocketImg from "../../../images/hero/rocket.svg";
import handImg from "../../../images/hero/handPencil.svg";
import noteImg from "../../../images/hero/notePad.svg";
import candelsticImg from "../../../images/hero/candlesticks.png";
import worldImg from "../../../images/hero/world.svg";
function HeroSection() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-[#4334B6] h-[620px] lg:h-screen w-100 flex flex-col justify-center items-center content-center flex-wrap px-2 relative z-[2]">
          <div className="largeElipseBlock">
            <img src={largeElipse} alt="largeElipse" className="dropShadow" />
            <div className="mediumElipseBlock animate__animated animate__pulse">
              <img
                src={mediumElipse}
                alt="mediumElipse"
                className="dropShadow"
              />
              <div className="smallElipseBlock animate__animated animate__pulse">
                <img
                  src={smallElispe}
                  alt="smallElispe"
                  className="dropShadow"
                />
                <div className="characterBlock animate__animated animate__pulse">
                  <img src={characterImg} alt="characterImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="rocketBlock">
            <img src={rocketImg} alt="rocketImg" />
          </div>
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
