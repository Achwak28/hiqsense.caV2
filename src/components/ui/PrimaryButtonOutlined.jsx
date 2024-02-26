function PrimaryButtonOutlined({ buttonlabel, lgInline, lgWidth }) {
    return (
        <>
            <a href="#"><div className={`bg-transparent border border-btn-primary text-[#F6393D] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm mx-2 ${lgInline}${lgWidth}`}>{buttonlabel}</div></a>
        </>
    )
}

export default PrimaryButtonOutlined;