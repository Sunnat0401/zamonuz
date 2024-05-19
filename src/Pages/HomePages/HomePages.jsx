import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Navbar from '../../Component/Navbar/Navbar';
import './HomePages.css';
import { India, Logo } from '../../assets';
import Button from '../../Component/Button/Button';
import SwiperSlideCard from '../../Component/SwiperSlideCard/SwiperSlideCard';
import { slider } from '../../Util/const';

const HomePages = () => {
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 250000000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {
            slider.map((item) =>(
        <SwiperSlide>

              <SwiperSlideCard key={item?.id} {...item}/>
              </SwiperSlide>
            ))
          }
      
       
      </Swiper>
    </>
  );
};

export default HomePages;
