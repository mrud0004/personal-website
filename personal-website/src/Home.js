import React from 'react';
import Particle from './components/particles';
import HeaderComponent from './components/HeaderComponent';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Home.css';

function Home() {
  

  return (
    <div className="App relative h-screen">
      <Particle id="particles" />
      <HeaderComponent/>
      <div className="absolute bottom-10 left-0 right-6 flex justify-center space-x-8 text-white text-10xl">
        <a href="https://www.linkedin.com/in/miles-rudelic/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/miles_rudelic/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
          <FaInstagram />
        </a>
      </div>
    </div>
    
  );
}

export default Home;