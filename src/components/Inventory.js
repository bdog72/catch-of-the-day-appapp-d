import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
export default class Inventory extends Component {
  render () {
    return <div>
      <h1>Inventory</h1>
      <AddFishForm addFish={this.props.addFish} />
      <button>Load Sample Fishes</button>
    </div>
  }
}
