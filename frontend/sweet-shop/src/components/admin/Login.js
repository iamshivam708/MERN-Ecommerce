import React, { Component } from 'react';
import axios from 'axios'

class AdminLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const admin = {
            email: this.state.email, 
            password: this.state.password
        }
        var url="http://localhost:5000/admin/login";
        axios.post(url, admin).then((res) =>{
            localStorage.setItem("adminEmail",res.data.user);
            localStorage.setItem("isAdminLoggedIn", true);
            this.props.history.push("/admin/dashboard");
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="container mt-5">
                <h1 className="mt-3 text-center">Admin login</h1>
                <form method="post" align="center" className="mt-3" onSubmit={this.handleSubmit}>
                    <div className="form-floating">
                        <input onChange={e => this.setState({email: e.target.value})} type="email" className="form-control mt-2" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={e => this.setState({password: e.target.value})} type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                        <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form> 
            </div>
        );
    }
}

export default AdminLogin;