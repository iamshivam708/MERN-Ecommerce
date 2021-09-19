import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThankYou extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="thanks">
        <div
          className="container mt-5 mb-5"
          style={{
            backgroundColor: "#fafafa",
          }}
        >
          <div className="px-4 py-5 my-3 text-center">
            <i className="fas fa-shopping-bag fa-5x"></i>
            <h1 className="display-5 fw-bold">
              <span style={{ color: "orange" }}>Thank you</span> for{" "}
              <span style={{ color: "orange" }}>shopping</span> with us
            </h1>
            <Link to="/" className="btn btn-primary btn-lg mt-2">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
