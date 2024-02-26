import solidStarImg from "../images/client-testimonials/solidStar.svg";
import outlinedStarImg from "../images/client-testimonials/outlinedStar.svg";
import { useEffect, useState } from "react";

function TestimonialsCard({
  clientname,
  clientDesignation,
  clientRating,
  headingQuote,
  paraQuote,
  clientImage,
}) {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const module = await clientImage;
        setImageSrc(module.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [clientImage]);
  useEffect(() => {
    clientImage.then((module) => setImageSrc(module.default));
  }, [clientImage]);
  // Create an array of star elements based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <img
        src={index < clientRating ? solidStarImg : outlinedStarImg}
        alt={index < clientRating ? "solidStarImg" : "outlinedStarImg"}
      />
    </li>
  ));
  return (
    <>
      <div className="w-[100%] h-[353px] bg-[#FFFFFF] rounded-xl flex flex-col flex-wrap justify-evenly p-5 clientBox">
        <div className="flex justify-between items-center content-center flex-wrap">
          <div className="flex">
            <div>
              {imageSrc && <img src={imageSrc} alt={`${clientname} Image`} />}
            </div>
            <div className="ml-2.5">
              <h4 className="text-[#000000] text-[24px] text-left font-lato-bold">
                {clientname}
              </h4>
              <p className="text-[#000000] text-[14px] text-left font-lato-regular">
                {clientDesignation}
              </p>
            </div>
          </div>
          <div>
            <ul className="flex">{stars}</ul>
          </div>
        </div>

        <div>
          <blockquote>
            <h3 className="text-[#000000] text-[24px] text-center font-lato-bold">
              {headingQuote}
            </h3>
            <p className="text-[#000000] text-[14px] text-center font-lato-regular">
              {paraQuote}
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default TestimonialsCard;
