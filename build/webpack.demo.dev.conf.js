const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.demo.base.conf");
const webpack = require("webpack");

const config = webpackMerge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../examples/dist"),
    publicPath: "/"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../examples/dist"),
    hot: true,
    port: 9001
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("devlopment")
    })
  ]
});

module.exports = config;
