const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//vue-loader15需要插件
const { VueLoaderPlugin } = require("vue-loader");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    dsui: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name].js",
    library: "ds-ui",
    //打包方式为umd
    libraryTarget: "umd"
  },
  // 外部引入
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  module: {
    rules: [
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
    new VueLoaderPlugin(),
    new CleanWebpackPlugin([path.resolve(__dirname, "../lib/dsui.js")], {
      root: path.resolve(__dirname, "..")
    })
  ]
};
