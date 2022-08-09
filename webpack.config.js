const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const mode = argv.mode || 'development'

  return {
    mode: mode,
    entry: {
      index: __dirname + '/src/index.js',
      demo: __dirname + '/src/demo.js'
    },
    output: {
      path: __dirname + '/public',
      filename: '[name].js'
    },
    devtool: mode == 'development' ? 'eval-source-map' : false,
    devServer: {
      static: {
        directory: __dirname + '/public',
      },
      compress: true,
      port: 4000,
      hot: false,
      https: false
    },
    module: {
      rules: [
        {
          test: /\.riot$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              },
            },{
              loader: '@riotjs/webpack-loader'
            }
          ]
        }, {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {url: false}
            }
          ]
        }, {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {url: false}
            },
            'sass-loader',
          ]
        }, {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/demo.ejs',
        filename: 'demo.html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1',
        },
        'hash': true,
        'chunks': ['demo']
      })
    ]
  }
}
