import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Position,
  getBezierPath,
  getSmoothStepPath,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./CustomNode";
import Sidebar from "./Sidebar";

import "reactflow/dist/style.css";
import "./overview.css";

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const OverviewFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");

  const inputReference = useRef(null);
  const [currentSelectedEdge, setCurrentSelectedEdge] = useState({});
  const [currentEdgeText, setCurrentEdgeText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const onInit = (reactFlowInstance) => setReactFlowInstance(reactFlowInstance);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        console.log("ASDF1");
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
          borderRadius: "100%",
          backgroundColor: "#fff",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onEdgeDoubleClick = (event, edge) => {
    // const [path, labelX, labelY] = getSmoothStepPath(edge)

    setTop(`${event.clientY}px`);
    setLeft(`${event.clientX}px`);
    inputReference.current.focus();
    setCurrentSelectedEdge(edge);
    setIsFocus(true);
  };

  const changeLabelEdge = (edge, newLabel) => {
    setEdges(
      edges.map((obj) => {
        return obj.id === edge.id ? changeLabelEdgeHelper(edge, newLabel) : obj;
      })
    );
  };

  const changeLabelEdgeHelper = (edge, newLabel) => {
    edge.label = newLabel;
    return edge;
  };

  useEffect(() => {
    console.log(nodes);
    console.log(edges);
  }, []);

  return (
    <div className="dndflow" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          height: "20px",
          width: "40px",
          top: top,
          left: left,
          zIndex: 100,
          display: isFocus ? 'block' : 'none',
        }}
      >
        <input
          style={{ width: "100%", height: "100%" }}
          type="number"
          ref={inputReference}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              changeLabelEdge(currentSelectedEdge, currentEdgeText);
              setCurrentEdgeText("");
              setIsFocus(false);
            }
          }}
          value={currentEdgeText}
          onChange={(event) => {
            setCurrentEdgeText(event.target.value);
          }}
        ></input>
      </div>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={(changes) => {
              changes.forEach((change) => {
                if (change.type == "remove") {
                  console.log("onNodesChanges", changes);
                }
                if (change.type == "dimensions") {
                  console.log("onNodesChanges", changes);
                }
              });
              onNodesChange(changes);
            }}
            onEdgesChange={(changes) => {
              changes.forEach((change) => {
                if (change.type == "remove") {
                  console.log("onNodesChanges", changes);
                }
              });
              // console.log("onEdgesChange", changes);
              onEdgesChange(changes);
            }}
            onConnect={(connects) => {
              console.log("onConnect", connects);
              onConnect(connects);
            }}
            onSelectionEnd={(event) => {
              console.log("selection finished")
            }}
            onEdgeClick={onEdgeDoubleClick}
            onInit={onInit}
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default OverviewFlow;
