import { Litegraph } from '../src';

export const lightgraph: Litegraph = {
  links: [],
  nodes: [
    {
      id: 0,
      inputs: [
        {
          link: null,
          name: 'A',
          type: 'number',
        },
        {
          link: null,
          name: 'B',
          type: 'number',
        },
      ],
      outputs: [
        {
          links: [],
          name: 'Sum',
          type: 'number',
        },
      ],
      pos: [
        100,
        100,
      ],
      title: 'Adder Node',
      type: 'Add',
      value: undefined,
    },
    {
      id: 1,
      inputs: [
        {
          link: null,
          name: 'Sum',
          type: 'number',
        },
        {
          link: null,
          name: 'C',
          type: 'number',
        },
      ],
      outputs: [
        {
          links: [],
          name: 'Product',
          type: 'number',
        },
      ],
      pos: [
        300,
        100,
      ],
      title: 'Multiplier Node',
      type: 'Multiply',
      value: undefined,
    },
  ],
};