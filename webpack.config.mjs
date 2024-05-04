import TerserPlugin from "terser-webpack-plugin";

export default {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
  devtool: "inline-source-map",
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
