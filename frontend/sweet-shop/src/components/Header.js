import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("isLoggedIn") ||
        sessionStorage.getItem("isLoggedIn"),
      email: localStorage.getItem("user") || sessionStorage.getItem("user"),
      userId: "",
      count: 0,
      search: "",
    };
  }

  componentDidMount = () => {
    if (this.state.isLoggedIn) {
      document.getElementById("signup").style.display = "none";
      document.getElementById("login").style.display = "none";

      const url = `http://localhost:5000/user/details/${this.state.email}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            userId: res.data._id,
          });
          const url2 = `http://localhost:5000/cart/count/${res.data._id}`;
          axios
            .get(url2)
            .then((result) => {
              this.setState({
                count: result.data.count,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      document.getElementById("logout").style.display = "none";
      document.getElementById("home").style.display = "none";
      document.getElementById("customer").style.display = "none";
      document.getElementById("cart").style.display = "none";
    }
  };

  handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  handleSignupColor = () => {
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    signup.classList.remove("text-secondary");
    signup.classList.add("text-white");
    login.classList.remove("text-white");
    login.classList.add("text-secondary");
  };

  handleLoginColor = () => {
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    signup.classList.remove("text-white");
    signup.classList.add("text-secondary");
    login.classList.add("text-white");
    login.classList.remove("text-secondary");
  };

  handleHomeColor = () => {
    var home = document.getElementById("home");
    var customer = document.getElementById("customer");
    var cart = document.getElementById("cart");
    home.classList.remove("text-secondary");
    home.classList.add("text-white");
    customer.classList.add("text-secondary");
    customer.classList.remove("text-white");
    cart.classList.add("text-secondary");
    cart.classList.remove("text-white");
  };

  handleCustomerColor = () => {
    var home = document.getElementById("home");
    var customer = document.getElementById("customer");
    var cart = document.getElementById("cart");
    customer.classList.remove("text-secondary");
    customer.classList.add("text-white");
    home.classList.add("text-secondary");
    home.classList.remove("text-white");
    cart.classList.add("text-secondary");
    cart.classList.remove("text-white");
  };

  handleCart = () => {
    var home = document.getElementById("home");
    var customer = document.getElementById("customer");
    var cart = document.getElementById("cart");
    cart.classList.remove("text-secondary");
    cart.classList.add("text-white");
    home.classList.add("text-secondary");
    home.classList.remove("text-white");
    customer.classList.add("text-secondary");
    customer.classList.remove("text-white");
  };

  render() {
    return (
      <header>
        <div
          className="px-3 py-2 text-white"
          style={{
            backgroundColor: "#FEE140",
            backgroundImage: "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
          }}
        >
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <img
                  src="/Images/logo.png"
                  className="bi me-2"
                  width="150"
                  height="100"
                  alt="..."
                />
              </Link>
              <ul className="nav col-12 col-md-auto me-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <form action={"/search/" + this.state.search} method="GET">
                    <input
                      style={{
                        display: "inline",
                        maxWidth: "70%",
                        marginRight: "0.8rem",
                        border:"none",
                        background:"transparent",
                        borderBottom:"2px solid #ffcc80",
                      }}
                      type="text"
                      onChange={(e) =>
                        this.setState({ search: e.target.value })
                      }
                      placeholder="Search Product"
                      className="form-control search"
                    />
                    <button type="submit" className="btn" style={{border:"2px solid pink"}}>
                      Search
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link
                    onClick={this.handleHomeColor}
                    id="home"
                    to="/"
                    className="nav-link text-white"
                  >
                    <span align="center">
                      <i
                        className="fas fa-home bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={this.handleLoginColor}
                    id="login"
                    to="/login"
                    className="nav-link text-white"
                  >
                    <span align="center">
                      <i
                        className="fas fa-user-plus bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={this.handleSignupColor}
                    id="signup"
                    to="/signup"
                    className="nav-link text-secondary"
                  >
                    <span align="center">
                      <i
                        className="fas fa-sign-in-alt bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={this.handleCustomerColor}
                    id="customer"
                    to={"/customer/" + this.state.email}
                    className="nav-link text-secondary"
                  >
                    <span align="center">
                      <i
                        className="fas fa-user-circle bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={this.handleCart}
                    id="cart"
                    to={"/cart/" + this.state.userId}
                    className="nav-link text-secondary"
                  >
                    <span align="center">
                      <i
                        className="fas fa-shopping-cart bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    <span className="text-danger">{this.state.count}</span>
                    &nbsp;Cart
                  </Link>
                </li>
                <li>
                  <button
                    style={{ border: "none", background: "transparent" }}
                    id="logout"
                    onClick={this.handleLogout}
                    className="nav-link text-secondary"
                  >
                    <span align="center">
                      <i
                        className="fas fa-sign-out-alt bi d-block mx-auto mb-1"
                        width="24"
                        height="24"
                      ></i>
                    </span>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
