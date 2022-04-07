function deepClone(target) {
  const map = new WeakMap();
  function isObject(target) {
    return (
      (typeof target === "object" && target) || typeof target === "function"
    );
  }

  function clone(data) {
    if (!isObject(data)) {
      return data;
    }
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data);
    }
    if (typeof data === "function") {
      return new Function("return " + data.toString())();
    }
    const exist = map.get(data);
    if (exist) {
      return exist;
    }
    if (data instanceof Map) {
      const result = new Map();
      map.set(data, result);
      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val));
        } else {
          result.set(key, val);
        }
      });
      return result;
    }
    if (data instanceof Set) {
      const result = new Set();
      map.set(data, result);
      data.forEach((val) => {
        if (isObject(val)) {
          result.add(clone(val));
        } else {
          result.add(val);
        }
      });
      return result;
    }
    const keys = Reflect.ownKeys(data);
    const allDesc = Object.getOwnPropertyDescriptors(data);
    const result = Object.create(Object.getPrototypeOf(data), allDesc);
    map.set(data, result);
    keys.forEach((key) => {
      const val = data[key];
      if (isObject(val)) {
        result[key] = clone(val);
      } else {
        result[key] = val;
      }
    });
    return result;
  }

  return clone(target);
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
    return 1;
  },
};

const sya = Symbol("a");
a[sya] = "a";
a.circleRef = a;
a.a6 = new Map([["mapKey", { a: 123 }]]);

let b = deepClone(a);
console.log(b);
console.log(a);
console.log(a.a6.get("mapKey") === b.a6.get("mapKey"));

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
    return 1;
  },
};

const sya = Symbol("a");
a[sya] = "a";
a.circleRef = a;
a.a6 = new Map([["mapKey", { a: 123 }]]);

let b = deepClone(a);
console.log(b);
console.log(a);
console.log(a.a6.get("mapKey") === b.a6.get("mapKey"));
