export class Lazy<T> {
  private cachedPromise: Promise<T>;

  static create<T>(loader: () => Promise<T>): Lazy<T> {
    return new Lazy<T>(loader);
  }

  constructor (private loader: () => Promise<T>) {

  }

  public getValue (): Promise<T> {
    if (this.cachedPromise) {
      return this.cachedPromise;
    }

    return this.cachedPromise = this.loader();
  }

  public reset() {
    this.cachedPromise = null;
  }
}
