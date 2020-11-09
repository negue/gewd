import { PrismOptions } from '@gewd/markdown/contracts';
import { Lazy } from '@gewd/markdown/utils';

const markdownCodeRegex = /```([a-z].*)\n([\s\S]*?)```/g;

/* Prism Config/Importer */
(self as any).Prism = {
  disableWorkerMessageHandler: true
};

let prismInstance: any = null;

function loadLanguage (
  lang:string,
  prismOption: PrismOptions,
  importScripts: (str) => void
) {
  // if language not exist import-it :)
  if (lang && !prismInstance.languages[lang]) {
    const langToLoad = prismOption.languageMap[lang] || lang;

    const fileToLoad = `${prismOption.assetPath}prism-${langToLoad}.${prismOption.languageFileType}`;

    try {
      // sync load once
      importScripts(fileToLoad);
    } catch (ex) {
      console.error(`Could not load: ${fileToLoad}`);
    }
  }

  return prismInstance.languages[lang] || {};
}

export async function highlightCode(
  prismInstanceAsync: Lazy<any>,
  lang:string,
  code: string,
  prismOption: PrismOptions,
  importScripts: (str) => void
): Promise<string> {
  if (!prismInstance) {
    prismInstance = await prismInstanceAsync.getValue();

    // Initialize PrismPlugins
    if (prismOption.additionalPluginPaths) {
      for (const pathToInclude of prismOption.additionalPluginPaths) {
        importScripts(pathToInclude);
      }
    }
  }

  const langConfig = loadLanguage(lang, prismOption, importScripts);

  const foundCodeParts: {
    [key: string]: {
      replacedPart: string;
      substring: string;
      subLang: string;
      subCode: string;
      highlight: string;
    }
  } = {};
  let foundCodePartIndex = 0;

  const highlightSubCodes = prismOption.highlightMarkdownCode && lang === 'markdown';

 // replace subcodes with highlights
  if (highlightSubCodes) {
    code = code.replace(markdownCodeRegex, (substring, subLang: string, subCode: string) => {
      if (subLang.startsWith('graph ')) {
        return substring;
      }

      subLang = subLang.trim();

      const subLangConfig = loadLanguage(subLang, prismOption, importScripts);

      // Its easier to replace it here,
      // instead of trying to replace it after everything is in
      const replacedPart = `someText\$${foundCodePartIndex++}txeTemos`;

      foundCodeParts[replacedPart] = {
        replacedPart,
        substring,
        subLang,
        subCode,
        highlight: prismInstance.highlight(subCode, subLangConfig, subLang)
      };

      return replacedPart;
    })
  }

  let highlighed = prismInstance.highlight(code, langConfig, lang);

  // replace subcodes with highlights
  if (highlightSubCodes) {
    for (const replacedPart of Object.values(foundCodeParts)) {
      // to leave the code prefix/suffix around the highlight code
      const highlightWithCode = replacedPart.substring.replace(replacedPart.subCode, replacedPart.highlight);

      highlighed = highlighed.replace(replacedPart.replacedPart, highlightWithCode)
    }
  }
  // return it
  return highlighed;
}
