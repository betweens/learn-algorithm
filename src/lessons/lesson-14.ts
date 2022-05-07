/* 
 * 格式化数字千分位 
 */

const formatNumbersThousandths = (num: number):string => {
  let res = '';
  const str = Math.floor(num).toString();
  const len = str.length;
  if (len < 4) return str;
  for (let i = len - 1; i >= 0; i--) {
    const j = len - i;
    if (j % 3 === 0 && i !== 0) {
      res = ',' + str[i] + res;
    } else {
      res = str[i] + res;
    }
  }
  return res;
}

export default formatNumbersThousandths;
