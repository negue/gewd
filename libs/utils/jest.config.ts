/* eslint-disable */
const baseConfig = require('../../jest.config');

export default {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/libs/utils/tsconfig.spec.json',
    },
  },
};
