### Vue 的生命周期是什么？
* Vue 的生命周期指的是组件从创建到销毁的一系列的过程, 被称之为 Vue 的生命周期. 通过提供的 Vue 在生命周期各个阶段的钩子函数, 我们可以很好的在 Vue 的各个生命阶段实现一些操作

### Vue 的各个生命周期
* beforeCreate 在实例初始化之后 在数据监听和事件配置之前触发 故获取不到 data 的数据
* created 在实例创建之后 可以访问 data method . 但这个时候还没有被挂载到页面中去 所有这个时候访问不到 $el 属性, 一般我们可以在这个函数进行一些初始化工作, 比如 ajax 请求数据对页面初始化
* beforeMount 组件挂载之前 在 beforeMount 之前会找到对应的 template, 并编译 render 函数.
* mounted 可以通过 DOM API 获取页面中的 DOM 元素
* beforeUpdate 在响应数据更新时触发, 发生在虚拟 DOM 重新渲染和打补丁之前, 这个时候我们可以对可能会被移除的元素做一些操作, 比如移除监听函数
* updated 虚拟 DOM 重新渲染和打补丁之后调用
* beforeDestroy 实例销毁之前使用, 一般这一步销毁定时器和全局事件等
* destroyed Vue 实例中的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
* 当我们使用 keep-alive 的时候，还有两个钩子函数，分别是 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。
