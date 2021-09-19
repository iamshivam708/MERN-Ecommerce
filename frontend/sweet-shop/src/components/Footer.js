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
                <div className="row" style={{background:"#ffcc80"}}>
                  <a href="#top" style={{textDecoration:"none", color:"white"}}><p className="text-center pt-3">Top&nbsp;<i className="fas fa-arrow-up"></i></p></a>
                </div>
              <div className="row py-2 pt-4 px-5">
                  <div className="col-6 col-md-4" style={{lineHeight:"2vh"}}>
                    <Link to="/" className="nav-link text-dark">Home</Link>
                    <Link to="/about" className="nav-link text-dark">About Us</Link>
                    <a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=en_IN&gl=US" className="nav-link text-dark">Get The App</a>
                    <Link to="/contact" className="nav-link text-dark">Contact Us</Link>
                  </div>
                  <div className="col-6 col-md-4" style={{lineHeight:"2vh"}}>
                    <Link to="/terms" className="nav-link text-dark">Terms & Conditions</Link>
                    <Link to="/faq" className="nav-link text-dark">FAQs</Link>
                    <Link to="/privacy" className="nav-link text-dark">Privacy Policy</Link>
                    <Link to="/" className="nav-link text-dark">Sitemap</Link>
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                        <div className="form-group">
                            <label>Subscribe For Newsletter</label>
                            <input type="text" className="form-control mt-3" placeholder="Enter Your Email" />
                            <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
                        </div>
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