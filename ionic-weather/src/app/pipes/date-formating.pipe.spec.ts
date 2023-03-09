import { DateFormatingPipe } from './date-formating.pipe';

describe('DateFormatingPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatingPipe();
    expect(pipe).toBeTruthy();
  });
});
