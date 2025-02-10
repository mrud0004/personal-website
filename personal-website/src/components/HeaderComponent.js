import React from 'react';
import { Link } from 'react-router-dom';


function HeaderComponent() {
    return (
        <>
        <header className="App-header mt-5 text-7xl font-bold text-center text-white">
        <p>Miles Rudelic</p>
      </header>
      <div className="flex justify-center mt-10 space-x-8 mr-6">
        <Link to="/home" className="text-white text-xl hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-white text-xl hover:underline">
          About
        </Link>
        <Link to="/projects" className="text-white text-xl hover:underline">
          Projects
        </Link>
      </div>
      </>
    );
  }
  
  export default HeaderComponent;