const nxPreset = require('@nrwl/jest/preset').default;
module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@gewd/utils/(.*)': '<rootDir>/libs/utils/$1',
    '@gewd/markdown/(.*)': '<rootDir>/libs/markdown/$1',
  },
  rootDir: __dirname,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
