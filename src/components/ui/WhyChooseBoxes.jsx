import arrow from "../images/why-choose-us/arrow.svg";

function WhyChooseBoxes({ whyImg, altText }) {
  return (
    <>
      <div
        className="grid grid-cols-whyChooseCols lg:w-[445px] gap-x-2.5 items-center p-2.5 rounded-xl border-2 border-txt-primary mb-4 justify-items-center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <div>
          <img src={whyImg} alt={altText} />
        </div>
        <div>
          <h3 className="text-left font-hebrew-bold text-txt-primary text-lg mb-1">
            Creative Design
          </h3>
          <p className="font-hebrew-regular text-sm text-txt-primary text-left leading-6">
            We only deliver high-quality of products at an optimum speed.
          </p>
        </div>
        <div>
          <a href="#">
            <div className="bg-[#F6393D] w-[60px] h-[60px] rounded-full flex flex-col items-center justify-center">
              <img src={arrow} alt="Arrow" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default WhyChooseBoxes;
