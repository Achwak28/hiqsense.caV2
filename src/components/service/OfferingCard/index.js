// import { useEffect, useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line no-undef
const imagePath = `${process.env.REACT_APP_PUBLIC_URL}/assets/images/service_img`

const OfferingCard = ({ index, imageUrl, title, isReversed, subTitle, options, images }) => {
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const textElement = document.getElementById('slideRightText');
  //     const textPosition = textElement.getBoundingClientRect().top;
  //     const screenPosition = window.innerHeight;

  //     if (textPosition < screenPosition) {
  //       setIsVisible(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className={clsx('flex flex-col justify-between items-center pt-4 pb-4 sm:pt-6 sm:pb-4 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10 xl:pt-16 xl:pb-16 w-full xl:px-60 lg:px-40 sm:px-20 px-10',
      { 'md:flex-row-reverse': isReversed },
      { 'md:flex-row': !isReversed }, 
    )}>
      <div
        className={clsx("w-full flex", {
          'w-screen -mr-0 md:-mr-20 lg:-mr-40 xl:-mr-60': index === 4,
          "flex-row-reverse": isReversed
        })}
      >
        <img src={`${imagePath}/${imageUrl}`} alt="offering card"  />
      </div>
      <div className='flex flex-col items-start w-full md:w-3/5 md:px-8'>
        <div className='w-full flex flex-col gap-y-8'>
          <div className='flex flex-col sm:gap-y-3 sm:w-full md:gap-y-4 md:w-full'>
            <h4 className='text-xl text-center md:text-left font-bold text-transparent bg-clip-text bg-gradient-to-b from-custom-purple to-custom-pink font-opensanshebrew md:text-[20px] lg:text-cutom-lg whitespace-nowrap'>{title}</h4> 
            <p className='text-center md:text-left lg:text-lg md:text-md sm:text-sm font-opensanshebrew'>{subTitle}</p>
            <div className='w-full flex text-custom-regular-small flex-col items-start font-opensanshebrew gap-y-2 lg:text-lg md:text-md sm:text-sm'>
              {
                options.map((option, index) => 
                  <div key={index+option.title} className='flex gap-2'>
                    <div>{`\u2022`}</div>
                    <p className=""><span className="inline-flex font-bold pr-1 whitespace-nowrap">{option.title}:</span>{option.content}</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className='flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
            {
              images.map((image, i) =>
                <div key={i + image.image} className={clsx("w-full flex flex-col items-center")}>
                  <div><img src={`${imagePath}/${image.image}`} alt="offering sub card" className="w-24 h-24 xl:w-full" /></div>
                  <div className='h-full flex items-end'>
                    <p className='font-semibold text-sm text-center w-28'>{image.caption}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferingCard;
