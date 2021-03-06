import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';



const SecondBlock = () => (
  <div className='secondblock-container'>
    <Helmet>
       <meta charSet="utf-8" />
      <title>Автошкола в Киеве Спойлер</title>
      <meta property="og:title" content='Автошкола в Киеве'/>
     </Helmet>

    <div className='colorblock'>
      <div className='secondblock-image'>
       <CloudinaryContext cloudName="dg28o9yt1">
        <Image style={{width:'100%', borderRadius:'6px'}} publicId="spoiler/megan.jpg" >
          <Transformation fetchFormat='auto' />
        </Image>
        </CloudinaryContext>
      </div>

      <div className='secondblock-text'>
      
        <h1  >Автошкола "Спойлер"</h1>
        <p style={{fontFamily:'roboto', margin:'5% 0'}} >Наша автошкола была организована в 1998 году, и на протяжении всего времени своего существования мы сохраняем высокое качество подготовки наших слушателей, а также стремимся сделать процесс обучения максимально комфортным для вас.</p>
        <Link style={{textDecoration:'none', color:'white'}} className='secondblock-button' to='/aboutus'><div >Наш Автопарк</div></Link>

      </div>
    </div>
  </div>
)

export default SecondBlock;