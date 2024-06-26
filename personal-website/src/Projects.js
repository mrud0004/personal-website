import React from 'react';
import Particle from './components/particles';
import { Link } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import './Home.css';


function Projects() {
    return (
      <div className="App relative h-screen">
        <Particle id="particles" />
        <HeaderComponent/>
        </div>
    );
  }
  
  export default Projects;