/* 
  模拟队列
*/

class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  public add(val: number) {
    this.stack1.push(val);
  }

  public delete(): number | null | undefined {
    let result = null;
    while (this.stack1.length) {
      const n = this.stack1.pop();
      if (n) this.stack2.push(n);
    }
    result = this.stack2.pop();
    while (this.stack2.length) {
      const n = this.stack2.pop();
      n && this.stack1.push(n);
    }
    return result;
  }

  get length() {
    return this.stack1.length;
  }
}

export default MyQueue;
