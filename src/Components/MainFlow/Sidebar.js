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
      <span>CONTROLS</span>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Node
      </div>
      <div className="control-algorithm">
        <span>From:</span>
        <br />
        <input
          maxLength={1}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            setSource(val);
          }}
        ></input>
        <br />
        <span>To:</span>
        <br />
        <input
          maxLength={1}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            setTarget(val);
          }}
        ></input>
        <br />
        <button
          type="button"
          onClick={() => {
            props.FindPathHandler(source, target);
          }}
        >
          Find Path
        </button>
      </div>
    </div>
  );
};

export default SideBar;
