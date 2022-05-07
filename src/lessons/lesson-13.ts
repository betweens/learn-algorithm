/* 
 * 查找回文字符串
 */

const findPalindrome = (max: number): number[] => {
  const res: number[] = [];
  if (max <= 0) return res;
  for(let i = 0; i <= max; i++) {
    let n = i;
    let rev = 0;
    while(n > 0) {
      rev = rev * 10 + n % 10;
      n = Math.floor(n / 10);
    }
    if (i === rev) res.push(i);
  }
  return res;
}

export default findPalindrome;
