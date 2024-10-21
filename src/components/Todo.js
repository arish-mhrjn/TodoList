import React, { useEffect, useState } from "react";
import "./style.css";
import image from "../images/todo.svg";
const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [items, setItems] = useState(getLocalItems());
  const [inputData, setInputData] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Fill the data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData('');
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem) => {
      return id !== elem.id;
    });
    setItems(updatedItems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };
  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(to right, #C9FFBF, #ffafbd, #C9FFBF)",
          height: "100vh",
        }}>
        <div className="child-div">
          <figure>
            <img src={image} style={{ width: "8vw" }} alt="todologo" />
          </figure>
          <div
            className="addItems"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                fontSize: "2.5vw",
              }}>
              {" "}
              Add Your List Here📃
            </p>
            <div
              className="item"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "2rem",
              }}>
              <input
                type="text"
                placeholder="✍️ Add Items..."
                style={{
                  width: "30vw",
                  height: "3.5vw",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  paddingLeft: "13px",
                  fontSize: "1.5vw",
                }}
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />

              {toggleSubmit ? (
                <i
                  className="fa-solid fa-plus btn"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "1.7vw",
                  }}
                  onClick={addItem}
                  title="Add Items"></i>
              ) : (
                <i
                  className="fa-solid fa-edit btn"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "1.7vw",
                  }}
                  onClick={addItem}
                  title="Add Items"></i>
              )}
            </div>
            <div className="showItems">
              {items.map((elem) => {
                return (
                  <div
                    key={elem.id}
                    className="item list d-flex align-items-center "
                    style={{
                      paddingLeft: "3%",
                      paddingRight: "1.5%",
                      justifyContent: "space-between",
                      width: "32vw",
                      height: "2.5vw",
                    }}>
                    <h3 style={{ fontSize: "1.5vw", marginBottom: "0px" }}>
                      {elem.name}
                    </h3>
                    <div className="d-flex me-2">
                      <i
                        className="far fa-edit btn text-warning"
                        style={{ paddingRight: "0px" }}
                        title="EditItem"
                        onClick={() => editItem(elem.id)}
                      />
                      <i
                        className="far fa-trash-alt btn text-danger"
                        style={{ paddingRight: "0px" }}
                        title="DeleteItem"
                        onClick={() => deleteItem(elem.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="removeItem">
              <button
                className="btn btn-danger"
                onClick={removeAll}
                style={{
                  width: "100%",
                  fontSize: "1.5vw",
                  fontWeight: "700",
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
