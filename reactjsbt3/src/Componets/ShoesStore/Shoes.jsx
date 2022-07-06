import React, { Component } from 'react'

export default class Shoes extends Component {
  render() {
    return (
    <div className="card" style={{width: 400}}>
        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">Add to card</a>
        </div>
    </div>

    )
  }
}
