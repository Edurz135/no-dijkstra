import React, { useState } from "react";

const SideBar = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  return (
    <div className="control-container">
      <span className="title">COMPONENTS</span>

      <div className="container">
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          +
        </div>
        <div>
          <input
            maxLength={1}
            onChange={(e) => {
              const val = e.target.value.toUpperCase();
              setSource(val);
            }}
          ></input>
        </div>
        <input
          maxLength={1}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            setTarget(val);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            props.FindPathHandler(source, target);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SideBar;
