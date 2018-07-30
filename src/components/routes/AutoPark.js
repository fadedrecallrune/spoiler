import React, { Component } from "react";
import './routes.css'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import Hours from '../home/Hours';
import Map from '../home/Map';

class AutoPark extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
  
    return (
  <div className='routes-container'>
    <CloudinaryContext cloudName="dg28o9yt1">
        <div className='route-image-box'>
        <Image className='route-image' publicId="spoiler/pexels-photo-305070.jpg" >
          <Transformation height="680" width="1600" crop="scale" fetchFormat='auto' />
        </Image>
        <div className='route-caption'>
          <h1>Наш Автопарк</h1>
        </div>
        </div>
        </CloudinaryContext>
    <div className='routes-text-box'>
    <h1 style={{textAlign:'center', borderBottom:'1px solid gray', fontWeight:'700',}} >Автомобили</h1>
    <p>Вам предоставляется возможность выбрать автомобиль, на котором Вы будете обучаться практическим навыкам вождения. В настоящее время в нашей автошколе возможно обучение на таких автомобилях:</p>
    <ul>
      <li>Toyota Corolla;</li>
      <li>Renault Megane;</li>
      <li>Pegeuot-406;</li>
      <li>Mercedes 190;</li>
      <li>KIA Cerato;</li>
      <li>Chevrolet Aveo;</li>
      <li>Daewoo Matiz.</li>
    </ul>
    <p>Также в нашей автошколе проводится обучение вождению на автомобилях SsangYong Kyron (внедорожник) и Daewoo Lanos с <span style={{fontWeight:'700'}} >автоматической коробкой передач</span> (АКПП).</p>
  </div>
  <Hours />
  <Map />
  </div>
)
  }}
export default AutoPark;