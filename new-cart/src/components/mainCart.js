import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CarController from "./Product/CarController";
import HippoController from "./Product/HippoController"
import productPhotos from './DSC_0056.JPG'
import { Link } from 'react-router-dom';
import {CartOverview} from "./CartOverview"
import Container from 'react-bootstrap/Container'
import './Cart.css'




export default class mainCart extends Component {
    render() {
        return (
            <Container className = 'container'>

<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item active">Shop</li>
</ol>


    <h>
        Scoot n Doodle Shop
    </h>
    <hr/>

	<div class="row">
  <div class="col-9">
    <div className="shop-container">
		<div className="card">
				<div className="wrapper row">
					<div className="col-md-6">
						  <img src={productPhotos} />
					</div>
					<div className="col-md-6">
						<h3 className="product-title">Hippo</h3>
						<p className="product-description">Description of Product</p>
						
						<br></br>
                        <Link to="/HippoController">
  <button className="add-to-cart btn btn-default" type="button">View More</button>
  </Link>
                           

            
						</div>
					</div>
				</div>
			</div>
		

 

        <div className="shop-container">
		<div className="card">
				<div className="wrapper row">
					<div className="col-md-6">
                    <img src={productPhotos} />					
                    </div>
					<div className="col-md-6">
						<h3 className="product-title">Car</h3>
						<p className="product-description">Description of Product</p>
					
					
                       
<br></br>
						<Link to="/CarController">
  <button className="add-to-cart btn btn-default" type="button">View More</button>
  </Link>
					</div>
				</div>
			</div>

			

          
		</div>
		

		</div>

		
		<div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<Link to="/CartList">
  <button className="add-to-cart btn btn-default" type="button">Proceed to Cart</button>
  </Link>
		
</div>
			
		</div>
		
		</div>
		


	
		

 </Container>  
 
        )
    }
}
