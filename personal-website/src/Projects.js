import React from 'react';
import Particle from './components/particles';
import HeaderComponent from './components/HeaderComponent';
import './Home.css';
import ProjectDisplay from './components/ProjectDisplay';
import { useLinkClickHandler } from 'react-router-dom';


function Projects() {

    const projects = [
        {
          image: "/project1.png",
          title: "The Watchlist",
          description: "Building a movie watchlist app as part of a student team, using React which allows users to rate and save their favourite movies.",
          link: "https://github.com/Monash-FIT3170/The-Watchlist"
        },
        {
          image: "/project2.png",
          title: "AI PDF Summariser",
          description: "A tool designed to summarise PDF documents efficiently, integrating the latest Open AI advancements for streamlined workflow.",
          link: "https://github.com/mrud0004/ai-summariser-pdf"
        },
        {
          image: "/project3.jpg",
          title: "NBA HOF Machine Learning Project",
          description: "Utilised machine learning to predict NBA Hall of Fame inductions with a Random Forest model.",
          link: "https://github.com/mrud0004/nba-machine-learn-hof"
        }
      ];

    return (
      <div className="App relative h-screen">
        <Particle id="particles" />
        <HeaderComponent/>
        <div className="container mx-auto p-8">
        <div className="flex flex-wrap justify-center ml-3">
          {projects.map((project, index) => (
            <div key={index} className="mt-4 mr-8">
              <ProjectDisplay
                image={project.image}
                title={project.title}
                description={project.description}
                link = {project.link}
              />
            </div>
          ))}
        </div>
        </div>
        </div>
    );
  }
  
  export default Projects;