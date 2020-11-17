const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config');
const developmentConfig = require('./webpack.development.config');
const productionConfig = require('./webpack.production.config');

module.exports = mode => mode === 'production'
  ? merge(commonConfig, productionConfig, { mode })
  : merge(commonConfig, developmentConfig, { mode });
