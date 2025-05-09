# 处理 CSS

## 安装 loader 和 plugin

`npm i style-loader css-loader less-loader sass-loader sass -D`

- style-loader
  将 css 以<style>标签的形式动态插入到 HTML 的<head>中

```javascript
const style = document.createElement("style");
style.textContent = styleContent;
document.head.append(style);
```

- css-loader
  解析 CSS 文件中的 @import 和 url()，处理模块化的 CSS

- less-loader
  将 Less 编译为 CSS (内置了 less 编译器（v6+ 不需要单独安装 less）)

- sass-loader
  将 Sass/SCSS 编译为 CSS(需要单独安装 sass)
- sass

`npm i mini-css-extract-plugin css-minimizer-webpack-plugin -D`

- mini-css-extract-plugin
  将 CSS 提取为单独的文件（而非 style 标签）
  替代 style-loader，生成 main.css 文件

- css-minimizer-webpack-plugin
  压缩 CSS 代码

loader：文件转换/编译/转义：less -> css
plugin：文件提取/拆分/合并/压缩…… ： 很多个 css 文件 -> 成一个 css 文件

## 配置

```javascript
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash:4].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.s[c|a]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new CssMinimizerPlugin()],
};
```

简化一下重复的地方 —— rules
