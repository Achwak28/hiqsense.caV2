import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import Projects from "../../../ui/Projects";
import projectOneImg from '../../../images/featured-work/project-one.svg'
import projectTwoImg from '../../../images/featured-work/project-two.svg'
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";
function FeaturedWork() {
    return (
        <>
            <section className="bg-txt-primary h-auto px-2 py-10">

                <PrimaryHeading custColor="#fff" headingText="Featured Work" />
                <PrimarySubHeading custColor="#fff" subText="Explore our diverse range of creative projects." />

                <div>
                    <Projects img1={projectOneImg} altText="Project One" projectHeading="Project ABC" projectSubHeading="Discover our latest creative work and see how we can inspire you." linkText="View Project" />
                    <Projects img1={projectTwoImg} altText="Project Two" projectHeading="Project ABC" projectSubHeading="Discover our latest creative work and see how we can inspire you." linkText="View Project" />
                    <PrimaryButtonOutlined buttonlabel = "View All"/>
                </div>
            </section>
        </>
    )
}

export default FeaturedWork;