function _new(obj, ...rest) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, rest);
  return result instanceof Object ? result : newObj;
}