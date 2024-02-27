import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import gogleImg from '../../../images/awards/google.png';
import microsoftImg from '../../../images/awards/microsoft.png';
import amazonImg from '../../../images/awards/amazon.png';
import ciscoImg from '../../../images/awards/cisco.png';
import metaImg from '../../../images/awards/meta.png';
import ibmImg from '../../../images/awards/ibm.png';
// import prevIcon from '../../../images/awards/prev.svg'
// import nextIcon from '../../../images/awards/next.svg'
function Awards() {
    return (
        <>
            <section className="px-4 lg:px-40 pt-10 lg:pt-20">
                <PrimaryHeading headingText="Recognition and Awards" />
                <PrimarySubHeading subText="Recognized by top industry leaders for exceptional work" />

                <div className="grid grid-cols-1 lg:grid-cols-2 awardsBottomLine">
                    <div><h3 className="text-center font-hebrew-bold text-txt-primary text-[32px] mb-5 lg:text-left lg:w-[60%] lg:text-[40px]">We’ve More Then 254+
                        Global Partners</h3></div>
                    <div><p className="text-center font-hebrew-regular text-txt-primary text-[14px] w-[65%] mx-auto lg:text-left lg:w-[60%] lg:text-[18px]">We’ve partnered and recognized by 20+ companies. We aim to continue serving businesses and offering them the best possible solution.</p></div>
                </div>
                <div className="mt-10 lg:mt-20">
                    <Splide aria-label="Partners Images" className="awardsSplide" options={
                        {
                            heightRatio: "auto",         // Set the height ratio of the slider
                            pagination: false,       // Enable or disable pagination
                            arrows: true,
                            perPage: 6,
                            breakpoints: {
                                1024: {
                                    perPage: 3,
                                    pagination: true,       // Enable or disable pagination
                                    arrows: true,

                                },
                                767: {
                                    perPage: 2,
                                    pagination: false,       // Enable or disable pagination
                                    arrows: true,
                                    padding: "1rem",
                                    
                                },
                                640: {
                                    perPage: 2,
                                    pagination: false,       // Enable or disable pagination
                                    arrows: true,
                                    padding: "1rem",
                                    
                                },
                            },
                        }
                    }>

                        <SplideSlide>
                            <img src={gogleImg} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={microsoftImg} alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={amazonImg} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={ciscoImg} alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={metaImg} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={ibmImg} alt="Image 2" />
                        </SplideSlide>
                    </Splide>
                </div>

            </section>
        </>
    )
}

export default Awards;