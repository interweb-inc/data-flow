export interface Metadata {
  x?: number;
  y?: number;
  description?: string;
}
export interface EdgeEndpoint {
  node: string;
  port: string;
}
export interface Value {
  name: string;
  type: string;
  value?: any;
}
export interface Group {
  name: string;
  nodes: string[];
  meta?: Metadata;
}
export interface Node {
  name: string;
  title: string;
  context: string;
  category: string;
  type: string;
  properties?: Value[];
  inputs?: Value[];
  outputs?: Value[];
  edges?: Edge[];
  nodes?: Node[];
  meta?: Metadata;
}
export interface Edge {
  src: EdgeEndpoint;
  dst: EdgeEndpoint;
}