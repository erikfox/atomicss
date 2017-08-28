/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/display

  Tests are used to discover what export object should be.
*/

import deepEqual from 'deep-equal';
import display from './display';
import { getEnumeratedValues } from './utils';

const displayOutsideValues = ['block', 'inline', 'run-in'];

const displayInsideValues = [
  'flow',
  'flow-root',
  'table',
  'flex',
  'grid',
  'ruby',
  'subgrid',
];

const displayOutsidePlusInsideValues = displayOutsideValues.reduce(
  (arr, outsideValue) =>
    arr.concat(
      displayInsideValues.map(insideValue => `${outsideValue} ${insideValue}`)
    ),
  []
);

const displayListItemValues = displayOutsidePlusInsideValues
  .map(
    displayOutsidePlusInsideValue =>
      `list-item ${displayOutsidePlusInsideValue}`
  )
  .concat(['list-item']);

const displayInternalValues = [
  'table-row-group',
  'table-header-group',
  'table-footer-group',
  'table-row',
  'table-cell',
  'table-column-group',
  'table-column',
  'table-caption',
  'ruby-base',
  'ruby-text',
  'ruby-base-container',
  'ruby-text-container',
];

const displayBoxValues = ['contents', 'none'];

const displayLegacyValues = [
  'inline-block',
  'inline-table',
  'inline-flex',
  'inline-grid',
];

const possibleValues = [
  ...displayOutsideValues,
  ...displayInsideValues,
  ...displayOutsidePlusInsideValues,
  ...displayListItemValues,
  ...displayInternalValues,
  ...displayBoxValues,
  ...displayLegacyValues,
];

const exportObject = {
  ...getEnumeratedValues('display', possibleValues),
};

describe('display', () => {
  test('matches export', () => {
    const deepMatch = deepEqual(display, exportObject);
    expect(deepMatch).toBeTruthy();
  });
});
