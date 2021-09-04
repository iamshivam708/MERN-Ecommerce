import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: this.props.match.params.email,
             user:{},
             isLoggedIn: localStorage.getItem("isLoggedIn") || sessionStorage.getItem('isLoggedIn')
        }
    }

    componentDidMount= () =>{
        if(!this.state.isLoggedIn){
            this.props.history.push('/login')
        }else{
            let url = `http://localhost:5000/user/details/${this.state.email}`
            axios.get(url).then((res) =>{
                this.setState({
                    user: res.data
                })
            }).catch((err) =>{
                console.log(err)
            })
        }
    }
    
    handleDelete = () =>{
        var r = window.confirm("Are u sure u want to delete?");
        if(r){
            let url= `http://localhost:5000/user/${this.state.user._id}`
            axios.delete(url).then((res) =>{
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('isLoggedIn')
                localStorage.removeItem('user');
                localStorage.removeItem('isLoggedIn')
                this.props.history.push('/login')
                window.location.reload();
            }).catch((err) =>{
                console.log(err)
            })
        }else{
            console.log("delete cancelled")
        }
    }
    
    render() {
        const {user} = this.state
        return (
            <div className="container-fluid mt-3">
                <div className="row mt-5">
                    <div className="col-12 col-md-3 text-center" style={{borderRight:'2px solid black'}}>
                        <h3 className="text-center mb-4"><i className="fas fa-chalkboard-teacher"></i>&nbsp;&nbsp;User Details</h3>
                        <p><span className="text-muted">Name: </span><br/>{user.firstName}&nbsp;{user.lastName}</p>
                        <p><span className="text-muted">Email: </span><br/>{user.email}</p>
                        <p><span className="text-muted">Phone: </span><br/>{user.phone}</p>
                        <p><span className="text-muted">Address: </span><br/>{user.houseNo}&nbsp;{user.locality},&nbsp;{user.city}</p>
                        <p>{user.state},&nbsp;{user.country}.</p>
                        <Link to={"/update/user/" + user._id} className="btn btn-primary mt-3"><i className="fas fa-user-edit"></i>&nbsp;&nbsp;Update your account details</Link>
                        <button className="btn btn-danger mt-3" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete account</button>
                    </div>
                    <div className="col-12 col-md-9">
                        <h3 className="text-center"><i className="fas fa-tachometer-alt"></i>&nbsp;&nbsp;Dashboard</h3>
                        <div className="row mt-3 px-5" align="center">
                            <div className="col-5 px-5 py-5" style={{background:'red'}}>
                                <Link to={'/wishlist/'+user._id } style={{textDecoration:"none"}}><h3 className="text-white">Wishlist</h3>
                                <img src="/Images/wishlist.png" width="50%" alt="..." style={{background:"white"}} /></Link>
                            </div>
                            
                            <div className="col-5 px-5 py-5" style={{background:'blue', marginLeft:"7rem"}}>
                                <h3 className="text-white">Purchase History</h3>
                                <img src="/Images/purchasehistory.png" width="50%" alt="..." style={{background:"white"}} />
                            </div>
                            <div className="col-6 mt-4 offset-3 px-5 py-5" style={{background:'red'}}>
                                <h3 className="text-white">Transaction History</h3>
                                <img src="/Images/transactionhistory.png" width="50%" alt="..." style={{background:"white"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customer
