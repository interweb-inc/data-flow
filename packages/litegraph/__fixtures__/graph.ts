import { Graph } from '@fbp/types';

export const graph: Graph = {
  category: 'default',
  context: 'default',
  type: 'Graph',
  name: 'default',
  nodes: [
    {
      name: 'add1',
      type: 'add',
      category: 'math',
      context: 'js',
      inputs: [
        {
          name: 'A',
          type: 'number',
        },
        {
          name: 'B',
          type: 'number',
        },
      ],
      meta: {
        x: 100,
        y: 100,
      },
      outputs: [
        {
          name: 'Sum',
          type: 'number',
        },
      ],
      properties: [],
    },
    {
      name: 'mult1',
      type: 'mult',
      category: 'math',
      context: 'js',
      inputs: [
        {
          name: 'Sum',
          type: 'number',
        },
        {
          name: 'C',
          type: 'number',
        },
      ],
      meta: {
        x: 300,
        y: 100,
      },
      outputs: [
        {
          name: 'Product',
          type: 'number',
        },
      ],
      properties: [],
    }
  ],
  edges: [
    {
      src: {
        node: 'add1',
        port: 'Sum'
      },
      dst: {
        node: 'mult1',
        port: 'Sum'
      }
    }
  ]
};
