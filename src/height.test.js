/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/height

  Tests are used to discover what export object should be.
*/

import deepEqual from 'deep-equal';
import { height } from './height';
import { getEnumeratedValues } from './utils';

const possibleValues = [
  'border-box',
  'content-box',
  'auto',
  'fill',
  'max-content',
  'min-content',
  'available',
  'fit-content',
];

const exportObject = {
  ...getEnumeratedValues('display', possibleValues),
};

describe('height', () => {
  test('matches export', () => {
    const deepMatch = deepEqual(height, exportObject);
    expect(deepMatch).toBeTruthy();
  });
});
