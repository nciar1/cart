import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Stepper from 'react-stepper-horizontal';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class EditCart extends Component {

  constructor(props) {
    super(props)

    this.onChangeQuantity = this.onChangeQuantity.bind(this);





    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
     size:'',
      quantity:''
    
      
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products/edit-product/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          item:res.data.item,
      description: res.data.description,
      color: res.data.color,
      price:res.data.price,
       size: res.data.size,
       quantity: res.data.quantity
     

        });

      })
      .catch((error) => {
        console.log(error);
      })
  }

 

  onChangeQuantity(e) {
    this.setState({ size: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const trackerObject = {
      item: this.state.item,
      description: this.state.description,
      color: this.state.color,
      price: this.state.price,
      size: this.state.size,
      quantity: this.state.quantity,
    };


    axios.put('http://localhost:4000/products/update-product/' + this.props.match.params.id, trackerObject)
      .then((res) => {
        console.log(res.data)
        console.log('product successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to List 
    this.props.history.push('/product-list')
  }


  render() {
    return (
  
      <div className="form-wrapper">
      <Card.Header>Hippo</Card.Header>
      <p>{this.state.item}</p>
      <p>{this.state.description}</p>
      <p>{this.state.price}</p>
          <Form onSubmit={this.onSubmit}>
          
          <Form.Group controlId="Name">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" onChange={this.onChangeProductColor} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Size</Form.Label>
            <Form.Control type="text" onChange={this.onChangeProductSize}/>
          </Form.Group>

  
        <Button variant="danger" size="lg" block="block" type="submit">
          Update product
        </Button>
      </Form>
    
    </div>);
  }
}
