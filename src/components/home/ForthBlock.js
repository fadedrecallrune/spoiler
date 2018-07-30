import React from "react";
import "./Home.css";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import { Link } from 'react-router-dom'


const ForthBlock = () => (
  <div className="forthblock-container">
    <div className="colorblock">
      <div className="secondblock-image">
        <CloudinaryContext cloudName="dg28o9yt1">
          <Image
            style={{ width: "100%", borderRadius: "6px", marginTop: "5%" }}
            publicId="spoiler/4.jpg">
            <Transformation fetchFormat="auto" />
          </Image>
        </CloudinaryContext>
      </div>

      <div className="forthblock-text">
        <h1>Курс Обучения</h1>

        <p style={{ margin: "5% 0% 0% 0%" }}>Продолжительность обучения - до 2,5 месяцев.</p>

        <p>Курс обучения состоит из теоретических и практических занятий.</p>

        <p><span style={{ fontWeight: "700" }}>Теоретические</span> занятияпроводятся 2 раза в неделю.</p>

        <p style={{ margin: "0% 0% 5% 0%" }}>
          <span style={{ fontWeight: "700" }}>Практические занятия (вождение)</span>
          начинаются, примерно, через 10-15 дней после начала обучения и
          проводятся по индивидуальному графику.</p>
        <Link style={{textDecoration:'none', color:'white'}} className='secondblock-button' to='/courses'><div >Наш Автопарк</div></Link>
      </div>
    </div>
  </div>
);

export default ForthBlock;
