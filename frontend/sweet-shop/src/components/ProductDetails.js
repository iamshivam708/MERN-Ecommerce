import React, { Component } from "react";
import axios from "axios";
import "../app.css";
import Swal from 'sweetalert2'

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      product: {},
      id: this.props.match.params.id,
      productDetails: "",
      productDescription: [],
      products: [],
      userEmail: localStorage.getItem("user") || sessionStorage.getItem("user"),
      userId: "",
      review: "",
      stars: "",
      reviews: [],
      userName: "",
      alreadyAdded: 0,
      alreadyAddedInWishlist: 0,
      images: [],
      top:''
    };
  }

  componentDidMount = () => {
    const url = `http://localhost:5000/product/${this.state.id}`;
    axios
      .get(url)
      .then((res) => {
        if (res.data !== "none") {
          this.setState({
            product: res.data,
            productDetails: res.data.productDetails,
          });
          // eslint-disable-next-line
          res.data.images.map((img) => {
            this.setState((previousState) => ({
              images: [...previousState.images, img.filename],
            }));
          });
        } else {
          this.setState({
            product: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const url2 = `http://localhost:5000/productDetails/${this.state.productDetails}`;
    axios
      .get(url2)
      .then((res) => {
        if (res.data !== "none") {
          this.setState({
            productDescription: res.data[0],
          });
        } else {
          this.setState({
            productDescription: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const url3 = "http://localhost:5000/product";
    axios
      .get(url3)
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

    const url4 = `http://localhost:5000/user/details/${this.state.userEmail}`;
    axios
      .get(url4)
      .then((res) => {
        this.setState({
          userId: res.data._id,
          userName: res.data.firstName,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const url5 = `http://localhost:5000/productDetails/review/${this.state.id}`;
    axios
      .get(url5)
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    var url10 = `http://localhost:5000/cart/product/${this.state.id}`;
    axios
      .get(url10)
      .then((res) => {
        this.setState({
          alreadyAdded: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    var url11 = `http://localhost:5000/wishlist/product/${this.state.id}`;
    axios
      .get(url11)
      .then((res) => {
        this.setState({
          alreadyAddedInWishlist: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCart = (e) => {
    e.preventDefault();
    if (this.state.isLoggedIn) {
      if (this.state.alreadyAdded !== 0) {
        Swal.fire({
          title: 'Error!',
          text: 'product already added in the cart',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      } else {
        const cartProduct = {
          productId: this.state.id,
          userId: this.state.userId,
          productName: this.state.product.name,
          productQty: this.state.product.quantity,
          qty: 1,
          price: this.state.product.sellingPrice,
        };
        const url = "http://localhost:5000/cart";
        axios
          .post(url, cartProduct)
          .then((res) => {
            this.props.history.push("/cart/" + this.state.userId);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'You need to login to add the product',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  handleWishlist = (e) => {
    e.preventDefault();
    if (this.state.isLoggedIn) {
      if (this.state.alreadyAddedInWishlist !== 0) {
        Swal.fire({
          title: 'Error!',
          text: 'product already added in the wishlist',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      } else {
        const WishlistProduct = {
          productId: this.state.id,
          userId: this.state.userId,
          productName: this.state.product.name,
          productQty: this.state.product.quantity,
          price: this.state.product.sellingPrice,
        };
        const url = "http://localhost:5000/wishlist";
        axios
          .post(url, WishlistProduct)
          .then((res) => {
            this.props.history.push("/wishlist/" + this.state.userId);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'You need to login to add the product',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  handleSimilar(id) {
    return (event) => {
      event.preventDefault();
      this.props.history.push("/product/details/" + id);
      window.location.reload();
    };
  }

  handleReview = (e) => {
    e.preventDefault();
    const review = {
      productId: this.state.id,
      userId: this.state.userId,
      userName: this.state.userName,
      review: this.state.review,
      stars: this.state.stars,
    };
    const url = "http://localhost:5000/productDetails/review";
    axios
      .post(url, review)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleImages(name) {
    return (event) => {
      event.preventDefault();
      document.getElementById("mainImage").src = "/products/" + name;
    };
  }

  handleMainImage(name) {
    return (event) => {
      event.preventDefault();
      var original = (document.getElementById("mainImage").src =
        "/products/" + name);
      if (!original) {
        document.getElementById("mainImage").src = "/products/" + name;
      }
    };
  }

  render() {
    const { product, productDescription, products, reviews, images } =
      this.state;
    return (
      <div className="container-fluid">
        {/* product details */}
        <div className="container mt-5">
          <a id="top" href="...">{this.state.top}</a>
          <div className="row px-5 py-1" style={{background:'#fff3e0', boxShadow:'5px 5px 5px 5px #ffe0b2'}}>
            <h3
              className="text-center mt-4 mb-5 py-2"
              style={{
                backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'
              }}
            >
              Product Details
            </h3>
            <div className="col-12 col-md-6">
              <div
                className="row justify-content-center"
                style={{ height: "300px", width: "450px" }}
              >
                <img
                  onClick={this.handleMainImage(product.image)}
                  height="100%"
                  width="100%"
                  id="mainImage"
                  src={"/products/" + product.image}
                  alt="..."
                />
              </div>
              <div className="row mt-3">
                {images.map((imgs) => (
                  <div
                    className="col-3 px-3"
                    key={imgs}
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      onClick={this.handleImages(imgs)}
                      id="img"
                      src={"/products/" + imgs}
                      height="100%"
                      width="100%"
                      alt="..."
                    />
                  </div>
                ))}
              </div>
              <div className="row mt-5 mb-5">
                <h3 className="py-2 mb-3" style={{
                backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'
              }} >Product Description</h3>
                <h4 className="text-danger">Key Features</h4>
                <p>{productDescription.keyFeatures}</p>
                <hr />
                <h4 className="text-danger">Description</h4>
                <p>{productDescription.description}</p>
                <hr />
                <h4 className="text-danger">About Seller</h4>
                <p>{productDescription.seller}</p>
                <hr />
                <h4 className="text-danger">Manufacturing Details</h4>
                <p>{productDescription.manufacturingDetails}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-3">
              <h1 className="text-dark">
                {product.name}
                <span style={{ color: "red", fontSize: "4rem" }}>
                  {product.discount}% off
                </span>
              </h1>
              <h3 className="text-danger">
                <strike>MRP: &#8377;{product.mrp}</strike>
              </h3>
              <h2 className="text-primary">
                Selling Price: &#8377;{product.sellingPrice}
              </h2>
              <h4 className="pt-2 pb-2">Qty: {product.quantity}g</h4>
              <button onClick={this.handleCart} className="btn btn-primary">
                Add to Cart
              </button>
              &nbsp;&nbsp;
              <button onClick={this.handleWishlist} className="btn btn-primary">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* similar products */}
        <div className="container-fluid mt-5" >
          <h3 className="text-center py-2" style={{ backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'}} >Similar Products</h3>
          <div
            className="carousel"
            data-flickity='{ "groupCells": true,"cellAlign": "left", "contain": true,"freeScroll": true }'
          >
            {products.map((product) => (
              <div style={{height:"430px", width:"250px"}} className="carousel-cell" key={product._id} align="center">
                <img
                  className="mt-3"
                  src="/Images/rasgullaparts.jpeg"
                  width="100%"
                  alt="..."
                />
                <h3 className="lead mt-2">{product.name}</h3>
                <h3>
                  <span className="text-danger" style={{ fontSize: "2em" }}>
                  &#8377;{product.sellingPrice}
                  </span>
                  &nbsp;&nbsp;<strike>&#8377;{product.mrp}</strike>
                </h3>
                <button
                  onClick={this.handleSimilar(product._id)}
                  className="btn btn-primary"
                >
                  Go to Product
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* customer reviews */}
        <div className="container-fluid mt-5">
        <div className="row">
        <h3 className="text-center py-2" style={{ backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'}} >Customer Review</h3>
          <div className="col-4 px-3 py-3" style={{background:'#fff3e0'}}>
          <h4 className="text-center py-2 mt-3" style={{ backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'}} >Write your Review</h4>
            <form className="mt-3" method="post" onSubmit={this.handleReview}>
              <div className="col-12">
                <input
                  placeholder="Enter Review"
                  className="form-control"
                  type="text"
                  name="review"
                  onChange={(e) => this.setState({ review: e.target.value })}
                />
              </div>
              <div className="col-12 mt-2">
                <input
                  placeholder="Give Stars (1 to 5)"
                  className="form-control"
                  type="text"
                  name="stars"
                  onChange={(e) => this.setState({ stars: e.target.value })}
                />
              </div>
              <div className="col-4 mt-2">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-8 px-3 py-3" style={{background:"#fff3e0"}}>
          <h4 className="text-center py-2 mt-3" style={{ backgroundColor: "#FEE140",
                backgroundImage:
                  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
                  color:'white'}} >All Reviews</h4>
            {reviews.map((review) => (
              <div className="row" key={review._id}>
                <div className="col-4" style={{height:'150px'}}>
                  <img
                    className="img-rounded"
                    src="/Images/sweet.png"
                    width="100%"
                    height="100%"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <h3>{this.state.userName}</h3>
                  <p>{review.review}</p>
                  {(() => {
                                        switch (review.stars) {
                                        case 1:   return <span style={{color: "red"}}><i className="fas fa-star"></i></span>;
                                        case 2: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        case 3:  return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        case 4: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        default: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        }
                                    })()}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
