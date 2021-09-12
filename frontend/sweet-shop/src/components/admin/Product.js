import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class AdminProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isAdminLoggedIn: localStorage.getItem('isAdminLoggedIn'),
            products:[],
        }
    }

    componentDidMount = () =>{
        if(!this.state.isAdminLoggedIn){
            this.props.history.push('/admin/login');
        }else{
            var url="http://localhost:5000/product"
            axios.get(url).then((res) =>{
                this.setState({
                    products: res.data
                })
            }).catch((err) =>{
                console.log(err);
            })
        }
    }

    handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('isAdminLoggedIn')
        this.props.history.push('/admin/login')
    }

    handleDelete(id){
        return (event) => {
            event.preventDefault();
            var url = `http://localhost:5000/admin/${id}`
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
                    <div className="col-4">
                        <Link to="/admin/dashboard"><h2>Product Dashboard</h2></Link>
                    </div>
                    <div className="col-4">
                        <Link to="/admin/add/product" className="btn btn-primary">Add Product</Link>
                    </div>
                    <div className="col-4 text-end">
                        <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>MRP</th>
                                <th>Selling</th>
                                <th>Quantity</th>
                                <th>ProductDetails</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Images</th>
                                <th>Discount</th>
                                <th>isFeatured</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map((product) =>(
                            <tr key={product._id}>
                                <td>
                                <Link to={"/admin/update/product/"+ product._id} className="btn btn-primary">Update</Link>
                                <button onClick={this.handleDelete(product._id)} className="btn btn-danger mt-2">Delete</button>
                                </td>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.mrp}</td>
                                <td>{product.sellingPrice}</td>
                                <td>{product.quantity}</td>
                                <td>{product.productDetails._id}</td>
                                <td>{product.category._id}</td>
                                <td><img src={"/products/"+ product.image} height="100px" width="100px" alt="..." /></td>
                                <td style={{minWidth:'250px'}}>
                                <div className="row">
                                    {product['images'].map((img) =>(
                                        <div className="col-3" key={img.originalname}>
                                        <img src={"/products/"+ img.filename} height="50px" width="50px" alt="..." />
                                        </div>
                                    ))}
                                </div>
                                </td>
                                <td>{product.discount}</td>
                                <td>{JSON.stringify(product.isFeatured)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminProduct;