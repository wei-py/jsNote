### css 选择器权重值和优先级
- !importance 10000
- 内联样式 1000
- id 选择器 100
- 类,伪类,属性 选择器 10
- 通配,子选择器,相邻选择器 * > + 0

### flex实现8个元素分两行排列 每行4个平均分布
- display: flex;
- flex: row wrap
<!-- - flex-wrap: wrap; -->

#### flex 6 个属性 -> 实质 4 个
- flex-direction
- flex-wrap
- flex-flow (包含 ↑ 两个)
- justify-content
- align-items
- align-content

#### 项目上的 6 个属性
- order 数值越小越靠前
- flex-grow 放大比例
- flex-shrink 缩小
- flex-basis
- flex 包含 ↑ 三个属性
- align-self

### css怎么画一个大小为父元素面积一半的正方形
- 斜正方形，顶点在正方形各边中点上
- 内正方形，边长为根号2

### css样式隔离
- 通过 style 标签的 scoped 指令定义作用域, 通过编译为该作用域所有标签生成唯一的属性
- css 模块化 css modules 指的是我们像 import js 一样导入我们的 css 代码, 代码中的每一个类名都是引入对象的一个属性, 编译时会将 css 类名加上唯一的 hash
- css module 需要 webpack 配置 css-loader 或者 scss-loader, module 为 true

### 浏览器同源策略
一个域下的 js 脚本在未经允许的情况下, 不能够访问另一个域的内容. 同源指的是两个域下的协议,域名,端口必须相同
- 不能跨域操作其他域下的 cookie localstorage indexDb
- dom
- ajax 跨域请求
- 同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者 script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作。

### 如何解决跨域
- 通过 jsonp 解决
- document.domain + iframe 跨域
- postMessage 跨域
- nginx 代理跨域
- nodejs 中间件代理跨域
- 跨域资源共享 (CORS)
- WebSocket 协议跨域

### promise.catch后 后面的.then还会执行吗
- catch也会返回一个promise 所以可以继续then
- 从语义上也很好理解 都被捕获处理过了就不是error了 所以可以继续

### 给一个 dom 同时绑定两个点击事件，一个用捕获，一个用冒泡，说下会执行几次事件，然后会先执行冒泡还是捕获
- addEventListener绑定几次就执行几次   先捕获，后冒泡

### 有哪些方法实现深拷贝
- JSON.parse(JSON.stringify(obj))  (弊端：正则函数、日期会有问题，变成空对象或字符串)
- 使用递归的方式
- 函数库lodash的_.cloneDeep()
- 通过$.extend()实现深拷贝，当extend内的第一个参数为true时，实现的是深拷贝，false是浅拷贝。
- Object.assign()，当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝

### vue 组件通信
- props/$emit
- provide/inject
- $parent / $children与 ref
- $emit/$on
- vuex

### es6 有哪些新特性
- 作用域
- 模板字符串
- 函数
  - 数参数的默认值
  - rest参数和扩展运算符
  - 箭头函数
- 对象
  - 属性和方法的简写
  - 需计算属性名
- 解构赋值
  - 对象解构
  - 数组结构
  - 字符串结构
  - 参数结构
- 模块


### 箭头函数和普通函数的区别
- 箭头函数没有 prototype (原型)，所以箭头函数本身没有 this
- 箭头函数的 this 在定义的时候继承自外层第一个普通函数的 this。
- 如果箭头函数外层没有普通函数，严格模式和非严格模式下它的 this 都会指向 window (全局对象)
- 箭头函数本身的 this 指向不能改变，但可以修改它要继承的对象的 this
- 箭头函数的 this 指向全局，使用 arguments 会报未声明的错误。
- 箭头函数的 this 指向普通函数时,它的 argumens 继承于该普通函数
- 使用 new 调用箭头函数会报错，因为箭头函数没有 constructor
- 箭头函数不支持 new.target
- 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名
- 箭头函数相对于普通函数语法更简洁优雅

### vue 路由 history 和 hash 两种模式的区别
- 直观区别
  - hash 模式 url 带 # 号，history 模式不带 # 号
- 深层区别

### vue 响应式原理
- 通过Object.defineProperty来实现监听数据的改变和读取（属性中的getter和setter方法） 实现数据劫持