function ServiceCards({ img1, altText, cardText, imgLg }) {
  const isLargeScreen = window.innerWidth >= 1024;
  return (
    <>
      <a href="#">
        <div className="w-full h-[325px] lg:h-[494px] mb-5 lg:mb-0 relative flex flex-col flex-wrap justify-end ">
          <img
            src={isLargeScreen ? imgLg : img1}
            alt={altText}
            className="absolute top-0 left-0 z-[-1] object-cover lg:w-[100%] h-full lg:h-[495px] rounded-[20px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <h3 className="text-[#FFFFFF] font-hebrew-bold text-center custom-drop-shadow z-0 text-[32px] leading-[75px]">
            {cardText}
          </h3>
        </div>
      </a>
    </>
  );
}

export default ServiceCards;
