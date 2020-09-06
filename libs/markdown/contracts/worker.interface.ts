export interface PrismOptions {
  languageMap: {[key: string]: string};
  languageFileType: string;
  assetPath: string;
  /**
   * Checks / highlights inner codes
   */
  highlightMarkdownCode?: boolean;

  additionalPluginPaths?: string[];
}

export interface WorkerOptions {
  prism: PrismOptions;
}


export interface PrismWorker {
  name: string;
  initPrism(options: PrismOptions);
  highlight(code: string, lang: string): Promise<string>;
}

export interface MarkdownWorker extends PrismWorker {
  name: string;
  init(options: WorkerOptions);
  compile(str: string): string|Promise<string>;
}

export interface MarkdownServiceOptions {
  getWorker: () => Worker;
  options?: WorkerOptions;
  mermaidPath?: string;
  mermaidOptions?: any;
}

export interface PrismServiceOptions {
  getWorker: () => Worker;
  options?: PrismOptions;
}
