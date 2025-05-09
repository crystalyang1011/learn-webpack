# 处理媒体资源

## 安装

webpack 5 无效安装

## 配置

```javascript
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[contenthash:4].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|webp|gif)/, // 注意这里是括号
        type: "asset",
        generator: {
          // 注意generator只对type为asset的文件有效（css，js等是没有效果的）
          filename: "imgs/[name].[hash].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 5000, // 小于5kb的图片才编码成base64（默认4kb？）
          },
        },
      },
      {
        test: /\.(mp4|ogg)/, // 注意这里是括号
        type: "asset/resource",
        generator: {
          // 注意generator只对type为asset的文件有效（css，js等是没有效果的）
          filename: "videos/[name].[hash].[ext]",
        },
      },
    ],
  },
};
```

## type 的分类

asset: 按大小自动选择内联或输出文件，适用于图片等可内联的资源

asset/inline： 转为 base64 内联，适用于极小的图片，如 svg 或图标等资源

asset/resource： 输出文件，返回路径，适用于视频、字体、pdf 等大文件

asset/source： 导入文件原始内容，适用于 txt 等文本文件
