import camelCase from 'camel-case';

export const globalPropValues = ['inherit', 'initial', 'unset'];

export const getEnumeratedValues = (ruleName, possibleValues) =>
  possibleValues.concat(globalPropValues).reduce(
    (rules, value) => ({
      ...rules,
      [`${camelCase(value)}`]: { [ruleName]: value },
    }),
    {}
  );
