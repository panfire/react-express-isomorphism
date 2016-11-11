import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Index extends Component {
  render() {
    return <div>
      <h1>this is Index!</h1>
      <ul>
        <li><IndexLink activeClassName="active" to="/">Index</IndexLink></li>
        <li><Link activeClassName="active" to={'/about'}>About</Link></li>
        <li><Link activeClassName="active" to={'/list'}>List</Link></li>
      </ul>
      <div className="content">{this.props.children}</div>
    </div>
  }
}
