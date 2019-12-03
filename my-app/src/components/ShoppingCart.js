import React from 'react'
import './Cart.css'


var taxFormat;
var totalFormat;
var grossFormat;

export default class ShoppingCart extends React.Component {
    render(){
      var grossAmount = this.props.gross;
  
      
      
      return(
        <div id="shoppingCart-container">
          <div id="shoppingCart-top">
            <h1>Shopping Cart</h1>
          </div>
          <div id="shoppingCart-bottom">
            <h3>Gross: {grossFormat}</h3>
            <h3>Tax: {taxFormat}</h3>
            <h2>Total: {totalFormat}</h2>
            <div id="checkout-button-container">
              <button id="checkout-button" onClick={this.props.orderScreenSwitch.bind(this, 1)}>Check Out</button>
            </div>
          </div>
        </div>
      );
    }
  }
  