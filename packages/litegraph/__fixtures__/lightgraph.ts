import { Litegraph } from '../src';

export const lightgraph: Litegraph = {
  nodes: [
    {
      id: 0,
      title: 'add1',
      type: 'js/math/add',
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
          links: [0],  // Link index 0 connects this output
          name: 'Sum',
          type: 'number',
        },
      ],
      pos: [100, 100],
      value: undefined,
    },
    {
      id: 1,
      title: 'mult1',
      type: 'js/math/mult',
      inputs: [
        {
          link: 0,  // This input is connected by link index 0
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
      pos: [300, 100],
      value: undefined,
    },
  ],
  links: [
    {
      id: 0,
      origin_id: 0,     // Output from node 'add1'
      origin_slot: 0,   // First (and only) output of 'add1'
      target_id: 1,     // Input to node 'mult1'
      target_slot: 0    // First input slot of 'mult1' (which expects Sum)
    },
  ],
};
