import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../reducers/list/listActions'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // 区分浏览器和Node环境（Node 环境无需执行）
    if (typeof window !== 'undefined') {
      this.getListData()
    }
  }
  getListData() {
    const { dispatch } = this.props
    dispatch(fetchList())
  }
  render() {
    const { dispatch, list } = this.props
    console.log(list)

    return <div>
      <h2> this is List! </h2>
      {
        list.data.map((item, index) => {
          return <li key={'list-' + index}>{item}</li>
        })
      }
    </div>
  }
}

function select({ list }) {
  return { list }
}

export default connect(select)(List)

