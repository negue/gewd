export interface MarkdownWorker {
  name: string;
  compile(str: string): string|Promise<string>;
}
