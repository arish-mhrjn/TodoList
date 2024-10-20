import React from 'react';

const Loading = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}>
      <div className="spinner-grow" role="status"></div>
    </div>
  );
};

export default Loading;
