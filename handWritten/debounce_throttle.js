// https://blog.csdn.net/weixin_42492399/article/details/121524620
// 防抖 多点重置
function debounce(fn, wait) {
  var timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 节流 多点不理
function throttle(fn, wait) {
  var startTime = Date.now();
  return function () {
    const context = this;
    const args = arguments;
    let nowTime = Date.now();
    let remaining = wait - (nowTime - startTime);
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(fn, remaining); // 刷新
    }
  };
}

// 防抖
// 提交表单
// resize
// input 事件

// 节流
// 验证码
// scroll

function debounce(fn, delay, immediate = false) {
  // 1.定义一个定时器,保存上一次的定时器
  let timer = null;
  let isInvoke = false;
  // 2.真正执行的函数
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate && !isInvoke) { // 是立即执行 还没被调用
      fn.apply(this, args);
      isInvoke = true;
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  };
  // 取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };
  return _debounce;
}

// 真正节流
function throttle(fn, interval, option = { leading: true, trailing: false }) {
  const { leading, trailing } = option;
  // 1.记录上一次的开始时间
  let lastTime = 0;
  let timer = null;
  // 2.事件触发时,真正执行的函数
  const _throttle = function (...args) {
    // 获取当前事件触发时的时间
    let nowTime = new Date().getTime();
    if (lastTime === 0 && leading === false) {
      lastTime = nowTime;
    }
    // 使用当前触发的时间和之前的时间间隔以及上一次开始的时间,计算出还剩多长时间需要去触发函数
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // 真正触发函数
      fn.apply(this, args);
      // 保留上次触发的时间
      lastTime = nowTime;
      return;
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
        fn.apply(this, args);
      }, remainTime);
    }
  };
  // 取消功能
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  return _throttle;
}
