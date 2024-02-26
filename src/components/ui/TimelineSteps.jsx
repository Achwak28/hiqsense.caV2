import rightBorderImg from '../images/Timeline/rightBorder.svg'


function TimelineSteps({ stepsContent }) {
    let { Steps, Heading, SubHeading, lowerCol } = stepsContent; // Destructuring stepsContent Object

    return (

        <>
            <div className={`w-[100%] h-[224px] bg-transparent relative rightLine ${lowerCol}`}>
                <img src={rightBorderImg} alt="rightBorderImg" className='absolute top-0 left-0' />
                <h4 className="text-center text-[#FFFFFF] font-hebrew-bold text-[18px] mb-3">{Steps}</h4>
                <div >
                    <h3 className="text-left text-[#FFFFFF] font-hebrew-bold text-[24px] mb-2">{Heading}</h3>
                    <p className="text-left text-[#FFFFFF] font-hebrew-regular text-[14px]">{SubHeading}</p>
                </div>
            </div>
        </>

    )
}

import leftBorderImg from '../images/Timeline/leftBorder.svg'


function TimelineStepsLeft({ stepsContent }) {
    let { Steps, Heading, SubHeading, lowerCol } = stepsContent; // Destructuring stepsContent Object

    return (

        <>
            <div className={`w-[100%] h-[224px] bg-transparent relative rightLine ${lowerCol}`}>
                <img src={leftBorderImg} alt="rightBorderImg" className='absolute top-0 left-0' />
                <h4 className="text-center text-[#FFFFFF] font-hebrew-bold text-[18px] mb-3">{Steps}</h4>
                <div >
                    <h3 className="text-left text-[#FFFFFF] font-hebrew-bold text-[24px] mb-2">{Heading}</h3>
                    <p className="text-left text-[#FFFFFF] font-hebrew-regular text-[14px]">{SubHeading}</p>
                </div>
            </div>
        </>

    )
}



export { TimelineSteps, TimelineStepsLeft };