function flatten(obj) {
  const result = {};
  let proecss = (key, value) => {
    if (Object(value) !== value) { // 判断基本类型
      if (key) result[key] = value;
    } else if (Array.isArray(value)) {
      for (let i = 0; i< value.length; i++) {
        proecss(`${key}[${i}]`, value[i])
      }
      if (!value.length) result[key] = [];
    } else {
      let objArr = Object.keys(value);
      objArr.forEach(item => {
        proecss(key ? `${key}.${item}` : `${item}`, value[item])
      });
      // if (!objArr.length && key) result[key] = {};
    }
  }
  proecss('', obj);
  return result;
}

let s;
const obj = {
  a: "a",
  b: [1, { c: true }, [3]],
  d: { e: undefined, f: 3 },
  g: null,
  s
};


const result = flatten(obj);
console.log(result);
