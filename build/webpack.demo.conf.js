const webpackMerge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.base.conf');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = webpackMerge(common, {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../examples/dist'),
    hot: true,
    port: 9001,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('devlopment')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../examples/index.html')
    })
  ]
});

module.exports = config;
