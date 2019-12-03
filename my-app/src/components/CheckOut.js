import React from 'react'
import './Cart.css'


var itemsArray = [];
var totalFormat;



export default class CheckOut extends React.Component {
    render(){
      var tableRows = Object.keys(itemsArray).map((key, i) => {
        
        return(<ItemRow checkOutName={itemsArray[i].itemType} checkOutSize={itemsArray[i].size.charAt(0)} checkOutPrice={itemsArray[i].price} checkOutIndex={i} checkOutRemoveClick={this.props.applicationRemoveClick}/>)
      })
      
      return(
        <div id="checkout-container">
          <div id="checkout-container-wrapper">
            <div id="checkout-container-inside">
              <div id="back-button-container">
              <button className="checkout-button" onClick={this.props.applicationScreenSwitch.bind(this, 2)}>Back</button>
              </div>
              <div id="shoppingcart-list-container">
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows}
                  </tbody>
                </table>
              </div>
              <div id="shoppingcart-checkout-container">
                <div id="shoppingcart-total">
                  <h2>Total: {totalFormat}</h2>
                </div>
                <div id="shoppingcart-checkout-button">
                  <button className="checkout-button">Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export class ItemRow extends React.Component {
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