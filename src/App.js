import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Productlist/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<Default/>} />
        </Routes>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
