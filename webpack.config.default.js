const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = env => {

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('styles.css')
  ];

  const config = {
    entry: {
      app: path.join(__dirname, 'frontend/src/index.js'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/dist'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel?cacheDirectory=false',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoader=1', 'postcss-loader')
      },
    ]},
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: plugins
  };

  if (env === 'dev') {
    config.devtool = 'sourcemap'
  } else if (env === 'prod') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return config;
};
