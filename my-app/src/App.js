import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ShopCart from './components/ShopCart'



function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/ShopCart' component={ShopCart} />
      
      </Router>
    

    </div>
  );
}

export default App;
