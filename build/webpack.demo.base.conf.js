const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//vue-loader15需要插件
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "none",
  entry: { app: path.resolve(__dirname, "src/index.js") },
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
      title: "example"
    }),
    new VueLoaderPlugin()
  ]
};
