import React from 'react';
import Particle from './components/particles';
import HeaderComponent from './components/HeaderComponent';
import './Home.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


function About() {
    return (
      <div className="App relative h-screen">
        <Particle id="particles" />
        <HeaderComponent/>
        <div className="container mx-auto p-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-sm text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
          <p className="mb-4">
            Hi! I’m a dedicated student at Monash University, studying in the fields of Software Engineering and Astrophysics. I balance software development with astrophysics, and I navigate these fields with a deep interest in both.
          </p>
          <h2 className="text-xl font-semibold mb-2">Studying: </h2>
          <p className="mb-4">
            Software Engineering & Astrophysics with a minor in Mathematics
          </p>
          <h2 className="text-xl font-semibold mb-2">Institution: </h2>
          <p className="mb-1">
            Monash University
          </p>
          <p className="mb-4">
            I’ve maintained high academic standards throughout my tenure at Monash, with my dedication and passion for my studies. My educational journey has seen me apply myself heavily within both fields, and experience the overlap that both fields contain.
          </p>
          <h2 className="text-xl font-semibold mb-2">Projects: </h2>
          <h3 className="text-lg font-medium mb-1">NBA HOF Machine Learning Project</h3>
          <p className="mb-1">
            Objective: Utilise machine learning to predict NBA Hall of Fame inductions with a Random Forest model.
          </p>
          <p className="mb-1">
            Techniques Used: Random Forest model via SK-Learn in Python, employing ensemble learning for high accuracy.
          </p>
          <p className="mb-1">
            Achievements: Achieved 99% accuracy on a test set of 1040 NBA players and 94% on the entire dataset of 5201 players, showcasing the model’s effectiveness in sports analytics.
          </p>
          <p className="mb-4">
            For more details, visit the NBA HOF Machine Learning Project repository on my github page.
          </p>
          <h3 className="text-lg font-medium mb-1">AI PDF Summariser Tool: </h3>
          <p className="mb-1">
            Introduction: A tool designed to summarise PDF documents efficiently, integrating the latest Open AI advancements for streamlined workflow.
          </p>
          <p className="mb-1">
            Built With: Next.js, showcasing modern web development practices and a user-friendly interface.
          </p>
          <p className="mb-1">
            Features: Advanced AI summarisation, offering quick and concise information extraction from PDFs.
          </p>
          <p className="mb-4">
            Experience the tool live at my github page. (Note due to current server restrictions from Vercel only 1 page documents work at the moment).
          </p>
          <h2 className="text-xl font-semibold mb-2">Connect With Me: </h2>
          <p className="mb-4">
            Feel free to explore my projects and reach out if you’re interested in discussing technology, astrophysics, or any potential collaborations.
          </p>
        </div>
      </div>
      <div className="absolute mt-5 mb-5 left-0 right-6 flex justify-center space-x-8 text-white text-10xl">
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
  
  export default About;