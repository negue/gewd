module.exports = {
  name: 'ng-utils',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-utils',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
