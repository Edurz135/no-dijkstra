import React from 'react';
import { MarkerType, Position } from 'reactflow';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: '100%',
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const nodes = [
  {
    id: '1',
    type: 'default',
    data: {
      label: 'A1',
    },
    position: { x: 0, y: 0 },
    ...nodeDefaults,
  },
  {
    id: '2',
    type: 'default',
    data: {
      label: 'B2',
    },
    position: { x: 200, y: 100 },
    ...nodeDefaults,
  },
  {
    id: '3',
    type: 'default',
    data: {
      label: 'C3',
    },
    position: { x: 200, y: -100 },
    ...nodeDefaults,
  },
  {
    id: '4',
    type: 'default',
    data: {
      label: 'D4',
    },
    position: { x: 400, y: 100 },
    ...nodeDefaults,
  },
  {
    id: '5',
    type: 'default',
    data: {
      label: 'E5',
    },
    position: { x: 400, y: -100 },
    ...nodeDefaults,
  },
  {
    id: '6',
    type: 'default',
    data: {
      label: 'F6',
    },
    position: { x: 600, y: 0 },
    ...nodeDefaults,
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: '5', animated: true },
  { id: 'e1-3', source: '1', target: '3', label: '3', animated: false },
  { id: 'e3-5', source: '3', target: '5', label: '5', animated: false},
  { id: 'e2-5', source: '2', target: '5', label: '2', animated: true },
  { id: 'e2-4', source: '2', target: '4', label: '7', animated: false },
  { id: 'e4-6', source: '4', target: '6', label: '10', animated: false },
  { id: 'e5-6', source: '5', target: '6', label: '3', animated: true },
];
