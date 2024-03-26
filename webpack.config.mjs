import TerserPlugin from "terser-webpack-plugin";

export default {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
  },
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: true,
        },
      }),
    ],
    mangleWasmImports: true,
    removeAvailableModules: true,
  },
};
