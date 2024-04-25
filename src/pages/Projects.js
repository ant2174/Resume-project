// Projects.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Resume Website",
      description: "My resume website is a personal portfolio site showcasing my skills, experiences, and projects. It provides an overview of my background, education, work history, and contact information. The website is designed to be visually appealing, user-friendly, and responsive across different devices.",
      technologies: "Technologies used: HTML, CSS, JavaScript, React.js",
      image: "./website-image.png" // Replace with actual image path
    },
    {
      id: 2,
      title: "Password Generator",
      description: "The password generator is a tool that helps users generate strong and secure passwords. It allows users to specify the length of the password and select from various options such as including numbers, special characters, and uppercase letters. The generated password is displayed to the user and can be copied to the clipboard for easy use.",
      technologies: "Technologies used: Python",
      image: "./password.png" // Replace with actual image path
    }
  ];

  const goToPreviousProject = () => {
    setCurrentProject(currentProject === 1 ? projects.length : currentProject - 1);
  };

  const goToNextProject = () => {
    setCurrentProject(currentProject === projects.length ? 1 : currentProject + 1);
  };

  return (
    <>
      <Navbar />
      <div className='container3'>
        <div className='row'>
          <div className='col-lg-6 mb-4'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{`Project ${projects[currentProject - 1].id}: ${projects[currentProject - 1].title}`}</h5>
                <hr/>
                <p className='card-text'>{projects[currentProject - 1].description}</p>
                <p className='card-text'>{projects[currentProject - 1].technologies}</p>
              </div>
              <img src={projects[currentProject - 1].image} className='card1-img-top' alt={`Project ${currentProject}`} />
            </div>
          </div>
          <div className='col-lg-6 d-flex align-items-center justify-content-center'>
            <div className='navigation'>
              <button className='btn btn-primary me-2' onClick={goToPreviousProject}>Previous Project</button>
              <button className='btn btn-primary ' onClick={goToNextProject}>Next Project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
