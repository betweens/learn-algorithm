/* 
* 快速排序
*/

import quickSort from '../src/lessons/lesson-12';

describe('快速排序', () => {
  test('should quick sort', () => {
    const arr = [5, 2, 3, 1, 4];
    const result = quickSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('arr is empty', () => {
    const arr = [];
    const result = quickSort(arr);
    expect(result).toEqual([]);
  })

  test('arr have repeat', () => {
    const arr = [1, 2, 2, 4, 5, 5];
    const result = quickSort(arr);
    expect(result).toEqual([1, 2, 2, 4, 5, 5]);
  })
})