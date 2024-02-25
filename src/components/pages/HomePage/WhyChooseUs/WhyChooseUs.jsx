import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import pcImg from '../../../images/why-choose-us/pcImg.svg'
import WhyChooseBoxes from "../../../ui/WhyChooseBoxes";
import creativeImg from '../../../images/why-choose-us/creativeImg.svg'
import webStrategyimg from '../../../images/why-choose-us/webStrategy.svg'
import dedicatedImg from '../../../images/why-choose-us/dedicated.svg'
import quickImg from '../../../images/why-choose-us/quick.svg'
import maintenanceImg from '../../../images/why-choose-us/maintenance.svg'
function WhyChooseUs() {
    return (
        <>
            <section className="px-2 py-10">
                <PrimaryHeading headingText="Why Choose Us?" />
                <PrimarySubHeading subText="Elevate your online presence with us! Expert in web design, graphic/logo design, email hosting, and SEO optimization. Tailored solutions, creative excellence, and reliable support – choose us for an innovative digital experience." />

                <div className="grid grid-cols-1">
                    <div><img src={pcImg} alt="PC Image" className='mb-6' /></div>
                    <div>
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