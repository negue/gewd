// test regex with "i" - "g" only works on a second try?!
export const emojiRegex = new RegExp(/:([a-zA-Z0-9+\-_]+):/i);
// replace regex with "g" to catch em all
export const emojiReplaceRegex = new RegExp(/:([a-zA-Z0-9+\-_]+):/g);
export const mermaidRegex = new RegExp(/^(sequenceDiagram|graph|gantt|classDiagram|stateDiagram|pie|git)/);

interface EmojiMapType {
  [key: string]: string;
}

const emojiCache: EmojiMapType = {};

export function checkAndReplaceToUnicodeChar(rawMarkdown: string,
                                             EMOJI_MAP: EmojiMapType,
                                             convertKeyToUnicode: (str: string) => string,
                                             wrapEmoji: (emoji: string, colonKey: string) => string = (emoji) => emoji) {
  return rawMarkdown.replace(emojiReplaceRegex, (source, colonValue) => {
    // not exists, just return it
    if (!EMOJI_MAP[colonValue]) {
      return source;
    }

    let converted = '';

    if (emojiCache[colonValue]) {
      converted = emojiCache[colonValue];
    } else {
      const emojiUnicodeStr = EMOJI_MAP[colonValue];
      converted = convertKeyToUnicode(emojiUnicodeStr);

      emojiCache[colonValue] = converted;
    }

    return wrapEmoji(converted, colonValue);
  });
}

export const wrapEmojiInSpan =  (converted: string, colonValue: string) => `<span class="emoji ${colonValue}">${converted}</span>`;
