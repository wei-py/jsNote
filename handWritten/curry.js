// es6
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

// es5
function curry5(fn, args) {
  // 获取函数所需的参数长度
  let length = fn.length;
  args = args || [];
  return function() {
    let subArgs = args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    if (subArgs.length >= length) { // 参数不够
      return fn.apply(this, subArgs);
    } else {
      return curry.call(this, fn, subArgs);
    }
  }
}