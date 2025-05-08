# webpack 处理 js

## babel-loader

用于将 ES6+/TypeScript 等现代 JavaScript 语法转换为浏览器兼容的 ES5 代码

1. 安装
   `npm i babel-loader @babel/core @babel/preset-env --save-dev`
   babel-loader: 接口/桥梁，用于连接 babel 和 webpack
   @babel/core：babel 核心引擎，真正编译（转译） js 的地方
   @babel/preset-env：babel 本身不包含任何 js 的转译规则，需要 preset 来确认

2. 写入配置

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:4].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: ">1%, last 2 versions, not ie <=8",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
```

建议，将 babel 的配置(options)单独放在`.babelrc` 文件中(注意改为 json 的格式)

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ">1%, last 2 versions, not ie <=8"
      }
    ]
  ]
}
```

修改后，webpack.config.js 可简化为

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:4].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
```

## eslint

用于代码质量检查和风格统一。

1. 安装
   `npm i eslint@8.56 eslint-webpack-plugin@4.2 -D`

2. 在 webpack 配置文件中添加 plugin
   ` plugins: [new ESLintWebpackPlugin()]`

3. 新建 `.eslintrc.js` 配置文件
   ```javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     // pnpm i eslint-config-standard -D
     extends: ["standard"],
     plugins: [],
     parserOptions: {
       sourceType: "module",
     },
     rules: {
       "no-console": 2,
     },
   };
   ```
