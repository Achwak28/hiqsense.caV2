import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import Projects from "../../../ui/Projects";
//import projectOneImg from '../../../images/featured-work/project-one.svg'
//import projectTwoImg from '../../../images/featured-work/project-two.svg'
import Turulav from '../../../images/featured-work/Turulav.png'
import BitMoney from '../../../images/featured-work/BitMoney.png'
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";
import featuredPulseImg from '../../../images/featured-work/pulse.svg'

function FeaturedWork() {
    return (
        <>
            <section className="bg-txt-primary h-auto px-4 lg:px-40 py-10 lg:py-20 relative z-[1] overflow-hidden">

            <div className="featuredLeftPulse"  data-aos="zoom-out"
            data-aos-duration="3000"
            data-aos-easing="linear">
                <img src={featuredPulseImg} alt="FeaturedPulseImg" />
            </div>
            <div className="featuredRightPulse"  data-aos="zoom-out"
            data-aos-duration="3000"
            data-aos-easing="linear">
            <img src={featuredPulseImg} alt="FeaturedPulseImg" />
            </div>

                <PrimaryHeading custColor="#fff" headingText="Featured Work" />
                <PrimarySubHeading custColor="#fff" subText="Explore our diverse range of creative projects." />

                <div>
                    <Projects img1={Turulav} altText="Project One"
                     projectHeading="Turulav Social Dating" 
                     projectSubHeading="Crafting Innovative Web Design Solutions for Canadians" 
                     linkText="View Project" href = "https://turulav.hiqsense.com"  />

                    <Projects img1={BitMoney} altText="Project Two" 
                    projectHeading="Bit Money ICO Landing Page" 
                    projectSubHeading="A Showcase of Leading Web Design Expertise in Canada"
                     linkText="View Project" href = "https://bitmoney.hiqsense.com" />
                   
            
                    <PrimaryButtonOutlined buttonlabel="View All" 
                    lgInline="lg:inline-block" 
                    lgWidth="lg:w-[200px]"
                    href ="/portfolio#root"/>
           
                </div>
            </section>
        </>
    )
}

export default FeaturedWork;