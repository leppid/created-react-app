const merge = require('webpack-merge');
const path = require('path');

module.exports = merge([
  {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: 'bundle.[hash].js'
    }
  }
]);
