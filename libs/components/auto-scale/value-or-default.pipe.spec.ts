import { ValueOrDefaultPipe } from './value-or-default.pipe';

describe('ValueOrDefaultPipe', () => {
  it('create an instance', () => {
    const pipe = new ValueOrDefaultPipe();
    expect(pipe).toBeTruthy();
  });
});
