import { LGraphNode, LiteGraph } from 'litegraph.js';

export class NumberNode extends LGraphNode {
  constructor() {
    super();
    this.addOutput('num', 'number');
    this.addProperty('numValue', 0, 'number');
    this.addWidget("slider", "Number", 0, (val) => this.setProperty('numValue', val), { min: 0, max: 100, step: 1, precision: 3 });
  }
  onExecute() {
    this.setOutputData(0, this.properties['numValue']);
  }

  static register() {
    NumberNode.title = 'Number';
    LiteGraph.registerNodeType('js/const/number', NumberNode);
  }
}

// function Time() {
//   this.addOutput("in ms", "number");
//   this.addOutput("in sec", "number");
// }

// Time.title = "Time";
// Time.desc = "Time";

// Time.prototype.onExecute = function() {
//   this.setOutputData(0, this.graph.globaltime * 1000);
//   this.setOutputData(1, this.graph.globaltime);
// };

// LiteGraph.registerNodeType("basic/time", Time);