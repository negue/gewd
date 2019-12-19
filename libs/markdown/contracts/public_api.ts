import { InjectionToken } from '@angular/core';

export * from './worker.interface';

export interface GetWorkerPayload {
  getWorker: () => Worker;
}

export const LoadMarkdownWorkerInjectorToken = new InjectionToken<GetWorkerPayload>('LoadMarkdownWorkerInjectorToken');
export const LoadMermaidInjectorToken = new InjectionToken<string>('LoadMermaidInjectorToken');
