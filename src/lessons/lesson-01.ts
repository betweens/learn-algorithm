
export const rotateArr1 = (arr: number[], k: number): number[] => {
  const len = arr.length;
  if (k === 0 || len === 0) {
    return arr;
  }
  const kk = k % len;
  for (let i = 0; i < kk; i++) {
    const last = arr.pop();
    last && arr.unshift(last);
  }
  return arr;
}

export const rotateArr2 = (arr: number[], k: number): number[] => {
  const len = arr.length;
  if (k === 0 || len === 0) {
    return arr;
  }
  const kk = k % len;
  const arr1 = arr.slice(0, len - kk);
  const arr2 = arr.slice(len - kk);
  return arr2.concat(arr1);
}
