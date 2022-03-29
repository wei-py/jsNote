function _new(obj, ...rest) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, rest);
  return result instanceof Object ? result : newObj;
}


// s1 + s2 = s3 排序 O(n)
// hash 唯一 14 位 2 开头
// 抢购

