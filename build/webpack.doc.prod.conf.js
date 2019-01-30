const webpackMerge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = webpackMerge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkHash].js',
    path: path.resolve(__dirname, '../doc/dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../doc')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../doc/index.html')
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});

module.exports = config;
