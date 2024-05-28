import { LGraph, LGraphCanvas, LiteGraph, LGraphNode } from 'litegraph.js';

export function initializeGraph(canvasRef: HTMLCanvasElement | null): LGraph {
  const graph = new LGraph();
  const canvas = new LGraphCanvas(canvasRef as HTMLCanvasElement, graph);

  // Example of adding a basic node
  const nodeConst = LiteGraph.createNode('basic/const');
  nodeConst.pos = [200, 200];
  graph.add(nodeConst);
  (nodeConst as any).setValue(4.5);

  // Example of adding a watch node
  const nodeWatch = LiteGraph.createNode('basic/watch');
  nodeWatch.pos = [700, 200];
  graph.add(nodeWatch);

  // Connect the nodes
  nodeConst.connect(0, nodeWatch, 0);

  graph.start();
  // @ts-ignore
  window.graph = graph;
  return graph;
}
