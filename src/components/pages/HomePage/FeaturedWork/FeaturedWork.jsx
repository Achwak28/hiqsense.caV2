import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import Projects from "../../../ui/Projects";
import projectOneImg from '../../../images/featured-work/project-one.svg'
import projectTwoImg from '../../../images/featured-work/project-two.svg'
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
                    <Projects img1={projectOneImg} altText="Project One" projectHeading="Project ABC" projectSubHeading="Discover our latest creative work and see how we can inspire you." linkText="View Project" />
                    <Projects img1={projectTwoImg} altText="Project Two" projectHeading="Project ABC" projectSubHeading="Discover our latest creative work and see how we can inspire you." linkText="View Project" />
                    <PrimaryButtonOutlined buttonlabel="View All" lgInline="lg:inline-block" lgWidth="lg:w-[200px]"/>
                </div>
            </section>
        </>
    )
}

export default FeaturedWork;