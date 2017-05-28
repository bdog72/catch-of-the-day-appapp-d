import React, { Component } from 'react'
import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends Component {
  render () {
    return <div className='cathc-of-the-day'>
      <div className='menu'>
        <Header />
      </div>
      <Order />
      <Inventory />
      <StorePicker />
    </div>
  }
}

export default App
