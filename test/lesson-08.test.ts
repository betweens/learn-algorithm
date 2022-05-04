/* 
* 二叉树测试用例
*/
import { ITreeNode, getKthValue } from '../src/lessons/lesson-08';

describe('二叉树测试用例', () => {

  const binaryTree: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left:{
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 4,
        left: null,
        right: null
      }
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 8,
        left: null,
        right: null
      }
    }
  }

  test('前序遍历', () => {
    const arr: number[] = [];
    expect(getKthValue(binaryTree, 1)).toBe(2);
  });

  test('前序遍历超出范围', () => {
    const arr: number[] = [];
    expect(getKthValue(binaryTree, 1000)).toBeNull();
  });
});
