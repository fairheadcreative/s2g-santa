const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  lintOnSave: isDevelopment ? true : 'default',
  devServer: {
    host: 'localhost',
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
