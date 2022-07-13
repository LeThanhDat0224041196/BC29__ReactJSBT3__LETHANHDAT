import React, { Component } from 'react'

import danhSachGiay from "../../Data/data.json";
import Shoes from './Shoes';


export default class ShoesStore extends Component {
  renderShoesList = ()=>{
    return danhSachGiay.map((ele)=>{
      return(
        <div className='col-4' key={ele.id}>
          <Shoes showDescription={this.showDescription} item={ele}>

          </Shoes>
        </div>
      )
    })
  }
  
  // showDescription = (description)=>{
  //   alert(description)
  // }
  
  
  
  render() {
    return <div className='row'>
      {this.renderShoesList()}
      </div>;
  }
}
