const path = require('path');

// vue-loader15需要插件
const { VueLoaderPlugin } = require('vue-loader');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: { app: path.resolve(__dirname, '../examples/main.js') },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'lib@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.(png|gif|svg|jpg|ttf|woff)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
