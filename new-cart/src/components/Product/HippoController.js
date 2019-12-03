import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import './ProductTableRow.css'
import productPhotos from '../DSC_0056.JPG'




export default class HippoController extends Component {

  constructor(props) {
    super(props)
  
    this.onChangeProductColor = this.onChangeProductColor.bind(this);
    this.onChangeProductSize = this.onChangeProductSize.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      item: 'Hippo',
      description: 'This is the description',
      color: '',
      price: '9.95',
      size: '',
    }
  }

  onChangeProductColor(e) {
    this.setState({ color: e.target.value })
  }

  onChangeProductPrice(e) {
    this.setState({ price: e.target.value })
  }

  onChangeProductSize(e) {
    this.setState({ size: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const trackerObject = {
      item: this.state.item,
      description: this.state.description,
      color: this.state.color,
      quantity: this.state.quantity,
      price: this.state.price,
      size: this.state.size,
    
     
    };


    axios.post('http://localhost:4000/products/create-product',trackerObject)
      .then(res => console.log(res.data));

    this.setState({ 
      item: 'Hippo',
    description: 'This is the description',
    color: '',
    price: '9.95',
    size: '',
    quantity:''
    
  })

     // Redirect to List 
     this.props.history.push('/create-product')
   
  }

  render() {
    return (
    <div className="form-wrapper">
      <Card>
       <Form onSubmit={this.onSubmit}>

      
<div className="wrapper row">
  <div className="col-md-6">
      <img src={productPhotos} />
  </div>
  <div className="col-md-6">
    <h3 className="product-title">{this.state.item}</h3>
    <p className="product-description">{this.state.description}</p>
    <p className="product-price">{this.state.price}</p>
    
    <br></br>
                
                  


    <Form.Group controlId="Name">
    <Form.Label>Color</Form.Label>
    <div class="custom-radios">
<div>
<input type="radio" id="color-1" name="color" value="green" onChange={this.onChangeProductColor}/>
<label for="color-1">
<span>
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
</span>
</label>
</div>

<div>
<input type="radio" id="color-2" name="color" value="blue" onChange={this.onChangeProductColor}/>
<label for="color-2">
<span>
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
</span>
</label>
</div>
</div>
  </Form.Group>


  <Form.Group controlId="Name">
    <Form.Label>Size </Form.Label>
    <br></br>
    <select type="text" value={this.state.size} onChange={this.onChangeProductSize}>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
  </select>
  </Form.Group>

  </div></div>

   
  
        <Button variant="danger" size="lg" block="block" type="submit">
          Add to Cart
        </Button>
      </Form>

      </Card>



    </div>);

  }
}