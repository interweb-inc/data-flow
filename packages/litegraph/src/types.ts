
export interface Litegraph {
  nodes: LitegraphNode[];
  links: LitegraphLink[];
}

export interface LitegraphNode {
  id: number;
  type: string;
  title: string;
  pos: [number, number]
  value?: any;
  outputs?: LitegraphNodeOutput[];
  inputs?: LitegraphNodeInput[];
}

export interface LitegraphNodeOutput {
  name: string;
  type: string;
  links: number[];
}

export interface LitegraphNodeInput {
  name: string;
  type: string;
  link: number | null;
}

export interface LitegraphLink {
  id: number;
  origin_id: number;
  origin_slot: number;
  target_id: number;
  target_slot: number;
}
