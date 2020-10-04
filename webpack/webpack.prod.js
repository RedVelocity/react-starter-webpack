const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].bundle.[contentHash].js',
    chunkFilename: 'js/[name].bundle.[chunkHash].js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ sourceMap: true }),
      new OptimizeCssAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css',
      chunkFilename: 'css/[id].[chunkHash].css',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
      test: /\.(js|jsx|css)($|\?)/i,
      exclude: /vendor\..+\.js/,
    }),
    new CompressionPlugin({
      filename: '[path].gz',
      algorithm: 'gzip',
      test: /\.(js|jsx|css|html|png|svg|jpg|gif)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};

module.exports = config;
