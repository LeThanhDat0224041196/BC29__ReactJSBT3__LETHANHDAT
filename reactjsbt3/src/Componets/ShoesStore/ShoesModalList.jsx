import React, { Component } from 'react'

export default class ShoesModalList extends Component {
  render() {
    const {name, alias, price, description, quantity} = this.props.selectedShoes;

    return (
       
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Alias</td>
                  <td>{alias}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{price}$</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{quantity}</td>
                </tr>
              </tbody>
    )
  }
}
