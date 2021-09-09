import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container-fluid mt-4" style={{
                backgroundColor: "#FEE140",
                backgroundImage: "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)"
              }}>
              <div className="row py-5 px-5">
                  <div className="col-6 col-md-4" style={{lineHeight:"2vh"}}>
                    <Link to="/" className="nav-link text-dark">Home</Link>
                    <Link to="/" className="nav-link text-dark">About Us</Link>
                    <Link to="/" className="nav-link text-dark">Get The App</Link>
                    <Link to="/" className="nav-link text-dark">Contact Us</Link>
                  </div>
                  <div className="col-6 col-md-4" style={{lineHeight:"2vh"}}>
                    <Link to="/" className="nav-link text-dark">Terms</Link>
                    <Link to="/" className="nav-link text-dark">Help & Support</Link>
                    <Link to="/" className="nav-link text-dark">Privacy Policy</Link>
                    <Link to="/" className="nav-link text-dark">Sitemap</Link>
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <form method="post">
                        <div className="form-group">
                            <label>Subscribe For Newsletter</label>
                            <input type="text" className="form-control mt-3" placeholder="Enter Your Email" />
                            <button className="btn btn-primary mt-2">Subscribe</button>
                        </div>
                    </form>
                  </div>
              </div>  
              <div className="row px-5">
                  <div className="col-4">
                    <img src="/Images/logo.png" width="100" height="100" alt="..." />
                  </div>
                  <div className="col-4 text-end offset-4 mt-5">
                    <p>© 2021 SweetShop, Inc </p>
                  </div>
              </div>
            </div>
        );
    }
}

export default Footer;