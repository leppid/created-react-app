const merge = require('webpack-merge');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

module.exports = merge([
 {
   devtool: 'source-map',
   devServer: {
     historyApiFallback: true,
     host: HOST,
     port: PORT,
     proxy: {
       '/api/v1': 'http://localhost:3001'
     }
   }
 }
]);
