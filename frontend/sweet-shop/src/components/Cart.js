import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      id: this.props.match.params.id,
      products: [],
      qty: 1,
      grandTotal:0
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
          if (res.data !== "none") {
            this.setState({
              products: res.data,
              grandTotal: res.data.map(datum => datum.totalPrice).reduce((a, b) => a + b)
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

  handleChange(id,price) {
    return (event) => {
      event.preventDefault();
      if(this.state.qty < 1){
        alert('Qty cannot be less than 1');
        this.setState({
          qty:1
        })
        window.location.reload()
      }else{
        const url = `http://localhost:5000/cart/update/${id}`;
        const product = {
          qty: this.state.qty,
          price: price
        };
        axios
          .put(url, product)
          .then((res) => {
            window.location.reload()
          })
          .catch((err) => {
            console.log(err);
          });
       };
  }
  }

  handleDelete(id){
      return (event) =>{
          event.preventDefault()
          const url = `http://localhost:5000/cart/${id}`
          axios.delete(url).then(() =>{
            window.location.reload()
          }).catch((err) =>{
            console.log(err)
          })
      }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <div className="container mt-4 px-5 py-5" style={{background:"#fafafa"}}>
        <div class="px-5 py-3 text-center">
            <i class="fas fa-shopping-cart fa-3x"></i>&nbsp;
            <h2 style={{display:"inline-block"}} class="display-5 fw-bold">Cart</h2>
        </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">Pieces</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.productQty}g</td>
                  <td>
                    <form
                      method="Put"
                      onSubmit={this.handleChange(product._id,product.price)}
                    >
                      <input
                        onChange={(e) => this.setState({ qty: e.target.value })}
                        className="form-input"
                        type="number"
                        defaultValue={product.qty}
                        name="qty"
                      />
                      &nbsp;&nbsp;
                      <button className="btn btn-danger">change</button>
                    </form>
                  </td>
                  <td>&#8377;{product.price}</td>
                  <td>&#8377;{product.totalPrice}</td>
                  <td><button className="btn btn-danger" onClick={this.handleDelete(product._id)}>x</button></td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-center">
                  Grand Total
                </td>
                <td>&#8377;{this.state.grandTotal}</td>
              </tr>
            </tbody>
          </table>
          <Link style={{maxWidth:"10rem"}} to={"/checkout/" + this.state.grandTotal + "/" + this.state.id} className="btn btn-primary">
            Go to checkout
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
