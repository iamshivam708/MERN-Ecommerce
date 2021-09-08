import React, { Component } from 'react';
import axios from 'axios'

class UserTransactions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             orders:[]
        }
    }

    componentDidMount = () =>{
        var url = `http://localhost:5000/order/status/${this.state.id}`
        axios.get(url).then((res) =>{
            this.setState({
                orders: res.data
            })
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="order">
              <div className="container mt-4">
                <h3 className="text-center">Order</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Quantity</th>
                      <th scope="col">Pieces</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.orders.map((product) => (
                      <tr key={product._id}>
                        <td>{product.productName}</td>
                        <td>{product.productQty}g</td>
                        <td>{product.qty}</td>
                        <td>{product.price}</td>
                        <td>{product.totalPrice}</td>
                        <td>{product.status}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          );
    }
}

export default UserTransactions;