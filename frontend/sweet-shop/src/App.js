import React from 'react'
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import Customer from './components/Customer'
import UpdateUser from './components/UpdateUser'
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import './app.css'
import UserReview from './components/UserReview';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/update/user/:id" component={UpdateUser}/>
        <Route exact path="/customer/:email" component={Customer}/>
        <Route exact path="/product/details/:id" component={ProductDetails} />
        <Route exact path="/cart/:id" component={Cart}/>
        <Route exact path="/wishlist/:id" component={Wishlist}/>
        <Route exact path="/user/review/:id" component={UserReview}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
