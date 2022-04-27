interface mapResult {
  [key: string]: string;
}

const matchBracket = (str: string): boolean => {
  const len = str.length;
  if (len === 0) return true;
  const stack: string[] = [];
  const leftBracket = ['(', '[', '{'];
  const rightBracket = [')', ']', '}'];
  const mappingRelation: mapResult = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0; i < len; i++) {
    const char = str[i];
    if (leftBracket.includes(char)) {
      stack.push(char);
    } else if (rightBracket.includes(char)) {
      const last =stack[stack.length - 1];
      if (mappingRelation[char] === last) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export default matchBracket;
