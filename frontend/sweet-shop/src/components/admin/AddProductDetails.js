import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productId:'',
             keyFeatures:'',
             seller:'',
             description:'',
             manufacturingDetails:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var details = {
             productId:this.state.productId,
             keyFeatures:this.state.keyFeatures,
             seller:this.state.seller,
             description:this.state.description,
             manufacturingDetails:this.state.manufacturingDetails
        }

        var url="http://localhost:5000/productDetails";
        axios.post(url, details).then(() =>{
            this.props.history.push('/admin/productDetails');
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{ background: "pink" }}>
                <div className="col-6">
                    <Link to="/admin/productDetails" className="nav-link">
                    <h3>Product Details Dashboard</h3>
                    </Link>
                </div>
                </div>
                <div className="row mt-5 px-5 py-5">
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="mb-2">
                            <label>Product Id</label>
                            <input onChange={e => this.setState({productId: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Key Features</label>
                            <input onChange={e => this.setState({keyFeatures: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Seller Details</label>
                            <input onChange={e => this.setState({seller: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Description</label>
                            <input onChange={e => this.setState({description: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Manufacturing Details</label>
                            <input onChange={e => this.setState({manufacturingDetails: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProductDetails;