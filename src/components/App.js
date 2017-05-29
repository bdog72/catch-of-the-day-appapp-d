import React, { Component } from 'react'
// import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends Component {
  constructor () {
    super()

    this.addFish = this.addFish.bind(this)

    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish (fish) {
    const fishes = {...this.state.fishes}
    const timeStamp = Date.now()
    fishes[`fish-${timeStamp}`] = fish
    this.setState({ fishes })
  }

  render () {
    return <div>
      {/* <StorePicker /> */}
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header age='44' tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    </div>
  }
}

export default App
