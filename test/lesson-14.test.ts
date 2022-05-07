import formatNumbersThousandths from '../src/lessons/lesson-14';

describe('数字格式化千分位', () => {
  test('should format numbers thousandths', () => {
    const num = 123456789;
    const result = formatNumbersThousandths(num);
    expect(result).toBe('123,456,789');
  })
});
