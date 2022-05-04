/* 
 *
 * 二分法查找ß
 * 
*/

const binarySearch = (arr:number[], target:number): number => {
  const length = arr.length;
  if (length === 0) return -1;
  let startIndex = 0;
  let endIndex = length -1;
  while(startIndex <= endIndex) {
    const centerIndex = Math.floor((startIndex + endIndex) / 2);
    const middleValue = arr[centerIndex];
    if (middleValue === target) {
      return centerIndex;
    } else if (middleValue > target) {
      endIndex = centerIndex - 1;
    } else {
      startIndex = centerIndex + 1;
    }
  }
  return -1;
}

export { binarySearch }