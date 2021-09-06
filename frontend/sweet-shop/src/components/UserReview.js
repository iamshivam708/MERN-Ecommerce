import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UserReview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             isLoggedIn: localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn"),
             reviews:[],
        }
    }

    componentDidMount = () =>{
        if (!this.state.isLoggedIn) {
            this.props.history.push("/login");
          } else {
                const url = `http://localhost:5000/user/review/${this.state.id}`;
                axios.get(url).then((res) =>{
                    this.setState({
                        reviews: res.data
                    })
                }).catch(err =>{
                    console.log(err);
                })
          }
    }
    
    render() {
        const {reviews} = this.state
        return (
            <div>
                    {reviews.map((review) =>(
                        <div className="row" key={review._id}>
                            <Link to={"/product/details/"+ review.productId}  style={{textDecoration:'none'}}><div>
                                <h3>{review.review}</h3>
                                <p>{review.stars}</p>
                                <p>{review.productId}</p>
                            </div></Link>
                            <hr/>
                        </div>
                    ))}
            </div>
        );
    }
}

export default UserReview;