// const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: '../dist',
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = config;
