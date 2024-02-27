function PrimaryHeading({headingText, custColor, tarnsformBusinessLg, timelineHeading}) {
    return (
        <>
           <h2 className={`font-garamond-bold text-txt-primary text-[32px] lg:text-[56px]  text-center mb-2.5 ${tarnsformBusinessLg} ${timelineHeading}`} style={{color: custColor}} data-aos="fade-up" data-aos-duration="1000" >{headingText}</h2>
        </>
    )
}

export default PrimaryHeading;