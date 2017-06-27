const { UglifyJsPlugin } = require('webpack').optimize;
const spikeCssStandards = require('spike-css-standards');
const reshapeStandard = require('reshape-standard');
const babelPreset = require('babel-preset-env');
const noop = require('noop-webpack-plugin');
const marked = require('marked');

const env = process.env.NODE_ENV;
const isDev = env === 'development';
const isProduction = env === 'production';

const locals = { md: marked };

module.exports = {
  devtool: isDev ? 'source-map' : false,
  ignore: [
    '**/_*',
    '**/.*',
    'readme.md'
  ],
  postcss: spikeCssStandards({
    parser: false,
    minify: isProduction
  }),
  babel: {
    presets: [ [ babelPreset, { modules: false } ] ]
  },
  reshape: reshapeStandard({
    minify: isProduction,
    parser: false,
    locals
  }),
  plugins: [
    isProduction ? new UglifyJsPlugin() : noop()
  ]
};
