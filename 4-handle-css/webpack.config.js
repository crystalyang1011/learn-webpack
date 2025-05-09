const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 定义通用的 loader 配置
const getStyleLoaders = (preProcessor) => {
  const loaders = [MiniCssExtractPlugin.loader, "css-loader"];

  if (preProcessor) {
    loaders.push(preProcessor);
  }

  return loaders;
};

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[contenthash:4].js", // 注意: 使用 contenthash 替代 hash
    clean: true,
  },
  module: {
    rules: [
      // CSS 处理
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      // Less 处理
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      // SCSS 处理
      {
        test: /\.scss$/,
        use: getStyleLoaders("sass-loader"),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css", // 为 CSS 文件也添加 hash
    }),
    new CssMinimizerPlugin(),
  ],
};
