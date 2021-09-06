import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      id: this.props.match.params.id,
      products: [],
      product:[]
    };
  }

  componentDidMount = () => {
    if (!this.state.isLoggedIn) {
      this.props.history.push("/login");
    } else {
      const url = `http://localhost:5000/wishlist/${this.state.id}`;
      axios
        .get(url)
        .then((res) => {
          if (res.data !== "none") {
            this.setState({
              products: res.data,
            });
            } else {
            this.setState({
              products: null,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  handleDelete(id){
      return (event) =>{
          event.preventDefault()
          const url = `http://localhost:5000/wishlist/${id}`
          axios.delete(url).then(() =>{
            window.location.reload()
          }).catch((err) =>{
            console.log(err)
          })
      }
  }

  handleCart(id, productId){
    return (event) =>{
        event.preventDefault()
        var url = `http://localhost:5000/product/${id}`
        axios.get(url).then(res =>{
          console.log(res.data)
          const cartProduct = {
            productId: id,
            userId:this.state.id,
            productName: res.data.name,
            productQty: res.data.quantity,
            qty:1,
            price: res.data.sellingPrice
          }
          const url = "http://localhost:5000/cart"
          axios.post(url,cartProduct).then((res) =>{
                const url = `http://localhost:5000/wishlist/${productId}`
                axios.delete(url).then(() =>{
                  window.location.reload()
                }).catch((err) =>{
                  console.log(err)
                })
              this.props.history.push("/cart/"+ this.state.id)
              window.location.reload()
          }).catch((err) =>{
              console.log(err)
          })
        }).catch(err =>{
          console.log(err);
        })
    }
}

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <div className="container mt-4">
          <h3 className="text-center">Wishlist</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">Price</th>
                <th scope="col" colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.productQty}g</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={this.handleCart(product.productId, product._id)} className="btn btn-primary">Add to Cart</button>&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={this.handleDelete(product._id)}>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/cart/" + this.state.id} className="btn btn-primary">
            Go to Cart
          </Link>
        </div>
      </div>
    );
  }
}

export default Wishlist;
