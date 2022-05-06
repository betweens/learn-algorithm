/* 
* 移动数组0到末尾
* ex: [1, 1, 0, 1, 1, 0]
*/

const moveZeroes = (nums: number[]): number[] => {
  const len = nums.length;
  if (len === 0) return [];
  let j = -1;
  for(let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      if (j < 0) j = i;
    }
    if (nums[i] !== 0 && j >= 0) {
      const n = nums[i];
      nums[i] = nums[j];
      nums[j] = n;
      j++;
    }
  }
  return nums;
}

export default moveZeroes;
