export const emojiRegex = new RegExp(/:([a-zA-Z0-9+\-_]+):/g);
export const mermaidRegex = new RegExp(/^(sequenceDiagram|graph|gantt|classDiagram|stateDiagram|stateDiagram-v2|pie|git|erDiagram|journey|requirementDiagram|gitGraph)/);

interface EmojiMapType {
  [key: string]: string;
}

const emojiCache: EmojiMapType = {};

export function checkAndReplaceToUnicodeChar(rawMarkdown: string,
                                             EMOJI_MAP: EmojiMapType,
                                             convertKeyToUnicode: (str: string) => string,
                                             cache = false): string  {
  return rawMarkdown.replace(emojiRegex, (source, colonValue) =>  {
    // not exists, just return it
    if (!EMOJI_MAP[colonValue]) {
      return source;
    }

    if (cache && emojiCache[colonValue]) {
      return emojiCache[colonValue];
    }

    const emojiUnicodeStr = EMOJI_MAP[colonValue];

    const converted = convertKeyToUnicode(emojiUnicodeStr);

    if (cache) {
      return emojiCache[colonValue] = converted;
    }

    return converted;
  });
}
