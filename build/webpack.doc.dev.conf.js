const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.base.conf");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = webpackMerge(common, {
  mode: "development",
  entry: { app: path.resolve(__dirname, "../doc/main.js") },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../doc/dist"),
    publicPath: "/"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../doc/dist"),
    hot: true,
    port: 9002
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("devlopment")
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../doc/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader"
          },
          {
            loader: "vue-markdown-loader/lib/markdown-compiler",
            options: {
              raw: true,
              // 阻止提取脚本和样式标签
              preventExtract: true,
              preprocess: (MarkdownIt, source) => {
                // table标签
                MarkdownIt.renderer.rules.table_open = function() {
                  return '<table class="doc-table">';
                };
                MarkdownIt.renderer.rules.fence = wrap(
                  MarkdownIt.renderer.rules.fence
                );
                return source;
              }
            }
          }
        ]
      }
    ]
  }
});

//所有标签加上hightlight的class
function wrap(render) {
  return function() {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace("<code>", '<code class="hljs">');
  };
}

module.exports = config;
