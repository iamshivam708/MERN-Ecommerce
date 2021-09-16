import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      products: [],
      background: "/Images/jumbo.jpg",
    };
  }

  componentDidMount = () => {
    let url = "http://localhost:5000/product";
    axios
      .get(url)
      .then((res) => {
        if (res.data !== "none") {
          this.setState({
            products: res.data,
          });
          console.log(this.state.products);
        } else {
          this.setState({
            products: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="home">
        {/* second header */}
        <div class="container-fluid" style={{ background: "#ffcc80" }}>
          <div className="container">
            <div class="nav-scroller py-1">
              <nav class="nav d-flex justify-content-between">
                <a class="p-2 text-white nav-link" href="...">
                  Sweet
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Chocolates
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Cake
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Halwa
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Candy & Toffee
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Laddoo
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Drinks
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Barfi
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Peda
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  Jalebi
                </a>
                <a class="p-2 text-white nav-link" href="...">
                  IceCream
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/*  home carousel */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                alt="..."
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                src="/Images/home1.png"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="...">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                alt="..."
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                src="/Images/home2.jpg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="...">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                alt="..."
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                src="/Images/home3.jpg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="...">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* different options */}
        <div className="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Shop By Categories</h5>
                  <div className="row px-2 py-2">
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home3.jpg"
                      />
                    </div>
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home3.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home3.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home3.jpg"
                      />
                    </div>
                    <a className="nav-link" href="...">
                      See all
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Best Sellers</h5>
                  <div className="row px-2 py-2">
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home1.jpg"
                      />
                    </div>
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home1.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home1.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        height="100%"
                        className="card-img-top"
                        src="/Images/home1.jpg"
                      />
                    </div>
                    <a className="nav-link" href="...">
                      See all
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Deals Of The Day</h5>
                  <div className="row px-2 py-2">
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        className="card-img-top"
                        src="/Images/home2.jpg"
                      />
                    </div>
                    <div className="col-6" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        className="card-img-top"
                        src="/Images/home2.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        className="card-img-top"
                        src="/Images/home2.jpg"
                      />
                    </div>
                    <div className="col-6 mt-3" style={{ height: "100px" }}>
                      <img
                        alt="..."
                        className="card-img-top"
                        src="/Images/home2.jpg"
                      />
                    </div>
                    <a className="nav-link" href="...">
                      See all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* jumbotron */}
        <section
          class="mt-5 text-center container-fluid"
          style={{
            backgroundImage: `url(${this.state.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <div class="row py-lg-5">
            <div
              class="col-lg-6 col-md-8 mx-auto px-5 py-5"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              <h1 class="text-white">Best Sweets At Cheapest Rate</h1>
              <p class="lead" style={{ color: "#fafafa" }}>
                Best Sweets at your door steps completely fresh and at as
                cheapest rate as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Featured product carousel */}
        <div className="container-fluid mt-5">
          <div className="row px-5 py-3" style={{backgroundColor: "#FEE140",
              backgroundImage:
                "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",}}>
                    <h3
            className="text-white mt-3 mb-4"
          >
            &nbsp;&nbsp;Featured Products &nbsp;&nbsp;
            <Link to=".">See All</Link>
          </h3>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Top deals carousel limited to 4 */}
        <div className="container-fluid">
          <div className="row px-5 py-5" style={{backgroundColor: "#FEE140",
              backgroundImage:
                "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",}}>
                    <h3
            className="text-white mb-4"
          >
            &nbsp;&nbsp;Best Seller & Trending Products &nbsp;&nbsp;
            <Link to=".">See All</Link>
          </h3>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
            <div className="col-3" align="center">
              <div className="card">
                <img
                  src="/Images/jumbo.jpg"
                  width="100%"
                  alt="..."
                  className="card-image-top"
                />
                <div className="card-body">
                  <h3 className="mt-2 card-title">Chocolate</h3>
                  <h3>
                    <span className="text-danger" style={{ fontSize: "2em" }}>
                      &#8377;350
                    </span>
                    &nbsp;&nbsp;<strike>&#8377;200</strike>
                  </h3>
                  <button className="btn btn-primary">Go to Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Security */}
        <div className="container mt-5 mb-5">
          <div className="row" align="center">
            <div className="col-sm-3">
              <div className="card">
                <img
                  src="/Images/safePayment.png"
                  height="200px"
                  width="100%"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">100% Secure</h3>
                  <p className="lead">You're payments are 100% secured</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img
                  src="/Images/trust.png"
                  height="200px"
                  width="100%"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">TrustPay</h3>
                  <p className="lead">100% Security and Easy Return Policy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img
                  src="/Images/callCenter.png"
                  height="200px"
                  width="100%"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Help Center</h3>
                  <p className="lead">Got a Question? Look no further.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img
                  src="/Images/mobile.png"
                  height="200px"
                  width="100%"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Shop On The Go</h3>
                  <p className="lead">Download the App And Shop On The Go</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
