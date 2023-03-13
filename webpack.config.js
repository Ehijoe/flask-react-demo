const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',

  entry: './frontend/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },

  devtool: 'inline-source-map',

  module: {
    rules: [

      // Compile Javascript with babel
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Compile css
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      favicon: 'frontend/favicon.ico',
      minify: 'production',
    })
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
