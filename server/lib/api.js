'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.fetchList = fetchList;

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var host = '';

if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== 'object') {
  host = 'http://localhost:' + _config2.default.port;
}

var request = (0, _request2.default)(host);

function fetchList() {
  return request.get('/api/list');
}