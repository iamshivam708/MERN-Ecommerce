import React, { Component } from 'react';

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
              <div className="row">
                  <div className="col-4">
                    <p>Services</p>
                  </div>
                  <div className="col-4">

                  </div>
                  <div className="col-4">

                  </div>
              </div>  
            </div>
        );
    }
}

export default Footer;