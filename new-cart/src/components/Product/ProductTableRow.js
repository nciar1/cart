import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./ProductTableRow.css";
import '../Cart.css'



export default class ProductTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTracker = this.deleteTracker.bind(this);

    }

    deleteTracker() {
        axios.delete('http://localhost:4000/products/delete-product/' + this.props.obj._id)
            .then((res) => {
                console.log('product successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

         
            
   

    
    }





    

    render() {

        return (

       

             <table class="table bordered">
  <tbody>
    <tr>
    
      <td>{this.props.obj.item}</td>
      <td>{this.props.obj.color}</td>
      <td>{this.props.obj.price}</td>
      <td>{this.props.obj.size}</td>
      <td><Button onClick={this.deleteTracker} size="sm" variant="danger">Delete</Button></td>
    </tr>
    </tbody>
</table>










    

        );
    }
}