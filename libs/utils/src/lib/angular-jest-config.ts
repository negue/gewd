/**
 *
 * @param {string} libName
 * @param {('libs'|'apps')} type
 * @param {Record<string, unknown>} overrides
 * @returns JestConfig
 */
export function createAngularJestConfig (
  libName: string,
  /** @param   */
  type: 'libs'|'apps',
  overrides = {}
) {
  return {
    coverageDirectory: `../../coverage/${type}/${libName}`,

    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {},
    transform: {
      '^.+.(ts|js|html)$': [
        'jest-preset-angular',
        {
          stringifyContentPathRegex: '\\.(html|svg)$',

          tsconfig: '<rootDir>/tsconfig.spec.json'
        }
      ]
    },
    displayName: libName,
    snapshotSerializers: [
      'jest-preset-angular/build/serializers/no-ng-attributes',
      'jest-preset-angular/build/serializers/ng-snapshot',
      'jest-preset-angular/build/serializers/html-comment'
    ],
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
    preset: '../../jest.preset.js',
    ...overrides
  };
}
