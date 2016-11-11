'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = reactRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _routes = require('../routes');

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _listActions = require('../reducers/list/listActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reactRender(req, res, next) {
  (0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      var e = new Error(error.message);
      e.status = 5000;
      return next(e);
    }

    if (redirectLocation) {
      return res.redirect(redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps) {
      var _ret = function () {
        console.log(renderProps);
        var store = (0, _store2.default)();
        return {
          v: store.dispatch((0, _listActions.fetchList)()).then(function (data) {
            var initialState = store.getState();
            var html = (0, _server.renderToString)(_react2.default.createElement(
              _reactRedux.Provider,
              { store: store },
              _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));

            return res.render('index', {
              html: html,
              initialState: (0, _stringify2.default)(initialState)
            });
          }).catch(next)
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    }

    next();
  });
}