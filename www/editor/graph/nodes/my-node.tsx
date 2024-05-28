import { LGraphNode, LiteGraph } from 'litegraph.js';

export class AddNode extends LGraphNode {
  constructor() {
    super();
    this.addInput('A', 'number');
    this.addInput('B', 'number');
    this.addOutput('Sum', 'number');
    this.properties = { precision: 1 };
  }

  onExecute() {
    const A = this.getInputData(0) || 0;
    const B = this.getInputData(1) || 0;
    this.setOutputData(0, A + B);
  }

  static register() {
    AddNode.title = 'Sum';
    LiteGraph.registerNodeType('js/math/add', AddNode);
  }
}
