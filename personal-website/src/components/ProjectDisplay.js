import React from "react";
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ image, title, description }) => {
    return (
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-sm text-white w-full">
          {image && <img src={image} alt={title} className="max-w-screen-sm h-auto rounded-t-lg" />}
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <p className="mt-2 max-w-xl overflow-auto break-words text-justify">{description}</p>
          </div>
    );
  };
  

export default ProjectDisplay;