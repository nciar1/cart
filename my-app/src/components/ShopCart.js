import React from 'react';
import './Cart.css'
var products = [{
  name: 'Hippo',
  url: 'https://media.istockphoto.com/photos/mens-shirt-picture-id501369620',
  description: 'Hand hend ',
  price: 9.95
},{
  name: 'Car',
  url: 'https://media.istockphoto.com/photos/blue-jeans-isolated-on-white-background-picture-id482844042',
  description: 'Hand hend ',
  price: 9.95
}]
var total = 0;
var gross = 0;
var tax = 0;
var grossFormat;
var taxFormat;
var totalFormat;
var selectedSize;
var selectedIndex;
var itemsArray = [];


export default class ShopCart extends React.Component {
  constructor(){
    super();
    this.state = {
      orderFade: '',
      containerSlide: '',
      clickedIndex: null,
      items: null
    }
    
    this.screenSwitch = this.screenSwitch.bind(this);
    this.applicationClick = this.applicationClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
  }
  
  //SCREEN SWITCH ANIMATION
  screenSwitch(x){
    if(x == 1){
      this.setState({
        orderFade: 'order-container-fade',
        containerSlide: 'screen-swipe'
      })
    }if(x == 2){
      this.setState({
        orderFade: '',
        containerSlide: ''
      })
    }
  }
  
  //UPDATES UI ON ADD BUTTON CLICK
  //THIS IS PASSED TO ADD BUTTON
  //GETS INFORMATION FROM SIZE BUTTONS
  applicationClick(amount, item, index){
    
 if(selectedSize != null && selectedIndex == index){
    
      //CALC TOTALS
      gross = gross + amount;
      tax = gross * .0825;
      total = gross + tax;

      grossFormat = gross.toFixed(2);
      taxFormat = tax.toFixed(2);
      totalFormat = total.toFixed(2);

      //UPDATE SHOPING CART
      itemsArray.push({
        itemType: item,
        size: selectedSize,
        price: amount
      });
    }
    
    //RESET SIZE & INDEX SO SIZE ANIMATION CAN RERUN
    selectedSize = null;
    selectedIndex = null;
    
    //UPDATE UI
    this.setState({
      clickedIndex: null,
      items: this.state.items + 1
    });
    
  }
  
  //REMOVE ITEMS IN CHECK OUT
  removeClick(index){
    //REMOVE ITEM INFO
    gross = gross - itemsArray[index].price;
    tax = gross * .0825;
    total = gross + tax;
    
    grossFormat = Math.abs(gross.toFixed(2));
    taxFormat = Math.abs(tax.toFixed(2));
    totalFormat = Math.abs(total.toFixed(2));
    
    itemsArray.splice(index, 1);
    
    this.setState({
      items: this.state.items - 1
    });
  }
  
  render(){
    return(
      <div>
        <div id="app-container-inside" className={this.state.containerSlide}>
          <OrderScreen applicationScreenSwitch={this.screenSwitch} applicationClass={this.state.orderFade} applicationClick={this.applicationClick} applicationClickedIndex={this.state.clickedIndex} applicationIsClicked={this.state.clicked}/>
          <CheckOut applicationScreenSwitch={this.screenSwitch} applicationRemoveClick={this.removeClick}/>
        </div>
      </div>
    )
  }
}

export class OrderScreen extends React.Component {

  render(){
    return(
      <div id="order-container" className={this.props.applicationClass}>
        <Products orderScreenIsClicked={this.props.applicationClicked} orderScreenClick={this.props.applicationClick} orderScreenClickedIndex={this.props.applicationClickedIndex}/>
        <ShoppingCart orderScreenSwitch={this.props.applicationScreenSwitch}/>
      </div>
    );
  }
}

export class ShoppingCart extends React.Component {
  render(){
    var grossAmount = this.props.gross;

    return(
      <div id="shoppingCart-container">
        <div id="shoppingCart-top">
          <h1>Shopping Cart</h1>
        </div>
        <div >
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

export class AddToCartButton extends React.Component {
  
  render(){
    var price = this.props.productCardPrice;
    var item = this.props.productCardName;
    var index = this.props.productCardIndex;
    
    return(
      <button value={this.props.productCardIndex} onClick={this.props.productCardClick.bind(this, price, item, index)}>Add</button>
    );
  }
}

export class ProductCard extends React.Component {
  
  render(){
    var url = this.props.background;
    var value = this.props.value;
    
    return(
      <div className="product-card-container">
      
      <b>
         {this.props.name}
       </b>
       <b>
         {this.props.price}
       </b>

       <div className="wrapper row">
					<div className="col-md-6">
						  <img src={productPhotos} />
					</div>

              <div className="product-selection">
                  <div className="size-selection">
                      <SizeButton productCardIsClicked={this.props.productsIsClicked} productCardClickedIndex={this.props.productsClickedIndex} productCardSize="Small" value={value}/>
                      <SizeButton productCardIsClicked={this.props.productsIsClicked} productCardClickedIndex={this.props.productsClickedIndex} productCardSize="Medium" value={value}/>
                      <SizeButton productCardIsClicked={this.props.productsIsClicked} productCardClickedIndex={this.props.productsClickedIndex} productCardSize="Large" value={value}/>
                    </div>
                
                  <AddToCartButton productCardClick={this.props.productsClick} productCardPrice={this.props.productsPrice} productCardIndex={this.props.value} productCardName={this.props.name}/>
               
              </div>
            </div>
      
    );
  }
}






export class Products extends React.Component {
    constructor(){
      super();
      this.state = {
        clicked: 1,
        className: "size-button"
      }
    }
    
    render(){
      
      //CREATE PRODUCT CARDS
      var productElements = Object.keys(products).map((key, i) => {
        return(
          <ProductCard key={i} value={i} name={products[i].name} productsPrice={products[i].price} productsIsClicked={this.props.orderScreenIsClicked} productsClick={this.props.orderScreenClick} productsClickedIndex={this.props.orderScreenClickedIndex} background={products[i].url}/>
        );
      });
      
      return(
        <div id="products-container">
          {productElements}
       </div>
      );
    }
  }

  export class SizeButton extends React.Component{
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

  var itemsArray = [];
var totalFormat;



export class CheckOut extends React.Component {
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

  