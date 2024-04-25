import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Function to adjust font size of pop-up text
  function adjustFontSize() {
    const welcomeText = document.querySelector('.pop-up-text');
    if (welcomeText) {
      const tabWidth = window.innerWidth; // Get the width of the tab

      // Calculate font size to fit 70% of the screen width
      const fontSize = Math.min((tabWidth * 0.7) / 10, 150); // Adjust 10 as needed

      // Apply the calculated font size
      welcomeText.style.fontSize = fontSize + 'px';
    }
  }

  // Call the function when the window is resized
  useEffect(() => {
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, []); // Empty dependency array ensures the effect runs only once

  // Call the function initially
  useEffect(() => {
    adjustFontSize();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Navbar 
        title="Ananth Balaji"
      />
      {showWelcome && <div className="pop-up-text">Hi👋 Welcome!</div>}

      {!showWelcome && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className='mainpage-content'>
                <h1>Hi!! My name is Ananth<span className='emoji' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{hovered ? '🙃' : '😊'}</span></h1>
                <h2>"I'm a sophomore at VIT Vellore passionate about coding and cybersecurity. When not at the keyboard, I'm engrossed in web series and cricket matches."</h2>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img src="/ananth-image.jpg" alt="Your Photo" className="img-top rounded-circle" style={{ width: "300px", height: "300px", objectFit: "cover", }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="mainpage-logos">
                <a href="https://www.linkedin.com/in/ananth2174/" target="_blank" rel="noreferrer"><img src='/logos/twitter.png' className="img-fluid" alt="tweet" width="40px" height="40px"/></a>
                <a href="https://github.com/ant2174"><img className="img-fluid" src="/logos/github.png" alt="git" width="40px" height="40px"/></a>
                <a href="https://www.instagram.com/ant_2174/"><img className="img-fluid" src="./logos/instagram.png" alt="insta" width="40px" height="40px"/></a>
                <a href="https://www.linkedin.com/in/ananth2174/"><img className="img-fluid" src="/logos/linkedin.png" alt="linkedin" width="40px" height="40px"/></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
