import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './Offers.css';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="container">
        <h1 className="offers-title">Eng Yaxshi Haftalik Takliflarimiz</h1>
        <p className="offers-text">Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. O'zingizni sarguzashtlar dunyosida his qiling.</p>
      </div>
      <Swiper
        slidesPerView={3} // Corrected to avoid duplicate prop
        spaceBetween={30}
        autoplay={{
          delay: 2000, // Set the delay to 2 seconds (2000ms)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> 
            
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Offers;
