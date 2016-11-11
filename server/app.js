'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _consolidate = require('consolidate');

var _consolidate2 = _interopRequireDefault(_consolidate);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./controller/index');

var _index2 = _interopRequireDefault(_index);

var _api = require('./controller/api');

var _api2 = _interopRequireDefault(_api);

var _reactRender = require('./controller/reactRender');

var _reactRender2 = _interopRequireDefault(_reactRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// const RedisStore = connectRedis(session)

// routes

// import connectRedis from 'connect-redis'
app.engine('html', _consolidate2.default.handlebars);
app.set('views', _config2.default.views);
app.set('view engine', 'html');
app.use((0, _compression2.default)({
  level: 3
}));
app.use((0, _serveFavicon2.default)(_path2.default.join(_config2.default.public, 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_config2.default.static));
app.use((0, _expressSession2.default)({
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
}));
app.use((0, _expressValidator2.default)());

app.use('/api', _api2.default);
app.use('/', _reactRender2.default);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  err.status = err.status || 500;
  if (err.status === 500) {
    console.log(err.stack);
  }

  res.status(err.status).json({
    status: err.status,
    message: err.message
  });
});

exports.default = app;