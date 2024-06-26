import React from 'react';
import Particle from './components/particles';
import HeaderComponent from './components/HeaderComponent';
import './Home.css';


function Home() {
  return (
    <div className="App relative h-screen">
      <Particle id="particles" />
      <HeaderComponent/>
    </div>
  );
}

export default Home;