import React, { useEffect, useState } from 'react';
import CustomHook from './CustomHook';
const UseEffects = () => {
  const [Count, setCount] = useState(0);
  CustomHook(Count);
  return (
    <div className="container">
      <h1>{Count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(Count + 1);
        }}>
        Click
      </button>
    </div>
  );
};

export default UseEffects;
