import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";


export default class ProductView extends Component {
    render() {
        return (
            <div>
            <Link to={"/create-product"} className="nav-link">
                  Create product
                </Link>
                <Link to={"/edit-product/:id"} className="nav-link">
                  Edit product
                </Link>
                <Link to={"/product-list"} className="nav-link">
                  product List
                </Link>

            </div>
        )
    }
}
