const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const html = require('html-webpack-plugin');

const config = {
  target: 'web',
  entry: path.resolve(__dirname, './src/index.ts'),
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
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@store': path.resolve(__dirname, './src/store'),
      '@comp': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@bt': path.resolve(__dirname, './node_modules/bootstrap-vue/es/components'),
    },
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
