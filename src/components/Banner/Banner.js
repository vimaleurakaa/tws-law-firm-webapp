import { Carousel } from "antd";
import React from "react";
import Banner_1 from "../../assets/Banner_1.jpg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="carousel-inner mb-5">
      <Carousel autoplay>
        <div className="carousel-item active">
          <img src={Banner_1} className="d-block w-100 banner-img" alt=""></img>
        </div>
        <div className="carousel-item">
          <img src={Banner_1} className="d-block w-100 banner-img" alt=""></img>
        </div>
        <div className="carousel-item">
          <img src={Banner_1} className="d-block w-100 banner-img" alt=""></img>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
