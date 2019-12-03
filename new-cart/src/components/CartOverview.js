import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import { Link } from 'react-router-dom';



export const CartOverview = () => (
<Container className = 'cart-overview-container'>
<div class="card">

  <div class="card-body">
    <h5 class="card-title">Order Overview</h5>
    <hr />

    <div class="container">
  <table class="table">
 


  <thead>
  <tr>
      <th scope="col"></th>
      <th scope="col"></th>
     

    </tr>

    </thead>
  <tbody>
  <tr>
      <th scope="row">Subtotal</th>
    </tr>

  <tr>
      <th scope="row">Shipping</th>
    </tr>

    <tr>
      <th scope="row">Total</th>
    </tr>



    
  </tbody>
</table>
</div>

  </div>
</div>

</Container>
)