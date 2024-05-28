import React from 'react';
import FlowGraph from '../graph/flow-graph';
import { AddNode } from '../graph/nodes/my-node';

import { Footer, Header, Hero, Layout } from "@/components";
import { Box, Text } from "@interchain-ui/react";

export default function Flow() {
  const nodeDefinitions = [AddNode.register];

  // Example of initial graph data
  const initialGraphData = {
    nodes: [
      {
        id: 3,
        type: 'js/math/add',
        pos: [700, 200]
      }
    ],
    links: [
      { id: 1, origin_id: 1, origin_slot: 0, target_id: 2, target_slot: 0 }
    ]
  };
  return (
    // @ts-ignore
    <Layout>
       {/* @ts-ignore */}
      <Box mt="$12">
       {/* @ts-ignore */}
      <FlowGraph nodeDefinitions={nodeDefinitions} initialGraphData={initialGraphData} />
      </Box>
    </Layout>
  );
}
