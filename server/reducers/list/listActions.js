'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchListRequest = fetchListRequest;
exports.fetchListSuccess = fetchListSuccess;
exports.fetchListFailure = fetchListFailure;
exports.fetchList = fetchList;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _api = require('../../lib/api');

var Api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_REQUEST = _constants2.default.LIST_REQUEST,
    LIST_SUCCESS = _constants2.default.LIST_SUCCESS,
    LIST_FAILURE = _constants2.default.LIST_FAILURE;
function fetchListRequest() {
  return {
    type: LIST_REQUEST
  };
}

function fetchListSuccess(json) {
  return {
    type: LIST_SUCCESS,
    payload: json
  };
}

function fetchListFailure(err) {
  return {
    type: LIST_FAILURE,
    payload: err
  };
}

function fetchList() {
  return function (dispatch) {
    dispatch(fetchListRequest());

    return Api.fetchList().then(function (json) {
      dispatch(fetchListSuccess(json));
    }).catch(function (err) {
      dispatch(fetchListFailure(err));
    });
  };
}