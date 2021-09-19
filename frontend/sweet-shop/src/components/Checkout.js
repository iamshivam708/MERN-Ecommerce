import axios from "axios";
import React, { Component } from "react";

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
      user: [],
      count: 0,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      isChecked:false
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

      let url2 = `http://localhost:5000/user/${this.state.id}`;
      axios
        .get(url2)
        .then((res) => {
          this.setState({
            user: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      const url3 = `http://localhost:5000/cart/count/${this.state.id}`;
      axios
        .get(url3)
        .then((result) => {
          this.setState({
            count: result.data.count,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handlePay = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    this.state.products.map((product) => {
      const order = {
        userId: this.state.id,
        productName: product.productName,
        productQty: product.productQty,
        qty: product.qty,
        price: product.price,
        totalPrice: product.totalPrice,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        address: this.state.address,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        phone: this.state.phone,
      };
      var url = "http://localhost:5000/order";
      axios
        .post(url, order)
        .then((res) => {
          var url2 = `http://localhost:5000/cart/delete/${this.state.id}`;
          axios
            .delete(url2)
            .then((res) => {
              this.props.history.push("/thankyou");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  handleUserDetails = () => {

    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("country").disabled = true;
    document.getElementById("state").disabled = true;
    document.getElementById("city").disabled = true;
    document.getElementById("phone").disabled = true;

    this.setState({
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      email: this.state.user.email,
      address: this.state.user.houseNo + " " + this.state.user.locality,
      country: this.state.user.country,
      state: this.state.user.state,
      city: this.state.user.city,
      phone: this.state.user.phone,
      isChecked: true
    });

    document.getElementById('details').style.display='none';
    document.getElementById('saveInfo').style.display='none';
    document.getElementById('afterChecked').style.display='block';
  };

  handleInfo = () =>{
    localStorage.setItem("firstName",this.state.firstName)
    localStorage.setItem("lastName", this.state.lastName)
    localStorage.setItem("email", this.state.email)
    localStorage.setItem("address", this.state.address)
    localStorage.setItem("country", this.state.country)
    localStorage.setItem("state", this.state.state)
    localStorage.setItem("city", this.state.city)
    localStorage.setItem("phone", this.state.phone)
    localStorage.setItem("storedUser", 'true')
  }

  handleStoredUser = () =>{
    
    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("country").disabled = true;
    document.getElementById("state").disabled = true;
    document.getElementById("city").disabled = true;
    document.getElementById("phone").disabled = true;

    this.setState({
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email:localStorage.getItem('email'),
      address:localStorage.getItem('address'),
      country :localStorage.getItem('country'),
      city:localStorage.getItem('city'),
      state :localStorage.getItem('state'),
      phone:localStorage.getItem('phone')
    });

    document.getElementById('details').style.display='none';
    document.getElementById('saveInfo').style.display='none';
    document.getElementById('afterChecked').style.display='block';

  }

  handleDeleteStored = () =>{
    localStorage.removeItem("firstName",this.state.firstName)
    localStorage.removeItem("lastName", this.state.lastName)
    localStorage.removeItem("email", this.state.email)
    localStorage.removeItem("address", this.state.address)
    localStorage.removeItem("country", this.state.country)
    localStorage.removeItem("state", this.state.state)
    localStorage.removeItem("city", this.state.city)
    localStorage.removeItem("phone", this.state.phone)
    localStorage.removeItem("storedUser", 'true')
    window.location.reload();
  }

  render() {
    const { products} = this.state;
    return (
      <div className="container px-5 py-2 mb-5">
        <main>
          <div className="py-5 text-center">
            <img
              className="mx-auto"
              src="/Images/checkout.png"
              alt=""
              width="100"
              height="100"
            />
            <h2>Checkout form</h2>
            <p className="lead">
              Our checkout is 100% secured. User has to fill his billing address
              or can choose to opt for option where he can use the users address
              given to us on signup.
            </p>
          </div>
          {(() =>{
            if(localStorage.getItem('storedUser')){
              return (
                <div className="row mb-4" style={{background:"#fafafa"}}>
                  <h5>*User details already saved</h5>
                    <p>name = {localStorage.getItem('firstName')} {localStorage.getItem('lastName')},
                    email =  {localStorage.getItem('email')},
                    address = {localStorage.getItem('address')},
                    country =  {localStorage.getItem('country')},
                    city = {localStorage.getItem('city')},
                    state =  {localStorage.getItem('state')},
                    phone = {localStorage.getItem('phone')},</p>
                    <div className="row">
                      <div className="col-3" align="end">
                      <button onClick={this.handleStoredUser} className="btn btn-primary btn-sm">Want to use these Details</button>
                      </div>
                      <div className="col-3">
                        <button onClick={this.handleDeleteStored} className="btn btn-primary btn-sm">delete these Details</button>
                      </div>
                    </div>
                </div>
              )
            }
          })()}

          <div className="row g-5">
            {/* cart details */}
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {this.state.count}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {products.map((product) => (
                  <li
                    key={product._id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{product.productName}</h6>
                      <small className="text-muted">
                        {product.productQty}g
                      </small>
                    </div>
                    <span className="text-muted">
                      &#8377;{product.totalPrice}
                    </span>
                  </li>
                ))}

                <li className="list-group-item d-flex justify-content-between">
                  <span>
                    <strong>Total (INR)</strong>
                  </span>
                  <strong>&#8377;{this.state.total}</strong>
                </li>
              </ul>
            </div>

            {/* billing address */}
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      onChange={(e) =>
                        this.setState({ country: e.target.value })
                      }
                      className="form-select"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      onChange={(e) => this.setState({ state: e.target.value })}
                      className="form-select"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Uttar Pradesh</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="country" className="form-label">
                      City
                    </label>
                    <select
                      onChange={(e) => this.setState({ city: e.target.value })}
                      className="form-select"
                      id="city"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Lucknow</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid city.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid phone number is required.
                    </div>
                  </div>
                  <hr />

                  <div className="form-check" id="details">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="userDetails"
                      onClick={this.handleUserDetails}
                    />
                    <label>
                      Check this if details are same as User details and click
                      checkout
                    </label>
                  </div>

                  <div className="form-check" id="afterChecked" style={{display:'none'}}>
                    <label>* Refresh page if you want to fill the details otherwise checkout</label>
                  </div>

                  <div className="form-check" id="saveInfo">
                    <input type="checkbox" className="form-check-input" onClick={this.handleInfo} />
                    <label>Save this information for next time</label>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary btn-lg w-100"
                      onClick={this.handlePay}
                    >
                      Continue to Checkout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Checkout;
