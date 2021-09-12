import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class AdminCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories:[]
        }
    }

    componentDidMount = () =>{
        let url = `http://localhost:5000/category`
            axios.get(url).then((res) =>{
                this.setState({
                    categories: res.data
                })
                console.log(this.state.categories)
            }).catch((err) =>{
                console.log(err)
            })
    }

    handleDelete(id){
        return (event) =>{
            event.preventDefault();
            var url= `http://localhost:5000/category/${id}`
            axios.delete(url).then(() =>{
                window.location.reload();
            }).catch((err) =>{
                console.log(err);
            })
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row px-3 py-3" style={{background:'pink'}}>
                    <div className="col-6">
                        <Link to="/admin/dashboard" ><h2>Admin Dashboard</h2></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/category"  className="btn btn-primary" >Add Category</Link>
                    </div>
                </div>
                <div className="row mt-5 px-5 py-5">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map((category) =>(
                            <tr key={category._id}>
                                <td>{category._id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <Link to={"/admin/update/category/"+ category._id} className="btn btn-primary">Update</Link>&nbsp;&nbsp;
                                    <button onClick={this.handleDelete(category._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>                
            </div>
        );
    }
}

export default AdminCategory;