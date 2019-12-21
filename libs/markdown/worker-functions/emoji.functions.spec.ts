import { checkAndReplaceToUnicodeChar, emojiRegex } from './emoji.functions';

describe('emoji.functions', () => {
  describe('regex', () => {
    it('should return true if emoji-keys exists in string', () => {
      expect(emojiRegex.test(':some: :+1: :other:')).toBe(true);
    });

    it('should return false if no emoji exists in string', () => {
      expect(emojiRegex.test(':some  other:')).toBe(false);
    });
  });

  describe('checkAndReplaceToUnicodeChar', () => {
    const EMOJI_MAP = {
      'taurus': '2649',
      'taxi': '1f695',
      'tea': '1f375'
    };

    function replacerMock (str: string) {
      return str;
    }

    it('should not throw errors if emoji-key not exists', () => {
       const markdown = ':unknown:';

       expect(checkAndReplaceToUnicodeChar(markdown, EMOJI_MAP, replacerMock)).toBe(':unknown:')
    });

    it('should replace emoji-key to unicode chars', () => {
      const markdown = ':taurus: :taxi:';

      expect(checkAndReplaceToUnicodeChar(markdown, EMOJI_MAP, replacerMock))
        .toBe('2649 1f695');
    });
  });
});
