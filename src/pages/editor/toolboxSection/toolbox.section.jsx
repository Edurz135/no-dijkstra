import React, { useState } from "react";

export default function Toolbox(props) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  return (
    <div className="absolute ml-4 mt-2">
      <span className="absolute text-cprimary-60 text-7xl top-0 z-10 font-fheader leading-none">
        TOOLBOX
      </span>

      <div className="absolute z-20 flex ml-6 mt-4">
        <div
          className="bg-con-primary hover:cursor-grab w-12 h-12 rounded-full border-con-secondary border-2 flex items-center justify-center"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          <div className="absolute w-3 h-3 rounded-full bg-cprimary translate-x-[180%] border-con-secondary border-2" />
          <div className="absolute w-3 h-3 rounded-full bg-cprimary translate-x-[-180%] border-con-secondary border-2" />
          <div className="absolute text-con-secondary text-4xl font-bold translate-y-[-10%]">
            +
          </div>
        </div>
        <div className="ml-3 mr-3 flex flex-column items-center font-fheader leading-none">
          <p>From </p>
          <input
            className="w-12 text-center h-7 border-con-secondary border-2 rounded-md bg-ctertiary"
            maxLength={1}
            onChange={(e) => {
              const val = e.target.value.toUpperCase();
              setSource(val);
            }}
          />
        </div>
        <div className="mr-3 flex flex-column items-center font-fheader leading-none">
          <p>To </p>
          <input
            className="w-12 text-center h-7 border-con-secondary border-2 rounded-md bg-ctertiary"
            maxLength={1}
            onChange={(e) => {
              const val = e.target.value.toUpperCase();
              setTarget(val);
            }}
          />
        </div>
        <button
          className="bg-cprimary w-12 h-12 border-con-secondary border-2 rounded-2xl font-fheader"
          type="button"
          onClick={() => {
            props.FindPathHandler(source, target);
          }}
        >
          <p className="text-md text-con-secondary leading-none">Find Path</p>
        </button>
      </div>
    </div>
  );
}
