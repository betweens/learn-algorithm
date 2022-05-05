/* 
* 斐波拉契数列测试
*/

import fibonacci from "../src/lessons/lesson-09";

describe('fibonacci', () => {
  test('should be a function', () => {

  });
  test('should return 0 when n is 0', () => {
    expect(fibonacci(0)).toBe(0);
  })
  test('should return 1 when n is 1', () => {
    expect(fibonacci(1)).toBe(1);
  })
  test('should return 10 when n is 55', () => {
    expect(fibonacci(10)).toBe(55);
  })
});
