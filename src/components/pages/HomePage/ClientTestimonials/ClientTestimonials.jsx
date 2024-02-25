import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TestimonialsCard from "../../../ui/TestimonialsCard";
import bgImg from '../../../images/client-testimonials/bg.jpg'
import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import transformBusinessImg from '../../../images/client-testimonials/transformBusiness.svg';
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";

function ClientTestimonials() {
    return (
        <>
            <section className="py-10 h-auto" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <PrimaryHeading headingText="Client Testimonials" />
                <PrimarySubHeading subText="Read what our clients have to say about us" />

                <Splide aria-label="My Favorite Images" options={
                    {
                        heightRatio: "auto",         // Set the height ratio of the slider
                        pagination: true,       // Enable or disable pagination
                        arrows: true,

                        breakpoints: {
                            1024: {
                                perPage: 3,
                                pagination: true,       // Enable or disable pagination
                                arrows: true,

                            },
                            767: {
                                perPage: 1,
                                pagination: true,       // Enable or disable pagination
                                arrows: false,
                                gap: '2rem',
                                padding: '1rem'
                            },
                            640: {
                                perPage: 1,
                                pagination: true,       // Enable or disable pagination
                                arrows: false,
                                gap: '2rem',
                                padding: '1rem'
                            },
                        },
                    }
                }>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                    <SplideSlide>
                        <TestimonialsCard />
                    </SplideSlide>
                </Splide>

                <div className="px-2 py-10">
                    <div className="grid grid-cols-1">
                        <div>
                            <PrimaryHeading headingText="Crafting Digital Experiences That Inspire and Engage" />

                        </div>
                        <div>
                            <PrimarySubHeading subText="We are a team of experts dedicated to creating digital experiences that inspire and engage. With our innovative web and graphic design solutions, we tailor our services to perfectly match your brand." />
                            <PrimaryButtonSolid buttonlabel="About Us"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div>
                            <img src={transformBusinessImg} alt="Transform Business" />

                        </div>
                        <div>
                        <PrimaryHeading headingText="Transform Your Business Today" />
                            <PrimarySubHeading subText="Schedule a free consultation or request a quote to get started."  />
                            <PrimaryButtonSolid buttonlabel="Free Consultation" testimonialsMarg="15px"/>
                            <PrimaryButtonOutlined buttonlabel="Request a Quote"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientTestimonials;