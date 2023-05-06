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

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === "custom").data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  useEffect(() => {
    console.log(nodes);
    console.log(edges);
  }, []);

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
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
              console.log("onEdgesChange", changes);
              onEdgesChange(changes);
            }}
            onConnect={(connects) => {
              console.log("onConnect", connects);
              onConnect(connects);
            }}
            onEdgeClick={(event) => {
              console.log("onEdgeClick", event);
            }}
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
