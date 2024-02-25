function PrimaryHeading({headingText, custColor}) {
    return (
        <>
           <h2 className="font-garamond-bold text-txt-primary text-[32px] text-center mb-2.5" style={{color: custColor}}>{headingText}</h2>
        </>
    )
}

export default PrimaryHeading;