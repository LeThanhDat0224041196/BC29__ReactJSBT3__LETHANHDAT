import React, { Component } from 'react'

export default class Shoes extends Component {
  render() {
    
    const {image, name, price, description } = this.props.item;

    return (
    <div className="card" style={{width: 400}}>
        <img className="card-img-top" src={image} alt />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}$</p>
            {/* <div className="mb-2">{this.props.children}</div> */}
            <button href="#" className="btn btn-dark">Add to card</button>
        </div>
    </div>

    )
  }
}

// onClick={() => this.props.showDescription(description)} 