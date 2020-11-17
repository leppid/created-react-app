const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = merge([
  {
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          include: [path.resolve(__dirname, '../src')],
          exclude: ['/node_modules/'],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jp(e*)g)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8000
            }
          }
        },
        {
          test: /\.public\.(jp(e*)g|png)$/,
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /favicon\.(svg|png)$/,
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /\.woff(2)?(\?v=\d\.\d\.\d)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
        },
        {
          test: /\.(ttf|eot|gif)(\?v=\d\.\d\.\d)?$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      new Dotenv({
        path: './.env'
      })
    ]
  }
])
