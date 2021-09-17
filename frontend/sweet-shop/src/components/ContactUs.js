import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="contact">
                <div className="container-fluid">
                <div class="px-4 py-5 my-3 text-center">
                    <img src="Images/callCenter.png" height="100" width="150" alt="..." />
                    <h1 class="display-5 fw-bold"><span style={{color:'orange'}}>Contact</span> US</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Contact with us anytime we are open for our customers 24x7.</p>
                    </div>
                </div>
                </div>

                <div className="container-fluid mt-4 mb-5" style={{background:"#fafafa"}}>
                    <div className="row">
                        <div className="col-sm-7 mt-4 px-5 py-5">
                        <div className="mapouter" style={{position:'relative'}}>
                            <div className="gmap_canvas" style={{overflow:'hidden'}}>
                                <iframe title="map" style={{height:"30rem"}} className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=795&amp;height=538&amp;hl=en&amp;q=S-94/16 Block D Rajajipuram Lucknow&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-5 px-5 py-5">
                            <h3 className="text-center">*Fill the form please</h3>
                            <form>
                                <div className="form-group mt-4">
                                    <label>Name</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className="form-group mt-4">
                                    <label>Email</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className="form-group mt-4">
                                    <label>Title</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className="form-group mt-4">
                                    <label>Message</label>
                                    <textarea rows='4' className='form-control'></textarea>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row px-4 py-4">
                        <div className="col-sm-4" align="center" style={{borderRight:"2px solid black"}}>
                        <i class="fas fa-map-marked-alt fa-3x"></i>
                            <h3 className="mt-1">Address</h3>
                            <p>S-4/16 D-Block Rajajipuram Lucknow, India</p>
                        </div>
                        <div className="col-sm-4" align="center" style={{borderRight:"2px solid black"}}>
                        <i class="fas fa-envelope fa-3x"></i>
                            <h3 className="mt-1">Email</h3>
                            <p>shivam7084371026@gmail.com</p>
                        </div>
                        <div className="col-sm-4" align="center">
                        <i class="fas fa-mobile-alt fa-3x"></i>
                            <h3 className="mt-1">Contact</h3>
                            <p>+91 6386667980</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ContactUs;