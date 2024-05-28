import React, { useEffect, useRef } from 'react';
import { LGraph, LiteGraph } from 'litegraph.js';
import 'litegraph.js/css/litegraph.css';
import { initializeGraph } from './render';

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
    graphRef.current = initializeGraph(canvasRef.current);

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

  const addCustomNode = () => {
    if (!graphRef.current) return;

    const nodeSum = LiteGraph.createNode('basic/sum');
    nodeSum.pos = [400, 200];
    graphRef.current.add(nodeSum);
  };

  return (
    <div>
      {/* <button onClick={addCustomNode}>Add Custom Node</button> */}
      <canvas ref={canvasRef} width="1024" height="720" style={{ border: '1px solid' }}></canvas>
    </div>
  );
};

export default FlowGraph;
