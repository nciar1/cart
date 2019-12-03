import React from 'react';
import './Cart.css'

var selectedSize
var selectedIndex


export default class SizeButton extends React.Component{
    constructor(){
      super();
      this.state = {
        className: 'size-button',
        clicked: 0
      }
    }
    
    //ANIMATE IF SIBLING BUTTON CLICKED
    componentWillReceiveProps(nextProps){
       
      //HAS THE ADD BUTTON BEEN CLICKED
      if(nextProps.productCardIsClicked != this.state.clicked){
         
        //WAS THIS THE SIBLING BUTTON
        if(nextProps.productCardClickedIndex == this.props.value){
  
          //ANIMATION
          //ADD TRANSITION CLASS
          this.setState({
            className: "size-button size-alert"
          });
  
          //REMOVE FOR REUSABILITY
          setTimeout(() => {
            this.setState({
              clicked: this.state.clicked + 1,
              className: "size-button"
            });
          }, 300);
        }
      }
    }
    
    //SET THE DESIRED SIZE - REVERTS TO NULL AFTER APPLICATION FUNCTION
    clickHandler(size){
    selectedSize = size;
  selectedIndex = this.props.value;
    }
    
    render(){
      const sizeDisplay = this.props.productCardSize;
      const sizeLetter = sizeDisplay.charAt(0);
      const btnValue = this.props.value;
      
      return(
        <div className="product-size">
          <button className={this.state.className} onClick={this.clickHandler.bind(this, sizeDisplay, btnValue)}>{sizeLetter}</button>
        </div>
      );
    }
  }
