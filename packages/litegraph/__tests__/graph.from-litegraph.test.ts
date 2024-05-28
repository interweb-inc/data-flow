import { graph  } from '../__fixtures__/graph';
import { litegraph } from '../__fixtures__/litegraph';
import { convertFromLitegraph } from '../src/convert';

it('convertFromLitegraph', () => {
  const result = convertFromLitegraph(litegraph);
  expect(result).toEqual(graph);
});
