import React from "react";
import "./Header.css";
import Slider from "react-slick";


import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';


const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  pauseOnDotsHover:false,
  pauseOnHover: false,
  speed: 4600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

const Header = () => (
  <div className='header-container'>
    <Slider {...settings}>

    <CloudinaryContext cloudName="dg28o9yt1">
      <div className="header-block">
        <Image style={{width:'100%', borderRadius:'6px'}} publicId="spoiler/kyiv.jpg" >
          <Transformation fetchFormat='auto' />
        </Image>
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>ул. Драгоманова, 27а</p>
          <p>ул. Якубовского, 7б</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>
    </CloudinaryContext>

    <CloudinaryContext cloudName="dg28o9yt1">
      <div className="header-block">
        <Image style={{width:'100%', borderRadius:'6px'}} publicId="spoiler/cardoor.jpg" >
          <Transformation fetchFormat='auto' />
        </Image>
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>Школа обучение безопасному вождению автомобиля в условиях города.</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>
    </CloudinaryContext>


    <CloudinaryContext cloudName="dg28o9yt1">
      <div className="header-block">
        <Image style={{width:'100%', borderRadius:'6px'}} publicId="spoiler/first.jpg" >
          <Transformation fetchFormat='auto' />
        </Image>
        <div className="header-caption">
          <h1>Автошкола в Киеве "СПОЙЛЕР"</h1>
          <p>Лучшая цена и условия обучения на вождение в 2018 году.</p>
          <div className="header-callbutton">
            <h1>(063) 648 49 29</h1>
          </div>
        </div>
      </div>
    </CloudinaryContext>

    </Slider>
  </div>
);

export default Header;
