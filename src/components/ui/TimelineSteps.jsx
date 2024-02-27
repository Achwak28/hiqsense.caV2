import rightBorderImg from '../images/Timeline/rightBorder.svg';
import leftLgImg from '../images/Timeline/leftBorder.png';
import rightLgImg from '../images/Timeline/rightBorder.png';

function TimelineSteps({ stepsContent }) {
    let { Steps, Heading, SubHeading, lowerCol } = stepsContent;
    const isLargeScreen = window.innerWidth >= 1024;
    const rightImg = isLargeScreen ? rightLgImg : rightBorderImg;

    return (
        <>
            <div className={`w-[100%] h-[224px] lg:h-[330px] bg-transparent relative md:z-10 rightLine ${lowerCol}`} data-aos="fade-right" data-aos-duration="1500">
                <img src={rightImg} alt="rightImage" className='absolute top-0 left-0 lg:w-full' />
                <h4 className="text-center text-[#FFFFFF] font-hebrew-bold text-[18px] mb-3 lg:text-[20px]">{Steps}</h4>
                <div>
                    <h3 className="text-left text-[#FFFFFF] font-hebrew-bold text-[24px] mb-2 lg:text-[32px]">{Heading}</h3>
                    <p className="text-left text-[#FFFFFF] font-hebrew-regular text-[14px] lg:text-[18px]">{SubHeading}</p>
                </div>
            </div>
        </>
    );
}

import leftBorderImg from '../images/Timeline/leftBorder.svg';

function TimelineStepsLeft({ stepsContent }) {
    let { Steps, Heading, SubHeading, lowerCol } = stepsContent;
    const isLargeScreen = window.innerWidth >= 1024;
    const leftImg = isLargeScreen ? leftLgImg : leftBorderImg;

    return (
        <>
            <div className={`w-[100%] h-[224px] lg:h-[330px] bg-transparent relative md:z-10 rightLine ${lowerCol}`} data-aos="fade-left" data-aos-duration="1500">
                <img src={leftImg} alt="leftImage" className='absolute top-0 left-0 lg:w-full' />
                <h4 className="text-center text-[#FFFFFF] font-hebrew-bold text-[18px] mb-3 lg:text-[20px]">{Steps}</h4>
                <div className='lg:pl-5'>
                    <h3 className="text-left text-[#FFFFFF] font-hebrew-bold text-[24px] mb-2 lg:text-[32px]">{Heading}</h3>
                    <p className="text-left text-[#FFFFFF] font-hebrew-regular text-[14px] lg:text-[18px]">{SubHeading}</p>
                </div>
            </div>
        </>
    );
}

export { TimelineSteps, TimelineStepsLeft };