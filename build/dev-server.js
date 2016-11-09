import express from 'express'
import webpack from 'webpack'
import nodemon from 'nodemon'
import fsp from 'fs-promise'
import path from 'path'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import proxy from 'http-proxy-middleware'
import open from 'open'
import webpackDevConfig from './webpack.dev.config'
import serverConfig from '../config'

const app = express()
const compiler = webpack(webpackDevConfig)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: false,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
})
const hotMiddleware = webpackHotMiddleware(compiler)

nodemon({
  verbose: true,
  script: './server/bin/www',
  ignore: ['src/', 'node_modules/', 'front/'],
  watch: ['./server/'],
  exec: 'babel-node',
  env: {
    NODE_ENV: 'development'
  },
  ext: 'js json'
}).on('start', function(err) {
  if (err) {
    console.log(err)
  }
}).on('restart', function() {
  console.log('nodemon server restart....')
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use('/', proxy({
  target: 'http://localhost:' + serverConfig.port,
  changeOrigin: true
}))
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use(function(err, req, res, next) {
  err.status = err.status || 500
  res.json(err)
})
app.listen(serverConfig.port + 10, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log('dev server is on %s', serverConfig.port + 10)
  open('http://localhost:' + (serverConfig.port + 10))
})
