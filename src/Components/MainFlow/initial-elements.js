import { Position } from 'reactflow';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const nodes = [
  {
    id: '1',
    type: 'default',
    data: {
      label: 'A',
    },
    position: { x: 0, y: 0 },
    ...nodeDefaults,
  },
  {
    id: '2',
    type: 'default',
    data: {
      label: 'B',
    },
    position: { x: 150, y: 75 },
    ...nodeDefaults,
  },
  {
    id: '3',
    type: 'default',
    data: {
      label: 'C',
    },
    position: { x: 150, y: -75 },
    ...nodeDefaults,
  },
  {
    id: '4',
    type: 'default',
    data: {
      label: 'D',
    },
    position: { x: 300, y: 75 },
    ...nodeDefaults,
  },
  {
    id: '5',
    type: 'default',
    data: {
      label: 'E',
    },
    position: { x: 300, y: -75 },
    ...nodeDefaults,
  },
  {
    id: '6',
    type: 'default',
    data: {
      label: 'F',
    },
    position: { x: 450, y: 0 },
    ...nodeDefaults,
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: '5', animated: false },
  { id: 'e1-3', source: '1', target: '3', label: '3', animated: false },
  { id: 'e3-5', source: '3', target: '5', label: '5', animated: false },
  { id: 'e2-5', source: '2', target: '5', label: '2', animated: false },
  { id: 'e2-4', source: '2', target: '4', label: '7', animated: false },
  { id: 'e4-6', source: '4', target: '6', label: '10', animated: false },
  { id: 'e5-6', source: '5', target: '6', label: '3', animated: false },
];
