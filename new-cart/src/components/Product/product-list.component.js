import React, { Component } from "react";
import axios from 'axios';
import ProductTableRow from './ProductTableRow';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {CartOverview} from '../CartOverview'




export default class CartList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products/')
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
      this.props.history.push('/product-list')
      
  }

  

  DataTable() {
    return this.state.products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (

    

      <Container>


      <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/create-product">Shop</a></li>
  <li class="breadcrumb-item active">Cart</li>
</ol>

          

<div class="row">
  <div class="col-9">
    <div className="shop-container">
		<div className="card">
        </div>   

  
          {this.DataTable()}
          
          </div>
          </div>
          <div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<Link to="/CustomerInfo">
  <button type="button" class="btn btn-primary">Proceed to Order</button>
  </Link>
  </div>
  </div>   
        
         </div>
        
			

    </Container>
    
    );

  }
}