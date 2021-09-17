import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="about">
                <div className="container-fluid">
                <div class="px-4 py-5 my-5 text-center">
                    <h1 class="display-5 fw-bold"><span style={{color:'orange'}}>ABOUT</span> US</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
                </div>

            <div class="container-fluid col-xxl-8 px-4 py-5 mt-3" style={{background:"#fafafa"}}>
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/Images/jumbo.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3" style={{color:'#ffb74d'}}>Responsive left-aligned hero with image</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="container-fluid col-xxl-8 px-4 py-5 mt-5" style={{background:"#fafafa"}}>
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3" style={{color:'#ffb74d'}}>Responsive left-aligned hero with image</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/Images/about.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
            <div className="row" align="center">
                <div className="col-sm-3">
                <div className="card">
                    <img
                    src="/Images/safePayment.png"
                    height="180px"
                    width="95%"
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
                    height="180px"
                    width="95%"
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
                    height="180px"
                    width="95%"
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
                    height="180px"
                    width="95%"
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

export default AboutUs;