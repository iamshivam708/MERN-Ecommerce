import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var form = document.getElementById('form');
    var formData = new FormData(form);
    var url="http://localhost:5000/admin"
    axios.post(url, formData).then((res) =>{
        this.props.history.push('/admin/product')
    }).catch((err) =>{
        console.log(err);
    })
  };

  render() {
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
          <h3 className="text-center">Add Product</h3>
          <form id="form" onSubmit={this.handleSubmit} encType="multipart/form-data">
            <div className="row px-5">
              <div className="col-12 mb-3">
                <label>Name</label>
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="col-4 mb-3">
                <label>MRP</label>
                <input
                  onChange={(e) => this.setState({ mrp: e.target.value })}
                  type="text"
                  className="form-control"
                  name="mrp"
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
                />
              </div>
              <div className="col-4 mb-3">
                <label>Quantity</label>
                <input
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                  type="text"
                  className="form-control"
                  name="quantity"
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

export default AddProduct;
