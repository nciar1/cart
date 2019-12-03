// VARIABLES
import React from 'react'
var total = 0;
var gross = 0;
var tax = 0;

var totalFormat;
var grossFormat;
var taxFormat;

var selectedSize;
var selectedIndex;

var itemsArray = [];
var products = [{
  name: 'Dress Shirt',
  url: 'https://media.istockphoto.com/photos/mens-shirt-picture-id501369620',
  price: 39.99 },
{
  name: 'Blue Jeans',
  url: 'https://media.istockphoto.com/photos/blue-jeans-isolated-on-white-background-picture-id482844042',
  price: 69.99 },
];



//SHOPPING CART - SHOPPING

class SizeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      className: 'size-button',
      clicked: 0 };

  }

  //ANIMATE IF SIBLING BUTTON CLICKED
  componentWillReceiveProps(nextProps) {

    //HAS THE ADD BUTTON BEEN CLICKED
    if (nextProps.productCardIsClicked != this.state.clicked) {

      //WAS THIS THE SIBLING BUTTON
      if (nextProps.productCardClickedIndex == this.props.value) {

        //ANIMATION
        //ADD TRANSITION CLASS
        this.setState({
          className: "size-button size-alert" });


        //REMOVE FOR REUSABILITY
        setTimeout(() => {
          this.setState({
            clicked: this.state.clicked + 1,
            className: "size-button" });

        }, 300);
      }
    }
  }

  //SET THE DESIRED SIZE - REVERTS TO NULL AFTER APPLICATION FUNCTION
  clickHandler(size) {
    selectedSize = size;
    selectedIndex = this.props.value;
  }

  render() {
    const sizeDisplay = this.props.productCardSize;
    const sizeLetter = sizeDisplay.charAt(0);
    const btnValue = this.props.value;

    return (
      React.createElement("div", { className: "product-size" },
      React.createElement("button", { className: this.state.className, onClick: this.clickHandler.bind(this, sizeDisplay, btnValue) }, sizeLetter)));


  }}


class AddToCartButton extends React.Component {

  render() {
    var price = this.props.productCardPrice;
    var item = this.props.productCardName;
    var index = this.props.productCardIndex;

    return (
      React.createElement("button", { value: this.props.productCardIndex, onClick: this.props.productCardClick.bind(this, price, item, index) }, "Add"));

  }}


class ProductCard extends React.Component {

  render() {
    var url = this.props.background;
    var value = this.props.value;

    return (
      React.createElement("div", { className: "product-card-container" },
      React.createElement("div", { className: "product-card-top", style: { backgroundImage: `url(${url})` } },
      React.createElement("div", { className: "product-card-price" },
      React.createElement("div", { className: "price-sign" },
      React.createElement("h4", null, "$")),

      React.createElement("div", { className: "price-amount" },
      React.createElement("h4", null, this.props.productsPrice)))),



      React.createElement("div", { className: "product-card-bottom" },
      React.createElement("div", { className: "card-bottom-wrapper" },
      React.createElement("div", { className: "card-bottom-inside" },
      React.createElement("div", { className: "product-title" },
      React.createElement("h3", null, this.props.name)),

      React.createElement("div", { className: "product-selection" },
      React.createElement("div", { className: "size-selection" },
      React.createElement(SizeButton, { productCardIsClicked: this.props.productsIsClicked, productCardClickedIndex: this.props.productsClickedIndex, productCardSize: "Small", value: value }),
      React.createElement(SizeButton, { productCardIsClicked: this.props.productsIsClicked, productCardClickedIndex: this.props.productsClickedIndex, productCardSize: "Medium", value: value }),
      React.createElement(SizeButton, { productCardIsClicked: this.props.productsIsClicked, productCardClickedIndex: this.props.productsClickedIndex, productCardSize: "Large", value: value })),

      React.createElement("div", { className: "product-checkout" },
      React.createElement(AddToCartButton, { productCardClick: this.props.productsClick, productCardPrice: this.props.productsPrice, productCardIndex: this.props.value, productCardName: this.props.name }))))))));







  }}


class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 1,
      className: "size-button" };

  }

  render() {

    //CREATE PRODUCT CARDS
    var productElements = Object.keys(products).map((key, i) => {
      return (
        React.createElement(ProductCard, { key: i, value: i, name: products[i].name, productsPrice: products[i].price, productsIsClicked: this.props.orderScreenIsClicked, productsClick: this.props.orderScreenClick, productsClickedIndex: this.props.orderScreenClickedIndex, background: products[i].url }));

    });

    return (
      React.createElement("div", { id: "products-container" },
      productElements));


  }}


export default class ShoppingCart extends React.Component {
  render() {
    var grossAmount = this.props.gross;

    return (
      React.createElement("div", { id: "shoppingCart-container" },
      React.createElement("div", { id: "shoppingCart-top" },
      React.createElement("h1", null, "Shopping Cart")),
      React.createElement("div", { id: "shoppingCart-bottom" },
      React.createElement("h3", null, "Gross: ", grossFormat),
      React.createElement("h3", null, "Tax: ", taxFormat),
      React.createElement("h2", null, "Total: ", totalFormat),
      React.createElement("div", { id: "checkout-button-container" },
      React.createElement("button", { id: "checkout-button", onClick: this.props.orderScreenSwitch.bind(this, 1) }, "Check Out")))));




  }}


