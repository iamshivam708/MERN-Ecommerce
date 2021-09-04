import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:'',
             lastName:"",
             email:'',
             phone:'',
             houseNo:'',
             locality:'',
             city:'',
             state:'',
             country:'',
             password:'',
             cpassword:'',
             isLoggedIn: localStorage.getItem("isLoggedIn") || sessionStorage.getItem('isLoggedIn')
        }
    }

    componentDidMount = () =>{
        if(this.state.isLoggedIn){
            this.props.history.push('/')
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password === this.state.cpassword){
            let user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                houseNo: this.state.houseNo,
                locality:this.state.locality,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                hashedPassword: this.state.password,
                isAdmin:false
           }
           let url = "http://localhost:5000/user/signup"
            axios.post(url, user).then(res =>{
                this.props.history.push("/login");
            }).catch(err =>{
                console.log(err)
            })
        }else{
            console.error("password dose not match")
        }
    }

    handleHiddenPassword = () =>{
        var logo = document.getElementById('hidden')
        var pd = document.getElementById('password')
        if(logo.classList.contains('fa-eye-slash')){
            logo.classList.remove('fa-eye-slash')
            logo.classList.add('fa-eye')
            pd.type="text"
        }else{
            logo.classList.add('fa-eye-slash')
            logo.classList.remove('fa-eye')
            pd.type="password"
        }
    }

    handleHidePassword = () =>{
        var logo = document.getElementById('hide')
        var pd = document.getElementById('cpassword')
        if(logo.classList.contains('fa-eye-slash')){
            logo.classList.remove('fa-eye-slash')
            logo.classList.add('fa-eye')
            pd.type="text"
        }else{
            logo.classList.add('fa-eye-slash')
            logo.classList.remove('fa-eye')
            pd.type="password"
        }
    }
    
    render() {
        return (
            <div className="container mt-5 mb-5 px-5 py-5" style={{background:"#ffcc80", borderRadius:"10%", boxShadow: "5px 10px 10px 10px #ffe0b2"}}>
                <h3 className="text-center text-white">Signup</h3>
                <form className="container mt-3" method="POST" onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">First Name</label>
                                <input onChange={e => this.setState({firstName: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Last Name</label>
                                <input onChange={e => this.setState({lastName: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Email</label>
                                <input onChange={e => this.setState({email: e.target.value})} className="form-control" type="email" required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Phone</label>
                                <input onChange={e => this.setState({phone: e.target.value})} className="form-control" type="number" required/>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">House No.</label>
                                <input onChange={e => this.setState({houseNo: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Locality</label>
                                <input onChange={e => this.setState({locality: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">City</label>
                                <input onChange={e => this.setState({city: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">State</label>
                                <input onChange={e => this.setState({state: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Country</label>
                                <input onChange={e => this.setState({country: e.target.value})} className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Password &nbsp;&nbsp;<i onClick={this.handleHiddenPassword} id="hidden" className="fas fa-eye-slash"></i></label>
                                <input id="password" onChange={e => this.setState({password: e.target.value})} className="form-control" type="password" required/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group mb-3">
                                <label className="mb-2 lead">Confirm Password &nbsp;&nbsp;<i onClick={this.handleHidePassword} id="hide" className="fas fa-eye-slash"></i></label>
                                <input id="cpassword" onChange={e => this.setState({cpassword: e.target.value})} className="form-control" type="password" required/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{display:'block'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup
