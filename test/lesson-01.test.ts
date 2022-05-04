import { rotateArr1, rotateArr2 } from '../src/lessons/lesson-01';

describe('数组旋转算法测试', () => {
  test('should rotate array1', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = rotateArr1(arr, 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  test('should rotate array2', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = rotateArr2(arr, 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
});