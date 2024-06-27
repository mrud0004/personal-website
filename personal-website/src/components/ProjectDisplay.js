import React from "react";

const ProjectDisplay = ({ image, title, description,link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-sm text-white w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          {image && <img src={image} alt={title} className=" h-auto rounded-t-lg" />}
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <p className="mt-2 max-w-xl overflow-auto break-words text-justify">{description}</p>
          </div>
        </a>
    );
  };
  

export default ProjectDisplay;