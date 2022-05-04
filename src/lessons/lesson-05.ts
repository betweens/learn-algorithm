/* 
* 链表实现队列
*/

interface ILinkNode {
  value: number,
  next?: ILinkNode
}

class QueueWithList {
  private head: ILinkNode | undefined;
  private tail: ILinkNode | undefined;

  public add(value: number) {
    const node = {
      value
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public deleteNode(): ILinkNode | null {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;
    return node;
  }

  get length(): number {
    let count = 0;
    let cur = this.head;
    while (cur) {
      count++;
      cur = cur.next;
    }
    return count;
  }
}

export default QueueWithList;
