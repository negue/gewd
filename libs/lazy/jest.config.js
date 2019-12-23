module.exports = {
  name: 'lazy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lazy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
