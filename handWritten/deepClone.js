function deepClone(obj, hash = new WeakMap(), Type = [Map, Set, Date, RegExp, WeakMap, WeakSet]) {
  if (hash.has(obj)) return hash.get(obj);
  if (Type.includes(obj)) return new obj.contructor(obj);
  if (obj === null) return obj;
  if (typeof obj === 'function') return obj.bind();
  if (typeof obj !== "object") return obj; // 基本数据类型
  // let cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
  let cloneObj = new obj.constructor();
  let Symkeys = Object.getOwnPropertySymbols(obj);
  if (Symkeys.length != 0) {
    for (const symkey of Symkeys) {
      cloneObj[symkey] = typeof obj[symkey] === 'object' ? deepclone(obj[symkey], hash) : obj[symkey];
    }
  }
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

let a = {
  name: "lk",
  course: {
    vue: "Vue.js",
    react: "React.js",
  },
  a1: undefined,
  a2: null,
  a3: 123,
  a4: NaN,
  a5: function hs() {
    return 1
  },
};

// //对象循环引用
const sya = Symbol('a');
a[sya] = 'a';
a.circleRef = a;

let b = deepClone(a);

