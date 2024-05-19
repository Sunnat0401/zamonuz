import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Offers.css';
import { India } from "../../assets";
import Button from "../../Component/Button/Button";

const Offers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='offers'>
      <div className="container">
        <h1 className="offers-title">Eng Yaxshi Haftalik Takliflarimiz</h1>
        <p className="offers-text">Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. O'zingizni sarguzashtlar dunyosida his qiling.</p>
      </div>
      <Slider {...settings}>
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        <div className="offer-slide">
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        </div>
        <div className="offer-slide">
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        </div>
        <div className="offer-slide">
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        </div>
        <div className="offer-slide">
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        </div>
        <div className="offer-slide">
        <div className="offer-slide">
          <div className="slider-card">
            <img src={India} alt="india"  className="slider-img"/>
            <div className="slider-info">
                <h3>India</h3>
                <p className="slider-text"><i class="fa-solid fa-users"></i> Ro'yxatdan o'tganlar</p>
                <div className="slider-border"></div>
                <h4>Tur o'z ichiga oladi</h4>
                <p className="slider-text"><i class="fa-solid fa-car"></i> 5 kunlik sayohat / Mehmonxona</p>
                <p className="slider-text"><i class="fa-solid fa-plane"></i>Aviabilet</p>
                <p className="slider-text">  <i class="fa-regular fa-address-book"></i>Manzillar</p>
                 <Button  width={'150px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
            </div>
          </div>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default Offers;
