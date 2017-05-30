import React, { Component } from 'react'
import { formatPrice } from '../helpers'
export default class Fish extends Component {
  render () {
    const { details } = this.props
    return (
      <li className='menu-fish'>
        <img src={this.props.details.image} />
        <h3 className='fish-menu'>
          {details.name}
          <span className='price'>{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button>Add To Order</button>
      </li>
    )
  }
}
