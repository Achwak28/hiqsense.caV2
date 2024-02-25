import HeroContent from "./HeroContent";

function HeroSection() {
    return (
        <>
            <div className="bg-[#4334B6] h-[620px] w-100 flex flex-col justify-center items-center content-center flex-wrap px-2">
                <HeroContent headingText="Crafting Digital Experiences That Inspire and Engage" subHeading="Innovative Web and Graphic Design Solutions Tailored for Your Brand" />
            </div>
        </>
    );
}

export default HeroSection;