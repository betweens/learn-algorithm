/* 
  import { rotateArr1, rotateArr2 } from './lessons/lesson-01' ; // 计算数组旋转
  console.log(rotateArr1([1, 2, 3, 4, 5, 6, 7], 3));
  console.log(rotateArr2([1, 2, 3, 4, 5, 6, 7], 3)); 
*/

/* i
mport matchBracket from "./lessons/lesson-02";
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

import createDirectionLinkList from "./lessons/lesson-04";

const linkNode = createDirectionLinkList([1, 2, 3]);
console.log(linkNode);