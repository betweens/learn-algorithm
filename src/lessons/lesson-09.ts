/*
* 斐波拉契数 
*/

const fibonacci = (n: number): number => {
  if (n === 0 || n < 0) return 0;
  if (n === 1) return 1;
  let n1 = 0; // 记录n-1值
  let n2 = 1; // 记录n-2值
  let result = 0; // 记录结果
  for (let i = 2; i <= n; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  return result;
}

export default fibonacci;
