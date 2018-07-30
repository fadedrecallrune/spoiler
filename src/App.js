import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import AutoPark from './components/routes/AutoPark';
import Courses from './components/routes/Courses';
import AboutUs from './components/routes/AboutUs';


class App extends Component {
  render() {
    return (
      <div className="">

        <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/autopark' component={AutoPark} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/aboutus' component={AboutUs} />
        </div>
        </Router>
        
        <Footer />
      </div>
    );
  }
}

export default App;
