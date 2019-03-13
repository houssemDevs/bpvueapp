const path = require('path');

const merge = require('webpack-merge');
const clean = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 4000,
  },
  plugins: [new clean()],
});
