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

/* 
* 斐波拉契数
import fibonacci from "./lessons/lesson-09";
console.log(fibonacci(9)); 
*/

/* 
* 移动数组o到末尾
import moveZeroes from "./lessons/lesson-10";
console.log(moveZeroes([1, 1, 0, 1, 1, 0]));
*/

/* 
* 找到连续字符的长度 
import findContinuousCharacters from "./lessons/lesson-11";
console.info(findContinuousCharacters('aabbbbbbbeeee112'));
console.info(findContinuousCharacters('abcd'));
console.info(findContinuousCharacters('aaaaa'));
*/

/* 
 * 快速排序
 */

// import quickSort from "./lessons/lesson-12";
// console.log(quickSort([3, 2, 1, 5, 4]));

// 查找回文字符串
// import findPalindrome from "./lessons/lesson-13";
// console.log(findPalindrome(50));

// 字符串前缀匹配
// import formatNumbersThousandths from "./lessons/lesson-14";
// console.info(formatNumbersThousandths(1234));

// 切换字符大小写
// import swtichLetterCase from "./lessons/lesson-15";
// console.info('Hello World', swtichLetterCase('Hello World'));

// const ajax = (url) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, false);
//   request.onreadystatechange = (respones) => {
//     console.log(respones);
//   };
//   request.send(null);
// }

// // 防抖函数
// function debounce(func, wait = 1000) {
//   let timeout;
//   return function () {
//     if(timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, arguments);
//       timeout = null;
//     }, wait);
//     })
//   }
// }