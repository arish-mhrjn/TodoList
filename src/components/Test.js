import React, { useEffect, useState } from 'react';

function Test() {
  var bioData = [
    { id: 0, name: 'Arish', age: 12 },
    { id: 1, name: 'Maharjan', age: 13 },
    { id: 2, name: 'Maharjan', age: 13 },
  ];
  const clear = () => {
    setmyArray([]);
  };
  const innerRemove = (id) => {
    const newArray = myArray.filter((currElm) => {
      return id != currElm.id;
    });
    setmyArray(newArray);
  };
  const [myArray, setmyArray] = useState(bioData);
  return (
    <>
      {myArray.map((currElm) => {
        return (
          <h1 className="h1style" key={currElm.id}>
            Name:{currElm.name} & age:{currElm.age}
            <button className="btn" onClick={() => innerRemove(currElm.id)}>
              remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={clear}>
        Clear
      </button>
    </>
  );
}

export default Test;
