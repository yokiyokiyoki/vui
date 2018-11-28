const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.base.conf");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = webpackMerge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkHash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
});

module.exports = config;
