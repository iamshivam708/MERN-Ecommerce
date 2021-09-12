import React, { Component } from 'react'
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
import AdminLogin from './components/admin/Login'
import AdminDashboard from './components/admin/Dashboard'
import AdminProduct from './components/admin/Product';
import AddProduct from './components/admin/AddProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import AdminUsers from './components/admin/User';
import AdminCategory from './components/admin/Category';
import AdminOrders from './components/admin/Orders';
import UpdateCategory from './components/admin/UpdateCategory';
import AddCategory from './components/admin/AddCategory';
import AdminProductDetails from './components/admin/ProductDetails';
import AddProductDetails from './components/admin/AddProductDetails';
import UpdateProductDetails from './components/admin/UpdateProductDetails';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      isAdminLoggedIn: localStorage.getItem('isAdminLoggedIn')
    }
  }
  
  render(){
  return (
    <BrowserRouter>
        <div className="app">
        {(() =>{
              if(this.state.isAdminLoggedIn  !== 'true'){
                  return <Header/>
                  }else{
                      return 
                  }
              })()}
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
            <Route exact path="/admin/login" component={AdminLogin}/>
            <Route exact path="/admin/dashboard" component={AdminDashboard}/>
            <Route exact path="/admin/product" component={AdminProduct}/>
            <Route exact path="/admin/add/product" component={AddProduct}/>
            <Route exact path="/admin/update/product/:id" component={UpdateProduct}/>
            <Route exact path="/admin/users" component={AdminUsers} />
            <Route exact path="/admin/categories" component={AdminCategory} />
            <Route exact path="/admin/orders" component={AdminOrders} />
            <Route exact path='/admin/update/category/:id' component={UpdateCategory}/>
            <Route exact path="/admin/add/category" component={AddCategory}/>
            <Route exact path="/admin/productDetails" component={AdminProductDetails} />
            <Route exact path="/admin/add/productDetails" component={AddProductDetails} />
            <Route exact path='/admin/update/productDetails/:id' component={UpdateProductDetails}/>
            <Route component={UnknownPage}/>
          </Switch>
          {(() =>{
              if(this.state.isAdminLoggedIn  !== 'true'){
                  return <Footer/>
                  }else{
                      return 
                  }
              })()}
        </div>
    </BrowserRouter>
  );
  }
}

export default App;
