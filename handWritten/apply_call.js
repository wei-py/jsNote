Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error('this is not function');
  }
  // 获取参数
  const args = [...arguments].slice(1);
  context = context || window;
  // this 赋值到 fn 属性上
  context.fn = this;
  // 调用 this 返回结果
  const result = context.fn(...args);
  // 删除 fn 属性
  delete context.fn;
  return result;
}
// 调用
// const obj = {
//   name: "小王",
//   myFun() {
//     console.log(this.name);
//   },
// };
// const db = {
//   name: "小雷"
// };
// obj.myFun.call(db);
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    console.error('this is not function');
  }
  context = context || window;
  context.fn = this;
  const result = arguments[1] ? context.fn(...arguments[1]) : context.fn();
  delete context.fn;
  return result;
}
Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    console.error('this is not function');
  }
  // 获取参数
  var args = [...arguments].slice(1);
  var fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};