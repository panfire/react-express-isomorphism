import constants from '../constants'
import * as Api from '../../lib/api'

const {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE
} = constants

export function fetchListRequest() {
  return {
    type: LIST_REQUEST
  }
}

export function fetchListSuccess(json) {
  return {
    type: LIST_SUCCESS,
    payload: json
  }
}

export function fetchListFailure(err) {
  return {
    type: LIST_FAILURE,
    payload: err
  }
}

export function fetchList() {
  return dispatch => {
    dispatch(fetchListRequest())

    return Api.fetchList().then(json => {
      dispatch(fetchListSuccess(json))
    }).catch(err => {
      dispatch(fetchListFailure(err))
    })
  }
}
