import findTwoNumbers from '../src/lessons/lesson-07';

describe('两数之和', () => {
  test('should find two numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = findTwoNumbers(arr, 3);
    expect(result).toEqual([1, 2]);
  });

  test('If the array guard is empty', () => {
    const arr = [];
    const result = findTwoNumbers(arr, 3);
    expect(result).toEqual([]);
  });

  test('If the target guard is empty', () => {
    const arr = [];
    const result = findTwoNumbers(arr, 30);
    expect(result).toEqual([]);
  });
});
