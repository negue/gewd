import { PrismOptions } from './worker.interface';

export const DEFAULT_PRISM_OPTIONS: PrismOptions = {
  assetPath: './assets/prism/',
  languageFileType: 'js',
  languageMap: {
    ts: 'typescript'
  }
};

// https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
export const DEFAULT_MERMAID_OPTIONS = {
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  },
  startOnLoad: false,
  theme: 'neutral',
  themeCSS:'.label { font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif !important; font-size: 15px; } .label foreignObject { overflow: visible; }'
};
