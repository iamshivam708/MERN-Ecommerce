import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UpdateProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:this.props.match.params.id,
             productId:'',
             keyFeatures:'',
             seller:'',
             description:'',
             manufacturingDetails:'',
             productDetails:[]
        }
    }

    componentDidMount = () =>{
        var url =  `http://localhost:5000/productDetails/${this.state.id}`
        axios.get(url).then((res) =>{
            this.setState({
                productDetails: res.data
            })
        }).catch(err =>{
            console.log(err);
        })
    }

    handleUpdate = (e) =>{
        e.preventDefault();
        var details = {
             productId:this.state.productId,
             keyFeatures:this.state.keyFeatures,
             seller:this.state.seller,
             description:this.state.description,
             manufacturingDetails:this.state.manufacturingDetails
        }

        var url = `http://localhost:5000/productDetails/try/${this.state.id}`;
        axios.post(url, details).then(() =>{
            this.props.history.push('/admin/productDetails');
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        const {productDetails} = this.state;
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{ background: "pink" }}>
                <div className="col-6">
                    <Link to="/admin/productDetails" className="nav-link">
                    <h3>Product Details Dashboard</h3>
                    </Link>
                </div>
                </div>
                <div className="row mt-5 px-5 py-5">
                    <form method="POST" onSubmit={this.handleUpdate} id="form" encType="multipart/form-data" >
                        <div className="mb-2">
                            <label>Product Id</label>
                            <input name="productId" defaultValue={productDetails.productId} onChange={e => this.setState({productId: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Key Features</label>
                            <input name="keyFeatures" defaultValue={productDetails.keyFeatures} onChange={e => this.setState({keyFeatures: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Seller Details</label>
                            <input name="seller" defaultValue={productDetails.seller} onChange={e => this.setState({seller: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Description</label>
                            <input name="description" defaultValue={productDetails.description} onChange={e => this.setState({description: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <label>Manufacturing Details</label>
                            <input name="manufacturingDetails" defaultValue={productDetails.manufacturingDetails} onChange={e => this.setState({manufacturingDetails: e.target.value})} type="text" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateProductDetails;