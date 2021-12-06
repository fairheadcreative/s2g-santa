const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: process.env.NODE_ENV === 'gh-pages' ? './' : '/',
  lintOnSave: isDevelopment ? true : 'default',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_import-everywhere.scss";',
      },
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,css,sass,scss}'],
        failOnError: !isDevelopment,
      }),
    ],
    resolve: {
      mainFiles: ['index'],
    },
  },
};
