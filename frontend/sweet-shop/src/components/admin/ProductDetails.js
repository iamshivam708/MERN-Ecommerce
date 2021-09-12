import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productDetails:[]
        }
    }

    componentDidMount = () =>{
        var url="http://localhost:5000/productDetails";
        axios.get(url).then((res) =>{
            console.log(res.data);
            this.setState({
                productDetails: res.data
            })
        }).catch((err) =>{
            console.log(err);
        })
    }

    handleDelete(id){
        return (event) => {
            event.preventDefault();
            var url = `http://localhost:5000/productDetails/${id}`
            axios.delete(url).then((res) =>{
                window.location.reload();
            }).catch((err) =>{
                console.log(err);
            })
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{background:'pink'}}>
                    <div className="col-6">
                        <Link to="/admin/dashboard"><h2>Product Dashboard</h2></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/productDetails" className="btn btn-primary">Add Product Details</Link>
                    </div>
                </div>
                <div className="row mt-5 px-5 py-5">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Id</th>
                                <th>Description</th>
                                <th>Key Features</th>
                                <th>Manufacturing Details</th>
                                <th>Seller</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productDetails.map((productDetail) =>(
                                <tr key={productDetail._id}>
                                    <td>{productDetail._id}</td>
                                    <td>{productDetail.productId}</td>
                                    <td>{productDetail.description}</td>
                                    <td>{productDetail.keyFeatures}</td>
                                    <td>{productDetail.manufacturingDetails}</td>
                                    <td>{productDetail.seller}</td>
                                    <td>
                                        <Link to={"/admin/update/productDetails/"+ productDetail._id} className="btn btn-primary">Update</Link>&nbsp;&nbsp;
                                        <button onClick={this.handleDelete(productDetail._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminProductDetails;