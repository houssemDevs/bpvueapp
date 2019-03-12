const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const html = require('html-webpack-plugin');

const config /*: Configuration*/ = {
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpg|tiff|svg|otf|ttf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new html({
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body',
    }),
  ],
};

module.exports = config;
