import React, { useState } from 'react';

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({ myName: 'arish', myAge: 12 });
  return (
    <div>
      <h1>
        name:{myObject.myName}& Age:{13}
      </h1>
      <button className="btn">check</button>
    </div>
  );
};

export default UseStateObject;
