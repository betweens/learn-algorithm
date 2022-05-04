/* 
*@descript 创建单项列表
*@author hmf
*/

interface LinkNode {
  value: number,
  next?: LinkNode
}

const reverseLinkList = (listNode: LinkNode): LinkNode => {
  let prevNode: LinkNode | undefined = undefined;
  let curNode: LinkNode | undefined = undefined;
  let nextNode: LinkNode | undefined = listNode;
  while (nextNode) { 
    // 删除第一次元素
    if (curNode && !prevNode) {
      delete curNode.next;
    }
    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }
    // 指针向后移动
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  curNode!.next =prevNode;
  return curNode!;
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

export {
  createDirectionLinkList,
  reverseLinkList
};