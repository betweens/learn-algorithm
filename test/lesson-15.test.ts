import swtichLetterCase from '../src/lessons/lesson-15';

describe('swtichLetterCase', () => {
  test('should return "Hello World"', () => {
    expect(swtichLetterCase('Hello World')).toBe('hELLO wORLD');
  })
});
