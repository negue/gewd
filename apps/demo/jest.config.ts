/* eslint-disable */
const baseConfig = require('../../jest.config');

export default {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/apps/demo/tsconfig.spec.json',
    },
  },
};
