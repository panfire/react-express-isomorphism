import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

/**
 * containers
 */
import Index from 'containers/Index'
import About from 'containers/About'
import List from 'containers/List'
import Home from 'containers/Home'

export default class Routes extends Component {
  render() {
    return <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="list" component={List}/>
      </Route>
    </Router>
  }
}
