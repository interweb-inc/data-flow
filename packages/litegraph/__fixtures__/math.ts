import { Graph } from '@fbp/types';

export const graph: Graph = {
  type: 'Graph',
  name: 'default',
  nodes: [
    {
      name: 'num1',
      type: 'js/const/number',
      meta: {
        x: 50,
        y: 200,
      },
      outputs: [
        {
          name: 'num',
          type: 'number',
        },
      ],
      properties: [],
    },
    {
      name: 'num2',
      type: 'js/const/number',
      meta: {
        x: 350,
        y: 200,
      },
      outputs: [
        {
          name: 'num',
          type: 'number',
        },
      ],
      properties: [],
    },
    {
      name: 'add1',
      type: 'js/math/add',
      inputs: [
        {
          name: 'a',
          type: 'number',
        },
        {
          name: 'b',
          type: 'number',
        },
      ],
      meta: {
        x: 100,
        y: 100,
      },
      outputs: [
        {
          name: 'sum',
          type: 'number',
        },
      ],
      properties: [],
    },
    {
      name: 'mult1',
      type: 'js/math/mult',
      inputs: [
        {
          name: 'a',
          type: 'number',
        },
        {
          name: 'b',
          type: 'number',
        },
      ],
      meta: {
        x: 300,
        y: 100,
      },
      outputs: [
        {
          name: 'product',
          type: 'number',
        },
      ],
      properties: [],
    }
  ],
  edges: [
    {
      src: {
        node: 'num1',
        port: 'num'
      },
      dst: {
        node: 'add1',
        port: 'b'
      }
    },
    {
      src: {
        node: 'num2',
        port: 'num'
      },
      dst: {
        node: 'add1',
        port: 'b'
      }
    },
    {
      src: {
        node: 'add1',
        port: 'sum'
      },
      dst: {
        node: 'mult1',
        port: 'a'
      }
    },
    {
      src: {
        node: 'num1',
        port: 'num'
      },
      dst: {
        node: 'mult1',
        port: 'b'
      }
    }
  ]
};