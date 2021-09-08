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
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import UnknownPage from './components/UnknownPage';
import UserOrders from './components/UserOrders';
import UserTransactions from './components/UserTransactions';
import Search from './components/Search';

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
        <Route exact path="/checkout/:total/:id" component={Checkout} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/orders/:id" component={UserOrders}/>
        <Route exact path="/transactions/:id" component={UserTransactions}/>
        <Route exact path="/search/:search" component={Search} />
        <Route component={UnknownPage}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
