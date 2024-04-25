import React from 'react';

const Education = () => {
  return (
    <>
    <div className="container mt-4" > {/* Add margin top to create space */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Education</h4>
          <hr/>
          <div>
            <h5>College:</h5>
            <p><a href="https://vit.ac.in/" target='_blank'>Vellore Institute of Technology</a></p>
            <h6>Course:</h6>
            <p>Computer Science Engineering with a specialisation in Information Security</p>
            <h6>Year:</h6>
            <p>Second Year</p>
            <h6>CGPA:</h6>
            <p>8.92</p>
          </div>
          <hr />
          <div>
            <h5>Intermediate</h5>
            <p><a href="https://srichaitanya.net/">Sri Chaitanya</a></p>
            <h6>Board:</h6>
            <p>Telangana State Board of Intermediate Education (TSBIE)</p>
            <h6>Percentage:</h6>
            <p>94%</p>
          </div>
          <hr />
          <div>
            <h5>10th Grade:</h5>
            <p><a href="https://srichaitanya.net/">Sri Chaitanya</a></p>
            <h6>Board:</h6>
            <p>Telangana State Secondary School Certificate Examination (TSSSC)</p>
            <h6>GPA:</h6>
            <p>10.0</p>
            <hr/>
          </div>
          <div>
            <h5>1st to 6th Class</h5>
            <p><a href="https://bvbpsjh.com/">Bharatiya Vidya Bhavans Public School, Jubilee-Hills, Hyderabad</a></p>
          </div>
          <hr/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Education;
