import React from 'react'
import './Cart.css'


export default class ItemRow extends React.Component {
    render(){
      var index = this.props.checkOutIndex;
      
      return(
        <tr>
          <td data-title="name">{this.props.checkOutName}</td>
          <td data-title="size">{this.props.checkOutSize}</td>
          <td data-title="price">{this.props.checkOutPrice}</td>
          <td className="td-remove" data-title="remove">
            <button className="remove-button" onClick={this.props.checkOutRemoveClick.bind(this, index)}>-</button>
          </td>
        </tr>
      )
    }
  }
  