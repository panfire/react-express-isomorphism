'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  port: 7080,
  views: _path2.default.resolve(__dirname, './views'),
  static: _path2.default.resolve(__dirname, './static'),
  public: _path2.default.resolve(__dirname, '../public')
};