import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="control-container">
      <span>CONTROLS</span>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Node
      </div>
    </div>
  );
};
