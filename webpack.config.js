const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const glob = require("glob");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "tests.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "web",
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  // Generate map files for compiled scripts
  devtool: "source-map",
  stats: {
    colors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Copy assets to the destination folder
    // see `src/post-file-test.ts` for an test example using an asset
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  optimization: {
    // Don't minimize, as it's not used in the browser
    minimize: false,
  },
};
