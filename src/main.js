import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './routes'
import configureStore from './store'

const initialState = window.__INITIAL_STATE__ || {}
const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
