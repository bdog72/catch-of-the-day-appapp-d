import React, { Component } from 'react'
// import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends Component {
  render () {
    return <div className='catch-of-the-day'>
      <div className='menu'>
        <Header age='44' tagline='Fresh Seafood Market' />
      </div>
      <Order />
      <Inventory />
      {/* <StorePicker /> */}
    </div>
  }
}

export default App
