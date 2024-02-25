import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import ServiceCards from "../../../ui/ServiceCards";
import webDesignImg from '../../../images/services/webDesign.jpg';
import seoImg from '../../../images/services/seo.jpg'
import logoDesignImg from '../../../images/services/logoDesign.jpg'
import emailHostingImg from '../../../images/services/emailHosting.jpg'
import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";

function Services() {
    return (

        <section className="px-2 py-10">
            <PrimaryHeading headingText="Our Services" />
            <PrimarySubHeading subText="Elevate your online presence with our diverse services. From captivating logo and graphic design to cutting-edge web design, we craft unique digital experiences. Boost visibility through our SEO optimization, and ensure seamless communication with our Email Hosting Configuration. Let us transform your digital presence into a powerful asset." />

            <div className="grid grid-cols-1">
                <div className="grid grid-cols-1">
                    <ServiceCards img1={webDesignImg} altText="Web design" cardText="Web Design" />
                    <ServiceCards img1={seoImg} altText="SEO Optimization" cardText="SEO Optimization" />
                    <ServiceCards img1={logoDesignImg} altText="Logo & Graphic Design" cardText="Logo & Graphic Design" />
                    <ServiceCards img1={emailHostingImg} altText="Email Hosting" cardText="Email Hosting" />
                </div>
                <div>
                    <PrimaryButtonSolid buttonlabel="Learn More" custRadius = "12px" custFontSize = "18px" custMarg = "0"/>
                </div>
            </div>
        </section>

    )
}

export default Services;