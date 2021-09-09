import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:localStorage.getItem("isLoggedIn") || sessionStorage.getItem('isLoggedIn'),
             products:[]
        }
    }

    componentDidMount = () =>{
        let url="http://localhost:5000/product"
        axios.get(url).then((res) =>{
            if(res.data !== 'none'){
                this.setState({
                    products: res.data
                })
                console.log(this.state.products)
            }else{
                this.setState({
                    products: null
                })
            }
        }).catch((err) =>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row mt-4">
                    <h3>Featured Products</h3>
                    {(() =>{
                                if(this.state.products  != null){
                                    return (
                                            this.state.products.map((product) => (
                                                <div className="col-3 mx-3" key={product._id}>
                                                    <div className="card" style={{width: "18rem"}}>
                                                    <img className="card-img-top" src={"/products/"+ product.image} alt="Card cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <p className="card-text"><strike>{product.mrp}</strike>&nbsp;&nbsp;{product.sellingPrice}</p>
                                                        <Link to={"/product/details/"+ product._id} className="btn btn-primary">Go to Product Page</Link>
                                                    </div>
                                                    </div>
                                                </div>
                                                )))
                                            }else{
                                                return <p>nothing yet</p>
                                            }
                                        })()}
                    </div>

                </div>
            </div>
        )
    }
}

export default Home