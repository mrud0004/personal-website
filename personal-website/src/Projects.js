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
        },
        {
          image: "/project4.png",
          title: "Echo-News React APP",
          description: "Built a news app with React that allows user to have a customised as well as general news feed, with intuitive design.",
          link: "https://github.com/mrud0004/news-react-app"
        }
      ];

    return (
      <div className="App relative min-h-screen">
        <Particle id="particles" />
        <HeaderComponent/>
        <div className="container mx-auto p-8">
        <div className="flex flex-col justify-center">
          {projects.map((project, index) => (
            <div key={index} className="mt-4 mr-8 w-full ">
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