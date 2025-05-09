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
            maxSize: 5000, // 小于5kb的图片才编码成base64
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
