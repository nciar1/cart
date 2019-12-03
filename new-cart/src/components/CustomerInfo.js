import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import './CustomerInfo.css'
import { CartOverview } from './CartOverview'




export const CustomerInfo = () => (
<Container className = 'customer-info-container'>
    
<nav>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/create-product">Shop</a></li>
        <li class="breadcrumb-item"><a href="/product-list">Cart</a></li>
        <li class="breadcrumb-item active">Place Order</li>
    </ol>
</nav>

<div class="container">
  <div class="row">
  <div class="col-9">
    
    <h1>
        Customer Information
    </h1>
    <hr />

    <div className="container">
        <form>
            <div class = "form-group">
       
                <input type= "email" class = "form-control" id="email" placeholder ="Enter email"></input>
            </div>

            <div class = "form-group">
            <div class="form-row">
    <div class="col">
                <input type= "first-name" class = "form-control" id="first-name" placeholder ="First Name"></input>
            </div>

            <div class = "form-group">
            </div>
    <div class="col">
                <input type= "last-name" class = "form-control" id="last-name" placeholder ="First Name"></input>
            </div>
            </div>
            </div>
            <hr />

            <h1> Shipping Information </h1>
            <hr />
            <div class = "form-group">
                <label for = "address"> Street Address 1: </label>
                <input type= "address" class = "form-control" id="address" placeholder ="Enter Address"></input>
            </div>

            <div class = "form-group">
                <label for = "address"> Street Address 2: </label>
                <input type= "address" class = "form-control" id="address2" placeholder ="Enter Address 2 (optional)"></input>
            </div>

            <div class = "form-group">
                <label for = "City"> City: </label>
                <input type= "city" class = "form-control" id="city" placeholder ="City"></input>
            </div>

            <div class = "form-group">
                <label for = "State"> State: </label>
                <input type= "state" class = "form-control" id="state" placeholder ="State"></input>
            </div>

            <div class = "form-group">
                <label for = "zip"> Zip Code: </label>
                <input type= "zip" class = "form-control" id="zip" placeholder ="Zip code"></input>
            </div>
        </form>

		</div>
        </div>


        <div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<Link to="/CustomerInfo">
  <button className="add-to-cart btn btn-default" type="button">Proceed Payment</button>
  </Link>
  
		

</div>
		
      
</div> 


        </div>

 
</div>  


</Container>

)


