const nxPreset = require('@nx/jest/preset').default;
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
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
};
