import React, { Component } from 'react'

export default class Shoes extends Component {
  render() {
    
    const {image, name, price, description } = this.props.item;

    return (
    <div className="card" style={{width: 400}}>
        <img className="card-img-top" src={image} alt="Card image" />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-dark">Add to card</a>
        </div>
    </div>

    )
  }
}
