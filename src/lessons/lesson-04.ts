/* 
@descript 创建单项列表
@author hmf
*/

interface LinkNode {
  value: number,
  next?: LinkNode
}

const createDirectionLinkList = (arr: number[]): LinkNode => {
  let head: LinkNode = {
    value: arr[0]
  };
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = {
      value: arr[i]
    };
    cur = cur.next;
  }
  return head;
}

export default createDirectionLinkList;