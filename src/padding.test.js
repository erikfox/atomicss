/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/padding

  Tests are used to discover what export object should be.
*/

import padding from './padding';
import { getScaledEmValues, getEnumeratedValues } from './utils';

const allSidesValues = getScaledEmValues('padding');

const singleSideValues = {
  top: getScaledEmValues('padding-top'),
  bottom: getScaledEmValues('padding-bottom'),
  left: getScaledEmValues('padding-left'),
  right: getScaledEmValues('padding-right'),
};

const exportObject = {
  ...allSidesValues,
  ...singleSideValues,
  ...getEnumeratedValues('padding'),
};

describe('padding', () => {
  test('matches export', () => {
    expect(exportObject).toMatchObject(padding);
  });
});
