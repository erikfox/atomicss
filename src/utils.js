import camelCase from 'camel-case';

export const globalPropValues = ['inherit', 'initial', 'unset'];

export const getEnumeratedValues = (ruleName, possibleValues = []) =>
  globalPropValues.concat(possibleValues).reduce(
    (rules, value) => ({
      ...rules,
      [camelCase(value)]: { [ruleName]: value },
    }),
    {}
  );

export const emScaleFactors = [
  ['smallest', 0.25],
  ['small', 0.5],
  ['medium', 1],
  ['large', 2],
  ['largest', 4],
];

export const getScaledEmValues = (ruleName, possibleValues) =>
  emScaleFactors.reduce(
    (rules, [scale, factor]) => ({
      ...rules,
      [camelCase(scale)]: { [ruleName]: `${factor}em` },
    }),
    getEnumeratedValues(ruleName, possibleValues)
  );
