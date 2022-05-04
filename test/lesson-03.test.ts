import MyQueue from '../src/lessons/lesson-03';

describe('MyQueue', () => {
  test('should be a class', () => {
    expect(typeof MyQueue).toBe('function');
  });

  test('should have a method add', () => {
    const queue = new MyQueue();
    expect(typeof queue.add).toBe('function');
  });

  test('should have a method delete', () => {
    const queue = new MyQueue();
    expect(typeof queue.delete).toBe('function');
  });

  test('should add a value', () => {
    const queue = new MyQueue();
    queue.add(1);
    expect(queue.length).toBe(1);
  });

  test('should delete a value', () => {
    const queue = new MyQueue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.delete()).toBe(1);
    expect(queue.length).toBe(2);
  });
});