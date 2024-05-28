import { LGraphNode, LiteGraph } from 'litegraph.js';

export class MultNode extends LGraphNode {
  constructor() {
    super();
    this.addInput('a', 'number');
    this.addInput('b', 'number');
    this.addOutput('sum', 'number');
  }

  onExecute() {
    const A = this.getInputData(0) || 0;
    const B = this.getInputData(1) || 0;
    this.setOutputData(0, A * B);
  }

  static register() {
    MultNode.title = 'sum';
    LiteGraph.registerNodeType('js/math/mult', MultNode);
  }
}
