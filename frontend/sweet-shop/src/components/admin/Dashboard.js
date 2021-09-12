import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isAdminLoggedIn: localStorage.getItem('isAdminLoggedIn')
        }
    }
    componentDidMount = () =>{
        if(!this.state.isAdminLoggedIn){
            this.props.history.push('/admin/login');
        }else{

        }
    }

    handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('isAdminLoggedIn')
        this.props.history.push('/admin/login')
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{background:'pink'}}>
                    <div className="col-6">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-6 text-end">
                        <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="row mt-5" align="center">
                    <div className="col-5 px-5 py-5 mx-5 mt-4" style={{background:"red", color:'white'}}>
                        <Link to="/admin/product"><h3>Products</h3></Link>
                    </div>
                    <div className="col-5 px-5 py-5 mx-5 mt-4" style={{background:"blue", color:'white'}}>
                        <Link to="/admin/categories"><h3 className="text-white">Categories</h3></Link>
                    </div>
                    <div className="col-5 px-5 py-5 mx-5 mt-4" style={{background:"yellow"}}>
                        <Link to="/admin/users"><h3>Users</h3></Link>
                    </div>
                    <div className="col-5 px-5 py-5 mx-5 mt-4" style={{background:"pink"}}>
                        <Link to="/admin/orders"><h3>Orders</h3></Link>
                    </div>
                    <div className="col-5 px-5 py-5 mx-5 mt-4" style={{background:"orange"}}>
                        <Link to="/admin/productDetails"><h3>Product Details</h3></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;