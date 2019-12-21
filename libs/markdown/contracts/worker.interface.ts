export interface PrismOptions {
  languageMap: {[key: string]: string};
  languageFileType: string;
  assetPath: string;
}

export interface WorkerOptions {
  prism: PrismOptions;
}

export interface MarkdownWorker {
  name: string;
  init(options: WorkerOptions);
  compile(str: string): string|Promise<string>;
}
