import OfferingCard from "../OfferingCard";
import dataObj from '../../../utils/constant.json';

const OfferingSection = () => {
  const { data } = dataObj
  return (
    <div className="w-full h-full flex flex-col items-center">

      <h3 style={{fontSize:"3rem"}} className=" text-center font-bold text-lg pt-2 pb-2 sm:text-xl sm:pt-4 sm:pb-4 md:text-3xl md:pt-6 md:pb-6 lg:text-4xl lg:pt-8 lg:pb-8 xl:text-custom-large xl:pt-16 xl:pb-16 text-custom-color font-ebgaramond font-body ">What We Offer</h3>
{/*<h3 className="text-center font-bold text-lg pt-2 pb-2 sm:text-xl sm:pt-4 sm:pb-4 md:text-3xl md:pt-6 md:pb-6 lg:text-4xl lg:pt-8 lg:pb-8 xl:text-custom-large xl:pt-16 xl:pb-16 text-custom-color font-ebgaramond">What We Offer</h3>
 */}
      
      <div className="w-full">
      {
        data.map((item, idx) => {
          const { imageUrl, title, subTitle, options, images } = item
          return (
            <OfferingCard key={idx} index={idx + 1} imageUrl={imageUrl} title={title} subTitle={subTitle} options={options} images={ images } isReversed={((idx + 1) % 2) === 0} />
            )
          })
        }
      </div>
      <button className="grow justify-center px-6 py-2.5 font-bold tracking-normal whitespace-nowrap bg-red-500 rounded max-md:px-5 text-white w-[150px] mb-[100px] h-[48px]">
        Get started
      </button>
    </div>
  )
}

export default OfferingSection
