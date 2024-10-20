import React, { useReducer } from 'react';
const initialState = 5;
const reducer = (state, action) => {
  if (action.type === 'Increment') {
    return state + 1;
  } else if (action.type === 'Decrement') {
    return state - 1;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
    </>
  );
};

export default UseReducer;
