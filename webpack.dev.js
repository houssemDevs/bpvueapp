const path = require('path');

const merge = require('webpack-merge');
const clean = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'build'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/assets/',
    port: 4000,
    writeToDisk: true,
  },
  plugins: [new clean()],
});
