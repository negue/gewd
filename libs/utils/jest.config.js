const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  rootDir: '../../',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/libs/utils/tsconfig.spec.json',
    },
  },
};
