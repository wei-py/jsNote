function isObject(obj) {
  return (typeof obj === "object" && obj) || typeof obj === "function";
}

const map = new WeakMap();
function deepClone(obj) {
  if (isObject(obj)) return obj;
  if ([Date, RegExp].includes(obj.constructor)) return new obj.constructor(obj); // 虽是复杂类型, 但是没有深层结构
  if (typeof obj === "function")
    return new Function("return " + obj.toString())(); // 函数新地址, 函数不复用
  if (map.get(obj)) return obj; // 避免循环调用
  if (obj instanceof Map) {
    const result = new Map();
    map.set(obj, result);
    obj.forEach((value, key) => {
      isObject(value)
        ? result.set(key, deepClone(value))
        : result.set(key, value);
    });
    return result;
  }
  if (obj instanceof Set) {
    const result = new Set();
    map.set(obj, result);
    obj.forEach((value) => {
      isObject(value)
        ? result.add(deepClone(value))
        : result.add(value)
    })
    return result;
  }

  const keys = Reflect.ownKeys(obj);
  const allDesc = Object.getOwnPropertyDescriptors(obj);
  const result = Object.create(Object.getPrototypeOf(obj), allDesc);
  keys.forEach((key) => {
    const value = obj[key];
    isObject(value)
      ? result[key] = deepClone(value)
      : result[key] = value;
  })
  return result;
}

