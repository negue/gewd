import { Lazy } from './lazy';

describe('Lazy<T>', () => {
  it('triggers the promise', async () => {
    let triggered = 0;
    const lazy = Lazy.create(() => Promise.resolve(++triggered));

    const lazyValue = await lazy.getValue();

    expect(lazyValue).toBe(triggered);
  })

});
