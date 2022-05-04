/* 
 * 两数之和
 */

const findTwoNumbers = (arr: number[], target: number): number[] => {
  const res: number[] = [];
  const len = arr.length;
  if(len === 0) return res;
  let i = 0;
  let j = len - 1;
  while(i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;
    if (sum === target) {
      res.push(n1, n2);
      break;
    }
    if (sum > target) {
      j--;
    }
    if (sum < target) { 
      i++;
    }
  }
  return res;
}

export default findTwoNumbers;