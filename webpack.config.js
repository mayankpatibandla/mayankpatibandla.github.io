module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  mode: "production",
};
