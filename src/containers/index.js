import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Index extends Component {
  render() {
    return <div>
      <h1>this is Index!</h1>
      <ul>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/list'}>List</Link></li>
      </ul>
      <div className="content">{this.props.children}</div>
    </div>
  }
}
