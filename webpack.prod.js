const path = require('path');

const merge = require('webpack-merge');
const clean = require('clean-webpack-plugin');
const cssextract = require('mini-css-extract-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [cssextract.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: [cssextract.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [new clean(), new cssextract({ filename: '[hash].css' })],
});
