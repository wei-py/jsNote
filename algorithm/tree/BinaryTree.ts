// 节点
class TreeNode {
  val: any;
  left: TreeNode;
  right: TreeNode;
  constructor(val: any) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

// 二叉树类
class Tree<T> {
  root: TreeNode;
  constructor(data: T[]) {
    const nodeList: TreeNode[] = []; // tmp -> target father
    for(let i = 0; i < data.length; i++) {
      let node = new TreeNode(data[i]); // root
      nodeList.push(node);
      if (i > 0) {
        let n: number = Math.floor(Math.sqrt(i + 1)); // 2^k - 1 计算节点所在层数
        let q: number = Math.pow(2, n) - 1;
        let p: number = Math.pow(2, n - 1) - 1;
        let parent: TreeNode = nodeList[p + Math.floor((i - q) / 2)];
        if (parent.left === undefined) {
          parent.left = node;
        } else {
          parent.right = node;
        }
      }
    }
    this.root = nodeList.shift();
    nodeList.length = 0;
  }
  // 遍历 前中后
  public preOrder(root: TreeNode, arr: T[] = []): T[] {
    if (root) {
      arr.push(root.val);
      this.preOrder(root.left, arr);
      this.preOrder(root.right, arr);
    }
    return arr;
  }
  // 深度 最小深度
  public maxDepth(root: TreeNode): number {
    return (root === undefined || root.val === null) ? 0 :Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }
  public minDepth(root: TreeNode): number { // 左右子树都没有节点
    if (root === undefined || root.val === null) return 0;
    const left = this.minDepth(root.left);
    const right = this.minDepth(root.right);
    return (left && right) ? Math.min(left, right) + 1 : left + right + 1;
  }
  // 平衡 description 高度不大于 2
  public isBalanced(root: TreeNode): boolean {
    if (!root || root.val === null) return true;
    const left = this.isBalanced(root.left);
    const right = this.isBalanced(root.right);
    if (!left || !right || Math.abs(this.maxDepth(root.left) - this.maxDepth(root.right)) > 1) return false;
    return true;
  }
  // 层序遍历
  public levelTraversal(root: TreeNode): number[][] | number[] {
    const stack = [];
    const result: number[][] = [];
    stack.push(root);
    while (stack.length) {
      let curLen = stack.length;
      let curLevel = [];
      while (curLen--) { // 边界问题
        const node = stack.shift();
        curLevel.push(node.val);
        if (node.left && node.left.val !== null) stack.push(node.left)
        if (node.right && node.right.val !== null) stack.push(node.right)
      }
      result.push(curLevel)
    }
    return result;
  }
  // 对称
  // 共有多少节点
}



// 节点位置
// 第 K 层 第 m 个 2^(k - 1) + m - 2
// Math.floor((i - q) / 2) 查询父节点


const t = new Tree([1,2,2.5,3]);
console.log(t.minDepth(t.root));
