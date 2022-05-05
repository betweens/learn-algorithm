/* 
  import { rotateArr1, rotateArr2 } from './lessons/lesson-01' ; // 计算数组旋转
  console.log(rotateArr1([1, 2, 3, 4, 5, 6, 7], 3));
  console.log(rotateArr2([1, 2, 3, 4, 5, 6, 7], 3)); 
*/

/* 
import matchBracket from "./lessons/lesson-02";
console.log(matchBracket("{[(){}))]}"));
 */

/* import MyQueue from "./lessons/lesson-03";

const queue = new MyQueue();
queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.delete());
console.log(queue.length);
console.log(queue); */

/* 
// 反转单项链表
import { createDirectionLinkList, reverseLinkList } from "./lessons/lesson-04";

const linkNode = createDirectionLinkList([1, 2, 3]);
console.log("linkNode", linkNode);
const reverseLinkNode = reverseLinkList(linkNode);
console.log("reverseLinkNode", reverseLinkNode); 
*/

/* 
import QueueWithList from "./lessons/lesson-05";
const q = new QueueWithList();
q.add(1);
q.add(2);
q.add(3);
console.log(q.deleteNode());
console.log(q.length);
*/

/* 
import { binarySearch } from "./lessons/lesson-06";
const arr = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(arr, 20));
 */

/* 
// 查找两数之和
import findTwoNumbers from "./lessons/lesson-07";
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(findTwoNumbers(arr, 3));
*/

/* 
// 二叉树的中序遍历查找
import { ITreeNode, getKthValue } from './lessons/lesson-08';
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
console.log(getKthValue(binaryTree, 1)); 
*/

import fibonacci from "./lessons/lesson-09";
console.log(fibonacci(9));