import { graph  } from '../__fixtures__/graph';
import { lightgraph } from '../__fixtures__/lightgraph';
import { convertToLitegraph } from '../src/convert';

it('convertToLitegraph', () => {
  const result = convertToLitegraph(graph);
  expect(result).toEqual(lightgraph);
});