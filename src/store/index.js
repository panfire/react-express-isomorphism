import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const createStoreWidthMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  return createStoreWidthMiddleware(reducers, initialState)
}
