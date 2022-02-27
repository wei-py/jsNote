* 小试牛刀
```js
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  mode: 'none'
}
```
* 清理 dist | mode 选项
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[contenthash][ext]",
  }
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "app.html",
      inject: "body",
    }),
  ],
}
```
* 使用 source map
```js
devtool: "inline-sourece-map"
```
* 使用 watch mode
```js
npx webpack --watch
```
* 使用 webpack-dev-server
```js
// yarn add webpack-dev-server
devServer: {
  static: "./dist"
}
// npx webpack-dev-server
```
* 资源模块配置
```js
// resource inline source 通用资源
module: {
  rules: [
    {
      test: /\.png$/,
      type: "asset/resource",
      generator: {
        filename: "images/[contenthash][ext]",
      }
    },
    {
      test: /^.svg$/,
      type: "asset/inline",
    },
    {
      test: /^.txt$/,
      type: "asset/source",
    },
    {
      test: /^.jpg$/,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 * 1024
        }
      }
    },
    {
      test: /\.(css|less)$/,
      use: ["style-loader", "css-loader", "less-loader"],
    }
  ]
}
```
* 抽离和压缩 css