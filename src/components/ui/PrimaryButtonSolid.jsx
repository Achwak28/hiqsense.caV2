function PrimaryButtonSolid({ buttonlabel, custRadius, custFontSize, custMarg, testimonialsMarg}) {
    return (
        <>
            <a href="#"> <div className="bg-btn-primary border border-btn-primary text-[#F9F9F9] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm mx-2" style={{ borderRadius: custRadius, fontSize: custFontSize, marginLeft: custMarg, marginRight: custMarg, marginBottom: testimonialsMarg }}>{buttonlabel}</div></a>
        </>
    )
}

export default PrimaryButtonSolid;