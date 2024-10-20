import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}>
      <div className="container text-center">
        <h1>hello {location.pathname.replace('/', '')} page</h1>
        <button className="btn btn-primary"> Go back</button>
      </div>
    </div>
  );
};

export default Index;
