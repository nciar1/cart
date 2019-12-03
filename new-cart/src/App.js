import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NotFound from "./views/NotFound"

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import HippoController from "./components/Product/HippoController";
import EditCart from "./components/Product/edit-product.component";
import CartList from "./components/Product/product-list.component";
import mainCart from "./components/mainCart";
import CarController from './components/Product/CarController'
import {CustomerInfo} from './components/CustomerInfo'

function App() {
  return (<Router>
    <div className="App">
  
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
            
                <Route path="/create-product" component={mainCart} />
                <Route path="/edit-product/:id" component={EditCart} />
                <Route path="/product-list" component={CartList} />
                <Route exact path='/CarController' component={CarController} />                
                <Route exact path='/HippoController' component={HippoController} />
                <Route exact path='/CartList' component={CartList} />
                <Route exact path='/CustomerInfo' component={CustomerInfo} />
                <Route component={NotFound}/>
               


              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;