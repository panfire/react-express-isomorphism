import InitialState from './listInitalState'
import constants from '../constants'

const {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILUER
} = constants
const initialState = new InitialState()

export default function listReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)
  console.log(action)
  switch (action.type) {
    case LIST_REQUEST:
      return state.set('isFetching', true)
        .set('error', null)

    case LIST_SUCCESS:
      return state.set('isFetching', false)
        .set('data', action.payload)

    case LIST_FAILUER:
      return state.set('isFetching', false)
        .set('error', action.payload)

    default:
      return state
  }
}
