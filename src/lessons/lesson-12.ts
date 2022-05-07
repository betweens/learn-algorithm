/* 
 * 快速排序
 */
const quickSort = (arr: number[]): number[] => {
  const len = arr.length;
  if (len <= 1) return arr;
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  const mindIndex = Math.floor(len / 2);
  const mindValue= arr.slice(mindIndex, mindIndex + 1)[0];
  for (let i = 0; i < len; i++) {
    if (i === mindIndex) continue;
    if (arr[i] < mindValue) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(mindValue, quickSort(rightArr));
}

export default quickSort;
