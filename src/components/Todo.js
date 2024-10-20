import React, { useState } from 'react';
import './style.css';
import image from '../images/todo.svg';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData('');
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return id !== ind;
    });
    setItems(updatedItems);
  };
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          background: 'linear-gradient(to right, #C9FFBF, #ffafbd, #C9FFBF)',
          height: '100vh',
        }}>
        <div className="child-div">
          <figure>
            <img src={image} style={{ width: '8vw' }} alt="todologo" />
          </figure>
          <div
            className="addItems"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: '2.5vw',
              }}>
              {' '}
              Add Your List Here📃
            </p>
            <div
              className="item"
              style={{
                position: 'relative',
                display: 'inline-block',
                marginBottom: '2rem',
              }}>
              <input
                type="text"
                placeholder="✍️ Add Items..."
                style={{
                  width: '30vw',
                  height: '60px',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '5px',
                  paddingLeft: '13px',
                }}
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <i
                className="fa-solid fa-plus btn"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={addItem}
                title="Add Items"></i>
            </div>
            <div className="showItems">
              {items.map((elem, ind) => {
                return (
                  <div
                    key={ind}
                    className="item list d-flex align-items-center "
                    style={{
                      fontSize: '1.3rem',
                      paddingLeft: '3%',
                      paddingRight: '1.5%',
                      justifyContent: 'space-between',
                    }}>
                    <h3>{elem}</h3>
                    <i
                      className="far fa-trash-alt btn"
                      title="DeleteItem"
                      onClick={() => deleteItem(ind)}></i>
                  </div>
                );
              })}
            </div>

            <div className="removeItem">
              <button
                className="btn btn-danger"
                onClick={removeAll}
                style={{
                  width: '10vw',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                }}>
                REMOVE ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
