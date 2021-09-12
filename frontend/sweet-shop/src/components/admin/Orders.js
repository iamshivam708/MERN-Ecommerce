import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

class AdminOrders extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            orders:[]
        }
    }

    componentDidMount = () =>{
        let url = `http://localhost:5000/order`
            axios.get(url).then((res) =>{
                this.setState({
                    orders: res.data
                })
                console.log(this.state.orders)
            }).catch((err) =>{
                console.log(err)
            })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{background:'pink'}}>
                    <div className="col-4">
                        <Link to="/admin/dashboard"><h2>Order Dashboard</h2></Link>
                    </div>
                </div>
                <div className="row px-5 py-5 mt-5">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map((order) =>(
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.userId}</td>
                                <td>{order.productName}</td>
                                <td>{order.productQty}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.status}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>                
            </div>
        );
    }
}

export default AdminOrders;