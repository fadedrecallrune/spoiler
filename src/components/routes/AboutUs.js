import React, { Component } from "react";
import './routes.css'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import Hours from '../home/Hours';
import Map from '../home/Map';

class AboutUs extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
  
    return (
  <div className='routes-container'>
    <CloudinaryContext cloudName="dg28o9yt1">
        <div className='route-image-box'>
        <Image className='route-image' publicId="spoiler/pexels-photo-70912.jpg" >
          <Transformation height="945" width="1880" crop="scale" fetchFormat='auto' />
        </Image>
        <div className='route-caption-aus'>
          <h1 >Автошкола в Киеве "Спойлер"</h1>
        </div>
        </div>
        </CloudinaryContext>
    <div className='routes-text-box'>
    <p style={{marginTop:'10%'}} >Киевская автошкола <span style={{fontWeight:'700'}} >“Спойлер”</span> осуществляет обучение правилам дорожного движения и вождению автомобилей категории <span style={{fontWeight:'700'}}> "В".</span></p>
    <p>Наши преподаватели теоретической подготовки и инструкторы вождения автомобиля, являющиеся специалистами высокого класса, подготовят Вас к сдаче экзаменов в ГАИ, а также научат правильно и безопасно управлять автомобилем в жутких условиях мегаполиса.</p>
    <p>Наша автошкола была организована в 1998 году, и на протяжении всего времени своего существования мы сохраняем высокое качество подготовки наших слушателей, а также стремимся сделать процесс обучения максимально комфортным для вас.</p>
    <p>Основная задача школы не просто подготовить ученика к сдаче экзамена в МРЭО ГАИ, но и дать возможность получить навыки практического вождения, которые позволят ему уверенно садиться за руль собственного автомобиля и самостоятельно управлять им в условиях города безопасно для себя и окружающих, а также постараться учесть индивидуальность каждого человека и создать максимально возможные удобства для обучения.</p>
    <p style={{marginBottom:'10%'}} >Наши классы по теоретической подготовке находятся в Соломенском районе, на Теремках, а также на левом берегу (метро Позняки).</p>
  </div>
  <Hours />
  <Map />
  </div>)
  }
}
export default AboutUs;