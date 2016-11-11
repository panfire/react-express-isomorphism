import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
// import connectRedis from 'connect-redis'
import compression from 'compression'
import validator from 'express-validator'
import cons from 'consolidate'
import config from '../config'
import appRoutes from './routes'

const app = express()
// const RedisStore = connectRedis(session)

app.engine('html', cons.handlebars)
app.set('views', path.join(config.front, 'views'))
app.set('view engine', 'html')
app.use(compression({
  level: 3
}))
app.use(favicon(path.join(config.public, 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(config.front))

app.use(session({
  // store: new RedisStore(config.redis),
  secret: 'm.tiger8.com',
  name: 'm.tiger8.sid',
  cookie: {
    maxAge: 1000 * 60 * 60 * 6
  },
  httpOnly: true,
  resave: true,
  saveUninitialized: true,
  rolling: true
}))
app.use(validator())
appRoutes(app)

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  err.status = err.status || 500
  if (err.status === 500) {
    console.log(err.stack)
  }

  res.status(err.status).json({
    status: err.status,
    message: err.message
  })
})

export default app
