/* 
 * 切换字母大小写
 */

const swtichLetterCase = (str: string): string => {
  const len = str.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    const char = str[i];
    if (char.toUpperCase() === char.toLowerCase()) {
      result += char;
    } else {
      result += char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
    }
  }
  return result;
};

export default swtichLetterCase;
