import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import autoprefixer from 'autoprefixer'
import path from 'path'
import config from './config'

export default {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
  },
  entry: path.resolve(config.src, './main.js'),
  target: 'web',
  output: {
    path: path.resolve(config.dist, './static'),
    publicPath: '/',
    filename: 'scripts/[name].[chunkhash].js'
  },
  module: {
    preLoaders: [{
      test: /\.jsx$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1024 * 10,
        name: 'images/[name].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1024 * 10,
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  postcss: () => [autoprefixer({
    browsers: ['> 1%', 'Firefox 15']
  })],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('styles/[name].[contenthash].css'),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      __DEV__: false,
      filename: '../views/index.html',
      template: path.join(config.src, './index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
