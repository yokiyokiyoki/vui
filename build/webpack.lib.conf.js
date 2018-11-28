const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//vue-loader15需要插件
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "../src/index.js")
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
  plugins: [new VueLoaderPlugin()]
};
