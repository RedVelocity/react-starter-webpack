// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: '../dist',
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = config;
