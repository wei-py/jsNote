/**
 * 回溯算法
 * @param {*} n 范围
 * @param {*} k 个数
 */
function combine(n, k) {
  let result = [];
  let path = [];
  function helper(n, k, startIndex) {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      helper(n, k, i + 1);
      path.pop();
    }
  }
  helper(n, k, 1);
  return result;
}

const result = combine(4, 2);
console.log(result);
