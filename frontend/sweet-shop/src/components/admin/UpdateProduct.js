import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:this.props.match.params.id,
      name: "",
      mrp: "",
      sellingPrice: "",
      quantity: "",
      productDetails: "",
      category: "",
      adminId: 5,
      image: "",
      images: [],
      discount: "",
      isFeatured: true,
      product:[]
    };
  }

  componentDidMount = () =>{
    var url=`http://localhost:5000/product/${this.state.id}`
    axios.get(url).then((res) =>{
        this.setState({
            product: res.data
        })
        console.log(this.state.product)
    }).catch((err) =>{
        console.log(err);
    })
  }

  handleUpdate = (e) => {
    e.preventDefault();
    var form = document.getElementById('form');
    var formData = new FormData(form);
    var url=`http://localhost:5000/admin/update/${this.state.id}`
    axios.put(url, formData).then((res) =>{
        this.props.history.push('/admin/product')
    }).catch((err) =>{
        console.log(err);
    })
  };

  render() {
      const {product} = this.state
    return (
      <div className="container-fluid">
        <div className="row px-3 py-3" style={{ background: "pink" }}>
          <div className="col-6">
            <Link to="/admin/product" className="nav-link">
              <h3>Product Dashboard</h3>
            </Link>
          </div>
        </div>
        <div className="row mt-2 px-5 py-5">
          <h3 className="text-center">Update Product</h3>
          <form id="form" onSubmit={this.handleUpdate} encType="multipart/form-data">
            <div className="row px-5">
              <div className="col-12 mb-3">
                <label>Name</label>
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  className="form-control"
                  name="name"
                  defaultValue={product.name}
                />
              </div>
              <div className="col-4 mb-3">
                <label>MRP</label>
                <input
                  onChange={(e) => this.setState({ mrp: e.target.value })}
                  type="text"
                  className="form-control"
                  name="mrp"
                  defaultValue={product.mrp}
                />
              </div>
              <div className="col-4 mb-3">
                <label>Selling Price</label>
                <input
                  onChange={(e) =>
                    this.setState({ sellingPrice: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  name="sellingPrice"
                  defaultValue={product.sellingPrice}
                />
              </div>
              <div className="col-4 mb-3">
                <label>Quantity</label>
                <input
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                  type="text"
                  className="form-control"
                  name="quantity"
                  defaultValue={product.quantity}
                />
              </div>
              <div className="col-12 mb-3">
                <label>Product Details</label>
                <input
                  onChange={(e) =>
                    this.setState({ productDetails: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  name="productDetails"
                />
              </div>
              <div className="col-12 mb-3">
                <label>Category</label>
                <input
                  onChange={(e) => this.setState({ category: e.target.value })}
                  type="text"
                  className="form-control"
                  name="category"
                />
              </div>
              <div className="col-6 mb-3">
                <label>Main Image</label>
                <img className="mb-2" src={'/products/'+product.image} height="80" width="80" alt="..." />
                <input
                  onChange={(e) => this.setState({ image: e.target.value })}
                  type="file"
                  className="form-control"
                  name="image"
                />
              </div>
              <div className="col-6 mb-3">
                <label>Images (upto 4)</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      images: [...this.state.images, ...e.target.value],
                    })
                  }
                  type="file"
                  className="form-control"
                  multiple
                  name="images"
                />
              </div>
              <div className="col-6 mb-3">
                <label>Discount</label>
                <input
                  onChange={(e) => this.setState({ discount: e.target.value })}
                  type="text"
                  className="form-control"
                  name="discount"
                  defaultValue={product.discount}
                />
              </div>
              </div>
            <div className="row justify-content-center ">
              <button
                style={{ maxWidth: "10%" }}
                type="submit"
                className="btn btn-primary"
              >
                Add product
              </button>
            </div>
            <input type="hidden" name="adminId" value="5"/>
            <input type="hidden" name="isFeatured" value={this.state.isFeatured} />
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
