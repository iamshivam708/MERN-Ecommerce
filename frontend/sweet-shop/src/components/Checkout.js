import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      total: this.props.match.params.total,
      id: this.props.match.params.id,
      products: [],
      user:[],
    };
  }

  componentDidMount = () => {
    if (!this.state.isLoggedIn) {
      this.props.history.push("/login");
    } else {
      const url = `http://localhost:5000/cart/${this.state.id}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            products: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });

        let url2 = `http://localhost:5000/user/${this.state.id}`
            axios.get(url2).then((res) =>{
                this.setState({
                    user: res.data
                })
            }).catch((err) =>{
                console.log(err)
            })
    }
  };

  handlePay = (e) =>{
    e.preventDefault();
    // eslint-disable-next-line
    this.state.products.map((product) =>{
      const order = {
        userId: this.state.id,
        productName: product.productName,
        productQty: product.productQty,
        qty: product.qty,
        price: product.price,
        totalPrice: product.totalPrice
      }
      var url = "http://localhost:5000/order";
      axios.post(url, order).then((res) =>{
        var url2 = `http://localhost:5000/cart/delete/${this.state.id}`;
        axios.delete(url2).then((res) =>{
          this.props.history.push('/thankyou');
          window.location.reload();
        }).catch(err =>{
          console.log(err);
        })
      }).catch((err) =>{
        console.log(err);
      })
    })
  }


  render() {
    const { products, user} = this.state;
    return (
      <div className="container-fluid">
        <h3 className="text-danger mt-2">* non-returnable and only cash on delivery.</h3>
        <div className="row">

        {/* user details to check */}
          <div className="col-12 col-md-6 mt-4" align="center">
            <h3>User Details</h3>
            <p><span className="text-muted">Name: </span><br/>{user.firstName}&nbsp;{user.lastName}</p>
            <p><span className="text-muted">Email: </span><br/>{user.email}</p>
            <p><span className="text-muted">Phone: </span><br/>{user.phone}</p>
            <p><span className="text-muted">Address: </span><br/>{user.houseNo}&nbsp;{user.locality},&nbsp;{user.city}</p>
            <p>{user.state},&nbsp;{user.country}.</p>
            <Link to={"/customer/"+ user.email} className="btn btn-danger">Change Details</Link>
          </div>
          
          {/* checkout details */}
          <div className="col-12 col-md-6 mt-4" align="center">
            <h3>Cart Details</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Quantity</th>
                  <th scope="col">Pieces</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.productName}</td>
                    <td>{product.productQty}g</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                    <td>{product.totalPrice}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="text-center">
                    Grand Total
                  </td>
                  <td>{this.state.total}</td>
                </tr>
              </tbody>
            </table>
            <button 
        onClick={this.handlePay}
        className="btn btn-primary">
          Order Now
        </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
