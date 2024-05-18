import React from 'react';
// import './App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';

const HomePages = () => {
  return (
    <Swiper
      spaceBetween={5}
      pagination={{ clickable: true }}
      navigation
      modules={[Scrollbar, Navigation, Pagination]}
      className="swiper-container"
    >
      <SwiperSlide>
        <div className="banner-inner-wrapper header-text">
          <div className="main-caption">
            <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
            <h1>Sharm El-Sheikh</h1>
            <div className="border-button">
              <a href="#contact">Borishni xohlaysizmi?</a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="more-info">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-user"></i>
                      <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-globe"></i>
                      <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-home"></i>
                      <h4><span>O'rtacha narx:</span><br />$165.450</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <div className="main-button">
                        <a href="#contact">Ko'proq bilish...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-inner-wrapper header-text">
          <div className="main-caption">
            <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
            <h1>Sharm El-Sheikh</h1>
            <div className="border-button">
              <a href="#contact">Borishni xohlaysizmi?</a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="more-info">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-user"></i>
                      <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-globe"></i>
                      <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-home"></i>
                      <h4><span>O'rtacha narx:</span><br />$165.450</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <div className="main-button">
                        <a href="#contact">Ko'proq bilish...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-inner-wrapper header-text">
          <div className="main-caption">
            <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
            <h1>Sharm El-Sheikh</h1>
            <div className="border-button">
              <a href="#contact">Borishni xohlaysizmi?</a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="more-info">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-user"></i>
                      <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-globe"></i>
                      <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <i className="fa fa-home"></i>
                      <h4><span>O'rtacha narx:</span><br />$165.450</h4>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                      <div className="main-button">
                        <a href="#contact">Ko'proq bilish...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Add additional SwiperSlide components here for more slides */}
    </Swiper>
  );
};

export default HomePages;
