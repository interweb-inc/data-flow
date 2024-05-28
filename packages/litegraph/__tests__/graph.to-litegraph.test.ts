import { graph as simple} from '../__fixtures__/graph';
import { litegraph } from '../__fixtures__/litegraph';
import { graph } from '../__fixtures__/math';
import { convertToLitegraph } from '../src/convert';

it('convertToLitegraph', () => {
  const result = convertToLitegraph(simple);
  expect(result).toEqual(litegraph);
});

it('convertToLitegraph', () => {
  const result = convertToLitegraph(graph);
  expect(result).toMatchSnapshot();
});