import { fn } from "./js/a"; // [eslint] Parsing error: The keyword 'import' is reserved
/**
 * 
module.exports = {
  env: {
    es6: true, // 启用 ES6 特性
    browser: true, // 如果代码运行在浏览器环境
    node: true, // 如果代码运行在 Node 环境
  },
  extends: [],
  plugins: [],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    // "no-console": 2,
  },
};
 */
console.log(fn(1, 2));
