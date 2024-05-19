import React from "react";
import "./SwiperSlideCard.css";
import { dubai, India } from "../../assets";
import Button from "../Button/Button";

const SwiperSlideCard = ({img, title ,subtitle , swiper, }) => {
  console.log(title);
  return (
    <div className="swiper-card">
      <div className="swiper-img">
        <img src={img} alt="" />
      </div>
      <div className="swiper-content">
        <h2>{title}</h2>
        <h1>{subtitle}</h1>
        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
        <div className="swiper-wrapper">
            <div className="swiper-row">
                <div className="swiper-col">
                <i className={swiper?.icon1}></i>
                  <h4>
                    <span >{swiper?.population1} :</span> <br />
                    {swiper?.number1}
                  </h4>
                </div>
                <div className="swiper-col">
                <i className={swiper?.icon2}></i>
                  <h4>
                    <span >{swiper?.population2}</span> <br />
                    {swiper?.number2}
                  </h4>
                </div>
                <div className="swiper-col">
                <i className={swiper?.icon3}></i>
                  <h4>
                    <span > {swiper?.population3}</span> <br />
                    {swiper?.number3} 
                  </h4>
                </div>
                <Button  width={'255px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideCard;
