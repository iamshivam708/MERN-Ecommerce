import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:"",
             keepSignIn:false,
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
        const user = {
            email: this.state.email,
            password: this.state.password 
        }
        let url = "http://localhost:5000/user/login"
        axios.post(url, user).then((res) =>{
            if(res.data.user === undefined){
                alert('email or password is wrong')
            }else{
                if(this.state.keepSignIn){
                    localStorage.setItem("user", res.data.user)
                    localStorage.setItem("isLoggedIn", 'true')
                    this.props.history.push('/')
                    window.location.reload()
                    
                }else{
                    sessionStorage.setItem("user", res.data.user)
                    sessionStorage.setItem("isLoggedIn", 'true')  
                    this.props.history.push('/')
                    window.location.reload()
                }
            }
        }).catch(err =>{
            console.log(err)
        })
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
    
    render() {
        return (
            <div className="py-2 px-5 mt-5 mb-5">
                <div className="row" style={{background:"#ffcc80", borderRadius:"10%", boxShadow: "5px 5px 10px 5px #ffe0b2"}}>
                    <div className="col-12 col-md-6">
                        <img src="/images/sweet.png" width="100%" alt="..." />
                    </div>
                    <div className="col-12 col-md-6">
                    <h3 className="mt-5 text-center text-white">Login</h3>
                        <form className="container mt-3" method="POST" onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        <label className="mb-2 lead">Email</label>
                                        <input onChange={(e) => this.setState({email:e.target.value})} name="email" className="form-control" type="email"  required/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        <label className="mb-2 lead">Password &nbsp;&nbsp;<i onClick={this.handleHiddenPassword} id="hidden" className="fas fa-eye-slash"></i></label>
                                        <input id="password" onChange={(e) => this.setState({password:e.target.value})} name="password" className="form-control" type="password" required/>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="form-check">
                                        <input onChange={e => this.setState({keepSignIn: 'true'})} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Do you want to stay sign in?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg mb-3" style={{display:'block'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
