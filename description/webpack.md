### 小试牛刀
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
### 清理 dist | mode 选项
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",`
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
### 使用 source map
```js
devtool: "inline-sourece-map"
```
### 使用 watch mode
```js
npx webpack --watch
```
### 使用 webpack-dev-server
```js
// yarn add webpack-dev-server
devServer: {
  static: "./dist"
}
// npx webpack-dev-server
```
### 资源模块配置
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
          maxSize: 4 ### 1024 ### 1024
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
### 抽离和压缩 css
```js
// yarn add mini-css-extract-plugin -D
// yarn add css-minimizer-webpack-plugin -D
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
plugin: [
  new MiniCssExtractPlugin({
    filename: "style/[contenthash].css"
  }),
]
module: {
  rules: [
    {
      test: /\.(css|less)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
    },
  ]
}
optimization: {
  minimizer: [
    new CssMinimizerPlugin()
  ]
}
```
### 加载字体
```js
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  type: "asset/resource",
}

@font-face {
  font-family: "iconfont";
  src: url("./assets/iconfont.ttf") format("truetype");
}
.icon {
  font-family: "iconfont";
  font-size: 30px;
}
```

### 加载数据
```js
// yarn add csv-loader xml-loader -D
// toml yaml json5
{
  test: /\.(csv|tsv)$/,
  use: "csv-loader",
},
{
  test: /\.xml$/,
  use: "xml-loader",
},
{
  test: /\.toml/,
  type: "json",
  parser: {
    parse: toml.parse
  }
}
```
### babel-loader
```js
// yarn add babel-loader ababel/core ababel/preset-env -D
// yarn add @babel/runtime @babel/plugin-transform-runtime -D  兼容 async / await 语法
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "@babel/plugin-transform-runtime"
        ]
      ]
    }
  }
}
```
### 代码分离
```js
// 修改入口节点
entry: {
  index: "./src/index.js",
  another: "./src/anthor-module.js",
}
output: {
  filename: "[name].bundle.js",
  path: path.resovle(__dirname, "./dist"),
  clean: true,
  assetModuleFilename: "images/[contenthash][ext]",
}
// 防置重复 推荐
optimization: {
  splitChunks: {
    chunks: "all",
  }
}
// 防置重复
entry: {
  index: {
    import: "./src/index.js",
    dependOn: "shared"
  },
  another: {
    import: "./src/anthor-module.js",
    dependOn: "shared"
  },
  shared: "lodash"
}
// 动态导入
function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    const element = document.createElement("div");
    element.innerHTML = _.join(["Hello", "webpack"]);
    return element;
  })
}
getComponent().then((element) => {
  document.body.appendChild(element)
})
```
