import React from 'react'
import './Home.css'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';


const ThirdBlock = () => (
  <div className='thirdblock-container'>
    <div className='colorblock'>
      <div className='secondblock-text'>
       <h1  >Наш Автопарк</h1>
       <p style={{ margin:'5% 0'}} >Обучение проводится на автомобилях на любой вкус: класса А - Daewoo Matiz до внедорожника - SsangYong Kyron. В Вашем распоряжении автомобили с автоматической коробкой передач, а также автомобили с традиционной механической коробкой передач.</p>
        <div className='secondblock-button'>Наш Автопарк</div>
      </div>

      <div className='secondblock-image'>
        <CloudinaryContext cloudName="dg28o9yt1">
        <Image style={{width:'100%', borderRadius:'6px'}} publicId="spoiler/third.jpg" >
          <Transformation fetchFormat='auto' />
        </Image>
        </CloudinaryContext>
      </div>

    </div>
  </div>
)

export default ThirdBlock;