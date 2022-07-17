import React, { Component } from 'react'
import ShoesModal from './ShoesModal';


export default class Shoes extends Component {
  render() {
    
    const {image, name, price, shortDescription} = this.props.item;

    return (
    <div className="card" style={{width: 400}}>
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}$</p>
            <p className="card-text">{shortDescription}</p>
            <button href="#" className="btn btn-dark">Add to cart</button>
            <ShoesModal />
        </div>
    </div>

    )
  }
}

// onClick={() => this.props.showDescription(description)} 