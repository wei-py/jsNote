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

// 节流 多点不理
function throttle (fn, wait) {
  var startTime = Date.now();
  return function() {
    const context = this;
    const args = arguments;
    let nowTime = Date.now();
    let remaining = wait - (nowTime - startTime)
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      startTime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  }
}


// 防抖
// 提交表单
// resize
// input 事件

// 节流
// 验证码
// scroll