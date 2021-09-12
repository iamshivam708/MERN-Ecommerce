import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class AdminUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[],
        }
    }

    componentDidMount = () =>{
        let url = `http://localhost:5000/user`
            axios.get(url).then((res) =>{
                this.setState({
                    users: res.data
                })
                console.log(this.state.users)
            }).catch((err) =>{
                console.log(err)
            })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{background:'pink'}}>
                    <div className="col-4">
                        <Link to="/admin/dashboard"><h2>User Dashboard</h2></Link>
                    </div>
                </div>
                <div className="row mt-5">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>House No.</th>
                            <th>Locality</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) =>(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.hashedPassword}</td>
                                <td>{user.phone}</td>
                                <td>{user.houseNo}</td>
                                <td>{user.locality}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default AdminUsers;