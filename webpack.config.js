const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (_, argv) => {
  const isDev = argv.mode === "development";

  /** @type {import('webpack').Configuration} */
  const config = {
    entry: { client: "./src/client/index.ts" },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2",
    },
    devtool: isDev ? "inline-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_,modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
    },
    plugins: isDev ? [] : [new CleanWebpackPlugin()],
  };
  return config;
};
