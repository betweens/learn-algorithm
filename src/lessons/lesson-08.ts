/*
 * 二叉树遍历 
 */

interface ITreeNode{
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const arr: number[] = [];

/* 
* 前序遍历：根节点->左子树->右子树
*/
const preOrder = (node: ITreeNode | null): void => {
  if (node === null) return;
  arr.push(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

/*
* 中序遍历：左子树->根节点->右子树
*/
const inOrder = (node: ITreeNode | null): void => {
  if (node === null) return;
  inOrder(node.left);
  arr.push(node.value);
  inOrder(node.right);
}
/*
 * 后序遍历：左子树->右子树->根节点 
 */

const postOrder = (node: ITreeNode | null): void => {
  if (node === null) return;
  postOrder(node.left);
  postOrder(node.right);
  arr.push(node.value);
}

/* 
* 或者第n层的节点
*/
const getKthValue = (node: ITreeNode, n: number): number | null => {
  inOrder(node);
  return arr[n - 1] || null;
}

export {
  type ITreeNode,
  getKthValue
};
