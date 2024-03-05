import directimg from "../images/featured-work/direct.svg";

function Projects({
  img1,
  altText,
  projectHeading,
  projectSubHeading,
  linkText,
}) {
  return (
    <>
      <div>
        <img src={img1} alt={altText} className="md:m-auto lg:w-[100%]" data-aos="fade-up" data-aos-duration="1000"/>
        <div className="lg:flex lg:text-left lg:justify-between lg:mt-[1rem] lg:mx-[0] lg:mb-[5rem]">
          <div>
            <h3 className="font-hebrew-bold text-[24px] text-[#FFFFFF] my-3" data-aos="fade-up" data-aos-duration="1500">
              {projectHeading}
            </h3>
            <p className="font-hebrew-regular text-[14px] text-[#FFFFFF]" data-aos="fade-up" data-aos-duration="1500">
              {projectSubHeading}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <a href="#">
              <span className="flex justify-center items-center font-hebrew-regular text-[18px] text-[#FFFFFF] my-7">
                {linkText}{" "}
                <img
                  src={directimg}
                  alt="Direct Arrow"
                  className="w-[7px] h-[12px] ml-2.5"
                />{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
