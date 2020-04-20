const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.liveReload;

  /** @type {import('webpack').Configuration} */
  const config = {
    entry: "./src/main.tsx",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080,
      stats: "minimal",
      compress: true,
    },
    devtool: isDev ? "inline-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({ template: "./public/index.html" }),
    ],
  };

  return config;
};
