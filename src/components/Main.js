import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router'
import StorePicker from './StorePicker'
import App from './App'

const Main1 = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={StorePicker} />
        <Match exactly pattern='/store/:storeId' component={App} />
      </div>
    </BrowserRouter>
  )
}
export default class Main extends Component {
  render () {
    return <div>
      <Main1 />
    </div>
  }
}
