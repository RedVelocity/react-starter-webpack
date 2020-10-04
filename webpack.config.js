// const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
// Custom configs
const commonConfig = require('./webpack/webpack.common');
const productionConfig = require('./webpack/webpack.prod');
const developmentConfig = require('./webpack/webpack.dev');

module.exports = ({ env, analyze }) => {
  switch (env) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
