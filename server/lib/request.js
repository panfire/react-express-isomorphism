'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = createRequest;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = function () {
  function Request(method, url) {
    (0, _classCallCheck3.default)(this, Request);

    this.req = _superagent2.default[method](url);
  }

  (0, _createClass3.default)(Request, [{
    key: 'set',
    value: function set(headers) {
      this.req.set(headers);
      return this;
    }
  }, {
    key: 'query',
    value: function query(_query) {
      this.req.set(_query);
      return this;
    }
  }, {
    key: 'send',
    value: function send(body) {
      this.req.send(body);
      return this;
    }
  }, {
    key: 'attach',
    value: function attach(field, file) {
      this.req.attach(field, file);
      return this;
    }
  }, {
    key: 'auth',
    value: function auth(clientId, clientSecret) {
      this.req.auth(clientId, clientSecret);
      return this;
    }
  }, {
    key: 'end',
    value: function end() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.req.end(function (err, _ref) {
          var _ref$body = _ref.body,
              body = _ref$body === undefined ? {} : _ref$body;

          if (err) {
            var e = new Error(body.message || '接口错误');
            e.status = err.status || 500;
            return reject(e);
          }
          resolve(body);
        });
      });
    }
  }, {
    key: 'then',
    value: function then(cb) {
      return this.end().then(cb);
    }
  }, {
    key: 'catch',
    value: function _catch(cb) {
      return this.end().catch(cb);
    }
  }]);
  return Request;
}();

function createRequest() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var request = {};
  function createMethod(method) {
    return function (url) {
      return new Request(method, host + url);
    };
  }
  ['get', 'post', 'del', 'put', 'patch'].forEach(function (method) {
    request[method] = createMethod(method);
  });

  return request;
}