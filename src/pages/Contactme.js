// ContactMe.js

import React from 'react';

const ContactMe = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Hit me up📲</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-6">
              <h3>Reach Out to Me</h3>
              <p>Feel free to contact me using the details below:</p>
              <ul className="list-group">
                <li className="list-group-item"><strong>Email:</strong> ananth2174@gmail.com</li>
                <li className="list-group-item"><strong>Phone:</strong> +91 9177728394</li>
              </ul>
              <div className="mainpage-logos">
                <a href="https://www.linkedin.com/in/ananth2174/" target="_blank" rel="noreferrer"><img src='/logos/twitter1.png' className="img-fluid" alt="tweet" width="40px" height="40px"/></a>
                <a href="https://github.com/ant2174"><img className="img-fluid" src="/logos/github1.png" alt="git" width="40px" height="40px"/></a>
                <a href="https://www.instagram.com/ant_2174/"><img className="img-fluid" src="./logos/instagram1.png" alt="insta" width="45px" height="40px"/></a>
                <a href="https://www.linkedin.com/in/ananth2174/"><img className="img-fluid" src="/logos/linkedin1.png" alt="linkedin" width="40px" height="40px"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
