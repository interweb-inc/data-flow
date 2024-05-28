import { graph  } from '../__fixtures__/graph';
import { lightgraph } from '../__fixtures__/lightgraph';
import { convertFromLitegraph } from '../src/convert';

it('convertFromLitegraph', () => {
  const result = convertFromLitegraph(lightgraph);
  expect(result).toEqual(graph);
});