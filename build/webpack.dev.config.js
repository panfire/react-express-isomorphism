import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'lib': path.resolve(__dirname, '../src/lib'),
      'containers': path.resolve(__dirname, '../src/containers')
    },
    root: [
      path.join(__dirname, '../bower_components')
    ]
  },
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true,
  entry: [
    path.resolve(__dirname, './webpack-public-path'),
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, '../src/main.js')
  ],
  target: 'web',
  output: {
    path: '/',
    publicPath: '/',
    filename: 'scripts/main.js'
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
      test: /\.css$/,
      loader: ['style', 'css', 'postcss']
    }, {
      test: /\.scss$/,
      loader: ['style', 'css', 'postcss', 'sass']
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
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, '../src/index.html'),
      inject: true
    })
  ]
}
