const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//vue-loader15需要插件
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: { app: path.resolve(__dirname, "../examples/main.js") },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../examples/dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".json", "vue"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|gif|svg|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../examples/index.html"),
      title: "example"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("devlopment")
    })
  ],
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../examples/dist"),
    hot: true
  }
};
