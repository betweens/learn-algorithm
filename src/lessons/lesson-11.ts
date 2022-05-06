/*
 * 找到连续字符的长度 
 */
interface IRes {
  char: string
  length: number
}

const findContinuousCharacters = (str: string): IRes => {
  const result: IRes = {
    char: '',
    length: 0,
  };
  let len = str.length;
  if (len === 0) return result;
  let i =0;
  let j = 0;
  let charLen = 0;
  for(; i< len; i++) {
    if (str[i] === str[j]) {
      charLen++;
    }
    if (str[i] !== str[j] || i === len - 1) {
      if (charLen > result.length) {
        result.char = str[j];
        result.length = charLen;
      }
      charLen = 0;
      if (i < len - 1) {
        j = i;
        i--;
      };
    }
  }
  return result;
}

export default findContinuousCharacters;