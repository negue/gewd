module.exports = {
  name: 'markdown',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/markdown',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
