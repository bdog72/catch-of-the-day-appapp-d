import React, { Component } from 'react'
// import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
class App extends Component {
  constructor () {
    super()

    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)

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

  loadSamples () {
    this.setState({
      fishes: sampleFishes
    })
  }

  render () {
    return <div>
      {/* <StorePicker /> */}
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header age='44' tagline='Fresh Seafood Market' />
          <ul className='list-od-fishes'>
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key}
                  details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    </div>
  }
}

export default App