class OrderScreen extends React.Component {



  render() {
    return (
      React.createElement("div", { id: "order-container", className: this.props.applicationClass },
      React.createElement(Products, { orderScreenIsClicked: this.props.applicationClicked, orderScreenClick: this.props.applicationClick, orderScreenClickedIndex: this.props.applicationClickedIndex }),
      React.createElement(ShoppingCart, { orderScreenSwitch: this.props.applicationScreenSwitch })));


  }}


//SHOPPING CART - CHECK OUT
class ItemRow extends React.Component {
  render() {
    var index = this.props.checkOutIndex;

    return (
      React.createElement("tr", null,
      React.createElement("td", { "data-title": "name" }, this.props.checkOutName),
      React.createElement("td", { "data-title": "size" }, this.props.checkOutSize),
      React.createElement("td", { "data-title": "price" }, this.props.checkOutPrice),
      React.createElement("td", { className: "td-remove", "data-title": "remove" },
      React.createElement("button", { className: "remove-button", onClick: this.props.checkOutRemoveClick.bind(this, index) }, "-"))));



  }}


class CheckOut extends React.Component {
  render() {
    var tableRows = Object.keys(itemsArray).map((key, i) => {

      return React.createElement(ItemRow, { checkOutName: itemsArray[i].itemType, checkOutSize: itemsArray[i].size.charAt(0), checkOutPrice: itemsArray[i].price, checkOutIndex: i, checkOutRemoveClick: this.props.applicationRemoveClick });
    });

    return (
      React.createElement("div", { id: "checkout-container" },
      React.createElement("div", { id: "checkout-container-wrapper" },
      React.createElement("div", { id: "checkout-container-inside" },
      React.createElement("div", { id: "back-button-container" },
      React.createElement("button", { className: "checkout-button", onClick: this.props.applicationScreenSwitch.bind(this, 2) }, "Back")),

      React.createElement("div", { id: "shoppingcart-list-container" },
      React.createElement("table", null,
      React.createElement("thead", null,
      React.createElement("tr", null,
      React.createElement("th", null, "Item"),
      React.createElement("th", null, "Size"),
      React.createElement("th", null, "Price"),
      React.createElement("th", null, "Remove"))),


      React.createElement("tbody", null,
      tableRows))),



      React.createElement("div", { id: "shoppingcart-checkout-container" },
      React.createElement("div", { id: "shoppingcart-total" },
      React.createElement("h2", null, "Total: ", totalFormat)),

      React.createElement("div", { id: "shoppingcart-checkout-button" },
      React.createElement("button", { className: "checkout-button" }, "Check Out")))))));






  }}


//SHOPPING CART - APP
class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      orderFade: '',
      containerSlide: '',
      clickedIndex: null,
      items: null };


    this.screenSwitch = this.screenSwitch.bind(this);
    this.applicationClick = this.applicationClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
  }

  //SCREEN SWITCH ANIMATION
  screenSwitch(x) {
    if (x == 1) {
      this.setState({
        orderFade: 'order-container-fade',
        containerSlide: 'screen-swipe' });

    }if (x == 2) {
      this.setState({
        orderFade: '',
        containerSlide: '' });

    }
  }

  //UPDATES UI ON ADD BUTTON CLICK
  //THIS IS PASSED TO ADD BUTTON
  //GETS INFORMATION FROM SIZE BUTTONS
  applicationClick(amount, item, index) {

    //IF SELECTED SIZE IS BLANK NOTIFY THAT SIZE NEEDS TO BE SELECTED
  if (selectedSize != null && selectedIndex == index) {

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
        price: amount });

    }

    //RESET SIZE & INDEX SO SIZE ANIMATION CAN RERUN
    selectedSize = null;
    selectedIndex = null;

    //UPDATE UI
    this.setState({
      clickedIndex: null,
      items: this.state.items + 1 });


  }

  //REMOVE ITEMS IN CHECK OUT
  removeClick(index) {
    //REMOVE ITEM INFO
    gross = gross - itemsArray[index].price;
    tax = gross * .0825;
    total = gross + tax;

    grossFormat = Math.abs(gross.toFixed(2));
    taxFormat = Math.abs(tax.toFixed(2));
    totalFormat = Math.abs(total.toFixed(2));

    itemsArray.splice(index, 1);

    this.setState({
      items: this.state.items - 1 });

  }

  render() {
    return (
      React.createElement("div", { id: "app-container" },
      React.createElement("div", { id: "app-container-inside", className: this.state.containerSlide },
      React.createElement(OrderScreen, { applicationScreenSwitch: this.screenSwitch, applicationClass: this.state.orderFade, applicationClick: this.applicationClick, applicationClickedIndex: this.state.clickedIndex, applicationIsClicked: this.state.clicked }),
      React.createElement(CheckOut, { applicationScreenSwitch: this.screenSwitch, applicationRemoveClick: this.removeClick }))));



  }}


