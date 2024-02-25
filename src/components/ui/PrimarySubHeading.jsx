function PrimarySubHeading({subText, custColor}) {
    return (
        <>
            <p className="font-hebrew-regular text-txt-primary text-sm text-center leading-6 tracking-[0.25px] mb-10" style={{color: custColor}}>{subText}</p>
        </>
    )
}

export default PrimarySubHeading;