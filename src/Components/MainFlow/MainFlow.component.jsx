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
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./CustomNode";
import Sidebar from "./Sidebar";

import "reactflow/dist/style.css";
import "./overview.css";
const Graph = require("node-dijkstra");

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

let id = 7;
const getId = () => id++;

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
  const [route, setRoute] = useState(null);
  const graph = new Map();

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

      const newNodeId = getId();
      console.log(newNodeId);
      const newNode = {
        id: newNodeId.toString(),
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
        data: { label: `${(newNodeId + 9).toString(36).toUpperCase()}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onEdgeClick = (event, edge) => {
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

  const getNodeWithId = (edges, id) => {
    let result = null;
    edges.forEach((edge) => {
      if (edge.id === id) {
        result = edge;
      }
    });
    return result;
  };

  const getNodeIdWithLabel = (label) => {
    let result = null;
    nodes.forEach((node) => {
      if (node.data.label == label) {
        result = node.id;
      }
    });
    return result;
  };

  const changeLabelEdgeHelper = (edge, newLabel) => {
    edge.label = newLabel;
    return edge;
  };

  const getEdgesOfNode = (sourceNodeId) => {
    return edges.filter(
      (edge) =>
        edge.source == sourceNodeId.toString() ||
        edge.target == sourceNodeId.toString()
    );
  };

  /**
   * Find the shortest path from two nodes.
   *
   * @param {char} source - The whatsit to use (or whatever).
   * @param {char} target - The whatsit to use (or whatever).
   * @returns A useful value.
   */
  const FindShortestPath = (source, target) => {
    const sourceId = getNodeIdWithLabel(source);
    const targetId = getNodeIdWithLabel(target);

    console.log(sourceId)
    console.log(targetId)
    const path = route.path(sourceId, targetId);

    const temp = edges.map((edge) => {
      return changeAnimatedEdgeHelper(edge, false);
    });
    setEdges(temp);

    for (let i = 0; i < path.length - 1; i++) {
      const s = path[i];
      const t = path[i + 1];
      UpdateEdgeState(s, t);
    }
  };

  const UpdateEdgeState = (source, target) => {
    const temp = edges.map((edge) => {
      return (edge.source == source && edge.target == target) ||
        (edge.target == source && edge.source == target)
        ? changeAnimatedEdgeHelper(edge, true)
        : edge;
    });
    console.log(temp);
    setEdges(temp);
  };

  const changeAnimatedEdgeHelper = (edge, value) => {
    edge.animated = value;
    return edge;
  };

  useEffect(() => {
    console.log(edges);
    nodes.forEach((node) => {
      const tempNode = new Map();
      const tempNodeId = node.id;

      //Add edges
      const temp = getEdgesOfNode(tempNodeId);
      temp.forEach((edge) => {
        edge.source == tempNodeId.toString()
          ? tempNode.set(edge.target, Number(edge.label))
          : tempNode.set(edge.source, Number(edge.label));
      });

      graph.set(tempNodeId, tempNode);
    });
    const temp = new Graph(graph);
    setRoute(temp);
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
          display: isFocus ? "block" : "none",
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
      <Sidebar FindPathHandler={FindShortestPath} />
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={(changes) => {
              changes.forEach((change) => {
                if (change.type == "remove") {
                  // console.log("onNodesChanges", changes);
                }
                if (change.type == "dimensions") {
                  // console.log("onNodesChanges", changes);
                }
              });
              onNodesChange(changes);
              setIsFocus(false);
            }}
            onEdgesChange={(changes) => {
              changes.forEach((change) => {
                if (change.type == "remove") {
                  // console.log("onNodesChanges", changes);
                }
              });
              // console.log("onEdgesChange", changes);
              onEdgesChange(changes);
              setIsFocus(false);
            }}
            onConnect={(connects) => {
              // console.log("onConnect", connects);
              onConnect(connects);
              setIsFocus(false);
            }}
            onEdgeClick={onEdgeClick}
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
      </ReactFlowProvider>
    </div>
  );
};

export default OverviewFlow;
