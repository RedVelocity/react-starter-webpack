// const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
// Custom configs
const commonConfig = require('./webpack.common');
const productionConfig = require('./webpack.prod');
const developmentConfig = require('./webpack.dev');

module.exports = () => {
  switch (process.env.NODE_ENV || 'production') {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
