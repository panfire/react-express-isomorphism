'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Index = require('../containers/Index');

var _Index2 = _interopRequireDefault(_Index);

var _About = require('../containers/About');

var _About2 = _interopRequireDefault(_About);

var _List = require('../containers/List');

var _List2 = _interopRequireDefault(_List);

var _Home = require('../containers/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterWidthRedux = (0, _reactRedux.connect)()(_reactRouter.Router);

var routes = exports.routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Index2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _List2.default })
);

var Routes = function (_Component) {
  (0, _inherits3.default)(Routes, _Component);

  function Routes() {
    (0, _classCallCheck3.default)(this, Routes);
    return (0, _possibleConstructorReturn3.default)(this, (Routes.__proto__ || (0, _getPrototypeOf2.default)(Routes)).apply(this, arguments));
  }

  (0, _createClass3.default)(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        RouterWidthRedux,
        { history: _reactRouter.browserHistory },
        routes
      );
    }
  }]);
  return Routes;
}(_react.Component);

exports.default = Routes;