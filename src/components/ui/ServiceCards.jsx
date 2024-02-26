const ServiveCardsStyle = {
    background: "#0a06287a",
    borderRadius: "20px"
}

function ServiceCards({ img1, altText, cardText }) {
    return (
        <><a href="#"><div className="w-full h-[325px] mb-5 relative flex flex-col flex-wrap justify-end " style={ServiveCardsStyle}><img src={img1} alt={altText} className="absolute top-0 left-0 z-[-1] object-cover h-full rounded-[20px]" /><h3 className="text-[#FFFFFF] font-hebrew-bold text-center custom-drop-shadow z-0 text-[32px] leading-[75px]">{cardText}</h3></div></a></>
    )
}

export default ServiceCards;