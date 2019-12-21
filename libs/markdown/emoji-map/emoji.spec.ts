const { colonToUnicode } = require('./colonToUnicode');

describe('emoji tests', () => {
  it('convert unicodeStringValue to unicodeChar', () => {
     expect(colonToUnicode('1f44d')).toBe('👍');
  });
});
