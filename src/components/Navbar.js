// Navbar.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-tertiary">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/"><span className='yoyo'>Ananth</span><span className='yoyo1'> Balaji</span> </Link> {/* Replace <a> with <Link> */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactme">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps= {
    title:'Set title here',
};
