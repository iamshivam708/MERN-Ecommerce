import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:'',
             lastName:"",
             phone:'',
             houseNo:'',
             locality:'',
             city:'',
             state:'',
             country:'',
             isLoggedIn: localStorage.getItem("isLoggedIn") || sessionStorage.getItem('isLoggedIn'),
             id: this.props.match.params.id,
             user:{}
        }
    }

    componentDidMount = () =>{
        if(this.state.isLoggedIn){
            let url = `http://localhost:5000/user/${this.state.id}`
            axios.get(url).then((res) =>{
                this.setState({
                    user: res.data
                })
            }).catch((err) =>{
                console.log(err)
            })
        }else{
            this.history.push('/login')
        }
    }

    handleUpdate = (e) =>{
        e.preventDefault()
        const users = {
            firstName: this.state.firstName || e.target.defaultValue,
            lastName: this.state.lastName || e.target.defaultValue,
            phone: this.state.phone || e.target.defaultValue,
            houseNo: this.state.houseNo || e.target.defaultValue,
            locality:this.state.locality || e.target.defaultValue,
            city: this.state.city || e.target.defaultValue,
            state: this.state.state || e.target.defaultValue,
            country: this.state.country || e.target.defaultValue,
        }
        let url = `http://localhost:5000/user/update/${this.state.id}`
        axios.put(url, users).then(res =>{
            console.log(res.data)
            this.props.history.push("/customer/"+ this.state.user.email)
        }).catch(err =>{
            console.log(err)
        })
    }
    
    render() {
        const {user} = this.state
        return (
            <div>
                <h3 className="mt-5 text-center text-muted">Update User</h3>
                <form className="container mt-3" method="PUT" onSubmit={this.handleUpdate}>
                    <div className='row'>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">First Name</label>
                                <input defaultValue={user.firstName} onChange={e => this.setState({firstName: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Last Name</label>
                                <input defaultValue={user.lastName} onChange={e => this.setState({lastName: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Phone</label>
                                <input defaultValue={user.phone} onChange={e => this.setState({phone: e.target.value})} className="form-control" type="number" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">House No.</label>
                                <input defaultValue={user.houseNo} onChange={e => this.setState({houseNo: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Locality</label>
                                <input defaultValue={user.locality} onChange={e => this.setState({locality: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">City</label>
                                <input defaultValue={user.city} onChange={e => this.setState({city: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">State</label>
                                <input defaultValue={user.state} onChange={e => this.setState({state: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Country</label>
                                <input defaultValue={user.country} onChange={e => this.setState({country: e.target.value})} className="form-control" type="text" style={{maxWidth: '80vw'}} required/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg ">Update</button>
                </form>
            </div>
        )
    }
}

export default Signup
