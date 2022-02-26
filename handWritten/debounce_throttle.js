// 防抖 多点重置
function debounce(fn, wait) {
  var timer = null;
  return function() {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait)
  }
}

// 节流 多点化一
function throttle (fn, wait) {
  var preTime = Date.now();
  return function() {
    const context = this;
    const args = arguments;
    var nowTime = Date.now();
    if (nowTime - preTime >= wait) {
      preTime = Date.now();
      return fn.apply(context, args)
    }
  }
}
