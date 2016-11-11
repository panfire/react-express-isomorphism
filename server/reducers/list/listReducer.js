'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listReducer;

var _listInitalState = require('./listInitalState');

var _listInitalState2 = _interopRequireDefault(_listInitalState);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_REQUEST = _constants2.default.LIST_REQUEST,
    LIST_SUCCESS = _constants2.default.LIST_SUCCESS,
    LIST_FAILUER = _constants2.default.LIST_FAILUER;

var initialState = new _listInitalState2.default();

function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (!(state instanceof _listInitalState2.default)) return initialState.mergeDeep(state);
  console.log(action);
  switch (action.type) {
    case LIST_REQUEST:
      return state.set('isFetching', true).set('error', null);

    case LIST_SUCCESS:
      return state.set('isFetching', false).set('data', action.payload);

    case LIST_FAILUER:
      return state.set('isFetching', false).set('error', action.payload);

    default:
      return state;
  }
}