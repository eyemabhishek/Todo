import React from "react";
import "./App.css";
const Event = (props) => {
  return (
    <>
      <div className="task">
        <li>{props.text}</li>
        <i
          class="far fa-times-circle"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </div>
    </>
  );
};

export default Event;
