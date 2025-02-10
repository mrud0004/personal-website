import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Startup from './Startup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Startup />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;