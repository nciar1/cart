import React from 'react'
import ProductCard from './ProductCard'
import './Cart.css'


var products = [{
  name: 'Dress Shirt',
  url: 'https://media.istockphoto.com/photos/mens-shirt-picture-id501369620',
  price: 39.99
},{
  name: 'Blue Jeans',
  url: 'https://media.istockphoto.com/photos/blue-jeans-isolated-on-white-background-picture-id482844042',
  price: 69.99
},{name: 'Penny Loafers',
   url: 'https://media.istockphoto.com/photos/red-leather-loafers-isolated-on-white-background-picture-id627298304',
  price: 89.99
},{
  name: 'Blazer',
  url: 'https://media.istockphoto.com/photos/mens-jacket-isolated-on-white-with-clipping-path-picture-id482020160',
  price: 129.99
}]


export default class Products extends React.Component {
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
  