1. 初始化 npm 包 -> 生成 package.json

```
npm init -y
```

2. 下载 webpack 和 webpack-cli 依赖

```
npm i webpack webpack-cli
```

3. 新建测试文件

根目录下新建 webpack.config.js 文件
webpack 的核心配置

```javascript
module.exports = {
  mode: "", // development / production
  entry: {},
  output: {},
  module: {},
  plugins: [],
  optimization: {},
  devServer: {},
  resolve: {},
};
```

```javascript
// src/js/a.js
export const a = 100;
```

```javascript
// src/index.js —— 入口文件
import { a } from "a";
console.log(a);
```

完善 webpack 配置文件

```javascript
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash:4].js",
  },
};
```

4. 打包(使用 cmd！不要用 powershell)

```
webpack
```

5. 完成后的文件目录

```
│  package.json
│  README.md
│  webpack.config.js
│
├─dist
│      index.ef01.js
│
└─src
    │  index.js
    │
    └─js
            a.js
```
