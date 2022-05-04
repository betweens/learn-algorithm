import { createDirectionLinkList, reverseLinkList } from '../src/lessons/lesson-04';

describe('createDirectionLinkList', () => {
  test('should return a link list', () => {
    const linkNode = createDirectionLinkList([1, 2, 3]);
    expect(linkNode).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3
        }
      }
    });
  });
});

describe('reverseLinkList', () => {
  test('should return a link list', () => {
    const linkNode = createDirectionLinkList([1, 2, 3]);
    expect(reverseLinkList(linkNode)).toEqual({
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1
        }
      }
    });
  });
});
