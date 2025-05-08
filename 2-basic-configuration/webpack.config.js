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
