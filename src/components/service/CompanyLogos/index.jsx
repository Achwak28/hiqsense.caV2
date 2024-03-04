import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Manipulation, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/manipulation';

import './styles.css';

// import required modules
// eslint-disable-next-line no-undef

//const imagePath = `${process.env.REACT_APP_PUBLIC_URL}/assets/images/service_img/content`
const imagePath = "/assets/images/service_img/content"

//const imagePath = `${process.env.REACT_APP_PUBLIC_URL}/assets/images/service_img/content`


const CompanyLogos = () => {

  return (
    <>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Manipulation, Navigation]}
        className="mySwiper"
        loop={true}
        breakpoints={{
          // When window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 32
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 32
          },
          // When window width is >= 1440px
          1440: {
            slidesPerView: 6,
            spaceBetween: 32
          }
        }}
      >
        <SwiperSlide><img src={`${imagePath}/image1.png`} /></SwiperSlide>
        <SwiperSlide><img src={`${imagePath}/image2.png`} /></SwiperSlide>
        <SwiperSlide><img src={`${imagePath}/image3.png`} /></SwiperSlide>
        <SwiperSlide><img src={`${imagePath}/image4.png`} /></SwiperSlide>
        <SwiperSlide><img src={`${imagePath}/image5.png`} /></SwiperSlide>
        <SwiperSlide><img src={`${imagePath}/image6.png`} /></SwiperSlide>
      </Swiper>

    </>
  );
}

export default CompanyLogos
