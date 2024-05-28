import React, { useEffect, useRef } from 'react';
import { LGraph, LGraphNode, LiteGraph } from 'litegraph.js';
import 'litegraph.js/css/litegraph.css';
import { initializeGraph } from './render';
import { LitegraphLink, LitegraphNode } from '@fbp/litegraph';

interface FlowGraphProps {
  nodeDefinitions?: (() => void)[];
  initialGraphData?: any;
}

const FlowGraph: React.FC<FlowGraphProps> = ({ nodeDefinitions = [], initialGraphData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const graphRef = useRef<LGraph | null>(null);

  useEffect(() => {
    // Register node definitions
    nodeDefinitions.forEach(registerNode => registerNode());

    // Initialize the graph
    const graph = initializeGraph(canvasRef.current);
    graphRef.current = graph;

    // Load initial graph data if provided
    if (initialGraphData) {
      graphRef.current?.configure(initialGraphData);
    }

    // Clean up on unmount
    return () => {
      if (graphRef.current) {
        graphRef.current.stop();
      }
    };
  }, [nodeDefinitions, initialGraphData]);

  const serialize = (graph: LGraph) => {
    const serialized = graph.serialize();
  
    // Transform nodes to match the LitegraphNode interface
    // @ts-ignore
    const newNodes: LitegraphNode[] = serialized.nodes.map(node => ({
      id: node.id,
      type: node.type,
      title: node.title,
      pos: [node.pos[0], node.pos[1]],
      outputs: node.outputs ? node.outputs.map(output => ({
        name: output.name,
        type: output.type,
        links: output.links || []
      })) : [],
      inputs: node.inputs ? node.inputs.map(input => ({
        name: input.name,
        type: input.type,
        link: input.link || null
      })) : [],
      value: node.properties ? node.properties.numValue : undefined  // Adjust according to your property structure
    }));
  
    // Simplify links to match the LitegraphLink interface
    const newLinks: LitegraphLink[] = serialized.links.map(link => ({
      id: link[0],
      origin_id: link[1],
      origin_slot: link[2],
      target_id: link[3],
      target_slot: link[4]
    }));
  
    // Reassign nodes and links to the serialized object
    // @ts-ignore
    serialized.nodes = newNodes;
    // @ts-ignore
    serialized.links = newLinks;
    
    // Clean up unwanted properties
    // @ts-ignore
    delete serialized.version;
    // @ts-ignore
    delete serialized.config;
    // @ts-ignore
    delete serialized.last_node_id;
    // @ts-ignore
    delete serialized.last_link_id;
    // @ts-ignore
    delete serialized.extra;
  
    // Optional: Console log the new serialized format
    console.log(JSON.stringify(serialized, null, 2));
  
    return serialized;  // If you need to use the serialized data outside of this function
  };

  const serialize2 = (graph: LGraph) => {
    const serialized = graph.serialize();
    const newNodes = serialized.nodes.map(node=>{
      return {
        ...node,
        pos: [node.pos['0'], node.pos['1']],
        size: [node.size['0'], node.size['1']]
      }
    })
    // @ts-ignore
    const nodes: LGraphNode[] = graph._nodes;
    nodes.forEach(node=>{
      // console.log(JSON.stringify(node.serialize()))
    })
    // @ts-ignore
    serialized.nodes = newNodes;
    // @ts-ignore
    delete serialized.version;
    // @ts-ignore
    delete serialized.config;
    // @ts-ignore
    delete serialized.last_node_id;
    // @ts-ignore
    delete serialized.last_link_id;
    // @ts-ignore
    delete serialized.extra;
    console.log(JSON.stringify(serialized, null, 2));
  };

  const handleSaveButtonClick = () => {
    if (graphRef.current) {
      console.log('can save')
      serialize(graphRef.current);
    } else {
      console.log('cannot save')
    }
  };

  return (
    <div>
      sdf
      {/* Button to call deserialize */}
      <button onClick={handleSaveButtonClick}>Save</button>
      <canvas ref={canvasRef} width="1024" height="720" style={{ border: '1px solid' }}></canvas>
    </div>
  );
};

export default FlowGraph;
