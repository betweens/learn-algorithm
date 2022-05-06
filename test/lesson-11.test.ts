/*
 * 找到连续字符的长度 
 */

import findContinuousCharacters from '../src/lessons/lesson-11';

describe('找到连续字符的长度', () => {
  test('should find continuous characters', () => {
    const str = 'qqaaaeeee1122';
    expect(findContinuousCharacters(str)).toEqual({
      char: 'e',
      length: 4,
    })
  })

  test('无限续字符', () => {
    const str = 'abcd';
    expect(findContinuousCharacters(str)).toEqual({
      char: 'a',
      length: 1,
    })
  })

  test('只有一种重复字符', () => {
    const str = 'aaaa';
    expect(findContinuousCharacters(str)).toEqual({
      char: 'a',
      length: 4,
    })
  })

  test('空字符串', () => {
    const str = '';
    expect(findContinuousCharacters(str)).toEqual({
      char: '',
      length: 0,
    })
  })
})