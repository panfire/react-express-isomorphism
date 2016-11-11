import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Index from '../containers/Index'
import About from '../containers/About'
import List from '../containers/List'
import Home from '../containers/Home'

const RouterWidthRedux = connect()(Router)

export const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="list" component={List}/>
  </Route>
)

export default class Routes extends Component {
  render() {
    return <RouterWidthRedux history={browserHistory}>
      {routes}
    </RouterWidthRedux>
  }
}
