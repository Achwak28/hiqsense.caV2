import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import pcImg from '../../../images/why-choose-us/pcImg.svg'
import WhyChooseBoxes from "../../../ui/WhyChooseBoxes";
import creativeImg from '../../../images/why-choose-us/creativeImg.png';
import webStrategyimg from '../../../images/why-choose-us/webStrategy.png';
import dedicatedImg from '../../../images/why-choose-us/dedicated.png';
import quickImg from '../../../images/why-choose-us/quick.png';
import maintenanceImg from '../../../images/why-choose-us/maintenance.png';
import whyLargeEllipse from '../../../images/why-choose-us/whyLargeEllipse.svg';
function WhyChooseUs() {
    return (
        <>
            <section className="px-4 lg:px-40 py-10 lg:py-20 overflow-hidden">
                <PrimaryHeading headingText="Why Choose Us?" />
                <PrimarySubHeading subText="Elevate your online presence with us! Expert in web design, graphic/logo design, email hosting, and SEO optimization. Tailored solutions, creative excellence, and reliable support – choose us for an innovative digital experience." />


                <div className="grid grid-cols-1 whyChooseAfter pt-10 lg:grid-cols-2">
                    <div className="whyLargeEllipseBlock">
                        <img src={whyLargeEllipse} alt="whyLargeEllipse" className="lg:w-[100%]"/>
                    </div>
                    <div><img src={pcImg} alt="PC Image" className='mb-10 md:mx-auto' /></div>
                    <div className="whyChooseParent">
                        <WhyChooseBoxes whyImg={creativeImg} altText="Creative Design" />
                        <WhyChooseBoxes whyImg={webStrategyimg} altText="Web Strategy" />
                        <WhyChooseBoxes whyImg={dedicatedImg} altText="Dedicated Support" />
                        <WhyChooseBoxes whyImg={quickImg} altText="Quick Turnover" />
                        <WhyChooseBoxes whyImg={maintenanceImg} altText="Maintenance" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs;