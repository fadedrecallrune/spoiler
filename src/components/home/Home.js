import React from 'react'
import './Home.css'

import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import ThirdBlock from './ThirdBlock'
import ForthBlock from './ForthBlock';
import Prices from './Prices';
import Map from './Map'
import Hours from './Hours';
import Header from '../header/Header';


const Home = () => (
  <div className=''>

    <Header />

    <FirstBlock />
    <SecondBlock />
    <ThirdBlock />
    <ForthBlock />

    <Prices />
    <Hours />
    <Map />

  </div>
)

export default Home;