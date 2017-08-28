/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/margin

  Tests are used to discover what export object should be.
*/

import deepEqual from 'deep-equal';
import margin from './margin';
import { getScaledEmValues } from './utils';

const allSidesValues = getScaledEmValues('margin', ['auto']);

const singleSideValues = {
  top: getScaledEmValues('margin-top', ['auto']),
  bottom: getScaledEmValues('margin-bottom', ['auto']),
  left: getScaledEmValues('margin-left', ['auto']),
  right: getScaledEmValues('margin-right', ['auto']),
};

const exportObject = {
  ...allSidesValues,
  ...singleSideValues,
};

describe('margin', () => {
  test('matches export', () => {
    const deepMatch = deepEqual(margin, exportObject);
    expect(deepMatch).toBeTruthy();
  });
});
