import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { routes } from '../../src/routes'
import configureStore from '../../src/store'
import { fetchList } from '../../src/reducers/list/listActions'

export default function react(req, res, next) {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      let e = new Error(error.message)
      e.status = 5000
      return next(e)
    }

    if (redirectLocation) {
      return res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (renderProps) {
      console.log(renderProps)
      const store = configureStore()
      return store.dispatch(fetchList()).then(data => {
        const initialState = store.getState()
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )

        return res.render('index', {
          html,
          initialState: JSON.stringify(initialState)
        })
      }).catch(next)
    }

    next()
  })
}
