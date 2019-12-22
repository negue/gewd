import { InjectionToken } from '@angular/core';

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

export interface GetWorkerPayload {
  getWorker: () => Worker;
  options?: WorkerOptions;
}

export const DEFAULT_PRISM_OPTIONS: PrismOptions = {
  assetPath: '/assets/prism/',
  languageFileType: 'js',
  languageMap: {
    ts: 'typescript'
  }
};

export const LoadMarkdownWorkerInjectorToken = new InjectionToken<GetWorkerPayload>('LoadMarkdownWorkerInjectorToken');
export const LoadMermaidInjectorToken = new InjectionToken<string>('LoadMermaidInjectorToken');
