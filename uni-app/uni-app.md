## 生命周期
- onLanuch 当小程序初始化时, 会触发 onLanch (全局只触发一次)
- onReady 监听页面初次渲染完成
- onShow 当小程序启动, 或从后台进入前台显示, 会触发 onShow
- onHide 当小程序从前台进入后台, 会触发 onHide
- onUnload 监听页面的卸载
- onError 当小程序出错会触发
- onPullDownRefresh 下来
- onSearchBottom 上拉触底事件的处理函数
- onShareAppMessage 右上角分享
## 模板语法
1. 数据绑定
```js
onLoad: function(options) {
  this.setData({
    name: 'Tom new'
  })
}
```
2. 条件判定
```js
<view wx:if="{{flag}}">true</view>
<view wx:else>false</view>
```
3. 列表渲染
```js
<view wx:for="{{list}}">list</view>
```