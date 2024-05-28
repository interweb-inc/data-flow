import { Graph } from '@fbp/types';

export const graph: Graph = {
  category: 'coverted',
  context: 'default',
  edges: [],
  name: 'myGraph',
  nodes: [
    {
      category: 'Converted',
      context: 'Converted',
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
      name: 'Adder Node',
      outputs: [
        {
          name: 'Sum',
          type: 'number',
        },
      ],
      properties: [],
      title: 'Adder Node',
      type: 'Add',
    },
    {
      category: 'Converted',
      context: 'Converted',
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
      name: 'Multiplier Node',
      outputs: [
        {
          name: 'Product',
          type: 'number',
        },
      ],
      properties: [],
      title: 'Multiplier Node',
      type: 'Multiply',
    },
  ],
  title: 'mygraph',
  type: 'Graph',
};