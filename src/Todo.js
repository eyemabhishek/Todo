import React, { useState } from "react";
import "./App.css";
import Event from "./Event";
const Todo = () => {
  const [input, setInput] = useState("");
  const [addItem, setAdditem] = useState([]);

  const itemVal = (evt) => {
    setInput(evt.target.value);
  };

  const handleClick = () => {
    setAdditem((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };
  const deleteItem = (id) => {
    console.log("delted");
    setAdditem((oldItems) => {
      return oldItems.filter((ele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <h1 className="heading">Todo app</h1>
        <div className="item_input">
          <input
            type="text"
            placeholder="add items"
            value={input}
            onChange={itemVal}
          />
          <button onClick={handleClick}>+</button>
          <br />
        </div>

        <ol>
          {addItem.map((curItem, index) => {
            return (
              <Event
                key={index}
                id={index}
                onSelect={deleteItem}
                text={curItem}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
