import React from 'react';
import { useLocation, useNavigate } from 'react-router';
const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}>
      <div className="container text-center">
        <h1>hello {location.pathname.replace('/', '')} page</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(-1);
          }}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default About;
