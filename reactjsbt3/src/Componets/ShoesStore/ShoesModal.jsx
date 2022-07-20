import React, { Component } from 'react'
import danhSachGiay from "./../../Data/data.json"
import ShoesModalList from './ShoesModalList'


export default class ShoesModal extends Component {
  state = {
    selectedShoesList: danhSachGiay[0],
  }

  selectedShoesList = (shoes)=>{
    this.setState({
      selectedShoesList: shoes,
    })
  }

  renderShoesListModal = ()=>{
    return danhSachGiay.map((ele)=>{
      return(
        <table className="table" key={ele.id}>
          <ShoesModalList selectedShoes={ele} key={ele.id}>

          </ShoesModalList>
        </table>
         
      )
    })
  }
  

  render() {
return (
<div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Products Detail 
    </button>
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Products</h4>
            <button type="button" className="close" data-dismiss="modal">×</button>
          </div>
         <div className="modal-body">
              {this.renderShoesListModal()}
         </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
}
