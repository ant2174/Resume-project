// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/Contactme';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar title="Ananth Balaji" />
        <Routes>
          <Route path="/" element={<Home />} exact /> 
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        
      </div>
    </Router>
  );
}
