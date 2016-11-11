'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _listActions = require('../reducers/list/listActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.state = {};

    // 区分浏览器和Node环境（Node 环境无需执行）
    if (typeof window !== 'undefined') {
      _this.getListData();
    }
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'getListData',
    value: function getListData() {
      var dispatch = this.props.dispatch;

      dispatch((0, _listActions.fetchList)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          list = _props.list;

      console.log(list);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' this is List! '
        ),
        list.data.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            { key: 'list-' + index },
            item
          );
        })
      );
    }
  }]);
  return List;
}(_react.Component);

function select(_ref) {
  var list = _ref.list;

  return { list: list };
}

exports.default = (0, _reactRedux.connect)(select)(List);